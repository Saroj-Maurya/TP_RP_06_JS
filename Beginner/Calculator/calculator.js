var value = "";
var displayTag = document.getElementById("display");

function appendValue(val) {
  value += val;
  displayTag.innerHTML = value;
}
function deleteValue() {
  value = value.substring(0, value.length - 1);
  displayTag.innerHTML = value;
}
function calcValue() {
  value = eval(value);
  displayTag.innerHTML = value;
}