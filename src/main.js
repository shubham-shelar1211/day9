async function sum(n1, n2) {
    // ...
    return n1 + n2;
  }
  
  async function main() {
    let result = await sum(1, 1);
    console.log(result);
  }
  
  main();