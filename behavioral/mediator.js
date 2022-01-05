class Person {
  constructor(name) {
    this.name = name
    this.chatLog = []
  }

  receive(sender, message) {
    let s = `${sender}: '${message}'`
    console.log(`[${this.name}'s chat session] ${s}`)
    this.chatLog.push(s)
  }

  say(message) {
    this.room.broadcast(this.name, message)
  }

  pm(who, message) {
    this.room.message(this.name, who, message)
  }
}

class ChatRoom {
  constructor() {
    this.people = []
  }

  broadcast(source, message) {
    for (let p of this.people) if (p.name !== source) p.receive(source, message)
  }

  join(p) {
    let joinMsg = `${p.name} joins the chat`
    this.broadcast('room', joinMsg)
    p.room = this
    this.people.push(p)
  }

  message(source, destination, message) {
    for (let p of this.people)
      if (p.name === destination) p.receive(source, message)
  }
}

let room = new ChatRoom()

let John = new Person('John')
let Tony = new Person('Tony')

room.join(John)
room.join(Tony)
John.say('Hello!!')

let doe = new Person('Doe')
room.join(doe)
doe.say('Hello everyone!')

/*

Output:

[John's chat session] room: 'Tony joins the chat'
[Tony's chat session] John: 'Hello!!'
[John's chat session] room: 'Doe joins the chat'
[Tony's chat session] room: 'Doe joins the chat'
[John's chat session] Doe: 'Hello everyone!'    
[Tony's chat session] Doe: 'Hello everyone!'

*/
