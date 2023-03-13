window.addEventListener("load", init);

const KEPEK = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg"];

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
    aktualisKepIndex < KEPEK.length;
    aktualisKepIndex++
  ) {
    kep +=
      divEleje + "<img src='" + KEPEK[aktualisKepIndex] + "' alt=''>" + divVege;
  }
  article.innerHTML = kep;
}

function kepreKattintas() {
  const KISKEPEK = document.querySelectorAll("article div img");
  for (let index = 0; index < KISKEPEK.length; index++) {
    KISKEPEK[index].addEventListener("click", function () {
      keprekatt();
    });
  }
}

function keprekatt() {
  console.log(event.target);
  console.log(event.target.scr);
  const NAGYKEP = document.querySelectorAll("section div img");
  console.log(NAGYKEP);
  NAGYKEP[0].src = event.target.src;
}

function gombraKattintas() {
  const BAL = document.querySelector(".bal");
  const JOBB = document.querySelector(".jobb");

  BAL.addEventListener("click", function () {
    balGomb();
  });
  JOBB.addEventListener("click", function () {
    jobbGomb();
  });
}

function balGomb() {
  aktualisKepIndex--;
  if (aktualisKepIndex < 0) {
    aktualisKepIndex = KEPEK.length - 1;
  }
  const NAGYKEP = document.querySelector("section div img");
  NAGYKEP.src = KEPEK[aktualisKepIndex];
}

function jobbGomb() {
  aktualisKepIndex++;
  if (aktualisKepIndex > KEPEK.length - 1) {
    aktualisKepIndex = 0;
  }
  const NAGYKEP = document.querySelector("section div img");
  NAGYKEP.src = KEPEK[aktualisKepIndex];
}
