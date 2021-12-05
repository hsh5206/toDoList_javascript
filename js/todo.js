const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 스트링화
}

function deleteToDo(event) {
  // 몇번째 버튼이 클릭 됐는지
  const li = event.target.parentElement; // 어떤 내용인지 특정함
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 필터링(삭제할 요소의 아이디만 특정) 배열로 빼고 배열로 만듬
  saveToDos();
}

//toDo 추가
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodoObj.text;

  button.innerText = "X";
  button.className = "button"
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // 파싱
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 배열인덱스마다 각각 paintToDo실행
}

