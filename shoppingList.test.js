/**
 * @jest-environment jsdom
 */

const { addItemBtn, renderList, togglePurchased, shoppingList, clearList, markAllPurchased } = require('./shoppingList.js');

describe('Shopping List', () => {
  let itemInput;
  let addItemBtn;
  let itemList;
  let markPurchasedBtn;
  let clearListBtn;

  beforeEach(() => {
    document.body.innerHTML = `
      <input id="itemInput" type="text" placeholder="Enter item">
      <button id="addItem">Add</button>
      <button id="markPurchasedBtn">Mark All as Purchased</button>
      <button id="clearListBtn">Clear List</button>
      <ul id="itemList"></ul>
    `;
    itemInput = document.getElementById('itemInput');
    addItemBtn = document.getElementById('addItemBtn');
    itemList = document.getElementById('itemList');
    markPurchasedBtn = document.getElementById('markPurchasedBtn');
    clearListBtn = document.getElementById('clearListBtn');
  });

  test('should add an item to the shopping list', () => {
    itemInput.value = 'Milk';
    addItemBtn.click();
    expect(shoppingList.length).toBe(1);
    expect(shoppingList[0].text).toBe('Milk');
  });

  test('should render the shopping list', () => {
    shoppingList.push({ text: 'Milk', purchased: false });
    renderList();
    expect(itemList.children.length).toBe(1);
    expect(itemList.children[0].textContent).toBe('Milk');
  });

  test('should toggle purchased state of an item', () => {
    shoppingList.push({ text: 'Milk', purchased: false });
    renderList();
    itemList.children[0].click();
    expect(shoppingList[0].purchased).toBe(true);
    itemList.children[0].click();
    expect(shoppingList[0].purchased).toBe(false);
  });

  test('should mark all items as purchased', () => {
    shoppingList.push({ text: 'Milk', purchased: false });
    shoppingList.push({ text: 'Bread', purchased: false });
    markPurchasedBtn.click();
    shoppingList.forEach(item => {
      expect(item.purchased).toBe(true);
    });
  });

  test('should clear the shopping list', () => {
    shoppingList.push({ text: 'Milk', purchased: false });
    clearListBtn.click();
    expect(shoppingList.length).toBe(0);
    expect(itemList.children.length).toBe(0);
  });
});