import Popover from "./Popover";

const popover = new Popover();
const onClick = (e) => {
  if (popover.active) {
    popover.hide();
    return;
  }
  popover.setContent(
    "And here`s some amazing content. It`s very enganging. Right?",
  );
  popover.render(e.target, "Popower title");
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", onClick);
