const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

// 콜백 방식으로 호출
fakeRequestCallback('books.com/page1', 
    function(response) {
        console.log('It worked!');
        console.log(response);
        fakeRequestCallback('books.com/page2',
            function(response) {
                console.log('It worked again!');
                console.log(response);
                fakeRequestCallback('books.com/page3',
                    function(response) {
                        console.log('It worked again too!');
                        console.log(response);
                    },
                    function(err) {
                        console.log('Error!!! (3rd request)', err)
                    }
                )
            }, 
            function(err) {
                console.log('Error!!! (2nd request)', err)
            }
        )
    }, 
    function(err) {
        console.log('Error!!!', err)
    }
);

