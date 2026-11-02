const botaoMenu = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');
const linksMenu = [...menu.querySelectorAll('a')];

function alternarMenu(abrir) {
  botaoMenu.setAttribute('aria-expanded', String(abrir));
  botaoMenu.textContent = abrir ? 'Fechar' : 'Menu';
  menu.classList.toggle('aberto', abrir);
}

botaoMenu.addEventListener('click', () => {
  alternarMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
});

linksMenu.forEach((link) => {
  link.addEventListener('click', () => alternarMenu(false));
});

const secoes = linksMenu.map((link) => document.querySelector(link.getAttribute('href')));

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;
    linksMenu.forEach((link) => {
      const ativo = link.getAttribute('href') === '#' + entrada.target.id;
      link.classList.toggle('ativo', ativo);
      if (ativo) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  });
}, { rootMargin: '-35% 0px -60% 0px' });

secoes.forEach((secao) => observador.observe(secao));

const botaoCopiar = document.querySelector('.copiar');

botaoCopiar.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(botaoCopiar.dataset.copiar);
    botaoCopiar.textContent = 'E-mail copiado';
  } catch {
    botaoCopiar.textContent = 'Selecione o e-mail ao lado para copiar';
  }
  setTimeout(() => {
    botaoCopiar.textContent = 'Copiar e-mail';
  }, 2500);
});

document.getElementById('ano').textContent = new Date().getFullYear();
