var $raceCar = document.querySelector('.race-car');
var $left = 37;
var $up = 38;
var $right = 39;
var $down = 40;

function rotateCar(event) {
  if (event.keyCode === $down) {
    $raceCar.className = 'race-car rotate-down';
  } else if (event.keyCode === $up) {
    $raceCar.className = 'race-car rotate-up';
  } else if (event.keyCode === $left) {
    $raceCar.className = 'race-car rotate-left';
  } else if (event.keyCode === $right) {
    $raceCar.className = 'race-car rotate-right';
  }
}
window.addEventListener('keydown', rotateCar);
