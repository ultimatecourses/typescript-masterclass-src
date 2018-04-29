// Object literal
const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};
// myObj.myMethod();

// Function
function myFunction(...text: string[]) {
  console.log('Function:::', this, text);
}
const bindFunction = myFunction.bind(myObj);
bindFunction('ABC', 'DEF');
bindFunction('123', '456');
bindFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF');
myFunction.apply(myObj, ['ABC', 'DEF']);
