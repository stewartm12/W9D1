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

betterSum()(2)(3)(1);
console.log(sum);
// console.log(sum(2)(3)(1));
