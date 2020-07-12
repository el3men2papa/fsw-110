//appending H1 into HTML
var h1Tag= document.body.innerHTML += "<h1>There is no place like home</h1>"

//appeding P into HTML
var pTag= document.body.innerHTML += "<p>Home is where family is</p>"

//Creating the list
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#home
const menu = document.querySelector("#home");
// add menu item
menu.appendChild(createMenuItem("Companions"));
menu.appendChild(createMenuItem("Kids"));
menu.appendChild(createMenuItem("Roof over our head"));