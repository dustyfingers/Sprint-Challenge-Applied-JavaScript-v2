function createDOMElement(type, classes = '', content = '') {
    if (!type) return;
    let DOMElement = document.createElement(type);
    if (classes) DOMElement.classList.add(classes);
    DOMElement.textContent = content;
    return DOMElement;
}


// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get

function Tab(topic) {
    let tabDiv = createDOMElement('div', 'tab', topic);
    return tabDiv;
}

async function buildTabs() {
    let tabsContainer = document.querySelector('.topics');
    let topics = await axios.get(`https://lambda-times-backend.herokuapp.com/topics`);
    topicsArray = topics.data.topics;
    topicsArray.forEach(topic => tabsContainer.appendChild(Tab(topic)));
};

buildTabs();
