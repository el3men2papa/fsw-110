var h1 = document.createElement("h1");
document.body.append(h1);
h1.textContent = "Welcome to my JS site";

var p = document.createElement("p");
document.body.append(p);
p.textContent = "All of this was created by JavaScript";

var orderList = document.createElement("ol");
document.body.append(orderList);

var list1 = document.createElement("li");
list1.textContent = "Home";

var list2 = document.createElement("li");
list2.textContent = "About";

var list3 = document.createElement("li");
list3.textContent = "Contact"

orderList.append(list1,list2,list3);