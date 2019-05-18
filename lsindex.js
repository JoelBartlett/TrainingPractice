var newColor = $('.color-here');
var changeColorBtn = $('.change-color');
var currentColor = localStorage.getItem('color');

newColor.css('backgroundColor', currentColor)

changeColorBtn.on("click", changeColor);

function changeColor() {
  var color = $('.color').val();
  newColor.css('backgroundColor', color);
  updateStorage(color);
}

function updateStorage(color) {
  localStorage.setItem('color', color);
  console.log(localStorage);
}
