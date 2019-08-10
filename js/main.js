/*----- constants -----*/ 
/*----- app's state (variables) -----*/ 

var count;
/*----- cached element references -----*/ 
var displayEl = document.querySelector('sam');
var inputEl = document.querySelector('input');
/*----- event listeners -----*/ 

document.getElementById('plus-btn').addEventListener('click', increment);
document.getElementById('minus-btn').addEventListener('click', decrement);



/*----- functions -----*/
initialize();

function increment() {
  count += parseInt(inputEl.value);
  render();
}

function decrement() {
  count -= parseInt(inputEl.value);
  render();
}

function initialize() {
  count = 0;
  inputEl.value = 1;
  render();
}
 
function render() {
  sam.innerHTML= count;
}
