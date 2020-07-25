var h1 = document.createElement("h1");
document.body.append(h1);

var p = document.createElement("p");
document.body.append(p);

var orderList = document.createElement("ol");
document.body.append(orderList);

var list1 = document.createElement("li");
list1.textContent = "";

var list2 = document.createElement("li");
list2.textContent = "";

var list3 = document.createElement("li");
list3.textContent = ""

orderList.append(list1,list2,list3);


/* 
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
menu.appendChild(createMenuItem('About Us')); */


