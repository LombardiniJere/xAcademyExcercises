/** PRIMER EJERCICIO **/

const pyramidContainer = document.getElementById("pyramid-container");
const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');

function printPyramid(number) {
  if (number <= 0 || number > 15) {
    pyramidContainer.textContent = "Ingrese un número mayor que 0 y menor que 16";
    return;
  } 

  pyramidContainer.innerHTML = '';
  for (let i = 1; i <= number; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    };
    const p = document.createElement('p');
    p.innerText = row;
    pyramidContainer.appendChild(p);
  };
};

submitButton.addEventListener("click", function() {
  const number = parseInt(numberInput.value);
  printPyramid(number);
});


/** SEGUNDO EJERCICIO **/

const buttonRandom = document.getElementById('submit-button-array');
const array1Container = document.getElementById("array1-container");
const array2Container = document.getElementById("array2-container");
const array3Container = document.getElementById("array3-container");

// Generar los elementos aleatorios de los arreglos
function randomArrays() {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < 10; i++) {
    arr1.push(Math.floor(Math.random() * 10));
    arr2.push(Math.floor(Math.random() * 10));
  }
  return [arr1, arr2];
};

// Encontrar elementos comunes y únicos de los array

function groupArrays () {
  const [arr1] = randomArrays();
  const [arr2] = randomArrays();
  array1Container.innerHTML = 'Array1: [' + [arr1] + ']';
  array2Container.innerHTML = 'Array2: [' + [arr2] + ']';

  const arr3 = [];
  array3Container.innerHTML = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1 && arr3.indexOf(arr1[i]) === -1) {  
      arr3.push(arr1[i]);
    }
  };
  const p = document.createElement('p');
  p.innerText = 'Elementos comunes entre Array1 y Array2: ' + '[' + arr3 + ']';
  array3Container.appendChild(p);
  return arr3;
};

buttonRandom.addEventListener('click', groupArrays);


/** PRIMER EJERCICIO **/

class Carro {
    constructor() {
      this.totalPrice = 0;
      this.items = [];
    };
  
    addItem(name, price, units) {
      const existingItem = this.items.find(item => item.name === name);
  
      if (existingItem) {
        existingItem.units += units;
        console.log(`${name} ya existe en el carrito con ${existingItem.units} unidades.`);
      } else if (name === '') {
        console.log('Error: No se puede agregar un producto al carrito sin nombre.');
      } else {
        this.items.push({ name, price, units });
        this.totalPrice += price * units;
      };
    };
};
  
const carrito = new Carro();
carrito.addItem("Azucar", 5, 4);
carrito.addItem("Yerba", 2, 4);
carrito.addItem("", 2, 1);
console.log(carrito);