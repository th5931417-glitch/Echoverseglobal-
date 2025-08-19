import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// ✅ Home route
app.get("/", (req, res) => {
  res.send("🌍 EchoVerseGlobal API is running...");
});

// ✅ TTS API route
app.post("/api/tts", async (req, res) => {
  try {
    const { text, voice_id } = req.body;

    if (!text || !voice_id) {
      return res.status(400).json({ error: "Missing text or voice_id" });
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": process.env.ELEVENLABS_API_KEY   // 🔑 তোমার API Key vercel এ env variable এ দিতে হবে
      },
      body: JSON.stringify({
        text: text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "TTS request failed" });
    }

    // ElevenLabs থেকে Audio stream আসবে (mp3/wav)
    const audioBuffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Server start (for local test)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 EchoVerseGlobal API running on port ${PORT}`);
});

export default app; // Vercel এর জন্য export করতে হবে
