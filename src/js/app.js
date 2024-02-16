import Popover from "./Popover";

const popover = new Popover();
const onClick = (e) => {
  if (popover.active) {
    popover.hide();
    return;
  }
  popover.setContent(" Произошло нажатие на красную кнопку!");
  popover.render(e.target, "Внимание!");
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", onClick);
