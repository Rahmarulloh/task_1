const code = document.querySelectorAll(".color-code");

const cards = document.querySelectorAll(".color");
const colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'd', 'c', 'e', 'f'];

for (let k = 0; k < 3; k++) {
    let colorRandom = '#';
    for (let i = 0; i < 6; i++) {
      colorRandom += colorCode[Math.floor(Math.random() * colorCode.length)];
    }
    console.log(colorRandom);
    
    cards[k].style.backgroundColor = colorRandom;
    console.log(cards[k]);
    code[k].innerHTML = colorRandom;
    console.log(code[k].innerHTML = colorRandom);
}
