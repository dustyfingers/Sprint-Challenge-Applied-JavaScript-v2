function createDOMElement(type, classes = '', content = '') {
    if (!type) return;
    let DOMElement = document.createElement(type);
    if (classes) DOMElement.classList.add(classes);
    DOMElement.textContent = content;
    return DOMElement;
}

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function Card(article) {
    let cardDiv = createDOMElement('div', 'card');
    let headline = createDOMElement('div', 'headline', article.headline);
    let authorDiv = createDOMElement('div', 'author');
    let imgContainer = createDOMElement('div', 'img-container');
    let authorImg = createDOMElement('img');
    authorImg.src = article.authorPhoto;
    let authorName = createDOMElement('span', '', `By ${article.authorName}`);

    cardDiv.appendChild(headline);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(authorName);
    imgContainer.appendChild(authorImg);
    return cardDiv;
}

async function buildCards() {
    let cardsContainer = document.querySelector('.cards-container');
    let res = await axios.get('https://lambda-times-backend.herokuapp.com/articles');
    articlesObj = res.data.articles;
    for (let key in articlesObj) {
        articlesObj[key].forEach(article => {
            cardsContainer.appendChild(Card(article));
        })
    }
};

buildCards();