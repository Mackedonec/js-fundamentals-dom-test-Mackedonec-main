// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Твій код має бути тут

// solution №1

const myFirstParent = document.querySelector(".array");
const mySecondParent = myFirstParent.children[0];
const name = mySecondParent.children[1].value;
const phoneNumber = mySecondParent.children[2].value;
const dateOfBirth = mySecondParent.children[3].value;
const emailAddress = mySecondParent.children[4].value;

// solution №2

// const inputs = document.querySelectorAll(".array .arr");
// const name = inputs[0].value;
// const phoneNumber = inputs[1].value;
// const dateOfBirth = inputs[2].value;
// const emailAddress = inputs[3].value;

// solution №3

// const name = document.querySelector('input[name="fio"]').value;
// const phoneNumber = document.querySelector('input[name="phone"]').value;
// const dateOfBirth = document.querySelector('input[name="birthday"]').value;
// const emailAddress = document.querySelector('input[name="email"]').value;

// solution №4

// const form = document.querySelector(".array fieldset");

// const formData = new FormData(form);

// const name = formData.get("fio");
// const phoneNumber = formData.get("phone");
// const dateOfBirth = formData.get("birthday");
// const emailAddress = formData.get("email");

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
