//Getting all required documents

const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
    console.log("none")
}

// add tasl while we put in test area and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //trim function removes the space of front and back of the inpute values
    
    //if enter button is clicked and inputed value is greater than 0.
    if(e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="delteTask(this)"></i>
    </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag); // inserting li tag inside the todolist div
    inputField.value=""; //clearing input field
    allTasks();

        
    }
});

//checking and unchecking the checkbox while we click on the task
function handleStatus(e){
    const checkbox =e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function delteTask(e){
    e.parentElement.remove(); //getting parent element and remove it.
    allTasks();

}


//deleting all the tasks while we click on the clear button.
clearButton.addEventListener("click", () => {
    todoLists.innerHTML="";
    allTasks();
})

