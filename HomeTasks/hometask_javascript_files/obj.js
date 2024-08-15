const products = {
    name: 'Delicious Apples',
    price: 7.93
}
const chooseColor = {
    color1: 'Green',
    color2: 'Yellow',
    color3: 'Lightred',
    color4: 'Red'
}

const productName = document.getElementById('product-name');
productName.innerHTML = products.name;
const productPrice = document.getElementById('product-price');
productPrice.innerHTML = `RS ${products.price}`;

const colorHeading = document.getElementById('color-heading');
colorHeading.innerHTML = "SELECT A COLOR";

const firstColor = document.getElementById('green');
firstColor.textContent = chooseColor.color1;

const secondColor = document.getElementById('yellow');
secondColor.textContent = chooseColor.color2;

const thirdColor = document.getElementById('lightred');
thirdColor.textContent = chooseColor.color3;

const fourthColor = document.getElementById('red');
fourthColor.textContent = chooseColor.color4;

const proDescription = document.getElementById('proDescription');
proDescription.innerHTML = "BENEFITS";