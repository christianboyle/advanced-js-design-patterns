class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
    this.currentPlayer = 0
  }

  run() {
    this.start()
    while (!this.haveWinner) {
      this.takeTurn()
    }

    console.log(`Player ${this.winningPlayer} wins`)
  }

  start() {}
  get haveWinner() {}
  takeTurn() {}
  get winningPlayer() {}
}

class Chess extends Game {
  constructor() {
    super(2)
    this.maxTurns = 20
    this.turn = 1
  }

  start() {
    console.log(
      `Starting a game of chess with ${this.numberOfPlayers} players.`
    )
  }
  get haveWinner() {
    return this.turn === this.maxTurns
  }

  takeTurn() {
    console.log(`
      Turn ${this.turn++} taken by player ${this.currentPlayer}.
    `)
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers
  }

  get winningPlayer() {
    return this.currentPlayer
  }
}

let chess = new Chess()
chess.run()

/*

Output:

Starting a game of chess with 2 players.

      Turn 1 taken by player 0.
      Turn 2 taken by player 1.
      Turn 3 taken by player 0.
      Turn 4 taken by player 1.
      Turn 5 taken by player 0.
      Turn 6 taken by player 1.
      Turn 7 taken by player 0.
      Turn 8 taken by player 1.
      Turn 9 taken by player 0.
      Turn 10 taken by player 1.
      Turn 11 taken by player 0.
      Turn 12 taken by player 1.
      Turn 13 taken by player 0.
      Turn 14 taken by player 1.
      Turn 15 taken by player 0.
      Turn 16 taken by player 1.
      Turn 17 taken by player 0.
      Turn 18 taken by player 1.
      Turn 19 taken by player 0.

Player 1 wins

*/
