
 
var h1 = document.createElement("h1")
h1.textContent = "Hello World"
document.body.append(h1)


 function repeatTenTime (){
    for (var i = 0; i < 10; i++){
        var h1 = document.createElement("h1")
        h1.textContent = "Hello World"
        h1.style.color = "red"
        document.body.append(h1)
        console.log("Hello World")
    }
}

repeatTenTime()

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

function loopNames (){
    for (i = 0; i < names.length; i++){
        console.log(names[i])
        var storri =  document.createElement("p")
        storri.textContent = names[i]
        document.body.append(storri)

 }

}

loopNames()