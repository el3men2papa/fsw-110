var div = document.createElement("div");
document.body.append(div);
div.id = "mouse";
div.style.cssText = "border: 1px solid black; height: 50px; width:50px "

var mouseActions = document.getElementById("mouse");

mouseActions.addEventListener("mouseover", function(){
    mouseActions.style.backgroundColor = "blue"
});
mouseActions.addEventListener("mousedown", function(){
    mouseActions.style.backgroundColor = "red";
});

mouseActions.addEventListener("dblclick", function(){
    mouseActions.style.backgroundColor = "green";
});

addEventListener("wheel", function(){
    mouseActions.style.backgroundColor = "orange"
});

mouseActions.addEventListener("mouseup", function(){
    mouseActions.style.backgroundColor = "yellow"
})

document.addEventListener("keydown", function(event) {
    if(event.which === 82){
      mouseActions.style.backgroundColor = "red"
    }
    else {
      if(event.which === 89){
      mouseActions.style.backgroundColor = "yellow"
    }
     else {
      if(event.which === 79){
      mouseActions.style.backgroundColor = "orange"
    }
     else {
      if(event.which === 66){
      mouseActions.style.backgroundColor = "blue"
    }
      else {
      if(event.which === 71){
      mouseActions.style.backgroundColor = "green"
    }
  }
  }
  }
  }
  })

