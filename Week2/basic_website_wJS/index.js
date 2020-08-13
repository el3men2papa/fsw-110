
var h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "Things to do at home"

var p = document.createElement("p")
document.body.append(p)
p.textContent = "Is all about the list"

var ol = document.createElement("ol")
document.body.append(ol)

var  li = document.createElement("li")
li.textContent = "list 1"

var  li2 = document.createElement("li")
li2.textContent = "list 2"

var  li3 = document.createElement("li")
li3.textContent = "listn 3"
ol.append(li, li2, li3)

var footer = document.createElement("footer")
document.body.append(footer)
footer.textContent = "This is the footer"