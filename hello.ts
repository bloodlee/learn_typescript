console.log("Hello, Typescript.");

var i: number = 0;
for (i = 0; i < 10; ++i) {
  console.log(i);
}

var nums: number[] = [1, 2, 3, 4];
for (var anum in nums) {
  console.log(anum);
}

interface PeopleInfo {
  name: string;
  age?: number;
}

function printPeople(aPeople: PeopleInfo) {
  console.log(aPeople.name);

  if (aPeople.age) {
    console.log(aPeople.age);
  }
}

printPeople({name: "yli", age: 32});
printPeople({name: "yli", age: 32});

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

var greeter = new Greeter("world");

console.log(greeter.greet());

class Animal {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(meters: number = 0) {
    console.log(this.name + " moved " + meters + "m.");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters = 5) {
    console.log("slithering...");
    super.move(meters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters = 45) {
    console.log("galloping...");
    super.move(meters);
  }
}

var sam = new Snake("sammy the python");
var tom: Animal = new Horse("Tommy the palomino");

sam.move();
tom.move(34);
