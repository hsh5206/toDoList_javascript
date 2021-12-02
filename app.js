/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
*/
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 모든 행동X(ex. submit후 새로고침)

  let value = loginInput.value;
  const username = value;
  localStorage.setItem(USERNAME_KEY,username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

if(Boolean(savedUserName)){
  paintGreetings(savedUserName);
} else{
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}