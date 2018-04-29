interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Todd',
  age: 27,
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
};

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(person);