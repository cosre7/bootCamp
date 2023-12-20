const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('you clicked me!');
    console.log('or maybe not');
}

function scream() {
    console.log('AHHHHHHH');
    console.log('stop touch me!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function() {
    alert('clicked');
}); 

function twist() {
    console.log('twist');
}

function shout() {
    console.log('shout');
}

const tasButton = document.querySelector('#tas');
// eventListener를 쓰는 이유1
// onclick으로 이벤트를 줄 경우 두 개의 함수를 지정해줄 수 없다.
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// tasButton.addEventListener('click', twist);
// tasButton.addEventListener('click', shout);

// eventListener를 쓰는 이유2
// 옵션을 추가할 수 있다.
tasButton.addEventListener('click', twist, {once: true}); // 한 번만 실행되도록 하는 옵션 추가
tasButton.addEventListener('click', shout);