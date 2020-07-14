
//appending H1 into HTML
var h1text= document.body.innerHTML += "<h1>Welcome to my JS site</h1>"

//appeding P into HTML
var ptext= document.body.innerHTML += "<p>All of this was created with Javascript</p>"


//Creating 
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));