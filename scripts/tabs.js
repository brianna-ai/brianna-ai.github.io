function hide () {
  var elem = document.getElementById("active");
  if (elem != null) {
    elem.style.display = "none";
    elem.id="fourth";
  }
}

function show(id) {
  if (id == "firsttab") {
    hide();
    document.getElementById("first").id = "active";

    //document.getElementById("first").style.display = "block";
    //document.getElementById("fourth").style.display = "none";
  } else if (id == "secondtab") {
    hide();
    document.getElementById("second").id = "active";

    //document.getElementById("second").style.display = "block";
    //document.getElementById("third").style.display = "none";
  } else if (id == "thirdtab") {
    hide();
    document.getElementById("third").id = "active";

    //document.getElementById("third").style.display = "block";
    //document.getElementById("fourth").style.display = "none";
  } else if (id == "fourthtab") {
    hide();
    document.getElementById("fourth").id = "active";

    //document.getElementById("fourth").style.display = "block";
    //document.getElementById("third").style.display = "none";
  }
}