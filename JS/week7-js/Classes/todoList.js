
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
//-------------------------------
let item1 = {
    id: 1,
    taskName: "reading about Local storage",
    isCompleted: false,
};
let item2 = {
    id: 2,
    taskName: "reading about Local storage",
    isCompleted: false,
};
let item3 = {
    id: 3,
    taskName: "reading about Local storage",
    isCompleted: false,
};
let todo = [item1, item2, item3, item1]
//deleteItem(item1);
markDone(item1);
order(todo);