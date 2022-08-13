function toggleNavbar(){
    var x = document.getElementById("myNav");
    var y = document.getElementById("myMenuIcon");
    if (x.className === "navbar") {
      x.className += " open";
      y.src ="images/Kreuz.png";
    } else {
      x.className = "navbar";
      y.src="images/icon.png";
    }
  }

