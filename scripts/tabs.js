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

  } else if (id == "secondtab") {
    hide("second");
    document.getElementById("second").style.display = "block"
    document.getElementById("second").id = "active";

  } else if (id == "thirdtab") {
    hide("third");
    document.getElementById("third").style.display = "block"
    document.getElementById("third").id = "active";

  } else if (id == "fourthtab") {
    hide("fourth");
    document.getElementById("fourth").style.display = "block"
    document.getElementById("fourth").id = "active";

  }
}