import { DEMO_CITIES, DEMO_PLACES, DemoPlace } from "../mock/placesCatalog";

export type LocalPlace = DemoPlace;

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const resolveDestinationCity = (destination?: string) => {
  if (!destination?.trim()) return null;
  const query = normalize(destination);
  return (
    DEMO_CITIES.find(
      (city) =>
        query.includes(normalize(city.label)) || city.aliases.some((alias) => query.includes(normalize(alias)))
    ) || null
  );
};

export function searchLocalPlaces(query: string, destination?: string): LocalPlace[] {
  // Se deja esta búsqueda local para demo estable; si en el futuro meto Google Places API, esta funcion es la se debe editar. 
  const normalizedQuery = normalize(query);
  if (normalizedQuery.length < 2) return [];

  const destinationCity = resolveDestinationCity(destination);

  const ranked = DEMO_PLACES.map((place) => {
    const haystack = `${place.title} ${place.address} ${place.city}`;
    const normalizedHaystack = normalize(haystack);
    const titleScore = normalize(place.title).includes(normalizedQuery) ? 2 : 0;
    const addressScore = normalize(place.address).includes(normalizedQuery) ? 1 : 0;
    const cityScore = destinationCity && place.city === destinationCity.key ? 3 : 0;
    const match = normalizedHaystack.includes(normalizedQuery);
    return {
      place,
      match,
      score: titleScore + addressScore + cityScore,
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

  const city = DEMO_CITIES.find(
    (item) =>
      normalizedQuery.includes(normalize(item.label)) ||
      item.aliases.some((alias) => normalizedQuery.includes(normalize(alias)))
  );

  if (!city) return null;

  return {
    label: city.label,
    latitude: city.latitude,
    longitude: city.longitude,
  };
}
