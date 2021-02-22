// Extension for Array.prototype.object by adding new method
Array.prototype.min = function(array) {
  return Math.min.apply(Math, array);
}


class CoffeeShop {

  constructor(name, menu, order=[]) {
    this.name = name;
    this.menu = menu,
    this.order=order;
  }

  addOrder(item) {
    if(this.menu.find(el => el.name.toLowerCase() === item.toLowerCase()))  {
      this.order.push(item);
    }else {
      console.log(`This ${item} is currently unavailable!`);
    }
  }

  fullfillOrder() {
    if(!this.order.length){
      console.log('All orders have been fullfilled!');
    }else{
      return `The ${this.order.pop().name} is ready!`;
    }
  }

  listOrders() {
    return this.order;
  }

  dueAmount() {
    this.order.reduce(function(total, currentValue) {
      return total + currentValue.price;}, 0);
  }

  cheapestItem() {
    const eachMealAmounts = [];
    this.menu.forEach(function(el) {
      eachMealAmounts.push(el.price);
    });
    const lowestPriceItem = Array.min(eachMealAmounts);
    return this.menu.find(el => el.price === lowestPriceItem) || 'There\'s no such item.';
  }

  drinksOnly() {
    const onlyDrinksFromMenu = [];
    this.menu.forEach(function(el) {
      if(el.type === 'drink') {
        onlyDrinksFromMenu.push(el);
      }
    });
    return onlyDrinksFromMenu;
  }

  foodOnly() {
    const onlyFoodFromMenu = [];
    this.menu.forEach(function(el) {
      if(el.type === 'food') {
        onlyFoodFromMenu.push(el);
      }
    });
    return onlyFoodFromMenu;
  }
}
