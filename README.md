# Kaeru - Memoria técnica de desarrollo (TFG)

## 1) Qué es este trabajo
Kaeru es una aplicación móvil iOS-first para planificar viajes, compartirlos con colaboradores y ejecutar un "viaje activo" con recordatorios y seguimiento del itinerario.

Este README está escrito para defensa TFG. Explica:
- qué hace el sistema,
- por qué está diseñado así,
- dónde están las funciones importantes,
- y cómo fue la evolución del desarrollo semana a semana.

## 2) Objetivo funcional del MVP
El MVP cubre 6 capacidades principales:
1. Autenticación y perfil con `username` único.
2. Creación y edición de viajes por pasos.
3. Discover de viajes públicos.
4. Viajes propios y compartidos (roles owner/editor/viewer).
5. Detalle de viaje con fotos, comentarios y likes.
6. Modo "Viaje activo" con itinerario editable y notificaciones locales.

## 3) Stack técnico
- Frontend: React Native + Expo + TypeScript.
- Navegación: React Navigation (`Stack` + tabs personalizadas con pager).
- Backend: Supabase (PostgreSQL, Auth, Storage, RLS, RPC/funciones SQL).
- Mapas: `react-native-maps`.
- Media: `expo-image-picker`, `expo-document-picker`.
- Notificaciones locales: `expo-notifications`.
- Persistencia local: `AsyncStorage` (cache y cola de analytics).

## 4) Arquitectura funcional (resumen)
### Capa UI
- `src/screens/*`: pantallas de negocio.
- `src/components/*`: componentes reutilizables (cards, estados async, botones).

### Capa de navegación
- `src/navigation/RootNavigator.tsx`: rutas principales, modales, deep links.
- `src/screens/TabsPager.tsx`: tabs Discover / My Trips / Profile + guard de sesión.

### Capa de servicios
- `src/services/*.service.ts`: toda la comunicación con backend y reglas de acceso por caso.

### Capa de soporte
- `src/constants/permissions.ts`: contrato de permisos por rol.
- `src/storage/*`: utilidades de cache/offline.
- `src/i18n/*`: textos en español.
- `src/mock/*`: dataset local de demo para onboarding/places.

## 5) Flujo real de la app
1. Usuario entra en onboarding.
2. Si no hay sesión, pasa por Auth.
3. Con sesión activa accede a tabs.
4. Desde Discover puede abrir viajes públicos.
5. Desde My Trips gestiona viajes propios y compartidos.
6. En Trip Detail puede editar, comentar, subir media o iniciar "Viaje activo" según permisos.
7. En Viaje activo trabaja sobre una copia operativa del itinerario (no rompe el viaje base).

## 6) Backend (modelo de datos y por qué)
El backend está separado por dominios:

### Identidad
- `profiles`: datos públicos de usuario.
- Clave técnica: `username` único y validado.

### Viajes
- `trips`: entidad principal.
- `trip_stops`: paradas (orden, día, hora, coordenadas).
- `trip_tags`: clasificación.
- `media`: fotos y PDFs ligados a `trip_id`.

### Colaboración
- `trip_collaborators`: rol y estado por usuario dentro del viaje.
- `trip_invites`: invitaciones tokenizadas con expiración.

### Comunidad
- `trip_comments`: comentarios y respuestas (1 nivel).
- `trip_likes`: likes por usuario.

### Ejecución en vivo
- `trip_play_sessions`: sesión activa temporal.
- `trip_play_participants`: participantes de la sesión viva.
- `trip_play_stops`: copia editable de paradas para la ejecución real.
- `trip_play_notification_jobs`: jobs de notificaciones programadas.

### Observabilidad
- `notifications`: inbox in-app.
- `product_events`: eventos de producto para analítica básica.

## 7) Seguridad y permisos (criterio de diseño)
El control real se hace en backend con RLS y funciones SQL. El frontend replica reglas para UX clara.

Reglas funcionales:
- Owner: control total.
- Editor accepted: puede editar viaje compartido y operar funciones colaborativas.
- Viewer accepted: solo lectura (y acciones permitidas de consumo).
- Invitado sin sesión: acceso limitado a Discover y contenido público.

Decisión importante: los PDFs están ligados al `trip_id` base (no a sesión Play), para que TripDetail y Viaje activo lean la misma fuente de documentos.

## 8) Dónde están las funciones importantes (guía rápida)

### Navegación
- `src/navigation/RootNavigator.tsx`
  - Define rutas principales, deep links y modales.
  - Punto clave para entender flujo completo de app.

### Auth y perfil
- `src/screens/AuthScreen.tsx`
  - Login/registro, validación de `username`, redirección post-login.
- `src/screens/ProfileSetupScreen.tsx`
  - Finaliza datos obligatorios del perfil.
- `src/screens/ProfileEditScreen.tsx`
  - Edición de perfil y credenciales.

### Discover y viajes
- `src/screens/HomeScreen.tsx`
  - Carga viajes públicos, filtros y pull-to-refresh.
- `src/screens/MyTripsScreen.tsx`
  - Carga viajes propios + compartidos con toggle.
- `src/screens/CreateTripScreen.tsx`
  - Wizard crear/editar viaje + paradas + detalles.
- `src/screens/TripDetailScreen.tsx`
  - Vista central: fotos, PDFs, comentarios, likes, permisos, acciones.
- `src/screens/TripMapScreen.tsx`
  - Vista de mapa del viaje.

### Viaje activo
- `src/screens/PlayTripSetupScreen.tsx`
  - Configura fechas/modo y arranca sesión activa.
- `src/screens/ActiveTripsScreen.tsx`
  - Lista sesiones activas del usuario.
- `src/screens/ActiveTripDetailScreen.tsx`
  - Gestión operativa de la sesión viva.

### Servicios críticos
- `src/services/trips.service.ts`
  - CRUD de viajes, media, PDFs, comentarios, invites.
- `src/services/playTrips.service.ts`
  - RPC de sesiones activas y operaciones live.
- `src/services/localNotifications.service.ts`
  - Programación/reprogramación de avisos locales.
- `src/services/notifications.service.ts`
  - Inbox in-app.
- `src/services/analytics.service.ts`
  - Tracking de eventos con cola local.

### Reglas transversales
- `src/constants/permissions.ts`
  - Matriz única de permisos usada en pantallas.

## 9) Por qué está hecho así (decisiones técnicas)
1. Separación por servicios para no mezclar UI con consultas backend.
2. Permisos centralizados para evitar incoherencias entre pantallas.
3. "Viaje activo" desacoplado del viaje base para permitir edición en ruta sin perder plan original.
4. Cache local mínima en vistas de alto uso para resistir mala red durante demo.
5. Comentarios y acciones colaborativas guiadas por rol para evitar conflictos funcionales.

## 10) Cronología realista de desarrollo (semanal)
Rango: **11/11/2025 -> 18/02/2026**

### Semana 1 (11/11 - 17/11)
- Definición de alcance MVP.
- Diseño inicial de navegación y estructura de carpetas.
- Primeras pantallas base (onboarding/auth/tabs).

### Semana 2 (18/11 - 24/11)
- Modelo de datos inicial de viajes, paradas y etiquetas.
- Primer flujo de crear viaje y listado en Discover.
- Ajustes de tipado TypeScript en entidades base.

### Semana 3 (25/11 - 01/12)
- Integración fuerte con Supabase Auth + Profiles.
- Validación de `username` y persistencia de perfil.
- Primeras reglas de guard para pantallas privadas.

### Semana 4 (02/12 - 08/12)
- Mejoras de UX iOS en formularios largos (teclado/scroll).
- Refactor de Profile Setup/Edit para móvil.
- Corrección de errores de guardado de perfil.

### Semana 5 (09/12 - 15/12)
- Estabilización de Discover: carga, errores y estados vacíos reales.
- Implementación de pull-to-refresh.
- Ajuste de mensajes de error de red/permisos.

### Semana 6 (16/12 - 22/12)
- Trip Detail funcional: comentarios, likes, edición por owner.
- Primera versión de permisos por rol en UI.
- Soporte base para compartir viajes.

### Semana 7 (23/12 - 29/12)
- Limpieza de UI y traducción progresiva a español.
- Revisión de componentes reutilizables.
- Corrección de acciones inconsistentes en Discover/My Trips.

### Semana 8 (30/12 - 05/01)
- Replanteamiento del buscador de lugares para demo estable.
- Sustitución de dependencias externas por catálogo local.
- Centrado de mapas por destino de viaje.

### Semana 9 (06/01 - 12/01)
- Integración de media en detalle y tarjetas.
- Regla de portada por primera foto.
- Mejoras de permisos en borrado/subida de media.

### Semana 10 (13/01 - 19/01)
- Deep linking seguro para invitaciones (`kaeru://invite/...`).
- Flujo de aceptación de invitación y alta de colaborador.
- Ajustes de navegación post-login con redirección al destino intentado.

### Semana 11 (20/01 - 26/01)
- Implementación de notificaciones in-app.
- Pantalla de notificaciones y contador no leído.
- Primer bloque de analytics de producto.

### Semana 12 (27/01 - 02/02)
- Nacimiento de "Viaje activo" (sesiones live).
- RPC de start/pause/resume/finish y copia de paradas.
- Primeros recordatorios locales por hora de actividad.

### Semana 13 (03/02 - 09/02)
- Extensión de Viaje activo con checklist y resumen live.
- Configuración personal de notificaciones por participante.
- Corrección de permisos owner/editor/viewer en acciones live.

### Semana 14 (10/02 - 16/02)
- Hardening de PDF: permisos consistentes DB + storage.
- Alineación de carga de documentos entre TripDetail y ActiveTrip.
- Refinado de estados async y UX iOS.

### Semana 15 (17/02 - 18/02)
- Limpieza final de código no usado.
- Revisión de consistencia visual (fondos, copy, alineaciones).
- Reescritura de documentación técnica para defensa.

## 11) Estado actual para defensa
A fecha de hoy el proyecto está en estado de demo funcional:
- flujos principales operativos,
- colaboración y roles activos,
- viaje activo funcional,
- documentación técnica preparada para explicar decisiones.

## 12) Próximos pasos (post-TFG)
1. Sustituir catálogo local por proveedor de lugares global con coste controlado.
2. Añadir push remota (APNs) sobre notificaciones locales actuales.
3. Mejorar analítica con panel de métricas y embudos de uso.
4. Endurecer aún más pruebas automáticas E2E para regresiones de permisos.
