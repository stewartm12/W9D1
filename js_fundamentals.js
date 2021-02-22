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
  });
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

  return function (...moreArgs) {
    return that.apply(ctx, args.concat(moreArgs));
  };
};
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

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// // bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
let demo1 = markov.says.myBind(pavlov);
demo1("meow", "a tree");
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

function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let result = numbers.reduce((acc, ele) => {
        return acc + ele;
      });
      return result;
    } else {
      return _curriedSum;
    }
  };
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

// Function.prototype.curry = function (numArgs) {
//   let numbers = [];
//   let that = this;

//   return function _curry(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       // debugger;
//       return that();
//     } else {
//       return _curry;
//     }
//   };
// };

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let that = this;

  return function _curry(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      // debugger;
      return that.apply(null, numbers);
    } else {
      return _curry;
    }
  };
};

// function something(arg1, ...args) {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
//   console.log(arg4);
//   console.log(arg5);
//   // console.log(more);
// }

// something.curry(5)(1)(2)(2)(2)(2);
