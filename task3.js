// Допишіть скрипт у функцію applyStyles(), який за допомогою засобів DOM створить таку структуру з тегів і їх атрибутів.
//
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// solution №1

const newEl = document.querySelector(".create_elements");

function applyStyles() {
  newEl.innerHTML = `
  <main class="mainClass check item">
     <div id="myDiv">
        <p>First paragraph</p>
     </div>
  </main>`;
}

//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles();
module.exports = applyStyles;
