const names = ['Svetlana', 'Nare', 'Aro', 'Avo']

/* names.push('Anjela')
names.unshift('Anjela')

const firstName = names.shift()
const name = names.pop()
console.log('Names: ',  names, name)

console.log(names.reverse())
const reversed = names.toReversed()
const letters = ['e', 'c', 'd', 'b', 'a']
console.log(
    letters.sort(function (a, b){
        return b.charCodeAt(0) - a.charCodeAt(0)
    })
)
console.log(letters.toSorted())
console.log(letters)

console.log(names.splice(0, 2))
console.log(names.toSpliced(0, 2))
console.log(names)

const greatWomen = 'Nare'
const index = names.indexOf(greatWoman)
console.log(index)
const newNames = names.with(index, 'Nare mec')
names[index] = 'Nare mec'
console.log(names[index])
console.log(names)
console.log(newNames)

const capitalNames = names.map(function (name) {
    if (index === 1) {
        return 'Nare mec'
    }
    return name
})
console.log(capitalNames)

console.log(names.indexOf('Avo') !== -1) */

const people = [
    {name: 'Svetlana', budget: 4200}, 
    {name: 'Nare', budget: 15100},
    {name: 'Aro', budget: 300},
    {name: 'Avo', budget: 7520},
]

/* console.log(people.indexOf({budget: 7520}))

let findedPerson

for (let person of people) {
    if (person.budget === 7520) {
        findedPerson = person
    }
}

const finded = people.find((p) => p.budget === 7520)


const findedPerson = people.find(function (person) {
    return person.budget === 7520
})

const findedPerson = people.find.Index(function (person) {
    return person.budget === 7520
})

console.log(people.with(finded, 42)) */

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//     return p.budget > 5000
// })
// filtered.forEach (p) {
//     sumBudget += p.budget
// }

// const sumBudget = people.filter((p) => p.budget > 5000).map((p) => p.budget).reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

const string = 'Hi, how are you?'
const reversed = string.split('').toReversed().join('')

console.log(reversed)


