const ps = require("prompt-sync");
const prompt =ps();

function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  let number = prompt("Enter number : ");
  console.log(`${number}`);
  console.log("Prime factors of ", number + ":", primeFactors(number).join(" "))