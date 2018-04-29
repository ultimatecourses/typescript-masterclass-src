const person = {
  name: 'Todd',
  age: 27,
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, 'age');

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};
