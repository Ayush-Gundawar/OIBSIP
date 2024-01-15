
const container = document.getElementById('container');
const pointer = document.getElementById('pointer');
// for the references of  royalty free images used
const referenceSwitch=document.getElementById('showReference');
const reference = document.getElementById('references');
const imageSource = document.getElementById('imageReference');
let referencesShowed = false;
const referenceFunction = () =>{
    if(!referencesShowed){
        referencesShowed=true;
        imageSource.src = "./resources/upload.png"
        reference.style.display="block";
    } else if(referencesShowed){
        referencesShowed=false;
        imageSource.src="./resources/down-arrow.png"
        reference.style.display="none";
    }
}
referenceSwitch.addEventListener('click',()=>{
    referenceFunction();
});

// to hide theme display after certain scroll pixels
const themeColorPanel = document.getElementById('themeColorPanel')
window.addEventListener('scroll',function(){
    if(scrollY>100){
        themeColorPanel.style.display="none";
    } else{
        themeColorPanel.style.display="grid";
    }
});

// change theme
const greenBtn = document.getElementById('greenButton');
const blueBtn = document.getElementById('blueButton');
const greyBtn = document.getElementById('greyButton');
blueBtn.onclick = () =>{
    console.log("blue color updated!");
    document.body.style.color="#000";
    container.style.backgroundImage = "linear-gradient(to top,#1842AB,#186baa)";
    pointer.style.backgroundColor = "#000";
    pointer.style.boxShadow = " 2px 0px 10px #000,-2px 0px 15px #000,0px 2px 15px #000,0px -2px 10px #000"

};
greenBtn.onclick = () =>{
    console.log("green color updated!");
    document.body.style.color="#000";
    container.style.backgroundImage = "linear-gradient(to top, #177d1e,#38F145)";
    pointer.style.backgroundColor = "#000";
    pointer.style.boxShadow = " 2px 0px 10px #000,-2px 0px 15px #000,0px 2px 15px #000,0px -2px 10px #000"
};
greyButton.onclick=()=>{
    console.log("grey color updated!");
    document.body.style.color="#fff";
    container.style.backgroundImage = "linear-gradient(to top, #504F4F,#797979)";
    pointer.style.backgroundColor = "#fff";
    pointer.style.boxShadow = " 2px 0px 10px #fff,-2px 0px 15px #fff,0px 2px 15px #fff,0px -2px 10px #fff"
};

//modify the pointer
document.addEventListener('mousemove',(event)=>{
    pointer.style.display = "block";
    pointer.style.left = event.pageX + "px";
    pointer.style.top = event.pageY + "px";
});

//dealing with tasks
let checklist=[];
let taskNum=0;

const input = document.getElementById('textArea');
const taskListPending = document.getElementsByClassName('pendingTasks');
const taskListCompleted = document.getElementsByClassName('completedTasks');
const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');

const renderTask = ()=>{
    taskNum++;
    let taskBody = input.value;
    const today = new Date();
    let date = today.toDateString();
    let time = today.getHours() +' : '+today.getMinutes();
    date=date+"    "+time;
    let div = `
    <div id="Task${taskNum}">
        <h3>Task ${taskNum}:</h3>
        <small style="color:red">${date}</small>
        <p style="text-decoration:underline;">${taskBody}</p>
        <input type="checkbox" name="" id="" title="Click to check" onclick="return taskListCompleted[0].appendChild(Task${taskNum})">
        <button type="button" name="" class="deleteButton" onclick="return this.parentNode.remove()"><img src="./resources/trash.png" height=""alt="delete"></button>
    </div>
    `;
    taskListPending[0].innerHTML += div;
    input.value = '';
};

//render using buttons
addButton.onclick = renderTask;
input.addEventListener('keydown',(event)=>{
    if(event.key == "Enter"){
        renderTask();
    }
});
minusButton.onclick=()=>{
    input.value='';
};