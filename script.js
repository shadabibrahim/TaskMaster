let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let btn = document.querySelector('button');
btn.addEventListener('click', function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task");
    } else {
        //create a new li element
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        //add li to the ul
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
)
listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();