class Pizza {
  constructor(private name: string, private price: number) {}
}

class List<T> {
  private list: T[];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

const pizzas = list.getList();

class Coupon {
  constructor(private name: string) {}
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'));
