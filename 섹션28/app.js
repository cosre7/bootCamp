const req = new XMLHttpRequest();

req.onload = function() {
    console.log('It Loaded!!');
    console.log(this.responseText);

    const data = JSON.parse(this.responseText);
    console.log(data.name);
}

// 에러가 날 경우 
req.onerror = function() {
    console.log('Error!!');
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
