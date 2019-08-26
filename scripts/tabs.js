var elemId = null;

function hide (id) {
  var elem = document.getElementById("active");

  if (elem == null) {
    elemId = id;
  } else if (elem != null) {
    elem.style.display = "none";
    elem.id = elemId;
    elemId = id;
  }

}

function show(id) {
  if (id == "firsttab") {
    hide("first");
    document.getElementById("first").style.display = "block"
    document.getElementById("first").id = "active";
    document.getElementById("intro").style.borderColor = "#FF6F61";

  } else if (id == "secondtab") {
    hide("second");
    document.getElementById("second").style.display = "block"
    document.getElementById("second").id = "active";
    document.getElementById("intro").style.borderColor = "#0094D5";

  } else if (id == "thirdtab") {
    hide("third");
    document.getElementById("third").style.display = "block"
    document.getElementById("third").id = "active";
    document.getElementById("intro").style.borderColor = "#FEDD00";

  } else if (id == "fourthtab") {
    hide("fourth");
    document.getElementById("fourth").style.display = "block"
    document.getElementById("fourth").id = "active";
    document.getElementById("intro").style.borderColor = "#00939D";

  }
}