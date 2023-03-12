window.addEventListener("load", init);

const kepek = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg"];

let aktualisKepIndex = 0;
let divEleje = "<div>";
let divVege = "</div>";

function init() {
  kepMegjelenites();
  kepreKattintas();
  gombraKattintas();
}

function kepMegjelenites() {
  let kep = "";
  let article = document.getElementById("galeria");
  for (
    let aktualisKepIndex = 0;
    aktualisKepIndex < kepek.length;
    aktualisKepIndex++
  ) {
    kep +=
      divEleje + "<img src='" + kepek[aktualisKepIndex] + "' alt=''>" + divVege;
  }
  article.innerHTML = kep;
}

function kepreKattintas() {
  const kisKepek = document.querySelectorAll("article div img");
  for (let index = 0; index < kisKepek.length; index++) {
    kisKepek[index].addEventListener("click", function () {
      keprekatt();
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

function gombraKattintas() {
  const bal = document.querySelector(".bal");
  const jobb = document.querySelector(".jobb");

  bal.addEventListener("click", function () {
    balGomb();
  });
  jobb.addEventListener("click", function () {
    jobbGomb();
  });
}

function balGomb() {
  aktualisKepIndex--;
  if (aktualisKepIndex < 0) {
    aktualisKepIndex = kepek.length - 1;
  }
  const nagykep = document.querySelector("section div img");
  nagykep.src = kepek[aktualisKepIndex];
}

function jobbGomb() {
  aktualisKepIndex++;
  if (aktualisKepIndex > kepek.length - 1) {
    aktualisKepIndex = 0;
  }
  const nagykep = document.querySelector("section div img");
  nagykep.src = kepek[aktualisKepIndex];
}
