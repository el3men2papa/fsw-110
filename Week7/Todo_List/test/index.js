var arobj = [];
function load(arr) {
for (var i = 0; i < arr.length; i++) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      var classN = document.createElement("td");

      var nameValue = document.createTextNode("");
      var classN = document.createTextNode("");
    }
}

function addStudent(idn, idc, tab) {
    var obj = {};

    var row = document.createElement("tr");
    var name = document.createElement("td");
    var classN = document.createElement("td");

    var nameValue = document.createTextNode(
      document.getElementById(idn).value
    );
    obj.nameVal = nameValue;
    var classValue = document.createTextNode(
      document.getElementById(idc).value
    );
    obj.classVal = classValue;

    arobj.push(obj);

    row.setAttribute("id", (arobj.length - 1).toString());

    var del = document.createElement("button");
    del.innerHTML = "delete";

    var act = document.createElement("td");

    del.setAttribute("id", "btn" + (arobj.length - 1));

    act.appendChild(del);
       name.appendChild(nameValue);
    classN.appendChild(classValue);
    row.appendChild(name);
    row.appendChild(classN);
    row.appendChild(act);
    document.getElementById(tab).appendChild(row);
    document.getElementById("myForm").reset();
   document.getElementById("btn" + (arobj.length - 1)).addEventListener('click', delet);
}

function delet() {
    let row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
    alert("Are you sure you want to delete your item" );
}