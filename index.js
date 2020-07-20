"use strict";

const button = document.getElementById('add-button');
const li = document.createElement('li');
const doneButton = document.createElement('button');

addToDoTask();

function addToDoTask() {
  button.addEventListener('click', () => {
    createLi();

    addDoneButton();

    addDeleteButton();

    const ul = document.querySelector('ul');
    ul.appendChild(li);
  })
}

function createLi() {
  const input = document.getElementById('new-todo');
  li.innerText = input.value;
}


function addDoneButton () {
  doneButton.innerText = 'done';
  li.appendChild(doneButton);

  doneButton.addEventListener('click', () => {
    const li = doneButton.closest('li');
    li.classList.add('done');
  });
}

function addDeleteButton () {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  doneButton.parentNode.insertBefore(deleteButton, doneButton.nextSibling);

  deleteButton.addEventListener('click', () => {
    const li = doneButton.closest('li');
    li.remove();
  });
}