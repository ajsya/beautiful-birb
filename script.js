var audio = new Audio('drop.wav');

function load(){
    var r = confirm("WARNING!\n\nMuch derpy birb!");
    if (r == true) {
          audio.play();
          document.getElementById('dropBoi').style.visibility = "hidden";
          document.body.style.backgroundImage = "url('birb.gif')";
          document.body.style.backgroundRepeat = "repeat";
        }
  
    }
