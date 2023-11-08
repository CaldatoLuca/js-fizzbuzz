"use.strict";

// ?elementi HTML
const elementLista = document.querySelector(".-lc-list");

// ?variabili
const divisibilePerTre = "Fizz";
const divisibilePerCinque = "Buzz";

for (let i = 1; i <= 100; i++) {
  //* creazione elemento html li
  const li = document.createElement("div");
  li.classList.add("-lc-list-item");
  li.classList.add("rounded");
  li.classList.add("shadow-lg");

  //! condizioni
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(divisibilePerTre + divisibilePerCinque);
    li.append(divisibilePerTre + divisibilePerCinque);
    li.classList.add("-lc-number-3-5");
  } else if (i % 5 === 0) {
    console.log(divisibilePerCinque);
    li.append(divisibilePerCinque);
    li.classList.add("-lc-number-5");
  } else if (i % 3 === 0) {
    console.log(divisibilePerTre);
    li.append(divisibilePerTre);
    li.classList.add("-lc-number-3");
  } else {
    console.log({ i });
    li.append(i);
    li.classList.add("-lc-number");
  }

  //* inserirsco li nella ul
  elementLista.append(li);
}
