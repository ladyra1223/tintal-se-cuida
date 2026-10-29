const RECS = [{"a": "2024", "d": "Sábado", "f": "Tarde", "h": 15}, {"a": "2024", "d": "Jueves", "f": "Noche", "h": 18}, {"a": "2024", "d": "Domingo", "f": "Noche", "h": 18}, {"a": "2024", "d": "Sábado", "f": "Tarde", "h": 12}, {"a": "2024", "d": "Martes", "f": "Noche", "h": 18}, {"a": "2024", "d": "Viernes", "f": "Noche", "h": 19}, {"a": "2024", "d": "Lunes", "f": "Mañana", "h": 6}, {"a": "2024", "d": "Martes", "f": "Madrugada", "h": 2}, {"a": "2024", "d": "Jueves", "f": "Madrugada", "h": 3}, {"a": "2024", "d": "Sábado", "f": "Madrugada", "h": 1}, {"a": "2024", "d": "Domingo", "f": "Tarde", "h": 12}, {"a": "2024", "d": "Sábado", "f": "Tarde", "h": 17}, {"a": "2024", "d": "Domingo", "f": "Noche", "h": 20}, {"a": "2024", "d": "Domingo", "f": "Noche", "h": 18}, {"a": "2024", "d": "Domingo", "f": "Noche", "h": 21}, {"a": "2024", "d": "Lunes", "f": "Mañana", "h": 11}, {"a": "2024", "d": "Lunes", "f": "Noche", "h": 19}, {"a": "2024", "d": "Martes", "f": "Tarde", "h": 13}, {"a": "2024", "d": "Miércoles", "f": "Tarde", "h": 15}, {"a": "2025", "d": "Jueves", "f": "Noche", "h": 19}, {"a": "2025", "d": "Domingo", "f": "Madrugada", "h": 2}, {"a": "2025", "d": "Domingo", "f": "Madrugada", "h": 3}, {"a": "2025", "d": "Viernes", "f": "Noche", "h": 20}, {"a": "2025", "d": "Domingo", "f": "Tarde", "h": 16}, {"a": "2025", "d": "Sábado", "f": "Noche", "h": 18}, {"a": "2025", "d": "Sábado", "f": "Noche", "h": 23}, {"a": "2025", "d": "Domingo", "f": "Tarde", "h": 13}, {"a": "2025", "d": "Lunes", "f": "Noche", "h": 23}, {"a": "2025", "d": "Sábado", "f": "Noche", "h": 23}, {"a": "2025", "d": "Miércoles", "f": "Tarde", "h": 16}, {"a": "2025", "d": "Domingo", "f": "Tarde", "h": 16}, {"a": "2025", "d": "Lunes", "f": "Madrugada", "h": 2}, {"a": "2025", "d": "Miércoles", "f": "Noche", "h": 18}, {"a": "2025", "d": "Jueves", "f": "Noche", "h": 23}, {"a": "2025", "d": "Sábado", "f": "Noche", "h": 22}, {"a": "2025", "d": "Domingo", "f": "Madrugada", "h": 2}, {"a": "2025", "d": "Domingo", "f": "Madrugada", "h": 1}, {"a": "2025", "d": "Sábado", "f": "Tarde", "h": 17}, {"a": "2026", "d": "Sábado", "f": "Madrugada", "h": 1}, {"a": "2026", "d": "Domingo", "f": "Noche", "h": 21}, {"a": "2026", "d": "Domingo", "f": "Madrugada", "h": 1}, {"a": "2026", "d": "Sábado", "f": "Noche", "h": 22}, {"a": "2026", "d": "Domingo", "f": "Madrugada", "h": 0}, {"a": "2026", "d": "Sábado", "f": "Noche", "h": 20}, {"a": "2026", "d": "Viernes", "f": "Tarde", "h": 17}, {"a": "2026", "d": "Domingo", "f": "Noche", "h": 18}, {"a": "2026", "d": "Lunes", "f": "Tarde", "h": 16}, {"a": "2026", "d": "Domingo", "f": "Madrugada", "h": 2}, {"a": "2026", "d": "Jueves", "f": "Noche", "h": 20}, {"a": "2026", "d": "Domingo", "f": "Noche", "h": 19}, {"a": "2026", "d": "Domingo", "f": "Madrugada", "h": 1}, {"a": "2026", "d": "Lunes", "f": "Tarde", "h": 16}, {"a": "2026", "d": "Miércoles", "f": "Madrugada", "h": 2}, {"a": "2026", "d": "Sábado", "f": "Noche", "h": 18}, {"a": "2026", "d": "Domingo", "f": "Noche", "h": 21}, {"a": "2026", "d": "Lunes", "f": "Madrugada", "h": 0}, {"a": "2026", "d": "Martes", "f": "Tarde", "h": 17}, {"a": "2026", "d": "Domingo", "f": "Noche", "h": 19}, {"a": "2026", "d": "Jueves", "f": "Noche", "h": 23}, {"a": "2026", "d": "Sábado", "f": "Noche", "h": 19}, {"a": "2026", "d": "Miércoles", "f": "Madrugada", "h": 2}, {"a": "2026", "d": "Domingo", "f": "Tarde", "h": 17}];
const ZONAS = [{"id": "Z1", "nombre": "Eje comercial principal", "riesgo": "alto", "sim": 19, "desc": "Mayor concentración de establecimientos y afluencia nocturna.", "momento": "Noches de viernes a domingo (6:00 p.m. – 2:00 a.m.)", "recoPol": "Priorizar patrullaje focalizado y presencia visible en horario nocturno de fin de semana.", "recoCom": "Reforzar control de ingreso y aforo; coordinar cierre escalonado con locales vecinos."}, {"id": "Z2", "nombre": "Zona de bares y licoreras", "riesgo": "alto", "sim": 17, "desc": "Franja con consumo de alcohol y aglomeraciones frecuentes.", "momento": "Madrugada de sábado y domingo (12:00 a.m. – 3:00 a.m.)", "recoPol": "Disponer cuadrante disponible en el cierre de establecimientos; atención a consumo en vía pública.", "recoCom": "Suspender venta de licor antes del cierre; evitar aglomeraciones en la salida."}, {"id": "Z3", "nombre": "Corredor gastronómico", "riesgo": "medio", "sim": 12, "desc": "Afluencia alta en horario de tarde-noche, menor conflictividad.", "momento": "Tardes y noches de fin de semana (3:00 p.m. – 9:00 p.m.)", "recoPol": "Patrullaje preventivo en la transición tarde-noche los fines de semana.", "recoCom": "Estar atento a discusiones por filas o cuentas; mantener personal de apoyo."}, {"id": "Z4", "nombre": "Plaza y espacio público", "riesgo": "medio", "sim": 11, "desc": "Punto de encuentro con picos los domingos.", "momento": "Domingos en la tarde (12:00 m. – 6:00 p.m.)", "recoPol": "Presencia en jornada diurna dominical; mediación temprana de riñas.", "recoCom": "Reportar tempranamente aglomeraciones que crezcan en el entorno."}, {"id": "Z5", "nombre": "Sector residencial-comercial", "riesgo": "bajo", "sim": 7, "desc": "Incidencia moderada, concentrada en noches aisladas.", "momento": "Noches entre semana (7:00 p.m. – 11:00 p.m.)", "recoPol": "Rondas de verificación según reporte; sin saturar el sector.", "recoCom": "Usar el reporte para situaciones puntuales de consumo o ruido."}, {"id": "Z6", "nombre": "Vía secundaria comercial", "riesgo": "bajo", "sim": 6, "desc": "Pocos eventos, principalmente discusiones.", "momento": "Tardes de fin de semana (2:00 p.m. – 7:00 p.m.)", "recoPol": "Patrullaje de cobertura; respuesta a demanda.", "recoCom": "Reportar discusiones antes de que escalen a riña."}, {"id": "Z7", "nombre": "Zona mixta norte", "riesgo": "medio", "sim": 11, "desc": "Riesgo intermedio con picos nocturnos de fin de semana.", "momento": "Noches de sábado (7:00 p.m. – 12:00 a.m.)", "recoPol": "Reforzar cobertura nocturna los sábados.", "recoCom": "Coordinar con locales cercanos ante aglomeraciones."}, {"id": "Z8", "nombre": "Borde del barrio", "riesgo": "min", "sim": 3, "desc": "Baja incidencia registrada.", "momento": "Sin patrón marcado; eventos esporádicos.", "recoPol": "Patrullaje de rutina; atención por demanda.", "recoCom": "Reportar cualquier situación inusual."}, {"id": "Z9", "nombre": "Sector interior", "riesgo": "min", "sim": 2, "desc": "Zona tranquila, incidencia mínima.", "momento": "Sin patrón marcado; eventos esporádicos.", "recoPol": "Cobertura general; sin focalización especial.", "recoCom": "El reporte queda disponible ante cualquier novedad."}, {"id": "Z10", "nombre": "Entrada vehicular", "riesgo": "bajo", "sim": 8, "desc": "Eventos ligados a horas de cierre.", "momento": "Noches de fin de semana al cierre (10:00 p.m. – 1:00 a.m.)", "recoPol": "Ronda en horario de cierre los fines de semana.", "recoCom": "Gestionar la salida ordenada de clientes."}];
/* ================= DATOS DERIVADOS ================= */
const ORD_DIA=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
const ORD_FR=['Madrugada','Mañana','Tarde','Noche'];
const RIESGO={alto:{c:'var(--r-alto)',ic:'🔴',t:'Riesgo alto'},medio:{c:'var(--r-medio)',ic:'🟠',t:'Riesgo medio'},bajo:{c:'var(--r-bajo)',ic:'🟡',t:'Riesgo bajo'},min:{c:'var(--r-min)',ic:'🟢',t:'Riesgo mínimo'}};

/* ================= UTIL ================= */
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const uniq=(arr)=>[...new Set(arr)];

/* ================= FILTROS CONSULTA ================= */
function llenarSelect(sel,vals,label){
  sel.innerHTML='<option value="">'+label+'</option>'+vals.map(v=>`<option value="${v}">${v}</option>`).join('');
}
function initFiltros(){
  llenarSelect($('#fAno'),uniq(RECS.map(r=>r.a)).sort(),'Todos los años');
  llenarSelect($('#fDia'),ORD_DIA.filter(d=>RECS.some(r=>r.d===d)),'Todos los días');
  llenarSelect($('#fFranja'),ORD_FR.filter(f=>RECS.some(r=>r.f===f)),'Todas las franjas');
  ['#fAno','#fDia','#fFranja'].forEach(id=>$(id).addEventListener('change',render));
  $('#btnReset').addEventListener('click',()=>{$('#fAno').value='';$('#fDia').value='';$('#fFranja').value='';render();});
}
function filtrar(){
  const a=$('#fAno').value,d=$('#fDia').value,f=$('#fFranja').value;
  return RECS.filter(r=>(!a||r.a===a)&&(!d||r.d===d)&&(!f||r.f===f));
}
function barras(cont,orden,data){
  const counts={};orden.forEach(k=>counts[k]=0);
  data.forEach(r=>{if(counts[r._k]!==undefined)counts[r._k]++;});
  const max=Math.max(1,...Object.values(counts));
  const el=$(cont);
  if(data.length===0){el.innerHTML='<div class="empty">Sin registros para este filtro.</div>';return;}
  el.innerHTML=orden.map(k=>{
    const v=counts[k],w=(v/max*100);
    return `<div class="bar-row"><div class="bar-lbl">${k}</div><div class="bar-track"><div class="bar-fill" style="width:${w}%"></div></div><div class="bar-val">${v}</div></div>`;
  }).join('');
}
/* ---- color scale verde->amarillo->naranja->rojo ---- */
function heatColor(v,max){
  if(v===0) return '#EEF2F0';
  const t=max<=1?1:v/max; // 0..1
  const stops=[[231,240,234],[234,179,8],[234,88,12],[220,38,38]];
  const seg=t*(stops.length-1);let i=Math.floor(seg);if(i>=stops.length-1)i=stops.length-2;
  const f=seg-i,a=stops[i],b=stops[i+1];
  const c=a.map((x,k)=>Math.round(x+(b[k]-x)*f));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
function txtColor(v,max){return (max>0 && v/max>0.45)?'#fff':(v===0?'#AEB6BD':'var(--texto)');}
function renderHeat(data){
  // build matrix dia x franja
  const m={};ORD_DIA.forEach(d=>{m[d]={};ORD_FR.forEach(f=>m[d][f]=0);});
  data.forEach(r=>{if(m[r.d]&&m[r.d][r.f]!==undefined)m[r.d][r.f]++;});
  let max=0,hot={v:-1};
  ORD_DIA.forEach(d=>ORD_FR.forEach(f=>{const v=m[d][f];if(v>max)max=v;if(v>hot.v)hot={v,d,f};}));
  // head
  $('#heatHead').innerHTML='<tr><th class="rowh"></th>'+ORD_FR.map(f=>`<th>${f}</th>`).join('')+'</tr>';
  $('#heatBody').innerHTML=ORD_DIA.map(d=>{
    return `<tr><th class="rowh">${d}</th>`+ORD_FR.map(f=>{
      const v=m[d][f];const isHot=max>0&&v===max&&v>0;
      return `<td><div class="heat-cell ${isHot?'hot':''}" title="${d} · ${f}: ${v}" style="background:${heatColor(v,max)};color:${txtColor(v,max)}">${v||''}</div></td>`;
    }).join('')+'</tr>';
  }).join('');
  // insight
  const el=$('#insight');
  if(data.length===0||hot.v<=0){
    el.innerHTML='<div class="ii">📭</div><div><div class="it">Lectura del patrón</div><div class="iv">No hay registros para el filtro seleccionado.</div></div>';
  }else{
    const pct=Math.round(hot.v/data.length*100);
    el.innerHTML=`<div class="ii">🔥</div><div><div class="it">Lectura del patrón</div><div class="iv">El cruce más crítico es <b>${hot.d} · ${hot.f}</b>, con <b>${hot.v}</b> de ${data.length} riñas (${pct}%). Es el momento donde conviene concentrar la prevención.</div></div>`;
  }
}
function render(){
  const data=filtrar();
  $('#cnt').textContent=data.length;
  renderHeat(data);
  barras('#grafDia',ORD_DIA,data.map(r=>({_k:r.d})));
  barras('#grafFranja',ORD_FR,data.map(r=>({_k:r.f})));
}

/* ================= MAPA ZONAS ================= */
function initMapa(){
  const g=$('#zonaGrid');
  g.innerHTML=ZONAS.map(z=>{
    const r=RIESGO[z.riesgo];
    return `<div class="zona" data-z="${z.id}" style="background:${r.c}"><div class="zc">${z.sim}</div><div class="zn">${z.id}</div><div class="zr">${r.t.replace('Riesgo ','')}</div></div>`;
  }).join('');
  $$('.zona').forEach(el=>el.addEventListener('click',()=>{
    const id=el.dataset.z;
    $('#fZona').value=id;
    mostrarTab('anticipacion');
    renderAnticipacion();
  }));
}

/* ================= ANTICIPACIÓN ================= */
function initAnticipacion(){
  const sel=$('#fZona');
  sel.innerHTML='<option value="">— Selecciona una zona —</option>'+ZONAS.map(z=>`<option value="${z.id}">${z.id} · ${z.nombre}</option>`).join('');
  sel.addEventListener('change',renderAnticipacion);
}
function renderAnticipacion(){
  const id=$('#fZona').value;
  const cont=$('#antResult');
  if(!id){cont.innerHTML='<div class="ant-placeholder"><div class="big">🎯</div><p>Selecciona una zona para ver su análisis de anticipación.</p></div>';return;}
  const z=ZONAS.find(x=>x.id===id);const r=RIESGO[z.riesgo];
  cont.innerHTML=`
    <div class="ant-head" style="background:${r.c}">
      <div class="riesgo-ic">${r.ic}</div>
      <div><div class="rt">${r.t} esperado</div><div class="rn">${z.id} · ${z.nombre}</div><div class="rz">${z.desc}</div></div>
    </div>
    <div class="momento">
      <div class="mi">⏰</div>
      <div><div class="mt">Momento crítico</div><div class="mv">${z.momento}</div></div>
    </div>
    <div class="reco">
      <div class="reco-box pol"><div class="rh">👮 Para la Policía</div><p>${z.recoPol}</p></div>
      <div class="reco-box com"><div class="rh">🏪 Para el comerciante</div><p>${z.recoCom}</p></div>
    </div>`;
}

/* ================= ALERTAS ================= */
let nivelSel='';
const LS_KEY='tintal_alertas_v2';
function initAlertas(){
  const sel=$('#aZona');
  sel.innerHTML=ZONAS.map(z=>`<option value="${z.id}">${z.id} · ${z.nombre}</option>`).join('');
  $$('#nivelPick .nivel-btn').forEach(b=>b.addEventListener('click',()=>{
    $$('#nivelPick .nivel-btn').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');nivelSel=b.dataset.n;chkForm();
  }));
  $('#aEst').addEventListener('input',chkForm);
  $('#btnEnviar').addEventListener('click',enviar);
  $('#bandeja').addEventListener('click',e=>{const b=e.target.closest('[data-adv]');if(b)avanzar(b.dataset.adv);});
  renderBandeja();
}
function chkForm(){
  const ok=$('#aEst').value.trim().length>1 && nivelSel;
  $('#btnEnviar').disabled=!ok;
}
function horaStr(d){return d.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})+' · '+d.toLocaleDateString('es-CO',{day:'2-digit',month:'2-digit'});}
function getAlertas(){try{return JSON.parse(localStorage.getItem(LS_KEY))||[];}catch(e){return [];}}
function setAlertas(a){try{localStorage.setItem(LS_KEY,JSON.stringify(a));}catch(e){}}
function enviar(){
  const now=new Date();
  const a={
    id:'R-'+String(Date.now()).slice(-5),
    est:$('#aEst').value.trim(),
    zona:$('#aZona').value,
    tipo:$('#aTipo').value,
    nivel:nivelSel,
    tEnvio:now.getTime(),
    envioStr:horaStr(now),
    estado:'recibida',
    tAtencion:null
  };
  const arr=getAlertas();arr.unshift(a);setAlertas(arr);
  const t=$('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);
  $('#aEst').value='';nivelSel='';$$('#nivelPick .nivel-btn').forEach(x=>x.classList.remove('on'));chkForm();
  renderBandeja();
}
const FLUJO={recibida:{next:'atencion',badge:'🔴 Recibida',btn:'▶ Tomar / En atención',cls:'recibida'},
  atencion:{next:'atendida',badge:'🟠 En atención',btn:'✓ Marcar atendida',cls:'atencion'},
  atendida:{next:null,badge:'🟢 Atendida',btn:null,cls:'atendida'}};
function avanzar(id){
  const arr=getAlertas();const a=arr.find(x=>x.id===id);if(!a)return;
  const nx=FLUJO[a.estado].next;if(!nx)return;
  a.estado=nx;
  if(nx==='atendida')a.tAtencion=new Date().getTime();
  setAlertas(arr);renderBandeja();
}
function minutos(a){
  if(!a.tAtencion)return null;
  const m=Math.max(0,Math.round((a.tAtencion-a.tEnvio)/60000));
  return m;
}
function renderBandeja(){
  const arr=getAlertas();
  $('#bandejaCnt').textContent=arr.length+(arr.length===1?' reporte':' reportes');
  const el=$('#bandeja');
  if(arr.length===0){el.innerHTML='<div class="bandeja-vacia">Sin reportes aún. Envía uno desde el formulario para ver cómo llega al cuadrante.</div>';return;}
  el.innerHTML=arr.map(a=>{
    const fl=FLUJO[a.estado];const z=ZONAS.find(x=>x.id===a.zona);
    const m=minutos(a);
    return `<div class="alerta ${a.nivel}">
      <div class="alerta-top">
        <div><div class="alerta-est">${a.est}</div>
        <div class="alerta-meta">${a.id} · ${a.zona}${z?' ('+z.nombre+')':''} · ${a.tipo}</div>
        <div class="alerta-meta">📨 Enviado ${a.envioStr}</div></div>
        <span class="chip-niv ${a.nivel}">${a.nivel}</span>
      </div>
      <div class="estado-row">
        <span class="estado-badge ${fl.cls}">${fl.badge}</span>
        ${fl.btn?`<button class="btn-estado" data-adv="${a.id}">${fl.btn}</button>`:''}
        ${a.estado==='atendida'&&m!==null?`<span class="tiempo-at">⏱ Atendida en ~${m} min</span>`:''}
      </div>
    </div>`;
  }).join('');
}

/* ================= TABS ================= */
function mostrarTab(name){
  $$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===name));
  $$('.panel').forEach(p=>p.classList.toggle('active',p.id===name));
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='simulacion'){setTimeout(()=>{if(window.__initSimMap)window.__initSimMap();},80);}
}
function initTabs(){
  $$('.tab').forEach(t=>t.addEventListener('click',()=>mostrarTab(t.dataset.tab)));
}

/* ================= INIT ================= */
initTabs();initFiltros();render();initMapa();initAnticipacion();initAlertas();
