class Singleton {
  constructor() {
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }
    this.constructor.instance = this
  }
  say() {
    console.log('Saying...')
  }
}

let s1 = new Singleton()
let s2 = new Singleton()
console.log('Are they the same? ' + (s1 === s2)) // Are they the same? true

s1.say()
