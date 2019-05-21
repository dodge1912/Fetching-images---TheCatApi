const TheCatApi = 'https://api.thecatapi.com/v1/images/search?limit=10';

DOM = {
    searchButton: document.querySelector('.js-search_btn'),
    results: document.querySelector('.js-results')
};

DOM.searchButton.addEventListener('click', e => {
    fetchData(TheCatApi)
    .then(res => createImg(res))
    .then(res => DOM.results.innerHTML = res)
    
})

function fetchData(url){
    return fetch(url)
    .then(res => {
        if(res.ok) {return res.json();}
        throw new Error('ne valja');
    })
    .catch(err => processError())
}

function processError(){
    DOM.results.innerHTML='Error';
}

function createImg(res){
    var img = '';
    res.map( cat => {
        img = img + `<img src='${cat.url}' alt='Random cat'> \n`;
    })
    return img;
}
