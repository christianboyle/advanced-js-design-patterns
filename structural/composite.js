class Employer {
  constructor(name, role) {
    this.name = name
    this.role = role
  }
  print() {
    console.log('name:' + this.name + ' relaxTime: ')
  }
}

class EmployerGroup {
  constructor(name, composite = []) {
    this.name = name
    this.composites = composite
  }
  print() {
    console.log(this.name)
    this.composites.forEach((emp) => {
      emp.print()
    })
  }
}

let lizzy = new Employer('lizzy', 'developer')
let chris = new Employer('chris', 'developer')
let groupDevelopers = new EmployerGroup('developers', [lizzy, chris])

console.log(groupDevelopers)

/*
EmployerGroup {
  name: 'developers',
  composites: [
    Employer { name: 'lizzy', role: 'developer' },
    Employer { name: 'chris', role: 'developer' }
  ]
}
*/
