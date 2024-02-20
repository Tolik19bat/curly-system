// Импортируем компонент Popover из файла Popover.js
import Popover from "./Popover";

// Создаём новый экземпляр класса Popover
const popover = new Popover();

// Обработчик события клика
const onClick = (e) => {
  // Если всплывающее окно активно, скрываем его и выходим из функции
  if (popover.active) {
    popover.hide();
    return;
  }
  // Устанавливаем содержимое всплывающего окна
  popover.setContent(
    "And here`s some amazing content. It`s very enganging. Right?",
  );
  // Отображаем всплывающее окно рядом с элементом, на который был произведён клик
  popover.render(e.target, "Popower title");
};

// Получаем кнопку с классом "btn"
const btn = document.querySelector(".btn");

// Добавляем обработчик события клика на кнопку
btn.addEventListener("click", onClick);
