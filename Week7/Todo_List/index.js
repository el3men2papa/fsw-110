var myList1 = document.getElementById("myList1")
var myList2 = document.getElementById("myList2")
var foodCath = document.getElementById("foodCath")
var foodItems = document.getElementById("foodItems")
var btnSubmit = document.getElementById("btnsubmit")

var btnDelete = document.getElementById("delete")


    btnSubmit.addEventListener("click", function myFunction() {
      if (foodCath.value === "" || foodItems.value === "" ){
        foodCath.value = ""
      }
      else {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(foodCath.value);
        node.appendChild(textnode);
        document.getElementById("myList1").appendChild(node);
      }
        


      })

      btnSubmit.addEventListener("click", function myFunction() {
        if(foodItems.value === "" || foodCath.value === ""){
         /*  foodItems.value ="" */
         console.log("true")
        }
        else{
        var node = document.createElement("LI");
        var textnode = document.createTextNode(foodItems.value);
        node.appendChild(textnode);
        document.getElementById("myList2").appendChild(node);
     
        }
      })

      btnSubmit.addEventListener("click", function btndelete() {
       if(foodItems.value === "" || foodCath.value === ""){

       }
       else {
        var node = document.createElement("LI");
             var x = document.createElement("BUTTON");
       var t = document.createTextNode("Click me");
       x.appendChild(t);
       document.getElementById("delete").appendChild(node);
       btnDelete.appendChild(x);

       } 
      })  


      function myFunction() {
        var myobj = document.getElementById(node);
        myobj.remove();
      }

    
    