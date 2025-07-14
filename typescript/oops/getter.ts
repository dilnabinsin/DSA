class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price must be positive");
    }
  }
}

const item = new Product();
item.price = 200;
console.log(item.price); // 200
