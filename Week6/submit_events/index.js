var getId = document.getElementById("submit")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")

getId.addEventListener("click", function(){
  alert(input1.value + " "+ input2.value + " "+ input3.value) 
input1.value= ""
input2.value = ""
input3.value = ""
})