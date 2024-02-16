/**
 * @jest-environment jsdom
 */

import Popover from "../Popover";

test("testing Popover widget", () => {
  document.documentElement.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div class = "calling" style = "top: 100px; left: 100px; width: 100px; height: 30px"></div>
    </body>
    </html>`;

  const element = document.querySelector(".calling");
  const popover = new Popover();
  popover.setContent(" Произошло нажатие на красную кнопку!");
  popover.render(element, "Внимание!");
  const result = document.querySelector(".popover").className;
  expect(result).toBe("popover");
});
