class Drink {
  consume() {}
}

class Tea extends Drink {
  consume() {
    console.log('This is Tea')
  }
}

class Coffee extends Drink {
  consume() {
    console.log('This is Coffee')
  }
}

class DrinkFactory {
  prepare() {}
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log('Tea created')
    return new Tea()
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    console.log('Coffee created')
    return new Coffee()
  }
}

let teaDrinkFactory = new TeaFactory()
let tea = teaDrinkFactory.makeTea()
tea.consume()

let coffeeDrinkFactory = new CoffeeFactory()
let coffee = coffeeDrinkFactory.makeCoffee()
coffee.consume()

// Output:
//
// Tea created
// This is Tea
// Coffee created
// This is Coffee
