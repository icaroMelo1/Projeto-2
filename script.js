
function req41() {
  let box1 = document.querySelector('#pixel-board');
 
  for (let i = 0; i < 5; i += 1) {
    let row = document.createElement('div');
    row.className = 'row';
    box1.appendChild(row);
    for (let i = 0; i < 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixels.style.backgroundColor = 'white';
      row.appendChild(pixels);
  
   }
  }
}
req41();

function req4() {

  let makebox = document.querySelector('#generate-board');
  
  makebox.addEventListener('click', function () {

  let box1 = document.querySelector('#pixel-board');
  let areaofbox = document.querySelector('#board-size').value;
  let number = areaofbox;

  box1.innerHTML = '';

  if (document.querySelector('#board-size').value == false){
    alert('Board inválido!')
  }
  if (document.querySelector('#board-size').value < 5 ){
    alert('Board inválido!');
    number = 5;
  }  
  if (document.querySelector('#board-size').value > 30  ){
    alert('Board inválido!');
    number = 50;
  }

  for (let i = 0; i < number; i += 1) {
  let row = document.createElement('div');
  row.className = 'row';
  box1.appendChild(row);

    for (let i = 0; i < number; i += 1) {
    let pixels = document.createElement('div');
    pixels.className = 'pixel';
    row.appendChild(pixels);
  
   }
  }
 })
}
req4();

const createColor = () => {
  let colors = document.querySelectorAll('.color');

  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'blue';
  colors[2].style.backgroundColor = 'red';
  colors[3].style.backgroundColor = 'green';
  colors[4].style.backgroundColor = 'white';
  colors[5].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
  colors[6].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
  colors[7].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;

  let blackcolor = document.querySelector('#black');
  blackcolor.classList.add('selected'); 
}


const buttonGenerateColor = () => {
  const button = document.querySelector('#buttonGenerate');
  button.addEventListener('click', () => {
    const colors = document.querySelectorAll('.color');
    colors[5].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
    colors[6].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
    colors[7].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;  
  });
}

window.onload = function(){
  createColor();
  buttonGenerateColor();
}

function req7() {
  let seleciona = document.querySelector('#color-palette');
  let selected = document.querySelector('.color');


  seleciona.addEventListener('click', (event) => {
    if (selected.classList.contains('selected') == false && event.target.classList.contains('color-palette') == false) {
      event.target.classList.add('selected');
      selected = document.querySelector('.selected');
    } else {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
      selected = document.querySelector('.selected');
    }

  })
}
req7();

function req8() {

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel') == true) {

    event.target.style.backgroundColor =  document.querySelector('.selected').style.backgroundColor;
      
  }
}, false);
}

req8();

function req9() {

  let clearbutton = document.querySelector('#clear-board');

  clearbutton.addEventListener('click', function (event) {
    let pix = document.querySelectorAll('.pixel');
    let limits = document.querySelectorAll('.pixel').length;
    
    for(let i = 0; i < limits; i +=1){
      pix[i].style.backgroundColor = 'white';
    }

  })
}
req9();
