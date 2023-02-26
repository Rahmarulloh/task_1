const card = document.querySelectorAll(".card");
const color = document.querySelectorAll(".color");
const code = document.querySelectorAll(".color-code");
const clg = console.log;

const colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'd', 'c', 'e', 'f'];

for (let i = 0; i < 3; i++) {
    let colorRandom = '#';

    for (let j = 0; j < 6; j++) {
      colorRandom += colorCode[Math.floor(Math.random() * colorCode.length)];
    }

    clg(colorRandom);
    
    color[i].style.backgroundColor = colorRandom;

    clg(color[i]);

    code[i].innerHTML = colorRandom;

    clg(code[i].innerHTML = colorRandom);

    card[i].addEventListener("click", function () {
        body.style.backgroundColor = colorRandom;
        clg(body.style.backgroundColor)
    })
}
