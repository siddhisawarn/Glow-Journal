// Display mood
function setMood(mood) {
    document.getElementById("moodDisplay").innerText =
        "Today's mood: " + mood;

    localStorage.setItem("mood", mood);
}


// Add skincare routine
function addSkincare() {

    let input = document.getElementById("skinInput");
    let value = input.value;

    if(value === ""){
        return;
    }

    let li = document.createElement("li");
    li.innerText = value;

    document.getElementById("skinList").appendChild(li);

    input.value = "";

    saveList("skinList");
}


// Add product wishlist
function addProduct(){

    let input = document.getElementById("productInput");
    let value = input.value;

    if(value === ""){
        return;
    }

    let li = document.createElement("li");
    li.innerText = value;

    document.getElementById("productList").appendChild(li);

    input.value = "";

    saveList("productList");
}



// Save journal entry
function saveJournal(){

    let entry = document.getElementById("journalInput").value;

    document.getElementById("journalDisplay").innerText =
        entry;

    localStorage.setItem("journal", entry);

}



// Save lists permanently
function saveList(id){

    let items = [];

    document.querySelectorAll("#" + id + " li")
    .forEach(function(item){

        items.push(item.innerText);

    });


    localStorage.setItem(id, JSON.stringify(items));

}



// Load saved data
window.onload = function(){

    let mood = localStorage.getItem("mood");

    if(mood){

        document.getElementById("moodDisplay").innerText =
        "Today's mood: " + mood;

    }


    loadList("skinList");

    loadList("productList");


    let journal = localStorage.getItem("journal");

    if(journal){

        document.getElementById("journalDisplay").innerText =
        journal;

    }

};



// Load lists
function loadList(id){

    let data = JSON.parse(localStorage.getItem(id));

    if(data){

        data.forEach(function(item){

            let li = document.createElement("li");

            li.innerText = item;

            document.getElementById(id)
            .appendChild(li);

        });

    }

}
