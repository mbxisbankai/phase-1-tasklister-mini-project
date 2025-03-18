document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => { 
      e.preventDefault();
      const input = document.querySelector('#new-task-description').value;
      const ul = document.querySelector('#tasks');
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.textContent = 'X';
      btn.addEventListener('click', handleDelete);
      li.textContent = `${input} `;
      li.appendChild(btn);
      ul.appendChild(li);
      form.reset();
    });
});


/*
function createToDo(todo){
  let taskList = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X';
  taskList.textContent = `${todo} `;
  taskList.appendChild(btn);
  let list = document.querySelector('#tasks');
  list.appendChild(taskList);
}
*/

function handleDelete(e){
  e.target.parentNode.remove();
}
