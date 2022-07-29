var $raceCar = document.querySelector('.race-car');
var $left = 37;
var $up = 38;
var $right = 39;
var $down = 40;
var $space = 32;
var $startLine = 0;

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

function gas(event) {
  if (event.keyCode === $space) {
    var $go = setInterval(function () {
      if ($startLine > 2000) {
        clearInterval($go);
      } else {
        $startLine += 3;
        $raceCar.style.left = $startLine + 'px';
      }
    });
  }
}
window.addEventListener('keydown', gas);
