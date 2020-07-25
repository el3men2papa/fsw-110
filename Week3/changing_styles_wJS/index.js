var constNames = ["steve", "larry", "joe", "shirley", "steph"];


var newH2 = document.createElement("h2");
newH2.className = "border"

for (var h = 0; h < constNames.length; h++){

    newH2.innerHTML += constNames[h]+"<br>"
    document.body.append(newH2);
}    

newH2.style.color = "cornflowerblue";
newH2.style.fontSize = "20px";
newH2.style.fontWeight = "lighter";
newH2.style.fontFamily = "sans-serif";





