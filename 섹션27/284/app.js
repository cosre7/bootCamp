async function hello() {

}

const sing = async () => {
    throw 'oh no';
    return 'la la la';
}

sing()
    .then(data => {
        console.log('promise resolved data :', data)
    })
    .catch(err => {
        console.log('promise rejected data :', err)
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'corgifeetareute') return 'Welcome!';
    throw 'Invalid Password';
}

login('asdfasdf', 'corgifeetareute')
.then(msg => {
    console.log('logged in')
    console.log(msg)
})
.catch(err => {
    console.log('error')
    console.log(err)
})