//your JS code here. If required.
function stripArticles(article) {
    return article.replace(/^(a |an |the )/i, '');
}

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a, b) => {
    stripArticles(a) > stripArticles(b) ? 1 : -1;
})

const ul = document.getElementById('bands');
bands.forEach(band => {
    const li = document.createElement('li');
    li.innerText = band;
    ul.appendChild(li);
});