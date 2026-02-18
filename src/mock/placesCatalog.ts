export const DEMO_CITY_KEYS = [
  "madrid",
  "barcelona",
  "valencia",
  "sevilla",
  "malaga",
  "bilbao",
  "zaragoza",
  "palma",
  "alicante",
  "granada",
  "cordoba",
  "vigo",
  "gijon",
  "a-coruna",
  "oviedo",
  "santander",
  "san-sebastian",
  "pamplona",
  "logrono",
  "burgos",
  "leon",
  "salamanca",
  "valladolid",
  "segovia",
  "avila",
  "toledo",
  "cuenca",
  "guadalajara",
  "albacete",
  "murcia",
  "cartagena",
  "almeria",
  "jaen",
  "cadiz",
  "jerez",
  "huelva",
  "badajoz",
  "caceres",
  "santiago",
  "lugo",
  "ourense",
  "pontevedra",
  "las-palmas",
  "santa-cruz",
  "ibiza",
  "menorca",
  "tarragona",
  "girona",
  "lleida",
  "reus",
  "castellon",
  "elche",
  "benidorm",
  "marbella",
  "sanlucar",
  "roquetas",
  "vitoria",
  "castellon-alt",
  "teruel",
  "huesca",
  "soria",
  "zamora",
  "palencia",
  "ciudad-real",
  "merida",
  "alcala",
  "manresa",
  "torrevieja",
  "salamanca-alt",
  "fuengirola",
  "sitges",
  "llanes",
  "vejer",
  "cadaques"
];

export type DemoCityKey = string;

export type DemoCity = {
  key: DemoCityKey;
  label: string;
  latitude: number;
  longitude: number;
  aliases: string[];
};

export type DemoPlace = {
  id: string;
  city: DemoCityKey;
  title: string;
  address: string;
  latitude: number;
  longitude: number;
  tags?: string[];
};

export const DEMO_CITIES: DemoCity[] = [
  {
    "key": "madrid",
    "label": "Madrid, España",
    "latitude": 40.4168,
    "longitude": -3.7038,
    "aliases": [
      "madrid",
      "mad"
    ]
  },
  {
    "key": "barcelona",
    "label": "Barcelona, España",
    "latitude": 41.3874,
    "longitude": 2.1686,
    "aliases": [
      "barcelona",
      "bcn"
    ]
  },
  {
    "key": "valencia",
    "label": "Valencia, España",
    "latitude": 39.4699,
    "longitude": -0.3763,
    "aliases": [
      "valencia",
      "vlc"
    ]
  },
  {
    "key": "sevilla",
    "label": "Sevilla, España",
    "latitude": 37.3891,
    "longitude": -5.9845,
    "aliases": [
      "sevilla",
      "seville",
      "svq"
    ]
  },
  {
    "key": "malaga",
    "label": "Málaga, España",
    "latitude": 36.7213,
    "longitude": -4.4214,
    "aliases": [
      "malaga",
      "málaga",
      "agp"
    ]
  },
  {
    "key": "bilbao",
    "label": "Bilbao, España",
    "latitude": 43.263,
    "longitude": -2.935,
    "aliases": [
      "bilbao",
      "bio"
    ]
  },
  {
    "key": "zaragoza",
    "label": "Zaragoza, España",
    "latitude": 41.6488,
    "longitude": -0.8891,
    "aliases": [
      "zaragoza",
      "zgz"
    ]
  },
  {
    "key": "palma",
    "label": "Palma, España",
    "latitude": 39.5696,
    "longitude": 2.6502,
    "aliases": [
      "palma",
      "mallorca",
      "pmi"
    ]
  },
  {
    "key": "alicante",
    "label": "Alicante, España",
    "latitude": 38.3452,
    "longitude": -0.481,
    "aliases": [
      "alicante",
      "alc"
    ]
  },
  {
    "key": "granada",
    "label": "Granada, España",
    "latitude": 37.1773,
    "longitude": -3.5986,
    "aliases": [
      "granada",
      "grx"
    ]
  },
  {
    "key": "cordoba",
    "label": "Córdoba, España",
    "latitude": 37.8882,
    "longitude": -4.7794,
    "aliases": [
      "cordoba",
      "córdoba",
      "odb"
    ]
  },
  {
    "key": "vigo",
    "label": "Vigo, España",
    "latitude": 42.2406,
    "longitude": -8.7207,
    "aliases": [
      "vigo",
      "vgo"
    ]
  },
  {
    "key": "gijon",
    "label": "Gijón, España",
    "latitude": 43.5453,
    "longitude": -5.6619,
    "aliases": [
      "gijon",
      "gijón",
      "gjn"
    ]
  },
  {
    "key": "a-coruna",
    "label": "A Coruña, España",
    "latitude": 43.3623,
    "longitude": -8.4115,
    "aliases": [
      "a coruna",
      "la coruna",
      "a coruña",
      "coruna",
      "cor"
    ]
  },
  {
    "key": "oviedo",
    "label": "Oviedo, España",
    "latitude": 43.3619,
    "longitude": -5.8494,
    "aliases": [
      "oviedo",
      "ovd"
    ]
  },
  {
    "key": "santander",
    "label": "Santander, España",
    "latitude": 43.4623,
    "longitude": -3.8099,
    "aliases": [
      "santander",
      "sdr"
    ]
  },
  {
    "key": "san-sebastian",
    "label": "San Sebastián, España",
    "latitude": 43.3183,
    "longitude": -1.9812,
    "aliases": [
      "san sebastian",
      "donostia",
      "eas"
    ]
  },
  {
    "key": "pamplona",
    "label": "Pamplona, España",
    "latitude": 42.8125,
    "longitude": -1.6458,
    "aliases": [
      "pamplona",
      "iruna",
      "iruña",
      "pna"
    ]
  },
  {
    "key": "logrono",
    "label": "Logroño, España",
    "latitude": 42.4627,
    "longitude": -2.4449,
    "aliases": [
      "logrono",
      "logroño",
      "rja"
    ]
  },
  {
    "key": "burgos",
    "label": "Burgos, España",
    "latitude": 42.3439,
    "longitude": -3.6969,
    "aliases": [
      "burgos",
      "brg"
    ]
  },
  {
    "key": "leon",
    "label": "León, España",
    "latitude": 42.5987,
    "longitude": -5.5671,
    "aliases": [
      "leon",
      "león",
      "len"
    ]
  },
  {
    "key": "salamanca",
    "label": "Salamanca, España",
    "latitude": 40.9701,
    "longitude": -5.6635,
    "aliases": [
      "salamanca",
      "slm"
    ]
  },
  {
    "key": "valladolid",
    "label": "Valladolid, España",
    "latitude": 41.6523,
    "longitude": -4.7245,
    "aliases": [
      "valladolid",
      "vll"
    ]
  },
  {
    "key": "segovia",
    "label": "Segovia, España",
    "latitude": 40.9429,
    "longitude": -4.1088,
    "aliases": [
      "segovia",
      "seg"
    ]
  },
  {
    "key": "avila",
    "label": "Ávila, España",
    "latitude": 40.6567,
    "longitude": -4.6812,
    "aliases": [
      "avila",
      "ávila",
      "avi"
    ]
  },
  {
    "key": "toledo",
    "label": "Toledo, España",
    "latitude": 39.8628,
    "longitude": -4.0273,
    "aliases": [
      "toledo",
      "tol"
    ]
  },
  {
    "key": "cuenca",
    "label": "Cuenca, España",
    "latitude": 40.0704,
    "longitude": -2.1374,
    "aliases": [
      "cuenca",
      "cqe"
    ]
  },
  {
    "key": "guadalajara",
    "label": "Guadalajara, España",
    "latitude": 40.6333,
    "longitude": -3.1669,
    "aliases": [
      "guadalajara",
      "gdl"
    ]
  },
  {
    "key": "albacete",
    "label": "Albacete, España",
    "latitude": 38.9943,
    "longitude": -1.8585,
    "aliases": [
      "albacete",
      "abc"
    ]
  },
  {
    "key": "murcia",
    "label": "Murcia, España",
    "latitude": 37.9922,
    "longitude": -1.1307,
    "aliases": [
      "murcia",
      "mrc"
    ]
  },
  {
    "key": "cartagena",
    "label": "Cartagena, España",
    "latitude": 37.6257,
    "longitude": -0.9966,
    "aliases": [
      "cartagena",
      "ctg"
    ]
  },
  {
    "key": "almeria",
    "label": "Almería, España",
    "latitude": 36.834,
    "longitude": -2.4637,
    "aliases": [
      "almeria",
      "almería",
      "lei"
    ]
  },
  {
    "key": "jaen",
    "label": "Jaén, España",
    "latitude": 37.7796,
    "longitude": -3.7849,
    "aliases": [
      "jaen",
      "jaén",
      "jen"
    ]
  },
  {
    "key": "cadiz",
    "label": "Cádiz, España",
    "latitude": 36.5271,
    "longitude": -6.2886,
    "aliases": [
      "cadiz",
      "cádiz",
      "cad"
    ]
  },
  {
    "key": "jerez",
    "label": "Jerez de la Frontera, España",
    "latitude": 36.685,
    "longitude": -6.1261,
    "aliases": [
      "jerez",
      "xry"
    ]
  },
  {
    "key": "huelva",
    "label": "Huelva, España",
    "latitude": 37.2614,
    "longitude": -6.9447,
    "aliases": [
      "huelva",
      "huv"
    ]
  },
  {
    "key": "badajoz",
    "label": "Badajoz, España",
    "latitude": 38.8794,
    "longitude": -6.9707,
    "aliases": [
      "badajoz",
      "bdj"
    ]
  },
  {
    "key": "caceres",
    "label": "Cáceres, España",
    "latitude": 39.4765,
    "longitude": -6.3722,
    "aliases": [
      "caceres",
      "cáceres",
      "ccr"
    ]
  },
  {
    "key": "santiago",
    "label": "Santiago de Compostela, España",
    "latitude": 42.8782,
    "longitude": -8.5448,
    "aliases": [
      "santiago",
      "compostela",
      "scq"
    ]
  },
  {
    "key": "lugo",
    "label": "Lugo, España",
    "latitude": 43.0123,
    "longitude": -7.5559,
    "aliases": [
      "lugo",
      "lug"
    ]
  },
  {
    "key": "ourense",
    "label": "Ourense, España",
    "latitude": 42.3358,
    "longitude": -7.8639,
    "aliases": [
      "ourense",
      "orense",
      "oru"
    ]
  },
  {
    "key": "pontevedra",
    "label": "Pontevedra, España",
    "latitude": 42.4338,
    "longitude": -8.648,
    "aliases": [
      "pontevedra",
      "pon"
    ]
  },
  {
    "key": "las-palmas",
    "label": "Las Palmas de Gran Canaria, España",
    "latitude": 28.1235,
    "longitude": -15.4363,
    "aliases": [
      "las palmas",
      "gran canaria",
      "lpa"
    ]
  },
  {
    "key": "santa-cruz",
    "label": "Santa Cruz de Tenerife, España",
    "latitude": 28.4636,
    "longitude": -16.2518,
    "aliases": [
      "santa cruz",
      "tenerife",
      "tfn"
    ]
  },
  {
    "key": "ibiza",
    "label": "Ibiza, España",
    "latitude": 38.9067,
    "longitude": 1.4206,
    "aliases": [
      "ibiza",
      "eivissa",
      "ibz"
    ]
  },
  {
    "key": "menorca",
    "label": "Mahón, España",
    "latitude": 39.8885,
    "longitude": 4.2658,
    "aliases": [
      "menorca",
      "mahon",
      "mahón",
      "mah"
    ]
  },
  {
    "key": "tarragona",
    "label": "Tarragona, España",
    "latitude": 41.1189,
    "longitude": 1.2445,
    "aliases": [
      "tarragona",
      "trg"
    ]
  },
  {
    "key": "girona",
    "label": "Girona, España",
    "latitude": 41.9794,
    "longitude": 2.8214,
    "aliases": [
      "girona",
      "gerona",
      "gro"
    ]
  },
  {
    "key": "lleida",
    "label": "Lleida, España",
    "latitude": 41.6176,
    "longitude": 0.62,
    "aliases": [
      "lleida",
      "lerida",
      "ild"
    ]
  },
  {
    "key": "reus",
    "label": "Reus, España",
    "latitude": 41.1548,
    "longitude": 1.1087,
    "aliases": [
      "reus",
      "reu"
    ]
  },
  {
    "key": "castellon",
    "label": "Castellón de la Plana, España",
    "latitude": 39.9864,
    "longitude": -0.0513,
    "aliases": [
      "castellon",
      "castellón",
      "csn"
    ]
  },
  {
    "key": "elche",
    "label": "Elche, España",
    "latitude": 38.2699,
    "longitude": -0.7126,
    "aliases": [
      "elche",
      "elh"
    ]
  },
  {
    "key": "benidorm",
    "label": "Benidorm, España",
    "latitude": 38.5411,
    "longitude": -0.1225,
    "aliases": [
      "benidorm",
      "bdr"
    ]
  },
  {
    "key": "marbella",
    "label": "Marbella, España",
    "latitude": 36.5101,
    "longitude": -4.8824,
    "aliases": [
      "marbella",
      "mrb"
    ]
  },
  {
    "key": "sanlucar",
    "label": "Sanlúcar de Barrameda, España",
    "latitude": 36.7781,
    "longitude": -6.3526,
    "aliases": [
      "sanlucar",
      "sanlúcar",
      "snl"
    ]
  },
  {
    "key": "roquetas",
    "label": "Roquetas de Mar, España",
    "latitude": 36.7642,
    "longitude": -2.6147,
    "aliases": [
      "roquetas",
      "rqt"
    ]
  },
  {
    "key": "vitoria",
    "label": "Vitoria-Gasteiz, España",
    "latitude": 42.8467,
    "longitude": -2.6716,
    "aliases": [
      "vitoria",
      "gasteiz",
      "vit"
    ]
  },
  {
    "key": "castellon-alt",
    "label": "Sagunto, España",
    "latitude": 39.6804,
    "longitude": -0.2783,
    "aliases": [
      "sagunto",
      "sagunt",
      "sag"
    ]
  },
  {
    "key": "teruel",
    "label": "Teruel, España",
    "latitude": 40.3456,
    "longitude": -1.1065,
    "aliases": [
      "teruel",
      "trl"
    ]
  },
  {
    "key": "huesca",
    "label": "Huesca, España",
    "latitude": 42.1362,
    "longitude": -0.4089,
    "aliases": [
      "huesca",
      "hsk"
    ]
  },
  {
    "key": "soria",
    "label": "Soria, España",
    "latitude": 41.7636,
    "longitude": -2.4665,
    "aliases": [
      "soria",
      "sor"
    ]
  },
  {
    "key": "zamora",
    "label": "Zamora, España",
    "latitude": 41.5033,
    "longitude": -5.7446,
    "aliases": [
      "zamora",
      "zmr"
    ]
  },
  {
    "key": "palencia",
    "label": "Palencia, España",
    "latitude": 42.0097,
    "longitude": -4.5288,
    "aliases": [
      "palencia",
      "plc"
    ]
  },
  {
    "key": "ciudad-real",
    "label": "Ciudad Real, España",
    "latitude": 38.9863,
    "longitude": -3.9291,
    "aliases": [
      "ciudad real",
      "cdr"
    ]
  },
  {
    "key": "merida",
    "label": "Mérida, España",
    "latitude": 38.9161,
    "longitude": -6.3437,
    "aliases": [
      "merida",
      "mérida",
      "mrd"
    ]
  },
  {
    "key": "alcala",
    "label": "Alcalá de Henares, España",
    "latitude": 40.481,
    "longitude": -3.3649,
    "aliases": [
      "alcala",
      "alcalá",
      "alcala de henares"
    ]
  },
  {
    "key": "manresa",
    "label": "Manresa, España",
    "latitude": 41.7283,
    "longitude": 1.8234,
    "aliases": [
      "manresa",
      "mns"
    ]
  },
  {
    "key": "torrevieja",
    "label": "Torrevieja, España",
    "latitude": 37.978,
    "longitude": -0.6822,
    "aliases": [
      "torrevieja",
      "trv"
    ]
  },
  {
    "key": "salamanca-alt",
    "label": "Aranjuez, España",
    "latitude": 40.0311,
    "longitude": -3.6033,
    "aliases": [
      "aranjuez",
      "avl"
    ]
  },
  {
    "key": "fuengirola",
    "label": "Fuengirola, España",
    "latitude": 36.5411,
    "longitude": -4.623,
    "aliases": [
      "fuengirola",
      "fng"
    ]
  },
  {
    "key": "sitges",
    "label": "Sitges, España",
    "latitude": 41.2371,
    "longitude": 1.8059,
    "aliases": [
      "sitges",
      "stg"
    ]
  },
  {
    "key": "llanes",
    "label": "Llanes, España",
    "latitude": 43.4222,
    "longitude": -4.7544,
    "aliases": [
      "llanes",
      "lln"
    ]
  },
  {
    "key": "vejer",
    "label": "Vejer de la Frontera, España",
    "latitude": 36.2522,
    "longitude": -5.9665,
    "aliases": [
      "vejer",
      "vjr"
    ]
  },
  {
    "key": "cadaques",
    "label": "Cadaqués, España",
    "latitude": 42.2882,
    "longitude": 3.2784,
    "aliases": [
      "cadaques",
      "cadaqués",
      "cdq"
    ]
  }
];

export const DEMO_PLACES: DemoPlace[] = [
  {
    "id": "mad-001",
    "city": "madrid",
    "title": "Puerta del Sol",
    "address": "Puerta del Sol, Madrid, España",
    "latitude": 40.4213,
    "longitude": -3.704295,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mad-002",
    "city": "madrid",
    "title": "Gran Vía",
    "address": "Gran Vía, Madrid, España",
    "latitude": 40.418264,
    "longitude": -3.705963,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mad-003",
    "city": "madrid",
    "title": "Museo del Prado",
    "address": "Museo del Prado, Madrid, España",
    "latitude": 40.415145,
    "longitude": -3.698032,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mad-004",
    "city": "madrid",
    "title": "Parque del Retiro",
    "address": "Parque del Retiro, Madrid, España",
    "latitude": 40.416305,
    "longitude": -3.705461,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mad-005",
    "city": "madrid",
    "title": "Palacio Real",
    "address": "Palacio Real, Madrid, España",
    "latitude": 40.414637,
    "longitude": -3.71074,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mad-006",
    "city": "madrid",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Madrid, España",
    "latitude": 40.422568,
    "longitude": -3.695881,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mad-007",
    "city": "madrid",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Madrid, España",
    "latitude": 40.415139,
    "longitude": -3.703257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mad-008",
    "city": "madrid",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Madrid, España",
    "latitude": 40.40986,
    "longitude": -3.710524,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mad-009",
    "city": "madrid",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Madrid, España",
    "latitude": 40.424719,
    "longitude": -3.700033,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mad-010",
    "city": "madrid",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Madrid, España",
    "latitude": 40.417343,
    "longitude": -3.702816,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mad-011",
    "city": "madrid",
    "title": "Castillo 1",
    "address": "Castillo 1, Madrid, España",
    "latitude": 40.410076,
    "longitude": -3.704042,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mad-012",
    "city": "madrid",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Madrid, España",
    "latitude": 40.420567,
    "longitude": -3.704987,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mad-013",
    "city": "madrid",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Madrid, España",
    "latitude": 40.417784,
    "longitude": -3.706677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mad-014",
    "city": "madrid",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Madrid, España",
    "latitude": 40.416558,
    "longitude": -3.697043,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mad-015",
    "city": "madrid",
    "title": "Estación central 1",
    "address": "Estación central 1, Madrid, España",
    "latitude": 40.415613,
    "longitude": -3.705674,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mad-016",
    "city": "madrid",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Madrid, España",
    "latitude": 40.413923,
    "longitude": -3.710892,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mad-017",
    "city": "madrid",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Madrid, España",
    "latitude": 40.423557,
    "longitude": -3.695998,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mad-018",
    "city": "madrid",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Madrid, España",
    "latitude": 40.414926,
    "longitude": -3.703364,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mad-019",
    "city": "madrid",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Madrid, España",
    "latitude": 40.409708,
    "longitude": -3.709624,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mad-020",
    "city": "madrid",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Madrid, España",
    "latitude": 40.424602,
    "longitude": -3.700875,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mad-021",
    "city": "madrid",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Madrid, España",
    "latitude": 40.417236,
    "longitude": -3.703299,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mad-022",
    "city": "madrid",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Madrid, España",
    "latitude": 40.410976,
    "longitude": -3.702626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mad-023",
    "city": "madrid",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Madrid, España",
    "latitude": 40.419725,
    "longitude": -3.70567,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mad-024",
    "city": "madrid",
    "title": "Basílica 1",
    "address": "Basílica 1, Madrid, España",
    "latitude": 40.417301,
    "longitude": -3.707301,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mad-025",
    "city": "madrid",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Madrid, España",
    "latitude": 40.417974,
    "longitude": -3.69622,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mad-026",
    "city": "madrid",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Madrid, España",
    "latitude": 40.41493,
    "longitude": -3.705851,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mad-027",
    "city": "madrid",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Madrid, España",
    "latitude": 40.413299,
    "longitude": -3.710864,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mad-028",
    "city": "madrid",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Madrid, España",
    "latitude": 40.42438,
    "longitude": -3.696314,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mad-029",
    "city": "madrid",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Madrid, España",
    "latitude": 40.414749,
    "longitude": -3.70347,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mad-030",
    "city": "madrid",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Madrid, España",
    "latitude": 40.409736,
    "longitude": -3.708584,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mad-031",
    "city": "madrid",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Madrid, España",
    "latitude": 40.424286,
    "longitude": -3.701807,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mad-032",
    "city": "madrid",
    "title": "Muralla 1",
    "address": "Muralla 1, Madrid, España",
    "latitude": 40.41713,
    "longitude": -3.70377,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mad-033",
    "city": "madrid",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Madrid, España",
    "latitude": 40.412016,
    "longitude": -3.701241,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mad-034",
    "city": "madrid",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Madrid, España",
    "latitude": 40.418793,
    "longitude": -3.706325,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mad-035",
    "city": "madrid",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Madrid, España",
    "latitude": 40.41683,
    "longitude": -3.707822,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mad-036",
    "city": "madrid",
    "title": "Museo local 1",
    "address": "Museo local 1, Madrid, España",
    "latitude": 40.419359,
    "longitude": -3.695586,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mad-037",
    "city": "madrid",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Madrid, España",
    "latitude": 40.414275,
    "longitude": -3.705981,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mad-038",
    "city": "madrid",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Madrid, España",
    "latitude": 40.412778,
    "longitude": -3.71066,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mad-039",
    "city": "madrid",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Madrid, España",
    "latitude": 40.425014,
    "longitude": -3.696821,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mad-040",
    "city": "madrid",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Madrid, España",
    "latitude": 40.414619,
    "longitude": -3.703569,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bcn-001",
    "city": "barcelona",
    "title": "Sagrada Familia",
    "address": "Sagrada Familia, Barcelona, España",
    "latitude": 41.3919,
    "longitude": 2.168105,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bcn-002",
    "city": "barcelona",
    "title": "Park Güell",
    "address": "Park Güell, Barcelona, España",
    "latitude": 41.388864,
    "longitude": 2.166437,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bcn-003",
    "city": "barcelona",
    "title": "Casa Batlló",
    "address": "Casa Batlló, Barcelona, España",
    "latitude": 41.385745,
    "longitude": 2.174368,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bcn-004",
    "city": "barcelona",
    "title": "La Rambla",
    "address": "La Rambla, Barcelona, España",
    "latitude": 41.386905,
    "longitude": 2.166939,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bcn-005",
    "city": "barcelona",
    "title": "Barrio Gótico",
    "address": "Barrio Gótico, Barcelona, España",
    "latitude": 41.385237,
    "longitude": 2.16166,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bcn-006",
    "city": "barcelona",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Barcelona, España",
    "latitude": 41.393168,
    "longitude": 2.176519,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bcn-007",
    "city": "barcelona",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Barcelona, España",
    "latitude": 41.385739,
    "longitude": 2.169143,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bcn-008",
    "city": "barcelona",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Barcelona, España",
    "latitude": 41.38046,
    "longitude": 2.161876,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bcn-009",
    "city": "barcelona",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Barcelona, España",
    "latitude": 41.395319,
    "longitude": 2.172367,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bcn-010",
    "city": "barcelona",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Barcelona, España",
    "latitude": 41.387943,
    "longitude": 2.169584,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bcn-011",
    "city": "barcelona",
    "title": "Castillo 1",
    "address": "Castillo 1, Barcelona, España",
    "latitude": 41.380676,
    "longitude": 2.168358,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bcn-012",
    "city": "barcelona",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Barcelona, España",
    "latitude": 41.391167,
    "longitude": 2.167413,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bcn-013",
    "city": "barcelona",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Barcelona, España",
    "latitude": 41.388384,
    "longitude": 2.165723,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bcn-014",
    "city": "barcelona",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Barcelona, España",
    "latitude": 41.387158,
    "longitude": 2.175357,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bcn-015",
    "city": "barcelona",
    "title": "Estación central 1",
    "address": "Estación central 1, Barcelona, España",
    "latitude": 41.386213,
    "longitude": 2.166726,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bcn-016",
    "city": "barcelona",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Barcelona, España",
    "latitude": 41.384523,
    "longitude": 2.161508,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bcn-017",
    "city": "barcelona",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Barcelona, España",
    "latitude": 41.394157,
    "longitude": 2.176402,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bcn-018",
    "city": "barcelona",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Barcelona, España",
    "latitude": 41.385526,
    "longitude": 2.169036,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bcn-019",
    "city": "barcelona",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Barcelona, España",
    "latitude": 41.380308,
    "longitude": 2.162776,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bcn-020",
    "city": "barcelona",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Barcelona, España",
    "latitude": 41.395202,
    "longitude": 2.171525,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bcn-021",
    "city": "barcelona",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Barcelona, España",
    "latitude": 41.387836,
    "longitude": 2.169101,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bcn-022",
    "city": "barcelona",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Barcelona, España",
    "latitude": 41.381576,
    "longitude": 2.169774,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bcn-023",
    "city": "barcelona",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Barcelona, España",
    "latitude": 41.390325,
    "longitude": 2.16673,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bcn-024",
    "city": "barcelona",
    "title": "Basílica 1",
    "address": "Basílica 1, Barcelona, España",
    "latitude": 41.387901,
    "longitude": 2.165099,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bcn-025",
    "city": "barcelona",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Barcelona, España",
    "latitude": 41.388574,
    "longitude": 2.17618,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bcn-026",
    "city": "barcelona",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Barcelona, España",
    "latitude": 41.38553,
    "longitude": 2.166549,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bcn-027",
    "city": "barcelona",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Barcelona, España",
    "latitude": 41.383899,
    "longitude": 2.161536,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bcn-028",
    "city": "barcelona",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Barcelona, España",
    "latitude": 41.39498,
    "longitude": 2.176086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bcn-029",
    "city": "barcelona",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Barcelona, España",
    "latitude": 41.385349,
    "longitude": 2.16893,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bcn-030",
    "city": "barcelona",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Barcelona, España",
    "latitude": 41.380336,
    "longitude": 2.163816,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bcn-031",
    "city": "barcelona",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Barcelona, España",
    "latitude": 41.394886,
    "longitude": 2.170593,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bcn-032",
    "city": "barcelona",
    "title": "Muralla 1",
    "address": "Muralla 1, Barcelona, España",
    "latitude": 41.38773,
    "longitude": 2.16863,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bcn-033",
    "city": "barcelona",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Barcelona, España",
    "latitude": 41.382616,
    "longitude": 2.171159,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bcn-034",
    "city": "barcelona",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Barcelona, España",
    "latitude": 41.389393,
    "longitude": 2.166075,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bcn-035",
    "city": "barcelona",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Barcelona, España",
    "latitude": 41.38743,
    "longitude": 2.164578,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bcn-036",
    "city": "barcelona",
    "title": "Museo local 1",
    "address": "Museo local 1, Barcelona, España",
    "latitude": 41.389959,
    "longitude": 2.176814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bcn-037",
    "city": "barcelona",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Barcelona, España",
    "latitude": 41.384875,
    "longitude": 2.166419,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bcn-038",
    "city": "barcelona",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Barcelona, España",
    "latitude": 41.383378,
    "longitude": 2.16174,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bcn-039",
    "city": "barcelona",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Barcelona, España",
    "latitude": 41.395614,
    "longitude": 2.175579,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bcn-040",
    "city": "barcelona",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Barcelona, España",
    "latitude": 41.385219,
    "longitude": 2.168831,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vlc-001",
    "city": "valencia",
    "title": "Ciudad de las Artes y las Ciencias",
    "address": "Ciudad de las Artes y las Ciencias, Valencia, España",
    "latitude": 39.4744,
    "longitude": -0.376795,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vlc-002",
    "city": "valencia",
    "title": "Oceanogràfic",
    "address": "Oceanogràfic, Valencia, España",
    "latitude": 39.471364,
    "longitude": -0.378463,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vlc-003",
    "city": "valencia",
    "title": "Mercado Central",
    "address": "Mercado Central, Valencia, España",
    "latitude": 39.468245,
    "longitude": -0.370532,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vlc-004",
    "city": "valencia",
    "title": "Lonja de la Seda",
    "address": "Lonja de la Seda, Valencia, España",
    "latitude": 39.469405,
    "longitude": -0.377961,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vlc-005",
    "city": "valencia",
    "title": "Malvarrosa",
    "address": "Malvarrosa, Valencia, España",
    "latitude": 39.467737,
    "longitude": -0.38324,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vlc-006",
    "city": "valencia",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Valencia, España",
    "latitude": 39.475668,
    "longitude": -0.368381,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vlc-007",
    "city": "valencia",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Valencia, España",
    "latitude": 39.468239,
    "longitude": -0.375757,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vlc-008",
    "city": "valencia",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Valencia, España",
    "latitude": 39.46296,
    "longitude": -0.383024,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vlc-009",
    "city": "valencia",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Valencia, España",
    "latitude": 39.477819,
    "longitude": -0.372533,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vlc-010",
    "city": "valencia",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Valencia, España",
    "latitude": 39.470443,
    "longitude": -0.375316,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vlc-011",
    "city": "valencia",
    "title": "Castillo 1",
    "address": "Castillo 1, Valencia, España",
    "latitude": 39.463176,
    "longitude": -0.376542,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vlc-012",
    "city": "valencia",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Valencia, España",
    "latitude": 39.473667,
    "longitude": -0.377487,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vlc-013",
    "city": "valencia",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Valencia, España",
    "latitude": 39.470884,
    "longitude": -0.379177,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vlc-014",
    "city": "valencia",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Valencia, España",
    "latitude": 39.469658,
    "longitude": -0.369543,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vlc-015",
    "city": "valencia",
    "title": "Estación central 1",
    "address": "Estación central 1, Valencia, España",
    "latitude": 39.468713,
    "longitude": -0.378174,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vlc-016",
    "city": "valencia",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Valencia, España",
    "latitude": 39.467023,
    "longitude": -0.383392,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vlc-017",
    "city": "valencia",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Valencia, España",
    "latitude": 39.476657,
    "longitude": -0.368498,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vlc-018",
    "city": "valencia",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Valencia, España",
    "latitude": 39.468026,
    "longitude": -0.375864,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vlc-019",
    "city": "valencia",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Valencia, España",
    "latitude": 39.462808,
    "longitude": -0.382124,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vlc-020",
    "city": "valencia",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Valencia, España",
    "latitude": 39.477702,
    "longitude": -0.373375,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vlc-021",
    "city": "valencia",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Valencia, España",
    "latitude": 39.470336,
    "longitude": -0.375799,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vlc-022",
    "city": "valencia",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Valencia, España",
    "latitude": 39.464076,
    "longitude": -0.375126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vlc-023",
    "city": "valencia",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Valencia, España",
    "latitude": 39.472825,
    "longitude": -0.37817,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vlc-024",
    "city": "valencia",
    "title": "Basílica 1",
    "address": "Basílica 1, Valencia, España",
    "latitude": 39.470401,
    "longitude": -0.379801,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vlc-025",
    "city": "valencia",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Valencia, España",
    "latitude": 39.471074,
    "longitude": -0.36872,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vlc-026",
    "city": "valencia",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Valencia, España",
    "latitude": 39.46803,
    "longitude": -0.378351,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vlc-027",
    "city": "valencia",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Valencia, España",
    "latitude": 39.466399,
    "longitude": -0.383364,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vlc-028",
    "city": "valencia",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Valencia, España",
    "latitude": 39.47748,
    "longitude": -0.368814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vlc-029",
    "city": "valencia",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Valencia, España",
    "latitude": 39.467849,
    "longitude": -0.37597,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vlc-030",
    "city": "valencia",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Valencia, España",
    "latitude": 39.462836,
    "longitude": -0.381084,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vlc-031",
    "city": "valencia",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Valencia, España",
    "latitude": 39.477386,
    "longitude": -0.374307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vlc-032",
    "city": "valencia",
    "title": "Muralla 1",
    "address": "Muralla 1, Valencia, España",
    "latitude": 39.47023,
    "longitude": -0.37627,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vlc-033",
    "city": "valencia",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Valencia, España",
    "latitude": 39.465116,
    "longitude": -0.373741,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vlc-034",
    "city": "valencia",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Valencia, España",
    "latitude": 39.471893,
    "longitude": -0.378825,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vlc-035",
    "city": "valencia",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Valencia, España",
    "latitude": 39.46993,
    "longitude": -0.380322,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vlc-036",
    "city": "valencia",
    "title": "Museo local 1",
    "address": "Museo local 1, Valencia, España",
    "latitude": 39.472459,
    "longitude": -0.368086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vlc-037",
    "city": "valencia",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Valencia, España",
    "latitude": 39.467375,
    "longitude": -0.378481,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vlc-038",
    "city": "valencia",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Valencia, España",
    "latitude": 39.465878,
    "longitude": -0.38316,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vlc-039",
    "city": "valencia",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Valencia, España",
    "latitude": 39.478114,
    "longitude": -0.369321,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vlc-040",
    "city": "valencia",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Valencia, España",
    "latitude": 39.467719,
    "longitude": -0.376069,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "svq-001",
    "city": "sevilla",
    "title": "Real Alcázar",
    "address": "Real Alcázar, Sevilla, España",
    "latitude": 37.3936,
    "longitude": -5.984995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "svq-002",
    "city": "sevilla",
    "title": "Plaza de España",
    "address": "Plaza de España, Sevilla, España",
    "latitude": 37.390564,
    "longitude": -5.986663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "svq-003",
    "city": "sevilla",
    "title": "Catedral de Sevilla",
    "address": "Catedral de Sevilla, Sevilla, España",
    "latitude": 37.387445,
    "longitude": -5.978732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "svq-004",
    "city": "sevilla",
    "title": "Giralda",
    "address": "Giralda, Sevilla, España",
    "latitude": 37.388605,
    "longitude": -5.986161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "svq-005",
    "city": "sevilla",
    "title": "Barrio Santa Cruz",
    "address": "Barrio Santa Cruz, Sevilla, España",
    "latitude": 37.386937,
    "longitude": -5.99144,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "svq-006",
    "city": "sevilla",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Sevilla, España",
    "latitude": 37.394868,
    "longitude": -5.976581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "svq-007",
    "city": "sevilla",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Sevilla, España",
    "latitude": 37.387439,
    "longitude": -5.983957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "svq-008",
    "city": "sevilla",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Sevilla, España",
    "latitude": 37.38216,
    "longitude": -5.991224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "svq-009",
    "city": "sevilla",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Sevilla, España",
    "latitude": 37.397019,
    "longitude": -5.980733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "svq-010",
    "city": "sevilla",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Sevilla, España",
    "latitude": 37.389643,
    "longitude": -5.983516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "svq-011",
    "city": "sevilla",
    "title": "Castillo 1",
    "address": "Castillo 1, Sevilla, España",
    "latitude": 37.382376,
    "longitude": -5.984742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "svq-012",
    "city": "sevilla",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Sevilla, España",
    "latitude": 37.392867,
    "longitude": -5.985687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "svq-013",
    "city": "sevilla",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Sevilla, España",
    "latitude": 37.390084,
    "longitude": -5.987377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "svq-014",
    "city": "sevilla",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Sevilla, España",
    "latitude": 37.388858,
    "longitude": -5.977743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "svq-015",
    "city": "sevilla",
    "title": "Estación central 1",
    "address": "Estación central 1, Sevilla, España",
    "latitude": 37.387913,
    "longitude": -5.986374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "svq-016",
    "city": "sevilla",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Sevilla, España",
    "latitude": 37.386223,
    "longitude": -5.991592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "svq-017",
    "city": "sevilla",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Sevilla, España",
    "latitude": 37.395857,
    "longitude": -5.976698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "svq-018",
    "city": "sevilla",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Sevilla, España",
    "latitude": 37.387226,
    "longitude": -5.984064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "svq-019",
    "city": "sevilla",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Sevilla, España",
    "latitude": 37.382008,
    "longitude": -5.990324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "svq-020",
    "city": "sevilla",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Sevilla, España",
    "latitude": 37.396902,
    "longitude": -5.981575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "svq-021",
    "city": "sevilla",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Sevilla, España",
    "latitude": 37.389536,
    "longitude": -5.983999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "svq-022",
    "city": "sevilla",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Sevilla, España",
    "latitude": 37.383276,
    "longitude": -5.983326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "svq-023",
    "city": "sevilla",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Sevilla, España",
    "latitude": 37.392025,
    "longitude": -5.98637,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "svq-024",
    "city": "sevilla",
    "title": "Basílica 1",
    "address": "Basílica 1, Sevilla, España",
    "latitude": 37.389601,
    "longitude": -5.988001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "svq-025",
    "city": "sevilla",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Sevilla, España",
    "latitude": 37.390274,
    "longitude": -5.97692,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "svq-026",
    "city": "sevilla",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Sevilla, España",
    "latitude": 37.38723,
    "longitude": -5.986551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "svq-027",
    "city": "sevilla",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Sevilla, España",
    "latitude": 37.385599,
    "longitude": -5.991564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "svq-028",
    "city": "sevilla",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Sevilla, España",
    "latitude": 37.39668,
    "longitude": -5.977014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "svq-029",
    "city": "sevilla",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Sevilla, España",
    "latitude": 37.387049,
    "longitude": -5.98417,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "svq-030",
    "city": "sevilla",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Sevilla, España",
    "latitude": 37.382036,
    "longitude": -5.989284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "svq-031",
    "city": "sevilla",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Sevilla, España",
    "latitude": 37.396586,
    "longitude": -5.982507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "svq-032",
    "city": "sevilla",
    "title": "Muralla 1",
    "address": "Muralla 1, Sevilla, España",
    "latitude": 37.38943,
    "longitude": -5.98447,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "svq-033",
    "city": "sevilla",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Sevilla, España",
    "latitude": 37.384316,
    "longitude": -5.981941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "svq-034",
    "city": "sevilla",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Sevilla, España",
    "latitude": 37.391093,
    "longitude": -5.987025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "svq-035",
    "city": "sevilla",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Sevilla, España",
    "latitude": 37.38913,
    "longitude": -5.988522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "svq-036",
    "city": "sevilla",
    "title": "Museo local 1",
    "address": "Museo local 1, Sevilla, España",
    "latitude": 37.391659,
    "longitude": -5.976286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "svq-037",
    "city": "sevilla",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Sevilla, España",
    "latitude": 37.386575,
    "longitude": -5.986681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "svq-038",
    "city": "sevilla",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Sevilla, España",
    "latitude": 37.385078,
    "longitude": -5.99136,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "svq-039",
    "city": "sevilla",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Sevilla, España",
    "latitude": 37.397314,
    "longitude": -5.977521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "svq-040",
    "city": "sevilla",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Sevilla, España",
    "latitude": 37.386919,
    "longitude": -5.984269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "agp-001",
    "city": "malaga",
    "title": "Alcazaba",
    "address": "Alcazaba, Málaga, España",
    "latitude": 36.7258,
    "longitude": -4.421895,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "agp-002",
    "city": "malaga",
    "title": "Teatro Romano",
    "address": "Teatro Romano, Málaga, España",
    "latitude": 36.722764,
    "longitude": -4.423563,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "agp-003",
    "city": "malaga",
    "title": "Castillo de Gibralfaro",
    "address": "Castillo de Gibralfaro, Málaga, España",
    "latitude": 36.719645,
    "longitude": -4.415632,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "agp-004",
    "city": "malaga",
    "title": "Muelle Uno",
    "address": "Muelle Uno, Málaga, España",
    "latitude": 36.720805,
    "longitude": -4.423061,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "agp-005",
    "city": "malaga",
    "title": "Museo Picasso",
    "address": "Museo Picasso, Málaga, España",
    "latitude": 36.719137,
    "longitude": -4.42834,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "agp-006",
    "city": "malaga",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Málaga, España",
    "latitude": 36.727068,
    "longitude": -4.413481,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "agp-007",
    "city": "malaga",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Málaga, España",
    "latitude": 36.719639,
    "longitude": -4.420857,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "agp-008",
    "city": "malaga",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Málaga, España",
    "latitude": 36.71436,
    "longitude": -4.428124,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "agp-009",
    "city": "malaga",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Málaga, España",
    "latitude": 36.729219,
    "longitude": -4.417633,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "agp-010",
    "city": "malaga",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Málaga, España",
    "latitude": 36.721843,
    "longitude": -4.420416,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "agp-011",
    "city": "malaga",
    "title": "Castillo 1",
    "address": "Castillo 1, Málaga, España",
    "latitude": 36.714576,
    "longitude": -4.421642,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "agp-012",
    "city": "malaga",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Málaga, España",
    "latitude": 36.725067,
    "longitude": -4.422587,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "agp-013",
    "city": "malaga",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Málaga, España",
    "latitude": 36.722284,
    "longitude": -4.424277,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "agp-014",
    "city": "malaga",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Málaga, España",
    "latitude": 36.721058,
    "longitude": -4.414643,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "agp-015",
    "city": "malaga",
    "title": "Estación central 1",
    "address": "Estación central 1, Málaga, España",
    "latitude": 36.720113,
    "longitude": -4.423274,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "agp-016",
    "city": "malaga",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Málaga, España",
    "latitude": 36.718423,
    "longitude": -4.428492,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "agp-017",
    "city": "malaga",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Málaga, España",
    "latitude": 36.728057,
    "longitude": -4.413598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "agp-018",
    "city": "malaga",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Málaga, España",
    "latitude": 36.719426,
    "longitude": -4.420964,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "agp-019",
    "city": "malaga",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Málaga, España",
    "latitude": 36.714208,
    "longitude": -4.427224,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "agp-020",
    "city": "malaga",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Málaga, España",
    "latitude": 36.729102,
    "longitude": -4.418475,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "agp-021",
    "city": "malaga",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Málaga, España",
    "latitude": 36.721736,
    "longitude": -4.420899,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "agp-022",
    "city": "malaga",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Málaga, España",
    "latitude": 36.715476,
    "longitude": -4.420226,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "agp-023",
    "city": "malaga",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Málaga, España",
    "latitude": 36.724225,
    "longitude": -4.42327,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "agp-024",
    "city": "malaga",
    "title": "Basílica 1",
    "address": "Basílica 1, Málaga, España",
    "latitude": 36.721801,
    "longitude": -4.424901,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "agp-025",
    "city": "malaga",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Málaga, España",
    "latitude": 36.722474,
    "longitude": -4.41382,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "agp-026",
    "city": "malaga",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Málaga, España",
    "latitude": 36.71943,
    "longitude": -4.423451,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "agp-027",
    "city": "malaga",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Málaga, España",
    "latitude": 36.717799,
    "longitude": -4.428464,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "agp-028",
    "city": "malaga",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Málaga, España",
    "latitude": 36.72888,
    "longitude": -4.413914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "agp-029",
    "city": "malaga",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Málaga, España",
    "latitude": 36.719249,
    "longitude": -4.42107,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "agp-030",
    "city": "malaga",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Málaga, España",
    "latitude": 36.714236,
    "longitude": -4.426184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "agp-031",
    "city": "malaga",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Málaga, España",
    "latitude": 36.728786,
    "longitude": -4.419407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "agp-032",
    "city": "malaga",
    "title": "Muralla 1",
    "address": "Muralla 1, Málaga, España",
    "latitude": 36.72163,
    "longitude": -4.42137,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "agp-033",
    "city": "malaga",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Málaga, España",
    "latitude": 36.716516,
    "longitude": -4.418841,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "agp-034",
    "city": "malaga",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Málaga, España",
    "latitude": 36.723293,
    "longitude": -4.423925,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "agp-035",
    "city": "malaga",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Málaga, España",
    "latitude": 36.72133,
    "longitude": -4.425422,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "agp-036",
    "city": "malaga",
    "title": "Museo local 1",
    "address": "Museo local 1, Málaga, España",
    "latitude": 36.723859,
    "longitude": -4.413186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "agp-037",
    "city": "malaga",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Málaga, España",
    "latitude": 36.718775,
    "longitude": -4.423581,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "agp-038",
    "city": "malaga",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Málaga, España",
    "latitude": 36.717278,
    "longitude": -4.42826,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "agp-039",
    "city": "malaga",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Málaga, España",
    "latitude": 36.729514,
    "longitude": -4.414421,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "agp-040",
    "city": "malaga",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Málaga, España",
    "latitude": 36.719119,
    "longitude": -4.421169,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bio-001",
    "city": "bilbao",
    "title": "Museo Guggenheim",
    "address": "Museo Guggenheim, Bilbao, España",
    "latitude": 43.2675,
    "longitude": -2.935495,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bio-002",
    "city": "bilbao",
    "title": "Casco Viejo",
    "address": "Casco Viejo, Bilbao, España",
    "latitude": 43.264464,
    "longitude": -2.937163,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bio-003",
    "city": "bilbao",
    "title": "Mercado de la Ribera",
    "address": "Mercado de la Ribera, Bilbao, España",
    "latitude": 43.261345,
    "longitude": -2.929232,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bio-004",
    "city": "bilbao",
    "title": "Puente Zubizuri",
    "address": "Puente Zubizuri, Bilbao, España",
    "latitude": 43.262505,
    "longitude": -2.936661,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bio-005",
    "city": "bilbao",
    "title": "San Mamés",
    "address": "San Mamés, Bilbao, España",
    "latitude": 43.260837,
    "longitude": -2.94194,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bio-006",
    "city": "bilbao",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Bilbao, España",
    "latitude": 43.268768,
    "longitude": -2.927081,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bio-007",
    "city": "bilbao",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Bilbao, España",
    "latitude": 43.261339,
    "longitude": -2.934457,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bio-008",
    "city": "bilbao",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Bilbao, España",
    "latitude": 43.25606,
    "longitude": -2.941724,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bio-009",
    "city": "bilbao",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Bilbao, España",
    "latitude": 43.270919,
    "longitude": -2.931233,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bio-010",
    "city": "bilbao",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Bilbao, España",
    "latitude": 43.263543,
    "longitude": -2.934016,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bio-011",
    "city": "bilbao",
    "title": "Castillo 1",
    "address": "Castillo 1, Bilbao, España",
    "latitude": 43.256276,
    "longitude": -2.935242,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bio-012",
    "city": "bilbao",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Bilbao, España",
    "latitude": 43.266767,
    "longitude": -2.936187,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bio-013",
    "city": "bilbao",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Bilbao, España",
    "latitude": 43.263984,
    "longitude": -2.937877,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bio-014",
    "city": "bilbao",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Bilbao, España",
    "latitude": 43.262758,
    "longitude": -2.928243,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bio-015",
    "city": "bilbao",
    "title": "Estación central 1",
    "address": "Estación central 1, Bilbao, España",
    "latitude": 43.261813,
    "longitude": -2.936874,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bio-016",
    "city": "bilbao",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Bilbao, España",
    "latitude": 43.260123,
    "longitude": -2.942092,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bio-017",
    "city": "bilbao",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Bilbao, España",
    "latitude": 43.269757,
    "longitude": -2.927198,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bio-018",
    "city": "bilbao",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Bilbao, España",
    "latitude": 43.261126,
    "longitude": -2.934564,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bio-019",
    "city": "bilbao",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Bilbao, España",
    "latitude": 43.255908,
    "longitude": -2.940824,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bio-020",
    "city": "bilbao",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Bilbao, España",
    "latitude": 43.270802,
    "longitude": -2.932075,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bio-021",
    "city": "bilbao",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Bilbao, España",
    "latitude": 43.263436,
    "longitude": -2.934499,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bio-022",
    "city": "bilbao",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Bilbao, España",
    "latitude": 43.257176,
    "longitude": -2.933826,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bio-023",
    "city": "bilbao",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Bilbao, España",
    "latitude": 43.265925,
    "longitude": -2.93687,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bio-024",
    "city": "bilbao",
    "title": "Basílica 1",
    "address": "Basílica 1, Bilbao, España",
    "latitude": 43.263501,
    "longitude": -2.938501,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bio-025",
    "city": "bilbao",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Bilbao, España",
    "latitude": 43.264174,
    "longitude": -2.92742,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bio-026",
    "city": "bilbao",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Bilbao, España",
    "latitude": 43.26113,
    "longitude": -2.937051,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bio-027",
    "city": "bilbao",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Bilbao, España",
    "latitude": 43.259499,
    "longitude": -2.942064,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bio-028",
    "city": "bilbao",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Bilbao, España",
    "latitude": 43.27058,
    "longitude": -2.927514,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bio-029",
    "city": "bilbao",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Bilbao, España",
    "latitude": 43.260949,
    "longitude": -2.93467,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bio-030",
    "city": "bilbao",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Bilbao, España",
    "latitude": 43.255936,
    "longitude": -2.939784,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bio-031",
    "city": "bilbao",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Bilbao, España",
    "latitude": 43.270486,
    "longitude": -2.933007,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bio-032",
    "city": "bilbao",
    "title": "Muralla 1",
    "address": "Muralla 1, Bilbao, España",
    "latitude": 43.26333,
    "longitude": -2.93497,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bio-033",
    "city": "bilbao",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Bilbao, España",
    "latitude": 43.258216,
    "longitude": -2.932441,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bio-034",
    "city": "bilbao",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Bilbao, España",
    "latitude": 43.264993,
    "longitude": -2.937525,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bio-035",
    "city": "bilbao",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Bilbao, España",
    "latitude": 43.26303,
    "longitude": -2.939022,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bio-036",
    "city": "bilbao",
    "title": "Museo local 1",
    "address": "Museo local 1, Bilbao, España",
    "latitude": 43.265559,
    "longitude": -2.926786,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bio-037",
    "city": "bilbao",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Bilbao, España",
    "latitude": 43.260475,
    "longitude": -2.937181,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bio-038",
    "city": "bilbao",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Bilbao, España",
    "latitude": 43.258978,
    "longitude": -2.94186,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bio-039",
    "city": "bilbao",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Bilbao, España",
    "latitude": 43.271214,
    "longitude": -2.928021,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bio-040",
    "city": "bilbao",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Bilbao, España",
    "latitude": 43.260819,
    "longitude": -2.934769,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zgz-001",
    "city": "zaragoza",
    "title": "Basílica del Pilar",
    "address": "Basílica del Pilar, Zaragoza, España",
    "latitude": 41.6533,
    "longitude": -0.889595,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zgz-002",
    "city": "zaragoza",
    "title": "La Seo",
    "address": "La Seo, Zaragoza, España",
    "latitude": 41.650264,
    "longitude": -0.891263,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zgz-003",
    "city": "zaragoza",
    "title": "Palacio de la Aljafería",
    "address": "Palacio de la Aljafería, Zaragoza, España",
    "latitude": 41.647145,
    "longitude": -0.883332,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zgz-004",
    "city": "zaragoza",
    "title": "Puente de Piedra",
    "address": "Puente de Piedra, Zaragoza, España",
    "latitude": 41.648305,
    "longitude": -0.890761,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zgz-005",
    "city": "zaragoza",
    "title": "Plaza del Pilar",
    "address": "Plaza del Pilar, Zaragoza, España",
    "latitude": 41.646637,
    "longitude": -0.89604,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zgz-006",
    "city": "zaragoza",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Zaragoza, España",
    "latitude": 41.654568,
    "longitude": -0.881181,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zgz-007",
    "city": "zaragoza",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Zaragoza, España",
    "latitude": 41.647139,
    "longitude": -0.888557,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zgz-008",
    "city": "zaragoza",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Zaragoza, España",
    "latitude": 41.64186,
    "longitude": -0.895824,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zgz-009",
    "city": "zaragoza",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Zaragoza, España",
    "latitude": 41.656719,
    "longitude": -0.885333,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zgz-010",
    "city": "zaragoza",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Zaragoza, España",
    "latitude": 41.649343,
    "longitude": -0.888116,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zgz-011",
    "city": "zaragoza",
    "title": "Castillo 1",
    "address": "Castillo 1, Zaragoza, España",
    "latitude": 41.642076,
    "longitude": -0.889342,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zgz-012",
    "city": "zaragoza",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Zaragoza, España",
    "latitude": 41.652567,
    "longitude": -0.890287,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zgz-013",
    "city": "zaragoza",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Zaragoza, España",
    "latitude": 41.649784,
    "longitude": -0.891977,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zgz-014",
    "city": "zaragoza",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Zaragoza, España",
    "latitude": 41.648558,
    "longitude": -0.882343,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zgz-015",
    "city": "zaragoza",
    "title": "Estación central 1",
    "address": "Estación central 1, Zaragoza, España",
    "latitude": 41.647613,
    "longitude": -0.890974,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zgz-016",
    "city": "zaragoza",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Zaragoza, España",
    "latitude": 41.645923,
    "longitude": -0.896192,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zgz-017",
    "city": "zaragoza",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Zaragoza, España",
    "latitude": 41.655557,
    "longitude": -0.881298,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zgz-018",
    "city": "zaragoza",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Zaragoza, España",
    "latitude": 41.646926,
    "longitude": -0.888664,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zgz-019",
    "city": "zaragoza",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Zaragoza, España",
    "latitude": 41.641708,
    "longitude": -0.894924,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zgz-020",
    "city": "zaragoza",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Zaragoza, España",
    "latitude": 41.656602,
    "longitude": -0.886175,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zgz-021",
    "city": "zaragoza",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Zaragoza, España",
    "latitude": 41.649236,
    "longitude": -0.888599,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zgz-022",
    "city": "zaragoza",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Zaragoza, España",
    "latitude": 41.642976,
    "longitude": -0.887926,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zgz-023",
    "city": "zaragoza",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Zaragoza, España",
    "latitude": 41.651725,
    "longitude": -0.89097,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zgz-024",
    "city": "zaragoza",
    "title": "Basílica 1",
    "address": "Basílica 1, Zaragoza, España",
    "latitude": 41.649301,
    "longitude": -0.892601,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zgz-025",
    "city": "zaragoza",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Zaragoza, España",
    "latitude": 41.649974,
    "longitude": -0.88152,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zgz-026",
    "city": "zaragoza",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Zaragoza, España",
    "latitude": 41.64693,
    "longitude": -0.891151,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zgz-027",
    "city": "zaragoza",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Zaragoza, España",
    "latitude": 41.645299,
    "longitude": -0.896164,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zgz-028",
    "city": "zaragoza",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Zaragoza, España",
    "latitude": 41.65638,
    "longitude": -0.881614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zgz-029",
    "city": "zaragoza",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Zaragoza, España",
    "latitude": 41.646749,
    "longitude": -0.88877,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zgz-030",
    "city": "zaragoza",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Zaragoza, España",
    "latitude": 41.641736,
    "longitude": -0.893884,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zgz-031",
    "city": "zaragoza",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Zaragoza, España",
    "latitude": 41.656286,
    "longitude": -0.887107,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zgz-032",
    "city": "zaragoza",
    "title": "Muralla 1",
    "address": "Muralla 1, Zaragoza, España",
    "latitude": 41.64913,
    "longitude": -0.88907,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zgz-033",
    "city": "zaragoza",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Zaragoza, España",
    "latitude": 41.644016,
    "longitude": -0.886541,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zgz-034",
    "city": "zaragoza",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Zaragoza, España",
    "latitude": 41.650793,
    "longitude": -0.891625,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zgz-035",
    "city": "zaragoza",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Zaragoza, España",
    "latitude": 41.64883,
    "longitude": -0.893122,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zgz-036",
    "city": "zaragoza",
    "title": "Museo local 1",
    "address": "Museo local 1, Zaragoza, España",
    "latitude": 41.651359,
    "longitude": -0.880886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zgz-037",
    "city": "zaragoza",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Zaragoza, España",
    "latitude": 41.646275,
    "longitude": -0.891281,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zgz-038",
    "city": "zaragoza",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Zaragoza, España",
    "latitude": 41.644778,
    "longitude": -0.89596,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zgz-039",
    "city": "zaragoza",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Zaragoza, España",
    "latitude": 41.657014,
    "longitude": -0.882121,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zgz-040",
    "city": "zaragoza",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Zaragoza, España",
    "latitude": 41.646619,
    "longitude": -0.888869,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pmi-001",
    "city": "palma",
    "title": "Catedral de Mallorca",
    "address": "Catedral de Mallorca, Palma, España",
    "latitude": 39.5741,
    "longitude": 2.649705,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pmi-002",
    "city": "palma",
    "title": "Castell de Bellver",
    "address": "Castell de Bellver, Palma, España",
    "latitude": 39.571064,
    "longitude": 2.648037,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pmi-003",
    "city": "palma",
    "title": "Paseo del Borne",
    "address": "Paseo del Borne, Palma, España",
    "latitude": 39.567945,
    "longitude": 2.655968,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pmi-004",
    "city": "palma",
    "title": "La Lonja",
    "address": "La Lonja, Palma, España",
    "latitude": 39.569105,
    "longitude": 2.648539,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pmi-005",
    "city": "palma",
    "title": "Playa de Palma",
    "address": "Playa de Palma, Palma, España",
    "latitude": 39.567437,
    "longitude": 2.64326,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pmi-006",
    "city": "palma",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Palma, España",
    "latitude": 39.575368,
    "longitude": 2.658119,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pmi-007",
    "city": "palma",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Palma, España",
    "latitude": 39.567939,
    "longitude": 2.650743,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pmi-008",
    "city": "palma",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Palma, España",
    "latitude": 39.56266,
    "longitude": 2.643476,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pmi-009",
    "city": "palma",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Palma, España",
    "latitude": 39.577519,
    "longitude": 2.653967,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pmi-010",
    "city": "palma",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Palma, España",
    "latitude": 39.570143,
    "longitude": 2.651184,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pmi-011",
    "city": "palma",
    "title": "Castillo 1",
    "address": "Castillo 1, Palma, España",
    "latitude": 39.562876,
    "longitude": 2.649958,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pmi-012",
    "city": "palma",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Palma, España",
    "latitude": 39.573367,
    "longitude": 2.649013,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pmi-013",
    "city": "palma",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Palma, España",
    "latitude": 39.570584,
    "longitude": 2.647323,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pmi-014",
    "city": "palma",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Palma, España",
    "latitude": 39.569358,
    "longitude": 2.656957,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pmi-015",
    "city": "palma",
    "title": "Estación central 1",
    "address": "Estación central 1, Palma, España",
    "latitude": 39.568413,
    "longitude": 2.648326,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pmi-016",
    "city": "palma",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Palma, España",
    "latitude": 39.566723,
    "longitude": 2.643108,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pmi-017",
    "city": "palma",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Palma, España",
    "latitude": 39.576357,
    "longitude": 2.658002,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pmi-018",
    "city": "palma",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Palma, España",
    "latitude": 39.567726,
    "longitude": 2.650636,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pmi-019",
    "city": "palma",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Palma, España",
    "latitude": 39.562508,
    "longitude": 2.644376,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pmi-020",
    "city": "palma",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Palma, España",
    "latitude": 39.577402,
    "longitude": 2.653125,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pmi-021",
    "city": "palma",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Palma, España",
    "latitude": 39.570036,
    "longitude": 2.650701,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pmi-022",
    "city": "palma",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Palma, España",
    "latitude": 39.563776,
    "longitude": 2.651374,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pmi-023",
    "city": "palma",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Palma, España",
    "latitude": 39.572525,
    "longitude": 2.64833,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pmi-024",
    "city": "palma",
    "title": "Basílica 1",
    "address": "Basílica 1, Palma, España",
    "latitude": 39.570101,
    "longitude": 2.646699,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pmi-025",
    "city": "palma",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Palma, España",
    "latitude": 39.570774,
    "longitude": 2.65778,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pmi-026",
    "city": "palma",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Palma, España",
    "latitude": 39.56773,
    "longitude": 2.648149,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pmi-027",
    "city": "palma",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Palma, España",
    "latitude": 39.566099,
    "longitude": 2.643136,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pmi-028",
    "city": "palma",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Palma, España",
    "latitude": 39.57718,
    "longitude": 2.657686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pmi-029",
    "city": "palma",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Palma, España",
    "latitude": 39.567549,
    "longitude": 2.65053,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pmi-030",
    "city": "palma",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Palma, España",
    "latitude": 39.562536,
    "longitude": 2.645416,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pmi-031",
    "city": "palma",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Palma, España",
    "latitude": 39.577086,
    "longitude": 2.652193,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pmi-032",
    "city": "palma",
    "title": "Muralla 1",
    "address": "Muralla 1, Palma, España",
    "latitude": 39.56993,
    "longitude": 2.65023,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pmi-033",
    "city": "palma",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Palma, España",
    "latitude": 39.564816,
    "longitude": 2.652759,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pmi-034",
    "city": "palma",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Palma, España",
    "latitude": 39.571593,
    "longitude": 2.647675,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pmi-035",
    "city": "palma",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Palma, España",
    "latitude": 39.56963,
    "longitude": 2.646178,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pmi-036",
    "city": "palma",
    "title": "Museo local 1",
    "address": "Museo local 1, Palma, España",
    "latitude": 39.572159,
    "longitude": 2.658414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pmi-037",
    "city": "palma",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Palma, España",
    "latitude": 39.567075,
    "longitude": 2.648019,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pmi-038",
    "city": "palma",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Palma, España",
    "latitude": 39.565578,
    "longitude": 2.64334,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pmi-039",
    "city": "palma",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Palma, España",
    "latitude": 39.577814,
    "longitude": 2.657179,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pmi-040",
    "city": "palma",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Palma, España",
    "latitude": 39.567419,
    "longitude": 2.650431,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc-001",
    "city": "alicante",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Alicante, España",
    "latitude": 38.3497,
    "longitude": -0.481495,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc-002",
    "city": "alicante",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Alicante, España",
    "latitude": 38.346664,
    "longitude": -0.483163,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc-003",
    "city": "alicante",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Alicante, España",
    "latitude": 38.343545,
    "longitude": -0.475232,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc-004",
    "city": "alicante",
    "title": "Catedral 1",
    "address": "Catedral 1, Alicante, España",
    "latitude": 38.344705,
    "longitude": -0.482661,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc-005",
    "city": "alicante",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Alicante, España",
    "latitude": 38.343037,
    "longitude": -0.48794,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc-006",
    "city": "alicante",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Alicante, España",
    "latitude": 38.350968,
    "longitude": -0.473081,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc-007",
    "city": "alicante",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Alicante, España",
    "latitude": 38.343539,
    "longitude": -0.480457,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc-008",
    "city": "alicante",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Alicante, España",
    "latitude": 38.33826,
    "longitude": -0.487724,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc-009",
    "city": "alicante",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Alicante, España",
    "latitude": 38.353119,
    "longitude": -0.477233,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc-010",
    "city": "alicante",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Alicante, España",
    "latitude": 38.345743,
    "longitude": -0.480016,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc-011",
    "city": "alicante",
    "title": "Castillo 1",
    "address": "Castillo 1, Alicante, España",
    "latitude": 38.338476,
    "longitude": -0.481242,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc-012",
    "city": "alicante",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Alicante, España",
    "latitude": 38.348967,
    "longitude": -0.482187,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc-013",
    "city": "alicante",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Alicante, España",
    "latitude": 38.346184,
    "longitude": -0.483877,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc-014",
    "city": "alicante",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Alicante, España",
    "latitude": 38.344958,
    "longitude": -0.474243,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc-015",
    "city": "alicante",
    "title": "Estación central 1",
    "address": "Estación central 1, Alicante, España",
    "latitude": 38.344013,
    "longitude": -0.482874,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc-016",
    "city": "alicante",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Alicante, España",
    "latitude": 38.342323,
    "longitude": -0.488092,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc-017",
    "city": "alicante",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Alicante, España",
    "latitude": 38.351957,
    "longitude": -0.473198,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc-018",
    "city": "alicante",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Alicante, España",
    "latitude": 38.343326,
    "longitude": -0.480564,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc-019",
    "city": "alicante",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Alicante, España",
    "latitude": 38.338108,
    "longitude": -0.486824,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc-020",
    "city": "alicante",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Alicante, España",
    "latitude": 38.353002,
    "longitude": -0.478075,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc-021",
    "city": "alicante",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Alicante, España",
    "latitude": 38.345636,
    "longitude": -0.480499,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc-022",
    "city": "alicante",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Alicante, España",
    "latitude": 38.339376,
    "longitude": -0.479826,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc-023",
    "city": "alicante",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Alicante, España",
    "latitude": 38.348125,
    "longitude": -0.48287,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc-024",
    "city": "alicante",
    "title": "Basílica 1",
    "address": "Basílica 1, Alicante, España",
    "latitude": 38.345701,
    "longitude": -0.484501,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc-025",
    "city": "alicante",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Alicante, España",
    "latitude": 38.346374,
    "longitude": -0.47342,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc-026",
    "city": "alicante",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Alicante, España",
    "latitude": 38.34333,
    "longitude": -0.483051,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc-027",
    "city": "alicante",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Alicante, España",
    "latitude": 38.341699,
    "longitude": -0.488064,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc-028",
    "city": "alicante",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Alicante, España",
    "latitude": 38.35278,
    "longitude": -0.473514,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc-029",
    "city": "alicante",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Alicante, España",
    "latitude": 38.343149,
    "longitude": -0.48067,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc-030",
    "city": "alicante",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Alicante, España",
    "latitude": 38.338136,
    "longitude": -0.485784,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc-031",
    "city": "alicante",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Alicante, España",
    "latitude": 38.352686,
    "longitude": -0.479007,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc-032",
    "city": "alicante",
    "title": "Muralla 1",
    "address": "Muralla 1, Alicante, España",
    "latitude": 38.34553,
    "longitude": -0.48097,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc-033",
    "city": "alicante",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Alicante, España",
    "latitude": 38.340416,
    "longitude": -0.478441,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc-034",
    "city": "alicante",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Alicante, España",
    "latitude": 38.347193,
    "longitude": -0.483525,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc-035",
    "city": "alicante",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Alicante, España",
    "latitude": 38.34523,
    "longitude": -0.485022,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc-036",
    "city": "alicante",
    "title": "Museo local 1",
    "address": "Museo local 1, Alicante, España",
    "latitude": 38.347759,
    "longitude": -0.472786,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc-037",
    "city": "alicante",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Alicante, España",
    "latitude": 38.342675,
    "longitude": -0.483181,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc-038",
    "city": "alicante",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Alicante, España",
    "latitude": 38.341178,
    "longitude": -0.48786,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc-039",
    "city": "alicante",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Alicante, España",
    "latitude": 38.353414,
    "longitude": -0.474021,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc-040",
    "city": "alicante",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Alicante, España",
    "latitude": 38.343019,
    "longitude": -0.480769,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "grx-001",
    "city": "granada",
    "title": "Alhambra",
    "address": "Alhambra, Granada, España",
    "latitude": 37.1818,
    "longitude": -3.599095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "grx-002",
    "city": "granada",
    "title": "Generalife",
    "address": "Generalife, Granada, España",
    "latitude": 37.178764,
    "longitude": -3.600763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "grx-003",
    "city": "granada",
    "title": "Mirador de San Nicolás",
    "address": "Mirador de San Nicolás, Granada, España",
    "latitude": 37.175645,
    "longitude": -3.592832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "grx-004",
    "city": "granada",
    "title": "Albaicín",
    "address": "Albaicín, Granada, España",
    "latitude": 37.176805,
    "longitude": -3.600261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "grx-005",
    "city": "granada",
    "title": "Catedral de Granada",
    "address": "Catedral de Granada, Granada, España",
    "latitude": 37.175137,
    "longitude": -3.60554,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "grx-006",
    "city": "granada",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Granada, España",
    "latitude": 37.183068,
    "longitude": -3.590681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "grx-007",
    "city": "granada",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Granada, España",
    "latitude": 37.175639,
    "longitude": -3.598057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "grx-008",
    "city": "granada",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Granada, España",
    "latitude": 37.17036,
    "longitude": -3.605324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "grx-009",
    "city": "granada",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Granada, España",
    "latitude": 37.185219,
    "longitude": -3.594833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "grx-010",
    "city": "granada",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Granada, España",
    "latitude": 37.177843,
    "longitude": -3.597616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "grx-011",
    "city": "granada",
    "title": "Castillo 1",
    "address": "Castillo 1, Granada, España",
    "latitude": 37.170576,
    "longitude": -3.598842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "grx-012",
    "city": "granada",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Granada, España",
    "latitude": 37.181067,
    "longitude": -3.599787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "grx-013",
    "city": "granada",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Granada, España",
    "latitude": 37.178284,
    "longitude": -3.601477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "grx-014",
    "city": "granada",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Granada, España",
    "latitude": 37.177058,
    "longitude": -3.591843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "grx-015",
    "city": "granada",
    "title": "Estación central 1",
    "address": "Estación central 1, Granada, España",
    "latitude": 37.176113,
    "longitude": -3.600474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "grx-016",
    "city": "granada",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Granada, España",
    "latitude": 37.174423,
    "longitude": -3.605692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "grx-017",
    "city": "granada",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Granada, España",
    "latitude": 37.184057,
    "longitude": -3.590798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "grx-018",
    "city": "granada",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Granada, España",
    "latitude": 37.175426,
    "longitude": -3.598164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "grx-019",
    "city": "granada",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Granada, España",
    "latitude": 37.170208,
    "longitude": -3.604424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "grx-020",
    "city": "granada",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Granada, España",
    "latitude": 37.185102,
    "longitude": -3.595675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "grx-021",
    "city": "granada",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Granada, España",
    "latitude": 37.177736,
    "longitude": -3.598099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "grx-022",
    "city": "granada",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Granada, España",
    "latitude": 37.171476,
    "longitude": -3.597426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "grx-023",
    "city": "granada",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Granada, España",
    "latitude": 37.180225,
    "longitude": -3.60047,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "grx-024",
    "city": "granada",
    "title": "Basílica 1",
    "address": "Basílica 1, Granada, España",
    "latitude": 37.177801,
    "longitude": -3.602101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "grx-025",
    "city": "granada",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Granada, España",
    "latitude": 37.178474,
    "longitude": -3.59102,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "grx-026",
    "city": "granada",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Granada, España",
    "latitude": 37.17543,
    "longitude": -3.600651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "grx-027",
    "city": "granada",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Granada, España",
    "latitude": 37.173799,
    "longitude": -3.605664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "grx-028",
    "city": "granada",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Granada, España",
    "latitude": 37.18488,
    "longitude": -3.591114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "grx-029",
    "city": "granada",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Granada, España",
    "latitude": 37.175249,
    "longitude": -3.59827,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "grx-030",
    "city": "granada",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Granada, España",
    "latitude": 37.170236,
    "longitude": -3.603384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "grx-031",
    "city": "granada",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Granada, España",
    "latitude": 37.184786,
    "longitude": -3.596607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "grx-032",
    "city": "granada",
    "title": "Muralla 1",
    "address": "Muralla 1, Granada, España",
    "latitude": 37.17763,
    "longitude": -3.59857,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "grx-033",
    "city": "granada",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Granada, España",
    "latitude": 37.172516,
    "longitude": -3.596041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "grx-034",
    "city": "granada",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Granada, España",
    "latitude": 37.179293,
    "longitude": -3.601125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "grx-035",
    "city": "granada",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Granada, España",
    "latitude": 37.17733,
    "longitude": -3.602622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "grx-036",
    "city": "granada",
    "title": "Museo local 1",
    "address": "Museo local 1, Granada, España",
    "latitude": 37.179859,
    "longitude": -3.590386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "grx-037",
    "city": "granada",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Granada, España",
    "latitude": 37.174775,
    "longitude": -3.600781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "grx-038",
    "city": "granada",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Granada, España",
    "latitude": 37.173278,
    "longitude": -3.60546,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "grx-039",
    "city": "granada",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Granada, España",
    "latitude": 37.185514,
    "longitude": -3.591621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "grx-040",
    "city": "granada",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Granada, España",
    "latitude": 37.175119,
    "longitude": -3.598369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "odb-001",
    "city": "cordoba",
    "title": "Mezquita-Catedral",
    "address": "Mezquita-Catedral, Córdoba, España",
    "latitude": 37.8927,
    "longitude": -4.779895,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "odb-002",
    "city": "cordoba",
    "title": "Puente Romano",
    "address": "Puente Romano, Córdoba, España",
    "latitude": 37.889664,
    "longitude": -4.781563,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "odb-003",
    "city": "cordoba",
    "title": "Alcázar de los Reyes Cristianos",
    "address": "Alcázar de los Reyes Cristianos, Córdoba, España",
    "latitude": 37.886545,
    "longitude": -4.773632,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "odb-004",
    "city": "cordoba",
    "title": "Judería",
    "address": "Judería, Córdoba, España",
    "latitude": 37.887705,
    "longitude": -4.781061,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "odb-005",
    "city": "cordoba",
    "title": "Medina Azahara",
    "address": "Medina Azahara, Córdoba, España",
    "latitude": 37.886037,
    "longitude": -4.78634,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "odb-006",
    "city": "cordoba",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Córdoba, España",
    "latitude": 37.893968,
    "longitude": -4.771481,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "odb-007",
    "city": "cordoba",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Córdoba, España",
    "latitude": 37.886539,
    "longitude": -4.778857,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "odb-008",
    "city": "cordoba",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Córdoba, España",
    "latitude": 37.88126,
    "longitude": -4.786124,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "odb-009",
    "city": "cordoba",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Córdoba, España",
    "latitude": 37.896119,
    "longitude": -4.775633,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "odb-010",
    "city": "cordoba",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Córdoba, España",
    "latitude": 37.888743,
    "longitude": -4.778416,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "odb-011",
    "city": "cordoba",
    "title": "Castillo 1",
    "address": "Castillo 1, Córdoba, España",
    "latitude": 37.881476,
    "longitude": -4.779642,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "odb-012",
    "city": "cordoba",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Córdoba, España",
    "latitude": 37.891967,
    "longitude": -4.780587,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "odb-013",
    "city": "cordoba",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Córdoba, España",
    "latitude": 37.889184,
    "longitude": -4.782277,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "odb-014",
    "city": "cordoba",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Córdoba, España",
    "latitude": 37.887958,
    "longitude": -4.772643,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "odb-015",
    "city": "cordoba",
    "title": "Estación central 1",
    "address": "Estación central 1, Córdoba, España",
    "latitude": 37.887013,
    "longitude": -4.781274,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "odb-016",
    "city": "cordoba",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Córdoba, España",
    "latitude": 37.885323,
    "longitude": -4.786492,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "odb-017",
    "city": "cordoba",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Córdoba, España",
    "latitude": 37.894957,
    "longitude": -4.771598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "odb-018",
    "city": "cordoba",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Córdoba, España",
    "latitude": 37.886326,
    "longitude": -4.778964,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "odb-019",
    "city": "cordoba",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Córdoba, España",
    "latitude": 37.881108,
    "longitude": -4.785224,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "odb-020",
    "city": "cordoba",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Córdoba, España",
    "latitude": 37.896002,
    "longitude": -4.776475,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "odb-021",
    "city": "cordoba",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Córdoba, España",
    "latitude": 37.888636,
    "longitude": -4.778899,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "odb-022",
    "city": "cordoba",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Córdoba, España",
    "latitude": 37.882376,
    "longitude": -4.778226,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "odb-023",
    "city": "cordoba",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Córdoba, España",
    "latitude": 37.891125,
    "longitude": -4.78127,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "odb-024",
    "city": "cordoba",
    "title": "Basílica 1",
    "address": "Basílica 1, Córdoba, España",
    "latitude": 37.888701,
    "longitude": -4.782901,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "odb-025",
    "city": "cordoba",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Córdoba, España",
    "latitude": 37.889374,
    "longitude": -4.77182,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "odb-026",
    "city": "cordoba",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Córdoba, España",
    "latitude": 37.88633,
    "longitude": -4.781451,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "odb-027",
    "city": "cordoba",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Córdoba, España",
    "latitude": 37.884699,
    "longitude": -4.786464,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "odb-028",
    "city": "cordoba",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Córdoba, España",
    "latitude": 37.89578,
    "longitude": -4.771914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "odb-029",
    "city": "cordoba",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Córdoba, España",
    "latitude": 37.886149,
    "longitude": -4.77907,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "odb-030",
    "city": "cordoba",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Córdoba, España",
    "latitude": 37.881136,
    "longitude": -4.784184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "odb-031",
    "city": "cordoba",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Córdoba, España",
    "latitude": 37.895686,
    "longitude": -4.777407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "odb-032",
    "city": "cordoba",
    "title": "Muralla 1",
    "address": "Muralla 1, Córdoba, España",
    "latitude": 37.88853,
    "longitude": -4.77937,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "odb-033",
    "city": "cordoba",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Córdoba, España",
    "latitude": 37.883416,
    "longitude": -4.776841,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "odb-034",
    "city": "cordoba",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Córdoba, España",
    "latitude": 37.890193,
    "longitude": -4.781925,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "odb-035",
    "city": "cordoba",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Córdoba, España",
    "latitude": 37.88823,
    "longitude": -4.783422,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "odb-036",
    "city": "cordoba",
    "title": "Museo local 1",
    "address": "Museo local 1, Córdoba, España",
    "latitude": 37.890759,
    "longitude": -4.771186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "odb-037",
    "city": "cordoba",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Córdoba, España",
    "latitude": 37.885675,
    "longitude": -4.781581,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "odb-038",
    "city": "cordoba",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Córdoba, España",
    "latitude": 37.884178,
    "longitude": -4.78626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "odb-039",
    "city": "cordoba",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Córdoba, España",
    "latitude": 37.896414,
    "longitude": -4.772421,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "odb-040",
    "city": "cordoba",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Córdoba, España",
    "latitude": 37.886019,
    "longitude": -4.779169,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vgo-001",
    "city": "vigo",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Vigo, España",
    "latitude": 42.2451,
    "longitude": -8.721195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vgo-002",
    "city": "vigo",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Vigo, España",
    "latitude": 42.242064,
    "longitude": -8.722863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vgo-003",
    "city": "vigo",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Vigo, España",
    "latitude": 42.238945,
    "longitude": -8.714932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vgo-004",
    "city": "vigo",
    "title": "Catedral 1",
    "address": "Catedral 1, Vigo, España",
    "latitude": 42.240105,
    "longitude": -8.722361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vgo-005",
    "city": "vigo",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Vigo, España",
    "latitude": 42.238437,
    "longitude": -8.72764,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vgo-006",
    "city": "vigo",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Vigo, España",
    "latitude": 42.246368,
    "longitude": -8.712781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vgo-007",
    "city": "vigo",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Vigo, España",
    "latitude": 42.238939,
    "longitude": -8.720157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vgo-008",
    "city": "vigo",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Vigo, España",
    "latitude": 42.23366,
    "longitude": -8.727424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vgo-009",
    "city": "vigo",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Vigo, España",
    "latitude": 42.248519,
    "longitude": -8.716933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vgo-010",
    "city": "vigo",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Vigo, España",
    "latitude": 42.241143,
    "longitude": -8.719716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vgo-011",
    "city": "vigo",
    "title": "Castillo 1",
    "address": "Castillo 1, Vigo, España",
    "latitude": 42.233876,
    "longitude": -8.720942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vgo-012",
    "city": "vigo",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Vigo, España",
    "latitude": 42.244367,
    "longitude": -8.721887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vgo-013",
    "city": "vigo",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Vigo, España",
    "latitude": 42.241584,
    "longitude": -8.723577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vgo-014",
    "city": "vigo",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Vigo, España",
    "latitude": 42.240358,
    "longitude": -8.713943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vgo-015",
    "city": "vigo",
    "title": "Estación central 1",
    "address": "Estación central 1, Vigo, España",
    "latitude": 42.239413,
    "longitude": -8.722574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vgo-016",
    "city": "vigo",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Vigo, España",
    "latitude": 42.237723,
    "longitude": -8.727792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vgo-017",
    "city": "vigo",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Vigo, España",
    "latitude": 42.247357,
    "longitude": -8.712898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vgo-018",
    "city": "vigo",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Vigo, España",
    "latitude": 42.238726,
    "longitude": -8.720264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vgo-019",
    "city": "vigo",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Vigo, España",
    "latitude": 42.233508,
    "longitude": -8.726524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vgo-020",
    "city": "vigo",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Vigo, España",
    "latitude": 42.248402,
    "longitude": -8.717775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vgo-021",
    "city": "vigo",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Vigo, España",
    "latitude": 42.241036,
    "longitude": -8.720199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vgo-022",
    "city": "vigo",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Vigo, España",
    "latitude": 42.234776,
    "longitude": -8.719526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vgo-023",
    "city": "vigo",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Vigo, España",
    "latitude": 42.243525,
    "longitude": -8.72257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vgo-024",
    "city": "vigo",
    "title": "Basílica 1",
    "address": "Basílica 1, Vigo, España",
    "latitude": 42.241101,
    "longitude": -8.724201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vgo-025",
    "city": "vigo",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Vigo, España",
    "latitude": 42.241774,
    "longitude": -8.71312,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vgo-026",
    "city": "vigo",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Vigo, España",
    "latitude": 42.23873,
    "longitude": -8.722751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vgo-027",
    "city": "vigo",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Vigo, España",
    "latitude": 42.237099,
    "longitude": -8.727764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vgo-028",
    "city": "vigo",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Vigo, España",
    "latitude": 42.24818,
    "longitude": -8.713214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vgo-029",
    "city": "vigo",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Vigo, España",
    "latitude": 42.238549,
    "longitude": -8.72037,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vgo-030",
    "city": "vigo",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Vigo, España",
    "latitude": 42.233536,
    "longitude": -8.725484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vgo-031",
    "city": "vigo",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Vigo, España",
    "latitude": 42.248086,
    "longitude": -8.718707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vgo-032",
    "city": "vigo",
    "title": "Muralla 1",
    "address": "Muralla 1, Vigo, España",
    "latitude": 42.24093,
    "longitude": -8.72067,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vgo-033",
    "city": "vigo",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Vigo, España",
    "latitude": 42.235816,
    "longitude": -8.718141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vgo-034",
    "city": "vigo",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Vigo, España",
    "latitude": 42.242593,
    "longitude": -8.723225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vgo-035",
    "city": "vigo",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Vigo, España",
    "latitude": 42.24063,
    "longitude": -8.724722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vgo-036",
    "city": "vigo",
    "title": "Museo local 1",
    "address": "Museo local 1, Vigo, España",
    "latitude": 42.243159,
    "longitude": -8.712486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vgo-037",
    "city": "vigo",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Vigo, España",
    "latitude": 42.238075,
    "longitude": -8.722881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vgo-038",
    "city": "vigo",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Vigo, España",
    "latitude": 42.236578,
    "longitude": -8.72756,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vgo-039",
    "city": "vigo",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Vigo, España",
    "latitude": 42.248814,
    "longitude": -8.713721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vgo-040",
    "city": "vigo",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Vigo, España",
    "latitude": 42.238419,
    "longitude": -8.720469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gjn-001",
    "city": "gijon",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Gijón, España",
    "latitude": 43.5498,
    "longitude": -5.662395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gjn-002",
    "city": "gijon",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Gijón, España",
    "latitude": 43.546764,
    "longitude": -5.664063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gjn-003",
    "city": "gijon",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Gijón, España",
    "latitude": 43.543645,
    "longitude": -5.656132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gjn-004",
    "city": "gijon",
    "title": "Catedral 1",
    "address": "Catedral 1, Gijón, España",
    "latitude": 43.544805,
    "longitude": -5.663561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gjn-005",
    "city": "gijon",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Gijón, España",
    "latitude": 43.543137,
    "longitude": -5.66884,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gjn-006",
    "city": "gijon",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Gijón, España",
    "latitude": 43.551068,
    "longitude": -5.653981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gjn-007",
    "city": "gijon",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Gijón, España",
    "latitude": 43.543639,
    "longitude": -5.661357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gjn-008",
    "city": "gijon",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Gijón, España",
    "latitude": 43.53836,
    "longitude": -5.668624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gjn-009",
    "city": "gijon",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Gijón, España",
    "latitude": 43.553219,
    "longitude": -5.658133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gjn-010",
    "city": "gijon",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Gijón, España",
    "latitude": 43.545843,
    "longitude": -5.660916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gjn-011",
    "city": "gijon",
    "title": "Castillo 1",
    "address": "Castillo 1, Gijón, España",
    "latitude": 43.538576,
    "longitude": -5.662142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gjn-012",
    "city": "gijon",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Gijón, España",
    "latitude": 43.549067,
    "longitude": -5.663087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gjn-013",
    "city": "gijon",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Gijón, España",
    "latitude": 43.546284,
    "longitude": -5.664777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gjn-014",
    "city": "gijon",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Gijón, España",
    "latitude": 43.545058,
    "longitude": -5.655143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gjn-015",
    "city": "gijon",
    "title": "Estación central 1",
    "address": "Estación central 1, Gijón, España",
    "latitude": 43.544113,
    "longitude": -5.663774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gjn-016",
    "city": "gijon",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Gijón, España",
    "latitude": 43.542423,
    "longitude": -5.668992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gjn-017",
    "city": "gijon",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Gijón, España",
    "latitude": 43.552057,
    "longitude": -5.654098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gjn-018",
    "city": "gijon",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Gijón, España",
    "latitude": 43.543426,
    "longitude": -5.661464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gjn-019",
    "city": "gijon",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Gijón, España",
    "latitude": 43.538208,
    "longitude": -5.667724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gjn-020",
    "city": "gijon",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Gijón, España",
    "latitude": 43.553102,
    "longitude": -5.658975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gjn-021",
    "city": "gijon",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Gijón, España",
    "latitude": 43.545736,
    "longitude": -5.661399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gjn-022",
    "city": "gijon",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Gijón, España",
    "latitude": 43.539476,
    "longitude": -5.660726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gjn-023",
    "city": "gijon",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Gijón, España",
    "latitude": 43.548225,
    "longitude": -5.66377,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gjn-024",
    "city": "gijon",
    "title": "Basílica 1",
    "address": "Basílica 1, Gijón, España",
    "latitude": 43.545801,
    "longitude": -5.665401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gjn-025",
    "city": "gijon",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Gijón, España",
    "latitude": 43.546474,
    "longitude": -5.65432,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gjn-026",
    "city": "gijon",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Gijón, España",
    "latitude": 43.54343,
    "longitude": -5.663951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gjn-027",
    "city": "gijon",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Gijón, España",
    "latitude": 43.541799,
    "longitude": -5.668964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gjn-028",
    "city": "gijon",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Gijón, España",
    "latitude": 43.55288,
    "longitude": -5.654414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gjn-029",
    "city": "gijon",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Gijón, España",
    "latitude": 43.543249,
    "longitude": -5.66157,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gjn-030",
    "city": "gijon",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Gijón, España",
    "latitude": 43.538236,
    "longitude": -5.666684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gjn-031",
    "city": "gijon",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Gijón, España",
    "latitude": 43.552786,
    "longitude": -5.659907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gjn-032",
    "city": "gijon",
    "title": "Muralla 1",
    "address": "Muralla 1, Gijón, España",
    "latitude": 43.54563,
    "longitude": -5.66187,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gjn-033",
    "city": "gijon",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Gijón, España",
    "latitude": 43.540516,
    "longitude": -5.659341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gjn-034",
    "city": "gijon",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Gijón, España",
    "latitude": 43.547293,
    "longitude": -5.664425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gjn-035",
    "city": "gijon",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Gijón, España",
    "latitude": 43.54533,
    "longitude": -5.665922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gjn-036",
    "city": "gijon",
    "title": "Museo local 1",
    "address": "Museo local 1, Gijón, España",
    "latitude": 43.547859,
    "longitude": -5.653686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gjn-037",
    "city": "gijon",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Gijón, España",
    "latitude": 43.542775,
    "longitude": -5.664081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gjn-038",
    "city": "gijon",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Gijón, España",
    "latitude": 43.541278,
    "longitude": -5.66876,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gjn-039",
    "city": "gijon",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Gijón, España",
    "latitude": 43.553514,
    "longitude": -5.654921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gjn-040",
    "city": "gijon",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Gijón, España",
    "latitude": 43.543119,
    "longitude": -5.661669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cor-001",
    "city": "a-coruna",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, A Coruña, España",
    "latitude": 43.3668,
    "longitude": -8.411995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cor-002",
    "city": "a-coruna",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, A Coruña, España",
    "latitude": 43.363764,
    "longitude": -8.413663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cor-003",
    "city": "a-coruna",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, A Coruña, España",
    "latitude": 43.360645,
    "longitude": -8.405732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cor-004",
    "city": "a-coruna",
    "title": "Catedral 1",
    "address": "Catedral 1, A Coruña, España",
    "latitude": 43.361805,
    "longitude": -8.413161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cor-005",
    "city": "a-coruna",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, A Coruña, España",
    "latitude": 43.360137,
    "longitude": -8.41844,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cor-006",
    "city": "a-coruna",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, A Coruña, España",
    "latitude": 43.368068,
    "longitude": -8.403581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cor-007",
    "city": "a-coruna",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, A Coruña, España",
    "latitude": 43.360639,
    "longitude": -8.410957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cor-008",
    "city": "a-coruna",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, A Coruña, España",
    "latitude": 43.35536,
    "longitude": -8.418224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cor-009",
    "city": "a-coruna",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, A Coruña, España",
    "latitude": 43.370219,
    "longitude": -8.407733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cor-010",
    "city": "a-coruna",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, A Coruña, España",
    "latitude": 43.362843,
    "longitude": -8.410516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cor-011",
    "city": "a-coruna",
    "title": "Castillo 1",
    "address": "Castillo 1, A Coruña, España",
    "latitude": 43.355576,
    "longitude": -8.411742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cor-012",
    "city": "a-coruna",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, A Coruña, España",
    "latitude": 43.366067,
    "longitude": -8.412687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cor-013",
    "city": "a-coruna",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, A Coruña, España",
    "latitude": 43.363284,
    "longitude": -8.414377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cor-014",
    "city": "a-coruna",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, A Coruña, España",
    "latitude": 43.362058,
    "longitude": -8.404743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cor-015",
    "city": "a-coruna",
    "title": "Estación central 1",
    "address": "Estación central 1, A Coruña, España",
    "latitude": 43.361113,
    "longitude": -8.413374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cor-016",
    "city": "a-coruna",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, A Coruña, España",
    "latitude": 43.359423,
    "longitude": -8.418592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cor-017",
    "city": "a-coruna",
    "title": "Auditorio 1",
    "address": "Auditorio 1, A Coruña, España",
    "latitude": 43.369057,
    "longitude": -8.403698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cor-018",
    "city": "a-coruna",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, A Coruña, España",
    "latitude": 43.360426,
    "longitude": -8.411064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cor-019",
    "city": "a-coruna",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, A Coruña, España",
    "latitude": 43.355208,
    "longitude": -8.417324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cor-020",
    "city": "a-coruna",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, A Coruña, España",
    "latitude": 43.370102,
    "longitude": -8.408575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cor-021",
    "city": "a-coruna",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, A Coruña, España",
    "latitude": 43.362736,
    "longitude": -8.410999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cor-022",
    "city": "a-coruna",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, A Coruña, España",
    "latitude": 43.356476,
    "longitude": -8.410326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cor-023",
    "city": "a-coruna",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, A Coruña, España",
    "latitude": 43.365225,
    "longitude": -8.41337,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cor-024",
    "city": "a-coruna",
    "title": "Basílica 1",
    "address": "Basílica 1, A Coruña, España",
    "latitude": 43.362801,
    "longitude": -8.415001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cor-025",
    "city": "a-coruna",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, A Coruña, España",
    "latitude": 43.363474,
    "longitude": -8.40392,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cor-026",
    "city": "a-coruna",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, A Coruña, España",
    "latitude": 43.36043,
    "longitude": -8.413551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cor-027",
    "city": "a-coruna",
    "title": "Monasterio 1",
    "address": "Monasterio 1, A Coruña, España",
    "latitude": 43.358799,
    "longitude": -8.418564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cor-028",
    "city": "a-coruna",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, A Coruña, España",
    "latitude": 43.36988,
    "longitude": -8.404014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cor-029",
    "city": "a-coruna",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, A Coruña, España",
    "latitude": 43.360249,
    "longitude": -8.41117,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cor-030",
    "city": "a-coruna",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, A Coruña, España",
    "latitude": 43.355236,
    "longitude": -8.416284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cor-031",
    "city": "a-coruna",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, A Coruña, España",
    "latitude": 43.369786,
    "longitude": -8.409507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cor-032",
    "city": "a-coruna",
    "title": "Muralla 1",
    "address": "Muralla 1, A Coruña, España",
    "latitude": 43.36263,
    "longitude": -8.41147,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cor-033",
    "city": "a-coruna",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, A Coruña, España",
    "latitude": 43.357516,
    "longitude": -8.408941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cor-034",
    "city": "a-coruna",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, A Coruña, España",
    "latitude": 43.364293,
    "longitude": -8.414025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cor-035",
    "city": "a-coruna",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, A Coruña, España",
    "latitude": 43.36233,
    "longitude": -8.415522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cor-036",
    "city": "a-coruna",
    "title": "Museo local 1",
    "address": "Museo local 1, A Coruña, España",
    "latitude": 43.364859,
    "longitude": -8.403286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cor-037",
    "city": "a-coruna",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, A Coruña, España",
    "latitude": 43.359775,
    "longitude": -8.413681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cor-038",
    "city": "a-coruna",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, A Coruña, España",
    "latitude": 43.358278,
    "longitude": -8.41836,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cor-039",
    "city": "a-coruna",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, A Coruña, España",
    "latitude": 43.370514,
    "longitude": -8.404521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cor-040",
    "city": "a-coruna",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, A Coruña, España",
    "latitude": 43.360119,
    "longitude": -8.411269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ovd-001",
    "city": "oviedo",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Oviedo, España",
    "latitude": 43.3664,
    "longitude": -5.849895,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ovd-002",
    "city": "oviedo",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Oviedo, España",
    "latitude": 43.363364,
    "longitude": -5.851563,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ovd-003",
    "city": "oviedo",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Oviedo, España",
    "latitude": 43.360245,
    "longitude": -5.843632,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ovd-004",
    "city": "oviedo",
    "title": "Catedral 1",
    "address": "Catedral 1, Oviedo, España",
    "latitude": 43.361405,
    "longitude": -5.851061,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ovd-005",
    "city": "oviedo",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Oviedo, España",
    "latitude": 43.359737,
    "longitude": -5.85634,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ovd-006",
    "city": "oviedo",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Oviedo, España",
    "latitude": 43.367668,
    "longitude": -5.841481,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ovd-007",
    "city": "oviedo",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Oviedo, España",
    "latitude": 43.360239,
    "longitude": -5.848857,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ovd-008",
    "city": "oviedo",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Oviedo, España",
    "latitude": 43.35496,
    "longitude": -5.856124,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ovd-009",
    "city": "oviedo",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Oviedo, España",
    "latitude": 43.369819,
    "longitude": -5.845633,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ovd-010",
    "city": "oviedo",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Oviedo, España",
    "latitude": 43.362443,
    "longitude": -5.848416,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ovd-011",
    "city": "oviedo",
    "title": "Castillo 1",
    "address": "Castillo 1, Oviedo, España",
    "latitude": 43.355176,
    "longitude": -5.849642,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ovd-012",
    "city": "oviedo",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Oviedo, España",
    "latitude": 43.365667,
    "longitude": -5.850587,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ovd-013",
    "city": "oviedo",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Oviedo, España",
    "latitude": 43.362884,
    "longitude": -5.852277,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ovd-014",
    "city": "oviedo",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Oviedo, España",
    "latitude": 43.361658,
    "longitude": -5.842643,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ovd-015",
    "city": "oviedo",
    "title": "Estación central 1",
    "address": "Estación central 1, Oviedo, España",
    "latitude": 43.360713,
    "longitude": -5.851274,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ovd-016",
    "city": "oviedo",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Oviedo, España",
    "latitude": 43.359023,
    "longitude": -5.856492,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ovd-017",
    "city": "oviedo",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Oviedo, España",
    "latitude": 43.368657,
    "longitude": -5.841598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ovd-018",
    "city": "oviedo",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Oviedo, España",
    "latitude": 43.360026,
    "longitude": -5.848964,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ovd-019",
    "city": "oviedo",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Oviedo, España",
    "latitude": 43.354808,
    "longitude": -5.855224,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ovd-020",
    "city": "oviedo",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Oviedo, España",
    "latitude": 43.369702,
    "longitude": -5.846475,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ovd-021",
    "city": "oviedo",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Oviedo, España",
    "latitude": 43.362336,
    "longitude": -5.848899,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ovd-022",
    "city": "oviedo",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Oviedo, España",
    "latitude": 43.356076,
    "longitude": -5.848226,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ovd-023",
    "city": "oviedo",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Oviedo, España",
    "latitude": 43.364825,
    "longitude": -5.85127,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ovd-024",
    "city": "oviedo",
    "title": "Basílica 1",
    "address": "Basílica 1, Oviedo, España",
    "latitude": 43.362401,
    "longitude": -5.852901,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ovd-025",
    "city": "oviedo",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Oviedo, España",
    "latitude": 43.363074,
    "longitude": -5.84182,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ovd-026",
    "city": "oviedo",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Oviedo, España",
    "latitude": 43.36003,
    "longitude": -5.851451,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ovd-027",
    "city": "oviedo",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Oviedo, España",
    "latitude": 43.358399,
    "longitude": -5.856464,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ovd-028",
    "city": "oviedo",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Oviedo, España",
    "latitude": 43.36948,
    "longitude": -5.841914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ovd-029",
    "city": "oviedo",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Oviedo, España",
    "latitude": 43.359849,
    "longitude": -5.84907,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ovd-030",
    "city": "oviedo",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Oviedo, España",
    "latitude": 43.354836,
    "longitude": -5.854184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ovd-031",
    "city": "oviedo",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Oviedo, España",
    "latitude": 43.369386,
    "longitude": -5.847407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ovd-032",
    "city": "oviedo",
    "title": "Muralla 1",
    "address": "Muralla 1, Oviedo, España",
    "latitude": 43.36223,
    "longitude": -5.84937,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ovd-033",
    "city": "oviedo",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Oviedo, España",
    "latitude": 43.357116,
    "longitude": -5.846841,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ovd-034",
    "city": "oviedo",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Oviedo, España",
    "latitude": 43.363893,
    "longitude": -5.851925,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ovd-035",
    "city": "oviedo",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Oviedo, España",
    "latitude": 43.36193,
    "longitude": -5.853422,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ovd-036",
    "city": "oviedo",
    "title": "Museo local 1",
    "address": "Museo local 1, Oviedo, España",
    "latitude": 43.364459,
    "longitude": -5.841186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ovd-037",
    "city": "oviedo",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Oviedo, España",
    "latitude": 43.359375,
    "longitude": -5.851581,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ovd-038",
    "city": "oviedo",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Oviedo, España",
    "latitude": 43.357878,
    "longitude": -5.85626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ovd-039",
    "city": "oviedo",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Oviedo, España",
    "latitude": 43.370114,
    "longitude": -5.842421,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ovd-040",
    "city": "oviedo",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Oviedo, España",
    "latitude": 43.359719,
    "longitude": -5.849169,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sdr-001",
    "city": "santander",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Santander, España",
    "latitude": 43.4668,
    "longitude": -3.810395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sdr-002",
    "city": "santander",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Santander, España",
    "latitude": 43.463764,
    "longitude": -3.812063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sdr-003",
    "city": "santander",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Santander, España",
    "latitude": 43.460645,
    "longitude": -3.804132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sdr-004",
    "city": "santander",
    "title": "Catedral 1",
    "address": "Catedral 1, Santander, España",
    "latitude": 43.461805,
    "longitude": -3.811561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sdr-005",
    "city": "santander",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Santander, España",
    "latitude": 43.460137,
    "longitude": -3.81684,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sdr-006",
    "city": "santander",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Santander, España",
    "latitude": 43.468068,
    "longitude": -3.801981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sdr-007",
    "city": "santander",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Santander, España",
    "latitude": 43.460639,
    "longitude": -3.809357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sdr-008",
    "city": "santander",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Santander, España",
    "latitude": 43.45536,
    "longitude": -3.816624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sdr-009",
    "city": "santander",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Santander, España",
    "latitude": 43.470219,
    "longitude": -3.806133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sdr-010",
    "city": "santander",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Santander, España",
    "latitude": 43.462843,
    "longitude": -3.808916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sdr-011",
    "city": "santander",
    "title": "Castillo 1",
    "address": "Castillo 1, Santander, España",
    "latitude": 43.455576,
    "longitude": -3.810142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sdr-012",
    "city": "santander",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Santander, España",
    "latitude": 43.466067,
    "longitude": -3.811087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sdr-013",
    "city": "santander",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Santander, España",
    "latitude": 43.463284,
    "longitude": -3.812777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sdr-014",
    "city": "santander",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Santander, España",
    "latitude": 43.462058,
    "longitude": -3.803143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sdr-015",
    "city": "santander",
    "title": "Estación central 1",
    "address": "Estación central 1, Santander, España",
    "latitude": 43.461113,
    "longitude": -3.811774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sdr-016",
    "city": "santander",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Santander, España",
    "latitude": 43.459423,
    "longitude": -3.816992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sdr-017",
    "city": "santander",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Santander, España",
    "latitude": 43.469057,
    "longitude": -3.802098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sdr-018",
    "city": "santander",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Santander, España",
    "latitude": 43.460426,
    "longitude": -3.809464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sdr-019",
    "city": "santander",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Santander, España",
    "latitude": 43.455208,
    "longitude": -3.815724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sdr-020",
    "city": "santander",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Santander, España",
    "latitude": 43.470102,
    "longitude": -3.806975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sdr-021",
    "city": "santander",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Santander, España",
    "latitude": 43.462736,
    "longitude": -3.809399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sdr-022",
    "city": "santander",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Santander, España",
    "latitude": 43.456476,
    "longitude": -3.808726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sdr-023",
    "city": "santander",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Santander, España",
    "latitude": 43.465225,
    "longitude": -3.81177,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sdr-024",
    "city": "santander",
    "title": "Basílica 1",
    "address": "Basílica 1, Santander, España",
    "latitude": 43.462801,
    "longitude": -3.813401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sdr-025",
    "city": "santander",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Santander, España",
    "latitude": 43.463474,
    "longitude": -3.80232,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sdr-026",
    "city": "santander",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Santander, España",
    "latitude": 43.46043,
    "longitude": -3.811951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sdr-027",
    "city": "santander",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Santander, España",
    "latitude": 43.458799,
    "longitude": -3.816964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sdr-028",
    "city": "santander",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Santander, España",
    "latitude": 43.46988,
    "longitude": -3.802414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sdr-029",
    "city": "santander",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Santander, España",
    "latitude": 43.460249,
    "longitude": -3.80957,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sdr-030",
    "city": "santander",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Santander, España",
    "latitude": 43.455236,
    "longitude": -3.814684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sdr-031",
    "city": "santander",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Santander, España",
    "latitude": 43.469786,
    "longitude": -3.807907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sdr-032",
    "city": "santander",
    "title": "Muralla 1",
    "address": "Muralla 1, Santander, España",
    "latitude": 43.46263,
    "longitude": -3.80987,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sdr-033",
    "city": "santander",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Santander, España",
    "latitude": 43.457516,
    "longitude": -3.807341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sdr-034",
    "city": "santander",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Santander, España",
    "latitude": 43.464293,
    "longitude": -3.812425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sdr-035",
    "city": "santander",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Santander, España",
    "latitude": 43.46233,
    "longitude": -3.813922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sdr-036",
    "city": "santander",
    "title": "Museo local 1",
    "address": "Museo local 1, Santander, España",
    "latitude": 43.464859,
    "longitude": -3.801686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sdr-037",
    "city": "santander",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Santander, España",
    "latitude": 43.459775,
    "longitude": -3.812081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sdr-038",
    "city": "santander",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Santander, España",
    "latitude": 43.458278,
    "longitude": -3.81676,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sdr-039",
    "city": "santander",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Santander, España",
    "latitude": 43.470514,
    "longitude": -3.802921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sdr-040",
    "city": "santander",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Santander, España",
    "latitude": 43.460119,
    "longitude": -3.809669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "eas-001",
    "city": "san-sebastian",
    "title": "Playa de la Concha",
    "address": "Playa de la Concha, San Sebastián, España",
    "latitude": 43.3228,
    "longitude": -1.981695,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "eas-002",
    "city": "san-sebastian",
    "title": "Monte Igueldo",
    "address": "Monte Igueldo, San Sebastián, España",
    "latitude": 43.319764,
    "longitude": -1.983363,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "eas-003",
    "city": "san-sebastian",
    "title": "Peine del Viento",
    "address": "Peine del Viento, San Sebastián, España",
    "latitude": 43.316645,
    "longitude": -1.975432,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "eas-004",
    "city": "san-sebastian",
    "title": "Parte Vieja",
    "address": "Parte Vieja, San Sebastián, España",
    "latitude": 43.317805,
    "longitude": -1.982861,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "eas-005",
    "city": "san-sebastian",
    "title": "Palacio Miramar",
    "address": "Palacio Miramar, San Sebastián, España",
    "latitude": 43.316137,
    "longitude": -1.98814,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "eas-006",
    "city": "san-sebastian",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, San Sebastián, España",
    "latitude": 43.324068,
    "longitude": -1.973281,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "eas-007",
    "city": "san-sebastian",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, San Sebastián, España",
    "latitude": 43.316639,
    "longitude": -1.980657,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "eas-008",
    "city": "san-sebastian",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, San Sebastián, España",
    "latitude": 43.31136,
    "longitude": -1.987924,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "eas-009",
    "city": "san-sebastian",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, San Sebastián, España",
    "latitude": 43.326219,
    "longitude": -1.977433,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "eas-010",
    "city": "san-sebastian",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, San Sebastián, España",
    "latitude": 43.318843,
    "longitude": -1.980216,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "eas-011",
    "city": "san-sebastian",
    "title": "Castillo 1",
    "address": "Castillo 1, San Sebastián, España",
    "latitude": 43.311576,
    "longitude": -1.981442,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "eas-012",
    "city": "san-sebastian",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, San Sebastián, España",
    "latitude": 43.322067,
    "longitude": -1.982387,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "eas-013",
    "city": "san-sebastian",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, San Sebastián, España",
    "latitude": 43.319284,
    "longitude": -1.984077,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "eas-014",
    "city": "san-sebastian",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, San Sebastián, España",
    "latitude": 43.318058,
    "longitude": -1.974443,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "eas-015",
    "city": "san-sebastian",
    "title": "Estación central 1",
    "address": "Estación central 1, San Sebastián, España",
    "latitude": 43.317113,
    "longitude": -1.983074,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "eas-016",
    "city": "san-sebastian",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, San Sebastián, España",
    "latitude": 43.315423,
    "longitude": -1.988292,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "eas-017",
    "city": "san-sebastian",
    "title": "Auditorio 1",
    "address": "Auditorio 1, San Sebastián, España",
    "latitude": 43.325057,
    "longitude": -1.973398,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "eas-018",
    "city": "san-sebastian",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, San Sebastián, España",
    "latitude": 43.316426,
    "longitude": -1.980764,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "eas-019",
    "city": "san-sebastian",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, San Sebastián, España",
    "latitude": 43.311208,
    "longitude": -1.987024,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "eas-020",
    "city": "san-sebastian",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, San Sebastián, España",
    "latitude": 43.326102,
    "longitude": -1.978275,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "eas-021",
    "city": "san-sebastian",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, San Sebastián, España",
    "latitude": 43.318736,
    "longitude": -1.980699,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "eas-022",
    "city": "san-sebastian",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, San Sebastián, España",
    "latitude": 43.312476,
    "longitude": -1.980026,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "eas-023",
    "city": "san-sebastian",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, San Sebastián, España",
    "latitude": 43.321225,
    "longitude": -1.98307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "eas-024",
    "city": "san-sebastian",
    "title": "Basílica 1",
    "address": "Basílica 1, San Sebastián, España",
    "latitude": 43.318801,
    "longitude": -1.984701,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "eas-025",
    "city": "san-sebastian",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, San Sebastián, España",
    "latitude": 43.319474,
    "longitude": -1.97362,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "eas-026",
    "city": "san-sebastian",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, San Sebastián, España",
    "latitude": 43.31643,
    "longitude": -1.983251,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "eas-027",
    "city": "san-sebastian",
    "title": "Monasterio 1",
    "address": "Monasterio 1, San Sebastián, España",
    "latitude": 43.314799,
    "longitude": -1.988264,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "eas-028",
    "city": "san-sebastian",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, San Sebastián, España",
    "latitude": 43.32588,
    "longitude": -1.973714,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "eas-029",
    "city": "san-sebastian",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, San Sebastián, España",
    "latitude": 43.316249,
    "longitude": -1.98087,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "eas-030",
    "city": "san-sebastian",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, San Sebastián, España",
    "latitude": 43.311236,
    "longitude": -1.985984,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "eas-031",
    "city": "san-sebastian",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, San Sebastián, España",
    "latitude": 43.325786,
    "longitude": -1.979207,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "eas-032",
    "city": "san-sebastian",
    "title": "Muralla 1",
    "address": "Muralla 1, San Sebastián, España",
    "latitude": 43.31863,
    "longitude": -1.98117,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "eas-033",
    "city": "san-sebastian",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, San Sebastián, España",
    "latitude": 43.313516,
    "longitude": -1.978641,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "eas-034",
    "city": "san-sebastian",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, San Sebastián, España",
    "latitude": 43.320293,
    "longitude": -1.983725,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "eas-035",
    "city": "san-sebastian",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, San Sebastián, España",
    "latitude": 43.31833,
    "longitude": -1.985222,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "eas-036",
    "city": "san-sebastian",
    "title": "Museo local 1",
    "address": "Museo local 1, San Sebastián, España",
    "latitude": 43.320859,
    "longitude": -1.972986,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "eas-037",
    "city": "san-sebastian",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, San Sebastián, España",
    "latitude": 43.315775,
    "longitude": -1.983381,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "eas-038",
    "city": "san-sebastian",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, San Sebastián, España",
    "latitude": 43.314278,
    "longitude": -1.98806,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "eas-039",
    "city": "san-sebastian",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, San Sebastián, España",
    "latitude": 43.326514,
    "longitude": -1.974221,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "eas-040",
    "city": "san-sebastian",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, San Sebastián, España",
    "latitude": 43.316119,
    "longitude": -1.980969,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pna-001",
    "city": "pamplona",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Pamplona, España",
    "latitude": 42.817,
    "longitude": -1.646295,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pna-002",
    "city": "pamplona",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Pamplona, España",
    "latitude": 42.813964,
    "longitude": -1.647963,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pna-003",
    "city": "pamplona",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Pamplona, España",
    "latitude": 42.810845,
    "longitude": -1.640032,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pna-004",
    "city": "pamplona",
    "title": "Catedral 1",
    "address": "Catedral 1, Pamplona, España",
    "latitude": 42.812005,
    "longitude": -1.647461,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pna-005",
    "city": "pamplona",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Pamplona, España",
    "latitude": 42.810337,
    "longitude": -1.65274,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pna-006",
    "city": "pamplona",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Pamplona, España",
    "latitude": 42.818268,
    "longitude": -1.637881,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pna-007",
    "city": "pamplona",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Pamplona, España",
    "latitude": 42.810839,
    "longitude": -1.645257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pna-008",
    "city": "pamplona",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Pamplona, España",
    "latitude": 42.80556,
    "longitude": -1.652524,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pna-009",
    "city": "pamplona",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Pamplona, España",
    "latitude": 42.820419,
    "longitude": -1.642033,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pna-010",
    "city": "pamplona",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Pamplona, España",
    "latitude": 42.813043,
    "longitude": -1.644816,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pna-011",
    "city": "pamplona",
    "title": "Castillo 1",
    "address": "Castillo 1, Pamplona, España",
    "latitude": 42.805776,
    "longitude": -1.646042,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pna-012",
    "city": "pamplona",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Pamplona, España",
    "latitude": 42.816267,
    "longitude": -1.646987,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pna-013",
    "city": "pamplona",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Pamplona, España",
    "latitude": 42.813484,
    "longitude": -1.648677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pna-014",
    "city": "pamplona",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Pamplona, España",
    "latitude": 42.812258,
    "longitude": -1.639043,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pna-015",
    "city": "pamplona",
    "title": "Estación central 1",
    "address": "Estación central 1, Pamplona, España",
    "latitude": 42.811313,
    "longitude": -1.647674,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pna-016",
    "city": "pamplona",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Pamplona, España",
    "latitude": 42.809623,
    "longitude": -1.652892,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pna-017",
    "city": "pamplona",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Pamplona, España",
    "latitude": 42.819257,
    "longitude": -1.637998,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pna-018",
    "city": "pamplona",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Pamplona, España",
    "latitude": 42.810626,
    "longitude": -1.645364,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pna-019",
    "city": "pamplona",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Pamplona, España",
    "latitude": 42.805408,
    "longitude": -1.651624,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pna-020",
    "city": "pamplona",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Pamplona, España",
    "latitude": 42.820302,
    "longitude": -1.642875,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pna-021",
    "city": "pamplona",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Pamplona, España",
    "latitude": 42.812936,
    "longitude": -1.645299,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pna-022",
    "city": "pamplona",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Pamplona, España",
    "latitude": 42.806676,
    "longitude": -1.644626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pna-023",
    "city": "pamplona",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Pamplona, España",
    "latitude": 42.815425,
    "longitude": -1.64767,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pna-024",
    "city": "pamplona",
    "title": "Basílica 1",
    "address": "Basílica 1, Pamplona, España",
    "latitude": 42.813001,
    "longitude": -1.649301,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pna-025",
    "city": "pamplona",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Pamplona, España",
    "latitude": 42.813674,
    "longitude": -1.63822,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pna-026",
    "city": "pamplona",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Pamplona, España",
    "latitude": 42.81063,
    "longitude": -1.647851,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pna-027",
    "city": "pamplona",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Pamplona, España",
    "latitude": 42.808999,
    "longitude": -1.652864,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pna-028",
    "city": "pamplona",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Pamplona, España",
    "latitude": 42.82008,
    "longitude": -1.638314,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pna-029",
    "city": "pamplona",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Pamplona, España",
    "latitude": 42.810449,
    "longitude": -1.64547,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pna-030",
    "city": "pamplona",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Pamplona, España",
    "latitude": 42.805436,
    "longitude": -1.650584,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pna-031",
    "city": "pamplona",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Pamplona, España",
    "latitude": 42.819986,
    "longitude": -1.643807,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pna-032",
    "city": "pamplona",
    "title": "Muralla 1",
    "address": "Muralla 1, Pamplona, España",
    "latitude": 42.81283,
    "longitude": -1.64577,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pna-033",
    "city": "pamplona",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Pamplona, España",
    "latitude": 42.807716,
    "longitude": -1.643241,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pna-034",
    "city": "pamplona",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Pamplona, España",
    "latitude": 42.814493,
    "longitude": -1.648325,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pna-035",
    "city": "pamplona",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Pamplona, España",
    "latitude": 42.81253,
    "longitude": -1.649822,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pna-036",
    "city": "pamplona",
    "title": "Museo local 1",
    "address": "Museo local 1, Pamplona, España",
    "latitude": 42.815059,
    "longitude": -1.637586,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pna-037",
    "city": "pamplona",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Pamplona, España",
    "latitude": 42.809975,
    "longitude": -1.647981,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pna-038",
    "city": "pamplona",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Pamplona, España",
    "latitude": 42.808478,
    "longitude": -1.65266,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pna-039",
    "city": "pamplona",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Pamplona, España",
    "latitude": 42.820714,
    "longitude": -1.638821,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pna-040",
    "city": "pamplona",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Pamplona, España",
    "latitude": 42.810319,
    "longitude": -1.645569,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rja-001",
    "city": "logrono",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Logroño, España",
    "latitude": 42.4672,
    "longitude": -2.445395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rja-002",
    "city": "logrono",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Logroño, España",
    "latitude": 42.464164,
    "longitude": -2.447063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rja-003",
    "city": "logrono",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Logroño, España",
    "latitude": 42.461045,
    "longitude": -2.439132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rja-004",
    "city": "logrono",
    "title": "Catedral 1",
    "address": "Catedral 1, Logroño, España",
    "latitude": 42.462205,
    "longitude": -2.446561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rja-005",
    "city": "logrono",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Logroño, España",
    "latitude": 42.460537,
    "longitude": -2.45184,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rja-006",
    "city": "logrono",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Logroño, España",
    "latitude": 42.468468,
    "longitude": -2.436981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rja-007",
    "city": "logrono",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Logroño, España",
    "latitude": 42.461039,
    "longitude": -2.444357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rja-008",
    "city": "logrono",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Logroño, España",
    "latitude": 42.45576,
    "longitude": -2.451624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rja-009",
    "city": "logrono",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Logroño, España",
    "latitude": 42.470619,
    "longitude": -2.441133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rja-010",
    "city": "logrono",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Logroño, España",
    "latitude": 42.463243,
    "longitude": -2.443916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rja-011",
    "city": "logrono",
    "title": "Castillo 1",
    "address": "Castillo 1, Logroño, España",
    "latitude": 42.455976,
    "longitude": -2.445142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rja-012",
    "city": "logrono",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Logroño, España",
    "latitude": 42.466467,
    "longitude": -2.446087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rja-013",
    "city": "logrono",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Logroño, España",
    "latitude": 42.463684,
    "longitude": -2.447777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rja-014",
    "city": "logrono",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Logroño, España",
    "latitude": 42.462458,
    "longitude": -2.438143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rja-015",
    "city": "logrono",
    "title": "Estación central 1",
    "address": "Estación central 1, Logroño, España",
    "latitude": 42.461513,
    "longitude": -2.446774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rja-016",
    "city": "logrono",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Logroño, España",
    "latitude": 42.459823,
    "longitude": -2.451992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rja-017",
    "city": "logrono",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Logroño, España",
    "latitude": 42.469457,
    "longitude": -2.437098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rja-018",
    "city": "logrono",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Logroño, España",
    "latitude": 42.460826,
    "longitude": -2.444464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rja-019",
    "city": "logrono",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Logroño, España",
    "latitude": 42.455608,
    "longitude": -2.450724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rja-020",
    "city": "logrono",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Logroño, España",
    "latitude": 42.470502,
    "longitude": -2.441975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rja-021",
    "city": "logrono",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Logroño, España",
    "latitude": 42.463136,
    "longitude": -2.444399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rja-022",
    "city": "logrono",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Logroño, España",
    "latitude": 42.456876,
    "longitude": -2.443726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rja-023",
    "city": "logrono",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Logroño, España",
    "latitude": 42.465625,
    "longitude": -2.44677,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rja-024",
    "city": "logrono",
    "title": "Basílica 1",
    "address": "Basílica 1, Logroño, España",
    "latitude": 42.463201,
    "longitude": -2.448401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rja-025",
    "city": "logrono",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Logroño, España",
    "latitude": 42.463874,
    "longitude": -2.43732,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rja-026",
    "city": "logrono",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Logroño, España",
    "latitude": 42.46083,
    "longitude": -2.446951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rja-027",
    "city": "logrono",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Logroño, España",
    "latitude": 42.459199,
    "longitude": -2.451964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rja-028",
    "city": "logrono",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Logroño, España",
    "latitude": 42.47028,
    "longitude": -2.437414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rja-029",
    "city": "logrono",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Logroño, España",
    "latitude": 42.460649,
    "longitude": -2.44457,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rja-030",
    "city": "logrono",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Logroño, España",
    "latitude": 42.455636,
    "longitude": -2.449684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rja-031",
    "city": "logrono",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Logroño, España",
    "latitude": 42.470186,
    "longitude": -2.442907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rja-032",
    "city": "logrono",
    "title": "Muralla 1",
    "address": "Muralla 1, Logroño, España",
    "latitude": 42.46303,
    "longitude": -2.44487,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rja-033",
    "city": "logrono",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Logroño, España",
    "latitude": 42.457916,
    "longitude": -2.442341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rja-034",
    "city": "logrono",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Logroño, España",
    "latitude": 42.464693,
    "longitude": -2.447425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rja-035",
    "city": "logrono",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Logroño, España",
    "latitude": 42.46273,
    "longitude": -2.448922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rja-036",
    "city": "logrono",
    "title": "Museo local 1",
    "address": "Museo local 1, Logroño, España",
    "latitude": 42.465259,
    "longitude": -2.436686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rja-037",
    "city": "logrono",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Logroño, España",
    "latitude": 42.460175,
    "longitude": -2.447081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rja-038",
    "city": "logrono",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Logroño, España",
    "latitude": 42.458678,
    "longitude": -2.45176,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rja-039",
    "city": "logrono",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Logroño, España",
    "latitude": 42.470914,
    "longitude": -2.437921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rja-040",
    "city": "logrono",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Logroño, España",
    "latitude": 42.460519,
    "longitude": -2.444669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "brg-001",
    "city": "burgos",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Burgos, España",
    "latitude": 42.3484,
    "longitude": -3.697395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "brg-002",
    "city": "burgos",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Burgos, España",
    "latitude": 42.345364,
    "longitude": -3.699063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "brg-003",
    "city": "burgos",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Burgos, España",
    "latitude": 42.342245,
    "longitude": -3.691132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "brg-004",
    "city": "burgos",
    "title": "Catedral 1",
    "address": "Catedral 1, Burgos, España",
    "latitude": 42.343405,
    "longitude": -3.698561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "brg-005",
    "city": "burgos",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Burgos, España",
    "latitude": 42.341737,
    "longitude": -3.70384,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "brg-006",
    "city": "burgos",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Burgos, España",
    "latitude": 42.349668,
    "longitude": -3.688981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "brg-007",
    "city": "burgos",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Burgos, España",
    "latitude": 42.342239,
    "longitude": -3.696357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "brg-008",
    "city": "burgos",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Burgos, España",
    "latitude": 42.33696,
    "longitude": -3.703624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "brg-009",
    "city": "burgos",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Burgos, España",
    "latitude": 42.351819,
    "longitude": -3.693133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "brg-010",
    "city": "burgos",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Burgos, España",
    "latitude": 42.344443,
    "longitude": -3.695916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "brg-011",
    "city": "burgos",
    "title": "Castillo 1",
    "address": "Castillo 1, Burgos, España",
    "latitude": 42.337176,
    "longitude": -3.697142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "brg-012",
    "city": "burgos",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Burgos, España",
    "latitude": 42.347667,
    "longitude": -3.698087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "brg-013",
    "city": "burgos",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Burgos, España",
    "latitude": 42.344884,
    "longitude": -3.699777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "brg-014",
    "city": "burgos",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Burgos, España",
    "latitude": 42.343658,
    "longitude": -3.690143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "brg-015",
    "city": "burgos",
    "title": "Estación central 1",
    "address": "Estación central 1, Burgos, España",
    "latitude": 42.342713,
    "longitude": -3.698774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "brg-016",
    "city": "burgos",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Burgos, España",
    "latitude": 42.341023,
    "longitude": -3.703992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "brg-017",
    "city": "burgos",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Burgos, España",
    "latitude": 42.350657,
    "longitude": -3.689098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "brg-018",
    "city": "burgos",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Burgos, España",
    "latitude": 42.342026,
    "longitude": -3.696464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "brg-019",
    "city": "burgos",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Burgos, España",
    "latitude": 42.336808,
    "longitude": -3.702724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "brg-020",
    "city": "burgos",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Burgos, España",
    "latitude": 42.351702,
    "longitude": -3.693975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "brg-021",
    "city": "burgos",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Burgos, España",
    "latitude": 42.344336,
    "longitude": -3.696399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "brg-022",
    "city": "burgos",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Burgos, España",
    "latitude": 42.338076,
    "longitude": -3.695726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "brg-023",
    "city": "burgos",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Burgos, España",
    "latitude": 42.346825,
    "longitude": -3.69877,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "brg-024",
    "city": "burgos",
    "title": "Basílica 1",
    "address": "Basílica 1, Burgos, España",
    "latitude": 42.344401,
    "longitude": -3.700401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "brg-025",
    "city": "burgos",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Burgos, España",
    "latitude": 42.345074,
    "longitude": -3.68932,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "brg-026",
    "city": "burgos",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Burgos, España",
    "latitude": 42.34203,
    "longitude": -3.698951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "brg-027",
    "city": "burgos",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Burgos, España",
    "latitude": 42.340399,
    "longitude": -3.703964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "brg-028",
    "city": "burgos",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Burgos, España",
    "latitude": 42.35148,
    "longitude": -3.689414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "brg-029",
    "city": "burgos",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Burgos, España",
    "latitude": 42.341849,
    "longitude": -3.69657,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "brg-030",
    "city": "burgos",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Burgos, España",
    "latitude": 42.336836,
    "longitude": -3.701684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "brg-031",
    "city": "burgos",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Burgos, España",
    "latitude": 42.351386,
    "longitude": -3.694907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "brg-032",
    "city": "burgos",
    "title": "Muralla 1",
    "address": "Muralla 1, Burgos, España",
    "latitude": 42.34423,
    "longitude": -3.69687,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "brg-033",
    "city": "burgos",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Burgos, España",
    "latitude": 42.339116,
    "longitude": -3.694341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "brg-034",
    "city": "burgos",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Burgos, España",
    "latitude": 42.345893,
    "longitude": -3.699425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "brg-035",
    "city": "burgos",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Burgos, España",
    "latitude": 42.34393,
    "longitude": -3.700922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "brg-036",
    "city": "burgos",
    "title": "Museo local 1",
    "address": "Museo local 1, Burgos, España",
    "latitude": 42.346459,
    "longitude": -3.688686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "brg-037",
    "city": "burgos",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Burgos, España",
    "latitude": 42.341375,
    "longitude": -3.699081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "brg-038",
    "city": "burgos",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Burgos, España",
    "latitude": 42.339878,
    "longitude": -3.70376,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "brg-039",
    "city": "burgos",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Burgos, España",
    "latitude": 42.352114,
    "longitude": -3.689921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "brg-040",
    "city": "burgos",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Burgos, España",
    "latitude": 42.341719,
    "longitude": -3.696669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "len-001",
    "city": "leon",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, León, España",
    "latitude": 42.6032,
    "longitude": -5.567595,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "len-002",
    "city": "leon",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, León, España",
    "latitude": 42.600164,
    "longitude": -5.569263,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "len-003",
    "city": "leon",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, León, España",
    "latitude": 42.597045,
    "longitude": -5.561332,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "len-004",
    "city": "leon",
    "title": "Catedral 1",
    "address": "Catedral 1, León, España",
    "latitude": 42.598205,
    "longitude": -5.568761,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "len-005",
    "city": "leon",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, León, España",
    "latitude": 42.596537,
    "longitude": -5.57404,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "len-006",
    "city": "leon",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, León, España",
    "latitude": 42.604468,
    "longitude": -5.559181,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "len-007",
    "city": "leon",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, León, España",
    "latitude": 42.597039,
    "longitude": -5.566557,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "len-008",
    "city": "leon",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, León, España",
    "latitude": 42.59176,
    "longitude": -5.573824,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "len-009",
    "city": "leon",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, León, España",
    "latitude": 42.606619,
    "longitude": -5.563333,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "len-010",
    "city": "leon",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, León, España",
    "latitude": 42.599243,
    "longitude": -5.566116,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "len-011",
    "city": "leon",
    "title": "Castillo 1",
    "address": "Castillo 1, León, España",
    "latitude": 42.591976,
    "longitude": -5.567342,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "len-012",
    "city": "leon",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, León, España",
    "latitude": 42.602467,
    "longitude": -5.568287,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "len-013",
    "city": "leon",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, León, España",
    "latitude": 42.599684,
    "longitude": -5.569977,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "len-014",
    "city": "leon",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, León, España",
    "latitude": 42.598458,
    "longitude": -5.560343,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "len-015",
    "city": "leon",
    "title": "Estación central 1",
    "address": "Estación central 1, León, España",
    "latitude": 42.597513,
    "longitude": -5.568974,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "len-016",
    "city": "leon",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, León, España",
    "latitude": 42.595823,
    "longitude": -5.574192,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "len-017",
    "city": "leon",
    "title": "Auditorio 1",
    "address": "Auditorio 1, León, España",
    "latitude": 42.605457,
    "longitude": -5.559298,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "len-018",
    "city": "leon",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, León, España",
    "latitude": 42.596826,
    "longitude": -5.566664,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "len-019",
    "city": "leon",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, León, España",
    "latitude": 42.591608,
    "longitude": -5.572924,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "len-020",
    "city": "leon",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, León, España",
    "latitude": 42.606502,
    "longitude": -5.564175,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "len-021",
    "city": "leon",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, León, España",
    "latitude": 42.599136,
    "longitude": -5.566599,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "len-022",
    "city": "leon",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, León, España",
    "latitude": 42.592876,
    "longitude": -5.565926,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "len-023",
    "city": "leon",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, León, España",
    "latitude": 42.601625,
    "longitude": -5.56897,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "len-024",
    "city": "leon",
    "title": "Basílica 1",
    "address": "Basílica 1, León, España",
    "latitude": 42.599201,
    "longitude": -5.570601,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "len-025",
    "city": "leon",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, León, España",
    "latitude": 42.599874,
    "longitude": -5.55952,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "len-026",
    "city": "leon",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, León, España",
    "latitude": 42.59683,
    "longitude": -5.569151,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "len-027",
    "city": "leon",
    "title": "Monasterio 1",
    "address": "Monasterio 1, León, España",
    "latitude": 42.595199,
    "longitude": -5.574164,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "len-028",
    "city": "leon",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, León, España",
    "latitude": 42.60628,
    "longitude": -5.559614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "len-029",
    "city": "leon",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, León, España",
    "latitude": 42.596649,
    "longitude": -5.56677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "len-030",
    "city": "leon",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, León, España",
    "latitude": 42.591636,
    "longitude": -5.571884,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "len-031",
    "city": "leon",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, León, España",
    "latitude": 42.606186,
    "longitude": -5.565107,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "len-032",
    "city": "leon",
    "title": "Muralla 1",
    "address": "Muralla 1, León, España",
    "latitude": 42.59903,
    "longitude": -5.56707,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "len-033",
    "city": "leon",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, León, España",
    "latitude": 42.593916,
    "longitude": -5.564541,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "len-034",
    "city": "leon",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, León, España",
    "latitude": 42.600693,
    "longitude": -5.569625,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "len-035",
    "city": "leon",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, León, España",
    "latitude": 42.59873,
    "longitude": -5.571122,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "len-036",
    "city": "leon",
    "title": "Museo local 1",
    "address": "Museo local 1, León, España",
    "latitude": 42.601259,
    "longitude": -5.558886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "len-037",
    "city": "leon",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, León, España",
    "latitude": 42.596175,
    "longitude": -5.569281,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "len-038",
    "city": "leon",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, León, España",
    "latitude": 42.594678,
    "longitude": -5.57396,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "len-039",
    "city": "leon",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, León, España",
    "latitude": 42.606914,
    "longitude": -5.560121,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "len-040",
    "city": "leon",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, León, España",
    "latitude": 42.596519,
    "longitude": -5.566869,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "slm-001",
    "city": "salamanca",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Salamanca, España",
    "latitude": 40.9746,
    "longitude": -5.663995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "slm-002",
    "city": "salamanca",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Salamanca, España",
    "latitude": 40.971564,
    "longitude": -5.665663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "slm-003",
    "city": "salamanca",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Salamanca, España",
    "latitude": 40.968445,
    "longitude": -5.657732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "slm-004",
    "city": "salamanca",
    "title": "Catedral 1",
    "address": "Catedral 1, Salamanca, España",
    "latitude": 40.969605,
    "longitude": -5.665161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "slm-005",
    "city": "salamanca",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Salamanca, España",
    "latitude": 40.967937,
    "longitude": -5.67044,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "slm-006",
    "city": "salamanca",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Salamanca, España",
    "latitude": 40.975868,
    "longitude": -5.655581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "slm-007",
    "city": "salamanca",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Salamanca, España",
    "latitude": 40.968439,
    "longitude": -5.662957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "slm-008",
    "city": "salamanca",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Salamanca, España",
    "latitude": 40.96316,
    "longitude": -5.670224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "slm-009",
    "city": "salamanca",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Salamanca, España",
    "latitude": 40.978019,
    "longitude": -5.659733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "slm-010",
    "city": "salamanca",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Salamanca, España",
    "latitude": 40.970643,
    "longitude": -5.662516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "slm-011",
    "city": "salamanca",
    "title": "Castillo 1",
    "address": "Castillo 1, Salamanca, España",
    "latitude": 40.963376,
    "longitude": -5.663742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "slm-012",
    "city": "salamanca",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Salamanca, España",
    "latitude": 40.973867,
    "longitude": -5.664687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "slm-013",
    "city": "salamanca",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Salamanca, España",
    "latitude": 40.971084,
    "longitude": -5.666377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "slm-014",
    "city": "salamanca",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Salamanca, España",
    "latitude": 40.969858,
    "longitude": -5.656743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "slm-015",
    "city": "salamanca",
    "title": "Estación central 1",
    "address": "Estación central 1, Salamanca, España",
    "latitude": 40.968913,
    "longitude": -5.665374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "slm-016",
    "city": "salamanca",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Salamanca, España",
    "latitude": 40.967223,
    "longitude": -5.670592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "slm-017",
    "city": "salamanca",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Salamanca, España",
    "latitude": 40.976857,
    "longitude": -5.655698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "slm-018",
    "city": "salamanca",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Salamanca, España",
    "latitude": 40.968226,
    "longitude": -5.663064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "slm-019",
    "city": "salamanca",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Salamanca, España",
    "latitude": 40.963008,
    "longitude": -5.669324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "slm-020",
    "city": "salamanca",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Salamanca, España",
    "latitude": 40.977902,
    "longitude": -5.660575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "slm-021",
    "city": "salamanca",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Salamanca, España",
    "latitude": 40.970536,
    "longitude": -5.662999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "slm-022",
    "city": "salamanca",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Salamanca, España",
    "latitude": 40.964276,
    "longitude": -5.662326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "slm-023",
    "city": "salamanca",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Salamanca, España",
    "latitude": 40.973025,
    "longitude": -5.66537,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "slm-024",
    "city": "salamanca",
    "title": "Basílica 1",
    "address": "Basílica 1, Salamanca, España",
    "latitude": 40.970601,
    "longitude": -5.667001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "slm-025",
    "city": "salamanca",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Salamanca, España",
    "latitude": 40.971274,
    "longitude": -5.65592,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "slm-026",
    "city": "salamanca",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Salamanca, España",
    "latitude": 40.96823,
    "longitude": -5.665551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "slm-027",
    "city": "salamanca",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Salamanca, España",
    "latitude": 40.966599,
    "longitude": -5.670564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "slm-028",
    "city": "salamanca",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Salamanca, España",
    "latitude": 40.97768,
    "longitude": -5.656014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "slm-029",
    "city": "salamanca",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Salamanca, España",
    "latitude": 40.968049,
    "longitude": -5.66317,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "slm-030",
    "city": "salamanca",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Salamanca, España",
    "latitude": 40.963036,
    "longitude": -5.668284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "slm-031",
    "city": "salamanca",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Salamanca, España",
    "latitude": 40.977586,
    "longitude": -5.661507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "slm-032",
    "city": "salamanca",
    "title": "Muralla 1",
    "address": "Muralla 1, Salamanca, España",
    "latitude": 40.97043,
    "longitude": -5.66347,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "slm-033",
    "city": "salamanca",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Salamanca, España",
    "latitude": 40.965316,
    "longitude": -5.660941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "slm-034",
    "city": "salamanca",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Salamanca, España",
    "latitude": 40.972093,
    "longitude": -5.666025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "slm-035",
    "city": "salamanca",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Salamanca, España",
    "latitude": 40.97013,
    "longitude": -5.667522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "slm-036",
    "city": "salamanca",
    "title": "Museo local 1",
    "address": "Museo local 1, Salamanca, España",
    "latitude": 40.972659,
    "longitude": -5.655286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "slm-037",
    "city": "salamanca",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Salamanca, España",
    "latitude": 40.967575,
    "longitude": -5.665681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "slm-038",
    "city": "salamanca",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Salamanca, España",
    "latitude": 40.966078,
    "longitude": -5.67036,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "slm-039",
    "city": "salamanca",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Salamanca, España",
    "latitude": 40.978314,
    "longitude": -5.656521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "slm-040",
    "city": "salamanca",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Salamanca, España",
    "latitude": 40.967919,
    "longitude": -5.663269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vll-001",
    "city": "valladolid",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Valladolid, España",
    "latitude": 41.6568,
    "longitude": -4.724995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vll-002",
    "city": "valladolid",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Valladolid, España",
    "latitude": 41.653764,
    "longitude": -4.726663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vll-003",
    "city": "valladolid",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Valladolid, España",
    "latitude": 41.650645,
    "longitude": -4.718732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vll-004",
    "city": "valladolid",
    "title": "Catedral 1",
    "address": "Catedral 1, Valladolid, España",
    "latitude": 41.651805,
    "longitude": -4.726161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vll-005",
    "city": "valladolid",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Valladolid, España",
    "latitude": 41.650137,
    "longitude": -4.73144,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vll-006",
    "city": "valladolid",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Valladolid, España",
    "latitude": 41.658068,
    "longitude": -4.716581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vll-007",
    "city": "valladolid",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Valladolid, España",
    "latitude": 41.650639,
    "longitude": -4.723957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vll-008",
    "city": "valladolid",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Valladolid, España",
    "latitude": 41.64536,
    "longitude": -4.731224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vll-009",
    "city": "valladolid",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Valladolid, España",
    "latitude": 41.660219,
    "longitude": -4.720733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vll-010",
    "city": "valladolid",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Valladolid, España",
    "latitude": 41.652843,
    "longitude": -4.723516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vll-011",
    "city": "valladolid",
    "title": "Castillo 1",
    "address": "Castillo 1, Valladolid, España",
    "latitude": 41.645576,
    "longitude": -4.724742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vll-012",
    "city": "valladolid",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Valladolid, España",
    "latitude": 41.656067,
    "longitude": -4.725687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vll-013",
    "city": "valladolid",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Valladolid, España",
    "latitude": 41.653284,
    "longitude": -4.727377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vll-014",
    "city": "valladolid",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Valladolid, España",
    "latitude": 41.652058,
    "longitude": -4.717743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vll-015",
    "city": "valladolid",
    "title": "Estación central 1",
    "address": "Estación central 1, Valladolid, España",
    "latitude": 41.651113,
    "longitude": -4.726374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vll-016",
    "city": "valladolid",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Valladolid, España",
    "latitude": 41.649423,
    "longitude": -4.731592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vll-017",
    "city": "valladolid",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Valladolid, España",
    "latitude": 41.659057,
    "longitude": -4.716698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vll-018",
    "city": "valladolid",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Valladolid, España",
    "latitude": 41.650426,
    "longitude": -4.724064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vll-019",
    "city": "valladolid",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Valladolid, España",
    "latitude": 41.645208,
    "longitude": -4.730324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vll-020",
    "city": "valladolid",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Valladolid, España",
    "latitude": 41.660102,
    "longitude": -4.721575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vll-021",
    "city": "valladolid",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Valladolid, España",
    "latitude": 41.652736,
    "longitude": -4.723999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vll-022",
    "city": "valladolid",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Valladolid, España",
    "latitude": 41.646476,
    "longitude": -4.723326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vll-023",
    "city": "valladolid",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Valladolid, España",
    "latitude": 41.655225,
    "longitude": -4.72637,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vll-024",
    "city": "valladolid",
    "title": "Basílica 1",
    "address": "Basílica 1, Valladolid, España",
    "latitude": 41.652801,
    "longitude": -4.728001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vll-025",
    "city": "valladolid",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Valladolid, España",
    "latitude": 41.653474,
    "longitude": -4.71692,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vll-026",
    "city": "valladolid",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Valladolid, España",
    "latitude": 41.65043,
    "longitude": -4.726551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vll-027",
    "city": "valladolid",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Valladolid, España",
    "latitude": 41.648799,
    "longitude": -4.731564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vll-028",
    "city": "valladolid",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Valladolid, España",
    "latitude": 41.65988,
    "longitude": -4.717014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vll-029",
    "city": "valladolid",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Valladolid, España",
    "latitude": 41.650249,
    "longitude": -4.72417,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vll-030",
    "city": "valladolid",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Valladolid, España",
    "latitude": 41.645236,
    "longitude": -4.729284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vll-031",
    "city": "valladolid",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Valladolid, España",
    "latitude": 41.659786,
    "longitude": -4.722507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vll-032",
    "city": "valladolid",
    "title": "Muralla 1",
    "address": "Muralla 1, Valladolid, España",
    "latitude": 41.65263,
    "longitude": -4.72447,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vll-033",
    "city": "valladolid",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Valladolid, España",
    "latitude": 41.647516,
    "longitude": -4.721941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vll-034",
    "city": "valladolid",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Valladolid, España",
    "latitude": 41.654293,
    "longitude": -4.727025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vll-035",
    "city": "valladolid",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Valladolid, España",
    "latitude": 41.65233,
    "longitude": -4.728522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vll-036",
    "city": "valladolid",
    "title": "Museo local 1",
    "address": "Museo local 1, Valladolid, España",
    "latitude": 41.654859,
    "longitude": -4.716286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vll-037",
    "city": "valladolid",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Valladolid, España",
    "latitude": 41.649775,
    "longitude": -4.726681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vll-038",
    "city": "valladolid",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Valladolid, España",
    "latitude": 41.648278,
    "longitude": -4.73136,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vll-039",
    "city": "valladolid",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Valladolid, España",
    "latitude": 41.660514,
    "longitude": -4.717521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vll-040",
    "city": "valladolid",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Valladolid, España",
    "latitude": 41.650119,
    "longitude": -4.724269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "seg-001",
    "city": "segovia",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Segovia, España",
    "latitude": 40.9474,
    "longitude": -4.109295,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "seg-002",
    "city": "segovia",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Segovia, España",
    "latitude": 40.944364,
    "longitude": -4.110963,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "seg-003",
    "city": "segovia",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Segovia, España",
    "latitude": 40.941245,
    "longitude": -4.103032,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "seg-004",
    "city": "segovia",
    "title": "Catedral 1",
    "address": "Catedral 1, Segovia, España",
    "latitude": 40.942405,
    "longitude": -4.110461,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "seg-005",
    "city": "segovia",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Segovia, España",
    "latitude": 40.940737,
    "longitude": -4.11574,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "seg-006",
    "city": "segovia",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Segovia, España",
    "latitude": 40.948668,
    "longitude": -4.100881,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "seg-007",
    "city": "segovia",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Segovia, España",
    "latitude": 40.941239,
    "longitude": -4.108257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "seg-008",
    "city": "segovia",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Segovia, España",
    "latitude": 40.93596,
    "longitude": -4.115524,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "seg-009",
    "city": "segovia",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Segovia, España",
    "latitude": 40.950819,
    "longitude": -4.105033,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "seg-010",
    "city": "segovia",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Segovia, España",
    "latitude": 40.943443,
    "longitude": -4.107816,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "seg-011",
    "city": "segovia",
    "title": "Castillo 1",
    "address": "Castillo 1, Segovia, España",
    "latitude": 40.936176,
    "longitude": -4.109042,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "seg-012",
    "city": "segovia",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Segovia, España",
    "latitude": 40.946667,
    "longitude": -4.109987,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "seg-013",
    "city": "segovia",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Segovia, España",
    "latitude": 40.943884,
    "longitude": -4.111677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "seg-014",
    "city": "segovia",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Segovia, España",
    "latitude": 40.942658,
    "longitude": -4.102043,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "seg-015",
    "city": "segovia",
    "title": "Estación central 1",
    "address": "Estación central 1, Segovia, España",
    "latitude": 40.941713,
    "longitude": -4.110674,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "seg-016",
    "city": "segovia",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Segovia, España",
    "latitude": 40.940023,
    "longitude": -4.115892,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "seg-017",
    "city": "segovia",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Segovia, España",
    "latitude": 40.949657,
    "longitude": -4.100998,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "seg-018",
    "city": "segovia",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Segovia, España",
    "latitude": 40.941026,
    "longitude": -4.108364,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "seg-019",
    "city": "segovia",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Segovia, España",
    "latitude": 40.935808,
    "longitude": -4.114624,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "seg-020",
    "city": "segovia",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Segovia, España",
    "latitude": 40.950702,
    "longitude": -4.105875,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "seg-021",
    "city": "segovia",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Segovia, España",
    "latitude": 40.943336,
    "longitude": -4.108299,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "seg-022",
    "city": "segovia",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Segovia, España",
    "latitude": 40.937076,
    "longitude": -4.107626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "seg-023",
    "city": "segovia",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Segovia, España",
    "latitude": 40.945825,
    "longitude": -4.11067,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "seg-024",
    "city": "segovia",
    "title": "Basílica 1",
    "address": "Basílica 1, Segovia, España",
    "latitude": 40.943401,
    "longitude": -4.112301,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "seg-025",
    "city": "segovia",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Segovia, España",
    "latitude": 40.944074,
    "longitude": -4.10122,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "seg-026",
    "city": "segovia",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Segovia, España",
    "latitude": 40.94103,
    "longitude": -4.110851,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "seg-027",
    "city": "segovia",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Segovia, España",
    "latitude": 40.939399,
    "longitude": -4.115864,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "seg-028",
    "city": "segovia",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Segovia, España",
    "latitude": 40.95048,
    "longitude": -4.101314,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "seg-029",
    "city": "segovia",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Segovia, España",
    "latitude": 40.940849,
    "longitude": -4.10847,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "seg-030",
    "city": "segovia",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Segovia, España",
    "latitude": 40.935836,
    "longitude": -4.113584,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "seg-031",
    "city": "segovia",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Segovia, España",
    "latitude": 40.950386,
    "longitude": -4.106807,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "seg-032",
    "city": "segovia",
    "title": "Muralla 1",
    "address": "Muralla 1, Segovia, España",
    "latitude": 40.94323,
    "longitude": -4.10877,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "seg-033",
    "city": "segovia",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Segovia, España",
    "latitude": 40.938116,
    "longitude": -4.106241,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "seg-034",
    "city": "segovia",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Segovia, España",
    "latitude": 40.944893,
    "longitude": -4.111325,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "seg-035",
    "city": "segovia",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Segovia, España",
    "latitude": 40.94293,
    "longitude": -4.112822,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "seg-036",
    "city": "segovia",
    "title": "Museo local 1",
    "address": "Museo local 1, Segovia, España",
    "latitude": 40.945459,
    "longitude": -4.100586,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "seg-037",
    "city": "segovia",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Segovia, España",
    "latitude": 40.940375,
    "longitude": -4.110981,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "seg-038",
    "city": "segovia",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Segovia, España",
    "latitude": 40.938878,
    "longitude": -4.11566,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "seg-039",
    "city": "segovia",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Segovia, España",
    "latitude": 40.951114,
    "longitude": -4.101821,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "seg-040",
    "city": "segovia",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Segovia, España",
    "latitude": 40.940719,
    "longitude": -4.108569,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avi-001",
    "city": "avila",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Ávila, España",
    "latitude": 40.6612,
    "longitude": -4.681695,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avi-002",
    "city": "avila",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Ávila, España",
    "latitude": 40.658164,
    "longitude": -4.683363,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avi-003",
    "city": "avila",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Ávila, España",
    "latitude": 40.655045,
    "longitude": -4.675432,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avi-004",
    "city": "avila",
    "title": "Catedral 1",
    "address": "Catedral 1, Ávila, España",
    "latitude": 40.656205,
    "longitude": -4.682861,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avi-005",
    "city": "avila",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Ávila, España",
    "latitude": 40.654537,
    "longitude": -4.68814,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avi-006",
    "city": "avila",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Ávila, España",
    "latitude": 40.662468,
    "longitude": -4.673281,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avi-007",
    "city": "avila",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Ávila, España",
    "latitude": 40.655039,
    "longitude": -4.680657,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avi-008",
    "city": "avila",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Ávila, España",
    "latitude": 40.64976,
    "longitude": -4.687924,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avi-009",
    "city": "avila",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Ávila, España",
    "latitude": 40.664619,
    "longitude": -4.677433,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avi-010",
    "city": "avila",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Ávila, España",
    "latitude": 40.657243,
    "longitude": -4.680216,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avi-011",
    "city": "avila",
    "title": "Castillo 1",
    "address": "Castillo 1, Ávila, España",
    "latitude": 40.649976,
    "longitude": -4.681442,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avi-012",
    "city": "avila",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Ávila, España",
    "latitude": 40.660467,
    "longitude": -4.682387,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avi-013",
    "city": "avila",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Ávila, España",
    "latitude": 40.657684,
    "longitude": -4.684077,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avi-014",
    "city": "avila",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Ávila, España",
    "latitude": 40.656458,
    "longitude": -4.674443,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avi-015",
    "city": "avila",
    "title": "Estación central 1",
    "address": "Estación central 1, Ávila, España",
    "latitude": 40.655513,
    "longitude": -4.683074,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avi-016",
    "city": "avila",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Ávila, España",
    "latitude": 40.653823,
    "longitude": -4.688292,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avi-017",
    "city": "avila",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Ávila, España",
    "latitude": 40.663457,
    "longitude": -4.673398,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avi-018",
    "city": "avila",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Ávila, España",
    "latitude": 40.654826,
    "longitude": -4.680764,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avi-019",
    "city": "avila",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Ávila, España",
    "latitude": 40.649608,
    "longitude": -4.687024,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avi-020",
    "city": "avila",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Ávila, España",
    "latitude": 40.664502,
    "longitude": -4.678275,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avi-021",
    "city": "avila",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Ávila, España",
    "latitude": 40.657136,
    "longitude": -4.680699,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avi-022",
    "city": "avila",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Ávila, España",
    "latitude": 40.650876,
    "longitude": -4.680026,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avi-023",
    "city": "avila",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Ávila, España",
    "latitude": 40.659625,
    "longitude": -4.68307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avi-024",
    "city": "avila",
    "title": "Basílica 1",
    "address": "Basílica 1, Ávila, España",
    "latitude": 40.657201,
    "longitude": -4.684701,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avi-025",
    "city": "avila",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Ávila, España",
    "latitude": 40.657874,
    "longitude": -4.67362,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avi-026",
    "city": "avila",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Ávila, España",
    "latitude": 40.65483,
    "longitude": -4.683251,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avi-027",
    "city": "avila",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Ávila, España",
    "latitude": 40.653199,
    "longitude": -4.688264,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avi-028",
    "city": "avila",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Ávila, España",
    "latitude": 40.66428,
    "longitude": -4.673714,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avi-029",
    "city": "avila",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Ávila, España",
    "latitude": 40.654649,
    "longitude": -4.68087,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avi-030",
    "city": "avila",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Ávila, España",
    "latitude": 40.649636,
    "longitude": -4.685984,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avi-031",
    "city": "avila",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Ávila, España",
    "latitude": 40.664186,
    "longitude": -4.679207,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avi-032",
    "city": "avila",
    "title": "Muralla 1",
    "address": "Muralla 1, Ávila, España",
    "latitude": 40.65703,
    "longitude": -4.68117,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avi-033",
    "city": "avila",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Ávila, España",
    "latitude": 40.651916,
    "longitude": -4.678641,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avi-034",
    "city": "avila",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Ávila, España",
    "latitude": 40.658693,
    "longitude": -4.683725,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avi-035",
    "city": "avila",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Ávila, España",
    "latitude": 40.65673,
    "longitude": -4.685222,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avi-036",
    "city": "avila",
    "title": "Museo local 1",
    "address": "Museo local 1, Ávila, España",
    "latitude": 40.659259,
    "longitude": -4.672986,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avi-037",
    "city": "avila",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Ávila, España",
    "latitude": 40.654175,
    "longitude": -4.683381,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avi-038",
    "city": "avila",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Ávila, España",
    "latitude": 40.652678,
    "longitude": -4.68806,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avi-039",
    "city": "avila",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Ávila, España",
    "latitude": 40.664914,
    "longitude": -4.674221,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avi-040",
    "city": "avila",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Ávila, España",
    "latitude": 40.654519,
    "longitude": -4.680969,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tol-001",
    "city": "toledo",
    "title": "Alcázar de Toledo",
    "address": "Alcázar de Toledo, Toledo, España",
    "latitude": 39.8673,
    "longitude": -4.027795,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tol-002",
    "city": "toledo",
    "title": "Catedral Primada",
    "address": "Catedral Primada, Toledo, España",
    "latitude": 39.864264,
    "longitude": -4.029463,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tol-003",
    "city": "toledo",
    "title": "Monasterio de San Juan de los Reyes",
    "address": "Monasterio de San Juan de los Reyes, Toledo, España",
    "latitude": 39.861145,
    "longitude": -4.021532,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tol-004",
    "city": "toledo",
    "title": "Mirador del Valle",
    "address": "Mirador del Valle, Toledo, España",
    "latitude": 39.862305,
    "longitude": -4.028961,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tol-005",
    "city": "toledo",
    "title": "Sinagoga del Tránsito",
    "address": "Sinagoga del Tránsito, Toledo, España",
    "latitude": 39.860637,
    "longitude": -4.03424,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tol-006",
    "city": "toledo",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Toledo, España",
    "latitude": 39.868568,
    "longitude": -4.019381,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tol-007",
    "city": "toledo",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Toledo, España",
    "latitude": 39.861139,
    "longitude": -4.026757,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tol-008",
    "city": "toledo",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Toledo, España",
    "latitude": 39.85586,
    "longitude": -4.034024,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tol-009",
    "city": "toledo",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Toledo, España",
    "latitude": 39.870719,
    "longitude": -4.023533,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tol-010",
    "city": "toledo",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Toledo, España",
    "latitude": 39.863343,
    "longitude": -4.026316,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tol-011",
    "city": "toledo",
    "title": "Castillo 1",
    "address": "Castillo 1, Toledo, España",
    "latitude": 39.856076,
    "longitude": -4.027542,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tol-012",
    "city": "toledo",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Toledo, España",
    "latitude": 39.866567,
    "longitude": -4.028487,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tol-013",
    "city": "toledo",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Toledo, España",
    "latitude": 39.863784,
    "longitude": -4.030177,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tol-014",
    "city": "toledo",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Toledo, España",
    "latitude": 39.862558,
    "longitude": -4.020543,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tol-015",
    "city": "toledo",
    "title": "Estación central 1",
    "address": "Estación central 1, Toledo, España",
    "latitude": 39.861613,
    "longitude": -4.029174,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tol-016",
    "city": "toledo",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Toledo, España",
    "latitude": 39.859923,
    "longitude": -4.034392,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tol-017",
    "city": "toledo",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Toledo, España",
    "latitude": 39.869557,
    "longitude": -4.019498,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tol-018",
    "city": "toledo",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Toledo, España",
    "latitude": 39.860926,
    "longitude": -4.026864,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tol-019",
    "city": "toledo",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Toledo, España",
    "latitude": 39.855708,
    "longitude": -4.033124,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tol-020",
    "city": "toledo",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Toledo, España",
    "latitude": 39.870602,
    "longitude": -4.024375,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tol-021",
    "city": "toledo",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Toledo, España",
    "latitude": 39.863236,
    "longitude": -4.026799,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tol-022",
    "city": "toledo",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Toledo, España",
    "latitude": 39.856976,
    "longitude": -4.026126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tol-023",
    "city": "toledo",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Toledo, España",
    "latitude": 39.865725,
    "longitude": -4.02917,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tol-024",
    "city": "toledo",
    "title": "Basílica 1",
    "address": "Basílica 1, Toledo, España",
    "latitude": 39.863301,
    "longitude": -4.030801,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tol-025",
    "city": "toledo",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Toledo, España",
    "latitude": 39.863974,
    "longitude": -4.01972,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tol-026",
    "city": "toledo",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Toledo, España",
    "latitude": 39.86093,
    "longitude": -4.029351,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tol-027",
    "city": "toledo",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Toledo, España",
    "latitude": 39.859299,
    "longitude": -4.034364,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tol-028",
    "city": "toledo",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Toledo, España",
    "latitude": 39.87038,
    "longitude": -4.019814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tol-029",
    "city": "toledo",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Toledo, España",
    "latitude": 39.860749,
    "longitude": -4.02697,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tol-030",
    "city": "toledo",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Toledo, España",
    "latitude": 39.855736,
    "longitude": -4.032084,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tol-031",
    "city": "toledo",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Toledo, España",
    "latitude": 39.870286,
    "longitude": -4.025307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tol-032",
    "city": "toledo",
    "title": "Muralla 1",
    "address": "Muralla 1, Toledo, España",
    "latitude": 39.86313,
    "longitude": -4.02727,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tol-033",
    "city": "toledo",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Toledo, España",
    "latitude": 39.858016,
    "longitude": -4.024741,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tol-034",
    "city": "toledo",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Toledo, España",
    "latitude": 39.864793,
    "longitude": -4.029825,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tol-035",
    "city": "toledo",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Toledo, España",
    "latitude": 39.86283,
    "longitude": -4.031322,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tol-036",
    "city": "toledo",
    "title": "Museo local 1",
    "address": "Museo local 1, Toledo, España",
    "latitude": 39.865359,
    "longitude": -4.019086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tol-037",
    "city": "toledo",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Toledo, España",
    "latitude": 39.860275,
    "longitude": -4.029481,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tol-038",
    "city": "toledo",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Toledo, España",
    "latitude": 39.858778,
    "longitude": -4.03416,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tol-039",
    "city": "toledo",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Toledo, España",
    "latitude": 39.871014,
    "longitude": -4.020321,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tol-040",
    "city": "toledo",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Toledo, España",
    "latitude": 39.860619,
    "longitude": -4.027069,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cqe-001",
    "city": "cuenca",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Cuenca, España",
    "latitude": 40.0749,
    "longitude": -2.137895,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cqe-002",
    "city": "cuenca",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Cuenca, España",
    "latitude": 40.071864,
    "longitude": -2.139563,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cqe-003",
    "city": "cuenca",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Cuenca, España",
    "latitude": 40.068745,
    "longitude": -2.131632,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cqe-004",
    "city": "cuenca",
    "title": "Catedral 1",
    "address": "Catedral 1, Cuenca, España",
    "latitude": 40.069905,
    "longitude": -2.139061,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cqe-005",
    "city": "cuenca",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Cuenca, España",
    "latitude": 40.068237,
    "longitude": -2.14434,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cqe-006",
    "city": "cuenca",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Cuenca, España",
    "latitude": 40.076168,
    "longitude": -2.129481,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cqe-007",
    "city": "cuenca",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Cuenca, España",
    "latitude": 40.068739,
    "longitude": -2.136857,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cqe-008",
    "city": "cuenca",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Cuenca, España",
    "latitude": 40.06346,
    "longitude": -2.144124,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cqe-009",
    "city": "cuenca",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Cuenca, España",
    "latitude": 40.078319,
    "longitude": -2.133633,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cqe-010",
    "city": "cuenca",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Cuenca, España",
    "latitude": 40.070943,
    "longitude": -2.136416,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cqe-011",
    "city": "cuenca",
    "title": "Castillo 1",
    "address": "Castillo 1, Cuenca, España",
    "latitude": 40.063676,
    "longitude": -2.137642,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cqe-012",
    "city": "cuenca",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Cuenca, España",
    "latitude": 40.074167,
    "longitude": -2.138587,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cqe-013",
    "city": "cuenca",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Cuenca, España",
    "latitude": 40.071384,
    "longitude": -2.140277,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cqe-014",
    "city": "cuenca",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Cuenca, España",
    "latitude": 40.070158,
    "longitude": -2.130643,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cqe-015",
    "city": "cuenca",
    "title": "Estación central 1",
    "address": "Estación central 1, Cuenca, España",
    "latitude": 40.069213,
    "longitude": -2.139274,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cqe-016",
    "city": "cuenca",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Cuenca, España",
    "latitude": 40.067523,
    "longitude": -2.144492,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cqe-017",
    "city": "cuenca",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Cuenca, España",
    "latitude": 40.077157,
    "longitude": -2.129598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cqe-018",
    "city": "cuenca",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Cuenca, España",
    "latitude": 40.068526,
    "longitude": -2.136964,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cqe-019",
    "city": "cuenca",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Cuenca, España",
    "latitude": 40.063308,
    "longitude": -2.143224,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cqe-020",
    "city": "cuenca",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Cuenca, España",
    "latitude": 40.078202,
    "longitude": -2.134475,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cqe-021",
    "city": "cuenca",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Cuenca, España",
    "latitude": 40.070836,
    "longitude": -2.136899,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cqe-022",
    "city": "cuenca",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Cuenca, España",
    "latitude": 40.064576,
    "longitude": -2.136226,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cqe-023",
    "city": "cuenca",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Cuenca, España",
    "latitude": 40.073325,
    "longitude": -2.13927,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cqe-024",
    "city": "cuenca",
    "title": "Basílica 1",
    "address": "Basílica 1, Cuenca, España",
    "latitude": 40.070901,
    "longitude": -2.140901,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cqe-025",
    "city": "cuenca",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Cuenca, España",
    "latitude": 40.071574,
    "longitude": -2.12982,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cqe-026",
    "city": "cuenca",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Cuenca, España",
    "latitude": 40.06853,
    "longitude": -2.139451,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cqe-027",
    "city": "cuenca",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Cuenca, España",
    "latitude": 40.066899,
    "longitude": -2.144464,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cqe-028",
    "city": "cuenca",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Cuenca, España",
    "latitude": 40.07798,
    "longitude": -2.129914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cqe-029",
    "city": "cuenca",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Cuenca, España",
    "latitude": 40.068349,
    "longitude": -2.13707,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cqe-030",
    "city": "cuenca",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Cuenca, España",
    "latitude": 40.063336,
    "longitude": -2.142184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cqe-031",
    "city": "cuenca",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Cuenca, España",
    "latitude": 40.077886,
    "longitude": -2.135407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cqe-032",
    "city": "cuenca",
    "title": "Muralla 1",
    "address": "Muralla 1, Cuenca, España",
    "latitude": 40.07073,
    "longitude": -2.13737,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cqe-033",
    "city": "cuenca",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Cuenca, España",
    "latitude": 40.065616,
    "longitude": -2.134841,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cqe-034",
    "city": "cuenca",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Cuenca, España",
    "latitude": 40.072393,
    "longitude": -2.139925,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cqe-035",
    "city": "cuenca",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Cuenca, España",
    "latitude": 40.07043,
    "longitude": -2.141422,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cqe-036",
    "city": "cuenca",
    "title": "Museo local 1",
    "address": "Museo local 1, Cuenca, España",
    "latitude": 40.072959,
    "longitude": -2.129186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cqe-037",
    "city": "cuenca",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Cuenca, España",
    "latitude": 40.067875,
    "longitude": -2.139581,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cqe-038",
    "city": "cuenca",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Cuenca, España",
    "latitude": 40.066378,
    "longitude": -2.14426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cqe-039",
    "city": "cuenca",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Cuenca, España",
    "latitude": 40.078614,
    "longitude": -2.130421,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cqe-040",
    "city": "cuenca",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Cuenca, España",
    "latitude": 40.068219,
    "longitude": -2.137169,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gdl-001",
    "city": "guadalajara",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Guadalajara, España",
    "latitude": 40.6378,
    "longitude": -3.167395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gdl-002",
    "city": "guadalajara",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Guadalajara, España",
    "latitude": 40.634764,
    "longitude": -3.169063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gdl-003",
    "city": "guadalajara",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Guadalajara, España",
    "latitude": 40.631645,
    "longitude": -3.161132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gdl-004",
    "city": "guadalajara",
    "title": "Catedral 1",
    "address": "Catedral 1, Guadalajara, España",
    "latitude": 40.632805,
    "longitude": -3.168561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gdl-005",
    "city": "guadalajara",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Guadalajara, España",
    "latitude": 40.631137,
    "longitude": -3.17384,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gdl-006",
    "city": "guadalajara",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Guadalajara, España",
    "latitude": 40.639068,
    "longitude": -3.158981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gdl-007",
    "city": "guadalajara",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Guadalajara, España",
    "latitude": 40.631639,
    "longitude": -3.166357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gdl-008",
    "city": "guadalajara",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Guadalajara, España",
    "latitude": 40.62636,
    "longitude": -3.173624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gdl-009",
    "city": "guadalajara",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Guadalajara, España",
    "latitude": 40.641219,
    "longitude": -3.163133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gdl-010",
    "city": "guadalajara",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Guadalajara, España",
    "latitude": 40.633843,
    "longitude": -3.165916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gdl-011",
    "city": "guadalajara",
    "title": "Castillo 1",
    "address": "Castillo 1, Guadalajara, España",
    "latitude": 40.626576,
    "longitude": -3.167142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gdl-012",
    "city": "guadalajara",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Guadalajara, España",
    "latitude": 40.637067,
    "longitude": -3.168087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gdl-013",
    "city": "guadalajara",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Guadalajara, España",
    "latitude": 40.634284,
    "longitude": -3.169777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gdl-014",
    "city": "guadalajara",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Guadalajara, España",
    "latitude": 40.633058,
    "longitude": -3.160143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gdl-015",
    "city": "guadalajara",
    "title": "Estación central 1",
    "address": "Estación central 1, Guadalajara, España",
    "latitude": 40.632113,
    "longitude": -3.168774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gdl-016",
    "city": "guadalajara",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Guadalajara, España",
    "latitude": 40.630423,
    "longitude": -3.173992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gdl-017",
    "city": "guadalajara",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Guadalajara, España",
    "latitude": 40.640057,
    "longitude": -3.159098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gdl-018",
    "city": "guadalajara",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Guadalajara, España",
    "latitude": 40.631426,
    "longitude": -3.166464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gdl-019",
    "city": "guadalajara",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Guadalajara, España",
    "latitude": 40.626208,
    "longitude": -3.172724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gdl-020",
    "city": "guadalajara",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Guadalajara, España",
    "latitude": 40.641102,
    "longitude": -3.163975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gdl-021",
    "city": "guadalajara",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Guadalajara, España",
    "latitude": 40.633736,
    "longitude": -3.166399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gdl-022",
    "city": "guadalajara",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Guadalajara, España",
    "latitude": 40.627476,
    "longitude": -3.165726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gdl-023",
    "city": "guadalajara",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Guadalajara, España",
    "latitude": 40.636225,
    "longitude": -3.16877,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gdl-024",
    "city": "guadalajara",
    "title": "Basílica 1",
    "address": "Basílica 1, Guadalajara, España",
    "latitude": 40.633801,
    "longitude": -3.170401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gdl-025",
    "city": "guadalajara",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Guadalajara, España",
    "latitude": 40.634474,
    "longitude": -3.15932,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gdl-026",
    "city": "guadalajara",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Guadalajara, España",
    "latitude": 40.63143,
    "longitude": -3.168951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gdl-027",
    "city": "guadalajara",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Guadalajara, España",
    "latitude": 40.629799,
    "longitude": -3.173964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gdl-028",
    "city": "guadalajara",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Guadalajara, España",
    "latitude": 40.64088,
    "longitude": -3.159414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gdl-029",
    "city": "guadalajara",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Guadalajara, España",
    "latitude": 40.631249,
    "longitude": -3.16657,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gdl-030",
    "city": "guadalajara",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Guadalajara, España",
    "latitude": 40.626236,
    "longitude": -3.171684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gdl-031",
    "city": "guadalajara",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Guadalajara, España",
    "latitude": 40.640786,
    "longitude": -3.164907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gdl-032",
    "city": "guadalajara",
    "title": "Muralla 1",
    "address": "Muralla 1, Guadalajara, España",
    "latitude": 40.63363,
    "longitude": -3.16687,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gdl-033",
    "city": "guadalajara",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Guadalajara, España",
    "latitude": 40.628516,
    "longitude": -3.164341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gdl-034",
    "city": "guadalajara",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Guadalajara, España",
    "latitude": 40.635293,
    "longitude": -3.169425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gdl-035",
    "city": "guadalajara",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Guadalajara, España",
    "latitude": 40.63333,
    "longitude": -3.170922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gdl-036",
    "city": "guadalajara",
    "title": "Museo local 1",
    "address": "Museo local 1, Guadalajara, España",
    "latitude": 40.635859,
    "longitude": -3.158686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gdl-037",
    "city": "guadalajara",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Guadalajara, España",
    "latitude": 40.630775,
    "longitude": -3.169081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gdl-038",
    "city": "guadalajara",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Guadalajara, España",
    "latitude": 40.629278,
    "longitude": -3.17376,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gdl-039",
    "city": "guadalajara",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Guadalajara, España",
    "latitude": 40.641514,
    "longitude": -3.159921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gdl-040",
    "city": "guadalajara",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Guadalajara, España",
    "latitude": 40.631119,
    "longitude": -3.166669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "abc-001",
    "city": "albacete",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Albacete, España",
    "latitude": 38.9988,
    "longitude": -1.858995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "abc-002",
    "city": "albacete",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Albacete, España",
    "latitude": 38.995764,
    "longitude": -1.860663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "abc-003",
    "city": "albacete",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Albacete, España",
    "latitude": 38.992645,
    "longitude": -1.852732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "abc-004",
    "city": "albacete",
    "title": "Catedral 1",
    "address": "Catedral 1, Albacete, España",
    "latitude": 38.993805,
    "longitude": -1.860161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "abc-005",
    "city": "albacete",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Albacete, España",
    "latitude": 38.992137,
    "longitude": -1.86544,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "abc-006",
    "city": "albacete",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Albacete, España",
    "latitude": 39.000068,
    "longitude": -1.850581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "abc-007",
    "city": "albacete",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Albacete, España",
    "latitude": 38.992639,
    "longitude": -1.857957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "abc-008",
    "city": "albacete",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Albacete, España",
    "latitude": 38.98736,
    "longitude": -1.865224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "abc-009",
    "city": "albacete",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Albacete, España",
    "latitude": 39.002219,
    "longitude": -1.854733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "abc-010",
    "city": "albacete",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Albacete, España",
    "latitude": 38.994843,
    "longitude": -1.857516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "abc-011",
    "city": "albacete",
    "title": "Castillo 1",
    "address": "Castillo 1, Albacete, España",
    "latitude": 38.987576,
    "longitude": -1.858742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "abc-012",
    "city": "albacete",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Albacete, España",
    "latitude": 38.998067,
    "longitude": -1.859687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "abc-013",
    "city": "albacete",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Albacete, España",
    "latitude": 38.995284,
    "longitude": -1.861377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "abc-014",
    "city": "albacete",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Albacete, España",
    "latitude": 38.994058,
    "longitude": -1.851743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "abc-015",
    "city": "albacete",
    "title": "Estación central 1",
    "address": "Estación central 1, Albacete, España",
    "latitude": 38.993113,
    "longitude": -1.860374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "abc-016",
    "city": "albacete",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Albacete, España",
    "latitude": 38.991423,
    "longitude": -1.865592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "abc-017",
    "city": "albacete",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Albacete, España",
    "latitude": 39.001057,
    "longitude": -1.850698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "abc-018",
    "city": "albacete",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Albacete, España",
    "latitude": 38.992426,
    "longitude": -1.858064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "abc-019",
    "city": "albacete",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Albacete, España",
    "latitude": 38.987208,
    "longitude": -1.864324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "abc-020",
    "city": "albacete",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Albacete, España",
    "latitude": 39.002102,
    "longitude": -1.855575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "abc-021",
    "city": "albacete",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Albacete, España",
    "latitude": 38.994736,
    "longitude": -1.857999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "abc-022",
    "city": "albacete",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Albacete, España",
    "latitude": 38.988476,
    "longitude": -1.857326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "abc-023",
    "city": "albacete",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Albacete, España",
    "latitude": 38.997225,
    "longitude": -1.86037,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "abc-024",
    "city": "albacete",
    "title": "Basílica 1",
    "address": "Basílica 1, Albacete, España",
    "latitude": 38.994801,
    "longitude": -1.862001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "abc-025",
    "city": "albacete",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Albacete, España",
    "latitude": 38.995474,
    "longitude": -1.85092,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "abc-026",
    "city": "albacete",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Albacete, España",
    "latitude": 38.99243,
    "longitude": -1.860551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "abc-027",
    "city": "albacete",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Albacete, España",
    "latitude": 38.990799,
    "longitude": -1.865564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "abc-028",
    "city": "albacete",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Albacete, España",
    "latitude": 39.00188,
    "longitude": -1.851014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "abc-029",
    "city": "albacete",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Albacete, España",
    "latitude": 38.992249,
    "longitude": -1.85817,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "abc-030",
    "city": "albacete",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Albacete, España",
    "latitude": 38.987236,
    "longitude": -1.863284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "abc-031",
    "city": "albacete",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Albacete, España",
    "latitude": 39.001786,
    "longitude": -1.856507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "abc-032",
    "city": "albacete",
    "title": "Muralla 1",
    "address": "Muralla 1, Albacete, España",
    "latitude": 38.99463,
    "longitude": -1.85847,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "abc-033",
    "city": "albacete",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Albacete, España",
    "latitude": 38.989516,
    "longitude": -1.855941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "abc-034",
    "city": "albacete",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Albacete, España",
    "latitude": 38.996293,
    "longitude": -1.861025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "abc-035",
    "city": "albacete",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Albacete, España",
    "latitude": 38.99433,
    "longitude": -1.862522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "abc-036",
    "city": "albacete",
    "title": "Museo local 1",
    "address": "Museo local 1, Albacete, España",
    "latitude": 38.996859,
    "longitude": -1.850286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "abc-037",
    "city": "albacete",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Albacete, España",
    "latitude": 38.991775,
    "longitude": -1.860681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "abc-038",
    "city": "albacete",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Albacete, España",
    "latitude": 38.990278,
    "longitude": -1.86536,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "abc-039",
    "city": "albacete",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Albacete, España",
    "latitude": 39.002514,
    "longitude": -1.851521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "abc-040",
    "city": "albacete",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Albacete, España",
    "latitude": 38.992119,
    "longitude": -1.858269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrc-001",
    "city": "murcia",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Murcia, España",
    "latitude": 37.9967,
    "longitude": -1.131195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrc-002",
    "city": "murcia",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Murcia, España",
    "latitude": 37.993664,
    "longitude": -1.132863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrc-003",
    "city": "murcia",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Murcia, España",
    "latitude": 37.990545,
    "longitude": -1.124932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrc-004",
    "city": "murcia",
    "title": "Catedral 1",
    "address": "Catedral 1, Murcia, España",
    "latitude": 37.991705,
    "longitude": -1.132361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrc-005",
    "city": "murcia",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Murcia, España",
    "latitude": 37.990037,
    "longitude": -1.13764,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrc-006",
    "city": "murcia",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Murcia, España",
    "latitude": 37.997968,
    "longitude": -1.122781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrc-007",
    "city": "murcia",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Murcia, España",
    "latitude": 37.990539,
    "longitude": -1.130157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrc-008",
    "city": "murcia",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Murcia, España",
    "latitude": 37.98526,
    "longitude": -1.137424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrc-009",
    "city": "murcia",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Murcia, España",
    "latitude": 38.000119,
    "longitude": -1.126933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrc-010",
    "city": "murcia",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Murcia, España",
    "latitude": 37.992743,
    "longitude": -1.129716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrc-011",
    "city": "murcia",
    "title": "Castillo 1",
    "address": "Castillo 1, Murcia, España",
    "latitude": 37.985476,
    "longitude": -1.130942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrc-012",
    "city": "murcia",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Murcia, España",
    "latitude": 37.995967,
    "longitude": -1.131887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrc-013",
    "city": "murcia",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Murcia, España",
    "latitude": 37.993184,
    "longitude": -1.133577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrc-014",
    "city": "murcia",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Murcia, España",
    "latitude": 37.991958,
    "longitude": -1.123943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrc-015",
    "city": "murcia",
    "title": "Estación central 1",
    "address": "Estación central 1, Murcia, España",
    "latitude": 37.991013,
    "longitude": -1.132574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrc-016",
    "city": "murcia",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Murcia, España",
    "latitude": 37.989323,
    "longitude": -1.137792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrc-017",
    "city": "murcia",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Murcia, España",
    "latitude": 37.998957,
    "longitude": -1.122898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrc-018",
    "city": "murcia",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Murcia, España",
    "latitude": 37.990326,
    "longitude": -1.130264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrc-019",
    "city": "murcia",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Murcia, España",
    "latitude": 37.985108,
    "longitude": -1.136524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrc-020",
    "city": "murcia",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Murcia, España",
    "latitude": 38.000002,
    "longitude": -1.127775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrc-021",
    "city": "murcia",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Murcia, España",
    "latitude": 37.992636,
    "longitude": -1.130199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrc-022",
    "city": "murcia",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Murcia, España",
    "latitude": 37.986376,
    "longitude": -1.129526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrc-023",
    "city": "murcia",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Murcia, España",
    "latitude": 37.995125,
    "longitude": -1.13257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrc-024",
    "city": "murcia",
    "title": "Basílica 1",
    "address": "Basílica 1, Murcia, España",
    "latitude": 37.992701,
    "longitude": -1.134201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrc-025",
    "city": "murcia",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Murcia, España",
    "latitude": 37.993374,
    "longitude": -1.12312,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrc-026",
    "city": "murcia",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Murcia, España",
    "latitude": 37.99033,
    "longitude": -1.132751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrc-027",
    "city": "murcia",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Murcia, España",
    "latitude": 37.988699,
    "longitude": -1.137764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrc-028",
    "city": "murcia",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Murcia, España",
    "latitude": 37.99978,
    "longitude": -1.123214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrc-029",
    "city": "murcia",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Murcia, España",
    "latitude": 37.990149,
    "longitude": -1.13037,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrc-030",
    "city": "murcia",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Murcia, España",
    "latitude": 37.985136,
    "longitude": -1.135484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrc-031",
    "city": "murcia",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Murcia, España",
    "latitude": 37.999686,
    "longitude": -1.128707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrc-032",
    "city": "murcia",
    "title": "Muralla 1",
    "address": "Muralla 1, Murcia, España",
    "latitude": 37.99253,
    "longitude": -1.13067,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrc-033",
    "city": "murcia",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Murcia, España",
    "latitude": 37.987416,
    "longitude": -1.128141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrc-034",
    "city": "murcia",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Murcia, España",
    "latitude": 37.994193,
    "longitude": -1.133225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrc-035",
    "city": "murcia",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Murcia, España",
    "latitude": 37.99223,
    "longitude": -1.134722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrc-036",
    "city": "murcia",
    "title": "Museo local 1",
    "address": "Museo local 1, Murcia, España",
    "latitude": 37.994759,
    "longitude": -1.122486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrc-037",
    "city": "murcia",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Murcia, España",
    "latitude": 37.989675,
    "longitude": -1.132881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrc-038",
    "city": "murcia",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Murcia, España",
    "latitude": 37.988178,
    "longitude": -1.13756,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrc-039",
    "city": "murcia",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Murcia, España",
    "latitude": 38.000414,
    "longitude": -1.123721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrc-040",
    "city": "murcia",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Murcia, España",
    "latitude": 37.990019,
    "longitude": -1.130469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ctg-001",
    "city": "cartagena",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Cartagena, España",
    "latitude": 37.6302,
    "longitude": -0.997095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ctg-002",
    "city": "cartagena",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Cartagena, España",
    "latitude": 37.627164,
    "longitude": -0.998763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ctg-003",
    "city": "cartagena",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Cartagena, España",
    "latitude": 37.624045,
    "longitude": -0.990832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ctg-004",
    "city": "cartagena",
    "title": "Catedral 1",
    "address": "Catedral 1, Cartagena, España",
    "latitude": 37.625205,
    "longitude": -0.998261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ctg-005",
    "city": "cartagena",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Cartagena, España",
    "latitude": 37.623537,
    "longitude": -1.00354,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ctg-006",
    "city": "cartagena",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Cartagena, España",
    "latitude": 37.631468,
    "longitude": -0.988681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ctg-007",
    "city": "cartagena",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Cartagena, España",
    "latitude": 37.624039,
    "longitude": -0.996057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ctg-008",
    "city": "cartagena",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Cartagena, España",
    "latitude": 37.61876,
    "longitude": -1.003324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ctg-009",
    "city": "cartagena",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Cartagena, España",
    "latitude": 37.633619,
    "longitude": -0.992833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ctg-010",
    "city": "cartagena",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Cartagena, España",
    "latitude": 37.626243,
    "longitude": -0.995616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ctg-011",
    "city": "cartagena",
    "title": "Castillo 1",
    "address": "Castillo 1, Cartagena, España",
    "latitude": 37.618976,
    "longitude": -0.996842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ctg-012",
    "city": "cartagena",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Cartagena, España",
    "latitude": 37.629467,
    "longitude": -0.997787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ctg-013",
    "city": "cartagena",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Cartagena, España",
    "latitude": 37.626684,
    "longitude": -0.999477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ctg-014",
    "city": "cartagena",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Cartagena, España",
    "latitude": 37.625458,
    "longitude": -0.989843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ctg-015",
    "city": "cartagena",
    "title": "Estación central 1",
    "address": "Estación central 1, Cartagena, España",
    "latitude": 37.624513,
    "longitude": -0.998474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ctg-016",
    "city": "cartagena",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Cartagena, España",
    "latitude": 37.622823,
    "longitude": -1.003692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ctg-017",
    "city": "cartagena",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Cartagena, España",
    "latitude": 37.632457,
    "longitude": -0.988798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ctg-018",
    "city": "cartagena",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Cartagena, España",
    "latitude": 37.623826,
    "longitude": -0.996164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ctg-019",
    "city": "cartagena",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Cartagena, España",
    "latitude": 37.618608,
    "longitude": -1.002424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ctg-020",
    "city": "cartagena",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Cartagena, España",
    "latitude": 37.633502,
    "longitude": -0.993675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ctg-021",
    "city": "cartagena",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Cartagena, España",
    "latitude": 37.626136,
    "longitude": -0.996099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ctg-022",
    "city": "cartagena",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Cartagena, España",
    "latitude": 37.619876,
    "longitude": -0.995426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ctg-023",
    "city": "cartagena",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Cartagena, España",
    "latitude": 37.628625,
    "longitude": -0.99847,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ctg-024",
    "city": "cartagena",
    "title": "Basílica 1",
    "address": "Basílica 1, Cartagena, España",
    "latitude": 37.626201,
    "longitude": -1.000101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ctg-025",
    "city": "cartagena",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Cartagena, España",
    "latitude": 37.626874,
    "longitude": -0.98902,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ctg-026",
    "city": "cartagena",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Cartagena, España",
    "latitude": 37.62383,
    "longitude": -0.998651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ctg-027",
    "city": "cartagena",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Cartagena, España",
    "latitude": 37.622199,
    "longitude": -1.003664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ctg-028",
    "city": "cartagena",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Cartagena, España",
    "latitude": 37.63328,
    "longitude": -0.989114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ctg-029",
    "city": "cartagena",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Cartagena, España",
    "latitude": 37.623649,
    "longitude": -0.99627,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ctg-030",
    "city": "cartagena",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Cartagena, España",
    "latitude": 37.618636,
    "longitude": -1.001384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ctg-031",
    "city": "cartagena",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Cartagena, España",
    "latitude": 37.633186,
    "longitude": -0.994607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ctg-032",
    "city": "cartagena",
    "title": "Muralla 1",
    "address": "Muralla 1, Cartagena, España",
    "latitude": 37.62603,
    "longitude": -0.99657,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ctg-033",
    "city": "cartagena",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Cartagena, España",
    "latitude": 37.620916,
    "longitude": -0.994041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ctg-034",
    "city": "cartagena",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Cartagena, España",
    "latitude": 37.627693,
    "longitude": -0.999125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ctg-035",
    "city": "cartagena",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Cartagena, España",
    "latitude": 37.62573,
    "longitude": -1.000622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ctg-036",
    "city": "cartagena",
    "title": "Museo local 1",
    "address": "Museo local 1, Cartagena, España",
    "latitude": 37.628259,
    "longitude": -0.988386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ctg-037",
    "city": "cartagena",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Cartagena, España",
    "latitude": 37.623175,
    "longitude": -0.998781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ctg-038",
    "city": "cartagena",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Cartagena, España",
    "latitude": 37.621678,
    "longitude": -1.00346,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ctg-039",
    "city": "cartagena",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Cartagena, España",
    "latitude": 37.633914,
    "longitude": -0.989621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ctg-040",
    "city": "cartagena",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Cartagena, España",
    "latitude": 37.623519,
    "longitude": -0.996369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lei-001",
    "city": "almeria",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Almería, España",
    "latitude": 36.8385,
    "longitude": -2.464195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lei-002",
    "city": "almeria",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Almería, España",
    "latitude": 36.835464,
    "longitude": -2.465863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lei-003",
    "city": "almeria",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Almería, España",
    "latitude": 36.832345,
    "longitude": -2.457932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lei-004",
    "city": "almeria",
    "title": "Catedral 1",
    "address": "Catedral 1, Almería, España",
    "latitude": 36.833505,
    "longitude": -2.465361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lei-005",
    "city": "almeria",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Almería, España",
    "latitude": 36.831837,
    "longitude": -2.47064,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lei-006",
    "city": "almeria",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Almería, España",
    "latitude": 36.839768,
    "longitude": -2.455781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lei-007",
    "city": "almeria",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Almería, España",
    "latitude": 36.832339,
    "longitude": -2.463157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lei-008",
    "city": "almeria",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Almería, España",
    "latitude": 36.82706,
    "longitude": -2.470424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lei-009",
    "city": "almeria",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Almería, España",
    "latitude": 36.841919,
    "longitude": -2.459933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lei-010",
    "city": "almeria",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Almería, España",
    "latitude": 36.834543,
    "longitude": -2.462716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lei-011",
    "city": "almeria",
    "title": "Castillo 1",
    "address": "Castillo 1, Almería, España",
    "latitude": 36.827276,
    "longitude": -2.463942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lei-012",
    "city": "almeria",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Almería, España",
    "latitude": 36.837767,
    "longitude": -2.464887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lei-013",
    "city": "almeria",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Almería, España",
    "latitude": 36.834984,
    "longitude": -2.466577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lei-014",
    "city": "almeria",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Almería, España",
    "latitude": 36.833758,
    "longitude": -2.456943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lei-015",
    "city": "almeria",
    "title": "Estación central 1",
    "address": "Estación central 1, Almería, España",
    "latitude": 36.832813,
    "longitude": -2.465574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lei-016",
    "city": "almeria",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Almería, España",
    "latitude": 36.831123,
    "longitude": -2.470792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lei-017",
    "city": "almeria",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Almería, España",
    "latitude": 36.840757,
    "longitude": -2.455898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lei-018",
    "city": "almeria",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Almería, España",
    "latitude": 36.832126,
    "longitude": -2.463264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lei-019",
    "city": "almeria",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Almería, España",
    "latitude": 36.826908,
    "longitude": -2.469524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lei-020",
    "city": "almeria",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Almería, España",
    "latitude": 36.841802,
    "longitude": -2.460775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lei-021",
    "city": "almeria",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Almería, España",
    "latitude": 36.834436,
    "longitude": -2.463199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lei-022",
    "city": "almeria",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Almería, España",
    "latitude": 36.828176,
    "longitude": -2.462526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lei-023",
    "city": "almeria",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Almería, España",
    "latitude": 36.836925,
    "longitude": -2.46557,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lei-024",
    "city": "almeria",
    "title": "Basílica 1",
    "address": "Basílica 1, Almería, España",
    "latitude": 36.834501,
    "longitude": -2.467201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lei-025",
    "city": "almeria",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Almería, España",
    "latitude": 36.835174,
    "longitude": -2.45612,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lei-026",
    "city": "almeria",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Almería, España",
    "latitude": 36.83213,
    "longitude": -2.465751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lei-027",
    "city": "almeria",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Almería, España",
    "latitude": 36.830499,
    "longitude": -2.470764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lei-028",
    "city": "almeria",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Almería, España",
    "latitude": 36.84158,
    "longitude": -2.456214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lei-029",
    "city": "almeria",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Almería, España",
    "latitude": 36.831949,
    "longitude": -2.46337,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lei-030",
    "city": "almeria",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Almería, España",
    "latitude": 36.826936,
    "longitude": -2.468484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lei-031",
    "city": "almeria",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Almería, España",
    "latitude": 36.841486,
    "longitude": -2.461707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lei-032",
    "city": "almeria",
    "title": "Muralla 1",
    "address": "Muralla 1, Almería, España",
    "latitude": 36.83433,
    "longitude": -2.46367,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lei-033",
    "city": "almeria",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Almería, España",
    "latitude": 36.829216,
    "longitude": -2.461141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lei-034",
    "city": "almeria",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Almería, España",
    "latitude": 36.835993,
    "longitude": -2.466225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lei-035",
    "city": "almeria",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Almería, España",
    "latitude": 36.83403,
    "longitude": -2.467722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lei-036",
    "city": "almeria",
    "title": "Museo local 1",
    "address": "Museo local 1, Almería, España",
    "latitude": 36.836559,
    "longitude": -2.455486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lei-037",
    "city": "almeria",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Almería, España",
    "latitude": 36.831475,
    "longitude": -2.465881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lei-038",
    "city": "almeria",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Almería, España",
    "latitude": 36.829978,
    "longitude": -2.47056,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lei-039",
    "city": "almeria",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Almería, España",
    "latitude": 36.842214,
    "longitude": -2.456721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lei-040",
    "city": "almeria",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Almería, España",
    "latitude": 36.831819,
    "longitude": -2.463469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "jen-001",
    "city": "jaen",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Jaén, España",
    "latitude": 37.7841,
    "longitude": -3.785395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "jen-002",
    "city": "jaen",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Jaén, España",
    "latitude": 37.781064,
    "longitude": -3.787063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "jen-003",
    "city": "jaen",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Jaén, España",
    "latitude": 37.777945,
    "longitude": -3.779132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "jen-004",
    "city": "jaen",
    "title": "Catedral 1",
    "address": "Catedral 1, Jaén, España",
    "latitude": 37.779105,
    "longitude": -3.786561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "jen-005",
    "city": "jaen",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Jaén, España",
    "latitude": 37.777437,
    "longitude": -3.79184,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "jen-006",
    "city": "jaen",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Jaén, España",
    "latitude": 37.785368,
    "longitude": -3.776981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "jen-007",
    "city": "jaen",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Jaén, España",
    "latitude": 37.777939,
    "longitude": -3.784357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "jen-008",
    "city": "jaen",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Jaén, España",
    "latitude": 37.77266,
    "longitude": -3.791624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "jen-009",
    "city": "jaen",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Jaén, España",
    "latitude": 37.787519,
    "longitude": -3.781133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "jen-010",
    "city": "jaen",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Jaén, España",
    "latitude": 37.780143,
    "longitude": -3.783916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "jen-011",
    "city": "jaen",
    "title": "Castillo 1",
    "address": "Castillo 1, Jaén, España",
    "latitude": 37.772876,
    "longitude": -3.785142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "jen-012",
    "city": "jaen",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Jaén, España",
    "latitude": 37.783367,
    "longitude": -3.786087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "jen-013",
    "city": "jaen",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Jaén, España",
    "latitude": 37.780584,
    "longitude": -3.787777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "jen-014",
    "city": "jaen",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Jaén, España",
    "latitude": 37.779358,
    "longitude": -3.778143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "jen-015",
    "city": "jaen",
    "title": "Estación central 1",
    "address": "Estación central 1, Jaén, España",
    "latitude": 37.778413,
    "longitude": -3.786774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "jen-016",
    "city": "jaen",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Jaén, España",
    "latitude": 37.776723,
    "longitude": -3.791992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "jen-017",
    "city": "jaen",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Jaén, España",
    "latitude": 37.786357,
    "longitude": -3.777098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "jen-018",
    "city": "jaen",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Jaén, España",
    "latitude": 37.777726,
    "longitude": -3.784464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "jen-019",
    "city": "jaen",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Jaén, España",
    "latitude": 37.772508,
    "longitude": -3.790724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "jen-020",
    "city": "jaen",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Jaén, España",
    "latitude": 37.787402,
    "longitude": -3.781975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "jen-021",
    "city": "jaen",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Jaén, España",
    "latitude": 37.780036,
    "longitude": -3.784399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "jen-022",
    "city": "jaen",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Jaén, España",
    "latitude": 37.773776,
    "longitude": -3.783726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "jen-023",
    "city": "jaen",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Jaén, España",
    "latitude": 37.782525,
    "longitude": -3.78677,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "jen-024",
    "city": "jaen",
    "title": "Basílica 1",
    "address": "Basílica 1, Jaén, España",
    "latitude": 37.780101,
    "longitude": -3.788401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "jen-025",
    "city": "jaen",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Jaén, España",
    "latitude": 37.780774,
    "longitude": -3.77732,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "jen-026",
    "city": "jaen",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Jaén, España",
    "latitude": 37.77773,
    "longitude": -3.786951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "jen-027",
    "city": "jaen",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Jaén, España",
    "latitude": 37.776099,
    "longitude": -3.791964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "jen-028",
    "city": "jaen",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Jaén, España",
    "latitude": 37.78718,
    "longitude": -3.777414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "jen-029",
    "city": "jaen",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Jaén, España",
    "latitude": 37.777549,
    "longitude": -3.78457,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "jen-030",
    "city": "jaen",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Jaén, España",
    "latitude": 37.772536,
    "longitude": -3.789684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "jen-031",
    "city": "jaen",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Jaén, España",
    "latitude": 37.787086,
    "longitude": -3.782907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "jen-032",
    "city": "jaen",
    "title": "Muralla 1",
    "address": "Muralla 1, Jaén, España",
    "latitude": 37.77993,
    "longitude": -3.78487,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "jen-033",
    "city": "jaen",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Jaén, España",
    "latitude": 37.774816,
    "longitude": -3.782341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "jen-034",
    "city": "jaen",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Jaén, España",
    "latitude": 37.781593,
    "longitude": -3.787425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "jen-035",
    "city": "jaen",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Jaén, España",
    "latitude": 37.77963,
    "longitude": -3.788922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "jen-036",
    "city": "jaen",
    "title": "Museo local 1",
    "address": "Museo local 1, Jaén, España",
    "latitude": 37.782159,
    "longitude": -3.776686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "jen-037",
    "city": "jaen",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Jaén, España",
    "latitude": 37.777075,
    "longitude": -3.787081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "jen-038",
    "city": "jaen",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Jaén, España",
    "latitude": 37.775578,
    "longitude": -3.79176,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "jen-039",
    "city": "jaen",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Jaén, España",
    "latitude": 37.787814,
    "longitude": -3.777921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "jen-040",
    "city": "jaen",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Jaén, España",
    "latitude": 37.777419,
    "longitude": -3.784669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cad-001",
    "city": "cadiz",
    "title": "Playa de la Caleta",
    "address": "Playa de la Caleta, Cádiz, España",
    "latitude": 36.5316,
    "longitude": -6.289095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cad-002",
    "city": "cadiz",
    "title": "Torre Tavira",
    "address": "Torre Tavira, Cádiz, España",
    "latitude": 36.528564,
    "longitude": -6.290763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cad-003",
    "city": "cadiz",
    "title": "Catedral de Cádiz",
    "address": "Catedral de Cádiz, Cádiz, España",
    "latitude": 36.525445,
    "longitude": -6.282832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cad-004",
    "city": "cadiz",
    "title": "Teatro Romano",
    "address": "Teatro Romano, Cádiz, España",
    "latitude": 36.526605,
    "longitude": -6.290261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cad-005",
    "city": "cadiz",
    "title": "Castillo de Santa Catalina",
    "address": "Castillo de Santa Catalina, Cádiz, España",
    "latitude": 36.524937,
    "longitude": -6.29554,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cad-006",
    "city": "cadiz",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Cádiz, España",
    "latitude": 36.532868,
    "longitude": -6.280681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cad-007",
    "city": "cadiz",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Cádiz, España",
    "latitude": 36.525439,
    "longitude": -6.288057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cad-008",
    "city": "cadiz",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Cádiz, España",
    "latitude": 36.52016,
    "longitude": -6.295324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cad-009",
    "city": "cadiz",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Cádiz, España",
    "latitude": 36.535019,
    "longitude": -6.284833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cad-010",
    "city": "cadiz",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Cádiz, España",
    "latitude": 36.527643,
    "longitude": -6.287616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cad-011",
    "city": "cadiz",
    "title": "Castillo 1",
    "address": "Castillo 1, Cádiz, España",
    "latitude": 36.520376,
    "longitude": -6.288842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cad-012",
    "city": "cadiz",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Cádiz, España",
    "latitude": 36.530867,
    "longitude": -6.289787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cad-013",
    "city": "cadiz",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Cádiz, España",
    "latitude": 36.528084,
    "longitude": -6.291477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cad-014",
    "city": "cadiz",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Cádiz, España",
    "latitude": 36.526858,
    "longitude": -6.281843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cad-015",
    "city": "cadiz",
    "title": "Estación central 1",
    "address": "Estación central 1, Cádiz, España",
    "latitude": 36.525913,
    "longitude": -6.290474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cad-016",
    "city": "cadiz",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Cádiz, España",
    "latitude": 36.524223,
    "longitude": -6.295692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cad-017",
    "city": "cadiz",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Cádiz, España",
    "latitude": 36.533857,
    "longitude": -6.280798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cad-018",
    "city": "cadiz",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Cádiz, España",
    "latitude": 36.525226,
    "longitude": -6.288164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cad-019",
    "city": "cadiz",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Cádiz, España",
    "latitude": 36.520008,
    "longitude": -6.294424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cad-020",
    "city": "cadiz",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Cádiz, España",
    "latitude": 36.534902,
    "longitude": -6.285675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cad-021",
    "city": "cadiz",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Cádiz, España",
    "latitude": 36.527536,
    "longitude": -6.288099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cad-022",
    "city": "cadiz",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Cádiz, España",
    "latitude": 36.521276,
    "longitude": -6.287426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cad-023",
    "city": "cadiz",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Cádiz, España",
    "latitude": 36.530025,
    "longitude": -6.29047,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cad-024",
    "city": "cadiz",
    "title": "Basílica 1",
    "address": "Basílica 1, Cádiz, España",
    "latitude": 36.527601,
    "longitude": -6.292101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cad-025",
    "city": "cadiz",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Cádiz, España",
    "latitude": 36.528274,
    "longitude": -6.28102,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cad-026",
    "city": "cadiz",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Cádiz, España",
    "latitude": 36.52523,
    "longitude": -6.290651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cad-027",
    "city": "cadiz",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Cádiz, España",
    "latitude": 36.523599,
    "longitude": -6.295664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cad-028",
    "city": "cadiz",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Cádiz, España",
    "latitude": 36.53468,
    "longitude": -6.281114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cad-029",
    "city": "cadiz",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Cádiz, España",
    "latitude": 36.525049,
    "longitude": -6.28827,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cad-030",
    "city": "cadiz",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Cádiz, España",
    "latitude": 36.520036,
    "longitude": -6.293384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cad-031",
    "city": "cadiz",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Cádiz, España",
    "latitude": 36.534586,
    "longitude": -6.286607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cad-032",
    "city": "cadiz",
    "title": "Muralla 1",
    "address": "Muralla 1, Cádiz, España",
    "latitude": 36.52743,
    "longitude": -6.28857,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cad-033",
    "city": "cadiz",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Cádiz, España",
    "latitude": 36.522316,
    "longitude": -6.286041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cad-034",
    "city": "cadiz",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Cádiz, España",
    "latitude": 36.529093,
    "longitude": -6.291125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cad-035",
    "city": "cadiz",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Cádiz, España",
    "latitude": 36.52713,
    "longitude": -6.292622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cad-036",
    "city": "cadiz",
    "title": "Museo local 1",
    "address": "Museo local 1, Cádiz, España",
    "latitude": 36.529659,
    "longitude": -6.280386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cad-037",
    "city": "cadiz",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Cádiz, España",
    "latitude": 36.524575,
    "longitude": -6.290781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cad-038",
    "city": "cadiz",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Cádiz, España",
    "latitude": 36.523078,
    "longitude": -6.29546,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cad-039",
    "city": "cadiz",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Cádiz, España",
    "latitude": 36.535314,
    "longitude": -6.281621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cad-040",
    "city": "cadiz",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Cádiz, España",
    "latitude": 36.524919,
    "longitude": -6.288369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "xry-001",
    "city": "jerez",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Jerez de la Frontera, España",
    "latitude": 36.6895,
    "longitude": -6.126595,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "xry-002",
    "city": "jerez",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Jerez de la Frontera, España",
    "latitude": 36.686464,
    "longitude": -6.128263,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "xry-003",
    "city": "jerez",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Jerez de la Frontera, España",
    "latitude": 36.683345,
    "longitude": -6.120332,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "xry-004",
    "city": "jerez",
    "title": "Catedral 1",
    "address": "Catedral 1, Jerez de la Frontera, España",
    "latitude": 36.684505,
    "longitude": -6.127761,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "xry-005",
    "city": "jerez",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Jerez de la Frontera, España",
    "latitude": 36.682837,
    "longitude": -6.13304,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "xry-006",
    "city": "jerez",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Jerez de la Frontera, España",
    "latitude": 36.690768,
    "longitude": -6.118181,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "xry-007",
    "city": "jerez",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Jerez de la Frontera, España",
    "latitude": 36.683339,
    "longitude": -6.125557,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "xry-008",
    "city": "jerez",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Jerez de la Frontera, España",
    "latitude": 36.67806,
    "longitude": -6.132824,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "xry-009",
    "city": "jerez",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Jerez de la Frontera, España",
    "latitude": 36.692919,
    "longitude": -6.122333,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "xry-010",
    "city": "jerez",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Jerez de la Frontera, España",
    "latitude": 36.685543,
    "longitude": -6.125116,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "xry-011",
    "city": "jerez",
    "title": "Castillo 1",
    "address": "Castillo 1, Jerez de la Frontera, España",
    "latitude": 36.678276,
    "longitude": -6.126342,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "xry-012",
    "city": "jerez",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Jerez de la Frontera, España",
    "latitude": 36.688767,
    "longitude": -6.127287,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "xry-013",
    "city": "jerez",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Jerez de la Frontera, España",
    "latitude": 36.685984,
    "longitude": -6.128977,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "xry-014",
    "city": "jerez",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Jerez de la Frontera, España",
    "latitude": 36.684758,
    "longitude": -6.119343,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "xry-015",
    "city": "jerez",
    "title": "Estación central 1",
    "address": "Estación central 1, Jerez de la Frontera, España",
    "latitude": 36.683813,
    "longitude": -6.127974,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "xry-016",
    "city": "jerez",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Jerez de la Frontera, España",
    "latitude": 36.682123,
    "longitude": -6.133192,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "xry-017",
    "city": "jerez",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Jerez de la Frontera, España",
    "latitude": 36.691757,
    "longitude": -6.118298,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "xry-018",
    "city": "jerez",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Jerez de la Frontera, España",
    "latitude": 36.683126,
    "longitude": -6.125664,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "xry-019",
    "city": "jerez",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Jerez de la Frontera, España",
    "latitude": 36.677908,
    "longitude": -6.131924,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "xry-020",
    "city": "jerez",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Jerez de la Frontera, España",
    "latitude": 36.692802,
    "longitude": -6.123175,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "xry-021",
    "city": "jerez",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Jerez de la Frontera, España",
    "latitude": 36.685436,
    "longitude": -6.125599,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "xry-022",
    "city": "jerez",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Jerez de la Frontera, España",
    "latitude": 36.679176,
    "longitude": -6.124926,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "xry-023",
    "city": "jerez",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Jerez de la Frontera, España",
    "latitude": 36.687925,
    "longitude": -6.12797,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "xry-024",
    "city": "jerez",
    "title": "Basílica 1",
    "address": "Basílica 1, Jerez de la Frontera, España",
    "latitude": 36.685501,
    "longitude": -6.129601,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "xry-025",
    "city": "jerez",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Jerez de la Frontera, España",
    "latitude": 36.686174,
    "longitude": -6.11852,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "xry-026",
    "city": "jerez",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Jerez de la Frontera, España",
    "latitude": 36.68313,
    "longitude": -6.128151,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "xry-027",
    "city": "jerez",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Jerez de la Frontera, España",
    "latitude": 36.681499,
    "longitude": -6.133164,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "xry-028",
    "city": "jerez",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Jerez de la Frontera, España",
    "latitude": 36.69258,
    "longitude": -6.118614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "xry-029",
    "city": "jerez",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Jerez de la Frontera, España",
    "latitude": 36.682949,
    "longitude": -6.12577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "xry-030",
    "city": "jerez",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Jerez de la Frontera, España",
    "latitude": 36.677936,
    "longitude": -6.130884,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "xry-031",
    "city": "jerez",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Jerez de la Frontera, España",
    "latitude": 36.692486,
    "longitude": -6.124107,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "xry-032",
    "city": "jerez",
    "title": "Muralla 1",
    "address": "Muralla 1, Jerez de la Frontera, España",
    "latitude": 36.68533,
    "longitude": -6.12607,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "xry-033",
    "city": "jerez",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Jerez de la Frontera, España",
    "latitude": 36.680216,
    "longitude": -6.123541,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "xry-034",
    "city": "jerez",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Jerez de la Frontera, España",
    "latitude": 36.686993,
    "longitude": -6.128625,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "xry-035",
    "city": "jerez",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Jerez de la Frontera, España",
    "latitude": 36.68503,
    "longitude": -6.130122,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "xry-036",
    "city": "jerez",
    "title": "Museo local 1",
    "address": "Museo local 1, Jerez de la Frontera, España",
    "latitude": 36.687559,
    "longitude": -6.117886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "xry-037",
    "city": "jerez",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Jerez de la Frontera, España",
    "latitude": 36.682475,
    "longitude": -6.128281,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "xry-038",
    "city": "jerez",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Jerez de la Frontera, España",
    "latitude": 36.680978,
    "longitude": -6.13296,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "xry-039",
    "city": "jerez",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Jerez de la Frontera, España",
    "latitude": 36.693214,
    "longitude": -6.119121,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "xry-040",
    "city": "jerez",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Jerez de la Frontera, España",
    "latitude": 36.682819,
    "longitude": -6.125869,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "huv-001",
    "city": "huelva",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Huelva, España",
    "latitude": 37.2659,
    "longitude": -6.945195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "huv-002",
    "city": "huelva",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Huelva, España",
    "latitude": 37.262864,
    "longitude": -6.946863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "huv-003",
    "city": "huelva",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Huelva, España",
    "latitude": 37.259745,
    "longitude": -6.938932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "huv-004",
    "city": "huelva",
    "title": "Catedral 1",
    "address": "Catedral 1, Huelva, España",
    "latitude": 37.260905,
    "longitude": -6.946361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "huv-005",
    "city": "huelva",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Huelva, España",
    "latitude": 37.259237,
    "longitude": -6.95164,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "huv-006",
    "city": "huelva",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Huelva, España",
    "latitude": 37.267168,
    "longitude": -6.936781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "huv-007",
    "city": "huelva",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Huelva, España",
    "latitude": 37.259739,
    "longitude": -6.944157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "huv-008",
    "city": "huelva",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Huelva, España",
    "latitude": 37.25446,
    "longitude": -6.951424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "huv-009",
    "city": "huelva",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Huelva, España",
    "latitude": 37.269319,
    "longitude": -6.940933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "huv-010",
    "city": "huelva",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Huelva, España",
    "latitude": 37.261943,
    "longitude": -6.943716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "huv-011",
    "city": "huelva",
    "title": "Castillo 1",
    "address": "Castillo 1, Huelva, España",
    "latitude": 37.254676,
    "longitude": -6.944942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "huv-012",
    "city": "huelva",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Huelva, España",
    "latitude": 37.265167,
    "longitude": -6.945887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "huv-013",
    "city": "huelva",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Huelva, España",
    "latitude": 37.262384,
    "longitude": -6.947577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "huv-014",
    "city": "huelva",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Huelva, España",
    "latitude": 37.261158,
    "longitude": -6.937943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "huv-015",
    "city": "huelva",
    "title": "Estación central 1",
    "address": "Estación central 1, Huelva, España",
    "latitude": 37.260213,
    "longitude": -6.946574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "huv-016",
    "city": "huelva",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Huelva, España",
    "latitude": 37.258523,
    "longitude": -6.951792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "huv-017",
    "city": "huelva",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Huelva, España",
    "latitude": 37.268157,
    "longitude": -6.936898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "huv-018",
    "city": "huelva",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Huelva, España",
    "latitude": 37.259526,
    "longitude": -6.944264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "huv-019",
    "city": "huelva",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Huelva, España",
    "latitude": 37.254308,
    "longitude": -6.950524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "huv-020",
    "city": "huelva",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Huelva, España",
    "latitude": 37.269202,
    "longitude": -6.941775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "huv-021",
    "city": "huelva",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Huelva, España",
    "latitude": 37.261836,
    "longitude": -6.944199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "huv-022",
    "city": "huelva",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Huelva, España",
    "latitude": 37.255576,
    "longitude": -6.943526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "huv-023",
    "city": "huelva",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Huelva, España",
    "latitude": 37.264325,
    "longitude": -6.94657,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "huv-024",
    "city": "huelva",
    "title": "Basílica 1",
    "address": "Basílica 1, Huelva, España",
    "latitude": 37.261901,
    "longitude": -6.948201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "huv-025",
    "city": "huelva",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Huelva, España",
    "latitude": 37.262574,
    "longitude": -6.93712,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "huv-026",
    "city": "huelva",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Huelva, España",
    "latitude": 37.25953,
    "longitude": -6.946751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "huv-027",
    "city": "huelva",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Huelva, España",
    "latitude": 37.257899,
    "longitude": -6.951764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "huv-028",
    "city": "huelva",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Huelva, España",
    "latitude": 37.26898,
    "longitude": -6.937214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "huv-029",
    "city": "huelva",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Huelva, España",
    "latitude": 37.259349,
    "longitude": -6.94437,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "huv-030",
    "city": "huelva",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Huelva, España",
    "latitude": 37.254336,
    "longitude": -6.949484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "huv-031",
    "city": "huelva",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Huelva, España",
    "latitude": 37.268886,
    "longitude": -6.942707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "huv-032",
    "city": "huelva",
    "title": "Muralla 1",
    "address": "Muralla 1, Huelva, España",
    "latitude": 37.26173,
    "longitude": -6.94467,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "huv-033",
    "city": "huelva",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Huelva, España",
    "latitude": 37.256616,
    "longitude": -6.942141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "huv-034",
    "city": "huelva",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Huelva, España",
    "latitude": 37.263393,
    "longitude": -6.947225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "huv-035",
    "city": "huelva",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Huelva, España",
    "latitude": 37.26143,
    "longitude": -6.948722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "huv-036",
    "city": "huelva",
    "title": "Museo local 1",
    "address": "Museo local 1, Huelva, España",
    "latitude": 37.263959,
    "longitude": -6.936486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "huv-037",
    "city": "huelva",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Huelva, España",
    "latitude": 37.258875,
    "longitude": -6.946881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "huv-038",
    "city": "huelva",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Huelva, España",
    "latitude": 37.257378,
    "longitude": -6.95156,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "huv-039",
    "city": "huelva",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Huelva, España",
    "latitude": 37.269614,
    "longitude": -6.937721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "huv-040",
    "city": "huelva",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Huelva, España",
    "latitude": 37.259219,
    "longitude": -6.944469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdj-001",
    "city": "badajoz",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Badajoz, España",
    "latitude": 38.8839,
    "longitude": -6.971195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdj-002",
    "city": "badajoz",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Badajoz, España",
    "latitude": 38.880864,
    "longitude": -6.972863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdj-003",
    "city": "badajoz",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Badajoz, España",
    "latitude": 38.877745,
    "longitude": -6.964932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdj-004",
    "city": "badajoz",
    "title": "Catedral 1",
    "address": "Catedral 1, Badajoz, España",
    "latitude": 38.878905,
    "longitude": -6.972361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdj-005",
    "city": "badajoz",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Badajoz, España",
    "latitude": 38.877237,
    "longitude": -6.97764,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdj-006",
    "city": "badajoz",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Badajoz, España",
    "latitude": 38.885168,
    "longitude": -6.962781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdj-007",
    "city": "badajoz",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Badajoz, España",
    "latitude": 38.877739,
    "longitude": -6.970157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdj-008",
    "city": "badajoz",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Badajoz, España",
    "latitude": 38.87246,
    "longitude": -6.977424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdj-009",
    "city": "badajoz",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Badajoz, España",
    "latitude": 38.887319,
    "longitude": -6.966933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdj-010",
    "city": "badajoz",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Badajoz, España",
    "latitude": 38.879943,
    "longitude": -6.969716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdj-011",
    "city": "badajoz",
    "title": "Castillo 1",
    "address": "Castillo 1, Badajoz, España",
    "latitude": 38.872676,
    "longitude": -6.970942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdj-012",
    "city": "badajoz",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Badajoz, España",
    "latitude": 38.883167,
    "longitude": -6.971887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdj-013",
    "city": "badajoz",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Badajoz, España",
    "latitude": 38.880384,
    "longitude": -6.973577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdj-014",
    "city": "badajoz",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Badajoz, España",
    "latitude": 38.879158,
    "longitude": -6.963943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdj-015",
    "city": "badajoz",
    "title": "Estación central 1",
    "address": "Estación central 1, Badajoz, España",
    "latitude": 38.878213,
    "longitude": -6.972574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdj-016",
    "city": "badajoz",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Badajoz, España",
    "latitude": 38.876523,
    "longitude": -6.977792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdj-017",
    "city": "badajoz",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Badajoz, España",
    "latitude": 38.886157,
    "longitude": -6.962898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdj-018",
    "city": "badajoz",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Badajoz, España",
    "latitude": 38.877526,
    "longitude": -6.970264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdj-019",
    "city": "badajoz",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Badajoz, España",
    "latitude": 38.872308,
    "longitude": -6.976524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdj-020",
    "city": "badajoz",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Badajoz, España",
    "latitude": 38.887202,
    "longitude": -6.967775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdj-021",
    "city": "badajoz",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Badajoz, España",
    "latitude": 38.879836,
    "longitude": -6.970199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdj-022",
    "city": "badajoz",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Badajoz, España",
    "latitude": 38.873576,
    "longitude": -6.969526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdj-023",
    "city": "badajoz",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Badajoz, España",
    "latitude": 38.882325,
    "longitude": -6.97257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdj-024",
    "city": "badajoz",
    "title": "Basílica 1",
    "address": "Basílica 1, Badajoz, España",
    "latitude": 38.879901,
    "longitude": -6.974201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdj-025",
    "city": "badajoz",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Badajoz, España",
    "latitude": 38.880574,
    "longitude": -6.96312,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdj-026",
    "city": "badajoz",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Badajoz, España",
    "latitude": 38.87753,
    "longitude": -6.972751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdj-027",
    "city": "badajoz",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Badajoz, España",
    "latitude": 38.875899,
    "longitude": -6.977764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdj-028",
    "city": "badajoz",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Badajoz, España",
    "latitude": 38.88698,
    "longitude": -6.963214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdj-029",
    "city": "badajoz",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Badajoz, España",
    "latitude": 38.877349,
    "longitude": -6.97037,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdj-030",
    "city": "badajoz",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Badajoz, España",
    "latitude": 38.872336,
    "longitude": -6.975484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdj-031",
    "city": "badajoz",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Badajoz, España",
    "latitude": 38.886886,
    "longitude": -6.968707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdj-032",
    "city": "badajoz",
    "title": "Muralla 1",
    "address": "Muralla 1, Badajoz, España",
    "latitude": 38.87973,
    "longitude": -6.97067,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdj-033",
    "city": "badajoz",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Badajoz, España",
    "latitude": 38.874616,
    "longitude": -6.968141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdj-034",
    "city": "badajoz",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Badajoz, España",
    "latitude": 38.881393,
    "longitude": -6.973225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdj-035",
    "city": "badajoz",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Badajoz, España",
    "latitude": 38.87943,
    "longitude": -6.974722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdj-036",
    "city": "badajoz",
    "title": "Museo local 1",
    "address": "Museo local 1, Badajoz, España",
    "latitude": 38.881959,
    "longitude": -6.962486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdj-037",
    "city": "badajoz",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Badajoz, España",
    "latitude": 38.876875,
    "longitude": -6.972881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdj-038",
    "city": "badajoz",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Badajoz, España",
    "latitude": 38.875378,
    "longitude": -6.97756,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdj-039",
    "city": "badajoz",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Badajoz, España",
    "latitude": 38.887614,
    "longitude": -6.963721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdj-040",
    "city": "badajoz",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Badajoz, España",
    "latitude": 38.877219,
    "longitude": -6.970469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ccr-001",
    "city": "caceres",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Cáceres, España",
    "latitude": 39.481,
    "longitude": -6.372695,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ccr-002",
    "city": "caceres",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Cáceres, España",
    "latitude": 39.477964,
    "longitude": -6.374363,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ccr-003",
    "city": "caceres",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Cáceres, España",
    "latitude": 39.474845,
    "longitude": -6.366432,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ccr-004",
    "city": "caceres",
    "title": "Catedral 1",
    "address": "Catedral 1, Cáceres, España",
    "latitude": 39.476005,
    "longitude": -6.373861,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ccr-005",
    "city": "caceres",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Cáceres, España",
    "latitude": 39.474337,
    "longitude": -6.37914,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ccr-006",
    "city": "caceres",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Cáceres, España",
    "latitude": 39.482268,
    "longitude": -6.364281,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ccr-007",
    "city": "caceres",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Cáceres, España",
    "latitude": 39.474839,
    "longitude": -6.371657,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ccr-008",
    "city": "caceres",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Cáceres, España",
    "latitude": 39.46956,
    "longitude": -6.378924,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ccr-009",
    "city": "caceres",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Cáceres, España",
    "latitude": 39.484419,
    "longitude": -6.368433,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ccr-010",
    "city": "caceres",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Cáceres, España",
    "latitude": 39.477043,
    "longitude": -6.371216,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ccr-011",
    "city": "caceres",
    "title": "Castillo 1",
    "address": "Castillo 1, Cáceres, España",
    "latitude": 39.469776,
    "longitude": -6.372442,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ccr-012",
    "city": "caceres",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Cáceres, España",
    "latitude": 39.480267,
    "longitude": -6.373387,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ccr-013",
    "city": "caceres",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Cáceres, España",
    "latitude": 39.477484,
    "longitude": -6.375077,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ccr-014",
    "city": "caceres",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Cáceres, España",
    "latitude": 39.476258,
    "longitude": -6.365443,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ccr-015",
    "city": "caceres",
    "title": "Estación central 1",
    "address": "Estación central 1, Cáceres, España",
    "latitude": 39.475313,
    "longitude": -6.374074,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ccr-016",
    "city": "caceres",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Cáceres, España",
    "latitude": 39.473623,
    "longitude": -6.379292,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ccr-017",
    "city": "caceres",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Cáceres, España",
    "latitude": 39.483257,
    "longitude": -6.364398,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ccr-018",
    "city": "caceres",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Cáceres, España",
    "latitude": 39.474626,
    "longitude": -6.371764,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ccr-019",
    "city": "caceres",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Cáceres, España",
    "latitude": 39.469408,
    "longitude": -6.378024,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ccr-020",
    "city": "caceres",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Cáceres, España",
    "latitude": 39.484302,
    "longitude": -6.369275,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ccr-021",
    "city": "caceres",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Cáceres, España",
    "latitude": 39.476936,
    "longitude": -6.371699,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ccr-022",
    "city": "caceres",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Cáceres, España",
    "latitude": 39.470676,
    "longitude": -6.371026,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ccr-023",
    "city": "caceres",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Cáceres, España",
    "latitude": 39.479425,
    "longitude": -6.37407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ccr-024",
    "city": "caceres",
    "title": "Basílica 1",
    "address": "Basílica 1, Cáceres, España",
    "latitude": 39.477001,
    "longitude": -6.375701,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ccr-025",
    "city": "caceres",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Cáceres, España",
    "latitude": 39.477674,
    "longitude": -6.36462,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ccr-026",
    "city": "caceres",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Cáceres, España",
    "latitude": 39.47463,
    "longitude": -6.374251,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ccr-027",
    "city": "caceres",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Cáceres, España",
    "latitude": 39.472999,
    "longitude": -6.379264,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ccr-028",
    "city": "caceres",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Cáceres, España",
    "latitude": 39.48408,
    "longitude": -6.364714,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ccr-029",
    "city": "caceres",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Cáceres, España",
    "latitude": 39.474449,
    "longitude": -6.37187,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ccr-030",
    "city": "caceres",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Cáceres, España",
    "latitude": 39.469436,
    "longitude": -6.376984,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ccr-031",
    "city": "caceres",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Cáceres, España",
    "latitude": 39.483986,
    "longitude": -6.370207,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ccr-032",
    "city": "caceres",
    "title": "Muralla 1",
    "address": "Muralla 1, Cáceres, España",
    "latitude": 39.47683,
    "longitude": -6.37217,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ccr-033",
    "city": "caceres",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Cáceres, España",
    "latitude": 39.471716,
    "longitude": -6.369641,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ccr-034",
    "city": "caceres",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Cáceres, España",
    "latitude": 39.478493,
    "longitude": -6.374725,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ccr-035",
    "city": "caceres",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Cáceres, España",
    "latitude": 39.47653,
    "longitude": -6.376222,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ccr-036",
    "city": "caceres",
    "title": "Museo local 1",
    "address": "Museo local 1, Cáceres, España",
    "latitude": 39.479059,
    "longitude": -6.363986,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ccr-037",
    "city": "caceres",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Cáceres, España",
    "latitude": 39.473975,
    "longitude": -6.374381,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ccr-038",
    "city": "caceres",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Cáceres, España",
    "latitude": 39.472478,
    "longitude": -6.37906,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ccr-039",
    "city": "caceres",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Cáceres, España",
    "latitude": 39.484714,
    "longitude": -6.365221,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ccr-040",
    "city": "caceres",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Cáceres, España",
    "latitude": 39.474319,
    "longitude": -6.371969,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "scq-001",
    "city": "santiago",
    "title": "Catedral de Santiago",
    "address": "Catedral de Santiago, Santiago de Compostela, España",
    "latitude": 42.8827,
    "longitude": -8.545295,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "scq-002",
    "city": "santiago",
    "title": "Plaza del Obradoiro",
    "address": "Plaza del Obradoiro, Santiago de Compostela, España",
    "latitude": 42.879664,
    "longitude": -8.546963,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "scq-003",
    "city": "santiago",
    "title": "Parque de la Alameda",
    "address": "Parque de la Alameda, Santiago de Compostela, España",
    "latitude": 42.876545,
    "longitude": -8.539032,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "scq-004",
    "city": "santiago",
    "title": "Mercado de Abastos",
    "address": "Mercado de Abastos, Santiago de Compostela, España",
    "latitude": 42.877705,
    "longitude": -8.546461,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "scq-005",
    "city": "santiago",
    "title": "Ciudad de la Cultura",
    "address": "Ciudad de la Cultura, Santiago de Compostela, España",
    "latitude": 42.876037,
    "longitude": -8.55174,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "scq-006",
    "city": "santiago",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Santiago de Compostela, España",
    "latitude": 42.883968,
    "longitude": -8.536881,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "scq-007",
    "city": "santiago",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Santiago de Compostela, España",
    "latitude": 42.876539,
    "longitude": -8.544257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "scq-008",
    "city": "santiago",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Santiago de Compostela, España",
    "latitude": 42.87126,
    "longitude": -8.551524,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "scq-009",
    "city": "santiago",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Santiago de Compostela, España",
    "latitude": 42.886119,
    "longitude": -8.541033,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "scq-010",
    "city": "santiago",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Santiago de Compostela, España",
    "latitude": 42.878743,
    "longitude": -8.543816,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "scq-011",
    "city": "santiago",
    "title": "Castillo 1",
    "address": "Castillo 1, Santiago de Compostela, España",
    "latitude": 42.871476,
    "longitude": -8.545042,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "scq-012",
    "city": "santiago",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Santiago de Compostela, España",
    "latitude": 42.881967,
    "longitude": -8.545987,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "scq-013",
    "city": "santiago",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Santiago de Compostela, España",
    "latitude": 42.879184,
    "longitude": -8.547677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "scq-014",
    "city": "santiago",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Santiago de Compostela, España",
    "latitude": 42.877958,
    "longitude": -8.538043,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "scq-015",
    "city": "santiago",
    "title": "Estación central 1",
    "address": "Estación central 1, Santiago de Compostela, España",
    "latitude": 42.877013,
    "longitude": -8.546674,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "scq-016",
    "city": "santiago",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Santiago de Compostela, España",
    "latitude": 42.875323,
    "longitude": -8.551892,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "scq-017",
    "city": "santiago",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Santiago de Compostela, España",
    "latitude": 42.884957,
    "longitude": -8.536998,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "scq-018",
    "city": "santiago",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Santiago de Compostela, España",
    "latitude": 42.876326,
    "longitude": -8.544364,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "scq-019",
    "city": "santiago",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Santiago de Compostela, España",
    "latitude": 42.871108,
    "longitude": -8.550624,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "scq-020",
    "city": "santiago",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Santiago de Compostela, España",
    "latitude": 42.886002,
    "longitude": -8.541875,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "scq-021",
    "city": "santiago",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Santiago de Compostela, España",
    "latitude": 42.878636,
    "longitude": -8.544299,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "scq-022",
    "city": "santiago",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Santiago de Compostela, España",
    "latitude": 42.872376,
    "longitude": -8.543626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "scq-023",
    "city": "santiago",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Santiago de Compostela, España",
    "latitude": 42.881125,
    "longitude": -8.54667,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "scq-024",
    "city": "santiago",
    "title": "Basílica 1",
    "address": "Basílica 1, Santiago de Compostela, España",
    "latitude": 42.878701,
    "longitude": -8.548301,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "scq-025",
    "city": "santiago",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Santiago de Compostela, España",
    "latitude": 42.879374,
    "longitude": -8.53722,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "scq-026",
    "city": "santiago",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Santiago de Compostela, España",
    "latitude": 42.87633,
    "longitude": -8.546851,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "scq-027",
    "city": "santiago",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Santiago de Compostela, España",
    "latitude": 42.874699,
    "longitude": -8.551864,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "scq-028",
    "city": "santiago",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Santiago de Compostela, España",
    "latitude": 42.88578,
    "longitude": -8.537314,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "scq-029",
    "city": "santiago",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Santiago de Compostela, España",
    "latitude": 42.876149,
    "longitude": -8.54447,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "scq-030",
    "city": "santiago",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Santiago de Compostela, España",
    "latitude": 42.871136,
    "longitude": -8.549584,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "scq-031",
    "city": "santiago",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Santiago de Compostela, España",
    "latitude": 42.885686,
    "longitude": -8.542807,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "scq-032",
    "city": "santiago",
    "title": "Muralla 1",
    "address": "Muralla 1, Santiago de Compostela, España",
    "latitude": 42.87853,
    "longitude": -8.54477,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "scq-033",
    "city": "santiago",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Santiago de Compostela, España",
    "latitude": 42.873416,
    "longitude": -8.542241,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "scq-034",
    "city": "santiago",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Santiago de Compostela, España",
    "latitude": 42.880193,
    "longitude": -8.547325,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "scq-035",
    "city": "santiago",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Santiago de Compostela, España",
    "latitude": 42.87823,
    "longitude": -8.548822,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "scq-036",
    "city": "santiago",
    "title": "Museo local 1",
    "address": "Museo local 1, Santiago de Compostela, España",
    "latitude": 42.880759,
    "longitude": -8.536586,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "scq-037",
    "city": "santiago",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Santiago de Compostela, España",
    "latitude": 42.875675,
    "longitude": -8.546981,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "scq-038",
    "city": "santiago",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Santiago de Compostela, España",
    "latitude": 42.874178,
    "longitude": -8.55166,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "scq-039",
    "city": "santiago",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Santiago de Compostela, España",
    "latitude": 42.886414,
    "longitude": -8.537821,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "scq-040",
    "city": "santiago",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Santiago de Compostela, España",
    "latitude": 42.876019,
    "longitude": -8.544569,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lug-001",
    "city": "lugo",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Lugo, España",
    "latitude": 43.0168,
    "longitude": -7.556395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lug-002",
    "city": "lugo",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Lugo, España",
    "latitude": 43.013764,
    "longitude": -7.558063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lug-003",
    "city": "lugo",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Lugo, España",
    "latitude": 43.010645,
    "longitude": -7.550132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lug-004",
    "city": "lugo",
    "title": "Catedral 1",
    "address": "Catedral 1, Lugo, España",
    "latitude": 43.011805,
    "longitude": -7.557561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lug-005",
    "city": "lugo",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Lugo, España",
    "latitude": 43.010137,
    "longitude": -7.56284,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lug-006",
    "city": "lugo",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Lugo, España",
    "latitude": 43.018068,
    "longitude": -7.547981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lug-007",
    "city": "lugo",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Lugo, España",
    "latitude": 43.010639,
    "longitude": -7.555357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lug-008",
    "city": "lugo",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Lugo, España",
    "latitude": 43.00536,
    "longitude": -7.562624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lug-009",
    "city": "lugo",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Lugo, España",
    "latitude": 43.020219,
    "longitude": -7.552133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lug-010",
    "city": "lugo",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Lugo, España",
    "latitude": 43.012843,
    "longitude": -7.554916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lug-011",
    "city": "lugo",
    "title": "Castillo 1",
    "address": "Castillo 1, Lugo, España",
    "latitude": 43.005576,
    "longitude": -7.556142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lug-012",
    "city": "lugo",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Lugo, España",
    "latitude": 43.016067,
    "longitude": -7.557087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lug-013",
    "city": "lugo",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Lugo, España",
    "latitude": 43.013284,
    "longitude": -7.558777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lug-014",
    "city": "lugo",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Lugo, España",
    "latitude": 43.012058,
    "longitude": -7.549143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lug-015",
    "city": "lugo",
    "title": "Estación central 1",
    "address": "Estación central 1, Lugo, España",
    "latitude": 43.011113,
    "longitude": -7.557774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lug-016",
    "city": "lugo",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Lugo, España",
    "latitude": 43.009423,
    "longitude": -7.562992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lug-017",
    "city": "lugo",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Lugo, España",
    "latitude": 43.019057,
    "longitude": -7.548098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lug-018",
    "city": "lugo",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Lugo, España",
    "latitude": 43.010426,
    "longitude": -7.555464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lug-019",
    "city": "lugo",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Lugo, España",
    "latitude": 43.005208,
    "longitude": -7.561724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lug-020",
    "city": "lugo",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Lugo, España",
    "latitude": 43.020102,
    "longitude": -7.552975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lug-021",
    "city": "lugo",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Lugo, España",
    "latitude": 43.012736,
    "longitude": -7.555399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lug-022",
    "city": "lugo",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Lugo, España",
    "latitude": 43.006476,
    "longitude": -7.554726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lug-023",
    "city": "lugo",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Lugo, España",
    "latitude": 43.015225,
    "longitude": -7.55777,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lug-024",
    "city": "lugo",
    "title": "Basílica 1",
    "address": "Basílica 1, Lugo, España",
    "latitude": 43.012801,
    "longitude": -7.559401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lug-025",
    "city": "lugo",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Lugo, España",
    "latitude": 43.013474,
    "longitude": -7.54832,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lug-026",
    "city": "lugo",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Lugo, España",
    "latitude": 43.01043,
    "longitude": -7.557951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lug-027",
    "city": "lugo",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Lugo, España",
    "latitude": 43.008799,
    "longitude": -7.562964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lug-028",
    "city": "lugo",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Lugo, España",
    "latitude": 43.01988,
    "longitude": -7.548414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lug-029",
    "city": "lugo",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Lugo, España",
    "latitude": 43.010249,
    "longitude": -7.55557,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lug-030",
    "city": "lugo",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Lugo, España",
    "latitude": 43.005236,
    "longitude": -7.560684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lug-031",
    "city": "lugo",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Lugo, España",
    "latitude": 43.019786,
    "longitude": -7.553907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lug-032",
    "city": "lugo",
    "title": "Muralla 1",
    "address": "Muralla 1, Lugo, España",
    "latitude": 43.01263,
    "longitude": -7.55587,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lug-033",
    "city": "lugo",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Lugo, España",
    "latitude": 43.007516,
    "longitude": -7.553341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lug-034",
    "city": "lugo",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Lugo, España",
    "latitude": 43.014293,
    "longitude": -7.558425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lug-035",
    "city": "lugo",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Lugo, España",
    "latitude": 43.01233,
    "longitude": -7.559922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lug-036",
    "city": "lugo",
    "title": "Museo local 1",
    "address": "Museo local 1, Lugo, España",
    "latitude": 43.014859,
    "longitude": -7.547686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lug-037",
    "city": "lugo",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Lugo, España",
    "latitude": 43.009775,
    "longitude": -7.558081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lug-038",
    "city": "lugo",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Lugo, España",
    "latitude": 43.008278,
    "longitude": -7.56276,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lug-039",
    "city": "lugo",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Lugo, España",
    "latitude": 43.020514,
    "longitude": -7.548921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lug-040",
    "city": "lugo",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Lugo, España",
    "latitude": 43.010119,
    "longitude": -7.555669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "oru-001",
    "city": "ourense",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Ourense, España",
    "latitude": 42.3403,
    "longitude": -7.864395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "oru-002",
    "city": "ourense",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Ourense, España",
    "latitude": 42.337264,
    "longitude": -7.866063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "oru-003",
    "city": "ourense",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Ourense, España",
    "latitude": 42.334145,
    "longitude": -7.858132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "oru-004",
    "city": "ourense",
    "title": "Catedral 1",
    "address": "Catedral 1, Ourense, España",
    "latitude": 42.335305,
    "longitude": -7.865561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "oru-005",
    "city": "ourense",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Ourense, España",
    "latitude": 42.333637,
    "longitude": -7.87084,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "oru-006",
    "city": "ourense",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Ourense, España",
    "latitude": 42.341568,
    "longitude": -7.855981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "oru-007",
    "city": "ourense",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Ourense, España",
    "latitude": 42.334139,
    "longitude": -7.863357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "oru-008",
    "city": "ourense",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Ourense, España",
    "latitude": 42.32886,
    "longitude": -7.870624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "oru-009",
    "city": "ourense",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Ourense, España",
    "latitude": 42.343719,
    "longitude": -7.860133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "oru-010",
    "city": "ourense",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Ourense, España",
    "latitude": 42.336343,
    "longitude": -7.862916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "oru-011",
    "city": "ourense",
    "title": "Castillo 1",
    "address": "Castillo 1, Ourense, España",
    "latitude": 42.329076,
    "longitude": -7.864142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "oru-012",
    "city": "ourense",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Ourense, España",
    "latitude": 42.339567,
    "longitude": -7.865087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "oru-013",
    "city": "ourense",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Ourense, España",
    "latitude": 42.336784,
    "longitude": -7.866777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "oru-014",
    "city": "ourense",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Ourense, España",
    "latitude": 42.335558,
    "longitude": -7.857143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "oru-015",
    "city": "ourense",
    "title": "Estación central 1",
    "address": "Estación central 1, Ourense, España",
    "latitude": 42.334613,
    "longitude": -7.865774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "oru-016",
    "city": "ourense",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Ourense, España",
    "latitude": 42.332923,
    "longitude": -7.870992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "oru-017",
    "city": "ourense",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Ourense, España",
    "latitude": 42.342557,
    "longitude": -7.856098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "oru-018",
    "city": "ourense",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Ourense, España",
    "latitude": 42.333926,
    "longitude": -7.863464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "oru-019",
    "city": "ourense",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Ourense, España",
    "latitude": 42.328708,
    "longitude": -7.869724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "oru-020",
    "city": "ourense",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Ourense, España",
    "latitude": 42.343602,
    "longitude": -7.860975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "oru-021",
    "city": "ourense",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Ourense, España",
    "latitude": 42.336236,
    "longitude": -7.863399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "oru-022",
    "city": "ourense",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Ourense, España",
    "latitude": 42.329976,
    "longitude": -7.862726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "oru-023",
    "city": "ourense",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Ourense, España",
    "latitude": 42.338725,
    "longitude": -7.86577,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "oru-024",
    "city": "ourense",
    "title": "Basílica 1",
    "address": "Basílica 1, Ourense, España",
    "latitude": 42.336301,
    "longitude": -7.867401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "oru-025",
    "city": "ourense",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Ourense, España",
    "latitude": 42.336974,
    "longitude": -7.85632,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "oru-026",
    "city": "ourense",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Ourense, España",
    "latitude": 42.33393,
    "longitude": -7.865951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "oru-027",
    "city": "ourense",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Ourense, España",
    "latitude": 42.332299,
    "longitude": -7.870964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "oru-028",
    "city": "ourense",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Ourense, España",
    "latitude": 42.34338,
    "longitude": -7.856414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "oru-029",
    "city": "ourense",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Ourense, España",
    "latitude": 42.333749,
    "longitude": -7.86357,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "oru-030",
    "city": "ourense",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Ourense, España",
    "latitude": 42.328736,
    "longitude": -7.868684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "oru-031",
    "city": "ourense",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Ourense, España",
    "latitude": 42.343286,
    "longitude": -7.861907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "oru-032",
    "city": "ourense",
    "title": "Muralla 1",
    "address": "Muralla 1, Ourense, España",
    "latitude": 42.33613,
    "longitude": -7.86387,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "oru-033",
    "city": "ourense",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Ourense, España",
    "latitude": 42.331016,
    "longitude": -7.861341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "oru-034",
    "city": "ourense",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Ourense, España",
    "latitude": 42.337793,
    "longitude": -7.866425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "oru-035",
    "city": "ourense",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Ourense, España",
    "latitude": 42.33583,
    "longitude": -7.867922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "oru-036",
    "city": "ourense",
    "title": "Museo local 1",
    "address": "Museo local 1, Ourense, España",
    "latitude": 42.338359,
    "longitude": -7.855686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "oru-037",
    "city": "ourense",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Ourense, España",
    "latitude": 42.333275,
    "longitude": -7.866081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "oru-038",
    "city": "ourense",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Ourense, España",
    "latitude": 42.331778,
    "longitude": -7.87076,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "oru-039",
    "city": "ourense",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Ourense, España",
    "latitude": 42.344014,
    "longitude": -7.856921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "oru-040",
    "city": "ourense",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Ourense, España",
    "latitude": 42.333619,
    "longitude": -7.863669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pon-001",
    "city": "pontevedra",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Pontevedra, España",
    "latitude": 42.4383,
    "longitude": -8.648495,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pon-002",
    "city": "pontevedra",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Pontevedra, España",
    "latitude": 42.435264,
    "longitude": -8.650163,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pon-003",
    "city": "pontevedra",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Pontevedra, España",
    "latitude": 42.432145,
    "longitude": -8.642232,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pon-004",
    "city": "pontevedra",
    "title": "Catedral 1",
    "address": "Catedral 1, Pontevedra, España",
    "latitude": 42.433305,
    "longitude": -8.649661,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pon-005",
    "city": "pontevedra",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Pontevedra, España",
    "latitude": 42.431637,
    "longitude": -8.65494,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pon-006",
    "city": "pontevedra",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Pontevedra, España",
    "latitude": 42.439568,
    "longitude": -8.640081,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pon-007",
    "city": "pontevedra",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Pontevedra, España",
    "latitude": 42.432139,
    "longitude": -8.647457,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pon-008",
    "city": "pontevedra",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Pontevedra, España",
    "latitude": 42.42686,
    "longitude": -8.654724,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pon-009",
    "city": "pontevedra",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Pontevedra, España",
    "latitude": 42.441719,
    "longitude": -8.644233,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pon-010",
    "city": "pontevedra",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Pontevedra, España",
    "latitude": 42.434343,
    "longitude": -8.647016,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pon-011",
    "city": "pontevedra",
    "title": "Castillo 1",
    "address": "Castillo 1, Pontevedra, España",
    "latitude": 42.427076,
    "longitude": -8.648242,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pon-012",
    "city": "pontevedra",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Pontevedra, España",
    "latitude": 42.437567,
    "longitude": -8.649187,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pon-013",
    "city": "pontevedra",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Pontevedra, España",
    "latitude": 42.434784,
    "longitude": -8.650877,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pon-014",
    "city": "pontevedra",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Pontevedra, España",
    "latitude": 42.433558,
    "longitude": -8.641243,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pon-015",
    "city": "pontevedra",
    "title": "Estación central 1",
    "address": "Estación central 1, Pontevedra, España",
    "latitude": 42.432613,
    "longitude": -8.649874,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pon-016",
    "city": "pontevedra",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Pontevedra, España",
    "latitude": 42.430923,
    "longitude": -8.655092,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pon-017",
    "city": "pontevedra",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Pontevedra, España",
    "latitude": 42.440557,
    "longitude": -8.640198,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pon-018",
    "city": "pontevedra",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Pontevedra, España",
    "latitude": 42.431926,
    "longitude": -8.647564,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pon-019",
    "city": "pontevedra",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Pontevedra, España",
    "latitude": 42.426708,
    "longitude": -8.653824,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pon-020",
    "city": "pontevedra",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Pontevedra, España",
    "latitude": 42.441602,
    "longitude": -8.645075,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pon-021",
    "city": "pontevedra",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Pontevedra, España",
    "latitude": 42.434236,
    "longitude": -8.647499,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pon-022",
    "city": "pontevedra",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Pontevedra, España",
    "latitude": 42.427976,
    "longitude": -8.646826,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pon-023",
    "city": "pontevedra",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Pontevedra, España",
    "latitude": 42.436725,
    "longitude": -8.64987,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pon-024",
    "city": "pontevedra",
    "title": "Basílica 1",
    "address": "Basílica 1, Pontevedra, España",
    "latitude": 42.434301,
    "longitude": -8.651501,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pon-025",
    "city": "pontevedra",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Pontevedra, España",
    "latitude": 42.434974,
    "longitude": -8.64042,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pon-026",
    "city": "pontevedra",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Pontevedra, España",
    "latitude": 42.43193,
    "longitude": -8.650051,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pon-027",
    "city": "pontevedra",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Pontevedra, España",
    "latitude": 42.430299,
    "longitude": -8.655064,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pon-028",
    "city": "pontevedra",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Pontevedra, España",
    "latitude": 42.44138,
    "longitude": -8.640514,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pon-029",
    "city": "pontevedra",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Pontevedra, España",
    "latitude": 42.431749,
    "longitude": -8.64767,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pon-030",
    "city": "pontevedra",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Pontevedra, España",
    "latitude": 42.426736,
    "longitude": -8.652784,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pon-031",
    "city": "pontevedra",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Pontevedra, España",
    "latitude": 42.441286,
    "longitude": -8.646007,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pon-032",
    "city": "pontevedra",
    "title": "Muralla 1",
    "address": "Muralla 1, Pontevedra, España",
    "latitude": 42.43413,
    "longitude": -8.64797,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "pon-033",
    "city": "pontevedra",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Pontevedra, España",
    "latitude": 42.429016,
    "longitude": -8.645441,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "pon-034",
    "city": "pontevedra",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Pontevedra, España",
    "latitude": 42.435793,
    "longitude": -8.650525,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "pon-035",
    "city": "pontevedra",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Pontevedra, España",
    "latitude": 42.43383,
    "longitude": -8.652022,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "pon-036",
    "city": "pontevedra",
    "title": "Museo local 1",
    "address": "Museo local 1, Pontevedra, España",
    "latitude": 42.436359,
    "longitude": -8.639786,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "pon-037",
    "city": "pontevedra",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Pontevedra, España",
    "latitude": 42.431275,
    "longitude": -8.650181,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "pon-038",
    "city": "pontevedra",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Pontevedra, España",
    "latitude": 42.429778,
    "longitude": -8.65486,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "pon-039",
    "city": "pontevedra",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Pontevedra, España",
    "latitude": 42.442014,
    "longitude": -8.641021,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "pon-040",
    "city": "pontevedra",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Pontevedra, España",
    "latitude": 42.431619,
    "longitude": -8.647769,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lpa-001",
    "city": "las-palmas",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.128,
    "longitude": -15.436795,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lpa-002",
    "city": "las-palmas",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.124964,
    "longitude": -15.438463,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lpa-003",
    "city": "las-palmas",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.121845,
    "longitude": -15.430532,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lpa-004",
    "city": "las-palmas",
    "title": "Catedral 1",
    "address": "Catedral 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.123005,
    "longitude": -15.437961,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lpa-005",
    "city": "las-palmas",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.121337,
    "longitude": -15.44324,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lpa-006",
    "city": "las-palmas",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.129268,
    "longitude": -15.428381,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lpa-007",
    "city": "las-palmas",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.121839,
    "longitude": -15.435757,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lpa-008",
    "city": "las-palmas",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.11656,
    "longitude": -15.443024,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lpa-009",
    "city": "las-palmas",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.131419,
    "longitude": -15.432533,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lpa-010",
    "city": "las-palmas",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.124043,
    "longitude": -15.435316,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lpa-011",
    "city": "las-palmas",
    "title": "Castillo 1",
    "address": "Castillo 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.116776,
    "longitude": -15.436542,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lpa-012",
    "city": "las-palmas",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.127267,
    "longitude": -15.437487,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lpa-013",
    "city": "las-palmas",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.124484,
    "longitude": -15.439177,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lpa-014",
    "city": "las-palmas",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.123258,
    "longitude": -15.429543,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lpa-015",
    "city": "las-palmas",
    "title": "Estación central 1",
    "address": "Estación central 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.122313,
    "longitude": -15.438174,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lpa-016",
    "city": "las-palmas",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.120623,
    "longitude": -15.443392,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lpa-017",
    "city": "las-palmas",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.130257,
    "longitude": -15.428498,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lpa-018",
    "city": "las-palmas",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.121626,
    "longitude": -15.435864,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lpa-019",
    "city": "las-palmas",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.116408,
    "longitude": -15.442124,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lpa-020",
    "city": "las-palmas",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.131302,
    "longitude": -15.433375,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lpa-021",
    "city": "las-palmas",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.123936,
    "longitude": -15.435799,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lpa-022",
    "city": "las-palmas",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.117676,
    "longitude": -15.435126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lpa-023",
    "city": "las-palmas",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.126425,
    "longitude": -15.43817,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lpa-024",
    "city": "las-palmas",
    "title": "Basílica 1",
    "address": "Basílica 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.124001,
    "longitude": -15.439801,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lpa-025",
    "city": "las-palmas",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.124674,
    "longitude": -15.42872,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lpa-026",
    "city": "las-palmas",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.12163,
    "longitude": -15.438351,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lpa-027",
    "city": "las-palmas",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.119999,
    "longitude": -15.443364,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lpa-028",
    "city": "las-palmas",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.13108,
    "longitude": -15.428814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lpa-029",
    "city": "las-palmas",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.121449,
    "longitude": -15.43597,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lpa-030",
    "city": "las-palmas",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.116436,
    "longitude": -15.441084,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lpa-031",
    "city": "las-palmas",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.130986,
    "longitude": -15.434307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lpa-032",
    "city": "las-palmas",
    "title": "Muralla 1",
    "address": "Muralla 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.12383,
    "longitude": -15.43627,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lpa-033",
    "city": "las-palmas",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.118716,
    "longitude": -15.433741,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lpa-034",
    "city": "las-palmas",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.125493,
    "longitude": -15.438825,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lpa-035",
    "city": "las-palmas",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.12353,
    "longitude": -15.440322,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lpa-036",
    "city": "las-palmas",
    "title": "Museo local 1",
    "address": "Museo local 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.126059,
    "longitude": -15.428086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lpa-037",
    "city": "las-palmas",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.120975,
    "longitude": -15.438481,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lpa-038",
    "city": "las-palmas",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.119478,
    "longitude": -15.44316,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lpa-039",
    "city": "las-palmas",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.131714,
    "longitude": -15.429321,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lpa-040",
    "city": "las-palmas",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Las Palmas de Gran Canaria, España",
    "latitude": 28.121319,
    "longitude": -15.436069,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tfn-001",
    "city": "santa-cruz",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.4681,
    "longitude": -16.252295,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tfn-002",
    "city": "santa-cruz",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Santa Cruz de Tenerife, España",
    "latitude": 28.465064,
    "longitude": -16.253963,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tfn-003",
    "city": "santa-cruz",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461945,
    "longitude": -16.246032,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tfn-004",
    "city": "santa-cruz",
    "title": "Catedral 1",
    "address": "Catedral 1, Santa Cruz de Tenerife, España",
    "latitude": 28.463105,
    "longitude": -16.253461,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tfn-005",
    "city": "santa-cruz",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461437,
    "longitude": -16.25874,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tfn-006",
    "city": "santa-cruz",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.469368,
    "longitude": -16.243881,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tfn-007",
    "city": "santa-cruz",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461939,
    "longitude": -16.251257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tfn-008",
    "city": "santa-cruz",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Santa Cruz de Tenerife, España",
    "latitude": 28.45666,
    "longitude": -16.258524,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tfn-009",
    "city": "santa-cruz",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Santa Cruz de Tenerife, España",
    "latitude": 28.471519,
    "longitude": -16.248033,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tfn-010",
    "city": "santa-cruz",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Santa Cruz de Tenerife, España",
    "latitude": 28.464143,
    "longitude": -16.250816,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tfn-011",
    "city": "santa-cruz",
    "title": "Castillo 1",
    "address": "Castillo 1, Santa Cruz de Tenerife, España",
    "latitude": 28.456876,
    "longitude": -16.252042,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tfn-012",
    "city": "santa-cruz",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Santa Cruz de Tenerife, España",
    "latitude": 28.467367,
    "longitude": -16.252987,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tfn-013",
    "city": "santa-cruz",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Santa Cruz de Tenerife, España",
    "latitude": 28.464584,
    "longitude": -16.254677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tfn-014",
    "city": "santa-cruz",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.463358,
    "longitude": -16.245043,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tfn-015",
    "city": "santa-cruz",
    "title": "Estación central 1",
    "address": "Estación central 1, Santa Cruz de Tenerife, España",
    "latitude": 28.462413,
    "longitude": -16.253674,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tfn-016",
    "city": "santa-cruz",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Santa Cruz de Tenerife, España",
    "latitude": 28.460723,
    "longitude": -16.258892,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tfn-017",
    "city": "santa-cruz",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Santa Cruz de Tenerife, España",
    "latitude": 28.470357,
    "longitude": -16.243998,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tfn-018",
    "city": "santa-cruz",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461726,
    "longitude": -16.251364,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tfn-019",
    "city": "santa-cruz",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Santa Cruz de Tenerife, España",
    "latitude": 28.456508,
    "longitude": -16.257624,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tfn-020",
    "city": "santa-cruz",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Santa Cruz de Tenerife, España",
    "latitude": 28.471402,
    "longitude": -16.248875,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tfn-021",
    "city": "santa-cruz",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Santa Cruz de Tenerife, España",
    "latitude": 28.464036,
    "longitude": -16.251299,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tfn-022",
    "city": "santa-cruz",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Santa Cruz de Tenerife, España",
    "latitude": 28.457776,
    "longitude": -16.250626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tfn-023",
    "city": "santa-cruz",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Santa Cruz de Tenerife, España",
    "latitude": 28.466525,
    "longitude": -16.25367,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tfn-024",
    "city": "santa-cruz",
    "title": "Basílica 1",
    "address": "Basílica 1, Santa Cruz de Tenerife, España",
    "latitude": 28.464101,
    "longitude": -16.255301,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tfn-025",
    "city": "santa-cruz",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Santa Cruz de Tenerife, España",
    "latitude": 28.464774,
    "longitude": -16.24422,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tfn-026",
    "city": "santa-cruz",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.46173,
    "longitude": -16.253851,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tfn-027",
    "city": "santa-cruz",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Santa Cruz de Tenerife, España",
    "latitude": 28.460099,
    "longitude": -16.258864,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tfn-028",
    "city": "santa-cruz",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.47118,
    "longitude": -16.244314,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tfn-029",
    "city": "santa-cruz",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461549,
    "longitude": -16.25147,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tfn-030",
    "city": "santa-cruz",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Santa Cruz de Tenerife, España",
    "latitude": 28.456536,
    "longitude": -16.256584,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tfn-031",
    "city": "santa-cruz",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.471086,
    "longitude": -16.249807,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tfn-032",
    "city": "santa-cruz",
    "title": "Muralla 1",
    "address": "Muralla 1, Santa Cruz de Tenerife, España",
    "latitude": 28.46393,
    "longitude": -16.25177,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "tfn-033",
    "city": "santa-cruz",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Santa Cruz de Tenerife, España",
    "latitude": 28.458816,
    "longitude": -16.249241,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "tfn-034",
    "city": "santa-cruz",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Santa Cruz de Tenerife, España",
    "latitude": 28.465593,
    "longitude": -16.254325,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "tfn-035",
    "city": "santa-cruz",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.46363,
    "longitude": -16.255822,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "tfn-036",
    "city": "santa-cruz",
    "title": "Museo local 1",
    "address": "Museo local 1, Santa Cruz de Tenerife, España",
    "latitude": 28.466159,
    "longitude": -16.243586,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "tfn-037",
    "city": "santa-cruz",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461075,
    "longitude": -16.253981,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "tfn-038",
    "city": "santa-cruz",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Santa Cruz de Tenerife, España",
    "latitude": 28.459578,
    "longitude": -16.25866,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "tfn-039",
    "city": "santa-cruz",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Santa Cruz de Tenerife, España",
    "latitude": 28.471814,
    "longitude": -16.244821,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "tfn-040",
    "city": "santa-cruz",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Santa Cruz de Tenerife, España",
    "latitude": 28.461419,
    "longitude": -16.251569,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ibz-001",
    "city": "ibiza",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Ibiza, España",
    "latitude": 38.9112,
    "longitude": 1.420105,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ibz-002",
    "city": "ibiza",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Ibiza, España",
    "latitude": 38.908164,
    "longitude": 1.418437,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ibz-003",
    "city": "ibiza",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Ibiza, España",
    "latitude": 38.905045,
    "longitude": 1.426368,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ibz-004",
    "city": "ibiza",
    "title": "Catedral 1",
    "address": "Catedral 1, Ibiza, España",
    "latitude": 38.906205,
    "longitude": 1.418939,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ibz-005",
    "city": "ibiza",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Ibiza, España",
    "latitude": 38.904537,
    "longitude": 1.41366,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ibz-006",
    "city": "ibiza",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Ibiza, España",
    "latitude": 38.912468,
    "longitude": 1.428519,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ibz-007",
    "city": "ibiza",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Ibiza, España",
    "latitude": 38.905039,
    "longitude": 1.421143,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ibz-008",
    "city": "ibiza",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Ibiza, España",
    "latitude": 38.89976,
    "longitude": 1.413876,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ibz-009",
    "city": "ibiza",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Ibiza, España",
    "latitude": 38.914619,
    "longitude": 1.424367,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ibz-010",
    "city": "ibiza",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Ibiza, España",
    "latitude": 38.907243,
    "longitude": 1.421584,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ibz-011",
    "city": "ibiza",
    "title": "Castillo 1",
    "address": "Castillo 1, Ibiza, España",
    "latitude": 38.899976,
    "longitude": 1.420358,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ibz-012",
    "city": "ibiza",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Ibiza, España",
    "latitude": 38.910467,
    "longitude": 1.419413,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ibz-013",
    "city": "ibiza",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Ibiza, España",
    "latitude": 38.907684,
    "longitude": 1.417723,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ibz-014",
    "city": "ibiza",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Ibiza, España",
    "latitude": 38.906458,
    "longitude": 1.427357,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ibz-015",
    "city": "ibiza",
    "title": "Estación central 1",
    "address": "Estación central 1, Ibiza, España",
    "latitude": 38.905513,
    "longitude": 1.418726,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ibz-016",
    "city": "ibiza",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Ibiza, España",
    "latitude": 38.903823,
    "longitude": 1.413508,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ibz-017",
    "city": "ibiza",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Ibiza, España",
    "latitude": 38.913457,
    "longitude": 1.428402,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ibz-018",
    "city": "ibiza",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Ibiza, España",
    "latitude": 38.904826,
    "longitude": 1.421036,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ibz-019",
    "city": "ibiza",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Ibiza, España",
    "latitude": 38.899608,
    "longitude": 1.414776,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ibz-020",
    "city": "ibiza",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Ibiza, España",
    "latitude": 38.914502,
    "longitude": 1.423525,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ibz-021",
    "city": "ibiza",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Ibiza, España",
    "latitude": 38.907136,
    "longitude": 1.421101,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ibz-022",
    "city": "ibiza",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Ibiza, España",
    "latitude": 38.900876,
    "longitude": 1.421774,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ibz-023",
    "city": "ibiza",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Ibiza, España",
    "latitude": 38.909625,
    "longitude": 1.41873,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ibz-024",
    "city": "ibiza",
    "title": "Basílica 1",
    "address": "Basílica 1, Ibiza, España",
    "latitude": 38.907201,
    "longitude": 1.417099,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ibz-025",
    "city": "ibiza",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Ibiza, España",
    "latitude": 38.907874,
    "longitude": 1.42818,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ibz-026",
    "city": "ibiza",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Ibiza, España",
    "latitude": 38.90483,
    "longitude": 1.418549,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ibz-027",
    "city": "ibiza",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Ibiza, España",
    "latitude": 38.903199,
    "longitude": 1.413536,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ibz-028",
    "city": "ibiza",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Ibiza, España",
    "latitude": 38.91428,
    "longitude": 1.428086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ibz-029",
    "city": "ibiza",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Ibiza, España",
    "latitude": 38.904649,
    "longitude": 1.42093,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ibz-030",
    "city": "ibiza",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Ibiza, España",
    "latitude": 38.899636,
    "longitude": 1.415816,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ibz-031",
    "city": "ibiza",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Ibiza, España",
    "latitude": 38.914186,
    "longitude": 1.422593,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ibz-032",
    "city": "ibiza",
    "title": "Muralla 1",
    "address": "Muralla 1, Ibiza, España",
    "latitude": 38.90703,
    "longitude": 1.42063,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ibz-033",
    "city": "ibiza",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Ibiza, España",
    "latitude": 38.901916,
    "longitude": 1.423159,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ibz-034",
    "city": "ibiza",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Ibiza, España",
    "latitude": 38.908693,
    "longitude": 1.418075,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ibz-035",
    "city": "ibiza",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Ibiza, España",
    "latitude": 38.90673,
    "longitude": 1.416578,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ibz-036",
    "city": "ibiza",
    "title": "Museo local 1",
    "address": "Museo local 1, Ibiza, España",
    "latitude": 38.909259,
    "longitude": 1.428814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ibz-037",
    "city": "ibiza",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Ibiza, España",
    "latitude": 38.904175,
    "longitude": 1.418419,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ibz-038",
    "city": "ibiza",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Ibiza, España",
    "latitude": 38.902678,
    "longitude": 1.41374,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ibz-039",
    "city": "ibiza",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Ibiza, España",
    "latitude": 38.914914,
    "longitude": 1.427579,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ibz-040",
    "city": "ibiza",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Ibiza, España",
    "latitude": 38.904519,
    "longitude": 1.420831,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mah-001",
    "city": "menorca",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Mahón, España",
    "latitude": 39.893,
    "longitude": 4.265305,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mah-002",
    "city": "menorca",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Mahón, España",
    "latitude": 39.889964,
    "longitude": 4.263637,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mah-003",
    "city": "menorca",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Mahón, España",
    "latitude": 39.886845,
    "longitude": 4.271568,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mah-004",
    "city": "menorca",
    "title": "Catedral 1",
    "address": "Catedral 1, Mahón, España",
    "latitude": 39.888005,
    "longitude": 4.264139,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mah-005",
    "city": "menorca",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Mahón, España",
    "latitude": 39.886337,
    "longitude": 4.25886,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mah-006",
    "city": "menorca",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Mahón, España",
    "latitude": 39.894268,
    "longitude": 4.273719,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mah-007",
    "city": "menorca",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Mahón, España",
    "latitude": 39.886839,
    "longitude": 4.266343,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mah-008",
    "city": "menorca",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Mahón, España",
    "latitude": 39.88156,
    "longitude": 4.259076,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mah-009",
    "city": "menorca",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Mahón, España",
    "latitude": 39.896419,
    "longitude": 4.269567,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mah-010",
    "city": "menorca",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Mahón, España",
    "latitude": 39.889043,
    "longitude": 4.266784,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mah-011",
    "city": "menorca",
    "title": "Castillo 1",
    "address": "Castillo 1, Mahón, España",
    "latitude": 39.881776,
    "longitude": 4.265558,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mah-012",
    "city": "menorca",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Mahón, España",
    "latitude": 39.892267,
    "longitude": 4.264613,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mah-013",
    "city": "menorca",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Mahón, España",
    "latitude": 39.889484,
    "longitude": 4.262923,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mah-014",
    "city": "menorca",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Mahón, España",
    "latitude": 39.888258,
    "longitude": 4.272557,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mah-015",
    "city": "menorca",
    "title": "Estación central 1",
    "address": "Estación central 1, Mahón, España",
    "latitude": 39.887313,
    "longitude": 4.263926,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mah-016",
    "city": "menorca",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Mahón, España",
    "latitude": 39.885623,
    "longitude": 4.258708,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mah-017",
    "city": "menorca",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Mahón, España",
    "latitude": 39.895257,
    "longitude": 4.273602,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mah-018",
    "city": "menorca",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Mahón, España",
    "latitude": 39.886626,
    "longitude": 4.266236,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mah-019",
    "city": "menorca",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Mahón, España",
    "latitude": 39.881408,
    "longitude": 4.259976,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mah-020",
    "city": "menorca",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Mahón, España",
    "latitude": 39.896302,
    "longitude": 4.268725,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mah-021",
    "city": "menorca",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Mahón, España",
    "latitude": 39.888936,
    "longitude": 4.266301,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mah-022",
    "city": "menorca",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Mahón, España",
    "latitude": 39.882676,
    "longitude": 4.266974,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mah-023",
    "city": "menorca",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Mahón, España",
    "latitude": 39.891425,
    "longitude": 4.26393,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mah-024",
    "city": "menorca",
    "title": "Basílica 1",
    "address": "Basílica 1, Mahón, España",
    "latitude": 39.889001,
    "longitude": 4.262299,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mah-025",
    "city": "menorca",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Mahón, España",
    "latitude": 39.889674,
    "longitude": 4.27338,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mah-026",
    "city": "menorca",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Mahón, España",
    "latitude": 39.88663,
    "longitude": 4.263749,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mah-027",
    "city": "menorca",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Mahón, España",
    "latitude": 39.884999,
    "longitude": 4.258736,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mah-028",
    "city": "menorca",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Mahón, España",
    "latitude": 39.89608,
    "longitude": 4.273286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mah-029",
    "city": "menorca",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Mahón, España",
    "latitude": 39.886449,
    "longitude": 4.26613,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mah-030",
    "city": "menorca",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Mahón, España",
    "latitude": 39.881436,
    "longitude": 4.261016,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mah-031",
    "city": "menorca",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Mahón, España",
    "latitude": 39.895986,
    "longitude": 4.267793,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mah-032",
    "city": "menorca",
    "title": "Muralla 1",
    "address": "Muralla 1, Mahón, España",
    "latitude": 39.88883,
    "longitude": 4.26583,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mah-033",
    "city": "menorca",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Mahón, España",
    "latitude": 39.883716,
    "longitude": 4.268359,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mah-034",
    "city": "menorca",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Mahón, España",
    "latitude": 39.890493,
    "longitude": 4.263275,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mah-035",
    "city": "menorca",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Mahón, España",
    "latitude": 39.88853,
    "longitude": 4.261778,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mah-036",
    "city": "menorca",
    "title": "Museo local 1",
    "address": "Museo local 1, Mahón, España",
    "latitude": 39.891059,
    "longitude": 4.274014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mah-037",
    "city": "menorca",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Mahón, España",
    "latitude": 39.885975,
    "longitude": 4.263619,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mah-038",
    "city": "menorca",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Mahón, España",
    "latitude": 39.884478,
    "longitude": 4.25894,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mah-039",
    "city": "menorca",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Mahón, España",
    "latitude": 39.896714,
    "longitude": 4.272779,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mah-040",
    "city": "menorca",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Mahón, España",
    "latitude": 39.886319,
    "longitude": 4.266031,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trg-001",
    "city": "tarragona",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Tarragona, España",
    "latitude": 41.1234,
    "longitude": 1.244005,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trg-002",
    "city": "tarragona",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Tarragona, España",
    "latitude": 41.120364,
    "longitude": 1.242337,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trg-003",
    "city": "tarragona",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Tarragona, España",
    "latitude": 41.117245,
    "longitude": 1.250268,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trg-004",
    "city": "tarragona",
    "title": "Catedral 1",
    "address": "Catedral 1, Tarragona, España",
    "latitude": 41.118405,
    "longitude": 1.242839,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trg-005",
    "city": "tarragona",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Tarragona, España",
    "latitude": 41.116737,
    "longitude": 1.23756,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trg-006",
    "city": "tarragona",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Tarragona, España",
    "latitude": 41.124668,
    "longitude": 1.252419,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trg-007",
    "city": "tarragona",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Tarragona, España",
    "latitude": 41.117239,
    "longitude": 1.245043,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trg-008",
    "city": "tarragona",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Tarragona, España",
    "latitude": 41.11196,
    "longitude": 1.237776,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trg-009",
    "city": "tarragona",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Tarragona, España",
    "latitude": 41.126819,
    "longitude": 1.248267,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trg-010",
    "city": "tarragona",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Tarragona, España",
    "latitude": 41.119443,
    "longitude": 1.245484,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trg-011",
    "city": "tarragona",
    "title": "Castillo 1",
    "address": "Castillo 1, Tarragona, España",
    "latitude": 41.112176,
    "longitude": 1.244258,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trg-012",
    "city": "tarragona",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Tarragona, España",
    "latitude": 41.122667,
    "longitude": 1.243313,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trg-013",
    "city": "tarragona",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Tarragona, España",
    "latitude": 41.119884,
    "longitude": 1.241623,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trg-014",
    "city": "tarragona",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Tarragona, España",
    "latitude": 41.118658,
    "longitude": 1.251257,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trg-015",
    "city": "tarragona",
    "title": "Estación central 1",
    "address": "Estación central 1, Tarragona, España",
    "latitude": 41.117713,
    "longitude": 1.242626,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trg-016",
    "city": "tarragona",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Tarragona, España",
    "latitude": 41.116023,
    "longitude": 1.237408,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trg-017",
    "city": "tarragona",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Tarragona, España",
    "latitude": 41.125657,
    "longitude": 1.252302,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trg-018",
    "city": "tarragona",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Tarragona, España",
    "latitude": 41.117026,
    "longitude": 1.244936,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trg-019",
    "city": "tarragona",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Tarragona, España",
    "latitude": 41.111808,
    "longitude": 1.238676,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trg-020",
    "city": "tarragona",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Tarragona, España",
    "latitude": 41.126702,
    "longitude": 1.247425,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trg-021",
    "city": "tarragona",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Tarragona, España",
    "latitude": 41.119336,
    "longitude": 1.245001,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trg-022",
    "city": "tarragona",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Tarragona, España",
    "latitude": 41.113076,
    "longitude": 1.245674,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trg-023",
    "city": "tarragona",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Tarragona, España",
    "latitude": 41.121825,
    "longitude": 1.24263,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trg-024",
    "city": "tarragona",
    "title": "Basílica 1",
    "address": "Basílica 1, Tarragona, España",
    "latitude": 41.119401,
    "longitude": 1.240999,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trg-025",
    "city": "tarragona",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Tarragona, España",
    "latitude": 41.120074,
    "longitude": 1.25208,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trg-026",
    "city": "tarragona",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Tarragona, España",
    "latitude": 41.11703,
    "longitude": 1.242449,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trg-027",
    "city": "tarragona",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Tarragona, España",
    "latitude": 41.115399,
    "longitude": 1.237436,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trg-028",
    "city": "tarragona",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Tarragona, España",
    "latitude": 41.12648,
    "longitude": 1.251986,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trg-029",
    "city": "tarragona",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Tarragona, España",
    "latitude": 41.116849,
    "longitude": 1.24483,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trg-030",
    "city": "tarragona",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Tarragona, España",
    "latitude": 41.111836,
    "longitude": 1.239716,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trg-031",
    "city": "tarragona",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Tarragona, España",
    "latitude": 41.126386,
    "longitude": 1.246493,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trg-032",
    "city": "tarragona",
    "title": "Muralla 1",
    "address": "Muralla 1, Tarragona, España",
    "latitude": 41.11923,
    "longitude": 1.24453,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trg-033",
    "city": "tarragona",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Tarragona, España",
    "latitude": 41.114116,
    "longitude": 1.247059,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trg-034",
    "city": "tarragona",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Tarragona, España",
    "latitude": 41.120893,
    "longitude": 1.241975,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trg-035",
    "city": "tarragona",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Tarragona, España",
    "latitude": 41.11893,
    "longitude": 1.240478,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trg-036",
    "city": "tarragona",
    "title": "Museo local 1",
    "address": "Museo local 1, Tarragona, España",
    "latitude": 41.121459,
    "longitude": 1.252714,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trg-037",
    "city": "tarragona",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Tarragona, España",
    "latitude": 41.116375,
    "longitude": 1.242319,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trg-038",
    "city": "tarragona",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Tarragona, España",
    "latitude": 41.114878,
    "longitude": 1.23764,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trg-039",
    "city": "tarragona",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Tarragona, España",
    "latitude": 41.127114,
    "longitude": 1.251479,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trg-040",
    "city": "tarragona",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Tarragona, España",
    "latitude": 41.116719,
    "longitude": 1.244731,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gro-001",
    "city": "girona",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Girona, España",
    "latitude": 41.9839,
    "longitude": 2.820905,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gro-002",
    "city": "girona",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Girona, España",
    "latitude": 41.980864,
    "longitude": 2.819237,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gro-003",
    "city": "girona",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Girona, España",
    "latitude": 41.977745,
    "longitude": 2.827168,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gro-004",
    "city": "girona",
    "title": "Catedral 1",
    "address": "Catedral 1, Girona, España",
    "latitude": 41.978905,
    "longitude": 2.819739,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gro-005",
    "city": "girona",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Girona, España",
    "latitude": 41.977237,
    "longitude": 2.81446,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gro-006",
    "city": "girona",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Girona, España",
    "latitude": 41.985168,
    "longitude": 2.829319,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gro-007",
    "city": "girona",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Girona, España",
    "latitude": 41.977739,
    "longitude": 2.821943,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gro-008",
    "city": "girona",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Girona, España",
    "latitude": 41.97246,
    "longitude": 2.814676,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gro-009",
    "city": "girona",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Girona, España",
    "latitude": 41.987319,
    "longitude": 2.825167,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gro-010",
    "city": "girona",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Girona, España",
    "latitude": 41.979943,
    "longitude": 2.822384,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gro-011",
    "city": "girona",
    "title": "Castillo 1",
    "address": "Castillo 1, Girona, España",
    "latitude": 41.972676,
    "longitude": 2.821158,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gro-012",
    "city": "girona",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Girona, España",
    "latitude": 41.983167,
    "longitude": 2.820213,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gro-013",
    "city": "girona",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Girona, España",
    "latitude": 41.980384,
    "longitude": 2.818523,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gro-014",
    "city": "girona",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Girona, España",
    "latitude": 41.979158,
    "longitude": 2.828157,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gro-015",
    "city": "girona",
    "title": "Estación central 1",
    "address": "Estación central 1, Girona, España",
    "latitude": 41.978213,
    "longitude": 2.819526,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gro-016",
    "city": "girona",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Girona, España",
    "latitude": 41.976523,
    "longitude": 2.814308,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gro-017",
    "city": "girona",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Girona, España",
    "latitude": 41.986157,
    "longitude": 2.829202,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gro-018",
    "city": "girona",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Girona, España",
    "latitude": 41.977526,
    "longitude": 2.821836,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gro-019",
    "city": "girona",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Girona, España",
    "latitude": 41.972308,
    "longitude": 2.815576,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gro-020",
    "city": "girona",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Girona, España",
    "latitude": 41.987202,
    "longitude": 2.824325,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gro-021",
    "city": "girona",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Girona, España",
    "latitude": 41.979836,
    "longitude": 2.821901,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gro-022",
    "city": "girona",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Girona, España",
    "latitude": 41.973576,
    "longitude": 2.822574,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gro-023",
    "city": "girona",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Girona, España",
    "latitude": 41.982325,
    "longitude": 2.81953,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gro-024",
    "city": "girona",
    "title": "Basílica 1",
    "address": "Basílica 1, Girona, España",
    "latitude": 41.979901,
    "longitude": 2.817899,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gro-025",
    "city": "girona",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Girona, España",
    "latitude": 41.980574,
    "longitude": 2.82898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gro-026",
    "city": "girona",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Girona, España",
    "latitude": 41.97753,
    "longitude": 2.819349,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gro-027",
    "city": "girona",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Girona, España",
    "latitude": 41.975899,
    "longitude": 2.814336,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gro-028",
    "city": "girona",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Girona, España",
    "latitude": 41.98698,
    "longitude": 2.828886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gro-029",
    "city": "girona",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Girona, España",
    "latitude": 41.977349,
    "longitude": 2.82173,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gro-030",
    "city": "girona",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Girona, España",
    "latitude": 41.972336,
    "longitude": 2.816616,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gro-031",
    "city": "girona",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Girona, España",
    "latitude": 41.986886,
    "longitude": 2.823393,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gro-032",
    "city": "girona",
    "title": "Muralla 1",
    "address": "Muralla 1, Girona, España",
    "latitude": 41.97973,
    "longitude": 2.82143,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "gro-033",
    "city": "girona",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Girona, España",
    "latitude": 41.974616,
    "longitude": 2.823959,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "gro-034",
    "city": "girona",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Girona, España",
    "latitude": 41.981393,
    "longitude": 2.818875,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "gro-035",
    "city": "girona",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Girona, España",
    "latitude": 41.97943,
    "longitude": 2.817378,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "gro-036",
    "city": "girona",
    "title": "Museo local 1",
    "address": "Museo local 1, Girona, España",
    "latitude": 41.981959,
    "longitude": 2.829614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "gro-037",
    "city": "girona",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Girona, España",
    "latitude": 41.976875,
    "longitude": 2.819219,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "gro-038",
    "city": "girona",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Girona, España",
    "latitude": 41.975378,
    "longitude": 2.81454,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "gro-039",
    "city": "girona",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Girona, España",
    "latitude": 41.987614,
    "longitude": 2.828379,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "gro-040",
    "city": "girona",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Girona, España",
    "latitude": 41.977219,
    "longitude": 2.821631,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ild-001",
    "city": "lleida",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Lleida, España",
    "latitude": 41.6221,
    "longitude": 0.619505,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ild-002",
    "city": "lleida",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Lleida, España",
    "latitude": 41.619064,
    "longitude": 0.617837,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ild-003",
    "city": "lleida",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Lleida, España",
    "latitude": 41.615945,
    "longitude": 0.625768,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ild-004",
    "city": "lleida",
    "title": "Catedral 1",
    "address": "Catedral 1, Lleida, España",
    "latitude": 41.617105,
    "longitude": 0.618339,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ild-005",
    "city": "lleida",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Lleida, España",
    "latitude": 41.615437,
    "longitude": 0.61306,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ild-006",
    "city": "lleida",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Lleida, España",
    "latitude": 41.623368,
    "longitude": 0.627919,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ild-007",
    "city": "lleida",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Lleida, España",
    "latitude": 41.615939,
    "longitude": 0.620543,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ild-008",
    "city": "lleida",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Lleida, España",
    "latitude": 41.61066,
    "longitude": 0.613276,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ild-009",
    "city": "lleida",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Lleida, España",
    "latitude": 41.625519,
    "longitude": 0.623767,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ild-010",
    "city": "lleida",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Lleida, España",
    "latitude": 41.618143,
    "longitude": 0.620984,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ild-011",
    "city": "lleida",
    "title": "Castillo 1",
    "address": "Castillo 1, Lleida, España",
    "latitude": 41.610876,
    "longitude": 0.619758,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ild-012",
    "city": "lleida",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Lleida, España",
    "latitude": 41.621367,
    "longitude": 0.618813,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ild-013",
    "city": "lleida",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Lleida, España",
    "latitude": 41.618584,
    "longitude": 0.617123,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ild-014",
    "city": "lleida",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Lleida, España",
    "latitude": 41.617358,
    "longitude": 0.626757,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ild-015",
    "city": "lleida",
    "title": "Estación central 1",
    "address": "Estación central 1, Lleida, España",
    "latitude": 41.616413,
    "longitude": 0.618126,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ild-016",
    "city": "lleida",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Lleida, España",
    "latitude": 41.614723,
    "longitude": 0.612908,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ild-017",
    "city": "lleida",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Lleida, España",
    "latitude": 41.624357,
    "longitude": 0.627802,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ild-018",
    "city": "lleida",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Lleida, España",
    "latitude": 41.615726,
    "longitude": 0.620436,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ild-019",
    "city": "lleida",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Lleida, España",
    "latitude": 41.610508,
    "longitude": 0.614176,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ild-020",
    "city": "lleida",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Lleida, España",
    "latitude": 41.625402,
    "longitude": 0.622925,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ild-021",
    "city": "lleida",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Lleida, España",
    "latitude": 41.618036,
    "longitude": 0.620501,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ild-022",
    "city": "lleida",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Lleida, España",
    "latitude": 41.611776,
    "longitude": 0.621174,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ild-023",
    "city": "lleida",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Lleida, España",
    "latitude": 41.620525,
    "longitude": 0.61813,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ild-024",
    "city": "lleida",
    "title": "Basílica 1",
    "address": "Basílica 1, Lleida, España",
    "latitude": 41.618101,
    "longitude": 0.616499,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ild-025",
    "city": "lleida",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Lleida, España",
    "latitude": 41.618774,
    "longitude": 0.62758,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ild-026",
    "city": "lleida",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Lleida, España",
    "latitude": 41.61573,
    "longitude": 0.617949,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ild-027",
    "city": "lleida",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Lleida, España",
    "latitude": 41.614099,
    "longitude": 0.612936,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ild-028",
    "city": "lleida",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Lleida, España",
    "latitude": 41.62518,
    "longitude": 0.627486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ild-029",
    "city": "lleida",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Lleida, España",
    "latitude": 41.615549,
    "longitude": 0.62033,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ild-030",
    "city": "lleida",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Lleida, España",
    "latitude": 41.610536,
    "longitude": 0.615216,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ild-031",
    "city": "lleida",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Lleida, España",
    "latitude": 41.625086,
    "longitude": 0.621993,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ild-032",
    "city": "lleida",
    "title": "Muralla 1",
    "address": "Muralla 1, Lleida, España",
    "latitude": 41.61793,
    "longitude": 0.62003,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "ild-033",
    "city": "lleida",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Lleida, España",
    "latitude": 41.612816,
    "longitude": 0.622559,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "ild-034",
    "city": "lleida",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Lleida, España",
    "latitude": 41.619593,
    "longitude": 0.617475,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "ild-035",
    "city": "lleida",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Lleida, España",
    "latitude": 41.61763,
    "longitude": 0.615978,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "ild-036",
    "city": "lleida",
    "title": "Museo local 1",
    "address": "Museo local 1, Lleida, España",
    "latitude": 41.620159,
    "longitude": 0.628214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "ild-037",
    "city": "lleida",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Lleida, España",
    "latitude": 41.615075,
    "longitude": 0.617819,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "ild-038",
    "city": "lleida",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Lleida, España",
    "latitude": 41.613578,
    "longitude": 0.61314,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "ild-039",
    "city": "lleida",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Lleida, España",
    "latitude": 41.625814,
    "longitude": 0.626979,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "ild-040",
    "city": "lleida",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Lleida, España",
    "latitude": 41.615419,
    "longitude": 0.620231,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "reu-001",
    "city": "reus",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Reus, España",
    "latitude": 41.1593,
    "longitude": 1.108205,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "reu-002",
    "city": "reus",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Reus, España",
    "latitude": 41.156264,
    "longitude": 1.106537,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "reu-003",
    "city": "reus",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Reus, España",
    "latitude": 41.153145,
    "longitude": 1.114468,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "reu-004",
    "city": "reus",
    "title": "Catedral 1",
    "address": "Catedral 1, Reus, España",
    "latitude": 41.154305,
    "longitude": 1.107039,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "reu-005",
    "city": "reus",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Reus, España",
    "latitude": 41.152637,
    "longitude": 1.10176,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "reu-006",
    "city": "reus",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Reus, España",
    "latitude": 41.160568,
    "longitude": 1.116619,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "reu-007",
    "city": "reus",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Reus, España",
    "latitude": 41.153139,
    "longitude": 1.109243,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "reu-008",
    "city": "reus",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Reus, España",
    "latitude": 41.14786,
    "longitude": 1.101976,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "reu-009",
    "city": "reus",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Reus, España",
    "latitude": 41.162719,
    "longitude": 1.112467,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "reu-010",
    "city": "reus",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Reus, España",
    "latitude": 41.155343,
    "longitude": 1.109684,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "reu-011",
    "city": "reus",
    "title": "Castillo 1",
    "address": "Castillo 1, Reus, España",
    "latitude": 41.148076,
    "longitude": 1.108458,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "reu-012",
    "city": "reus",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Reus, España",
    "latitude": 41.158567,
    "longitude": 1.107513,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "reu-013",
    "city": "reus",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Reus, España",
    "latitude": 41.155784,
    "longitude": 1.105823,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "reu-014",
    "city": "reus",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Reus, España",
    "latitude": 41.154558,
    "longitude": 1.115457,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "reu-015",
    "city": "reus",
    "title": "Estación central 1",
    "address": "Estación central 1, Reus, España",
    "latitude": 41.153613,
    "longitude": 1.106826,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "reu-016",
    "city": "reus",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Reus, España",
    "latitude": 41.151923,
    "longitude": 1.101608,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "reu-017",
    "city": "reus",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Reus, España",
    "latitude": 41.161557,
    "longitude": 1.116502,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "reu-018",
    "city": "reus",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Reus, España",
    "latitude": 41.152926,
    "longitude": 1.109136,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "reu-019",
    "city": "reus",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Reus, España",
    "latitude": 41.147708,
    "longitude": 1.102876,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "reu-020",
    "city": "reus",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Reus, España",
    "latitude": 41.162602,
    "longitude": 1.111625,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "reu-021",
    "city": "reus",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Reus, España",
    "latitude": 41.155236,
    "longitude": 1.109201,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "reu-022",
    "city": "reus",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Reus, España",
    "latitude": 41.148976,
    "longitude": 1.109874,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "reu-023",
    "city": "reus",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Reus, España",
    "latitude": 41.157725,
    "longitude": 1.10683,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "reu-024",
    "city": "reus",
    "title": "Basílica 1",
    "address": "Basílica 1, Reus, España",
    "latitude": 41.155301,
    "longitude": 1.105199,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "reu-025",
    "city": "reus",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Reus, España",
    "latitude": 41.155974,
    "longitude": 1.11628,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "reu-026",
    "city": "reus",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Reus, España",
    "latitude": 41.15293,
    "longitude": 1.106649,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "reu-027",
    "city": "reus",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Reus, España",
    "latitude": 41.151299,
    "longitude": 1.101636,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "reu-028",
    "city": "reus",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Reus, España",
    "latitude": 41.16238,
    "longitude": 1.116186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "reu-029",
    "city": "reus",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Reus, España",
    "latitude": 41.152749,
    "longitude": 1.10903,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "reu-030",
    "city": "reus",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Reus, España",
    "latitude": 41.147736,
    "longitude": 1.103916,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "reu-031",
    "city": "reus",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Reus, España",
    "latitude": 41.162286,
    "longitude": 1.110693,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "reu-032",
    "city": "reus",
    "title": "Muralla 1",
    "address": "Muralla 1, Reus, España",
    "latitude": 41.15513,
    "longitude": 1.10873,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "reu-033",
    "city": "reus",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Reus, España",
    "latitude": 41.150016,
    "longitude": 1.111259,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "reu-034",
    "city": "reus",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Reus, España",
    "latitude": 41.156793,
    "longitude": 1.106175,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "reu-035",
    "city": "reus",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Reus, España",
    "latitude": 41.15483,
    "longitude": 1.104678,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "reu-036",
    "city": "reus",
    "title": "Museo local 1",
    "address": "Museo local 1, Reus, España",
    "latitude": 41.157359,
    "longitude": 1.116914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "reu-037",
    "city": "reus",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Reus, España",
    "latitude": 41.152275,
    "longitude": 1.106519,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "reu-038",
    "city": "reus",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Reus, España",
    "latitude": 41.150778,
    "longitude": 1.10184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "reu-039",
    "city": "reus",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Reus, España",
    "latitude": 41.163014,
    "longitude": 1.115679,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "reu-040",
    "city": "reus",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Reus, España",
    "latitude": 41.152619,
    "longitude": 1.108931,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "csn-001",
    "city": "castellon",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Castellón de la Plana, España",
    "latitude": 39.9909,
    "longitude": -0.051795,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "csn-002",
    "city": "castellon",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Castellón de la Plana, España",
    "latitude": 39.987864,
    "longitude": -0.053463,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "csn-003",
    "city": "castellon",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Castellón de la Plana, España",
    "latitude": 39.984745,
    "longitude": -0.045532,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "csn-004",
    "city": "castellon",
    "title": "Catedral 1",
    "address": "Catedral 1, Castellón de la Plana, España",
    "latitude": 39.985905,
    "longitude": -0.052961,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "csn-005",
    "city": "castellon",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Castellón de la Plana, España",
    "latitude": 39.984237,
    "longitude": -0.05824,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "csn-006",
    "city": "castellon",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Castellón de la Plana, España",
    "latitude": 39.992168,
    "longitude": -0.043381,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "csn-007",
    "city": "castellon",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Castellón de la Plana, España",
    "latitude": 39.984739,
    "longitude": -0.050757,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "csn-008",
    "city": "castellon",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Castellón de la Plana, España",
    "latitude": 39.97946,
    "longitude": -0.058024,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "csn-009",
    "city": "castellon",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Castellón de la Plana, España",
    "latitude": 39.994319,
    "longitude": -0.047533,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "csn-010",
    "city": "castellon",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Castellón de la Plana, España",
    "latitude": 39.986943,
    "longitude": -0.050316,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "csn-011",
    "city": "castellon",
    "title": "Castillo 1",
    "address": "Castillo 1, Castellón de la Plana, España",
    "latitude": 39.979676,
    "longitude": -0.051542,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "csn-012",
    "city": "castellon",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Castellón de la Plana, España",
    "latitude": 39.990167,
    "longitude": -0.052487,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "csn-013",
    "city": "castellon",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Castellón de la Plana, España",
    "latitude": 39.987384,
    "longitude": -0.054177,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "csn-014",
    "city": "castellon",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Castellón de la Plana, España",
    "latitude": 39.986158,
    "longitude": -0.044543,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "csn-015",
    "city": "castellon",
    "title": "Estación central 1",
    "address": "Estación central 1, Castellón de la Plana, España",
    "latitude": 39.985213,
    "longitude": -0.053174,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "csn-016",
    "city": "castellon",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Castellón de la Plana, España",
    "latitude": 39.983523,
    "longitude": -0.058392,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "csn-017",
    "city": "castellon",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Castellón de la Plana, España",
    "latitude": 39.993157,
    "longitude": -0.043498,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "csn-018",
    "city": "castellon",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Castellón de la Plana, España",
    "latitude": 39.984526,
    "longitude": -0.050864,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "csn-019",
    "city": "castellon",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Castellón de la Plana, España",
    "latitude": 39.979308,
    "longitude": -0.057124,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "csn-020",
    "city": "castellon",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Castellón de la Plana, España",
    "latitude": 39.994202,
    "longitude": -0.048375,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "csn-021",
    "city": "castellon",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Castellón de la Plana, España",
    "latitude": 39.986836,
    "longitude": -0.050799,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "csn-022",
    "city": "castellon",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Castellón de la Plana, España",
    "latitude": 39.980576,
    "longitude": -0.050126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "csn-023",
    "city": "castellon",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Castellón de la Plana, España",
    "latitude": 39.989325,
    "longitude": -0.05317,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "csn-024",
    "city": "castellon",
    "title": "Basílica 1",
    "address": "Basílica 1, Castellón de la Plana, España",
    "latitude": 39.986901,
    "longitude": -0.054801,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "csn-025",
    "city": "castellon",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Castellón de la Plana, España",
    "latitude": 39.987574,
    "longitude": -0.04372,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "csn-026",
    "city": "castellon",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Castellón de la Plana, España",
    "latitude": 39.98453,
    "longitude": -0.053351,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "csn-027",
    "city": "castellon",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Castellón de la Plana, España",
    "latitude": 39.982899,
    "longitude": -0.058364,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "csn-028",
    "city": "castellon",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Castellón de la Plana, España",
    "latitude": 39.99398,
    "longitude": -0.043814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "csn-029",
    "city": "castellon",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Castellón de la Plana, España",
    "latitude": 39.984349,
    "longitude": -0.05097,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "csn-030",
    "city": "castellon",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Castellón de la Plana, España",
    "latitude": 39.979336,
    "longitude": -0.056084,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "csn-031",
    "city": "castellon",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Castellón de la Plana, España",
    "latitude": 39.993886,
    "longitude": -0.049307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "csn-032",
    "city": "castellon",
    "title": "Muralla 1",
    "address": "Muralla 1, Castellón de la Plana, España",
    "latitude": 39.98673,
    "longitude": -0.05127,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "csn-033",
    "city": "castellon",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Castellón de la Plana, España",
    "latitude": 39.981616,
    "longitude": -0.048741,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "csn-034",
    "city": "castellon",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Castellón de la Plana, España",
    "latitude": 39.988393,
    "longitude": -0.053825,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "csn-035",
    "city": "castellon",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Castellón de la Plana, España",
    "latitude": 39.98643,
    "longitude": -0.055322,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "csn-036",
    "city": "castellon",
    "title": "Museo local 1",
    "address": "Museo local 1, Castellón de la Plana, España",
    "latitude": 39.988959,
    "longitude": -0.043086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "csn-037",
    "city": "castellon",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Castellón de la Plana, España",
    "latitude": 39.983875,
    "longitude": -0.053481,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "csn-038",
    "city": "castellon",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Castellón de la Plana, España",
    "latitude": 39.982378,
    "longitude": -0.05816,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "csn-039",
    "city": "castellon",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Castellón de la Plana, España",
    "latitude": 39.994614,
    "longitude": -0.044321,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "csn-040",
    "city": "castellon",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Castellón de la Plana, España",
    "latitude": 39.984219,
    "longitude": -0.051069,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "elh-001",
    "city": "elche",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Elche, España",
    "latitude": 38.2744,
    "longitude": -0.713095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "elh-002",
    "city": "elche",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Elche, España",
    "latitude": 38.271364,
    "longitude": -0.714763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "elh-003",
    "city": "elche",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Elche, España",
    "latitude": 38.268245,
    "longitude": -0.706832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "elh-004",
    "city": "elche",
    "title": "Catedral 1",
    "address": "Catedral 1, Elche, España",
    "latitude": 38.269405,
    "longitude": -0.714261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "elh-005",
    "city": "elche",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Elche, España",
    "latitude": 38.267737,
    "longitude": -0.71954,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "elh-006",
    "city": "elche",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Elche, España",
    "latitude": 38.275668,
    "longitude": -0.704681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "elh-007",
    "city": "elche",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Elche, España",
    "latitude": 38.268239,
    "longitude": -0.712057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "elh-008",
    "city": "elche",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Elche, España",
    "latitude": 38.26296,
    "longitude": -0.719324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "elh-009",
    "city": "elche",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Elche, España",
    "latitude": 38.277819,
    "longitude": -0.708833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "elh-010",
    "city": "elche",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Elche, España",
    "latitude": 38.270443,
    "longitude": -0.711616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "elh-011",
    "city": "elche",
    "title": "Castillo 1",
    "address": "Castillo 1, Elche, España",
    "latitude": 38.263176,
    "longitude": -0.712842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "elh-012",
    "city": "elche",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Elche, España",
    "latitude": 38.273667,
    "longitude": -0.713787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "elh-013",
    "city": "elche",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Elche, España",
    "latitude": 38.270884,
    "longitude": -0.715477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "elh-014",
    "city": "elche",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Elche, España",
    "latitude": 38.269658,
    "longitude": -0.705843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "elh-015",
    "city": "elche",
    "title": "Estación central 1",
    "address": "Estación central 1, Elche, España",
    "latitude": 38.268713,
    "longitude": -0.714474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "elh-016",
    "city": "elche",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Elche, España",
    "latitude": 38.267023,
    "longitude": -0.719692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "elh-017",
    "city": "elche",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Elche, España",
    "latitude": 38.276657,
    "longitude": -0.704798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "elh-018",
    "city": "elche",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Elche, España",
    "latitude": 38.268026,
    "longitude": -0.712164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "elh-019",
    "city": "elche",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Elche, España",
    "latitude": 38.262808,
    "longitude": -0.718424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "elh-020",
    "city": "elche",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Elche, España",
    "latitude": 38.277702,
    "longitude": -0.709675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "elh-021",
    "city": "elche",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Elche, España",
    "latitude": 38.270336,
    "longitude": -0.712099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "elh-022",
    "city": "elche",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Elche, España",
    "latitude": 38.264076,
    "longitude": -0.711426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "elh-023",
    "city": "elche",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Elche, España",
    "latitude": 38.272825,
    "longitude": -0.71447,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "elh-024",
    "city": "elche",
    "title": "Basílica 1",
    "address": "Basílica 1, Elche, España",
    "latitude": 38.270401,
    "longitude": -0.716101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "elh-025",
    "city": "elche",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Elche, España",
    "latitude": 38.271074,
    "longitude": -0.70502,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "elh-026",
    "city": "elche",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Elche, España",
    "latitude": 38.26803,
    "longitude": -0.714651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "elh-027",
    "city": "elche",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Elche, España",
    "latitude": 38.266399,
    "longitude": -0.719664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "elh-028",
    "city": "elche",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Elche, España",
    "latitude": 38.27748,
    "longitude": -0.705114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "elh-029",
    "city": "elche",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Elche, España",
    "latitude": 38.267849,
    "longitude": -0.71227,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "elh-030",
    "city": "elche",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Elche, España",
    "latitude": 38.262836,
    "longitude": -0.717384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "elh-031",
    "city": "elche",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Elche, España",
    "latitude": 38.277386,
    "longitude": -0.710607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "elh-032",
    "city": "elche",
    "title": "Muralla 1",
    "address": "Muralla 1, Elche, España",
    "latitude": 38.27023,
    "longitude": -0.71257,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "elh-033",
    "city": "elche",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Elche, España",
    "latitude": 38.265116,
    "longitude": -0.710041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "elh-034",
    "city": "elche",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Elche, España",
    "latitude": 38.271893,
    "longitude": -0.715125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "elh-035",
    "city": "elche",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Elche, España",
    "latitude": 38.26993,
    "longitude": -0.716622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "elh-036",
    "city": "elche",
    "title": "Museo local 1",
    "address": "Museo local 1, Elche, España",
    "latitude": 38.272459,
    "longitude": -0.704386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "elh-037",
    "city": "elche",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Elche, España",
    "latitude": 38.267375,
    "longitude": -0.714781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "elh-038",
    "city": "elche",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Elche, España",
    "latitude": 38.265878,
    "longitude": -0.71946,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "elh-039",
    "city": "elche",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Elche, España",
    "latitude": 38.278114,
    "longitude": -0.705621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "elh-040",
    "city": "elche",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Elche, España",
    "latitude": 38.267719,
    "longitude": -0.712369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdr-001",
    "city": "benidorm",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Benidorm, España",
    "latitude": 38.5456,
    "longitude": -0.122995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdr-002",
    "city": "benidorm",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Benidorm, España",
    "latitude": 38.542564,
    "longitude": -0.124663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdr-003",
    "city": "benidorm",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Benidorm, España",
    "latitude": 38.539445,
    "longitude": -0.116732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdr-004",
    "city": "benidorm",
    "title": "Catedral 1",
    "address": "Catedral 1, Benidorm, España",
    "latitude": 38.540605,
    "longitude": -0.124161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdr-005",
    "city": "benidorm",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Benidorm, España",
    "latitude": 38.538937,
    "longitude": -0.12944,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdr-006",
    "city": "benidorm",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Benidorm, España",
    "latitude": 38.546868,
    "longitude": -0.114581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdr-007",
    "city": "benidorm",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Benidorm, España",
    "latitude": 38.539439,
    "longitude": -0.121957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdr-008",
    "city": "benidorm",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Benidorm, España",
    "latitude": 38.53416,
    "longitude": -0.129224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdr-009",
    "city": "benidorm",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Benidorm, España",
    "latitude": 38.549019,
    "longitude": -0.118733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdr-010",
    "city": "benidorm",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Benidorm, España",
    "latitude": 38.541643,
    "longitude": -0.121516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdr-011",
    "city": "benidorm",
    "title": "Castillo 1",
    "address": "Castillo 1, Benidorm, España",
    "latitude": 38.534376,
    "longitude": -0.122742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdr-012",
    "city": "benidorm",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Benidorm, España",
    "latitude": 38.544867,
    "longitude": -0.123687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdr-013",
    "city": "benidorm",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Benidorm, España",
    "latitude": 38.542084,
    "longitude": -0.125377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdr-014",
    "city": "benidorm",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Benidorm, España",
    "latitude": 38.540858,
    "longitude": -0.115743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdr-015",
    "city": "benidorm",
    "title": "Estación central 1",
    "address": "Estación central 1, Benidorm, España",
    "latitude": 38.539913,
    "longitude": -0.124374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdr-016",
    "city": "benidorm",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Benidorm, España",
    "latitude": 38.538223,
    "longitude": -0.129592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdr-017",
    "city": "benidorm",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Benidorm, España",
    "latitude": 38.547857,
    "longitude": -0.114698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdr-018",
    "city": "benidorm",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Benidorm, España",
    "latitude": 38.539226,
    "longitude": -0.122064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdr-019",
    "city": "benidorm",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Benidorm, España",
    "latitude": 38.534008,
    "longitude": -0.128324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdr-020",
    "city": "benidorm",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Benidorm, España",
    "latitude": 38.548902,
    "longitude": -0.119575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdr-021",
    "city": "benidorm",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Benidorm, España",
    "latitude": 38.541536,
    "longitude": -0.121999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdr-022",
    "city": "benidorm",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Benidorm, España",
    "latitude": 38.535276,
    "longitude": -0.121326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdr-023",
    "city": "benidorm",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Benidorm, España",
    "latitude": 38.544025,
    "longitude": -0.12437,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdr-024",
    "city": "benidorm",
    "title": "Basílica 1",
    "address": "Basílica 1, Benidorm, España",
    "latitude": 38.541601,
    "longitude": -0.126001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdr-025",
    "city": "benidorm",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Benidorm, España",
    "latitude": 38.542274,
    "longitude": -0.11492,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdr-026",
    "city": "benidorm",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Benidorm, España",
    "latitude": 38.53923,
    "longitude": -0.124551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdr-027",
    "city": "benidorm",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Benidorm, España",
    "latitude": 38.537599,
    "longitude": -0.129564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdr-028",
    "city": "benidorm",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Benidorm, España",
    "latitude": 38.54868,
    "longitude": -0.115014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdr-029",
    "city": "benidorm",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Benidorm, España",
    "latitude": 38.539049,
    "longitude": -0.12217,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdr-030",
    "city": "benidorm",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Benidorm, España",
    "latitude": 38.534036,
    "longitude": -0.127284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdr-031",
    "city": "benidorm",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Benidorm, España",
    "latitude": 38.548586,
    "longitude": -0.120507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdr-032",
    "city": "benidorm",
    "title": "Muralla 1",
    "address": "Muralla 1, Benidorm, España",
    "latitude": 38.54143,
    "longitude": -0.12247,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "bdr-033",
    "city": "benidorm",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Benidorm, España",
    "latitude": 38.536316,
    "longitude": -0.119941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "bdr-034",
    "city": "benidorm",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Benidorm, España",
    "latitude": 38.543093,
    "longitude": -0.125025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "bdr-035",
    "city": "benidorm",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Benidorm, España",
    "latitude": 38.54113,
    "longitude": -0.126522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "bdr-036",
    "city": "benidorm",
    "title": "Museo local 1",
    "address": "Museo local 1, Benidorm, España",
    "latitude": 38.543659,
    "longitude": -0.114286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "bdr-037",
    "city": "benidorm",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Benidorm, España",
    "latitude": 38.538575,
    "longitude": -0.124681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "bdr-038",
    "city": "benidorm",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Benidorm, España",
    "latitude": 38.537078,
    "longitude": -0.12936,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "bdr-039",
    "city": "benidorm",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Benidorm, España",
    "latitude": 38.549314,
    "longitude": -0.115521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "bdr-040",
    "city": "benidorm",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Benidorm, España",
    "latitude": 38.538919,
    "longitude": -0.122269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrb-001",
    "city": "marbella",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Marbella, España",
    "latitude": 36.5146,
    "longitude": -4.882895,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrb-002",
    "city": "marbella",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Marbella, España",
    "latitude": 36.511564,
    "longitude": -4.884563,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrb-003",
    "city": "marbella",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Marbella, España",
    "latitude": 36.508445,
    "longitude": -4.876632,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrb-004",
    "city": "marbella",
    "title": "Catedral 1",
    "address": "Catedral 1, Marbella, España",
    "latitude": 36.509605,
    "longitude": -4.884061,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrb-005",
    "city": "marbella",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Marbella, España",
    "latitude": 36.507937,
    "longitude": -4.88934,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrb-006",
    "city": "marbella",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Marbella, España",
    "latitude": 36.515868,
    "longitude": -4.874481,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrb-007",
    "city": "marbella",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Marbella, España",
    "latitude": 36.508439,
    "longitude": -4.881857,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrb-008",
    "city": "marbella",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Marbella, España",
    "latitude": 36.50316,
    "longitude": -4.889124,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrb-009",
    "city": "marbella",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Marbella, España",
    "latitude": 36.518019,
    "longitude": -4.878633,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrb-010",
    "city": "marbella",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Marbella, España",
    "latitude": 36.510643,
    "longitude": -4.881416,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrb-011",
    "city": "marbella",
    "title": "Castillo 1",
    "address": "Castillo 1, Marbella, España",
    "latitude": 36.503376,
    "longitude": -4.882642,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrb-012",
    "city": "marbella",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Marbella, España",
    "latitude": 36.513867,
    "longitude": -4.883587,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrb-013",
    "city": "marbella",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Marbella, España",
    "latitude": 36.511084,
    "longitude": -4.885277,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrb-014",
    "city": "marbella",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Marbella, España",
    "latitude": 36.509858,
    "longitude": -4.875643,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrb-015",
    "city": "marbella",
    "title": "Estación central 1",
    "address": "Estación central 1, Marbella, España",
    "latitude": 36.508913,
    "longitude": -4.884274,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrb-016",
    "city": "marbella",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Marbella, España",
    "latitude": 36.507223,
    "longitude": -4.889492,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrb-017",
    "city": "marbella",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Marbella, España",
    "latitude": 36.516857,
    "longitude": -4.874598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrb-018",
    "city": "marbella",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Marbella, España",
    "latitude": 36.508226,
    "longitude": -4.881964,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrb-019",
    "city": "marbella",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Marbella, España",
    "latitude": 36.503008,
    "longitude": -4.888224,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrb-020",
    "city": "marbella",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Marbella, España",
    "latitude": 36.517902,
    "longitude": -4.879475,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrb-021",
    "city": "marbella",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Marbella, España",
    "latitude": 36.510536,
    "longitude": -4.881899,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrb-022",
    "city": "marbella",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Marbella, España",
    "latitude": 36.504276,
    "longitude": -4.881226,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrb-023",
    "city": "marbella",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Marbella, España",
    "latitude": 36.513025,
    "longitude": -4.88427,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrb-024",
    "city": "marbella",
    "title": "Basílica 1",
    "address": "Basílica 1, Marbella, España",
    "latitude": 36.510601,
    "longitude": -4.885901,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrb-025",
    "city": "marbella",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Marbella, España",
    "latitude": 36.511274,
    "longitude": -4.87482,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrb-026",
    "city": "marbella",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Marbella, España",
    "latitude": 36.50823,
    "longitude": -4.884451,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrb-027",
    "city": "marbella",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Marbella, España",
    "latitude": 36.506599,
    "longitude": -4.889464,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrb-028",
    "city": "marbella",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Marbella, España",
    "latitude": 36.51768,
    "longitude": -4.874914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrb-029",
    "city": "marbella",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Marbella, España",
    "latitude": 36.508049,
    "longitude": -4.88207,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrb-030",
    "city": "marbella",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Marbella, España",
    "latitude": 36.503036,
    "longitude": -4.887184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrb-031",
    "city": "marbella",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Marbella, España",
    "latitude": 36.517586,
    "longitude": -4.880407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrb-032",
    "city": "marbella",
    "title": "Muralla 1",
    "address": "Muralla 1, Marbella, España",
    "latitude": 36.51043,
    "longitude": -4.88237,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrb-033",
    "city": "marbella",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Marbella, España",
    "latitude": 36.505316,
    "longitude": -4.879841,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrb-034",
    "city": "marbella",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Marbella, España",
    "latitude": 36.512093,
    "longitude": -4.884925,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrb-035",
    "city": "marbella",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Marbella, España",
    "latitude": 36.51013,
    "longitude": -4.886422,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrb-036",
    "city": "marbella",
    "title": "Museo local 1",
    "address": "Museo local 1, Marbella, España",
    "latitude": 36.512659,
    "longitude": -4.874186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrb-037",
    "city": "marbella",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Marbella, España",
    "latitude": 36.507575,
    "longitude": -4.884581,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrb-038",
    "city": "marbella",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Marbella, España",
    "latitude": 36.506078,
    "longitude": -4.88926,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrb-039",
    "city": "marbella",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Marbella, España",
    "latitude": 36.518314,
    "longitude": -4.875421,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrb-040",
    "city": "marbella",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Marbella, España",
    "latitude": 36.507919,
    "longitude": -4.882169,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "snl-001",
    "city": "sanlucar",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.7826,
    "longitude": -6.353095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "snl-002",
    "city": "sanlucar",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Sanlúcar de Barrameda, España",
    "latitude": 36.779564,
    "longitude": -6.354763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "snl-003",
    "city": "sanlucar",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Sanlúcar de Barrameda, España",
    "latitude": 36.776445,
    "longitude": -6.346832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "snl-004",
    "city": "sanlucar",
    "title": "Catedral 1",
    "address": "Catedral 1, Sanlúcar de Barrameda, España",
    "latitude": 36.777605,
    "longitude": -6.354261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "snl-005",
    "city": "sanlucar",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Sanlúcar de Barrameda, España",
    "latitude": 36.775937,
    "longitude": -6.35954,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "snl-006",
    "city": "sanlucar",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.783868,
    "longitude": -6.344681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "snl-007",
    "city": "sanlucar",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Sanlúcar de Barrameda, España",
    "latitude": 36.776439,
    "longitude": -6.352057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "snl-008",
    "city": "sanlucar",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Sanlúcar de Barrameda, España",
    "latitude": 36.77116,
    "longitude": -6.359324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "snl-009",
    "city": "sanlucar",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Sanlúcar de Barrameda, España",
    "latitude": 36.786019,
    "longitude": -6.348833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "snl-010",
    "city": "sanlucar",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Sanlúcar de Barrameda, España",
    "latitude": 36.778643,
    "longitude": -6.351616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "snl-011",
    "city": "sanlucar",
    "title": "Castillo 1",
    "address": "Castillo 1, Sanlúcar de Barrameda, España",
    "latitude": 36.771376,
    "longitude": -6.352842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "snl-012",
    "city": "sanlucar",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Sanlúcar de Barrameda, España",
    "latitude": 36.781867,
    "longitude": -6.353787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "snl-013",
    "city": "sanlucar",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Sanlúcar de Barrameda, España",
    "latitude": 36.779084,
    "longitude": -6.355477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "snl-014",
    "city": "sanlucar",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.777858,
    "longitude": -6.345843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "snl-015",
    "city": "sanlucar",
    "title": "Estación central 1",
    "address": "Estación central 1, Sanlúcar de Barrameda, España",
    "latitude": 36.776913,
    "longitude": -6.354474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "snl-016",
    "city": "sanlucar",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Sanlúcar de Barrameda, España",
    "latitude": 36.775223,
    "longitude": -6.359692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "snl-017",
    "city": "sanlucar",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Sanlúcar de Barrameda, España",
    "latitude": 36.784857,
    "longitude": -6.344798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "snl-018",
    "city": "sanlucar",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Sanlúcar de Barrameda, España",
    "latitude": 36.776226,
    "longitude": -6.352164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "snl-019",
    "city": "sanlucar",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Sanlúcar de Barrameda, España",
    "latitude": 36.771008,
    "longitude": -6.358424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "snl-020",
    "city": "sanlucar",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Sanlúcar de Barrameda, España",
    "latitude": 36.785902,
    "longitude": -6.349675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "snl-021",
    "city": "sanlucar",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Sanlúcar de Barrameda, España",
    "latitude": 36.778536,
    "longitude": -6.352099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "snl-022",
    "city": "sanlucar",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Sanlúcar de Barrameda, España",
    "latitude": 36.772276,
    "longitude": -6.351426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "snl-023",
    "city": "sanlucar",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Sanlúcar de Barrameda, España",
    "latitude": 36.781025,
    "longitude": -6.35447,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "snl-024",
    "city": "sanlucar",
    "title": "Basílica 1",
    "address": "Basílica 1, Sanlúcar de Barrameda, España",
    "latitude": 36.778601,
    "longitude": -6.356101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "snl-025",
    "city": "sanlucar",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Sanlúcar de Barrameda, España",
    "latitude": 36.779274,
    "longitude": -6.34502,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "snl-026",
    "city": "sanlucar",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.77623,
    "longitude": -6.354651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "snl-027",
    "city": "sanlucar",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Sanlúcar de Barrameda, España",
    "latitude": 36.774599,
    "longitude": -6.359664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "snl-028",
    "city": "sanlucar",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.78568,
    "longitude": -6.345114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "snl-029",
    "city": "sanlucar",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Sanlúcar de Barrameda, España",
    "latitude": 36.776049,
    "longitude": -6.35227,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "snl-030",
    "city": "sanlucar",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Sanlúcar de Barrameda, España",
    "latitude": 36.771036,
    "longitude": -6.357384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "snl-031",
    "city": "sanlucar",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.785586,
    "longitude": -6.350607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "snl-032",
    "city": "sanlucar",
    "title": "Muralla 1",
    "address": "Muralla 1, Sanlúcar de Barrameda, España",
    "latitude": 36.77843,
    "longitude": -6.35257,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "snl-033",
    "city": "sanlucar",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Sanlúcar de Barrameda, España",
    "latitude": 36.773316,
    "longitude": -6.350041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "snl-034",
    "city": "sanlucar",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Sanlúcar de Barrameda, España",
    "latitude": 36.780093,
    "longitude": -6.355125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "snl-035",
    "city": "sanlucar",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.77813,
    "longitude": -6.356622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "snl-036",
    "city": "sanlucar",
    "title": "Museo local 1",
    "address": "Museo local 1, Sanlúcar de Barrameda, España",
    "latitude": 36.780659,
    "longitude": -6.344386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "snl-037",
    "city": "sanlucar",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Sanlúcar de Barrameda, España",
    "latitude": 36.775575,
    "longitude": -6.354781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "snl-038",
    "city": "sanlucar",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Sanlúcar de Barrameda, España",
    "latitude": 36.774078,
    "longitude": -6.35946,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "snl-039",
    "city": "sanlucar",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Sanlúcar de Barrameda, España",
    "latitude": 36.786314,
    "longitude": -6.345621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "snl-040",
    "city": "sanlucar",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Sanlúcar de Barrameda, España",
    "latitude": 36.775919,
    "longitude": -6.352369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rqt-001",
    "city": "roquetas",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Roquetas de Mar, España",
    "latitude": 36.7687,
    "longitude": -2.615195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rqt-002",
    "city": "roquetas",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Roquetas de Mar, España",
    "latitude": 36.765664,
    "longitude": -2.616863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rqt-003",
    "city": "roquetas",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Roquetas de Mar, España",
    "latitude": 36.762545,
    "longitude": -2.608932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rqt-004",
    "city": "roquetas",
    "title": "Catedral 1",
    "address": "Catedral 1, Roquetas de Mar, España",
    "latitude": 36.763705,
    "longitude": -2.616361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rqt-005",
    "city": "roquetas",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Roquetas de Mar, España",
    "latitude": 36.762037,
    "longitude": -2.62164,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rqt-006",
    "city": "roquetas",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Roquetas de Mar, España",
    "latitude": 36.769968,
    "longitude": -2.606781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rqt-007",
    "city": "roquetas",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Roquetas de Mar, España",
    "latitude": 36.762539,
    "longitude": -2.614157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rqt-008",
    "city": "roquetas",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Roquetas de Mar, España",
    "latitude": 36.75726,
    "longitude": -2.621424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rqt-009",
    "city": "roquetas",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Roquetas de Mar, España",
    "latitude": 36.772119,
    "longitude": -2.610933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rqt-010",
    "city": "roquetas",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Roquetas de Mar, España",
    "latitude": 36.764743,
    "longitude": -2.613716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rqt-011",
    "city": "roquetas",
    "title": "Castillo 1",
    "address": "Castillo 1, Roquetas de Mar, España",
    "latitude": 36.757476,
    "longitude": -2.614942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rqt-012",
    "city": "roquetas",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Roquetas de Mar, España",
    "latitude": 36.767967,
    "longitude": -2.615887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rqt-013",
    "city": "roquetas",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Roquetas de Mar, España",
    "latitude": 36.765184,
    "longitude": -2.617577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rqt-014",
    "city": "roquetas",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Roquetas de Mar, España",
    "latitude": 36.763958,
    "longitude": -2.607943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rqt-015",
    "city": "roquetas",
    "title": "Estación central 1",
    "address": "Estación central 1, Roquetas de Mar, España",
    "latitude": 36.763013,
    "longitude": -2.616574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rqt-016",
    "city": "roquetas",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Roquetas de Mar, España",
    "latitude": 36.761323,
    "longitude": -2.621792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rqt-017",
    "city": "roquetas",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Roquetas de Mar, España",
    "latitude": 36.770957,
    "longitude": -2.606898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rqt-018",
    "city": "roquetas",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Roquetas de Mar, España",
    "latitude": 36.762326,
    "longitude": -2.614264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rqt-019",
    "city": "roquetas",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Roquetas de Mar, España",
    "latitude": 36.757108,
    "longitude": -2.620524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rqt-020",
    "city": "roquetas",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Roquetas de Mar, España",
    "latitude": 36.772002,
    "longitude": -2.611775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rqt-021",
    "city": "roquetas",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Roquetas de Mar, España",
    "latitude": 36.764636,
    "longitude": -2.614199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rqt-022",
    "city": "roquetas",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Roquetas de Mar, España",
    "latitude": 36.758376,
    "longitude": -2.613526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rqt-023",
    "city": "roquetas",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Roquetas de Mar, España",
    "latitude": 36.767125,
    "longitude": -2.61657,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rqt-024",
    "city": "roquetas",
    "title": "Basílica 1",
    "address": "Basílica 1, Roquetas de Mar, España",
    "latitude": 36.764701,
    "longitude": -2.618201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rqt-025",
    "city": "roquetas",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Roquetas de Mar, España",
    "latitude": 36.765374,
    "longitude": -2.60712,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rqt-026",
    "city": "roquetas",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Roquetas de Mar, España",
    "latitude": 36.76233,
    "longitude": -2.616751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rqt-027",
    "city": "roquetas",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Roquetas de Mar, España",
    "latitude": 36.760699,
    "longitude": -2.621764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rqt-028",
    "city": "roquetas",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Roquetas de Mar, España",
    "latitude": 36.77178,
    "longitude": -2.607214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rqt-029",
    "city": "roquetas",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Roquetas de Mar, España",
    "latitude": 36.762149,
    "longitude": -2.61437,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rqt-030",
    "city": "roquetas",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Roquetas de Mar, España",
    "latitude": 36.757136,
    "longitude": -2.619484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rqt-031",
    "city": "roquetas",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Roquetas de Mar, España",
    "latitude": 36.771686,
    "longitude": -2.612707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rqt-032",
    "city": "roquetas",
    "title": "Muralla 1",
    "address": "Muralla 1, Roquetas de Mar, España",
    "latitude": 36.76453,
    "longitude": -2.61467,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "rqt-033",
    "city": "roquetas",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Roquetas de Mar, España",
    "latitude": 36.759416,
    "longitude": -2.612141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "rqt-034",
    "city": "roquetas",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Roquetas de Mar, España",
    "latitude": 36.766193,
    "longitude": -2.617225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "rqt-035",
    "city": "roquetas",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Roquetas de Mar, España",
    "latitude": 36.76423,
    "longitude": -2.618722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "rqt-036",
    "city": "roquetas",
    "title": "Museo local 1",
    "address": "Museo local 1, Roquetas de Mar, España",
    "latitude": 36.766759,
    "longitude": -2.606486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "rqt-037",
    "city": "roquetas",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Roquetas de Mar, España",
    "latitude": 36.761675,
    "longitude": -2.616881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "rqt-038",
    "city": "roquetas",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Roquetas de Mar, España",
    "latitude": 36.760178,
    "longitude": -2.62156,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "rqt-039",
    "city": "roquetas",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Roquetas de Mar, España",
    "latitude": 36.772414,
    "longitude": -2.607721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "rqt-040",
    "city": "roquetas",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Roquetas de Mar, España",
    "latitude": 36.762019,
    "longitude": -2.614469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vit-001",
    "city": "vitoria",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Vitoria-Gasteiz, España",
    "latitude": 42.8512,
    "longitude": -2.672095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vit-002",
    "city": "vitoria",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Vitoria-Gasteiz, España",
    "latitude": 42.848164,
    "longitude": -2.673763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vit-003",
    "city": "vitoria",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Vitoria-Gasteiz, España",
    "latitude": 42.845045,
    "longitude": -2.665832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vit-004",
    "city": "vitoria",
    "title": "Catedral 1",
    "address": "Catedral 1, Vitoria-Gasteiz, España",
    "latitude": 42.846205,
    "longitude": -2.673261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vit-005",
    "city": "vitoria",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Vitoria-Gasteiz, España",
    "latitude": 42.844537,
    "longitude": -2.67854,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vit-006",
    "city": "vitoria",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Vitoria-Gasteiz, España",
    "latitude": 42.852468,
    "longitude": -2.663681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vit-007",
    "city": "vitoria",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Vitoria-Gasteiz, España",
    "latitude": 42.845039,
    "longitude": -2.671057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vit-008",
    "city": "vitoria",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Vitoria-Gasteiz, España",
    "latitude": 42.83976,
    "longitude": -2.678324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vit-009",
    "city": "vitoria",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Vitoria-Gasteiz, España",
    "latitude": 42.854619,
    "longitude": -2.667833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vit-010",
    "city": "vitoria",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Vitoria-Gasteiz, España",
    "latitude": 42.847243,
    "longitude": -2.670616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vit-011",
    "city": "vitoria",
    "title": "Castillo 1",
    "address": "Castillo 1, Vitoria-Gasteiz, España",
    "latitude": 42.839976,
    "longitude": -2.671842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vit-012",
    "city": "vitoria",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Vitoria-Gasteiz, España",
    "latitude": 42.850467,
    "longitude": -2.672787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vit-013",
    "city": "vitoria",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Vitoria-Gasteiz, España",
    "latitude": 42.847684,
    "longitude": -2.674477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vit-014",
    "city": "vitoria",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Vitoria-Gasteiz, España",
    "latitude": 42.846458,
    "longitude": -2.664843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vit-015",
    "city": "vitoria",
    "title": "Estación central 1",
    "address": "Estación central 1, Vitoria-Gasteiz, España",
    "latitude": 42.845513,
    "longitude": -2.673474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vit-016",
    "city": "vitoria",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Vitoria-Gasteiz, España",
    "latitude": 42.843823,
    "longitude": -2.678692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vit-017",
    "city": "vitoria",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Vitoria-Gasteiz, España",
    "latitude": 42.853457,
    "longitude": -2.663798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vit-018",
    "city": "vitoria",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Vitoria-Gasteiz, España",
    "latitude": 42.844826,
    "longitude": -2.671164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vit-019",
    "city": "vitoria",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Vitoria-Gasteiz, España",
    "latitude": 42.839608,
    "longitude": -2.677424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vit-020",
    "city": "vitoria",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Vitoria-Gasteiz, España",
    "latitude": 42.854502,
    "longitude": -2.668675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vit-021",
    "city": "vitoria",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Vitoria-Gasteiz, España",
    "latitude": 42.847136,
    "longitude": -2.671099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vit-022",
    "city": "vitoria",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Vitoria-Gasteiz, España",
    "latitude": 42.840876,
    "longitude": -2.670426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vit-023",
    "city": "vitoria",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Vitoria-Gasteiz, España",
    "latitude": 42.849625,
    "longitude": -2.67347,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vit-024",
    "city": "vitoria",
    "title": "Basílica 1",
    "address": "Basílica 1, Vitoria-Gasteiz, España",
    "latitude": 42.847201,
    "longitude": -2.675101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vit-025",
    "city": "vitoria",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Vitoria-Gasteiz, España",
    "latitude": 42.847874,
    "longitude": -2.66402,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vit-026",
    "city": "vitoria",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Vitoria-Gasteiz, España",
    "latitude": 42.84483,
    "longitude": -2.673651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vit-027",
    "city": "vitoria",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Vitoria-Gasteiz, España",
    "latitude": 42.843199,
    "longitude": -2.678664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vit-028",
    "city": "vitoria",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Vitoria-Gasteiz, España",
    "latitude": 42.85428,
    "longitude": -2.664114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vit-029",
    "city": "vitoria",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Vitoria-Gasteiz, España",
    "latitude": 42.844649,
    "longitude": -2.67127,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vit-030",
    "city": "vitoria",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Vitoria-Gasteiz, España",
    "latitude": 42.839636,
    "longitude": -2.676384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vit-031",
    "city": "vitoria",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Vitoria-Gasteiz, España",
    "latitude": 42.854186,
    "longitude": -2.669607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vit-032",
    "city": "vitoria",
    "title": "Muralla 1",
    "address": "Muralla 1, Vitoria-Gasteiz, España",
    "latitude": 42.84703,
    "longitude": -2.67157,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vit-033",
    "city": "vitoria",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Vitoria-Gasteiz, España",
    "latitude": 42.841916,
    "longitude": -2.669041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vit-034",
    "city": "vitoria",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Vitoria-Gasteiz, España",
    "latitude": 42.848693,
    "longitude": -2.674125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vit-035",
    "city": "vitoria",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Vitoria-Gasteiz, España",
    "latitude": 42.84673,
    "longitude": -2.675622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vit-036",
    "city": "vitoria",
    "title": "Museo local 1",
    "address": "Museo local 1, Vitoria-Gasteiz, España",
    "latitude": 42.849259,
    "longitude": -2.663386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vit-037",
    "city": "vitoria",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Vitoria-Gasteiz, España",
    "latitude": 42.844175,
    "longitude": -2.673781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vit-038",
    "city": "vitoria",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Vitoria-Gasteiz, España",
    "latitude": 42.842678,
    "longitude": -2.67846,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vit-039",
    "city": "vitoria",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Vitoria-Gasteiz, España",
    "latitude": 42.854914,
    "longitude": -2.664621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vit-040",
    "city": "vitoria",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Vitoria-Gasteiz, España",
    "latitude": 42.844519,
    "longitude": -2.671369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sag-001",
    "city": "castellon-alt",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Sagunto, España",
    "latitude": 39.6849,
    "longitude": -0.278795,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sag-002",
    "city": "castellon-alt",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Sagunto, España",
    "latitude": 39.681864,
    "longitude": -0.280463,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sag-003",
    "city": "castellon-alt",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Sagunto, España",
    "latitude": 39.678745,
    "longitude": -0.272532,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sag-004",
    "city": "castellon-alt",
    "title": "Catedral 1",
    "address": "Catedral 1, Sagunto, España",
    "latitude": 39.679905,
    "longitude": -0.279961,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sag-005",
    "city": "castellon-alt",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Sagunto, España",
    "latitude": 39.678237,
    "longitude": -0.28524,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sag-006",
    "city": "castellon-alt",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Sagunto, España",
    "latitude": 39.686168,
    "longitude": -0.270381,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sag-007",
    "city": "castellon-alt",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Sagunto, España",
    "latitude": 39.678739,
    "longitude": -0.277757,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sag-008",
    "city": "castellon-alt",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Sagunto, España",
    "latitude": 39.67346,
    "longitude": -0.285024,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sag-009",
    "city": "castellon-alt",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Sagunto, España",
    "latitude": 39.688319,
    "longitude": -0.274533,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sag-010",
    "city": "castellon-alt",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Sagunto, España",
    "latitude": 39.680943,
    "longitude": -0.277316,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sag-011",
    "city": "castellon-alt",
    "title": "Castillo 1",
    "address": "Castillo 1, Sagunto, España",
    "latitude": 39.673676,
    "longitude": -0.278542,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sag-012",
    "city": "castellon-alt",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Sagunto, España",
    "latitude": 39.684167,
    "longitude": -0.279487,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sag-013",
    "city": "castellon-alt",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Sagunto, España",
    "latitude": 39.681384,
    "longitude": -0.281177,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sag-014",
    "city": "castellon-alt",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Sagunto, España",
    "latitude": 39.680158,
    "longitude": -0.271543,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sag-015",
    "city": "castellon-alt",
    "title": "Estación central 1",
    "address": "Estación central 1, Sagunto, España",
    "latitude": 39.679213,
    "longitude": -0.280174,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sag-016",
    "city": "castellon-alt",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Sagunto, España",
    "latitude": 39.677523,
    "longitude": -0.285392,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sag-017",
    "city": "castellon-alt",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Sagunto, España",
    "latitude": 39.687157,
    "longitude": -0.270498,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sag-018",
    "city": "castellon-alt",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Sagunto, España",
    "latitude": 39.678526,
    "longitude": -0.277864,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sag-019",
    "city": "castellon-alt",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Sagunto, España",
    "latitude": 39.673308,
    "longitude": -0.284124,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sag-020",
    "city": "castellon-alt",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Sagunto, España",
    "latitude": 39.688202,
    "longitude": -0.275375,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sag-021",
    "city": "castellon-alt",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Sagunto, España",
    "latitude": 39.680836,
    "longitude": -0.277799,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sag-022",
    "city": "castellon-alt",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Sagunto, España",
    "latitude": 39.674576,
    "longitude": -0.277126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sag-023",
    "city": "castellon-alt",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Sagunto, España",
    "latitude": 39.683325,
    "longitude": -0.28017,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sag-024",
    "city": "castellon-alt",
    "title": "Basílica 1",
    "address": "Basílica 1, Sagunto, España",
    "latitude": 39.680901,
    "longitude": -0.281801,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sag-025",
    "city": "castellon-alt",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Sagunto, España",
    "latitude": 39.681574,
    "longitude": -0.27072,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sag-026",
    "city": "castellon-alt",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Sagunto, España",
    "latitude": 39.67853,
    "longitude": -0.280351,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sag-027",
    "city": "castellon-alt",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Sagunto, España",
    "latitude": 39.676899,
    "longitude": -0.285364,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sag-028",
    "city": "castellon-alt",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Sagunto, España",
    "latitude": 39.68798,
    "longitude": -0.270814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sag-029",
    "city": "castellon-alt",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Sagunto, España",
    "latitude": 39.678349,
    "longitude": -0.27797,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sag-030",
    "city": "castellon-alt",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Sagunto, España",
    "latitude": 39.673336,
    "longitude": -0.283084,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sag-031",
    "city": "castellon-alt",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Sagunto, España",
    "latitude": 39.687886,
    "longitude": -0.276307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sag-032",
    "city": "castellon-alt",
    "title": "Muralla 1",
    "address": "Muralla 1, Sagunto, España",
    "latitude": 39.68073,
    "longitude": -0.27827,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sag-033",
    "city": "castellon-alt",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Sagunto, España",
    "latitude": 39.675616,
    "longitude": -0.275741,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sag-034",
    "city": "castellon-alt",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Sagunto, España",
    "latitude": 39.682393,
    "longitude": -0.280825,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sag-035",
    "city": "castellon-alt",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Sagunto, España",
    "latitude": 39.68043,
    "longitude": -0.282322,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sag-036",
    "city": "castellon-alt",
    "title": "Museo local 1",
    "address": "Museo local 1, Sagunto, España",
    "latitude": 39.682959,
    "longitude": -0.270086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sag-037",
    "city": "castellon-alt",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Sagunto, España",
    "latitude": 39.677875,
    "longitude": -0.280481,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sag-038",
    "city": "castellon-alt",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Sagunto, España",
    "latitude": 39.676378,
    "longitude": -0.28516,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sag-039",
    "city": "castellon-alt",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Sagunto, España",
    "latitude": 39.688614,
    "longitude": -0.271321,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sag-040",
    "city": "castellon-alt",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Sagunto, España",
    "latitude": 39.678219,
    "longitude": -0.278069,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trl-001",
    "city": "teruel",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Teruel, España",
    "latitude": 40.3501,
    "longitude": -1.106995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trl-002",
    "city": "teruel",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Teruel, España",
    "latitude": 40.347064,
    "longitude": -1.108663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trl-003",
    "city": "teruel",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Teruel, España",
    "latitude": 40.343945,
    "longitude": -1.100732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trl-004",
    "city": "teruel",
    "title": "Catedral 1",
    "address": "Catedral 1, Teruel, España",
    "latitude": 40.345105,
    "longitude": -1.108161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trl-005",
    "city": "teruel",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Teruel, España",
    "latitude": 40.343437,
    "longitude": -1.11344,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trl-006",
    "city": "teruel",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Teruel, España",
    "latitude": 40.351368,
    "longitude": -1.098581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trl-007",
    "city": "teruel",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Teruel, España",
    "latitude": 40.343939,
    "longitude": -1.105957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trl-008",
    "city": "teruel",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Teruel, España",
    "latitude": 40.33866,
    "longitude": -1.113224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trl-009",
    "city": "teruel",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Teruel, España",
    "latitude": 40.353519,
    "longitude": -1.102733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trl-010",
    "city": "teruel",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Teruel, España",
    "latitude": 40.346143,
    "longitude": -1.105516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trl-011",
    "city": "teruel",
    "title": "Castillo 1",
    "address": "Castillo 1, Teruel, España",
    "latitude": 40.338876,
    "longitude": -1.106742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trl-012",
    "city": "teruel",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Teruel, España",
    "latitude": 40.349367,
    "longitude": -1.107687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trl-013",
    "city": "teruel",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Teruel, España",
    "latitude": 40.346584,
    "longitude": -1.109377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trl-014",
    "city": "teruel",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Teruel, España",
    "latitude": 40.345358,
    "longitude": -1.099743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trl-015",
    "city": "teruel",
    "title": "Estación central 1",
    "address": "Estación central 1, Teruel, España",
    "latitude": 40.344413,
    "longitude": -1.108374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trl-016",
    "city": "teruel",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Teruel, España",
    "latitude": 40.342723,
    "longitude": -1.113592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trl-017",
    "city": "teruel",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Teruel, España",
    "latitude": 40.352357,
    "longitude": -1.098698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trl-018",
    "city": "teruel",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Teruel, España",
    "latitude": 40.343726,
    "longitude": -1.106064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trl-019",
    "city": "teruel",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Teruel, España",
    "latitude": 40.338508,
    "longitude": -1.112324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trl-020",
    "city": "teruel",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Teruel, España",
    "latitude": 40.353402,
    "longitude": -1.103575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trl-021",
    "city": "teruel",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Teruel, España",
    "latitude": 40.346036,
    "longitude": -1.105999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trl-022",
    "city": "teruel",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Teruel, España",
    "latitude": 40.339776,
    "longitude": -1.105326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trl-023",
    "city": "teruel",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Teruel, España",
    "latitude": 40.348525,
    "longitude": -1.10837,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trl-024",
    "city": "teruel",
    "title": "Basílica 1",
    "address": "Basílica 1, Teruel, España",
    "latitude": 40.346101,
    "longitude": -1.110001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trl-025",
    "city": "teruel",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Teruel, España",
    "latitude": 40.346774,
    "longitude": -1.09892,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trl-026",
    "city": "teruel",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Teruel, España",
    "latitude": 40.34373,
    "longitude": -1.108551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trl-027",
    "city": "teruel",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Teruel, España",
    "latitude": 40.342099,
    "longitude": -1.113564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trl-028",
    "city": "teruel",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Teruel, España",
    "latitude": 40.35318,
    "longitude": -1.099014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trl-029",
    "city": "teruel",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Teruel, España",
    "latitude": 40.343549,
    "longitude": -1.10617,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trl-030",
    "city": "teruel",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Teruel, España",
    "latitude": 40.338536,
    "longitude": -1.111284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trl-031",
    "city": "teruel",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Teruel, España",
    "latitude": 40.353086,
    "longitude": -1.104507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trl-032",
    "city": "teruel",
    "title": "Muralla 1",
    "address": "Muralla 1, Teruel, España",
    "latitude": 40.34593,
    "longitude": -1.10647,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trl-033",
    "city": "teruel",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Teruel, España",
    "latitude": 40.340816,
    "longitude": -1.103941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trl-034",
    "city": "teruel",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Teruel, España",
    "latitude": 40.347593,
    "longitude": -1.109025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trl-035",
    "city": "teruel",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Teruel, España",
    "latitude": 40.34563,
    "longitude": -1.110522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trl-036",
    "city": "teruel",
    "title": "Museo local 1",
    "address": "Museo local 1, Teruel, España",
    "latitude": 40.348159,
    "longitude": -1.098286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trl-037",
    "city": "teruel",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Teruel, España",
    "latitude": 40.343075,
    "longitude": -1.108681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trl-038",
    "city": "teruel",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Teruel, España",
    "latitude": 40.341578,
    "longitude": -1.11336,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trl-039",
    "city": "teruel",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Teruel, España",
    "latitude": 40.353814,
    "longitude": -1.099521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trl-040",
    "city": "teruel",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Teruel, España",
    "latitude": 40.343419,
    "longitude": -1.106269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "hsk-001",
    "city": "huesca",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Huesca, España",
    "latitude": 42.1407,
    "longitude": -0.409395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "hsk-002",
    "city": "huesca",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Huesca, España",
    "latitude": 42.137664,
    "longitude": -0.411063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "hsk-003",
    "city": "huesca",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Huesca, España",
    "latitude": 42.134545,
    "longitude": -0.403132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "hsk-004",
    "city": "huesca",
    "title": "Catedral 1",
    "address": "Catedral 1, Huesca, España",
    "latitude": 42.135705,
    "longitude": -0.410561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "hsk-005",
    "city": "huesca",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Huesca, España",
    "latitude": 42.134037,
    "longitude": -0.41584,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "hsk-006",
    "city": "huesca",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Huesca, España",
    "latitude": 42.141968,
    "longitude": -0.400981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "hsk-007",
    "city": "huesca",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Huesca, España",
    "latitude": 42.134539,
    "longitude": -0.408357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "hsk-008",
    "city": "huesca",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Huesca, España",
    "latitude": 42.12926,
    "longitude": -0.415624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "hsk-009",
    "city": "huesca",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Huesca, España",
    "latitude": 42.144119,
    "longitude": -0.405133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "hsk-010",
    "city": "huesca",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Huesca, España",
    "latitude": 42.136743,
    "longitude": -0.407916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "hsk-011",
    "city": "huesca",
    "title": "Castillo 1",
    "address": "Castillo 1, Huesca, España",
    "latitude": 42.129476,
    "longitude": -0.409142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "hsk-012",
    "city": "huesca",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Huesca, España",
    "latitude": 42.139967,
    "longitude": -0.410087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "hsk-013",
    "city": "huesca",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Huesca, España",
    "latitude": 42.137184,
    "longitude": -0.411777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "hsk-014",
    "city": "huesca",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Huesca, España",
    "latitude": 42.135958,
    "longitude": -0.402143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "hsk-015",
    "city": "huesca",
    "title": "Estación central 1",
    "address": "Estación central 1, Huesca, España",
    "latitude": 42.135013,
    "longitude": -0.410774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "hsk-016",
    "city": "huesca",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Huesca, España",
    "latitude": 42.133323,
    "longitude": -0.415992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "hsk-017",
    "city": "huesca",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Huesca, España",
    "latitude": 42.142957,
    "longitude": -0.401098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "hsk-018",
    "city": "huesca",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Huesca, España",
    "latitude": 42.134326,
    "longitude": -0.408464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "hsk-019",
    "city": "huesca",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Huesca, España",
    "latitude": 42.129108,
    "longitude": -0.414724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "hsk-020",
    "city": "huesca",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Huesca, España",
    "latitude": 42.144002,
    "longitude": -0.405975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "hsk-021",
    "city": "huesca",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Huesca, España",
    "latitude": 42.136636,
    "longitude": -0.408399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "hsk-022",
    "city": "huesca",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Huesca, España",
    "latitude": 42.130376,
    "longitude": -0.407726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "hsk-023",
    "city": "huesca",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Huesca, España",
    "latitude": 42.139125,
    "longitude": -0.41077,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "hsk-024",
    "city": "huesca",
    "title": "Basílica 1",
    "address": "Basílica 1, Huesca, España",
    "latitude": 42.136701,
    "longitude": -0.412401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "hsk-025",
    "city": "huesca",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Huesca, España",
    "latitude": 42.137374,
    "longitude": -0.40132,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "hsk-026",
    "city": "huesca",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Huesca, España",
    "latitude": 42.13433,
    "longitude": -0.410951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "hsk-027",
    "city": "huesca",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Huesca, España",
    "latitude": 42.132699,
    "longitude": -0.415964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "hsk-028",
    "city": "huesca",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Huesca, España",
    "latitude": 42.14378,
    "longitude": -0.401414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "hsk-029",
    "city": "huesca",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Huesca, España",
    "latitude": 42.134149,
    "longitude": -0.40857,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "hsk-030",
    "city": "huesca",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Huesca, España",
    "latitude": 42.129136,
    "longitude": -0.413684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "hsk-031",
    "city": "huesca",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Huesca, España",
    "latitude": 42.143686,
    "longitude": -0.406907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "hsk-032",
    "city": "huesca",
    "title": "Muralla 1",
    "address": "Muralla 1, Huesca, España",
    "latitude": 42.13653,
    "longitude": -0.40887,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "hsk-033",
    "city": "huesca",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Huesca, España",
    "latitude": 42.131416,
    "longitude": -0.406341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "hsk-034",
    "city": "huesca",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Huesca, España",
    "latitude": 42.138193,
    "longitude": -0.411425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "hsk-035",
    "city": "huesca",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Huesca, España",
    "latitude": 42.13623,
    "longitude": -0.412922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "hsk-036",
    "city": "huesca",
    "title": "Museo local 1",
    "address": "Museo local 1, Huesca, España",
    "latitude": 42.138759,
    "longitude": -0.400686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "hsk-037",
    "city": "huesca",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Huesca, España",
    "latitude": 42.133675,
    "longitude": -0.411081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "hsk-038",
    "city": "huesca",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Huesca, España",
    "latitude": 42.132178,
    "longitude": -0.41576,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "hsk-039",
    "city": "huesca",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Huesca, España",
    "latitude": 42.144414,
    "longitude": -0.401921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "hsk-040",
    "city": "huesca",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Huesca, España",
    "latitude": 42.134019,
    "longitude": -0.408669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sor-001",
    "city": "soria",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Soria, España",
    "latitude": 41.7681,
    "longitude": -2.466995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sor-002",
    "city": "soria",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Soria, España",
    "latitude": 41.765064,
    "longitude": -2.468663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sor-003",
    "city": "soria",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Soria, España",
    "latitude": 41.761945,
    "longitude": -2.460732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sor-004",
    "city": "soria",
    "title": "Catedral 1",
    "address": "Catedral 1, Soria, España",
    "latitude": 41.763105,
    "longitude": -2.468161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sor-005",
    "city": "soria",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Soria, España",
    "latitude": 41.761437,
    "longitude": -2.47344,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sor-006",
    "city": "soria",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Soria, España",
    "latitude": 41.769368,
    "longitude": -2.458581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sor-007",
    "city": "soria",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Soria, España",
    "latitude": 41.761939,
    "longitude": -2.465957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sor-008",
    "city": "soria",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Soria, España",
    "latitude": 41.75666,
    "longitude": -2.473224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sor-009",
    "city": "soria",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Soria, España",
    "latitude": 41.771519,
    "longitude": -2.462733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sor-010",
    "city": "soria",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Soria, España",
    "latitude": 41.764143,
    "longitude": -2.465516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sor-011",
    "city": "soria",
    "title": "Castillo 1",
    "address": "Castillo 1, Soria, España",
    "latitude": 41.756876,
    "longitude": -2.466742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sor-012",
    "city": "soria",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Soria, España",
    "latitude": 41.767367,
    "longitude": -2.467687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sor-013",
    "city": "soria",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Soria, España",
    "latitude": 41.764584,
    "longitude": -2.469377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sor-014",
    "city": "soria",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Soria, España",
    "latitude": 41.763358,
    "longitude": -2.459743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sor-015",
    "city": "soria",
    "title": "Estación central 1",
    "address": "Estación central 1, Soria, España",
    "latitude": 41.762413,
    "longitude": -2.468374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sor-016",
    "city": "soria",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Soria, España",
    "latitude": 41.760723,
    "longitude": -2.473592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sor-017",
    "city": "soria",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Soria, España",
    "latitude": 41.770357,
    "longitude": -2.458698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sor-018",
    "city": "soria",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Soria, España",
    "latitude": 41.761726,
    "longitude": -2.466064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sor-019",
    "city": "soria",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Soria, España",
    "latitude": 41.756508,
    "longitude": -2.472324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sor-020",
    "city": "soria",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Soria, España",
    "latitude": 41.771402,
    "longitude": -2.463575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sor-021",
    "city": "soria",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Soria, España",
    "latitude": 41.764036,
    "longitude": -2.465999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sor-022",
    "city": "soria",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Soria, España",
    "latitude": 41.757776,
    "longitude": -2.465326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sor-023",
    "city": "soria",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Soria, España",
    "latitude": 41.766525,
    "longitude": -2.46837,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sor-024",
    "city": "soria",
    "title": "Basílica 1",
    "address": "Basílica 1, Soria, España",
    "latitude": 41.764101,
    "longitude": -2.470001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sor-025",
    "city": "soria",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Soria, España",
    "latitude": 41.764774,
    "longitude": -2.45892,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sor-026",
    "city": "soria",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Soria, España",
    "latitude": 41.76173,
    "longitude": -2.468551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sor-027",
    "city": "soria",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Soria, España",
    "latitude": 41.760099,
    "longitude": -2.473564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sor-028",
    "city": "soria",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Soria, España",
    "latitude": 41.77118,
    "longitude": -2.459014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sor-029",
    "city": "soria",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Soria, España",
    "latitude": 41.761549,
    "longitude": -2.46617,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sor-030",
    "city": "soria",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Soria, España",
    "latitude": 41.756536,
    "longitude": -2.471284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sor-031",
    "city": "soria",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Soria, España",
    "latitude": 41.771086,
    "longitude": -2.464507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sor-032",
    "city": "soria",
    "title": "Muralla 1",
    "address": "Muralla 1, Soria, España",
    "latitude": 41.76393,
    "longitude": -2.46647,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "sor-033",
    "city": "soria",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Soria, España",
    "latitude": 41.758816,
    "longitude": -2.463941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "sor-034",
    "city": "soria",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Soria, España",
    "latitude": 41.765593,
    "longitude": -2.469025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "sor-035",
    "city": "soria",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Soria, España",
    "latitude": 41.76363,
    "longitude": -2.470522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "sor-036",
    "city": "soria",
    "title": "Museo local 1",
    "address": "Museo local 1, Soria, España",
    "latitude": 41.766159,
    "longitude": -2.458286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "sor-037",
    "city": "soria",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Soria, España",
    "latitude": 41.761075,
    "longitude": -2.468681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "sor-038",
    "city": "soria",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Soria, España",
    "latitude": 41.759578,
    "longitude": -2.47336,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "sor-039",
    "city": "soria",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Soria, España",
    "latitude": 41.771814,
    "longitude": -2.459521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "sor-040",
    "city": "soria",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Soria, España",
    "latitude": 41.761419,
    "longitude": -2.466269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zmr-001",
    "city": "zamora",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Zamora, España",
    "latitude": 41.5078,
    "longitude": -5.745095,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zmr-002",
    "city": "zamora",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Zamora, España",
    "latitude": 41.504764,
    "longitude": -5.746763,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zmr-003",
    "city": "zamora",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Zamora, España",
    "latitude": 41.501645,
    "longitude": -5.738832,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zmr-004",
    "city": "zamora",
    "title": "Catedral 1",
    "address": "Catedral 1, Zamora, España",
    "latitude": 41.502805,
    "longitude": -5.746261,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zmr-005",
    "city": "zamora",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Zamora, España",
    "latitude": 41.501137,
    "longitude": -5.75154,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zmr-006",
    "city": "zamora",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Zamora, España",
    "latitude": 41.509068,
    "longitude": -5.736681,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zmr-007",
    "city": "zamora",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Zamora, España",
    "latitude": 41.501639,
    "longitude": -5.744057,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zmr-008",
    "city": "zamora",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Zamora, España",
    "latitude": 41.49636,
    "longitude": -5.751324,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zmr-009",
    "city": "zamora",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Zamora, España",
    "latitude": 41.511219,
    "longitude": -5.740833,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zmr-010",
    "city": "zamora",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Zamora, España",
    "latitude": 41.503843,
    "longitude": -5.743616,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zmr-011",
    "city": "zamora",
    "title": "Castillo 1",
    "address": "Castillo 1, Zamora, España",
    "latitude": 41.496576,
    "longitude": -5.744842,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zmr-012",
    "city": "zamora",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Zamora, España",
    "latitude": 41.507067,
    "longitude": -5.745787,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zmr-013",
    "city": "zamora",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Zamora, España",
    "latitude": 41.504284,
    "longitude": -5.747477,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zmr-014",
    "city": "zamora",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Zamora, España",
    "latitude": 41.503058,
    "longitude": -5.737843,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zmr-015",
    "city": "zamora",
    "title": "Estación central 1",
    "address": "Estación central 1, Zamora, España",
    "latitude": 41.502113,
    "longitude": -5.746474,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zmr-016",
    "city": "zamora",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Zamora, España",
    "latitude": 41.500423,
    "longitude": -5.751692,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zmr-017",
    "city": "zamora",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Zamora, España",
    "latitude": 41.510057,
    "longitude": -5.736798,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zmr-018",
    "city": "zamora",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Zamora, España",
    "latitude": 41.501426,
    "longitude": -5.744164,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zmr-019",
    "city": "zamora",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Zamora, España",
    "latitude": 41.496208,
    "longitude": -5.750424,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zmr-020",
    "city": "zamora",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Zamora, España",
    "latitude": 41.511102,
    "longitude": -5.741675,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zmr-021",
    "city": "zamora",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Zamora, España",
    "latitude": 41.503736,
    "longitude": -5.744099,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zmr-022",
    "city": "zamora",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Zamora, España",
    "latitude": 41.497476,
    "longitude": -5.743426,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zmr-023",
    "city": "zamora",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Zamora, España",
    "latitude": 41.506225,
    "longitude": -5.74647,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zmr-024",
    "city": "zamora",
    "title": "Basílica 1",
    "address": "Basílica 1, Zamora, España",
    "latitude": 41.503801,
    "longitude": -5.748101,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zmr-025",
    "city": "zamora",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Zamora, España",
    "latitude": 41.504474,
    "longitude": -5.73702,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zmr-026",
    "city": "zamora",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Zamora, España",
    "latitude": 41.50143,
    "longitude": -5.746651,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zmr-027",
    "city": "zamora",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Zamora, España",
    "latitude": 41.499799,
    "longitude": -5.751664,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zmr-028",
    "city": "zamora",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Zamora, España",
    "latitude": 41.51088,
    "longitude": -5.737114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zmr-029",
    "city": "zamora",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Zamora, España",
    "latitude": 41.501249,
    "longitude": -5.74427,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zmr-030",
    "city": "zamora",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Zamora, España",
    "latitude": 41.496236,
    "longitude": -5.749384,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zmr-031",
    "city": "zamora",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Zamora, España",
    "latitude": 41.510786,
    "longitude": -5.742607,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zmr-032",
    "city": "zamora",
    "title": "Muralla 1",
    "address": "Muralla 1, Zamora, España",
    "latitude": 41.50363,
    "longitude": -5.74457,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "zmr-033",
    "city": "zamora",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Zamora, España",
    "latitude": 41.498516,
    "longitude": -5.742041,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "zmr-034",
    "city": "zamora",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Zamora, España",
    "latitude": 41.505293,
    "longitude": -5.747125,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "zmr-035",
    "city": "zamora",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Zamora, España",
    "latitude": 41.50333,
    "longitude": -5.748622,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "zmr-036",
    "city": "zamora",
    "title": "Museo local 1",
    "address": "Museo local 1, Zamora, España",
    "latitude": 41.505859,
    "longitude": -5.736386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "zmr-037",
    "city": "zamora",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Zamora, España",
    "latitude": 41.500775,
    "longitude": -5.746781,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "zmr-038",
    "city": "zamora",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Zamora, España",
    "latitude": 41.499278,
    "longitude": -5.75146,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "zmr-039",
    "city": "zamora",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Zamora, España",
    "latitude": 41.511514,
    "longitude": -5.737621,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "zmr-040",
    "city": "zamora",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Zamora, España",
    "latitude": 41.501119,
    "longitude": -5.744369,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "plc-001",
    "city": "palencia",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Palencia, España",
    "latitude": 42.0142,
    "longitude": -4.529295,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "plc-002",
    "city": "palencia",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Palencia, España",
    "latitude": 42.011164,
    "longitude": -4.530963,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "plc-003",
    "city": "palencia",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Palencia, España",
    "latitude": 42.008045,
    "longitude": -4.523032,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "plc-004",
    "city": "palencia",
    "title": "Catedral 1",
    "address": "Catedral 1, Palencia, España",
    "latitude": 42.009205,
    "longitude": -4.530461,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "plc-005",
    "city": "palencia",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Palencia, España",
    "latitude": 42.007537,
    "longitude": -4.53574,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "plc-006",
    "city": "palencia",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Palencia, España",
    "latitude": 42.015468,
    "longitude": -4.520881,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "plc-007",
    "city": "palencia",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Palencia, España",
    "latitude": 42.008039,
    "longitude": -4.528257,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "plc-008",
    "city": "palencia",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Palencia, España",
    "latitude": 42.00276,
    "longitude": -4.535524,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "plc-009",
    "city": "palencia",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Palencia, España",
    "latitude": 42.017619,
    "longitude": -4.525033,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "plc-010",
    "city": "palencia",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Palencia, España",
    "latitude": 42.010243,
    "longitude": -4.527816,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "plc-011",
    "city": "palencia",
    "title": "Castillo 1",
    "address": "Castillo 1, Palencia, España",
    "latitude": 42.002976,
    "longitude": -4.529042,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "plc-012",
    "city": "palencia",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Palencia, España",
    "latitude": 42.013467,
    "longitude": -4.529987,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "plc-013",
    "city": "palencia",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Palencia, España",
    "latitude": 42.010684,
    "longitude": -4.531677,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "plc-014",
    "city": "palencia",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Palencia, España",
    "latitude": 42.009458,
    "longitude": -4.522043,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "plc-015",
    "city": "palencia",
    "title": "Estación central 1",
    "address": "Estación central 1, Palencia, España",
    "latitude": 42.008513,
    "longitude": -4.530674,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "plc-016",
    "city": "palencia",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Palencia, España",
    "latitude": 42.006823,
    "longitude": -4.535892,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "plc-017",
    "city": "palencia",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Palencia, España",
    "latitude": 42.016457,
    "longitude": -4.520998,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "plc-018",
    "city": "palencia",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Palencia, España",
    "latitude": 42.007826,
    "longitude": -4.528364,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "plc-019",
    "city": "palencia",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Palencia, España",
    "latitude": 42.002608,
    "longitude": -4.534624,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "plc-020",
    "city": "palencia",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Palencia, España",
    "latitude": 42.017502,
    "longitude": -4.525875,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "plc-021",
    "city": "palencia",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Palencia, España",
    "latitude": 42.010136,
    "longitude": -4.528299,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "plc-022",
    "city": "palencia",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Palencia, España",
    "latitude": 42.003876,
    "longitude": -4.527626,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "plc-023",
    "city": "palencia",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Palencia, España",
    "latitude": 42.012625,
    "longitude": -4.53067,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "plc-024",
    "city": "palencia",
    "title": "Basílica 1",
    "address": "Basílica 1, Palencia, España",
    "latitude": 42.010201,
    "longitude": -4.532301,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "plc-025",
    "city": "palencia",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Palencia, España",
    "latitude": 42.010874,
    "longitude": -4.52122,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "plc-026",
    "city": "palencia",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Palencia, España",
    "latitude": 42.00783,
    "longitude": -4.530851,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "plc-027",
    "city": "palencia",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Palencia, España",
    "latitude": 42.006199,
    "longitude": -4.535864,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "plc-028",
    "city": "palencia",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Palencia, España",
    "latitude": 42.01728,
    "longitude": -4.521314,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "plc-029",
    "city": "palencia",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Palencia, España",
    "latitude": 42.007649,
    "longitude": -4.52847,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "plc-030",
    "city": "palencia",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Palencia, España",
    "latitude": 42.002636,
    "longitude": -4.533584,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "plc-031",
    "city": "palencia",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Palencia, España",
    "latitude": 42.017186,
    "longitude": -4.526807,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "plc-032",
    "city": "palencia",
    "title": "Muralla 1",
    "address": "Muralla 1, Palencia, España",
    "latitude": 42.01003,
    "longitude": -4.52877,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "plc-033",
    "city": "palencia",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Palencia, España",
    "latitude": 42.004916,
    "longitude": -4.526241,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "plc-034",
    "city": "palencia",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Palencia, España",
    "latitude": 42.011693,
    "longitude": -4.531325,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "plc-035",
    "city": "palencia",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Palencia, España",
    "latitude": 42.00973,
    "longitude": -4.532822,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "plc-036",
    "city": "palencia",
    "title": "Museo local 1",
    "address": "Museo local 1, Palencia, España",
    "latitude": 42.012259,
    "longitude": -4.520586,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "plc-037",
    "city": "palencia",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Palencia, España",
    "latitude": 42.007175,
    "longitude": -4.530981,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "plc-038",
    "city": "palencia",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Palencia, España",
    "latitude": 42.005678,
    "longitude": -4.53566,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "plc-039",
    "city": "palencia",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Palencia, España",
    "latitude": 42.017914,
    "longitude": -4.521821,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "plc-040",
    "city": "palencia",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Palencia, España",
    "latitude": 42.007519,
    "longitude": -4.528569,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdr-001",
    "city": "ciudad-real",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Ciudad Real, España",
    "latitude": 38.9908,
    "longitude": -3.929595,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdr-002",
    "city": "ciudad-real",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Ciudad Real, España",
    "latitude": 38.987764,
    "longitude": -3.931263,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdr-003",
    "city": "ciudad-real",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Ciudad Real, España",
    "latitude": 38.984645,
    "longitude": -3.923332,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdr-004",
    "city": "ciudad-real",
    "title": "Catedral 1",
    "address": "Catedral 1, Ciudad Real, España",
    "latitude": 38.985805,
    "longitude": -3.930761,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdr-005",
    "city": "ciudad-real",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Ciudad Real, España",
    "latitude": 38.984137,
    "longitude": -3.93604,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdr-006",
    "city": "ciudad-real",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Ciudad Real, España",
    "latitude": 38.992068,
    "longitude": -3.921181,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdr-007",
    "city": "ciudad-real",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Ciudad Real, España",
    "latitude": 38.984639,
    "longitude": -3.928557,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdr-008",
    "city": "ciudad-real",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Ciudad Real, España",
    "latitude": 38.97936,
    "longitude": -3.935824,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdr-009",
    "city": "ciudad-real",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Ciudad Real, España",
    "latitude": 38.994219,
    "longitude": -3.925333,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdr-010",
    "city": "ciudad-real",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Ciudad Real, España",
    "latitude": 38.986843,
    "longitude": -3.928116,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdr-011",
    "city": "ciudad-real",
    "title": "Castillo 1",
    "address": "Castillo 1, Ciudad Real, España",
    "latitude": 38.979576,
    "longitude": -3.929342,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdr-012",
    "city": "ciudad-real",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Ciudad Real, España",
    "latitude": 38.990067,
    "longitude": -3.930287,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdr-013",
    "city": "ciudad-real",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Ciudad Real, España",
    "latitude": 38.987284,
    "longitude": -3.931977,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdr-014",
    "city": "ciudad-real",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Ciudad Real, España",
    "latitude": 38.986058,
    "longitude": -3.922343,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdr-015",
    "city": "ciudad-real",
    "title": "Estación central 1",
    "address": "Estación central 1, Ciudad Real, España",
    "latitude": 38.985113,
    "longitude": -3.930974,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdr-016",
    "city": "ciudad-real",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Ciudad Real, España",
    "latitude": 38.983423,
    "longitude": -3.936192,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdr-017",
    "city": "ciudad-real",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Ciudad Real, España",
    "latitude": 38.993057,
    "longitude": -3.921298,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdr-018",
    "city": "ciudad-real",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Ciudad Real, España",
    "latitude": 38.984426,
    "longitude": -3.928664,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdr-019",
    "city": "ciudad-real",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Ciudad Real, España",
    "latitude": 38.979208,
    "longitude": -3.934924,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdr-020",
    "city": "ciudad-real",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Ciudad Real, España",
    "latitude": 38.994102,
    "longitude": -3.926175,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdr-021",
    "city": "ciudad-real",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Ciudad Real, España",
    "latitude": 38.986736,
    "longitude": -3.928599,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdr-022",
    "city": "ciudad-real",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Ciudad Real, España",
    "latitude": 38.980476,
    "longitude": -3.927926,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdr-023",
    "city": "ciudad-real",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Ciudad Real, España",
    "latitude": 38.989225,
    "longitude": -3.93097,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdr-024",
    "city": "ciudad-real",
    "title": "Basílica 1",
    "address": "Basílica 1, Ciudad Real, España",
    "latitude": 38.986801,
    "longitude": -3.932601,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdr-025",
    "city": "ciudad-real",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Ciudad Real, España",
    "latitude": 38.987474,
    "longitude": -3.92152,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdr-026",
    "city": "ciudad-real",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Ciudad Real, España",
    "latitude": 38.98443,
    "longitude": -3.931151,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdr-027",
    "city": "ciudad-real",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Ciudad Real, España",
    "latitude": 38.982799,
    "longitude": -3.936164,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdr-028",
    "city": "ciudad-real",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Ciudad Real, España",
    "latitude": 38.99388,
    "longitude": -3.921614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdr-029",
    "city": "ciudad-real",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Ciudad Real, España",
    "latitude": 38.984249,
    "longitude": -3.92877,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdr-030",
    "city": "ciudad-real",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Ciudad Real, España",
    "latitude": 38.979236,
    "longitude": -3.933884,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdr-031",
    "city": "ciudad-real",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Ciudad Real, España",
    "latitude": 38.993786,
    "longitude": -3.927107,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdr-032",
    "city": "ciudad-real",
    "title": "Muralla 1",
    "address": "Muralla 1, Ciudad Real, España",
    "latitude": 38.98663,
    "longitude": -3.92907,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdr-033",
    "city": "ciudad-real",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Ciudad Real, España",
    "latitude": 38.981516,
    "longitude": -3.926541,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdr-034",
    "city": "ciudad-real",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Ciudad Real, España",
    "latitude": 38.988293,
    "longitude": -3.931625,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdr-035",
    "city": "ciudad-real",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Ciudad Real, España",
    "latitude": 38.98633,
    "longitude": -3.933122,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdr-036",
    "city": "ciudad-real",
    "title": "Museo local 1",
    "address": "Museo local 1, Ciudad Real, España",
    "latitude": 38.988859,
    "longitude": -3.920886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdr-037",
    "city": "ciudad-real",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Ciudad Real, España",
    "latitude": 38.983775,
    "longitude": -3.931281,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdr-038",
    "city": "ciudad-real",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Ciudad Real, España",
    "latitude": 38.982278,
    "longitude": -3.93596,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdr-039",
    "city": "ciudad-real",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Ciudad Real, España",
    "latitude": 38.994514,
    "longitude": -3.922121,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdr-040",
    "city": "ciudad-real",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Ciudad Real, España",
    "latitude": 38.984119,
    "longitude": -3.928869,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrd-001",
    "city": "merida",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Mérida, España",
    "latitude": 38.9206,
    "longitude": -6.344195,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrd-002",
    "city": "merida",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Mérida, España",
    "latitude": 38.917564,
    "longitude": -6.345863,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrd-003",
    "city": "merida",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Mérida, España",
    "latitude": 38.914445,
    "longitude": -6.337932,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrd-004",
    "city": "merida",
    "title": "Catedral 1",
    "address": "Catedral 1, Mérida, España",
    "latitude": 38.915605,
    "longitude": -6.345361,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrd-005",
    "city": "merida",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Mérida, España",
    "latitude": 38.913937,
    "longitude": -6.35064,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrd-006",
    "city": "merida",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Mérida, España",
    "latitude": 38.921868,
    "longitude": -6.335781,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrd-007",
    "city": "merida",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Mérida, España",
    "latitude": 38.914439,
    "longitude": -6.343157,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrd-008",
    "city": "merida",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Mérida, España",
    "latitude": 38.90916,
    "longitude": -6.350424,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrd-009",
    "city": "merida",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Mérida, España",
    "latitude": 38.924019,
    "longitude": -6.339933,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrd-010",
    "city": "merida",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Mérida, España",
    "latitude": 38.916643,
    "longitude": -6.342716,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrd-011",
    "city": "merida",
    "title": "Castillo 1",
    "address": "Castillo 1, Mérida, España",
    "latitude": 38.909376,
    "longitude": -6.343942,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrd-012",
    "city": "merida",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Mérida, España",
    "latitude": 38.919867,
    "longitude": -6.344887,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrd-013",
    "city": "merida",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Mérida, España",
    "latitude": 38.917084,
    "longitude": -6.346577,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrd-014",
    "city": "merida",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Mérida, España",
    "latitude": 38.915858,
    "longitude": -6.336943,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrd-015",
    "city": "merida",
    "title": "Estación central 1",
    "address": "Estación central 1, Mérida, España",
    "latitude": 38.914913,
    "longitude": -6.345574,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrd-016",
    "city": "merida",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Mérida, España",
    "latitude": 38.913223,
    "longitude": -6.350792,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrd-017",
    "city": "merida",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Mérida, España",
    "latitude": 38.922857,
    "longitude": -6.335898,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrd-018",
    "city": "merida",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Mérida, España",
    "latitude": 38.914226,
    "longitude": -6.343264,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrd-019",
    "city": "merida",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Mérida, España",
    "latitude": 38.909008,
    "longitude": -6.349524,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrd-020",
    "city": "merida",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Mérida, España",
    "latitude": 38.923902,
    "longitude": -6.340775,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrd-021",
    "city": "merida",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Mérida, España",
    "latitude": 38.916536,
    "longitude": -6.343199,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrd-022",
    "city": "merida",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Mérida, España",
    "latitude": 38.910276,
    "longitude": -6.342526,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrd-023",
    "city": "merida",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Mérida, España",
    "latitude": 38.919025,
    "longitude": -6.34557,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrd-024",
    "city": "merida",
    "title": "Basílica 1",
    "address": "Basílica 1, Mérida, España",
    "latitude": 38.916601,
    "longitude": -6.347201,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrd-025",
    "city": "merida",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Mérida, España",
    "latitude": 38.917274,
    "longitude": -6.33612,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrd-026",
    "city": "merida",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Mérida, España",
    "latitude": 38.91423,
    "longitude": -6.345751,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrd-027",
    "city": "merida",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Mérida, España",
    "latitude": 38.912599,
    "longitude": -6.350764,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrd-028",
    "city": "merida",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Mérida, España",
    "latitude": 38.92368,
    "longitude": -6.336214,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrd-029",
    "city": "merida",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Mérida, España",
    "latitude": 38.914049,
    "longitude": -6.34337,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrd-030",
    "city": "merida",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Mérida, España",
    "latitude": 38.909036,
    "longitude": -6.348484,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrd-031",
    "city": "merida",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Mérida, España",
    "latitude": 38.923586,
    "longitude": -6.341707,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrd-032",
    "city": "merida",
    "title": "Muralla 1",
    "address": "Muralla 1, Mérida, España",
    "latitude": 38.91643,
    "longitude": -6.34367,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mrd-033",
    "city": "merida",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Mérida, España",
    "latitude": 38.911316,
    "longitude": -6.341141,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mrd-034",
    "city": "merida",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Mérida, España",
    "latitude": 38.918093,
    "longitude": -6.346225,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mrd-035",
    "city": "merida",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Mérida, España",
    "latitude": 38.91613,
    "longitude": -6.347722,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mrd-036",
    "city": "merida",
    "title": "Museo local 1",
    "address": "Museo local 1, Mérida, España",
    "latitude": 38.918659,
    "longitude": -6.335486,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mrd-037",
    "city": "merida",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Mérida, España",
    "latitude": 38.913575,
    "longitude": -6.345881,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mrd-038",
    "city": "merida",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Mérida, España",
    "latitude": 38.912078,
    "longitude": -6.35056,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mrd-039",
    "city": "merida",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Mérida, España",
    "latitude": 38.924314,
    "longitude": -6.336721,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mrd-040",
    "city": "merida",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Mérida, España",
    "latitude": 38.913919,
    "longitude": -6.343469,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc2-001",
    "city": "alcala",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Alcalá de Henares, España",
    "latitude": 40.4855,
    "longitude": -3.365395,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc2-002",
    "city": "alcala",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Alcalá de Henares, España",
    "latitude": 40.482464,
    "longitude": -3.367063,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc2-003",
    "city": "alcala",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Alcalá de Henares, España",
    "latitude": 40.479345,
    "longitude": -3.359132,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc2-004",
    "city": "alcala",
    "title": "Catedral 1",
    "address": "Catedral 1, Alcalá de Henares, España",
    "latitude": 40.480505,
    "longitude": -3.366561,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc2-005",
    "city": "alcala",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Alcalá de Henares, España",
    "latitude": 40.478837,
    "longitude": -3.37184,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc2-006",
    "city": "alcala",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Alcalá de Henares, España",
    "latitude": 40.486768,
    "longitude": -3.356981,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc2-007",
    "city": "alcala",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Alcalá de Henares, España",
    "latitude": 40.479339,
    "longitude": -3.364357,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc2-008",
    "city": "alcala",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Alcalá de Henares, España",
    "latitude": 40.47406,
    "longitude": -3.371624,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc2-009",
    "city": "alcala",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Alcalá de Henares, España",
    "latitude": 40.488919,
    "longitude": -3.361133,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc2-010",
    "city": "alcala",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Alcalá de Henares, España",
    "latitude": 40.481543,
    "longitude": -3.363916,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc2-011",
    "city": "alcala",
    "title": "Castillo 1",
    "address": "Castillo 1, Alcalá de Henares, España",
    "latitude": 40.474276,
    "longitude": -3.365142,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc2-012",
    "city": "alcala",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Alcalá de Henares, España",
    "latitude": 40.484767,
    "longitude": -3.366087,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc2-013",
    "city": "alcala",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Alcalá de Henares, España",
    "latitude": 40.481984,
    "longitude": -3.367777,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc2-014",
    "city": "alcala",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Alcalá de Henares, España",
    "latitude": 40.480758,
    "longitude": -3.358143,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc2-015",
    "city": "alcala",
    "title": "Estación central 1",
    "address": "Estación central 1, Alcalá de Henares, España",
    "latitude": 40.479813,
    "longitude": -3.366774,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc2-016",
    "city": "alcala",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Alcalá de Henares, España",
    "latitude": 40.478123,
    "longitude": -3.371992,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc2-017",
    "city": "alcala",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Alcalá de Henares, España",
    "latitude": 40.487757,
    "longitude": -3.357098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc2-018",
    "city": "alcala",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Alcalá de Henares, España",
    "latitude": 40.479126,
    "longitude": -3.364464,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc2-019",
    "city": "alcala",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Alcalá de Henares, España",
    "latitude": 40.473908,
    "longitude": -3.370724,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc2-020",
    "city": "alcala",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Alcalá de Henares, España",
    "latitude": 40.488802,
    "longitude": -3.361975,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc2-021",
    "city": "alcala",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Alcalá de Henares, España",
    "latitude": 40.481436,
    "longitude": -3.364399,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc2-022",
    "city": "alcala",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Alcalá de Henares, España",
    "latitude": 40.475176,
    "longitude": -3.363726,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc2-023",
    "city": "alcala",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Alcalá de Henares, España",
    "latitude": 40.483925,
    "longitude": -3.36677,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc2-024",
    "city": "alcala",
    "title": "Basílica 1",
    "address": "Basílica 1, Alcalá de Henares, España",
    "latitude": 40.481501,
    "longitude": -3.368401,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc2-025",
    "city": "alcala",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Alcalá de Henares, España",
    "latitude": 40.482174,
    "longitude": -3.35732,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc2-026",
    "city": "alcala",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Alcalá de Henares, España",
    "latitude": 40.47913,
    "longitude": -3.366951,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc2-027",
    "city": "alcala",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Alcalá de Henares, España",
    "latitude": 40.477499,
    "longitude": -3.371964,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc2-028",
    "city": "alcala",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Alcalá de Henares, España",
    "latitude": 40.48858,
    "longitude": -3.357414,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc2-029",
    "city": "alcala",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Alcalá de Henares, España",
    "latitude": 40.478949,
    "longitude": -3.36457,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc2-030",
    "city": "alcala",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Alcalá de Henares, España",
    "latitude": 40.473936,
    "longitude": -3.369684,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc2-031",
    "city": "alcala",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Alcalá de Henares, España",
    "latitude": 40.488486,
    "longitude": -3.362907,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc2-032",
    "city": "alcala",
    "title": "Muralla 1",
    "address": "Muralla 1, Alcalá de Henares, España",
    "latitude": 40.48133,
    "longitude": -3.36487,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "alc2-033",
    "city": "alcala",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Alcalá de Henares, España",
    "latitude": 40.476216,
    "longitude": -3.362341,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "alc2-034",
    "city": "alcala",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Alcalá de Henares, España",
    "latitude": 40.482993,
    "longitude": -3.367425,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "alc2-035",
    "city": "alcala",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Alcalá de Henares, España",
    "latitude": 40.48103,
    "longitude": -3.368922,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "alc2-036",
    "city": "alcala",
    "title": "Museo local 1",
    "address": "Museo local 1, Alcalá de Henares, España",
    "latitude": 40.483559,
    "longitude": -3.356686,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "alc2-037",
    "city": "alcala",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Alcalá de Henares, España",
    "latitude": 40.478475,
    "longitude": -3.367081,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "alc2-038",
    "city": "alcala",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Alcalá de Henares, España",
    "latitude": 40.476978,
    "longitude": -3.37176,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "alc2-039",
    "city": "alcala",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Alcalá de Henares, España",
    "latitude": 40.489214,
    "longitude": -3.357921,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "alc2-040",
    "city": "alcala",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Alcalá de Henares, España",
    "latitude": 40.478819,
    "longitude": -3.364669,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mns-001",
    "city": "manresa",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Manresa, España",
    "latitude": 41.7328,
    "longitude": 1.822905,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mns-002",
    "city": "manresa",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Manresa, España",
    "latitude": 41.729764,
    "longitude": 1.821237,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mns-003",
    "city": "manresa",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Manresa, España",
    "latitude": 41.726645,
    "longitude": 1.829168,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mns-004",
    "city": "manresa",
    "title": "Catedral 1",
    "address": "Catedral 1, Manresa, España",
    "latitude": 41.727805,
    "longitude": 1.821739,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mns-005",
    "city": "manresa",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Manresa, España",
    "latitude": 41.726137,
    "longitude": 1.81646,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mns-006",
    "city": "manresa",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Manresa, España",
    "latitude": 41.734068,
    "longitude": 1.831319,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mns-007",
    "city": "manresa",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Manresa, España",
    "latitude": 41.726639,
    "longitude": 1.823943,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mns-008",
    "city": "manresa",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Manresa, España",
    "latitude": 41.72136,
    "longitude": 1.816676,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mns-009",
    "city": "manresa",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Manresa, España",
    "latitude": 41.736219,
    "longitude": 1.827167,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mns-010",
    "city": "manresa",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Manresa, España",
    "latitude": 41.728843,
    "longitude": 1.824384,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mns-011",
    "city": "manresa",
    "title": "Castillo 1",
    "address": "Castillo 1, Manresa, España",
    "latitude": 41.721576,
    "longitude": 1.823158,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mns-012",
    "city": "manresa",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Manresa, España",
    "latitude": 41.732067,
    "longitude": 1.822213,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mns-013",
    "city": "manresa",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Manresa, España",
    "latitude": 41.729284,
    "longitude": 1.820523,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mns-014",
    "city": "manresa",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Manresa, España",
    "latitude": 41.728058,
    "longitude": 1.830157,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mns-015",
    "city": "manresa",
    "title": "Estación central 1",
    "address": "Estación central 1, Manresa, España",
    "latitude": 41.727113,
    "longitude": 1.821526,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mns-016",
    "city": "manresa",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Manresa, España",
    "latitude": 41.725423,
    "longitude": 1.816308,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mns-017",
    "city": "manresa",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Manresa, España",
    "latitude": 41.735057,
    "longitude": 1.831202,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mns-018",
    "city": "manresa",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Manresa, España",
    "latitude": 41.726426,
    "longitude": 1.823836,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mns-019",
    "city": "manresa",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Manresa, España",
    "latitude": 41.721208,
    "longitude": 1.817576,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mns-020",
    "city": "manresa",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Manresa, España",
    "latitude": 41.736102,
    "longitude": 1.826325,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mns-021",
    "city": "manresa",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Manresa, España",
    "latitude": 41.728736,
    "longitude": 1.823901,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mns-022",
    "city": "manresa",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Manresa, España",
    "latitude": 41.722476,
    "longitude": 1.824574,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mns-023",
    "city": "manresa",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Manresa, España",
    "latitude": 41.731225,
    "longitude": 1.82153,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mns-024",
    "city": "manresa",
    "title": "Basílica 1",
    "address": "Basílica 1, Manresa, España",
    "latitude": 41.728801,
    "longitude": 1.819899,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mns-025",
    "city": "manresa",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Manresa, España",
    "latitude": 41.729474,
    "longitude": 1.83098,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mns-026",
    "city": "manresa",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Manresa, España",
    "latitude": 41.72643,
    "longitude": 1.821349,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mns-027",
    "city": "manresa",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Manresa, España",
    "latitude": 41.724799,
    "longitude": 1.816336,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mns-028",
    "city": "manresa",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Manresa, España",
    "latitude": 41.73588,
    "longitude": 1.830886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mns-029",
    "city": "manresa",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Manresa, España",
    "latitude": 41.726249,
    "longitude": 1.82373,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mns-030",
    "city": "manresa",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Manresa, España",
    "latitude": 41.721236,
    "longitude": 1.818616,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mns-031",
    "city": "manresa",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Manresa, España",
    "latitude": 41.735786,
    "longitude": 1.825393,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mns-032",
    "city": "manresa",
    "title": "Muralla 1",
    "address": "Muralla 1, Manresa, España",
    "latitude": 41.72863,
    "longitude": 1.82343,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "mns-033",
    "city": "manresa",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Manresa, España",
    "latitude": 41.723516,
    "longitude": 1.825959,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "mns-034",
    "city": "manresa",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Manresa, España",
    "latitude": 41.730293,
    "longitude": 1.820875,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "mns-035",
    "city": "manresa",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Manresa, España",
    "latitude": 41.72833,
    "longitude": 1.819378,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "mns-036",
    "city": "manresa",
    "title": "Museo local 1",
    "address": "Museo local 1, Manresa, España",
    "latitude": 41.730859,
    "longitude": 1.831614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "mns-037",
    "city": "manresa",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Manresa, España",
    "latitude": 41.725775,
    "longitude": 1.821219,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "mns-038",
    "city": "manresa",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Manresa, España",
    "latitude": 41.724278,
    "longitude": 1.81654,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "mns-039",
    "city": "manresa",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Manresa, España",
    "latitude": 41.736514,
    "longitude": 1.830379,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "mns-040",
    "city": "manresa",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Manresa, España",
    "latitude": 41.726119,
    "longitude": 1.823631,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trv-001",
    "city": "torrevieja",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Torrevieja, España",
    "latitude": 37.9825,
    "longitude": -0.682695,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trv-002",
    "city": "torrevieja",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Torrevieja, España",
    "latitude": 37.979464,
    "longitude": -0.684363,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trv-003",
    "city": "torrevieja",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Torrevieja, España",
    "latitude": 37.976345,
    "longitude": -0.676432,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trv-004",
    "city": "torrevieja",
    "title": "Catedral 1",
    "address": "Catedral 1, Torrevieja, España",
    "latitude": 37.977505,
    "longitude": -0.683861,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trv-005",
    "city": "torrevieja",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Torrevieja, España",
    "latitude": 37.975837,
    "longitude": -0.68914,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trv-006",
    "city": "torrevieja",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Torrevieja, España",
    "latitude": 37.983768,
    "longitude": -0.674281,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trv-007",
    "city": "torrevieja",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Torrevieja, España",
    "latitude": 37.976339,
    "longitude": -0.681657,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trv-008",
    "city": "torrevieja",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Torrevieja, España",
    "latitude": 37.97106,
    "longitude": -0.688924,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trv-009",
    "city": "torrevieja",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Torrevieja, España",
    "latitude": 37.985919,
    "longitude": -0.678433,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trv-010",
    "city": "torrevieja",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Torrevieja, España",
    "latitude": 37.978543,
    "longitude": -0.681216,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trv-011",
    "city": "torrevieja",
    "title": "Castillo 1",
    "address": "Castillo 1, Torrevieja, España",
    "latitude": 37.971276,
    "longitude": -0.682442,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trv-012",
    "city": "torrevieja",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Torrevieja, España",
    "latitude": 37.981767,
    "longitude": -0.683387,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trv-013",
    "city": "torrevieja",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Torrevieja, España",
    "latitude": 37.978984,
    "longitude": -0.685077,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trv-014",
    "city": "torrevieja",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Torrevieja, España",
    "latitude": 37.977758,
    "longitude": -0.675443,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trv-015",
    "city": "torrevieja",
    "title": "Estación central 1",
    "address": "Estación central 1, Torrevieja, España",
    "latitude": 37.976813,
    "longitude": -0.684074,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trv-016",
    "city": "torrevieja",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Torrevieja, España",
    "latitude": 37.975123,
    "longitude": -0.689292,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trv-017",
    "city": "torrevieja",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Torrevieja, España",
    "latitude": 37.984757,
    "longitude": -0.674398,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trv-018",
    "city": "torrevieja",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Torrevieja, España",
    "latitude": 37.976126,
    "longitude": -0.681764,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trv-019",
    "city": "torrevieja",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Torrevieja, España",
    "latitude": 37.970908,
    "longitude": -0.688024,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trv-020",
    "city": "torrevieja",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Torrevieja, España",
    "latitude": 37.985802,
    "longitude": -0.679275,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trv-021",
    "city": "torrevieja",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Torrevieja, España",
    "latitude": 37.978436,
    "longitude": -0.681699,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trv-022",
    "city": "torrevieja",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Torrevieja, España",
    "latitude": 37.972176,
    "longitude": -0.681026,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trv-023",
    "city": "torrevieja",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Torrevieja, España",
    "latitude": 37.980925,
    "longitude": -0.68407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trv-024",
    "city": "torrevieja",
    "title": "Basílica 1",
    "address": "Basílica 1, Torrevieja, España",
    "latitude": 37.978501,
    "longitude": -0.685701,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trv-025",
    "city": "torrevieja",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Torrevieja, España",
    "latitude": 37.979174,
    "longitude": -0.67462,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trv-026",
    "city": "torrevieja",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Torrevieja, España",
    "latitude": 37.97613,
    "longitude": -0.684251,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trv-027",
    "city": "torrevieja",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Torrevieja, España",
    "latitude": 37.974499,
    "longitude": -0.689264,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trv-028",
    "city": "torrevieja",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Torrevieja, España",
    "latitude": 37.98558,
    "longitude": -0.674714,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trv-029",
    "city": "torrevieja",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Torrevieja, España",
    "latitude": 37.975949,
    "longitude": -0.68187,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trv-030",
    "city": "torrevieja",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Torrevieja, España",
    "latitude": 37.970936,
    "longitude": -0.686984,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trv-031",
    "city": "torrevieja",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Torrevieja, España",
    "latitude": 37.985486,
    "longitude": -0.680207,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trv-032",
    "city": "torrevieja",
    "title": "Muralla 1",
    "address": "Muralla 1, Torrevieja, España",
    "latitude": 37.97833,
    "longitude": -0.68217,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "trv-033",
    "city": "torrevieja",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Torrevieja, España",
    "latitude": 37.973216,
    "longitude": -0.679641,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "trv-034",
    "city": "torrevieja",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Torrevieja, España",
    "latitude": 37.979993,
    "longitude": -0.684725,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "trv-035",
    "city": "torrevieja",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Torrevieja, España",
    "latitude": 37.97803,
    "longitude": -0.686222,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "trv-036",
    "city": "torrevieja",
    "title": "Museo local 1",
    "address": "Museo local 1, Torrevieja, España",
    "latitude": 37.980559,
    "longitude": -0.673986,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "trv-037",
    "city": "torrevieja",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Torrevieja, España",
    "latitude": 37.975475,
    "longitude": -0.684381,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "trv-038",
    "city": "torrevieja",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Torrevieja, España",
    "latitude": 37.973978,
    "longitude": -0.68906,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "trv-039",
    "city": "torrevieja",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Torrevieja, España",
    "latitude": 37.986214,
    "longitude": -0.675221,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "trv-040",
    "city": "torrevieja",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Torrevieja, España",
    "latitude": 37.975819,
    "longitude": -0.681969,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avl-001",
    "city": "salamanca-alt",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Aranjuez, España",
    "latitude": 40.0356,
    "longitude": -3.603795,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avl-002",
    "city": "salamanca-alt",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Aranjuez, España",
    "latitude": 40.032564,
    "longitude": -3.605463,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avl-003",
    "city": "salamanca-alt",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Aranjuez, España",
    "latitude": 40.029445,
    "longitude": -3.597532,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avl-004",
    "city": "salamanca-alt",
    "title": "Catedral 1",
    "address": "Catedral 1, Aranjuez, España",
    "latitude": 40.030605,
    "longitude": -3.604961,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avl-005",
    "city": "salamanca-alt",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Aranjuez, España",
    "latitude": 40.028937,
    "longitude": -3.61024,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avl-006",
    "city": "salamanca-alt",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Aranjuez, España",
    "latitude": 40.036868,
    "longitude": -3.595381,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avl-007",
    "city": "salamanca-alt",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Aranjuez, España",
    "latitude": 40.029439,
    "longitude": -3.602757,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avl-008",
    "city": "salamanca-alt",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Aranjuez, España",
    "latitude": 40.02416,
    "longitude": -3.610024,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avl-009",
    "city": "salamanca-alt",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Aranjuez, España",
    "latitude": 40.039019,
    "longitude": -3.599533,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avl-010",
    "city": "salamanca-alt",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Aranjuez, España",
    "latitude": 40.031643,
    "longitude": -3.602316,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avl-011",
    "city": "salamanca-alt",
    "title": "Castillo 1",
    "address": "Castillo 1, Aranjuez, España",
    "latitude": 40.024376,
    "longitude": -3.603542,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avl-012",
    "city": "salamanca-alt",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Aranjuez, España",
    "latitude": 40.034867,
    "longitude": -3.604487,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avl-013",
    "city": "salamanca-alt",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Aranjuez, España",
    "latitude": 40.032084,
    "longitude": -3.606177,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avl-014",
    "city": "salamanca-alt",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Aranjuez, España",
    "latitude": 40.030858,
    "longitude": -3.596543,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avl-015",
    "city": "salamanca-alt",
    "title": "Estación central 1",
    "address": "Estación central 1, Aranjuez, España",
    "latitude": 40.029913,
    "longitude": -3.605174,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avl-016",
    "city": "salamanca-alt",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Aranjuez, España",
    "latitude": 40.028223,
    "longitude": -3.610392,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avl-017",
    "city": "salamanca-alt",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Aranjuez, España",
    "latitude": 40.037857,
    "longitude": -3.595498,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avl-018",
    "city": "salamanca-alt",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Aranjuez, España",
    "latitude": 40.029226,
    "longitude": -3.602864,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avl-019",
    "city": "salamanca-alt",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Aranjuez, España",
    "latitude": 40.024008,
    "longitude": -3.609124,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avl-020",
    "city": "salamanca-alt",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Aranjuez, España",
    "latitude": 40.038902,
    "longitude": -3.600375,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avl-021",
    "city": "salamanca-alt",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Aranjuez, España",
    "latitude": 40.031536,
    "longitude": -3.602799,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avl-022",
    "city": "salamanca-alt",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Aranjuez, España",
    "latitude": 40.025276,
    "longitude": -3.602126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avl-023",
    "city": "salamanca-alt",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Aranjuez, España",
    "latitude": 40.034025,
    "longitude": -3.60517,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avl-024",
    "city": "salamanca-alt",
    "title": "Basílica 1",
    "address": "Basílica 1, Aranjuez, España",
    "latitude": 40.031601,
    "longitude": -3.606801,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avl-025",
    "city": "salamanca-alt",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Aranjuez, España",
    "latitude": 40.032274,
    "longitude": -3.59572,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avl-026",
    "city": "salamanca-alt",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Aranjuez, España",
    "latitude": 40.02923,
    "longitude": -3.605351,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avl-027",
    "city": "salamanca-alt",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Aranjuez, España",
    "latitude": 40.027599,
    "longitude": -3.610364,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avl-028",
    "city": "salamanca-alt",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Aranjuez, España",
    "latitude": 40.03868,
    "longitude": -3.595814,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avl-029",
    "city": "salamanca-alt",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Aranjuez, España",
    "latitude": 40.029049,
    "longitude": -3.60297,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avl-030",
    "city": "salamanca-alt",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Aranjuez, España",
    "latitude": 40.024036,
    "longitude": -3.608084,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avl-031",
    "city": "salamanca-alt",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Aranjuez, España",
    "latitude": 40.038586,
    "longitude": -3.601307,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avl-032",
    "city": "salamanca-alt",
    "title": "Muralla 1",
    "address": "Muralla 1, Aranjuez, España",
    "latitude": 40.03143,
    "longitude": -3.60327,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "avl-033",
    "city": "salamanca-alt",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Aranjuez, España",
    "latitude": 40.026316,
    "longitude": -3.600741,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "avl-034",
    "city": "salamanca-alt",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Aranjuez, España",
    "latitude": 40.033093,
    "longitude": -3.605825,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "avl-035",
    "city": "salamanca-alt",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Aranjuez, España",
    "latitude": 40.03113,
    "longitude": -3.607322,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "avl-036",
    "city": "salamanca-alt",
    "title": "Museo local 1",
    "address": "Museo local 1, Aranjuez, España",
    "latitude": 40.033659,
    "longitude": -3.595086,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "avl-037",
    "city": "salamanca-alt",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Aranjuez, España",
    "latitude": 40.028575,
    "longitude": -3.605481,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "avl-038",
    "city": "salamanca-alt",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Aranjuez, España",
    "latitude": 40.027078,
    "longitude": -3.61016,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "avl-039",
    "city": "salamanca-alt",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Aranjuez, España",
    "latitude": 40.039314,
    "longitude": -3.596321,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "avl-040",
    "city": "salamanca-alt",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Aranjuez, España",
    "latitude": 40.028919,
    "longitude": -3.603069,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "fng-001",
    "city": "fuengirola",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Fuengirola, España",
    "latitude": 36.5456,
    "longitude": -4.623495,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "fng-002",
    "city": "fuengirola",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Fuengirola, España",
    "latitude": 36.542564,
    "longitude": -4.625163,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "fng-003",
    "city": "fuengirola",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Fuengirola, España",
    "latitude": 36.539445,
    "longitude": -4.617232,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "fng-004",
    "city": "fuengirola",
    "title": "Catedral 1",
    "address": "Catedral 1, Fuengirola, España",
    "latitude": 36.540605,
    "longitude": -4.624661,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "fng-005",
    "city": "fuengirola",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Fuengirola, España",
    "latitude": 36.538937,
    "longitude": -4.62994,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "fng-006",
    "city": "fuengirola",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Fuengirola, España",
    "latitude": 36.546868,
    "longitude": -4.615081,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "fng-007",
    "city": "fuengirola",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Fuengirola, España",
    "latitude": 36.539439,
    "longitude": -4.622457,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "fng-008",
    "city": "fuengirola",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Fuengirola, España",
    "latitude": 36.53416,
    "longitude": -4.629724,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "fng-009",
    "city": "fuengirola",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Fuengirola, España",
    "latitude": 36.549019,
    "longitude": -4.619233,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "fng-010",
    "city": "fuengirola",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Fuengirola, España",
    "latitude": 36.541643,
    "longitude": -4.622016,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "fng-011",
    "city": "fuengirola",
    "title": "Castillo 1",
    "address": "Castillo 1, Fuengirola, España",
    "latitude": 36.534376,
    "longitude": -4.623242,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "fng-012",
    "city": "fuengirola",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Fuengirola, España",
    "latitude": 36.544867,
    "longitude": -4.624187,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "fng-013",
    "city": "fuengirola",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Fuengirola, España",
    "latitude": 36.542084,
    "longitude": -4.625877,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "fng-014",
    "city": "fuengirola",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Fuengirola, España",
    "latitude": 36.540858,
    "longitude": -4.616243,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "fng-015",
    "city": "fuengirola",
    "title": "Estación central 1",
    "address": "Estación central 1, Fuengirola, España",
    "latitude": 36.539913,
    "longitude": -4.624874,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "fng-016",
    "city": "fuengirola",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Fuengirola, España",
    "latitude": 36.538223,
    "longitude": -4.630092,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "fng-017",
    "city": "fuengirola",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Fuengirola, España",
    "latitude": 36.547857,
    "longitude": -4.615198,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "fng-018",
    "city": "fuengirola",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Fuengirola, España",
    "latitude": 36.539226,
    "longitude": -4.622564,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "fng-019",
    "city": "fuengirola",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Fuengirola, España",
    "latitude": 36.534008,
    "longitude": -4.628824,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "fng-020",
    "city": "fuengirola",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Fuengirola, España",
    "latitude": 36.548902,
    "longitude": -4.620075,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "fng-021",
    "city": "fuengirola",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Fuengirola, España",
    "latitude": 36.541536,
    "longitude": -4.622499,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "fng-022",
    "city": "fuengirola",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Fuengirola, España",
    "latitude": 36.535276,
    "longitude": -4.621826,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "fng-023",
    "city": "fuengirola",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Fuengirola, España",
    "latitude": 36.544025,
    "longitude": -4.62487,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "fng-024",
    "city": "fuengirola",
    "title": "Basílica 1",
    "address": "Basílica 1, Fuengirola, España",
    "latitude": 36.541601,
    "longitude": -4.626501,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "fng-025",
    "city": "fuengirola",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Fuengirola, España",
    "latitude": 36.542274,
    "longitude": -4.61542,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "fng-026",
    "city": "fuengirola",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Fuengirola, España",
    "latitude": 36.53923,
    "longitude": -4.625051,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "fng-027",
    "city": "fuengirola",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Fuengirola, España",
    "latitude": 36.537599,
    "longitude": -4.630064,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "fng-028",
    "city": "fuengirola",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Fuengirola, España",
    "latitude": 36.54868,
    "longitude": -4.615514,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "fng-029",
    "city": "fuengirola",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Fuengirola, España",
    "latitude": 36.539049,
    "longitude": -4.62267,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "fng-030",
    "city": "fuengirola",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Fuengirola, España",
    "latitude": 36.534036,
    "longitude": -4.627784,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "fng-031",
    "city": "fuengirola",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Fuengirola, España",
    "latitude": 36.548586,
    "longitude": -4.621007,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "fng-032",
    "city": "fuengirola",
    "title": "Muralla 1",
    "address": "Muralla 1, Fuengirola, España",
    "latitude": 36.54143,
    "longitude": -4.62297,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "fng-033",
    "city": "fuengirola",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Fuengirola, España",
    "latitude": 36.536316,
    "longitude": -4.620441,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "fng-034",
    "city": "fuengirola",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Fuengirola, España",
    "latitude": 36.543093,
    "longitude": -4.625525,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "fng-035",
    "city": "fuengirola",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Fuengirola, España",
    "latitude": 36.54113,
    "longitude": -4.627022,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "fng-036",
    "city": "fuengirola",
    "title": "Museo local 1",
    "address": "Museo local 1, Fuengirola, España",
    "latitude": 36.543659,
    "longitude": -4.614786,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "fng-037",
    "city": "fuengirola",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Fuengirola, España",
    "latitude": 36.538575,
    "longitude": -4.625181,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "fng-038",
    "city": "fuengirola",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Fuengirola, España",
    "latitude": 36.537078,
    "longitude": -4.62986,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "fng-039",
    "city": "fuengirola",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Fuengirola, España",
    "latitude": 36.549314,
    "longitude": -4.616021,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "fng-040",
    "city": "fuengirola",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Fuengirola, España",
    "latitude": 36.538919,
    "longitude": -4.622769,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "stg-001",
    "city": "sitges",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Sitges, España",
    "latitude": 41.2416,
    "longitude": 1.805405,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "stg-002",
    "city": "sitges",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Sitges, España",
    "latitude": 41.238564,
    "longitude": 1.803737,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "stg-003",
    "city": "sitges",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Sitges, España",
    "latitude": 41.235445,
    "longitude": 1.811668,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "stg-004",
    "city": "sitges",
    "title": "Catedral 1",
    "address": "Catedral 1, Sitges, España",
    "latitude": 41.236605,
    "longitude": 1.804239,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "stg-005",
    "city": "sitges",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Sitges, España",
    "latitude": 41.234937,
    "longitude": 1.79896,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "stg-006",
    "city": "sitges",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Sitges, España",
    "latitude": 41.242868,
    "longitude": 1.813819,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "stg-007",
    "city": "sitges",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Sitges, España",
    "latitude": 41.235439,
    "longitude": 1.806443,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "stg-008",
    "city": "sitges",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Sitges, España",
    "latitude": 41.23016,
    "longitude": 1.799176,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "stg-009",
    "city": "sitges",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Sitges, España",
    "latitude": 41.245019,
    "longitude": 1.809667,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "stg-010",
    "city": "sitges",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Sitges, España",
    "latitude": 41.237643,
    "longitude": 1.806884,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "stg-011",
    "city": "sitges",
    "title": "Castillo 1",
    "address": "Castillo 1, Sitges, España",
    "latitude": 41.230376,
    "longitude": 1.805658,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "stg-012",
    "city": "sitges",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Sitges, España",
    "latitude": 41.240867,
    "longitude": 1.804713,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "stg-013",
    "city": "sitges",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Sitges, España",
    "latitude": 41.238084,
    "longitude": 1.803023,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "stg-014",
    "city": "sitges",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Sitges, España",
    "latitude": 41.236858,
    "longitude": 1.812657,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "stg-015",
    "city": "sitges",
    "title": "Estación central 1",
    "address": "Estación central 1, Sitges, España",
    "latitude": 41.235913,
    "longitude": 1.804026,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "stg-016",
    "city": "sitges",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Sitges, España",
    "latitude": 41.234223,
    "longitude": 1.798808,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "stg-017",
    "city": "sitges",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Sitges, España",
    "latitude": 41.243857,
    "longitude": 1.813702,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "stg-018",
    "city": "sitges",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Sitges, España",
    "latitude": 41.235226,
    "longitude": 1.806336,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "stg-019",
    "city": "sitges",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Sitges, España",
    "latitude": 41.230008,
    "longitude": 1.800076,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "stg-020",
    "city": "sitges",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Sitges, España",
    "latitude": 41.244902,
    "longitude": 1.808825,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "stg-021",
    "city": "sitges",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Sitges, España",
    "latitude": 41.237536,
    "longitude": 1.806401,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "stg-022",
    "city": "sitges",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Sitges, España",
    "latitude": 41.231276,
    "longitude": 1.807074,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "stg-023",
    "city": "sitges",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Sitges, España",
    "latitude": 41.240025,
    "longitude": 1.80403,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "stg-024",
    "city": "sitges",
    "title": "Basílica 1",
    "address": "Basílica 1, Sitges, España",
    "latitude": 41.237601,
    "longitude": 1.802399,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "stg-025",
    "city": "sitges",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Sitges, España",
    "latitude": 41.238274,
    "longitude": 1.81348,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "stg-026",
    "city": "sitges",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Sitges, España",
    "latitude": 41.23523,
    "longitude": 1.803849,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "stg-027",
    "city": "sitges",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Sitges, España",
    "latitude": 41.233599,
    "longitude": 1.798836,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "stg-028",
    "city": "sitges",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Sitges, España",
    "latitude": 41.24468,
    "longitude": 1.813386,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "stg-029",
    "city": "sitges",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Sitges, España",
    "latitude": 41.235049,
    "longitude": 1.80623,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "stg-030",
    "city": "sitges",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Sitges, España",
    "latitude": 41.230036,
    "longitude": 1.801116,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "stg-031",
    "city": "sitges",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Sitges, España",
    "latitude": 41.244586,
    "longitude": 1.807893,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "stg-032",
    "city": "sitges",
    "title": "Muralla 1",
    "address": "Muralla 1, Sitges, España",
    "latitude": 41.23743,
    "longitude": 1.80593,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "stg-033",
    "city": "sitges",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Sitges, España",
    "latitude": 41.232316,
    "longitude": 1.808459,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "stg-034",
    "city": "sitges",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Sitges, España",
    "latitude": 41.239093,
    "longitude": 1.803375,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "stg-035",
    "city": "sitges",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Sitges, España",
    "latitude": 41.23713,
    "longitude": 1.801878,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "stg-036",
    "city": "sitges",
    "title": "Museo local 1",
    "address": "Museo local 1, Sitges, España",
    "latitude": 41.239659,
    "longitude": 1.814114,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "stg-037",
    "city": "sitges",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Sitges, España",
    "latitude": 41.234575,
    "longitude": 1.803719,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "stg-038",
    "city": "sitges",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Sitges, España",
    "latitude": 41.233078,
    "longitude": 1.79904,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "stg-039",
    "city": "sitges",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Sitges, España",
    "latitude": 41.245314,
    "longitude": 1.812879,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "stg-040",
    "city": "sitges",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Sitges, España",
    "latitude": 41.234919,
    "longitude": 1.806131,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lln-001",
    "city": "llanes",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Llanes, España",
    "latitude": 43.4267,
    "longitude": -4.754895,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lln-002",
    "city": "llanes",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Llanes, España",
    "latitude": 43.423664,
    "longitude": -4.756563,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lln-003",
    "city": "llanes",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Llanes, España",
    "latitude": 43.420545,
    "longitude": -4.748632,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lln-004",
    "city": "llanes",
    "title": "Catedral 1",
    "address": "Catedral 1, Llanes, España",
    "latitude": 43.421705,
    "longitude": -4.756061,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lln-005",
    "city": "llanes",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Llanes, España",
    "latitude": 43.420037,
    "longitude": -4.76134,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lln-006",
    "city": "llanes",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Llanes, España",
    "latitude": 43.427968,
    "longitude": -4.746481,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lln-007",
    "city": "llanes",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Llanes, España",
    "latitude": 43.420539,
    "longitude": -4.753857,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lln-008",
    "city": "llanes",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Llanes, España",
    "latitude": 43.41526,
    "longitude": -4.761124,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lln-009",
    "city": "llanes",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Llanes, España",
    "latitude": 43.430119,
    "longitude": -4.750633,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lln-010",
    "city": "llanes",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Llanes, España",
    "latitude": 43.422743,
    "longitude": -4.753416,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lln-011",
    "city": "llanes",
    "title": "Castillo 1",
    "address": "Castillo 1, Llanes, España",
    "latitude": 43.415476,
    "longitude": -4.754642,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lln-012",
    "city": "llanes",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Llanes, España",
    "latitude": 43.425967,
    "longitude": -4.755587,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lln-013",
    "city": "llanes",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Llanes, España",
    "latitude": 43.423184,
    "longitude": -4.757277,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lln-014",
    "city": "llanes",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Llanes, España",
    "latitude": 43.421958,
    "longitude": -4.747643,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lln-015",
    "city": "llanes",
    "title": "Estación central 1",
    "address": "Estación central 1, Llanes, España",
    "latitude": 43.421013,
    "longitude": -4.756274,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lln-016",
    "city": "llanes",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Llanes, España",
    "latitude": 43.419323,
    "longitude": -4.761492,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lln-017",
    "city": "llanes",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Llanes, España",
    "latitude": 43.428957,
    "longitude": -4.746598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lln-018",
    "city": "llanes",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Llanes, España",
    "latitude": 43.420326,
    "longitude": -4.753964,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lln-019",
    "city": "llanes",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Llanes, España",
    "latitude": 43.415108,
    "longitude": -4.760224,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lln-020",
    "city": "llanes",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Llanes, España",
    "latitude": 43.430002,
    "longitude": -4.751475,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lln-021",
    "city": "llanes",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Llanes, España",
    "latitude": 43.422636,
    "longitude": -4.753899,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lln-022",
    "city": "llanes",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Llanes, España",
    "latitude": 43.416376,
    "longitude": -4.753226,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lln-023",
    "city": "llanes",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Llanes, España",
    "latitude": 43.425125,
    "longitude": -4.75627,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lln-024",
    "city": "llanes",
    "title": "Basílica 1",
    "address": "Basílica 1, Llanes, España",
    "latitude": 43.422701,
    "longitude": -4.757901,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lln-025",
    "city": "llanes",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Llanes, España",
    "latitude": 43.423374,
    "longitude": -4.74682,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lln-026",
    "city": "llanes",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Llanes, España",
    "latitude": 43.42033,
    "longitude": -4.756451,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lln-027",
    "city": "llanes",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Llanes, España",
    "latitude": 43.418699,
    "longitude": -4.761464,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lln-028",
    "city": "llanes",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Llanes, España",
    "latitude": 43.42978,
    "longitude": -4.746914,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lln-029",
    "city": "llanes",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Llanes, España",
    "latitude": 43.420149,
    "longitude": -4.75407,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lln-030",
    "city": "llanes",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Llanes, España",
    "latitude": 43.415136,
    "longitude": -4.759184,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lln-031",
    "city": "llanes",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Llanes, España",
    "latitude": 43.429686,
    "longitude": -4.752407,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lln-032",
    "city": "llanes",
    "title": "Muralla 1",
    "address": "Muralla 1, Llanes, España",
    "latitude": 43.42253,
    "longitude": -4.75437,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "lln-033",
    "city": "llanes",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Llanes, España",
    "latitude": 43.417416,
    "longitude": -4.751841,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "lln-034",
    "city": "llanes",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Llanes, España",
    "latitude": 43.424193,
    "longitude": -4.756925,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "lln-035",
    "city": "llanes",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Llanes, España",
    "latitude": 43.42223,
    "longitude": -4.758422,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "lln-036",
    "city": "llanes",
    "title": "Museo local 1",
    "address": "Museo local 1, Llanes, España",
    "latitude": 43.424759,
    "longitude": -4.746186,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "lln-037",
    "city": "llanes",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Llanes, España",
    "latitude": 43.419675,
    "longitude": -4.756581,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "lln-038",
    "city": "llanes",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Llanes, España",
    "latitude": 43.418178,
    "longitude": -4.76126,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "lln-039",
    "city": "llanes",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Llanes, España",
    "latitude": 43.430414,
    "longitude": -4.747421,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "lln-040",
    "city": "llanes",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Llanes, España",
    "latitude": 43.420019,
    "longitude": -4.754169,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vjr-001",
    "city": "vejer",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Vejer de la Frontera, España",
    "latitude": 36.2567,
    "longitude": -5.966995,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vjr-002",
    "city": "vejer",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Vejer de la Frontera, España",
    "latitude": 36.253664,
    "longitude": -5.968663,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vjr-003",
    "city": "vejer",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Vejer de la Frontera, España",
    "latitude": 36.250545,
    "longitude": -5.960732,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vjr-004",
    "city": "vejer",
    "title": "Catedral 1",
    "address": "Catedral 1, Vejer de la Frontera, España",
    "latitude": 36.251705,
    "longitude": -5.968161,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vjr-005",
    "city": "vejer",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Vejer de la Frontera, España",
    "latitude": 36.250037,
    "longitude": -5.97344,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vjr-006",
    "city": "vejer",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Vejer de la Frontera, España",
    "latitude": 36.257968,
    "longitude": -5.958581,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vjr-007",
    "city": "vejer",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Vejer de la Frontera, España",
    "latitude": 36.250539,
    "longitude": -5.965957,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vjr-008",
    "city": "vejer",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Vejer de la Frontera, España",
    "latitude": 36.24526,
    "longitude": -5.973224,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vjr-009",
    "city": "vejer",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Vejer de la Frontera, España",
    "latitude": 36.260119,
    "longitude": -5.962733,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vjr-010",
    "city": "vejer",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Vejer de la Frontera, España",
    "latitude": 36.252743,
    "longitude": -5.965516,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vjr-011",
    "city": "vejer",
    "title": "Castillo 1",
    "address": "Castillo 1, Vejer de la Frontera, España",
    "latitude": 36.245476,
    "longitude": -5.966742,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vjr-012",
    "city": "vejer",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Vejer de la Frontera, España",
    "latitude": 36.255967,
    "longitude": -5.967687,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vjr-013",
    "city": "vejer",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Vejer de la Frontera, España",
    "latitude": 36.253184,
    "longitude": -5.969377,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vjr-014",
    "city": "vejer",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Vejer de la Frontera, España",
    "latitude": 36.251958,
    "longitude": -5.959743,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vjr-015",
    "city": "vejer",
    "title": "Estación central 1",
    "address": "Estación central 1, Vejer de la Frontera, España",
    "latitude": 36.251013,
    "longitude": -5.968374,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vjr-016",
    "city": "vejer",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Vejer de la Frontera, España",
    "latitude": 36.249323,
    "longitude": -5.973592,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vjr-017",
    "city": "vejer",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Vejer de la Frontera, España",
    "latitude": 36.258957,
    "longitude": -5.958698,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vjr-018",
    "city": "vejer",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Vejer de la Frontera, España",
    "latitude": 36.250326,
    "longitude": -5.966064,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vjr-019",
    "city": "vejer",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Vejer de la Frontera, España",
    "latitude": 36.245108,
    "longitude": -5.972324,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vjr-020",
    "city": "vejer",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Vejer de la Frontera, España",
    "latitude": 36.260002,
    "longitude": -5.963575,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vjr-021",
    "city": "vejer",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Vejer de la Frontera, España",
    "latitude": 36.252636,
    "longitude": -5.965999,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vjr-022",
    "city": "vejer",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Vejer de la Frontera, España",
    "latitude": 36.246376,
    "longitude": -5.965326,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vjr-023",
    "city": "vejer",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Vejer de la Frontera, España",
    "latitude": 36.255125,
    "longitude": -5.96837,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vjr-024",
    "city": "vejer",
    "title": "Basílica 1",
    "address": "Basílica 1, Vejer de la Frontera, España",
    "latitude": 36.252701,
    "longitude": -5.970001,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vjr-025",
    "city": "vejer",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Vejer de la Frontera, España",
    "latitude": 36.253374,
    "longitude": -5.95892,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vjr-026",
    "city": "vejer",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Vejer de la Frontera, España",
    "latitude": 36.25033,
    "longitude": -5.968551,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vjr-027",
    "city": "vejer",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Vejer de la Frontera, España",
    "latitude": 36.248699,
    "longitude": -5.973564,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vjr-028",
    "city": "vejer",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Vejer de la Frontera, España",
    "latitude": 36.25978,
    "longitude": -5.959014,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vjr-029",
    "city": "vejer",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Vejer de la Frontera, España",
    "latitude": 36.250149,
    "longitude": -5.96617,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vjr-030",
    "city": "vejer",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Vejer de la Frontera, España",
    "latitude": 36.245136,
    "longitude": -5.971284,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vjr-031",
    "city": "vejer",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Vejer de la Frontera, España",
    "latitude": 36.259686,
    "longitude": -5.964507,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vjr-032",
    "city": "vejer",
    "title": "Muralla 1",
    "address": "Muralla 1, Vejer de la Frontera, España",
    "latitude": 36.25253,
    "longitude": -5.96647,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "vjr-033",
    "city": "vejer",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Vejer de la Frontera, España",
    "latitude": 36.247416,
    "longitude": -5.963941,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "vjr-034",
    "city": "vejer",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Vejer de la Frontera, España",
    "latitude": 36.254193,
    "longitude": -5.969025,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "vjr-035",
    "city": "vejer",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Vejer de la Frontera, España",
    "latitude": 36.25223,
    "longitude": -5.970522,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "vjr-036",
    "city": "vejer",
    "title": "Museo local 1",
    "address": "Museo local 1, Vejer de la Frontera, España",
    "latitude": 36.254759,
    "longitude": -5.958286,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "vjr-037",
    "city": "vejer",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Vejer de la Frontera, España",
    "latitude": 36.249675,
    "longitude": -5.968681,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "vjr-038",
    "city": "vejer",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Vejer de la Frontera, España",
    "latitude": 36.248178,
    "longitude": -5.97336,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "vjr-039",
    "city": "vejer",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Vejer de la Frontera, España",
    "latitude": 36.260414,
    "longitude": -5.959521,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "vjr-040",
    "city": "vejer",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Vejer de la Frontera, España",
    "latitude": 36.250019,
    "longitude": -5.966269,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdq-001",
    "city": "cadaques",
    "title": "Centro histórico 1",
    "address": "Centro histórico 1, Cadaqués, España",
    "latitude": 42.2927,
    "longitude": 3.277905,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdq-002",
    "city": "cadaques",
    "title": "Plaza Mayor 1",
    "address": "Plaza Mayor 1, Cadaqués, España",
    "latitude": 42.289664,
    "longitude": 3.276237,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdq-003",
    "city": "cadaques",
    "title": "Mercado Central 1",
    "address": "Mercado Central 1, Cadaqués, España",
    "latitude": 42.286545,
    "longitude": 3.284168,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdq-004",
    "city": "cadaques",
    "title": "Catedral 1",
    "address": "Catedral 1, Cadaqués, España",
    "latitude": 42.287705,
    "longitude": 3.276739,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdq-005",
    "city": "cadaques",
    "title": "Museo de Bellas Artes 1",
    "address": "Museo de Bellas Artes 1, Cadaqués, España",
    "latitude": 42.286037,
    "longitude": 3.27146,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdq-006",
    "city": "cadaques",
    "title": "Museo Arqueológico 1",
    "address": "Museo Arqueológico 1, Cadaqués, España",
    "latitude": 42.293968,
    "longitude": 3.286319,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdq-007",
    "city": "cadaques",
    "title": "Mirador principal 1",
    "address": "Mirador principal 1, Cadaqués, España",
    "latitude": 42.286539,
    "longitude": 3.278943,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdq-008",
    "city": "cadaques",
    "title": "Parque urbano 1",
    "address": "Parque urbano 1, Cadaqués, España",
    "latitude": 42.28126,
    "longitude": 3.271676,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdq-009",
    "city": "cadaques",
    "title": "Paseo marítimo 1",
    "address": "Paseo marítimo 1, Cadaqués, España",
    "latitude": 42.296119,
    "longitude": 3.282167,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdq-010",
    "city": "cadaques",
    "title": "Barrio antiguo 1",
    "address": "Barrio antiguo 1, Cadaqués, España",
    "latitude": 42.288743,
    "longitude": 3.279384,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdq-011",
    "city": "cadaques",
    "title": "Castillo 1",
    "address": "Castillo 1, Cadaqués, España",
    "latitude": 42.281476,
    "longitude": 3.278158,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdq-012",
    "city": "cadaques",
    "title": "Puerta monumental 1",
    "address": "Puerta monumental 1, Cadaqués, España",
    "latitude": 42.291967,
    "longitude": 3.277213,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdq-013",
    "city": "cadaques",
    "title": "Ayuntamiento 1",
    "address": "Ayuntamiento 1, Cadaqués, España",
    "latitude": 42.289184,
    "longitude": 3.275523,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdq-014",
    "city": "cadaques",
    "title": "Jardín botánico 1",
    "address": "Jardín botánico 1, Cadaqués, España",
    "latitude": 42.287958,
    "longitude": 3.285157,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdq-015",
    "city": "cadaques",
    "title": "Estación central 1",
    "address": "Estación central 1, Cadaqués, España",
    "latitude": 42.287013,
    "longitude": 3.276526,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdq-016",
    "city": "cadaques",
    "title": "Teatro principal 1",
    "address": "Teatro principal 1, Cadaqués, España",
    "latitude": 42.285323,
    "longitude": 3.271308,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdq-017",
    "city": "cadaques",
    "title": "Auditorio 1",
    "address": "Auditorio 1, Cadaqués, España",
    "latitude": 42.294957,
    "longitude": 3.286202,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdq-018",
    "city": "cadaques",
    "title": "Museo de Ciencia 1",
    "address": "Museo de Ciencia 1, Cadaqués, España",
    "latitude": 42.286326,
    "longitude": 3.278836,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdq-019",
    "city": "cadaques",
    "title": "Zona de tapas 1",
    "address": "Zona de tapas 1, Cadaqués, España",
    "latitude": 42.281108,
    "longitude": 3.272576,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdq-020",
    "city": "cadaques",
    "title": "Barrio creativo 1",
    "address": "Barrio creativo 1, Cadaqués, España",
    "latitude": 42.296002,
    "longitude": 3.281325,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdq-021",
    "city": "cadaques",
    "title": "Paseo del río 1",
    "address": "Paseo del río 1, Cadaqués, España",
    "latitude": 42.288636,
    "longitude": 3.278901,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdq-022",
    "city": "cadaques",
    "title": "Puerto deportivo 1",
    "address": "Puerto deportivo 1, Cadaqués, España",
    "latitude": 42.282376,
    "longitude": 3.279574,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdq-023",
    "city": "cadaques",
    "title": "Playa urbana 1",
    "address": "Playa urbana 1, Cadaqués, España",
    "latitude": 42.291125,
    "longitude": 3.27653,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdq-024",
    "city": "cadaques",
    "title": "Basílica 1",
    "address": "Basílica 1, Cadaqués, España",
    "latitude": 42.288701,
    "longitude": 3.274899,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdq-025",
    "city": "cadaques",
    "title": "Centro de arte contemporáneo 1",
    "address": "Centro de arte contemporáneo 1, Cadaqués, España",
    "latitude": 42.289374,
    "longitude": 3.28598,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdq-026",
    "city": "cadaques",
    "title": "Palacio histórico 1",
    "address": "Palacio histórico 1, Cadaqués, España",
    "latitude": 42.28633,
    "longitude": 3.276349,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdq-027",
    "city": "cadaques",
    "title": "Monasterio 1",
    "address": "Monasterio 1, Cadaqués, España",
    "latitude": 42.284699,
    "longitude": 3.271336,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdq-028",
    "city": "cadaques",
    "title": "Mercado gastronómico 1",
    "address": "Mercado gastronómico 1, Cadaqués, España",
    "latitude": 42.29578,
    "longitude": 3.285886,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdq-029",
    "city": "cadaques",
    "title": "Mirador del atardecer 1",
    "address": "Mirador del atardecer 1, Cadaqués, España",
    "latitude": 42.286149,
    "longitude": 3.27873,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdq-030",
    "city": "cadaques",
    "title": "Parque natural cercano 1",
    "address": "Parque natural cercano 1, Cadaqués, España",
    "latitude": 42.281136,
    "longitude": 3.273616,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdq-031",
    "city": "cadaques",
    "title": "Acueducto histórico 1",
    "address": "Acueducto histórico 1, Cadaqués, España",
    "latitude": 42.295686,
    "longitude": 3.280393,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdq-032",
    "city": "cadaques",
    "title": "Muralla 1",
    "address": "Muralla 1, Cadaqués, España",
    "latitude": 42.28853,
    "longitude": 3.27843,
    "tags": [
      "playa",
      "barrio"
    ]
  },
  {
    "id": "cdq-033",
    "city": "cadaques",
    "title": "Plaza de toros histórica 1",
    "address": "Plaza de toros histórica 1, Cadaqués, España",
    "latitude": 42.283416,
    "longitude": 3.280959,
    "tags": [
      "cultura",
      "mirador"
    ]
  },
  {
    "id": "cdq-034",
    "city": "cadaques",
    "title": "Avenida principal 1",
    "address": "Avenida principal 1, Cadaqués, España",
    "latitude": 42.290193,
    "longitude": 3.275875,
    "tags": [
      "gastronomía",
      "naturaleza"
    ]
  },
  {
    "id": "cdq-035",
    "city": "cadaques",
    "title": "Rincón fotográfico 1",
    "address": "Rincón fotográfico 1, Cadaqués, España",
    "latitude": 42.28823,
    "longitude": 3.274378,
    "tags": [
      "barrio",
      "historia"
    ]
  },
  {
    "id": "cdq-036",
    "city": "cadaques",
    "title": "Museo local 1",
    "address": "Museo local 1, Cadaqués, España",
    "latitude": 42.290759,
    "longitude": 3.286614,
    "tags": [
      "mirador",
      "arte"
    ]
  },
  {
    "id": "cdq-037",
    "city": "cadaques",
    "title": "Plaza de la Constitución 1",
    "address": "Plaza de la Constitución 1, Cadaqués, España",
    "latitude": 42.285675,
    "longitude": 3.276219,
    "tags": [
      "naturaleza",
      "playa"
    ]
  },
  {
    "id": "cdq-038",
    "city": "cadaques",
    "title": "Jardines históricos 1",
    "address": "Jardines históricos 1, Cadaqués, España",
    "latitude": 42.284178,
    "longitude": 3.27154,
    "tags": [
      "historia",
      "cultura"
    ]
  },
  {
    "id": "cdq-039",
    "city": "cadaques",
    "title": "Ruta modernista 1",
    "address": "Ruta modernista 1, Cadaqués, España",
    "latitude": 42.296414,
    "longitude": 3.285379,
    "tags": [
      "arte",
      "gastronomía"
    ]
  },
  {
    "id": "cdq-040",
    "city": "cadaques",
    "title": "Mirador panorámico 1",
    "address": "Mirador panorámico 1, Cadaqués, España",
    "latitude": 42.286019,
    "longitude": 3.278631,
    "tags": [
      "playa",
      "barrio"
    ]
  }
];
