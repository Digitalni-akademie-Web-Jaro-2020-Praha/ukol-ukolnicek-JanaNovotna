'use strict';

console.log('funguju!');

let tasks = ['Zavolat na veterinu', 'Poslat dopis na MKČR', 'Zavolat babičce', 'Podívat se na lekci Bootstrapu'];

const updateTasks = () => {
  const newList = document.querySelector('.todo__tasks');
  newList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    newList.innerHTML += `<div class="task">${tasks[i]}</div>`;
  };
};

const newTask = () => {
  const newTask1 = document.getElementById('new-task');
  if (newTask1.value != '') {
    tasks.push(newTask1.value);
    updateTasks()
    newTask1.value = '';
  }
}

const btnElm = document.querySelector('.btn-add');
btnElm.addEventListener('click', newTask);
updateTasks();