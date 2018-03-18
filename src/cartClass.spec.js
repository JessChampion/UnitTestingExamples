import Cart from './cartClass'

const getTestCartWithItems = () => new Cart([{
  id: 1,
  price: 2,
  quantity: 3,
}, {
  id: 2,
  price: 2.5,
  quantity: 4,
}]);

describe("A shopping cart", () => {
  it("creates an new empty cart", () => {
    const testCart = new Cart([]);
    expect(testCart.items.length).toBe(0);
    expect(testCart.total).toBe(0);
  });

  it("creates an new cart with items", () => {
    const testCart = getTestCartWithItems();
    expect(testCart.items.length).toBe(2);
    expect(testCart.total).toBe(16);
  });

  describe("add item to the cart", () => {
    it("can add an item to and empty cart and calculate the total", () => {
      const testCart = new Cart([]);
      const testItem = {
        id: 3,
        price: 2.5,
        quantity: 2
      };

      testCart.addItem(testItem);

      expect(testCart.items.length).toBe(1);
      expect(testCart.items[0]).toEqual(testItem);
      expect(testCart.total).toBe(5);
    });

    it("can add an item of a new type to the cart", () => {
      const testCart = getTestCartWithItems();
      const testItem = {
        id: 3,
        price: 2.5,
        quantity: 2
      };

      testCart.addItem(testItem);

      expect(testCart.items.length).toBe(3);
      expect(testCart.items[2]).toEqual(testItem);
    });

    it("should correctly calculate the cart total when adding an item of a new type", () => {
      const testCart = getTestCartWithItems();
      const testItem = {
        id: 3,
        price: 2.5,
        quantity: 2
      };

      testCart.addItem(testItem);
      expect(testCart.items[2]).toEqual(testItem);
      expect(testCart.total).toBe(21);
    });

    it("can add another item of an existing type to the cart", () => {
      const testCart = getTestCartWithItems();
      const testItem = {
        id: 2,
        price: 2.5,
        quantity: 2,
      };

      testCart.addItem(testItem);

      expect(testCart.items.length).toBe(2);
      expect(testCart.items[1].quantity).toBe(6);
    });

    it("should correctly calculate the cart total when adding an item of an existing type", () => {
      const testCart = getTestCartWithItems();

      const testItem = {
        id: 2,
        price: 2.5,
        quantity: 5,
      };

      testCart.addItem(testItem);

      expect(testCart.total).toBe(28.5);
    });
  });
});
