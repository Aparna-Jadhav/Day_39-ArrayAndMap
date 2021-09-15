let dice = new Map();
let i = 0;
let maxTemp = 0;
let maxNum;
while(maxTemp < 10){
    let number = Math.floor(Math.random() * 6) + 1;
    //check key exist or not in map
    if(dice.has(number)){
        let count = dice.get(number);
        count += +1;
        dice.set(number,count);
        if(maxTemp < count){
            maxTemp = count;
            maxNum = number;
        }
    }
    else{
        dice.set(number,1);
    }
}
let min = 10;
let minNum;
for(let [number,count] of dice){
    if(count < min){
        min = count;
        minNum = number;
    }
}

console.log(dice);
console.log("Number reaches Maximum times : " + maxNum);
console.log("Number reaches Minimum times : " + minNum);