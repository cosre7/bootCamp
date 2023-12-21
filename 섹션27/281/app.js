const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}

const request = fakeRequestPromise('yelp.com/api/coffee')

request
    .then(() => { // resolved 일 때의 실행
        console.log('it worked!!! (page1)');
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log('it worked!!! (page2)');
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log('it worked!!! (page3)');
                    }).catch(() => {
                        console.log('Error!!! (page3)');
                    })
            })
            .catch(() => {
                console.log('Error!!! (page2)');
            })
    })
    .catch(() => { // rejected 일 때의 실행
        console.log('Error!!! (page2)');
    })