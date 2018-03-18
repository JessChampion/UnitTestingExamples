/*
* Class example
* A very simple shopping cart model
* */

// Get total functions
// ----------------------------------------------
const getItemTotal = item => item.price * item.quantity;

const sum = (total, value) => total + value;

const getTotal = (items) => {
  if (items.length === 0) {
    return 0;
  }
  const totals = items.map(getItemTotal);
  return totals.reduce(sum);
};

// Add item functions
// ----------------------------------------------
const matchesById = targetId => item => item.id === targetId;

const addQuantityToExistingItem = (index, quantity, _items) => {
  const items = [..._items];
  items[index].quantity += quantity;
  return items;
};

const addNewItem = (newItem, items) => {
  items.push(newItem);
  return items;
};

const addToItems = (newItem, items) => {
  const index = items.findIndex(matchesById(newItem.id));
  if (index >= 0) {
    return addQuantityToExistingItem(index, newItem.quantity, items);
  }
  return addNewItem(newItem, items);
};

// Public interface
// ----------------------------------------------

class Cart {
  constructor(_items = []) {
    const items = [..._items];
    this.items = items;
    this.total = getTotal(items);
  }

  // add an item to the cart
  // ----------------------------------------------
  addItem(newItem) {
    this.items = addToItems(newItem, this.items);
    this.total = getTotal(this.items);
  }
}

export default Cart;
