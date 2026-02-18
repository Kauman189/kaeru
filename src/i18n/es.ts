const es = {
  common: {
    loading: "Cargando...",
    retry: "Reintentar",
    cancel: "Cancelar",
    close: "Cerrar",
    save: "Guardar",
    apply: "Aplicar",
    clear: "Limpiar",
  },
  discover: {
    headerLine1: "Planifica tu",
    headerLine2: "siguiente viaje",
    title: "Descubrir",
    searchPlaceholder: "Buscar destino, viaje o etiqueta",
    loadingTrips: "Cargando viajes...",
    loadError: "No se han podido cargar los viajes públicos.",
    emptyFiltered: "No hay viajes que coincidan con tus filtros.",
    filtersTitle: "Filtros",
    filtersTripType: "Tipo de viaje",
    filtersBudget: "Presupuesto",
    filtersClose: "Cerrar",
    filtersApply: "Aplicar",
    filtersClear: "Limpiar",
    budgetLow: "< 300 €",
    budgetMid: "300 - 600 €",
    budgetHigh: "> 600 €",
  },
  myTrips: {
    title: "Mis viajes",
    loading: "Cargando tus viajes...",
    empty: "Actualmente no tienes viajes.\nCrea uno con el botón +.",
    searchPlaceholder: "Buscar destino o viaje",
    inviteTitle: "Invitar con enlace",
    inviteSubtitle:
      "Comparte este enlace para que otras personas puedan acceder al viaje.",
  },
} as const;

export default es;
