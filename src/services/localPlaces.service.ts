import { DEMO_CITIES, DEMO_PLACES, DemoPlace } from "../mock/placesCatalog";

export type LocalPlace = DemoPlace;

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const CITY_BY_KEY = new Map(DEMO_CITIES.map((city) => [city.key, city]));

const CITY_SEARCH_INDEX = DEMO_CITIES.map((city) => ({
  city,
  normalizedLabel: normalize(city.label),
  normalizedAliases: city.aliases.map((alias) => normalize(alias)),
}));

const PLACE_SEARCH_INDEX = DEMO_PLACES.map((place) => {
  const city = CITY_BY_KEY.get(place.city);
  const cityTokens = city
    ? [normalize(city.label), ...city.aliases.map((alias) => normalize(alias))]
    : [];

  return {
    place,
    normalizedTitle: normalize(place.title),
    normalizedAddress: normalize(place.address),
    normalizedHaystack: normalize(
      `${place.title} ${place.address} ${city?.label || ""} ${city?.aliases.join(" ") || ""}`
    ),
    cityTokens,
  };
});

const resolveDestinationCity = (destination?: string) => {
  if (!destination?.trim()) return null;
  const query = normalize(destination);
  return (
    CITY_SEARCH_INDEX.find(
      (city) =>
        query.includes(city.normalizedLabel) ||
        city.normalizedAliases.some((alias) => query.includes(alias))
    )?.city || null
  );
};

export function searchLocalPlaces(query: string, destination?: string): LocalPlace[] {
  // Se deja esta búsqueda local para demo estable; si en el futuro meto Google Places API, esta funcion es la se debe editar. 
  const normalizedQuery = normalize(query);
  if (normalizedQuery.length < 2) return [];

  const destinationCity = resolveDestinationCity(destination);

  const ranked = PLACE_SEARCH_INDEX.map((item) => {
    const titleScore = item.normalizedTitle.includes(normalizedQuery) ? 3 : 0;
    const addressScore = item.normalizedAddress.includes(normalizedQuery) ? 2 : 0;
    const cityTokenScore = item.cityTokens.some((token) => token.includes(normalizedQuery)) ? 1 : 0;
    const cityScore = destinationCity && item.place.city === destinationCity.key ? 4 : 0;
    const match = item.normalizedHaystack.includes(normalizedQuery);
    return {
      place: item.place,
      match,
      score: titleScore + addressScore + cityTokenScore + cityScore,
    };
  })
    .filter((row) => row.match)
    .sort((a, b) => b.score - a.score || a.place.title.localeCompare(b.place.title))
    .slice(0, 12)
    .map((row) => row.place);

  return ranked;
}

export function getLocalPlaceById(id: string): LocalPlace | null {
  return DEMO_PLACES.find((place) => place.id === id) || null;
}
// esta funcion centra el mapa en la ciudad del destino si el usuario no selecciona un lugar específico, en caso de usar google maps refactorizar para que devuelva coordenadas de la ciudad en lugar de un lugar específico.
export function resolveLocalCityCenter(query: string): { label: string; latitude: number; longitude: number } | null {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return null;

  const city = CITY_SEARCH_INDEX.find(
    (item) =>
      normalizedQuery.includes(item.normalizedLabel) ||
      item.normalizedAliases.some((alias) => normalizedQuery.includes(alias))
  )?.city;

  if (!city) return null;

  return {
    label: city.label,
    latitude: city.latitude,
    longitude: city.longitude,
  };
}
