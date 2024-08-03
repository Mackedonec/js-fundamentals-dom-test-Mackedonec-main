// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

//Твій код має бути тут

const mainId = document.querySelector("#list");
const firstEl = mainId.firstElementChild;
const lastEl = mainId.lastElementChild;
const secondtEl = mainId.firstElementChild.nextElementSibling;
const thirdtEl = mainId.firstElementChild.nextElementSibling.nextElementSibling;
const fourthEl = mainId.lastElementChild.previousElementSibling;

const firstElText = firstEl.textContent;
const lastElText = lastEl.textContent;
const secondElText = secondtEl.textContent;
const thirdElText = thirdtEl.textContent;
const fourthElText = fourthEl.textContent;

let text = `${firstElText}, ${lastElText}, ${secondElText}, ${fourthElText}, ${thirdElText}`;
console.log(text);
//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
