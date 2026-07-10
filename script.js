/* ===========================
   My Planner Premium v1
=========================== */

// 오늘 날짜 표시
const today = document.getElementById("today");

const now = new Date();

today.textContent =
`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`;


// LocalStorage 기본 데이터

let planner = JSON.parse(localStorage.getItem("planner")) || {

income:0,

expense:0,

cat:0,

memo:""

};


// 화면 업데이트

function refreshDashboard(){

document.getElementById("incomeTotal").innerText =
planner.income.toLocaleString()+"원";

document.getElementById("expenseTotal").innerText =
planner.expense.toLocaleString()+"원";

document.getElementById("remainTotal").innerText =
(planner.income-planner.expense).toLocaleString()+"원";

document.getElementById("catTotal").innerText =
planner.cat.toLocaleString()+"원";

document.getElementById("memo").value=
planner.memo;

}

refreshDashboard();


// 메모 자동저장

document.getElementById("memo").addEventListener("input",function(){

planner.memo=this.value;

localStorage.setItem("planner",JSON.stringify(planner));

});


// 원형 그래프

const pie = new Chart(

document.getElementById("pieChart"),

{

type:"pie",

data:{

labels:["생활","고양이","보험","식비"],

datasets:[{

data:[30,20,25,25]

}]

}

}

);


// 막대 그래프

const bar = new Chart(

document.getElementById("barChart"),

{

type:"bar",

data:{

labels:["1월","2월","3월","4월","5월","6월"],

datasets:[

{

label:"수입",

data:[0,0,0,0,0,0]

},

{

label:"지출",

data:[0,0,0,0,0,0]

}

]

}

}

);
