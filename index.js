'use strict';

console.log('funguju!');

const tasks = ['Koupit salát', 'Poslat dopis', 'Zavolat babičce', 'Podívat se na lekci Bootstrapu'];

const updateTasks = () => {
  const newList = document.querySelector('.todo__tasks');
  newList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    newList.innerHTML += `<div class="task">${tasks[i]}</div>`;
  };
};




const btnElm = document.querySelector('.btn-add');
btnElm.addEventListener('click', updateTasks);

