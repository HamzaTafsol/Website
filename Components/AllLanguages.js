const allCountries =[
    {
      "name": "United Arab Emirates",
      "code": "AE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
      "language": "arabic"
    },
    {
      "name": "Afghanistan",
      "code": "AF",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
      "language": "pashto"
    },
    {
      "name": "Albania",
      "code": "AL",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
      "language": "albanian"
    },
    {
      "name": "Armenia",
      "code": "AM",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
      "language": "armenian"
    },
    {
      "name": "Argentina",
      "code": "AR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
      "language": "spanish"
    },
    {
      "name": "Austria",
      "code": "AT",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
      "language": "german"
    },
    {
      "name": "Australia",
      "code": "AU",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
      "language": "english"
    },
    {
      "name": "Azerbaijan",
      "code": "AZ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
      "language": "azeri (latin)"
    },
    {
      "name": "Bangladesh",
      "code": "BD",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
      "language": "bengali"
    },
    {
      "name": "Belgium",
      "code": "BE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
      "language": "french"
    },
    {
      "name": "Bulgaria",
      "code": "BG",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
      "language": "bulgarian"
    },
    {
      "name": "Bahrain",
      "code": "BH",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
      "language": "arabic"
    },
    {
      "name": "Brunei",
      "code": "BN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
      "language": "malay"
    },
    {
      "name": "Bolivia",
      "code": "BO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
      "language": "spanish"
    },
    {
      "name": "Brazil",
      "code": "BR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
      "language": "portuguese"
    },
    {
      "name": "Belarus",
      "code": "BY",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
      "language": "belarusian"
    },
    {
      "name": "Belize",
      "code": "BZ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
      "language": "english"
    },
    {
      "name": "Canada",
      "code": "CA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
      "language": "mohawk"
    },
    {
      "name": "Switzerland",
      "code": "CH",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
      "language": "romansh"
    },
    {
      "name": "Chile",
      "code": "CL",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
      "language": "spanish"
    },
    {
      "name": "China",
      "code": "CN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
      "language": "yi"
    },
    {
      "name": "Colombia",
      "code": "CO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
      "language": "spanish"
    },
    {
      "name": "Costa Rica",
      "code": "CR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
      "language": "spanish"
    },
    {
      "name": "Germany",
      "code": "DE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
      "language": "upper sorbian"
    },
    {
      "name": "Denmark",
      "code": "DK",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
      "language": "danish"
    },
    {
      "name": "Dominican Republic",
      "code": "DO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
      "language": "spanish"
    },
    {
      "name": "Algeria",
      "code": "DZ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
      "language": "tamazight (latin)"
    },
    {
      "name": "Ecuador",
      "code": "EC",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
      "language": "spanish"
    },
    {
      "name": "Estonia",
      "code": "EE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
      "language": "estonian"
    },
    {
      "name": "Egypt",
      "code": "EG",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
      "language": "arabic"
    },
    {
      "name": "Spain",
      "code": "ES",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
      "language": "spanish"
    },
    {
      "name": "Ethiopia",
      "code": "ET",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
      "language": "amharic"
    },
    {
      "name": "Finland",
      "code": "FI",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
      "language": "swedish"
    },
    {
      "name": "Faroe Islands",
      "code": "FO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
      "language": "faroese"
    },
    {
      "name": "France",
      "code": "FR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
      "language": "occitan"
    },
    {
      "name": "United Kingdom",
      "code": "GB",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
      "language": "welsh"
    },
    {
      "name": "Georgia",
      "code": "GE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
      "language": "georgian"
    },
    {
      "name": "Greenland",
      "code": "GL",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
      "language": "greenlandic"
    },
    {
      "name": "Greece",
      "code": "GR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
      "language": "greek"
    },
    {
      "name": "Guatemala",
      "code": "GT",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
      "language": "spanish"
    },
    {
      "name": "Honduras",
      "code": "HN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
      "language": "spanish"
    },
    {
      "name": "Croatia",
      "code": "HR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
      "language": "croatian"
    },
    {
      "name": "Hungary",
      "code": "HU",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
      "language": "hungarian"
    },
    {
      "name": "Indonesia",
      "code": "ID",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
      "language": "indonesian"
    },
    {
      "name": "Ireland",
      "code": "IE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
      "language": "irish"
    },
    {
      "name": "Israel",
      "code": "IL",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
      "language": "hebrew"
    },
    {
      "name": "India",
      "code": "IN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
      "language": "telugu"
    },
    {
      "name": "Iraq",
      "code": "IQ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
      "language": "arabic"
    },
    {
      "name": "Iran",
      "code": "IR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
      "language": "persian"
    },
    {
      "name": "Iceland",
      "code": "IS",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
      "language": "icelandic"
    },
    {
      "name": "Italy",
      "code": "IT",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
      "language": "italian"
    },
    {
      "name": "Jamaica",
      "code": "JM",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
      "language": "english"
    },
    {
      "name": "Jordan",
      "code": "JO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
      "language": "arabic"
    },
    {
      "name": "Japan",
      "code": "JP",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
      "language": "japanese"
    },
    {
      "name": "Kenya",
      "code": "KE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
      "language": "kiswahili"
    },
    {
      "name": "Kyrgyzstan",
      "code": "KG",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
      "language": "kyrgyz"
    },
    {
      "name": "Cambodia",
      "code": "KH",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
      "language": "khmer"
    },
    {
      "name": "South Korea",
      "code": "KR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
      "language": "korean"
    },
    {
      "name": "Kuwait",
      "code": "KW",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
      "language": "arabic"
    },
    {
      "name": "Kazakhstan",
      "code": "KZ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
      "language": "kazakh"
    },
    {
      "name": "Laos",
      "code": "LA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
      "language": "lao"
    },
    {
      "name": "Lebanon",
      "code": "LB",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
      "language": "arabic"
    },
    {
      "name": "Liechtenstein",
      "code": "LI",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
      "language": "german"
    },
    {
      "name": "Sri Lanka",
      "code": "LK",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
      "language": "sinhala"
    },
    {
      "name": "Lithuania",
      "code": "LT",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
      "language": "lithuanian"
    },
    {
      "name": "Luxembourg",
      "code": "LU",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
      "language": "luxembourgish"
    },
    {
      "name": "Latvia",
      "code": "LV",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
      "language": "latvian"
    },
    {
      "name": "Libya",
      "code": "LY",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
      "language": "arabic"
    },
    {
      "name": "Morocco",
      "code": "MA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
      "language": "arabic"
    },
    {
      "name": "Monaco",
      "code": "MC",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
      "language": "french"
    },
    {
      "name": "Montenegro",
      "code": "ME",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
      "language": "serbian (latin)"
    },
    {
      "name": "Mongolia",
      "code": "MN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
      "language": "mongolian (cyrillic)"
    },
    {
      "name": "Malta",
      "code": "MT",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
      "language": "maltese"
    },
    {
      "name": "Maldives",
      "code": "MV",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
      "language": "divehi"
    },
    {
      "name": "Mexico",
      "code": "MX",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
      "language": "spanish"
    },
    {
      "name": "Malaysia",
      "code": "MY",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
      "language": "malay"
    },
    {
      "name": "Nigeria",
      "code": "NG",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
      "language": "yoruba"
    },
    {
      "name": "Nicaragua",
      "code": "NI",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
      "language": "spanish"
    },
    {
      "name": "Netherlands",
      "code": "NL",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
      "language": "frisian"
    },
    {
      "name": "Norway",
      "code": "NO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
      "language": "sami (southern)"
    },
    {
      "name": "Nepal",
      "code": "NP",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
      "language": "nepali"
    },
    {
      "name": "New Zealand",
      "code": "NZ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
      "language": "maori"
    },
    {
      "name": "Oman",
      "code": "OM",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
      "language": "arabic"
    },
    {
      "name": "Panama",
      "code": "PA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
      "language": "spanish"
    },
    {
      "name": "Peru",
      "code": "PE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
      "language": "spanish"
    },
    {
      "name": "Philippines",
      "code": "PH",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
      "language": "english"
    },
    {
      "name": "Pakistan",
      "code": "PK",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
      "language": "urdu"
    },
    {
      "name": "Poland",
      "code": "PL",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
      "language": "polish"
    },
    {
      "name": "Puerto Rico",
      "code": "PR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
      "language": "spanish"
    },
    {
      "name": "Portugal",
      "code": "PT",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
      "language": "portuguese"
    },
    {
      "name": "Paraguay",
      "code": "PY",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
      "language": "spanish"
    },
    {
      "name": "Qatar",
      "code": "QA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
      "language": "arabic"
    },
    {
      "name": "Romania",
      "code": "RO",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
      "language": "romanian"
    },
    {
      "name": "Serbia",
      "code": "RS",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
      "language": "serbian (latin)"
    },
    {
      "name": "Russia",
      "code": "RU",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
      "language": "yakut"
    },
    {
      "name": "Rwanda",
      "code": "RW",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
      "language": "kinyarwanda"
    },
    {
      "name": "Saudi Arabia",
      "code": "SA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
      "language": "arabic"
    },
    {
      "name": "Sweden",
      "code": "SE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
      "language": "swedish"
    },
    {
      "name": "Singapore",
      "code": "SG",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
      "language": "english"
    },
    {
      "name": "Slovenia",
      "code": "SI",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
      "language": "slovenian"
    },
    {
      "name": "Slovakia",
      "code": "SK",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
      "language": "slovak"
    },
    {
      "name": "Senegal",
      "code": "SN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
      "language": "wolof"
    },
    {
      "name": "El Salvador",
      "code": "SV",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
      "language": "spanish"
    },
    {
      "name": "Syria",
      "code": "SY",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
      "language": "syriac"
    },
    {
      "name": "Thailand",
      "code": "TH",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
      "language": "thai"
    },
    {
      "name": "Tajikistan",
      "code": "TJ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
      "language": "tajik (cyrillic)"
    },
    {
      "name": "Turkmenistan",
      "code": "TM",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
      "language": "turkmen"
    },
    {
      "name": "Tunisia",
      "code": "TN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
      "language": "arabic"
    },
    {
      "name": "Turkey",
      "code": "TR",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
      "language": "turkish"
    },
    {
      "name": "Taiwan",
      "code": "TW",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
      "language": "chinese (traditional) legacy"
    },
    {
      "name": "Ukraine",
      "code": "UA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
      "language": "ukrainian"
    },
    {
      "name": "United States",
      "code": "US",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
      "language": "english"
    },
    {
      "name": "Uruguay",
      "code": "UY",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
      "language": "spanish"
    },
    {
      "name": "Uzbekistan",
      "code": "UZ",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
      "language": "uzbek (latin)"
    },
    {
      "name": "Venezuela",
      "code": "VE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
      "language": "spanish"
    },
    {
      "name": "Vietnam",
      "code": "VN",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
      "language": "vietnamese"
    },
    {
      "name": "Yemen",
      "code": "YE",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
      "language": "arabic"
    },
    {
      "name": "South Africa",
      "code": "ZA",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
      "language": "setswana"
    },
    {
      "name": "Zimbabwe",
      "code": "ZW",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
      "language": "english"
    }
  ]
  export default  allCountries