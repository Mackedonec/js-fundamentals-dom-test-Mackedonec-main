// Допишіть функцію applyStyles, щоб простилізувати елементи як показано на картинці task2.png

const myTitle = document.querySelector("#title");
const myDivList = document.querySelector("#myDiv");
const myUlList = document.querySelector("#myList");
const mySpan = document.querySelector("span");

function applyStyles() {
  // solution №1

  //   myTitle.outerHTML = `
  //     <h1 id="title" style="background-color: lightgreen">
  //       I'am a big header!!!
  //     </h1>
  //     `;

  //   myDivList.outerHTML = `
  //     <div id="myDiv">
  //      <p style="font-weight: 700">First paragraph</p>
  //      <p style="color: red">Second paragraph</p>
  //      <p style="text-decoration: underline">Third paragraph</p>
  //      <p style="font-style: italic">Fourth paragraph</p>
  //     </div>
  //     `;

  //   myUlList.outerHTML = `
  //     <ul id="myList" style="display: flex; list-style: none">
  //         <li>Make</li>
  //         <li>me</li>
  //         <li>horizontal!</li>
  //     </ul>
  //     `;

  //   mySpan.outerHTML = `
  //     <span style="display: none">
  //       Make me invisible, please!
  //     </span>
  //     `;

  // solution №2

  myTitle.style.backgroundColor = "lightgreen";

  const myFirstDiv = myDivList.firstElementChild;
  myFirstDiv.style.fontWeight = "700";

  const mySecondDiv = myDivList.firstElementChild.nextElementSibling;
  mySecondDiv.style.color = "red";

  const myThirdDiv = myDivList.lastElementChild.previousElementSibling;
  myThirdDiv.style.textDecoration = "underline";

  const myFourthdiv = myDivList.lastElementChild;
  myFourthdiv.style.fontStyle = "italic";

  myUlList.style.display = "flex";
  myUlList.style.listStyle = "none";

  mySpan.style.display = "none";
}

//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles();
module.exports = applyStyles;
