class NumberExpression {
  constructor(value) {
    this.value = value
  }

  print(buffer) {
    buffer.push(this.value.toString())
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  print(buffer) {
    buffer.push('(')
    this.left.print(buffer)
    buffer.push('+')
    this.right.print(buffer)
    buffer.push(')')
  }
}

let e = new AdditionExpression(
  new NumberExpression(5),
  new AdditionExpression(new NumberExpression(1), new NumberExpression(9))
)

let buffer = []
e.print(buffer)

console.log(buffer.join(''))
console.log(eval(buffer.join('')))
