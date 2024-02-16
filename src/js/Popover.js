export default class Popover {
  constructor() {
    this.popoverEl = document.createElement("div");
    this.popoverEl.classList.add("popover");
    this.arrowEl = document.createElement("div");
    this.arrowEl.classList.add("arrow");
    this.popoverHeaderEl = document.createElement("h3");
    this.popoverHeaderEl.classList.add("popover-header");
    this.popoverBodyEl = document.createElement("div");
    this.popoverBodyEl.classList.add("popover-body");
    this.popoverEl.appendChild(this.arrowEl);
    this.popoverEl.appendChild(this.popoverHeaderEl);
    this.popoverEl.appendChild(this.popoverBodyEl);
    this.active = false;
  }

  setContent(text) {
    this.popoverBodyEl.textContent = text;
  }

  render(parentEl, title) {
    this.popoverHeaderEl.textContent = title;
    document.body.appendChild(this.popoverEl);
    const { top: parentTop, left: parentLeft } =
      parentEl.getBoundingClientRect();
    const widthParrent = parentEl.offsetWidth;
    const widthPopover = this.popoverEl.offsetWidth;
    const heightPopover = this.popoverEl.offsetHeight;
    const topPopover =
      parentTop - heightPopover - 8 < 0 ? 0 : parentTop - heightPopover - 8;
    const leftPopover =
      parentLeft + widthParrent / 2 - widthPopover / 2 < 0
        ? 0
        : parentLeft + widthParrent / 2 - widthPopover / 2;
    this.popoverEl.style.top = topPopover + "px";
    this.popoverEl.style.left = leftPopover + "px";
    const topArrow = heightPopover - 1;
    const leftArrow = widthPopover / 2 - 8;
    this.arrowEl.style.top = topArrow + "px";
    this.arrowEl.style.left = leftArrow + "px";
    this.active = true;
  }

  hide() {
    document.querySelector(".popover").remove();
    this.active = false;
  }
}
