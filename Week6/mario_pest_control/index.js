var goombaNumber = document.getElementById("goombaNumber");
var goombaTotal = document.getElementById("goombaTotal");
var CheepCheepNumber = document.getElementById("CheepCheepNumber");
var CheepCheepTotal = document.getElementById("CheepCheepTotal");
var bobOmbNumaber = document.getElementById("bobOmbNumaber");
var bobOombTotal = document.getElementById("bobOombTotal");
var totalNumaber = document.getElementById("totalNumaber");
var grandTotal = document.getElementById("grandTotal");

grandTotal.addEventListener("mousedown", function mul(){
    var FirstNumber = goombaNumber.value;
    var totalGoomba = FirstNumber * 5  ;
   document.getElementById("goombaTotal").value =  totalGoomba

   var secondNumber = CheepCheepNumber.value;
   var totalCheepCheep = secondNumber * 11  ;
  document.getElementById("CheepCheepTotal").value =  totalCheepCheep

  var thirdNumber = bobOmbNumaber.value;
  var bobOombTotal = thirdNumber * 7  ;
 document.getElementById("bobOombTotal").value =  bobOombTotal

 var total = totalGoomba + totalCheepCheep + bobOombTotal

 document.getElementById("totalNumaber").value =  total
}); 


