let normalButton = document.querySelector("button");
let normalImage = document.querySelector("img");
let screen = document.querySelector("body");
let imageContentImage = document.querySelector("#image-content-image");

normalButton.addEventListener("click", () => {
  if (normalButton.textContent === "Clicar") {
    normalImage.classList.add("show-image");
    normalImage.classList.remove("make-image-invisible");

    normalButton.innerHTML = "Desativar";
    screen.classList.add("dark-screen");
    screen.classList.remove("screen-of-peace");
    imageContentImage.classList.add("image-content-show");
    imageContentImage.classList.remove("image-content-disabled");
  } else {
    normalImage.classList.remove("show-image");
    normalImage.classList.add("make-image-invisible");
    normalButton.innerHTML = "Clicar";
    screen.classList.remove("dark-screen");
    screen.classList.add("screen-of-peace");
    imageContentImage.classList.remove("image-content-show");
    imageContentImage.classList.add("image-content-disabled");
  }
});
