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