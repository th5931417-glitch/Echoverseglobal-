// voice.js

const voices = {
  English: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Chinese_Mandarin: {
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
  Persian_Farsi: {
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

// Default voice ID (set this to a real, working voice ID)
const DEFAULT_VOICE_ID = "";

// Error-free, fallback-ready voice selection function
function getVoice(language, gender, index = 0) {
  const lang = voices[language];
  if (!lang) {
    console.warn(`Language "${language}" not found. Using default voice.`);
    return DEFAULT_VOICE_ID;
  }
  const genderVoices = lang[gender];
  if (!genderVoices || genderVoices.length === 0) {
    console.warn(`No voices found for gender "${gender}" in language "${language}". Using default voice.`);
    return DEFAULT_VOICE_ID;
  }
  const voice = genderVoices[index % genderVoices.length];
  if (!voice) {
    console.warn(`Invalid or empty voice ID found. Using default voice.`);
    return DEFAULT_VOICE_ID;
  }
  return voice;
}

export { voices, getVoice };
