function madLib(s1, s2, s3) {
  return `We shall ${s1.toUpperCase()} the ${s2.toUpperCase()} ${s3.toUpperCase()}`
}

// console.log(madLib('make', 'best', 'guac'));

function isSubString(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubString("Jump for joy", "joys"));

function fizzBuzz(array) {
  let newArr = [];

  array.forEach(ele => {
    if (ele % 3 === 0 ^ ele % 5 === 0) {
      newArr.push(ele);
    }
  });

  return newArr;
}

// console.log(fizzBuzz([1, 2, 3, 5,15]));

