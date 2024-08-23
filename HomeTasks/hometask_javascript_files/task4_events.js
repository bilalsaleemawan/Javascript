//Generate a Random Number and shown on a any Html Tag
const Result1 = document.getElementById('numResult1');
Result1.innerHTML = generatRandomNumber();
const btnClick = document.getElementById('btn-one');

Result1.innerHTML= " ";
function generatRandomNumber() {
    return Math.floor(Math.random() * 90);
}

btnClick.addEventListener('click', () => {
    const finalresult = generatRandomNumber();
    Result1.innerHTML = `Random Number: ${finalresult}`
})

//Show the input value with random colors.


const inputResult = document.getElementById('numberGenerator')
const Result2 = document.getElementById('numResult2')
// This function generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

// This function generate colorizedcharacters
function colorizeCharacters(text) {
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = getRandomColor();
        coloredText += `<span style="color:${color}">${text[i]}</span>`;
    }
    return coloredText;
}
// console.log(colorizeCharacters())


inputResult.addEventListener('input', function () {
    const inputText = this.value;
    const result = colorizeCharacters(inputText);
    Result2.innerHTML = result;
});