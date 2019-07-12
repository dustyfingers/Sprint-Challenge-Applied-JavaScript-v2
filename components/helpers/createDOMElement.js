function createDOMElement(type, classes = '', content = '') {
    if (!type) return;
    let DOMElement = document.createElement(type);
    if (classes) DOMElement.classList.add(classes);
    DOMElement.textContent = content;
    return DOMElement;
}

export default createDOMElement;