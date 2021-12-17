const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const signUP = document.querySelector("#signUp");
const container = document.querySelector(".conteiner");

signUP.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  container.classList.remove("sign-in-mode");
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
