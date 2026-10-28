/* Mapa simulado independiente de las estadísticas reales. */
(() => {
  'use strict';
  const CONFIG = Object.freeze({
    center: [4.646, -74.153], zoom: 15,
    tileUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    references: [{name: 'Biblioteca Pública Manuel Zapata Olivella – El Tintal', coordinates: [4.6430923, -74.1547938], source: 'https://www.biblored.gov.co/bibliotecas/biblioteca-tintal', note: 'Referencia geográfica publicada por BibloRed; no indica una riña.', label: 'Biblioteca'}, {name: 'Tintal Plaza', coordinates: [4.64267, -74.15627], note: 'Posición recuperada del prototipo original; pendiente de verificación. No indica una riña.', label: 'Tintal Plaza'}, {name: 'CAI Tintal', coordinates: [4.6438, -74.1569], note: 'Posición recuperada del prototipo original; pendiente de verificación. No indica una riña.', label: 'CAI Tintal'}]
  });
  // Se incorpora una referencia con coordenadas publicadas por BibloRed.
  // CAI y Tintal Plaza conservan las posiciones referenciales del prototipo y se advierte su verificación pendiente.
  function init() {
    const status = document.querySelector('#map-status');
    const container = document.querySelector('#map');
    const reset = document.querySelector('#map-reset');
    if (!window.L) {
      status.textContent = 'No se pudo cargar la biblioteca del mapa. Comprueba la conexión y vuelve a cargar. Las estadísticas siguen disponibles.';
      container.classList.add('map-unavailable'); container.textContent = 'Mapa no disponible. Requiere conexión a internet.';
      return;
    }
    if (!/^https?:$/.test(window.location.protocol)) {
      status.textContent = 'Abre esta página mediante un servidor local HTTP o HTTPS. Abrir el archivo directamente puede bloquear el fondo del mapa.';
      container.classList.add('map-unavailable'); container.textContent = 'Consulta README.md para iniciar el servidor local.';
      return;
    }
    const map = L.map(container, {scrollWheelZoom: false}).setView(CONFIG.center, CONFIG.zoom);
    const tiles = L.tileLayer(CONFIG.tileUrl, {minZoom: 12, maxZoom: 19, referrerPolicy: 'strict-origin-when-cross-origin', attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
    let loaded = false, failed = false;
    const timer = window.setTimeout(() => { if (!loaded) { status.hidden = false; status.textContent = 'El fondo está tardando en cargar. Comprueba la conexión; las estadísticas siguen disponibles.'; } }, 12000);
    tiles.on('tileload', () => { loaded = true; window.clearTimeout(timer); if (!failed) status.hidden = true; });
    tiles.on('tileerror', () => { failed = true; status.hidden = false; status.textContent = 'No se pudo cargar parte del fondo. Comprueba la conexión o las restricciones del proveedor. Los puntos de este mapa son simulados; las estadísticas reales siguen disponibles.'; });
    tiles.addTo(map);
    const icon = L.divIcon({className: 'reference-dot', html: '<span aria-hidden="true"></span>', iconSize: [20, 20], iconAnchor: [10, 10]});
    CONFIG.references.forEach(reference => {
      const text = document.createElement('span'); text.textContent = reference.name + '. ' + reference.note;
      L.marker(reference.coordinates, {icon, title: reference.name, alt: reference.name, zIndexOffset: 1000}).addTo(map).bindPopup(text).bindTooltip(reference.label, {permanent: true, direction: 'top', offset: [0, -9]});
    });
    const simulation = window.TintalSimulation;
    const detail = document.querySelector('#simulation-detail');
    const zoneButtons = document.querySelector('#simulation-zones');
    if (simulation && simulation.events.length === 445 && simulation.zones.length === 10) {
      document.querySelector('#simulation-total').textContent = String(simulation.events.length);
      document.querySelector('#simulation-zone-count').textContent = String(simulation.zones.length);
      const selectedFields = ['id', 'count', 'share', 'level', 'index', 'description'];
      function selectZone(zone) {
        const values = [zone.id, String(zone['riñas']), (zone['riñas'] / simulation.events.length * 100).toFixed(1) + '%', zone.nivel, zone.indice + '/100', zone.desc];
        selectedFields.forEach((field, i) => { document.querySelector('#zone-' + field).textContent = values[i]; });
      }
      selectZone(simulation.zones[0]);
      const points = L.layerGroup();
      const zones = L.layerGroup();
      const popup = lines => {
        const node = document.createElement('div');
        lines.forEach(line => { const row = document.createElement('div'); row.textContent = line; node.append(row); });
        return node;
      };
      simulation.events.forEach(event => {
        L.circleMarker([event.lat, event.lon], {radius: 5, color: '#fff', weight: 1, fillColor: '#126f78', fillOpacity: 0.8})
          .bindPopup(popup(['EVENTO SIMULADO #' + event.id, 'Zona: ' + event.zone, 'Fecha ficticia: ' + event.date, 'Hora ficticia: ' + String(event.hour).padStart(2, '0') + ':00', 'Sin relación con los 62 registros reales.']))
          .addTo(points);
      });
      simulation.zones.forEach(zone => {
        const description = zone.id + ': ' + zone['riñas'] + ' eventos simulados (' + (zone['riñas'] / 445 * 100).toFixed(1) + '% del escenario). Índice del modelo: ' + zone.indice + '/100; nivel simulado: ' + zone.nivel + '. Sin relación con los 62 registros reales.';
        const circle = L.circle(zone.center, {radius: zone.radius, color: zone.color, weight: 2, fillColor: zone.color, fillOpacity: 0.08})
          .bindPopup(popup(['ZONA SIMULADA', description, zone.desc])).addTo(zones);
        circle.on('click', () => { detail.textContent = description; selectZone(zone); });
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'button'; button.textContent = zone.id + ' · ' + zone['riñas'];
        button.addEventListener('click', () => { map.setView(zone.center, 16); circle.openPopup(); detail.textContent = description; selectZone(zone); });
        zoneButtons.append(button);
      });
      zones.addTo(map);
      points.addTo(map);
      const overlays = {'Puntos simulados (445)': points, 'Zonas simuladas (Z1–Z10)': zones};
      if (typeof L.heatLayer === 'function') {
        const heat = L.heatLayer(simulation.events.map(event => [event.lat, event.lon, 1]), {radius: 30, blur: 24, maxZoom: 17, max: 1, gradient: {0.2: '#2878b5', 0.4: '#40b8a4', 0.6: '#fee08b', 0.8: '#f79034', 1: '#d7191c'}}).addTo(map);
        overlays['Calor simulado'] = heat;
      } else {
        detail.textContent = 'No se pudo cargar la capa de calor. Los 445 puntos simulados y las zonas siguen disponibles.';
      }
      L.control.layers(null, overlays, {collapsed: false}).addTo(map);
    } else {
      detail.textContent = 'No se pudieron cargar los datos simulados. Las estadísticas de los 62 registros siguen disponibles.';
    }
    reset.disabled = false;
    reset.addEventListener('click', () => { map.closePopup(); map.setView(CONFIG.center, CONFIG.zoom); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
