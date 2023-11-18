const btn1 = document.querySelector("#btn1");
const input = document.querySelector("#task_input");
const todo = document.querySelector(".todo");
const task1 = document.querySelector(".task_list");
btn1.addEventListener("click",()=>{
    const li = document.createElement("li");
    li.innerText = input.value;
    const span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
    task1.appendChild(li);
    input.value="";
    saveData();
})

task1.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)



function saveData(){
    localStorage.setItem("local_data",task1.innerHTML);
}
function showData(){
    task1.innerHTML = localStorage.getItem("local_data");
}
showData();