class CPU {
  freeze() {
    console.log('Freeze...')
  }
  jump(position) {
    console.log('Go...')
  }
  execute() {
    console.log('Run...')
  }
}

class Memory {
  load(position, data) {
    console.log('Load...')
  }
}

class HardDrive {
  read(lba, size) {
    console.log('Read...')
  }
}

// Create facade

class ComputerFacade {
  constructor() {
    this.processor = new CPU()
    this.ram = new Memory()
    this.hd = new HardDrive()
  }
  start() {
    this.processor.freeze()
    this.ram.load(
      this.BOOT_ADDRESS,
      this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE)
    )
    this.processor.jump(this.BOOT_ADDRESS)
    this.processor.execute()
  }
}

// Use facade

let computer = new ComputerFacade()
computer.start()
