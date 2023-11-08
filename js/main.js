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

  //! condizioni
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(divisibilePerTre + divisibilePerCinque);
    li.append(divisibilePerTre + divisibilePerCinque);
  } else if (i % 5 === 0) {
    console.log(divisibilePerCinque);
    li.append(divisibilePerCinque);
  } else if (i % 3 === 0) {
    console.log(divisibilePerTre);
    li.append(divisibilePerTre);
  } else {
    console.log({ i });
    li.append(i);
  }

  //* inserirsco li nella ul
  elementLista.append(li);
}
