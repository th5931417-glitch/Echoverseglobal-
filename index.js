js
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

app.get('/', (req, res) => {
  res.send('✅ EchoVerseGlobal API is running...');
});

app.post('/api/tts', async (req, res) => {
  try {
    const { text, voice = 'Rachel' } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + encodeURIComponent(voice), {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const audioBuffer = await response.arrayBuffer();
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.byteLength
    });
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
