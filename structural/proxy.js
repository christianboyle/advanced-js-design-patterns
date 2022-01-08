class Percentage {
  constructor(percent) {
    this.percent = percent
  }

  toString() {
    return `${this.percent}%`
  }

  valueOf() {
    return this.percent / 100
  }
}

let fivePercent = new Percentage(5)

console.log(fivePercent.toString()) // 5%
console.log(`5% of 50 is ${50 * fivePercent}`) // 5% of 50 is 2.5