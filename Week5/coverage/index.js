const form = document.myForm

var btnSubmit = document.getElementById("btnSubmit")
var state1 = document.getElementsByTagName(" State 1")
console.log(state1)

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // console.log(form.gender.value)
    
   // console.log(form.entertainment.value)
})

const checkedInputs = []
    
    for(let i = 0; i < form.dietaryRestrictions.length; i++){
        if(form.dietaryRestrictions[i].checked){
            checkedInputs.push(form.dietaryRestrictions[i].value)
        }
    }
    console.log(checkedInputs)
    function test(){
        alert ("Hello")
    }

  /*   alert (`
    world
    Hello`) */
 
 
btnSubmit.addEventListener("click", test)


//template literal