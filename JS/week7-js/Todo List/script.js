//Data
let item1 = {
    id: 1,
    taskName: "read about a Local storage",
    isCompleted: false,
    priorety: 1,
};
let item2 = {
    id: 2,
    taskName: "build a Todo list app",
    isCompleted: false,
    priorety: 3,
};
let item3 = {
    id: 3,
    taskName: 'go for a walk',
    isCompleted: false,
    priorety: 2,
};

let todo = [item1, item2, item3, item1]

//variables
const container = document.querySelector(".container");
const input = document.querySelector("input");
const select = document.querySelector("select");
const btnAdd = document.querySelector("[data-create]");
const btnUpdate = document.querySelector("[data-update]");
const btnDelete = document.querySelector('[data-delete]');

//Read
let item5 = {
    id: 1,
    taskName: "read about a Local storage",
    isCompleted: false,
    priorety: 1,
};
const render = () => {
    container.innerHTML = "";
    todo.forEach( (item, index) => {
        const task = document.createElement("h4");
        const prior = document.createElement("span");
        task.textContent = item.taskName +'. ' +' ' +"Priority: "+ item.priorety;
        prior.textContent = index+1+':';
        container.appendChild(prior);
        container.appendChild(task);
      });
      
}
//to read users input and put it to data
render();
const create = () => {
    let item = {};
    item.id = 1;
    item.taskName = input.value;
    item.priorety = select.value;
    item.isCompleted = false;
    todo.push(item);
    console.log(todo);
    input.value = ' ';
    select.value = 0;
    render();
};
create();
btnAdd.addEventListener("click", ()=>create());






const add = (item)=> {
    todo.push(item);
};
//delete the first relevant
const deleteItem = (item)=> {
    let index = todo.indexOf(item);
    if (index >= 0) {
     todo.splice( index, 1 );
     console.log(todo);
       }
}
const markDone = (item) => {
    todo[todo.indexOf(item)].isCompleted = true;
    console.log(item);
}
const markNotDone = (item) => {
    todo[todo.indexOf(item)].isCompleted = false;
    console.log(item);
}
const order = (todoList) => {
    let ordered = [];
    for (let i =0; i < todoList.length; i++){
        if(todoList[i].isCompleted){
            ordered.push(todoList[i])
        } else{
            ordered.unshift(todoList[i])
        };
    };
    console.log(ordered);
    return ordered;
}


