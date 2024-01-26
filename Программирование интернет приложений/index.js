let input =document.getElementById("input");
let addButton = document.getElementById("add-button");
let container =document.getElementById("List");

let todos = JSON.parse(localStorage.getItem("todos"))??[];

render();

addButton.addEventListener("click",()=>{
    let inputValue=input.value;
    if (!inputValue) {
        alert("Пожалуйста введите значение");
        return;
    }

    todos.push(inputValue);
    render();
    saveTolocalStorage();

});

container.addEventListener("click",(event)=>{
let todoId =Number(event.target.getAttribute("data-id"));
todos.splice(todoId,1);
render();
saveTolocalStorage();
});

function render(){
    let newInnerHtml=todos.reduce((prev, current,index)=>{
        let newValue =`
        <div style="display: flex">
            <div>${current}</div>
            <button data-id="${index}">Удалить</button>
        </div>
        `;
        return prev + newValue;
    },"");
    container.innerHTML = newInnerHtml;}

    function saveTolocalStorage(){
        localStorage.setItem("todos",JSON.stringify(todos));
    }
