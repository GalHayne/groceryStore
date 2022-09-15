let carItems = {
  Tomatos: 0,
  Cucumber: 0,
  Carrot: 0,
  "Total Price": 0,
};

function showItems(index) {
  let current = "p" + (index + 1);
  let priceIndex = Object.keys(carItems).length - 1;
  let totalPriceLocation = "p" + (priceIndex + 1);

  var elementExists = document.getElementById(current);

  //Update New Object
  document.getElementById("p4").innerHTML =
    Object.keys(carItems)[priceIndex] +
    ":" +
    Object.values(carItems)[priceIndex];

  if (elementExists) {
    document.getElementById(current).innerHTML =
      Object.keys(carItems)[index] + ":" + Object.values(carItems)[index] + " ";
  } else {
    //Add New object
    var tag = document.createElement(current);
    tag.setAttribute("id", current);

    var text = document.createTextNode(
      Object.keys(carItems)[index] + ":" + Object.values(carItems)[index] + " "
    );
    tag.appendChild(text);
    var element = document.getElementById("showAll");
    element.appendChild(tag);
  }

  //delete Object if value = 0
  if (Object.values(carItems)[index] === 0) {
    var element = document.getElementById(current);
    element.parentNode.removeChild(element);
  }
}

//add value to carItems
function addItem(index, price) {
  carItems["Total Price"] += price;
  if (Object.values(carItems)[index] === 0) {
    Object.values(carItems).forEach((keys) => {
      carItems[Object.keys(carItems)[index]] = 1;
    });
  } else {
    let value = ++Object.values(carItems)[index];
    Object.values(carItems).forEach((key) => {
      carItems[Object.keys(carItems)[index]] = value;
    });
  }
  checkIfdisableRemoveBtn(index);
  showItems(index);
}

//delete value from carItem
function removeItem(index, price, removeAll) {
  if (removeAll === 1) {
    let currentItems = Object.values(carItems)[index];
    carItems["Total Price"] -= price * currentItems;
    Object.values(carItems).forEach((key) => {
      carItems[Object.keys(carItems)[index]] = 0;
    });
  } else if (Object.values(carItems)[index] !== 0) {
    let value = --Object.values(carItems)[index];
    carItems["Total Price"] -= price;
    Object.values(carItems).forEach((key) => {
      carItems[Object.keys(carItems)[index]] = value;
    });
  }
  checkIfdisableRemoveBtn(index);
  showItems(index);
}

function checkIfdisableRemoveBtn(index) {
  "btn0-0";
  "btn0-1";
  let disableBtn1 = "btn" + index + "-" + index;
  let disableBtn2 = "btn" + index + "-" + (index + 1);
  if (Object.values(carItems)[index] === 0) {
    //disable button
    document.getElementById(disableBtn1).disabled = true;
    document.getElementById(disableBtn2).disabled = true;
  } else {
    //active button
    document.getElementById(disableBtn2).disabled = false;
    document.getElementById(disableBtn1).disabled = false;
  }
}
