/* Here will find the fields for additions fields */
var addNum1 = document.getElementById("addFirstNumber");
var addNum2 = document.getElementById("addSecondNumber");
var sum = document.getElementById("add");

sum.addEventListener("mousedown", function add(){
    var addFirstNumber = addNum1.value;
    var addSecondNumber = addNum2.value;
    var addResults = document.getElementById("totaladd").textContent = `The grand total is ${Number(addFirstNumber) + Number(addSecondNumber)}`;
console.log(addResults)
}); 

/* Here will find the fields for Subtractions fields */
var subNum1 = document.getElementById("subFirstNumber")
var subNum2 = document.getElementById("subSecondNumber")
var sub = document.getElementById("sub")
sub.addEventListener("mousedown", function sub(){
    var subFirstNumber = subNum1.value
    var subSecondNumber = subNum2.value
    var subResults = document.getElementById('totalSub').textContent = `The grand total is ${Number(subFirstNumber) - Number(subSecondNumber)}`
    console.log(subResults)
})
  
  /* Here will find the fields for Multiplicatios fields */
var multyNum1 = document.getElementById("multiplyFirstNumber")
var multyNum2 = document.getElementById("multySecondNumber")
var multy = document.getElementById("multiply")
multy.addEventListener("mousedown", function multy(){
    var multyFirstNumber = multyNum1.value
    var multySecondNumber = multyNum2.value
    var multyResults = document.getElementById('totalMultiply').textContent = `The grand total is ${Number(multyFirstNumber) * Number(multySecondNumber)}`
    console.log(multyResults)
})