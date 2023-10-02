function changeTheme(){
    var bodyBack = document.getElementById("newBody")
    var widgetBack = document.getElementById("widgetBody")
    if (bodyBack.classList.value == "body1"){
        bodyBack.classList.remove("body1")
        bodyBack.classList.add("body2")

        widgetBack.classList.remove("body1")
        widgetBack.classList.add("body2")
    }else if(bodyBack.classList.value == "body2"){
        bodyBack.classList.remove("body2")
        bodyBack.classList.add("body1")
        
        widgetBack.classList.remove("body2")
        widgetBack.classList.add("body1")
    }
    console.log(bodyBack)
    debugger

}

function addWater(){
    var anzGetrunken = document.getElementById("anzGetrunken")
    var anzGetrunkenFloat = parseFloat(anzGetrunken.innerHTML)
    debugger
    anzGetrunkenFloat += 0.25
    anzGetrunken.innerHTML = `${anzGetrunkenFloat} / 2L`

    if (anzGetrunkenFloat == 2){
        alert("Ziel Erreicht")
    }

}

// JavaScript-Code, um die Uhrzeit anzuzeigen
function updateUhrzeit() {
    const jetzt = new Date();
    const stunden = jetzt.getHours().toString().padStart(2, '0');
    const minuten = jetzt.getMinutes().toString().padStart(2, '0');
    const sekunden = jetzt.getSeconds().toString().padStart(2, '0');
    const uhrzeitAnzeige = `${stunden}:${minuten}:${sekunden}`;
    document.getElementById('uhrzeit').textContent = uhrzeitAnzeige;
}

// Die Uhrzeit aktualisieren alle 1000 ms (1 Sekunde)
setInterval(updateUhrzeit, 1000);

// Initial die Uhrzeit anzeigen
updateUhrzeit();