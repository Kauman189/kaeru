export type DemoCity = {
  key: "madrid" | "barcelona" | "valencia";
  label: string;
  latitude: number;
  longitude: number;
  aliases: string[];
};

export type DemoPlace = {
  id: string;
  city: DemoCity["key"];
  title: string;
  address: string;
  latitude: number;
  longitude: number;
  tags?: string[];
};

export const DEMO_CITIES: DemoCity[] = [
  {
    key: "madrid",
    label: "Madrid, España",
    latitude: 40.4168,
    longitude: -3.7038,
    aliases: ["madrid", "mad"],
  },
  {
    key: "barcelona",
    label: "Barcelona, España",
    latitude: 41.3874,
    longitude: 2.1686,
    aliases: ["barcelona", "bcn"],
  },
  {
    key: "valencia",
    label: "Valencia, España",
    latitude: 39.4699,
    longitude: -0.3763,
    aliases: ["valencia", "vlc"],
  },
];

export const DEMO_PLACES: DemoPlace[] = [
  { id: "mad-001", city: "madrid", title: "Puerta del Sol", address: "Puerta del Sol, Madrid", latitude: 40.4169, longitude: -3.7035 },
  { id: "mad-002", city: "madrid", title: "Plaza Mayor", address: "Plaza Mayor, Madrid", latitude: 40.4155, longitude: -3.7074 },
  { id: "mad-003", city: "madrid", title: "Gran Vía", address: "Gran Vía, Madrid", latitude: 40.4202, longitude: -3.7058 },
  { id: "mad-004", city: "madrid", title: "Palacio Real", address: "Calle de Bailén, Madrid", latitude: 40.4179, longitude: -3.7143 },
  { id: "mad-005", city: "madrid", title: "Templo de Debod", address: "Calle Ferraz, Madrid", latitude: 40.4240, longitude: -3.7187 },
  { id: "mad-006", city: "madrid", title: "Parque del Retiro", address: "Plaza de la Independencia, Madrid", latitude: 40.4153, longitude: -3.6844 },
  { id: "mad-007", city: "madrid", title: "Museo del Prado", address: "Paseo del Prado, Madrid", latitude: 40.4138, longitude: -3.6921 },
  { id: "mad-008", city: "madrid", title: "Museo Reina Sofía", address: "Calle Santa Isabel, Madrid", latitude: 40.4087, longitude: -3.6946 },
  { id: "mad-009", city: "madrid", title: "Museo Thyssen", address: "Paseo del Prado, Madrid", latitude: 40.4160, longitude: -3.6945 },
  { id: "mad-010", city: "madrid", title: "Mercado de San Miguel", address: "Plaza de San Miguel, Madrid", latitude: 40.4154, longitude: -3.7092 },
  { id: "mad-011", city: "madrid", title: "Santiago Bernabéu", address: "Av. de Concha Espina, Madrid", latitude: 40.4531, longitude: -3.6883 },
  { id: "mad-012", city: "madrid", title: "Plaza de Cibeles", address: "Plaza de Cibeles, Madrid", latitude: 40.4193, longitude: -3.6931 },
  { id: "mad-013", city: "madrid", title: "Puerta de Alcalá", address: "Plaza de la Independencia, Madrid", latitude: 40.4199, longitude: -3.6887 },
  { id: "mad-014", city: "madrid", title: "Atocha", address: "Plaza del Emperador Carlos V, Madrid", latitude: 40.4066, longitude: -3.6900 },
  { id: "mad-015", city: "madrid", title: "Lavapiés", address: "Lavapiés, Madrid", latitude: 40.4082, longitude: -3.7002 },
  { id: "mad-016", city: "madrid", title: "Malasaña", address: "Malasaña, Madrid", latitude: 40.4258, longitude: -3.7033 },
  { id: "mad-017", city: "madrid", title: "Chueca", address: "Chueca, Madrid", latitude: 40.4222, longitude: -3.6971 },
  { id: "mad-018", city: "madrid", title: "Matadero Madrid", address: "Plaza de Legazpi, Madrid", latitude: 40.3924, longitude: -3.6972 },
  { id: "mad-019", city: "madrid", title: "Casa de Campo", address: "Casa de Campo, Madrid", latitude: 40.4146, longitude: -3.7523 },
  { id: "mad-020", city: "madrid", title: "Madrid Río", address: "Madrid Río, Madrid", latitude: 40.4047, longitude: -3.7237 },
  { id: "mad-021", city: "madrid", title: "El Rastro", address: "Calle de la Ribera de Curtidores, Madrid", latitude: 40.4079, longitude: -3.7076 },
  { id: "mad-022", city: "madrid", title: "Círculo de Bellas Artes", address: "Calle de Alcalá, Madrid", latitude: 40.4184, longitude: -3.6970 },
  { id: "mad-023", city: "madrid", title: "CaixaForum", address: "Paseo del Prado, Madrid", latitude: 40.4105, longitude: -3.6938 },
  { id: "mad-024", city: "madrid", title: "Jardín Botánico", address: "Plaza de Murillo, Madrid", latitude: 40.4113, longitude: -3.6920 },
  { id: "mad-025", city: "madrid", title: "Las Ventas", address: "Calle de Alcalá, Madrid", latitude: 40.4315, longitude: -3.6635 },
  { id: "mad-026", city: "madrid", title: "Teleférico de Madrid", address: "Paseo del Pintor Rosales, Madrid", latitude: 40.4227, longitude: -3.7256 },
  { id: "mad-027", city: "madrid", title: "Moncloa", address: "Intercambiador de Moncloa, Madrid", latitude: 40.4341, longitude: -3.7198 },
  { id: "mad-028", city: "madrid", title: "Plaza de España", address: "Plaza de España, Madrid", latitude: 40.4237, longitude: -3.7123 },
  { id: "mad-029", city: "madrid", title: "Palacio de Cristal", address: "Parque del Retiro, Madrid", latitude: 40.4125, longitude: -3.6820 },
  { id: "mad-030", city: "madrid", title: "Barrio de Salamanca", address: "Barrio de Salamanca, Madrid", latitude: 40.4302, longitude: -3.6860 },

  { id: "bcn-001", city: "barcelona", title: "Sagrada Familia", address: "Carrer de Mallorca, Barcelona", latitude: 41.4036, longitude: 2.1744 },
  { id: "bcn-002", city: "barcelona", title: "Park Güell", address: "Carrer d'Olot, Barcelona", latitude: 41.4145, longitude: 2.1527 },
  { id: "bcn-003", city: "barcelona", title: "Casa Batlló", address: "Passeig de Gràcia, Barcelona", latitude: 41.3916, longitude: 2.1648 },
  { id: "bcn-004", city: "barcelona", title: "La Pedrera", address: "Passeig de Gràcia, Barcelona", latitude: 41.3954, longitude: 2.1619 },
  { id: "bcn-005", city: "barcelona", title: "La Rambla", address: "La Rambla, Barcelona", latitude: 41.3809, longitude: 2.1730 },
  { id: "bcn-006", city: "barcelona", title: "Mercado de la Boquería", address: "La Rambla, Barcelona", latitude: 41.3817, longitude: 2.1722 },
  { id: "bcn-007", city: "barcelona", title: "Barrio Gótico", address: "Barri Gòtic, Barcelona", latitude: 41.3839, longitude: 2.1763 },
  { id: "bcn-008", city: "barcelona", title: "Catedral de Barcelona", address: "Pla de la Seu, Barcelona", latitude: 41.3839, longitude: 2.1762 },
  { id: "bcn-009", city: "barcelona", title: "Palau de la Música", address: "Carrer del Palau de la Música, Barcelona", latitude: 41.3876, longitude: 2.1749 },
  { id: "bcn-010", city: "barcelona", title: "Arco de Triunfo", address: "Passeig de Lluís Companys, Barcelona", latitude: 41.3910, longitude: 2.1802 },
  { id: "bcn-011", city: "barcelona", title: "Parc de la Ciutadella", address: "Passeig de Picasso, Barcelona", latitude: 41.3882, longitude: 2.1870 },
  { id: "bcn-012", city: "barcelona", title: "Barceloneta", address: "Platja de la Barceloneta", latitude: 41.3783, longitude: 2.1925 },
  { id: "bcn-013", city: "barcelona", title: "Port Olímpic", address: "Port Olímpic, Barcelona", latitude: 41.3892, longitude: 2.1994 },
  { id: "bcn-014", city: "barcelona", title: "Montjuïc", address: "Montjuïc, Barcelona", latitude: 41.3634, longitude: 2.1588 },
  { id: "bcn-015", city: "barcelona", title: "MNAC", address: "Palau Nacional, Barcelona", latitude: 41.3686, longitude: 2.1537 },
  { id: "bcn-016", city: "barcelona", title: "Poble Espanyol", address: "Av. Francesc Ferrer i Guàrdia, Barcelona", latitude: 41.3681, longitude: 2.1479 },
  { id: "bcn-017", city: "barcelona", title: "Camp Nou", address: "C. d'Arístides Maillol, Barcelona", latitude: 41.3809, longitude: 2.1228 },
  { id: "bcn-018", city: "barcelona", title: "Tibidabo", address: "Plaça del Tibidabo, Barcelona", latitude: 41.4225, longitude: 2.1180 },
  { id: "bcn-019", city: "barcelona", title: "Búnkers del Carmel", address: "Carrer de Marià Labèrnia, Barcelona", latitude: 41.4180, longitude: 2.1521 },
  { id: "bcn-020", city: "barcelona", title: "Plaça Catalunya", address: "Plaça de Catalunya, Barcelona", latitude: 41.3870, longitude: 2.1701 },
  { id: "bcn-021", city: "barcelona", title: "Passeig de Gràcia", address: "Passeig de Gràcia, Barcelona", latitude: 41.3927, longitude: 2.1648 },
  { id: "bcn-022", city: "barcelona", title: "El Born", address: "El Born, Barcelona", latitude: 41.3853, longitude: 2.1820 },
  { id: "bcn-023", city: "barcelona", title: "Santa Maria del Mar", address: "Plaça de Santa Maria, Barcelona", latitude: 41.3837, longitude: 2.1826 },
  { id: "bcn-024", city: "barcelona", title: "Raval", address: "El Raval, Barcelona", latitude: 41.3790, longitude: 2.1685 },
  { id: "bcn-025", city: "barcelona", title: "MACBA", address: "Plaça dels Àngels, Barcelona", latitude: 41.3831, longitude: 2.1669 },
  { id: "bcn-026", city: "barcelona", title: "Glòries", address: "Plaça de les Glòries Catalanes", latitude: 41.4046, longitude: 2.1897 },
  { id: "bcn-027", city: "barcelona", title: "Torre Glòries", address: "Av. Diagonal, Barcelona", latitude: 41.4035, longitude: 2.1898 },
  { id: "bcn-028", city: "barcelona", title: "Poblenou", address: "Poblenou, Barcelona", latitude: 41.3982, longitude: 2.2048 },
  { id: "bcn-029", city: "barcelona", title: "Plaça Espanya", address: "Plaça d'Espanya, Barcelona", latitude: 41.3750, longitude: 2.1496 },
  { id: "bcn-030", city: "barcelona", title: "Mirador de Colom", address: "Plaça del Portal de la Pau, Barcelona", latitude: 41.3758, longitude: 2.1774 },

  { id: "vlc-001", city: "valencia", title: "Ciudad de las Artes y las Ciencias", address: "Quatre Carreres, Valencia", latitude: 39.4531, longitude: -0.3493 },
  { id: "vlc-002", city: "valencia", title: "Oceanogràfic", address: "Carrer d'Eduardo Primo Yúfera, Valencia", latitude: 39.4540, longitude: -0.3462 },
  { id: "vlc-003", city: "valencia", title: "Mercado Central", address: "Plaça de la Ciutat de Bruges, Valencia", latitude: 39.4745, longitude: -0.3787 },
  { id: "vlc-004", city: "valencia", title: "Lonja de la Seda", address: "Carrer de la Llotja, Valencia", latitude: 39.4741, longitude: -0.3783 },
  { id: "vlc-005", city: "valencia", title: "Catedral de Valencia", address: "Plaça de l'Almoina, Valencia", latitude: 39.4769, longitude: -0.3757 },
  { id: "vlc-006", city: "valencia", title: "Plaza de la Reina", address: "Plaça de la Reina, Valencia", latitude: 39.4758, longitude: -0.3750 },
  { id: "vlc-007", city: "valencia", title: "Plaza del Ayuntamiento", address: "Plaça de l'Ajuntament, Valencia", latitude: 39.4699, longitude: -0.3768 },
  { id: "vlc-008", city: "valencia", title: "Jardín del Turia", address: "Jardí del Túria, Valencia", latitude: 39.4699, longitude: -0.3662 },
  { id: "vlc-009", city: "valencia", title: "Torres de Serranos", address: "Plaça dels Furs, Valencia", latitude: 39.4784, longitude: -0.3786 },
  { id: "vlc-010", city: "valencia", title: "Torres de Quart", address: "Carrer de Guillem de Castro, Valencia", latitude: 39.4762, longitude: -0.3850 },
  { id: "vlc-011", city: "valencia", title: "Barrio del Carmen", address: "El Carme, Valencia", latitude: 39.4778, longitude: -0.3804 },
  { id: "vlc-012", city: "valencia", title: "Bioparc", address: "Avinguda Pio Baroja, Valencia", latitude: 39.4781, longitude: -0.4108 },
  { id: "vlc-013", city: "valencia", title: "Parque de Cabecera", address: "Avinguda Pio Baroja, Valencia", latitude: 39.4811, longitude: -0.4099 },
  { id: "vlc-014", city: "valencia", title: "Malvarrosa", address: "Playa de la Malvarrosa, Valencia", latitude: 39.4856, longitude: -0.3236 },
  { id: "vlc-015", city: "valencia", title: "Marina de Valencia", address: "Marina de Valencia", latitude: 39.4638, longitude: -0.3272 },
  { id: "vlc-016", city: "valencia", title: "Puerto de Valencia", address: "Port de València", latitude: 39.4478, longitude: -0.3193 },
  { id: "vlc-017", city: "valencia", title: "Ruzafa", address: "Ruzafa, Valencia", latitude: 39.4609, longitude: -0.3712 },
  { id: "vlc-018", city: "valencia", title: "Estación del Norte", address: "Carrer de Xàtiva, Valencia", latitude: 39.4667, longitude: -0.3775 },
  { id: "vlc-019", city: "valencia", title: "Palau de la Música", address: "Passeig de l'Albereda, Valencia", latitude: 39.4639, longitude: -0.3545 },
  { id: "vlc-020", city: "valencia", title: "Museo Fallero", address: "Plaça de Monteolivete, Valencia", latitude: 39.4564, longitude: -0.3564 },
  { id: "vlc-021", city: "valencia", title: "Albufera", address: "Parque Natural de la Albufera", latitude: 39.3353, longitude: -0.3573 },
  { id: "vlc-022", city: "valencia", title: "El Saler", address: "Platja del Saler, Valencia", latitude: 39.3653, longitude: -0.3318 },
  { id: "vlc-023", city: "valencia", title: "Plaza de la Virgen", address: "Plaça de la Mare de Déu, Valencia", latitude: 39.4764, longitude: -0.3766 },
  { id: "vlc-024", city: "valencia", title: "IVAM", address: "Carrer de Guillem de Castro, Valencia", latitude: 39.4810, longitude: -0.3813 },
  { id: "vlc-025", city: "valencia", title: "Jardines de Monforte", address: "Carrer de Monforte, Valencia", latitude: 39.4751, longitude: -0.3599 },
  { id: "vlc-026", city: "valencia", title: "Museo de Bellas Artes", address: "Carrer de Sant Pius V, Valencia", latitude: 39.4797, longitude: -0.3710 },
  { id: "vlc-027", city: "valencia", title: "Cabanyal", address: "El Cabanyal, Valencia", latitude: 39.4708, longitude: -0.3295 },
  { id: "vlc-028", city: "valencia", title: "Viveros", address: "Jardins del Real, Valencia", latitude: 39.4809, longitude: -0.3690 },
  { id: "vlc-029", city: "valencia", title: "Mestalla", address: "Avinguda de Suècia, Valencia", latitude: 39.4747, longitude: -0.3583 },
  { id: "vlc-030", city: "valencia", title: "Playa de las Arenas", address: "Platja de les Arenes, Valencia", latitude: 39.4636, longitude: -0.3224 },
];
