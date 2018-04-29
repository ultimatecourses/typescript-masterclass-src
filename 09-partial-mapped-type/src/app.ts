interface Person {
  name: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P]
};

function updatePerson(person: Person, prop: Partial<Person>) {
  return { ...person, ...prop };
}

const person: Person = {
  name: 'Todd',
  age: 27,
};

updatePerson(person, { name: 'ABC' });