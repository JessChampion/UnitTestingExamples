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

const addQuantityToExistingItem = (index, quantity, items) => {
  items[index].quantity += quantity;
  return items;
};

const addNewItem = (newItem, items) => {
  items.push(newItem);
  return items;
};

export const addToItems = (newItem, items) => {
  const index = items.findIndex(matchesById(newItem.id));
  if (index >= 0) {
    return addQuantityToExistingItem(index, newItem.quantity, items);
  }
  return addNewItem(newItem, items);
};

// Public interface
// ----------------------------------------------
export const addItemToCart = (item, cart) => {
  const items = addToItems(item, cart.items);
  const total = getTotal(items);
  return {
    items,
    total
  }
};

const getCart = _items => {
  const items = [..._items];
  const total = getTotal(items);

  return {
    items,
    total,
  }
};

export default getCart;

