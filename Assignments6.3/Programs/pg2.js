//To-do list

let todo = [
    {id : 1,task : "learn javascript"},
    {id : 2,task : "learn html"},
    {id : 3,task : "learn c++"},
]
let completed = [];


//1. add(title)

const add =(title)=>{
    if(title){
    todo.push({id : todo.length+1,task:title})
    return todo.length;
    }
    else{
        return -1;
    }
} 

console.log(add())

//2. remove(id)
const remove =(id)=>{
    //todo =todo.filter(item=>item.id != id)
    let index  = todo.findIndex(item =>item.id != id );
    if(index == -1)
    return false;
    else{
        todo.splice(index,1);
        return true
    }
}

console.log(remove(1))

//3. update(id, title)
const update =(id,title)=>{
    //todo =todo.filter(item=>item.id != id)
    let index  = todo.findIndex(item =>item.id === id );
    if(index == -1)
    return false;
    else{
        todo[index].task = title;
        return true
    }
}

console.log(update(1,"learn css"))
console.log(todo)


//4. markAsCompleted(id)

const markAsCompleted = (id)=>{
    let index  = todo.findIndex(item =>item.id === id );
    if(index == -1)
    return false;
    else{
        completed = todo.splice(index,1)
        return true
    }
}
console.log(markAsCompleted(1))
console.log(completed)
console.log(todo)