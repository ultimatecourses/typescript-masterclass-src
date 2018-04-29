// Function
function myFunction() {
  console.log('Function:::', this);
}
myFunction();

// Object literal
const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};
myObj.myMethod();

// Classes
class MyClass {
  myMethod() {
    console.log('Class:::', this);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
