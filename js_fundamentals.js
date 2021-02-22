function Mysum(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
// console.log(sum(2)(3)(1));

function betterSum() {
  let sum = [];
  return function add(num) {
    sum.push(num);
    console.log(
      sum.reduce((acc, ele) => {
        return acc + ele;
      })
    );
    return add;
  };
}

// betterSum()(2)(3)(1);
// console.log(sum);
// console.log(sum(2)(3)(1));

function restSum(...args) {
  let arr = args;

  let sum = arr.reduce((acc, ele) => {
        return acc + ele;
      })
    ;
    return sum;
}
// console.log(restSum(1, 2, 3))


// Function.prototype.myBind = function(...args) {
//   debugger
//   let that = this;

//   if (args.length === 1) {
//     return function () {
//       that.apply(args[0]);
//       Function.prototype.myBind(...args) {
//         that = this;
//         return that.apply(args);
//       };
//     };
//   } else {
//     debugger
//     console.log(that);
//     return that.apply(args);
//   }
// }
/////////////////////////////////////////////////////
Function.prototype.myBind = function (ctx, ...args) {
  let that = this;

  return function(...moreArgs) {
    return that.apply(ctx, args.concat(moreArgs));
  }
}
/////////////////////////////////////////////////////
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// // bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true