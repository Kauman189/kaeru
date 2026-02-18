const TAG_LABELS_ES: Record<string, string> = {
  Solo: "Solo",
  Couple: "En pareja",
  "2-4 Friends": "2-4 amigos",
  Family: "Familia",
  "City Tourism": "Turismo urbano",
  "Food Tour": "Ruta gastronómica",
  Foodie: "Gastronómico",
  Adventure: "Aventura",
  Cultural: "Cultural",
  Nature: "Naturaleza",
  City: "Ciudad",
};

export function toTagLabelEs(tag: string): string {
  return TAG_LABELS_ES[tag] || tag;
}

export function toTagLabelsEs(tags: string[]): string[] {
  return tags.map(toTagLabelEs);
}

