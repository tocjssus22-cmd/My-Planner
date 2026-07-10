// =========================
// My Planner v1.0
// =========================

let todos = JSON.parse(localStorage.getItem("todos")) || [
    {
        text:"🏠 월세",
        done:false
    },
    {
        text:"📱 통신비",
        done:false
    },
    {
        text:"🍚 고양이 밥값",
        done:false
    }
];

const todoList = document.getElementById("todoList");

function renderTodos(){

    todoList.innerHTML="";

    todos.forEach((todo,index)=>{

        todoList.innerHTML += `

        <div class="todo-item">

            <span>${todo.text}</span>

            <input
            type="checkbox"
            ${todo.done ? "checked" : ""}
            onchange="toggleTodo(${index})">

        </div>

        `;

    });

    saveTodos();

}

function toggleTodo(index){

    todos[index].done = !todos[index].done;

    renderTodos();

}

function saveTodos(){

    localStorage.setItem(

        "todos",

        JSON.stringify(todos)

    );

}

document.querySelector(".addBtn").onclick = ()=>{

    let text = prompt("할 일을 입력하세요.");

    if(text==null || text=="") return;

    todos.push({

        text:text,

        done:false

    });

    renderTodos();

}

function showPage(name){

    alert(name + " 페이지는 다음 버전에서 열립니다 😊");

}

renderTodos();
// ======================
// 돈관리
// ======================

let expenses = [

    {
        name:"🏠 월세",
        money:900000
    },

    {
        name:"📱 통신비",
        money:0
    },

    {
        name:"⚖️ 개인회생",
        money:0
    },

    {
        name:"🍚 고양이 밥값",
        money:0
    }

];

function renderExpense(){

    let html="";

    expenses.forEach((item)=>{

        html += `

<div class="todo-item">

<span>${item.name}</span>

<span>${item.money.toLocaleString()}원</span>

</div>

`;

    });

    let target=document.getElementById("expenseList");

    if(target){

        target.innerHTML=html;

    }

}