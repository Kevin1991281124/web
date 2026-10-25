// Al hacer clic en "Calendario Escolar" se abre otra ventana con la imagen.
const btnCalendario = document.getElementById("btnCalendario");

if (btnCalendario) {
  btnCalendario.addEventListener("click", function () {
    window.open("img/Calendario.png", "calendario", "width=900,height=700");
  });
}
