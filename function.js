const fn = (person) => {
    const newPerson = { ...{}, ...person }
    newPerson.name = "lee"
    return newPerson
}

const person = { name: "kim" }
const person2 = fn(person)
console.log(person, person2);