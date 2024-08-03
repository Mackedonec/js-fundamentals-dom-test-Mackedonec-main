// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

//Твій код має бути тут

const mainId = document.querySelector("#list");
firstEl = mainId.firstElementChild;
lastEl = mainId.lastElementChild;
secondtEl = mainId.firstElementChild.nextElementSibling;
thirdtEl = mainId.firstElementChild.nextElementSibling.nextElementSibling;
fourthEl = mainId.lastElementChild.previousElementSibling;
console.log(firstEl);
console.log(lastEl);
console.log(secondtEl);
console.log(thirdtEl);
console.log(fourthEl);

//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
