// voice.js

const voices = {
  English: {
    male: ["EtsjFhqOd0YWASYxlmIg", "26OmzLQMdT4z7VEPURkY", "EtsjFhqOd0YWASYxlmIg"],
    female: ["QNYkS0l1ELiFod9u3b0X", ""]
  },
  Chinese: {
    male: ["fQj4gJSexpu8RDE2Ii5m", "M0TrFmFeBJS9H4xzdk8Z", "D9bZgM9Er0PhIxuW9Jqa"],
    female: ["9lHjugDhwqoxA5MhX0az", "Ca5bKgudqKJzq8YRFoAz"]
  },
  Hindi: {
    male: ["PLFXYRTU74HpuNdj6oDl", "fKe9ZDqkOtN9VMLdbWJ5", "WyjIvPRJbxeuLCf0u23f"],
    female: ["MF4J4IDTRo0AxOO4dpFR", "mfMM3ijQgz8QtMeKifko"]
  },
  Spanish: {
    male: ["P951amuWPNCJ0L15rFyC", "", ""],
    female: ["p4w8j6zCUDJ0nGJ3okKs" ""]
  },
  Arabic: {
    male: ["G1HOkzin3NMwRHSq60UI", "LXrTqFIgiubkrMkwvOUr", ""],
    female: ["tavIIPLplRB883FzWU0V", ""]
  },
  Bengali: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Portuguese: {
    male: ["x6uRgOliu4lpcrqMH3s1", "oi8rgjIfLgJRsQ6rbZh3", "5p9IbzcK4R8rN1fpGdMF"],
    female: ["iLelOQ6m5mpSeNH8fRob", ""]
  },
  Russian: {
    male: ["qJBO8ZmKp4te7NTtYgzz", "kwajW3Xh5svCeKU5ky2S", ""],
    female: ["ymDCYd8puC7gYjxIamPt", "AB9XsbSA4eLG12t2myjN"]
  },
  Japanese: {
    male: ["Mv8AjrYZCBkdsmDHNwcB", "", ""],
    female: ["gARvXPexe5VF3cKZBian", "K0Ed6MJoTaGpgw9KVojs"]
  },
  Punjabi: {
    male: ["RgArqterc5zx6RLQqzcs", "", ""],
    female: ["", ""]
  },
  German: {
    male: ["IWm8DnJ4NGjFI7QAM5lM", "Bln19NIJw0MUD9YPzbVE", ""],
    female: ["AnvlJBAqSLDzEevYr9Ap", "nF7t9cuYo0u3kuVI9q4B"]
  },
  Korean: {
    male: ["ZJCNdZEjYwkOElxugmW2", "1W00IGEmNmwmsDeYy7ag", ""],
    female: ["AW5wrnG1jVizOYY7R1Oo", ""]
  },
  French: {
    male: ["sH2x8ewMTSa5QBBr0dGb", "IPgYtHTNLjC7Bq7IPHrm", ""],
    female: ["SmWACbi37pETyxxMhSpc", "xNtG3W2oqJs0cJZuTyBc"]
  },
  Turkish: {
    male: ["5HEFEBb9WCCpCdgZE77B", "cKRZrRQ568GLWlYVdw9z", "EkeP1ItmVwGXXgkYF3DL"],
    female: ["TASY7VCrU29rEMoYFTGG", "BlZK9tHPU6XXjwOSIiYA"]
  },
  Vietnamese: {
    male: ["3VnrjnYrskPMDsapTr8X", "JxmKvRaNYFidf0N27Vng", ""],
    female: ["d5HVupAWCwe4e6GvMCAL", ""]
  },
  Marathi: {
    male: ["9pKX7TwfPxl7p2PNZQ1B", "", ""],
    female: ["", ""]
  },
  Urdu: {
    male: ["9cI5mhBtM4WtQ9Fo6jWQ", "kLuXkg0zRFuSas1JFmMT", "kD4dEWy2fbcyXlge6iHh"],
    female: ["", ""]
  },
  Tamil: {
    male: ["jsxww9ngE2fwXHlkWgkm", "yt40uMsmnhVftG8ngHsz", ""],
    female: ["izSi63MW0URDnszWlZMX", "gqFUMFHCD2nbbcYVtPGB"]
  },
  Italian: {
    male: ["13Cuh3NuYvWOVQtLbRN8", "W71zT1VwIFFx3mMGH2uZ", ""],
    female: ["fQmr8dTaOQq116mo2X7F", "201hPjDVu4Q5DUV7tMQJ"]
  },
  Thai: {
    male: ["xVv8qLTTnsYnrysc2Lx4", "Cv5COv8jUyjdkmmIHDdL", ""],
    female: ["5EtawPduB139avoMLQgH", ""]
  },
  Gujarati: {
    male: ["1tyCkDKmBd1gCvRcimhT", "nlRBcodAo9LA6ChkhS0i", "E2bgV4fdtiboH3Y1CEuQ"],
    female: ["", ""]
  },
  Malayalam: {
    male: ["", "", ""],
    female: ["qAJVXEQ6QgjOQ25KuoU8", ""]
  },
  Persian: {
    male: ["PleK417YVMP2SUWm8Btb", "BognUUMX6W1qmZKB2TOw", ""],
    female: ["NZiuR1C6kVMSWHG27sIM", "WwAjIyMBDBNl1dvId9Xe"]
  },
  Kannada: {
    male: ["", "", ""],
    female: ["", ""]
  },
  Malay: {
    male: ["NpVSXJvYSdIbjOaMbShj", "", ""],
    female: ["BeIxObt4dYBRJLYoe1hU", "UcqZLa941Kkt8ZhEEybf"]
  },
  Indonesian: {
    male: ["1k39YpzqXZn52BgyLyGO", "2k2NyISF1WNbjiJRa66a", ""],
    female: ["OKanSStS6li6xyU1WdXa", "iWydkXKoiVtvdn4vLKp9"]
  },
  Ukrainian: {
    male: ["9Sj8ugvpK1DmcAXyvi3a", "zp2G1GqPvAg5KDA55fjC", ""],
    female: ["nCqaTnIbLdME87OuQaZY", "ARxhnQPZCfSLpMBASSii"]
  },
  Dutch: {
    male: ["XSQQLeoHwWnBv8tjJ1T7", "UNBIyLbtFB9k7FKW8wJv", ""],
    female: ["YUdpWWny7k5yb4QCeweX", "OlBRrVAItyi00MuGMbna"]
  },
  Hebrew: {
    male: ["", ""],
    female: ["", ""]
  }
};

// Default voice ID (set this to a real, working voice ID)
const DEFAULT_VOICE_ID = "QNYkS0l1ELiFod9u3b0X";

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

