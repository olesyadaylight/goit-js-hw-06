console.log(document);

const body = document.body;
console.log(body);

const list = body.querySelector(`#categories`);
console.log(list);
const listItems = list.children;
console.log(`number of categories:`,listItems.length);


for (let elem of listItems) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`category: ${category} , Elements: ${quantityElem}`);
};