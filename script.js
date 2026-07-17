// Load saved data
let skincareItems = JSON.parse(localStorage.getItem("skincare")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];


// Mood tracker
function setMood(mood){

    document.getElementById("moodDisplay").innerHTML =
    "Today's Mood: " + mood;


    localStorage.setItem("mood", mood);
}


// Load previous mood
let savedMood = localStorage.getItem("mood");

if(savedMood){

    document.getElementById("moodDisplay").innerHTML =
    "Today's Mood: " + savedMood;

}




// Skincare Routine

function addSkincare(){

    let input = document.getElementById("skincareInput");

    let item = input.value;


    if(item === ""){
        return;
    }


    skincareItems.push(item);


    localStorage.setItem(
        "skincare",
        JSON.stringify(skincareItems)
    );


    input.value="";

    displaySkincare();

}



function displaySkincare(){

    let list =
    document.getElementById("skincareList");


    list.innerHTML="";


    skincareItems.forEach(function(item,index){


        let li=document.createElement("li");


        li.innerHTML =
        item +
        " <button onclick='deleteSkincare("+
        index+
        ")'>Delete</button>";


        list.appendChild(li);


    });

}



function deleteSkincare(index){

    skincareItems.splice(index,1);


    localStorage.setItem(
        "skincare",
        JSON.stringify(skincareItems)
    );


    displaySkincare();

}




// Product Wishlist


function addProduct(){

    let input =
    document.getElementById("productInput");


    let product=input.value;


    if(product===""){
        return;
    }


    products.push(product);


    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    input.value="";


    displayProducts();

}



function displayProducts(){

    let list =
    document.getElementById("productList");


    list.innerHTML="";


    products.forEach(function(product,index){


        let li=document.createElement("li");


        li.innerHTML =
        product +
        " <button onclick='deleteProduct("+
        index+
        ")'>Delete</button>";


        list.appendChild(li);


    });


}




function deleteProduct(index){

    products.splice(index,1);


    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    displayProducts();

}




// Makeup Journal


function saveMakeup(){

    let entry =
    document.getElementById("makeupInput").value;


    localStorage.setItem(
        "makeup",
        entry
    );


    displayMakeup();

}



function displayMakeup(){

    let saved =
    localStorage.getItem("makeup");


    if(saved){

        document.getElementById("makeupDisplay")
        .innerHTML =
        "Saved Entry: " + saved;

    }

}



// Load everything when page opens

displaySkincare();

displayProducts();

displayMakeup();
