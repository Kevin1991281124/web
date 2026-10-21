//ayuda de ia 
window.addEventListener('DOMContentLoaded', () => {
  const onlineList = document.getElementById('onlineList');
  const counterOnline = document.getElementById('counterOnline');

  if (!onlineList || !counterOnline) return;

  
  const MATRICULA_FIJA = '24100034';

  
  function generarMatricula() {
    const prefijos = ['21', '22', '23', '24'];
    let matricula = '';
    do {
      const prefijo = prefijos[Math.floor(Math.random() * prefijos.length)];
      const resto = Math.floor(100000 + Math.random() * 900000);
      matricula = prefijo + resto;
    } while (matricula === MATRICULA_FIJA); 

    return matricula;
  }

  
  let usuariosActivos = [MATRICULA_FIJA];
  const cantidadInicial = Math.floor(Math.random() * 3) + 4;

  for (let i = 0; i < cantidadInicial; i++) {
    usuariosActivos.push(generarMatricula());
  }

  function renderizarLista() {
    onlineList.innerHTML = '';
    counterOnline.textContent = usuariosActivos.length;

    usuariosActivos.forEach((matricula, index) => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.justify = 'space-between';
      li.style.padding = '6px 10px';
      li.style.background = index === 0 ? '#032b45' : '#09090b'; 
      li.style.border = index === 0 ? '1px solid #0284c7' : '1px solid #27272a';
      li.style.borderRadius = '6px';
      li.style.fontSize = '12px';
      li.style.fontFamily = "'Share Tech Mono', monospace";
      li.style.color = '#e4e4e7';

      const esDestacado = index === 0;

      li.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 8px; height: 8px; background-color: #22c55e; border-radius: 50%; box-shadow: 0 0 6px #22c55e;"></span>
          <span style="${esDestacado ? 'font-weight: bold; color: #38bdf8;' : ''}">Reg. ${matricula}</span>
        </div>
        <span style="font-size: 10px; color: ${esDestacado ? '#38bdf8' : '#71717a'}; font-weight: ${esDestacado ? '600' : '400'};">
          ${esDestacado ? 'Más activo' : 'En línea'}
        </span>
      `;
      onlineList.appendChild(li);
    });
  }

  
  function actualizarUsuarios() {
    
    if (usuariosActivos.length > 1) {
      const indexEliminar = Math.floor(Math.random() * (usuariosActivos.length - 1)) + 1;
      usuariosActivos.splice(indexEliminar, 1);
    }

    
    usuariosActivos.push(generarMatricula());

    
    const azar = Math.random();
    if (azar > 0.5 && usuariosActivos.length < 10) {
      usuariosActivos.push(generarMatricula());
    } else if (azar < 0.3 && usuariosActivos.length > 3) {
      usuariosActivos.pop();
    }

    renderizarLista();
  }

  renderizarLista();

  
  setInterval(actualizarUsuarios, 3500);
});
