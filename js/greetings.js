/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
*/
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings() {
  const username = localStorage.getItem("username");
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 모든 행동X(ex. submit후 새로고침)

  localStorage.setItem(USERNAME_KEY,loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(Boolean(savedUserName)){
  paintGreetings();
} else{
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}