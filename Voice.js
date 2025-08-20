// voice.js

const voices = {
  English: {
    male: ["VOICE_ID_1", "VOICE_ID_2", "VOICE_ID_3"],
    female: ["VOICE_ID_4", "VOICE_ID_5"]
  },
  Chinese_Mandarin: {
    male: ["VOICE_ID_6", "VOICE_ID_7", "VOICE_ID_8"],
    female: ["VOICE_ID_9", "VOICE_ID_10"]
  },
  Hindi: {
    male: ["VOICE_ID_11", "VOICE_ID_12", "VOICE_ID_13"],
    female: ["VOICE_ID_14", "VOICE_ID_15"]
  },
  Spanish: {
    male: ["VOICE_ID_16", "VOICE_ID_17", "VOICE_ID_18"],
    female: ["VOICE_ID_19", "VOICE_ID_20"]
  },
  Arabic: {
    male: ["VOICE_ID_21", "VOICE_ID_22", "VOICE_ID_23"],
    female: ["VOICE_ID_24", "VOICE_ID_25"]
  },
  Bengali: {
    male: ["VOICE_ID_26", "VOICE_ID_27", "VOICE_ID_28"],
    female: ["VOICE_ID_29", "VOICE_ID_30"]
  },
  Portuguese: {
    male: ["VOICE_ID_31", "VOICE_ID_32", "VOICE_ID_33"],
    female: ["VOICE_ID_34", "VOICE_ID_35"]
  },
  Russian: {
    male: ["VOICE_ID_36", "VOICE_ID_37", "VOICE_ID_38"],
    female: ["VOICE_ID_39", "VOICE_ID_40"]
  },
  Japanese: {
    male: ["VOICE_ID_41", "VOICE_ID_42", "VOICE_ID_43"],
    female: ["VOICE_ID_44", "VOICE_ID_45"]
  },
  Punjabi: {
    male: ["VOICE_ID_46", "VOICE_ID_47", "VOICE_ID_48"],
    female: ["VOICE_ID_49", "VOICE_ID_50"]
  },
  German: {
    male: ["VOICE_ID_51", "VOICE_ID_52", "VOICE_ID_53"],
    female: ["VOICE_ID_54", "VOICE_ID_55"]
  },
  Korean: {
    male: ["VOICE_ID_56", "VOICE_ID_57", "VOICE_ID_58"],
    female: ["VOICE_ID_59", "VOICE_ID_60"]
  },
  French: {
    male: ["VOICE_ID_61", "VOICE_ID_62", "VOICE_ID_63"],
    female: ["VOICE_ID_64", "VOICE_ID_65"]
  },
  Turkish: {
    male: ["VOICE_ID_66", "VOICE_ID_67", "VOICE_ID_68"],
    female: ["VOICE_ID_69", "VOICE_ID_70"]
  },
  Vietnamese: {
    male: ["VOICE_ID_71", "VOICE_ID_72", "VOICE_ID_73"],
    female: ["VOICE_ID_74", "VOICE_ID_75"]
  },
  Marathi: {
    male: ["VOICE_ID_76", "VOICE_ID_77", "VOICE_ID_78"],
    female: ["VOICE_ID_79", "VOICE_ID_80"]
  },
  Urdu: {
    male: ["VOICE_ID_81", "VOICE_ID_82", "VOICE_ID_83"],
    female: ["VOICE_ID_84", "VOICE_ID_85"]
  },
  Tamil: {
    male: ["VOICE_ID_86", "VOICE_ID_87", "VOICE_ID_88"],
    female: ["VOICE_ID_89", "VOICE_ID_90"]
  },
  Italian: {
    male: ["VOICE_ID_91", "VOICE_ID_92", "VOICE_ID_93"],
    female: ["VOICE_ID_94", "VOICE_ID_95"]
  },
  Thai: {
    male: ["VOICE_ID_96", "VOICE_ID_97", "VOICE_ID_98"],
    female: ["VOICE_ID_99", "VOICE_ID_100"]
  },
  Gujarati: {
    male: ["VOICE_ID_101", "VOICE_ID_102", "VOICE_ID_103"],
    female: ["VOICE_ID_104", "VOICE_ID_105"]
  },
  Malayalam: {
    male: ["VOICE_ID_106", "VOICE_ID_107", "VOICE_ID_108"],
    female: ["VOICE_ID_109", "VOICE_ID_110"]
  },
  Persian_Farsi: {
    male: ["VOICE_ID_111", "VOICE_ID_112", "VOICE_ID_113"],
    female: ["VOICE_ID_114", "VOICE_ID_115"]
  },
  Kannada: {
    male: ["VOICE_ID_116", "VOICE_ID_117", "VOICE_ID_118"],
    female: ["VOICE_ID_119", "VOICE_ID_120"]
  },
  Malay: {
    male: ["VOICE_ID_121", "VOICE_ID_122", "VOICE_ID_123"],
    female: ["VOICE_ID_124", "VOICE_ID_125"]
  },
  Indonesian: {
    male: ["VOICE_ID_126", "VOICE_ID_127", "VOICE_ID_128"],
    female: ["VOICE_ID_129", "VOICE_ID_130"]
  },
  Ukrainian: {
    male: ["VOICE_ID_131", "VOICE_ID_132", "VOICE_ID_133"],
    female: ["VOICE_ID_134", "VOICE_ID_135"]
  },
  Dutch: {
    male: ["VOICE_ID_136", "VOICE_ID_137", "VOICE_ID_138"],
    female: ["VOICE_ID_139", "VOICE_ID_140"]
  },
  Hebrew: {
    male: ["VOICE_ID_141", "VOICE_ID_142", "VOICE_ID_143"],
    female: ["VOICE_ID_144", "VOICE_ID_145"]
  }
};

// Default voice ID (set this to a real, working voice ID)
const DEFAULT_VOICE_ID = "DEFAULT_VOICE_ID_HERE";

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

