// jshint loopfunc: true

// Check for existing list data
if (window.localStorage.reasons) {
  list = JSON.parse(window.localStorage.reasons);
} else {
  resetList();
}

// Save list changes in local storage
function saveList() {
  window.localStorage.reasons = JSON.stringify(list);
}

// Choose the index of the next item to display
function pickIndex() {
  var unviewed = [];
  for (var i = 0; i < list.length; i++) {
    if (!list[i].viewed) {
      unviewed.push(i);
    }
  }
  if (unviewed.length > 0) {
    return unviewed[Math.floor(Math.random() * unviewed.length)];
  } else {
    return Math.floor(Math.random() * list.length);
  }
}

// Display a list item given its index
function writeItem(index) {
  document.getElementById("mnumber").textContent = "Reason #" + String(index + 1) + ":";
  document.getElementById("mtext").textContent = list[index].text;
  if (list[index].image) {
    document.getElementById("mimage").setAttribute("src", list[index].image);
    document.getElementById("mimage").style.display = "unset";
  } else {
    document.getElementById("mimage").style.display = "none";
  }
  if (list[index].image2) {
    document.getElementById("mimage2").setAttribute("src", list[index].image2);
    document.getElementById("mimage2").style.display = "unset";
  } else {
    document.getElementById("mimage2").style.display = "none";
  }
  if (list[index].image3) {
    document.getElementById("mimage3").setAttribute("src", list[index].image3);
    document.getElementById("mimage3").style.display = "unset";
  } else {
    document.getElementById("mimage3").style.display = "none";
  }
  document.getElementById("mbackground").style.backgroundImage = "linear-gradient( 135deg, " + list[index].color + ", " + list[index].color2 + " )";
  if (index === 0) {
    document.getElementById("btnPrev").style.visibility = "hidden";
    if (list[index + 1].viewed) {
      document.getElementById("btnNext").style.visibility = "visible";
    } else {
      document.getElementById("btnNext").style.visibility = "hidden";
    }
  } else if (index === list.length - 1) {
    if (list[index - 1].viewed) {
      document.getElementById("btnPrev").style.visibility = "visible";
    } else {
      document.getElementById("btnPrev").style.visibility = "hidden";
    }
    document.getElementById("btnNext").style.visibility = "hidden";
  } else {
    if (list[index - 1].viewed) {
      document.getElementById("btnPrev").style.visibility = "visible";
    } else {
      document.getElementById("btnPrev").style.visibility = "hidden";
    }
    if (list[index + 1].viewed) {
      document.getElementById("btnNext").style.visibility = "visible";
    } else {
      document.getElementById("btnNext").style.visibility = "hidden";
    }
  }
  animateContent();
}

// Animate main view content
function animateContent() {
  document.getElementById("mmiddleground").classList.remove("fadeOut");
  document.getElementById("mnumber").classList.remove("slideInLeft");
  document.getElementById("mtext").classList.remove("dropDown");
  document.getElementById("mimages").classList.remove("slideInRight");
  document.getElementById("mfoot").classList.remove("slideInBottom");
  document.getElementById("mtextholder").style.height = document.getElementById("mtext").clientHeight + "px";
  document.getElementById("mmiddleground").classList.add("fadeOut");
  document.getElementById("mnumber").classList.add("slideInLeft");
  document.getElementById("mtext").classList.add("dropDown");
  document.getElementById("mimages").classList.add("slideInRight");
  document.getElementById("mfoot").classList.add("slideInBottom");
}

// Display a random unviewed list item
function randomItem() {
  if (list.length > 0) {
    var index = pickIndex();
    writeItem(index);
    list[index].viewed = true;
    saveList();
  }
}

// Write list items to a table in the list view
function writeList(i) {
  var table = document.getElementById("ltable");
  for (i; i < list.length; i++) {
    var row = document.createElement("tr");
    var numCell = document.createElement("td");
    var itemCell = document.createElement("td");
    var btnCell = document.createElement("td");
    numCell.style.width = "30px";
    numCell.style.verticalAlign = "top";
    itemCell.style.paddingLeft = "10px";
    itemCell.style.paddingRight = "10px";
    btnCell.style.width = "30px";
    var numText,
        itemText,
        btnText;
    if (list[i].viewed) {
      numText = document.createTextNode(i + 1 + ".");
      itemText = document.createTextNode(list[i].text);
      itemCell.style.cursor = "pointer";
      itemCell.onclick = function(){viewItem(this)};
      numCell.appendChild(numText);
      itemCell.appendChild(itemText);
      row.appendChild(numCell);
      row.appendChild(itemCell);
    } else {
      numText = document.createTextNode(i + 1 + ".");
      itemText = document.createTextNode("???");
      itemCell.style.textAlign = "center";
      itemCell.style.cursor = "auto";
      btnText = document.createTextNode("");
      numCell.appendChild(numText);
      itemCell.appendChild(itemText);
      btnCell.appendChild(btnText);
      row.appendChild(numCell);
      row.appendChild(itemCell);
      row.appendChild(btnCell);
    }
    table.appendChild(row);
  }
}

// Open the list view (also writes the list)
function viewList() {
  writeList(0);
  document.getElementById("list").style.display = "flex";
  document.getElementById("mbackground").style.visibility = "hidden";
}

// Close the list view (also clears the list)
function closeList() {
  document.getElementById("mbackground").style.visibility = "visible";
  document.getElementById("list").style.display = "none";
  document.getElementById("ltable").innerHTML = "";
}

// Display clicked item in main view and close list view
function viewItem(element) {
  var index = Number(element.previousElementSibling.textContent) - 1;
  writeItem(index);
  closeList();
}

// Display previous item in main view
function viewPrev(element) {
  var index = Number(element.parentNode.previousElementSibling.firstElementChild.firstElementChild.textContent.slice(8, -1)) - 2;
  writeItem(index);
}

// Display next item in main view
function viewNext(element) {
  var index = Number(element.parentNode.previousElementSibling.firstElementChild.firstElementChild.textContent.slice(8, -1));
  writeItem(index);
}

// Show list reset confirmation dialog
function showConfirm() {
  document.getElementById("confirmReset").style.display = "unset";
  document.getElementById("btnReset").style.display = "none";
}

// Hide list reset confirmation dialog
function hideConfirm() {
  document.getElementById("btnReset").style.display = "unset";
  document.getElementById("confirmReset").style.display = "none";
}

// Refresh the list
function refreshList() {
  document.getElementById("ltable").innerHTML = "";
  writeList(0);
}

// Restore default list data
function restoreList() {
  resetList();
  saveList();
  refreshList();
  hideConfirm();
}

// Close title screen
function closeTitle() {
  randomItem();
  document.getElementById("title").style.display = "none";
  animateContent();
}
