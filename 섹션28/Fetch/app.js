// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.group('Resolved!', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('json!', data);
//     })
//     .catch(e => {
//         console.log(e);
//     });

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.group('Resolved!', res);
//     return res.json();
// })
// .then(data => {
//     console.log('first', data);
//     return fetch("https://swapi.dev/api/people/2/")
// })
// .then(res => {
//     console.log('second')
//     return res.json();
// })
// .then(data => {
//     console.log(data)
// })
// .catch(e => {
//     console.log(e);
// });

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch(e) {
        console.log(e);
    }
}

loadStarWarsPeople();