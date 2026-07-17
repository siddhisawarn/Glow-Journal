// Display mood
function setMood(mood) {

    document.getElementById("moodDisplay").innerText =
        "Today's mood: " + mood;

    localStorage.setItem("mood", mood);
}


// Add skincare routine
function addSkincare() {

    let input = document.getElementById("skinInput");
    let value = input.value.trim();

    if (value === "") {
        return;
    }

    createListItem("skinList", value);

    input.value = "";

    saveList("skinList");
}


// Add product wishlist
function addProduct() {

    let input = document.getElementById("productInput");
    let value = input.value.trim();

    if (value === "") {
        return;
    }

    createListItem("productList", value);

    input.value = "";

    saveList("productList");
}


// Create list item with delete button
function createListItem(listId, text) {

    let li = document.createElement("li");

    let span = document.createElement("span");

    span.innerText = text;


    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";


    deleteButton.onclick = function() {

        li.remove();

        saveList(listId);

    };


    li.appendChild(span);

    li.appendChild(deleteButton);


    document.getElementById(listId).appendChild(li);

}



// Save journal entry
function saveJournal() {

    let entry = document.getElementById("journalInput").value;


    document.getElementById("journalDisplay").innerText =
        entry;


    localStorage.setItem("journal", entry);

}



// Save lists to local storage
function saveList(id) {

    let items = [];


    document.querySelectorAll("#" + id + " li span")
    .forEach(function(item) {

        items.push(item.innerText);

    });


    localStorage.setItem(id, JSON.stringify(items));

}



// Load saved information
window.onload = function() {


    let mood = localStorage.getItem("mood");


    if (mood) {

        document.getElementById("moodDisplay").innerText =
            "Today's mood: " + mood;

    }



    loadList("skinList");

    loadList("productList");



    let journal = localStorage.getItem("journal");


    if (journal) {

        document.getElementById("journalDisplay").innerText =
            journal;

    }

};



// Load saved lists
function loadList(id) {


    let data = JSON.parse(localStorage.getItem(id));


    if (data) {


        data.forEach(function(item) {


            createListItem(id, item);


        });


    }


}
