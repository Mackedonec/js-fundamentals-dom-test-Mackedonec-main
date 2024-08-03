// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Твій код має бути тут

const myFirstParent = document.querySelector(".array");
const mySecondParent = myFirstParent.children[0];
const name = mySecondParent.children[1].value;
const phoneNumber = mySecondParent.children[2].value;
const dateOfBirth = mySecondParent.children[3].value;
const emailAddress = mySecondParent.children[4].value;
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
