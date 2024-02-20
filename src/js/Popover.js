// Экспортируем класс Popover по умолчанию
export default class Popover {
  // Конструктор класса
  constructor() {
    // Создаем элементы всплывающего окна и устанавливаем им классы
    this.popoverEl = document.createElement("div");
    this.popoverEl.classList.add("popover");
    this.arrowEl = document.createElement("div");
    this.arrowEl.classList.add("arrow");
    this.popoverHeaderEl = document.createElement("h3");
    this.popoverHeaderEl.classList.add("popover-header");
    this.popoverBodyEl = document.createElement("div");
    this.popoverBodyEl.classList.add("popover-body");
    // Добавляем созданные элементы всплывающему окну
    this.popoverEl.appendChild(this.arrowEl);
    this.popoverEl.appendChild(this.popoverHeaderEl);
    this.popoverEl.appendChild(this.popoverBodyEl);
    // Устанавливаем начальное состояние всплывающего окна как неактивное
    this.active = false;
  }

  // Метод для установки контента всплывающего окна
  setContent(text) {
    this.popoverBodyEl.textContent = text;
  }

  // Метод для отображения всплывающего окна
  render(parentEl, title) {
    // Устанавливаем заголовок всплывающего окна
    this.popoverHeaderEl.textContent = title;
    // Добавляем всплывающее окно к телу документа
    document.body.appendChild(this.popoverEl);
    // Получаем позицию родительского элемента
    const { top: parentTop, left: parentLeft } =
      parentEl.getBoundingClientRect();
    const widthParrent = parentEl.offsetWidth;
    const widthPopover = this.popoverEl.offsetWidth;
    const heightPopover = this.popoverEl.offsetHeight;
    // Вычисляем позицию и устанавливаем её
    const topPopover =
      parentTop - heightPopover - 8 < 0 ? 0 : parentTop - heightPopover - 8;
    const leftPopover =
      parentLeft + widthParrent / 2 - widthPopover / 2 < 0
        ? 0
        : parentLeft + widthParrent / 2 - widthPopover / 2;
    this.popoverEl.style.top = topPopover + "px";
    this.popoverEl.style.left = leftPopover + "px";
    // Вычисляем позицию стрелки и устанавливаем её
    const topArrow = heightPopover - 1;
    const leftArrow = widthPopover / 2 - 8;
    this.arrowEl.style.top = topArrow + "px";
    this.arrowEl.style.left = leftArrow + "px";
    // Устанавливаем состояние всплывающего окна как активное
    this.active = true;
  }

  // Метод для скрытия всплывающего окна
  hide() {
    // Удаляем всплывающее окно из документа
    document.querySelector(".popover").remove();
    // Устанавливаем состояние всплывающего окна как неактивное
    this.active = false;
  }
}
