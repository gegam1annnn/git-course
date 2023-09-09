const person = {
    name: 'Svetlana',
    age: 16,
    isYoutuber: false,
    languages: ['arm', 'en', 'ru'],
    address: {
        city: 'Yerevan',
        street: 'Ureniner',
    },
    'complex key' : 'complex value',
    ['key_' + 21 * 2]: 'computed value',
    greet () {
        console.log('Greet from peron', this)
    },
    arrow: () => {
        console.log('Person Arrow', this)
    },
    info () {
        console.log('Person Name', this.name)
    },
}

// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])
// person.age++
// person.languages.push('geo')
// console.log(person.languages)
// person.address = undefined
// delete person.address
// console.log(person)

// Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Petr'

// const {age, name: firstName = 'TEST', languages} = person

// console.log(languages, age, firstName)

// for(let key in person) {
//     if (person.hasOwnProperty(key)) {
//     console.log(person[key])
//     }
// } 

// Object.keys(person).forEach((key) => {
//     console.log(person[key])
// })

const logger = {
    keys(withText = true) {
        if (withText) {
            console.log('Object keys:', Object.keys(this))
        } else{
            console.log(Object.keys(this))
        }
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })
    }
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person, false)
// logger.keys.apply(person, [false])

class Human {
    static isHuman = true

    humanGreet () {
        console.log('greet from human')
    }

    toString () {
        console.log('to string')
    }
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'Undefined name'
        this.age = age ?? 'Undefined age'
    }

    sayHello () {
        console.log('Hello from ', this.name)
    }
}

const person1 = new Person('Svetlana', 16)
const person2 = new Person('Nare', 14)

// console.log(person.isHuman)


