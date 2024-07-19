// Initialize array to store shopping list items
let shoppingList = [];

// DOM elements
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const markPurchasedBtn = document.getElementById('markPurchasedBtn');
const clearListBtn = document.getElementById('clearListBtn');
const itemList = document.getElementById('itemList');

// Event listener for adding items
addItemBtn.addEventListener('click', addItemBtn);

// Function to add item
function addItem() {
    
    const newItemText = itemInput.value.trim();
   // alert(newItemText);
    if (newItemText !== '') {
        shoppingList.push({ text: newItemText, purchased: false });
        renderList();
        itemInput.value = '';
    }
}

// Function to render shopping list
function renderList() {
    itemList.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        if (item.purchased) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            togglePurchased(index);
        });
        itemList.appendChild(li);
    });
}

// Function to toggle purchased state
function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
}

// Event listener for marking all items as purchased
markPurchasedBtn.addEventListener('click', () => {
    shoppingList.forEach(item => {
        item.purchased = true;
    });
    renderList();
});

// Event listener for clearing the list
clearListBtn.addEventListener('click', () => {
    shoppingList = [];
    renderList();
});

// Initial render
renderList();

module.exports = {
    addItemBtn, renderList, togglePurchased, shoppingList, clearList, markAllPurchased 
};