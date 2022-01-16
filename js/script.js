let post = document.getElementById('ButtonPost');
let clear = document.getElementById('ButtonClear');
let mark = document.getElementById('ButtonMark');
let del = document.getElementById('ButtonDelete');

// Registrar el Evento

post.addEventListener('click', TodoPost);
clear.addEventListener('click', TodoClear);
mark.addEventListener('click', TodoMark);
del.addEventListener('click', TodoDel);

function TodoPost(e) {
  e.preventDefault();

  let todo = document.getElementById('todoText').value;
  let list = document.getElementById('todoList');

  let div = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');

  input.type = 'checkbox';
  input.name = 'todo';
  div.className = 'inputTodo';

  label.textContent = todo;

  div.appendChild(input);
  div.appendChild(label);

  list.append(div);
}

function TodoClear(e) {
  e.preventDefault();
  let todos = document.getElementsByName('todo');
  for (let i = 0; i < todos.length; i++) {
    todos[i].checked = false;
  }
}

function TodoMark(e) {
  e.preventDefault();
  let todos = document.getElementsByName('todo');
  for (let i = 0; i < todos.length; i++) {
    todos[i].checked = true;
  }
}

function TodoDel(e) {
  e.preventDefault();
  let todos = document.getElementsByClassName('inputTodo');
  console.log(todos);
  for (var i = todos.length - 1; i >= 0; i--) {
    todos[i].parentNode.removeChild(todos[i]);
  }
}
