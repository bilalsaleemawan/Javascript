//Generate a Random Number and shown on a any Html Tag
const Result1 = document.getElementById('numResult1');
Result1.innerHTML = generatRandomNumber ();
const btnClick = document.getElementById('btn-one');

function generatRandomNumber (){
    return Math.floor(Math.random() * 90);
}

btnClick.addEventListener('click', () =>{
    const finalresult = generatRandomNumber ();
    Result1.innerHTML = `Random Number : ${finalresult}`
})

//Show the input value with random colors.


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
