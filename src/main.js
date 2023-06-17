console.log("Hello 1");
console.log("Hello 2");

// is it blocking the next two stament ?
// this is non blocking
// non blocking helps to achive async prog
setTimeout(() => {
  console.log("Hello 3");
}, 0);

console.log("Hello 4");
console.log("Hello 5");