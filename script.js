const inputTask=document.getElementById("inputTask");
const listContain=document.getElementById("list-container");
const date = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=weekday[date.getDay()];
let nameMonth = month[date.getMonth()];


function addTask(){
    if(inputTask.value===''){
        alert("You must write a task!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputHTML=inputTask.value;
        listContain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value="";
    saveData();
}
listContain.addEventListener("click",
    function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContain.innerHTML);
}
function showSaved(){
    listContain.innerHTML=localStorage.getItem("data");s
}

function showDate(){

    document.getElementById("dateShow").innerHTML = day+'!';
    document.getElementById("date2").innerHTML = nameMonth+' '+date.getDate()+' '+date.getFullYear();
    

}


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("ClockEm").innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



showDate();
showSaved();