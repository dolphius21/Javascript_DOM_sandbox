let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get the child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children elements
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Get children of children
list.children[3].children[0].id = 'text-link';
val = list.children[3].children[0];

// Get first child
val = list.firstChild;
val = list.firstElementChild;

// Get last child
val = list.lastChild;
val = list.lastElementChild;

// Count children elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;

// Get parent element
val = listItem.parentElement;

// Get parent of parent
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;

// Get next element sibling
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;

// Get previous element sibling
val = listItem.previousElementSibling;
val = listItem.previousElementSibling.previousElementSibling;

console.log(val);