window.addEventListener("load", init);

const kepek = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg"];

let aktualisKepIndex = 0;
let divEleje = "<div>";
let divVege = "</div>";

function init() {
  kepMegjelenites();
  kepreKattintas();
}

function kepMegjelenites() {
  let kep = "";
  let article = document.getElementById("galeria");
  for (let akt = 0; index < kepek.length; index++) {
    kep += divEleje + "<img src='" + kepek[index] + "' alt=''>" + divVege;
  }
  article.innerHTML = kep;
}

function kepreKattintas() {
  const kisKepek = document.querySelectorAll("article div img");
  for (let index = 0; index < kisKepek.length; index++) {
    kisKepek[index].addEventListener("click", function () {
      keprekatt(index);
    });
  }
}

function keprekatt() {
  console.log(event.target);
  console.log(event.target.scr);
  const nagykep = document.querySelectorAll("section div img");
  console.log(nagykep);
  nagykep[0].src = event.target.src;
}

function gombok() {
  const bal = document.getElementsByClassName("bal");
  const jobb = document.getElementsByClassName("jobb");
  for (let index = 0; index < kisKepek.length; index++) {
    bal.addEventListener("click", bal());
    jobb.addEventListener("click", jobb());
  }
}

function bal() {}
