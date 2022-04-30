const container = document.querySelector(".container");
const ampliarlienzo = document.querySelector(".lienzo");
const btnampliar = document.querySelector(".btn");

function ampliar() {
  container.classList.remove("container");
  container.classList.add("containerampliar");

  ampliarlienzo.classList.remove("lienzo");
  ampliarlienzo.classList.add("lienzoampliar");

  btnampliar.innerHTML = "Reducir Canvas";
  btnampliar.classList.remove("btn");
  btnampliar.classList.add("btnampliar");

  btnampliar.setAttribute("onClick", "reducir()");
}

function reducir() {
  container.classList.remove("containerampliar");
  container.classList.add("container");

  ampliarlienzo.classList.remove("lienzoampliar");
  ampliarlienzo.classList.add("lienzo");

  btnampliar.innerHTML = "Ampliar Canvas";
  btnampliar.classList.remove("btnampliar");
  btnampliar.classList.add("btn");

  btnampliar.setAttribute("onClick", "ampliar()");
}
