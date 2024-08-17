"use strict";

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
    if (tempo <= 0) {
      pararContagem();
    }
    atualizar(tempo, elementos);
    tempo--;
  };
  const id = setInterval(contar, 1000);
};

const tempoRestante = (dataEvento) => {
  const hoje = Date.now();
  return Math.floor((dataEvento - hoje) / 1000);
};

// Exemplo de como iniciar dois contadores
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

const dataEvento1 = new Date("2024-09-18 07:00:00");
const dataEvento2 = new Date("2024-09-14 00:00:00");

contagemRegressiva(tempoRestante(dataEvento1), elementos1);
contagemRegressiva(tempoRestante(dataEvento2), elementos2);