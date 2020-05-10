'use strict';

console.log('funguju!');

const tasks = ['Koupit salát', 'Poslat dopis', 'Zavolat babičce', 'Podívat se na lekci Bootstrapu']

const newTask = document.querySelector('.todo__tasks');
for (let i = 0; i < tasks.length; i++) {
  const renderUpdateTask = (item) => {
    const taskElm = document.createElement('div');
    taskElm.className = 'task';
    taskElm.textContent = tasks[i];

    const addNewTask = document.querySelector('.todo__tasks');
    addNewTask.appendChild(taskElm);
  };
  renderUpdateTask(tasks[i]);
}