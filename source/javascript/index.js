"use strict";

// Funções utilitárias
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo, elementos) => {
  const { segundos, minutos, horas, dias } = elementos;
  const qtdSegundos = tempo % 60;
  const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
  const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
  const qtdDias = Math.floor(tempo / (60 * 60 * 24));

  segundos.textContent = formatarDigito(qtdSegundos);
  minutos.textContent = formatarDigito(qtdMinutos);
  horas.textContent = formatarDigito(qtdHoras);
  dias.textContent = formatarDigito(qtdDias);
};

const contagemRegressiva = (tempo, elementos) => {
  const pararContagem = () => clearInterval(id);

  const contar = () => {
    if (tempo <= 0) pararContagem();
    atualizar(tempo, elementos);
    tempo--;
  };
  const id = setInterval(contar, 1000);
};

const tempoRestante = (dataEvento) => {
  const hoje = Date.now();
  return Math.floor((dataEvento - hoje) / 1000);
};

// Inicializa contadores de exemplo
const initContadores = () => {
  const dataEvento1 = new Date("2024-09-18T07:00:00");
  const dataEvento2 = new Date("2024-09-14T00:00:00");

  const elementos1 = {
    segundos: document.getElementById("segundos"),
    minutos: document.getElementById("minutos"),
    horas: document.getElementById("horas"),
    dias: document.getElementById("dias"),
  };

  const elementos2 = {
    segundos: document.getElementById("segundos-shirt"),
    minutos: document.getElementById("minutos-shirt"),
    horas: document.getElementById("horas-shirt"),
    dias: document.getElementById("dias-shirt"),
  };

  contagemRegressiva(tempoRestante(dataEvento1), elementos1);
  contagemRegressiva(tempoRestante(dataEvento2), elementos2);
};

// Animações
const dAnimate = (me, action, duration, flex = false) => {
  const displayPropShow = flex ? "flex" : "block";
  switch (action) {
    case "show":
      me.style.cssText = `display: ${displayPropShow}; transition: opacity .4s; opacity: 0;`;
      setTimeout(() => { me.style.cssText += "opacity: 1;"; }, duration);
      break;
    case "hide":
      me.style.cssText = `display: ${displayPropShow}; transition: opacity .4s; opacity: 0;`;
      setTimeout(() => { me.style.cssText += "display:none;"; }, duration);
      break;
    default:
      break;
  }
};

// Elementos ativos
const activeElement = (selector) => {
  for (let element of selector) {
    if (element.classList.contains("active")) return element;
  }
  return null;
};

// Scroll suave
$(document).ready(() => {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate({ scrollTop: $(hash).offset().top }, 800, () => {
        window.location.hash = hash;
      });
    }
  });

  // Animações ao revelar elementos
  ScrollReveal().reveal(
    '.home__data, .home__img, .about__data, .about__img, .services__content, .products__content, .representative__data, .representative__img, .guide, .countdown-shirt, .contact__data, .contact__button, .footer__content',
    {
      origin: "left",
      opacity: 0.7,
      distance: "100px",
      duration: 1500,
      reset: false,
      interval: 20
    }
  );

  // Inicializa contadores
  initContadores();

  // Configura os dias do guia
  const days = document.querySelectorAll("#guide .days .day");
  days.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (element !== activeElement(days) && activeElement(days)) {
        activeElement(days).classList.remove("active");
        e.target.classList.add("active");

        const descItems = document.querySelectorAll("#guide .details div");
        const desc = document.getElementById(e.target.dataset.day);

        if (!desc.classList.contains("active")) {
          const x = activeElement(descItems);
          dAnimate(x, "hide", 5);
          x.classList.remove("active");
          setTimeout(() => {
            desc.classList.add("active");
            dAnimate(desc, "show", 200);
          });
        }
      }
    });
  });
});