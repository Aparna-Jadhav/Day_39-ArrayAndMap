let randomArr = new Array();
for(let i=0; i<10; i++)
{
    let number = Math.floor(Math.random() * 900);
    randomArr.push(number);
}
randomArr.sort();
console.log(randomArr);
console.log("Second smallest element : " + randomArr[1]);
console.log("Second largest element : " + randomArr[randomArr.length - 2]);
