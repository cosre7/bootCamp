const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

// 단계1
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         button.style.backgroundColor = makeRandomColor();
//         button.style.color = makeRandomColor();
//     })
// }

// 단계2
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
//     })
// }

// 단계3
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

// 단계1
// for (let h1 of h1s) {
//     h1.addEventListener('click', function() {
//         h1.style.backgroundColor = makeRandomColor();
//         h1.style.color = makeRandomColor();
//     })
// }

// 단계2
// for (let h1 of h1s) {
//     h1.addEventListener('click', function() {
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
//     })
// }

// 단계3
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}