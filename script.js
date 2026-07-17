// Load saved data

window.onload = function(){

loadItems("skinList");
loadItems("makeupList");
loadItems("wishList");

let mood = localStorage.getItem("mood");

if(mood){

document.getElementById("moodDisplay").innerHTML =
"Today's mood: " + mood;

}

};



// Mood function

function setMood(mood){

document.getElementById("moodDisplay").innerHTML =
"Today's mood: " + mood;


localStorage.setItem("mood",mood);

}




// Add items

function addItem(inputId,listId){

let input=document.getElementById(inputId);

let value=input.value;


if(value===""){

alert("Please enter something");

return;

}


let data=JSON.parse(localStorage.getItem(listId)) || [];


data.push(value);


localStorage.setItem(listId,JSON.stringify(data));


displayItems(listId);


input.value="";


}




// Display items

function displayItems(listId){

let list=document.getElementById(listId);

list.innerHTML="";


let data=JSON.parse(localStorage.getItem(listId)) || [];


data.forEach(function(item,index){


let li=document.createElement("li");


li.innerHTML=

item +

`<button class="delete" onclick="deleteItem('${listId}',${index})">
X
</button>`;


list.appendChild(li);


});


}




// Load items

function loadItems(listId){

displayItems(listId);

}




// Delete items

function deleteItem(listId,index){


let data=JSON.parse(localStorage.getItem(listId));


data.splice(index,1);


localStorage.setItem(listId,JSON.stringify(data));


displayItems(listId);


}
