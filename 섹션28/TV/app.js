const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // 방법1
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

    // 방법2
    const config = {params: {q: searchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}