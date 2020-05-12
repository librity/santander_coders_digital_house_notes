window.addEventListener('load', function () {
  const tituloFilme = document.querySelector('h2');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const paragrafos = document.querySelectorAll('p');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const pulpFiction = document.getElementById('pulp-fiction');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const barraDeNavegacao = document.getElementsByClassName('nav-bar');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  document.querySelector('body').style.backgroundColor = 'lightskyblue';
  document.querySelector('h2').style.textAlign = 'center';
  document.querySelector('h4').style.fontStyle = 'italic';
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const livros = document.querySelectorAll('li');

  for (let livro of livros) {
    livro.style.color = 'orange';
  }
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  document.querySelector('div').classList.add('container');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  document.querySelector('h1').classList.remove('titulo');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  document.querySelector('h1').classList.toggle('titulo-tuneado');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const linkContato = document.querySelector('.contato');

  linkContato.addEventListener('click', () => {
    console.log(linkContato);
  });
});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const titulo = document.querySelector('h1');

  titulo.addEventListener('onmouseover', () => {
    titulo.classList.add('titulo');
  });
});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  const links = document.querySelectorAll('a');

  for (let link of links) {
    link.addEventListener('mouseout', () => {
      link.classList.toggle('dark-mode');
    });
  }
});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', () => {
  const titulo = document.querySelector('.titulo');
  const segundos = document.querySelector('.segundos');

  const botaoMostrar = document.querySelector('.mostrar-segundos');
  const botaoOcultar = document.querySelector('.ocultar-segundos');

  botaoMostrar.addEventListener('click', () => {
    const atualizaSegundo = setInterval(() => {
      const data = new Date();

      segundos.innerHTML = data.getSeconds();
      titulo.style.display = 'none';
      segundos.style.display = 'block';
    }, 0);
  });

  botaoOcultar.addEventListener('click', () => {
    titulo.style.display = 'none';
    segundos.style.display = 'block';

    clearInterval(atualizaSegundo);
  });
});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  let formulario = document.querySelector('form');

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
  });
});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
window.addEventListener('load', function () {
  let formulario = document.querySelector('form');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome');
    if (!nome.value)
      console.log('Ocorreu um erro no campo nome');

    const senha = document.querySelector('#senha');
    if (senha.value.length < 4)
      console.log('Ocorreu um erro no campo senha');
  });
});
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
