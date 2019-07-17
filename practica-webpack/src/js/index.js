// import dayjs from 'dayjs';
import 'dayjs/locale/es';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

const formName = document.querySelector('.form-name');
const formDate = document.querySelector('.form-date');
const submit = document.querySelector('.submit');
const contTask = document.querySelector('.cont-tasks');
let DATA = null;

function deleteTask(id) {
  DATA.splice(id, 1);
  generateTasks(); // eslint-disable-line no-use-before-define
}

function generateButton(task) {
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn-delete');
  btn.innerHTML = 'Delete task';

  btn.addEventListener('click', () => {
    const id = btn.getAttribute('id');
    deleteTask(id);
  });

  task.appendChild(btn);
}

function cleanList() {
  contTask.innerHTML = '';
}

function generateTasks(data = DATA) {
  DATA = data;
  cleanList();
  const list = document.createElement('ul');
  data.forEach((element, index) => {
    const task = document.createElement('li');
    task.setAttribute('id', `${index}`);
    task.setAttribute('class', 'task');
    if (element.complete) { task.setAttribute('class', 'complete'); }
    task.innerHTML = `${element.task}`;

    generateButton(task);

    list.appendChild(task);
  });
  contTask.appendChild(list);
}

function getDataForm() {
  const data = {
    task: formName.value,
    complete: false,
    dueDate: formDate.value,
  };
  DATA.push(data);
  generateTasks();
}

function getJson(url, funct) {
  fetch(url)
    .then(data => data.json())
    .then((data) => {
      if (typeof funct === 'function') {
        funct(data);
      }
    });
}

window.onload = function init() {
  getJson('./data.json', generateTasks);
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getDataForm();
});
