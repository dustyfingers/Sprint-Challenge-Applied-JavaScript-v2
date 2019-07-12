function createDOMElement(type, classes = '', content = '') {
    if (!type) return;
    let DOMElement = document.createElement(type);
    if (classes) DOMElement.classList.add(classes);
    DOMElement.textContent = content;
    return DOMElement;
}

// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let headerDiv = createDOMElement('div', 'header');
    let dateSpan = createDOMElement('span', 'date', 'SMARCH 28, 2019');
    let mainText = createDOMElement('h1', null, 'Lambda Times');
    let tempSpan = createDOMElement('span', 'temp', '98°');
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(mainText);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}

document.querySelector('.header-container').appendChild(Header());
