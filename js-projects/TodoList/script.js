// Todo Class for Responseve task

class Todo {

    constructor (title){
        this.title=title;
    }
    
}

// UI Class : Handle UI Tasks

class UI {
    static displayTasks(){
        const todos=Store.getTodos();
        todos.forEach((todo)=>{    
            UI.addTaskToList(todo);    
        })

    }

    static addTaskToList(todo){
        const list=document.querySelector("#todo-list");
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${todo.title}</td>
        <td><a class="btn btn-danger btn-sm delete" href="#">X</a></td>
        `;
        list.appendChild(row); 
    }

    static deleteTodo(element){
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove()
        }
    }
    static clearField(){
        document.querySelector("#title").value="";
    }

    static showAlert(message, className ){
        const div=document.createElement("div");
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const form=document.querySelector("#todo-form");
        container.insertBefore(div, form);
        
        setTimeout(()=>{
            document.querySelector(".alert").remove()
        }, 3000)

    }


}

// Store Class: handle store the task and localsotrage

class Store{
    static getTodos(){
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[]
        }else{
            todos=JSON.parse(localStorage.getItem("todos"))
        }
        return todos;

    }


    static addTodos(todo){
        const todos=Store.getTodos();
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos))

    }

    static removeTodo(title){
        console.log(title, "i am title")
        const todos=Store.getTodos();
        todos.forEach((todo, index)=>{

            console.log(todo.title, index, "i ma inside removetudo")
            if(todo.title===title){
                todos.splice(index, 1);
                
            }
            localStorage.setItem("todos", JSON.stringify(todos));
        })
        console.log(todos, "i am todos")

    }

}

// Event display task
document.addEventListener("DOMContentLoaded", UI.displayTasks);

// Event add Tasks;

const todoForm=document.querySelector('#todo-form');
todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
     const title=document.querySelector("#title").value;

     if(title === ""){
        UI.showAlert("Please add Task!", "danger")
     }else{
        
        const todo=new Todo(title);

        // Add todo to UI 
   
        UI.addTaskToList(todo);
        // Add todos to localsorage
        Store.addTodos(todo);
   
        // Clear fields
        UI.clearField();
        //
        UI.showAlert("Task Added", "success")
     }


})



// Event remove task

document.querySelector("#todo-list").addEventListener("click", (e)=>{
    UI.deleteTodo(e.target);
    Store.removeTodo(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert("Task deleted", "success" );
})




