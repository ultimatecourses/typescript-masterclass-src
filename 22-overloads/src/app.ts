function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
