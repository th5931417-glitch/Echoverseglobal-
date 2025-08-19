js
/**
 * EchoVerseGlobal API
 * Node.js Express server for ElevenLabs Text-to-Speech
 * Production-ready for Kodular and any mobile/web client
 */

const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json({limit: "2mb"}));

// --------- TTS ROUTE: POST /api/voice ---------
app.post("/api/voice", async (req, res) => {
  const { text, voiceId, model_id, voice_settings, output_format } = req.body;

  if (!text || !voiceId) {
    return res.status(400).json({ error: "Text and voiceId are required" });
  }

  try {
    // Build ElevenLabs API URL
    let url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
    // You can add query params if needed

    // Prepare Payload
    const payload = {
      text: text,
      model_id: model_id || "eleven_turbo_v2_5",
      voice_settings: voice_settings || { stability: 0.6, similarity_boost: 0.8 },
      output_format: output_format || "mp3_44100_128"
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY || "", // set in Vercel/ENV
        "Accept": "audio/mpeg",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const audio = await response.arrayBuffer();
    res.set("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audio));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --------- VOICES ROUTE: GET /api/voices ---------
app.get("/api/voices", async (req, res) => {
  try {
    const response = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY || ""
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    res.json({
      success: true,
      total: data.voices.length,
      voices: data.voices
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --------- HEALTH ROUTE: GET / ---------
app.get("/", (req, res) => {
  res.send("✅ EchoVerseGlobal API is running... Global AI Voice Service");
});

// --------- Vercel Export ---------
module.exports = app;
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 EchoVerseGlobal running at http://localhost:${PORT}`));
}
