import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

// Configure CORS for all origins (you can restrict it by changing origin if needed)
app.use(cors());

app.use(express.json());

const voices = {
  English: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Chinese: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Hindi: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Spanish: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Arabic: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Bengali: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Portuguese: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Russian: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Japanese: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Punjabi: {
    male: ["", "", ""],
    female: ["", ""]
  },
  German: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Korean: {
    male: ["", "", ""],
    female: ["", ""]
  },
  French: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Turkish: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Vietnamese: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Marathi: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Urdu: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Tamil: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Italian: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Thai: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Gujarati: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Malayalam: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Persian: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Kannada: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Malay: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Indonesian: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Ukrainian: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Dutch: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Hebrew: {
    male: ["", "", ""],
    female: ["", ""]
  }
};

const DEFAULT_VOICE_ID = "<YOUR_DEFAULT_VOICE_ID>";

function getVoice(language, gender, index = 0) {
  const lang = voices[language];
  if (!lang) {
    console.warn(`Language "${language}" not found. Using default voice.`);
    return DEFAULT_VOICE_ID;
  }
  const genderVoices = lang[gender];
  if (!genderVoices || genderVoices.length === 0) {
    console.warn(`No voices for gender "${gender}" in language "${language}". Using default voice.`);
    return DEFAULT_VOICE_ID;
  }
  const voice = genderVoices[index % genderVoices.length];
  if (!voice) {
    console.warn(`Invalid or empty voice ID found. Using default voice.`);
    return DEFAULT_VOICE_ID;
  }
  return voice;
}

app.post("/api/tts", async (req, res) => {
  try {
    let { text, language, gender, index } = req.body;

    if (!text) {
      return res.status(400).json({ error: "❌ Text is required" });
    }

    language = language || "English";
    gender = gender || "male";
    index = index === undefined ? 0 : index;

    const voice_id = getVoice(language, gender, index);

    if (!voice_id || voice_id === "") {
      return res.status(400).json({ error: "❌ Voice ID not found" });
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": process.env.ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: "❌ ElevenLabs API failed", details: errorText });
    }

    const audioBuffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error("🔥 Server Error:", error);
    res.status(500).json({ error: "❌ Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("✅ EchoVerseGlobal API Live!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
    
