const btnDrop = document.querySelector('.btn-dpw-atv');
const btnContent = document.querySelector('.btn-ctnm');
const btnDropCp = document.querySelector('.btn-dpwCp-atv');
const btnContentCp = document.querySelector('.btn-ctnmCp');
const btnBarNav = document.querySelector('.bar-nav-menu-lat');
const btnBarNavCont = document.querySelector('.barra-navegacion-cont-menus');

function activar(a, b) {
  let btnUno = a;
  let btnDos = b;
  btnUno.addEventListener('click', () => {
    btnDos.classList.toggle('activo');
  });
};

btnBarNav.addEventListener('click', () => {
  btnBarNav.classList.toggle('activo');
  // No lo he podido solucionar así que comento esta linea para que no funcione mientras lo reparo :)
  // btnBarNavCont.classList.toggle('activo');
});

activar(btnDrop, btnContent);
activar(btnDropCp, btnContentCp);
