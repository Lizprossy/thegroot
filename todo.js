// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// eventlistener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//function
function addTodo(event) {
event.preventDefault();

//todo div
 const todoDiv = document.createElement('div');
 todoDiv.classList.add('todo');

 //todo list
 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

 //check todoButton
 const completeButton = document.createElement('button');
 completeButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
 completeButton.classList.add('complete-btn');
 todoDiv.appendChild(completeButton);

 //delete

 const trashButton = document.createElement('button');
 trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> ';
 trashButton.classList.add('trash-btn');
 todoDiv.appendChild(trashButton);
//append to list
 todoList.appendChild(todoDiv);

 //clear input value
 todoInput.value="";
}
//func delet
function deleteCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.remove();
    }
 // check
 if(item.classList[0]==='complete-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
}
}