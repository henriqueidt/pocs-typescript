class Car {
  private brand: string;
  private model: string;

  constructor(newBrand: string, newModel: string) {
    this.brand = newBrand;
    this.model = newModel;
  }

  // Getter
  get brandType() {
    return this.brand;
  }

  *getInfo() {
    yield this.brand;
    yield this.model;
  }
}

const car = new Car("mercedes", "c200");

for (const value of car.getInfo()) {
  console.log(value);
}
