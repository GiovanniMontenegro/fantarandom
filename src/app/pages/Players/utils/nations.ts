import getCountryISO2 from 'country-iso-3-to-2';

const nationMapping = {
  ABW: 'Aruba',
  AFG: 'Afghanistan',
  AGO: 'Angola',
  AIA: 'Anguilla',
  ALA: 'Isole Aland',
  ALB: 'Albania',
  AND: 'Andorra',
  ARE: 'Emirati Arabi Uniti',
  ARG: 'Argentina',
  ARM: 'Armenia',
  ASM: 'Samoa americane',
  ATG: 'Antigua e Barbuda',
  AUS: 'Australia',
  AUT: 'Austria',
  AZE: 'Azerbaijan',
  BDI: 'Burundi',
  BEL: 'Belgio',
  BEN: 'Benin',
  BES: 'Bonaire, Saint Eustatius e Saba',
  BFA: 'Burkina Faso',
  BGD: 'Bangladesh',
  BGR: 'Bulgaria',
  BHR: 'Bahrain',
  BHS: 'Bahamas',
  BIH: 'Bosnia Erzegovina',
  BLM: 'Saint-Barthélemy',
  BLR: 'Bielorussia',
  BLZ: 'Belize',
  BMU: 'Bermuda',
  BOL: 'Bolivia, Stato Plurinazionale di',
  BRA: 'Brasile',
  BRB: 'Barbados',
  BRN: 'Brunei Darussalam',
  BTN: 'Bhutan',
  BWA: 'Botswana',
  CAF: 'Repubblica Centrafricana',
  CAN: 'Canada',
  CCK: 'Cocos (keeling) Isole',
  CHE: 'Svizzera',
  CHL: 'Cile',
  CHN: 'Cina',
  CIV: "Costa d'Avorio",
  CMR: 'Camerun',
  COD: 'Congo, Repubblica Democratica del',
  COG: 'Congo',
  COK: 'Isole Cook',
  COL: 'Colombia',
  COM: 'Comoros',
  CPV: 'Capo Verde',
  CRI: 'Costa Rica',
  CUB: 'Cuba',
  CUW: 'Curacao',
  CXR: 'Isola di Natale',
  CYM: 'Isole Cayman',
  CYP: 'Cipro',
  CZE: 'Repubblica Ceca',
  DEU: 'Germania',
  DJI: 'Gibuti',
  DMA: 'Dominica',
  DNK: 'Danimarca',
  DOM: 'Repubblica Dominicana',
  DZA: 'Algeria',
  ECU: 'Ecuador',
  EGY: 'Egitto',
  ENG: 'Inghilterra',
  ERI: "l'Eritrea",
  ESH: 'Sahara occidentale',
  ESP: 'Spagna',
  EST: 'Estonia',
  ETH: 'Etiopia',
  FIN: 'Finlandia',
  FJI: 'Fiji',
  FLK: 'Isole Falkland (Malvine)',
  FRA: 'Francia',
  FRO: 'Isole Faroe',
  FSM: 'Micronesia, Stati Federati di',
  GAB: 'Gabon',
  GBR: 'Regno Unito',
  GEO: 'Georgia',
  GGY: 'Guernsey',
  GHA: 'Ghana',
  GIB: 'Gibilterra',
  GIN: 'Guinea',
  GLP: 'Guadeloupe',
  GMB: 'Gambia',
  GNB: 'Guinea-Bissau',
  GNQ: 'Guinea Equatoriale',
  GRC: 'Grecia',
  GRD: 'Grenada',
  GRL: 'Groenlandia',
  GTM: 'Guatemala',
  GUF: 'Guiana Francese',
  GUM: 'Guam',
  GUY: 'Guyana',
  HKG: 'Hong Kong',
  HND: 'Honduras',
  HRV: 'Croazia',
  HTI: 'Haiti',
  HUN: 'Ungheria',
  IDN: 'Indonesia',
  IMN: 'Man, Isola di',
  IND: 'India',
  IRL: 'Irlanda',
  IRN: 'Iran, Repubblica Islamica del',
  IRQ: 'Iraq',
  ISL: 'Islanda',
  ISR: 'Israele',
  ITA: 'Italia',
  JAM: 'Giamaica',
  JEY: 'Jersey',
  JOR: 'Giordania',
  JPN: 'Giappone',
  KAZ: 'Kazakistan',
  KEN: 'Kenia',
  KGZ: 'Kyrgyzstan',
  KHM: 'Cambogia',
  KIR: 'Kiribati',
  KNA: 'Saint Kitts e Nevis',
  KOR: 'Corea, Repubblica di',
  KWT: 'Kuwait',
  LAO: 'Laos, Repubblica Democratica Popolare del',
  LBN: 'Libano',
  LBR: 'Liberia',
  LBY: 'Libia',
  LCA: 'Santa Lucia',
  LIE: 'Liechtenstein',
  LKA: 'Sri Lanka',
  LSO: 'Lesoto',
  LTU: 'Lituania',
  LUX: 'Lussemburgo',
  LVA: 'Lettonia',
  MAC: 'Macau',
  MAF: 'Saint Martin',
  MAR: 'Marocco',
  MCO: 'Monaco',
  MDA: 'Moldavia, Repubblica di',
  MDG: 'Madagascar',
  MDV: 'Maldive',
  MEX: 'Messico',
  MHL: 'Isole Marshall',
  MKD: 'Macedonia del Nord',
  MLI: 'Mali',
  MLT: 'Malta',
  MMR: 'Myanmar',
  MNE: 'Montenegro',
  MNG: 'Mongolia',
  MNP: 'Isole Marianne Settentrionali',
  MOZ: 'Mozambico',
  MRT: 'Mauritania',
  MSR: 'Montserrat',
  MTQ: 'Martinique',
  MUS: 'Mauritius',
  MWI: 'Malawi',
  MYS: 'Malaysia',
  MYT: 'Mayotte',
  NAM: 'Namibia',
  NCL: 'Nuova Caledonia',
  NER: 'Niger',
  NFK: 'Isola Norfolk',
  NGA: 'Nigeria',
  NIC: 'Nicaragua',
  NIU: 'Niue',
  NLD: 'Olanda',
  NOR: 'Norvegia',
  NPL: 'Nepal',
  NRU: 'Nauru',
  NZL: 'Nuova Zelanda',
  OMN: 'Oman',
  PAK: 'Pakistan',
  PAN: 'Panama',
  PCN: 'Pitcairn',
  PER: 'Perù',
  PHL: 'Filippine',
  PLW: 'Palau',
  PNG: 'Papua Nuova Guinea',
  POL: 'Polonia',
  PRI: 'Porto Rico',
  PRK: 'Corea, Repubblica Popolare Democratica di',
  PRT: 'Portogallo',
  PRY: 'Paraguay',
  PSE: 'Palestinese, Stato di',
  PYF: 'Polinesia Francese',
  QAT: 'Qatar',
  REU: 'Riunione',
  ROU: 'Romania',
  RUS: 'Russia',
  RWA: 'Ruanda',
  SAU: 'Arabia Saudita',
  SDN: 'Sudan',
  SEN: 'Senegal',
  SGP: 'Singapore',
  SHN: "Sant'Elena, Ascensione e Tristan da Cunha",
  SJM: 'Isole Svalbard e Jan Mayen',
  SLB: 'Isole Salomone',
  SLE: 'Sierra Leone',
  SLV: 'El Salvador',
  SMR: 'San Marino',
  SOM: 'Somalia',
  SPM: 'Saint Pierre e Miquelon',
  SRB: 'Serbia',
  SSD: 'Sudan del Sud',
  STP: 'Sao Tome e Principe',
  SUR: 'Suriname',
  SVK: 'Slovacchia',
  SVN: 'Slovenia',
  SWE: 'Svezia',
  SWZ: 'Swaziland',
  SXM: 'Sint Maarten',
  SYC: 'Seychelles',
  SYR: 'Repubblica Araba Siriana',
  TCA: 'Isole Turks e Caicos',
  TCD: 'Chad',
  TGO: 'Togo',
  THA: 'Tailandia',
  TJK: 'Tajikistan',
  TKL: 'Tokelau',
  TKM: 'Turkmenistan',
  TLS: 'Timor Est',
  TON: 'Tonga',
  TTO: 'Trinidad e Tobago',
  TUN: 'Tunisia',
  TUR: 'Turchia',
  TUV: 'Tuvalu',
  TWN: 'Taiwan',
  TZA: 'Tanzania, Repubblica Unita di',
  UGA: 'Uganda',
  UKR: 'Ucraina',
  URY: 'Uruguay',
  USA: 'Stati Uniti',
  UZB: 'Uzbekistan',
  VAT: 'Santa Sede (Stato della Città del Vaticano)',
  VCT: 'Saint Vincent e Grenadine',
  VEN: 'Venezuela',
  VGB: 'Isole Vergini Britanniche',
  VIR: 'Isole Vergini americane',
  VNM: 'Viet Nam',
  VUT: 'Vanuatu',
  WLF: 'Wallis e Futuna',
  WSM: 'Samoa',
  YEM: 'Yemen',
  XKX: 'Kosovo',
  ZAF: 'Sud Africa',
  ZMB: 'Zambia',
  ZWE: 'Zimbab',
  'GB-ENG': 'Inghilterra',
  'GB-WLS': 'Galles',
  'GB-NIR': 'Nord irlanda',
  'GB-SCT': 'Scozia',
};

export const getMappedNation = nationValue => {
  let foundValue = '';
  let mappedValue = '';
  Object.entries(nationMapping).forEach(nation => {
    const key = nation[0];
    const value = nation[1];
    if (value.indexOf(nationValue) > -1) {
      foundValue = key;
    }
  });
  if (foundValue && foundValue.length === 3) {
    mappedValue = getCountryISO2(foundValue);
  } else {
    mappedValue = foundValue;
  }
  return mappedValue;
};

export const getNationsClassname = nation => {
  const isoCode = getMappedNation(nation).toLowerCase();
  return `flag-icon flag-icon-${isoCode} nation-icon`;
};

export const getNationsClassnameSmall = nation => {
  const isoCode = getMappedNation(nation).toLowerCase();
  return `flag-icon flag-icon-${isoCode} nation-icon-small`;
};
