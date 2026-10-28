/* Estadísticas de registros. No modifica el mapa ni geolocaliza hechos. */
(() => {
  'use strict';
  const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const SHORT_DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const BANDS = ['Madrugada', 'Mañana', 'Tarde', 'Noche'];

  function normalize(record) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(record.fecha || '');
    if (!match || !Number.isInteger(record.hora) || record.hora < 0 || record.hora > 23 || record.cantidad !== 1) throw new Error('Registro inválido');
    const year = Number(match[1]), month = Number(match[2]), day = Number(match[3]);
    // UTC se usa de forma consistente para tratar fechas de calendario, sin desplazamientos horarios.
    const date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) throw new Error('Fecha inválida');
    return {...record, year, day: (date.getUTCDay() + 6) % 7, band: Math.floor(record.hora / 6)};
  }
  function select(records, filters) {
    return records.filter(r => (filters.year === 'all' || r.year === Number(filters.year)) && (filters.day === 'all' || r.day === Number(filters.day)) && (filters.band === 'all' || r.band === Number(filters.band)));
  }
  function distribution(records, key, length) {
    const totals = Array(length).fill(0);
    records.forEach(r => { totals[r[key]] += 1; });
    return totals;
  }
  // Funciones puras expuestas para comprobaciones locales, sin dependencias de interfaz.
  window.TintalStats = Object.freeze({normalize, select, distribution});

  function drawChart(container, labels, fullLabels, values) {
    const maximum = Math.max(...values, 1);
    const ceiling = maximum <= 4 ? 4 : Math.ceil(maximum / 4) * 4;
    const scale = document.createElement('div'); scale.className = 'scale'; scale.setAttribute('aria-hidden', 'true');
    for (let i = 4; i >= 0; i--) { const tick = document.createElement('span'); tick.textContent = String(ceiling * i / 4); scale.append(tick); }
    const plot = document.createElement('div'); plot.className = 'plot'; plot.setAttribute('role', 'list'); plot.setAttribute('aria-label', 'Cantidad de registros por categoría');
    labels.forEach((label, i) => {
      const group = document.createElement('div'); group.className = 'bar-group'; group.setAttribute('role', 'listitem'); group.setAttribute('aria-label', `${fullLabels[i]}: ${values[i]} registros`);
      const track = document.createElement('div'); track.className = 'bar-track'; track.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = `${values[i] / ceiling * 100}%`;
      const number = document.createElement('span'); number.className = 'bar-value'; number.textContent = String(values[i]);
      const name = document.createElement('span'); name.className = 'bar-label'; name.textContent = label; name.setAttribute('aria-hidden', 'true');
      bar.append(number); track.append(bar); group.append(track, name); plot.append(group);
    });
    container.replaceChildren(scale, plot);
  }
  function init() {
    const form = document.querySelector('#filters');
    try {
      if (!Array.isArray(window.TINTAL_RECORDS)) throw new Error('Falta data.js');
      const records = window.TINTAL_RECORDS.map(normalize);
      const ids = new Set(records.map(r => r.id));
      if (records.length !== 62 || ids.size !== records.length || records.filter(r => r.year === 2024).length !== 19 || records.filter(r => r.year === 2025).length !== 19 || records.filter(r => r.year === 2026).length !== 24) throw new Error('La base no coincide con el alcance');
      const year = document.querySelector('#year'), day = document.querySelector('#day'), band = document.querySelector('#band');
      [...new Set(records.map(r => r.year))].sort().forEach(value => { const option = document.createElement('option'); option.value = String(value); option.textContent = String(value); year.append(option); });
      document.querySelector('#available').textContent = String(records.length);
      function render() {
        const filtered = select(records, {year: year.value, day: day.value, band: band.value});
        document.querySelector('#count').textContent = String(filtered.length);
        document.querySelector('#empty-message').hidden = filtered.length !== 0;
        document.querySelector('#selection').textContent = [year.value === 'all' ? 'Todos los años' : year.value, day.value === 'all' ? 'Todos los días' : DAYS[Number(day.value)], band.value === 'all' ? 'Todas las franjas' : BANDS[Number(band.value)]].join(' · ');
        drawChart(document.querySelector('#days-chart'), SHORT_DAYS, DAYS, distribution(filtered, 'day', 7));
        drawChart(document.querySelector('#bands-chart'), BANDS, BANDS, distribution(filtered, 'band', 4));
      }
      form.addEventListener('submit', event => event.preventDefault());
      form.addEventListener('change', render);
      form.addEventListener('reset', () => { year.value = day.value = band.value = 'all'; render(); });
      render();
    } catch (error) {
      document.querySelector('#data-error').hidden = false;
      form.querySelectorAll('select, button').forEach(control => { control.disabled = true; });
      console.error('No se pudo inicializar la consulta:', error.message);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
