/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "your"];
  let adj = ["best", "worst", "great"];
  let noun = ["burger", "pizza", "pasta"];
  let ext = [".com", ".net"];

  function generarDominios(pronombres, adjetivos, sustantivos, extensiones) {
    const resultado = [];

    let dominio;

    pronombres.forEach(function(pronombre) {
      adjetivos.forEach(function(adjetivo) {
        sustantivos.forEach(function(sustantivo) {
          extensiones.forEach(function(extension) {
            dominio = `${pronombre}${adjetivo}${sustantivo}${extension}`;
            resultado.push(dominio);
          });
        });
      });
    });

    return resultado;
  }

  const dominios = generarDominios(pronoun, adj, noun, ext);

  const lista = document.getElementById("list");

  dominios.forEach(dominios => {
    let li = document.createElement("li");
    let nodoTexto = document.createTextNode(dominios);
    li.appendChild(nodoTexto);
    li.className = "domainItems";
    lista.appendChild(li);
  });
};
