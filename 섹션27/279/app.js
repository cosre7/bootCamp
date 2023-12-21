// 방법 1
// setTimeout(() => {
//     document.body.style.backgroundColor = 'blue';
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000)

// 방법 1의 콜백 방식
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// 방법 2
// const delayedColorChange = (newColor, delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//     }, delay)
// }

// delayedColorChange('red', 1000);
// delayedColorChange('orange', 2000);

// 방법2의 콜백 방식
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000)
            })
        })
    })
});