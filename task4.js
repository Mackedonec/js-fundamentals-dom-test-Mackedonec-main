// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Твій код має бути тут

const myFirstParrent = document.querySelector(".array");
const mySecondParrent = myFirstParrent.firstElementChild;
const name = mySecondParrent.children[1].value;
const phoneNumber = mySecondParrent.children[2].value;
const dateOfBirth = mySecondParrent.children[3].value;
const emailAddress = mySecondParrent.children[4].value;
// console.log(name);
// console.log(phoneNumber);
// console.log(dateOfBirth);
// console.log(emailAddress);

//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  name,
  phoneNumber,
  dateOfBirth,
  emailAddress,
};
