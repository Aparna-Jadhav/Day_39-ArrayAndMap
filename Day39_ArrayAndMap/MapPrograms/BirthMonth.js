let birthMap = new Map();
for(let i=0; i<50; i++){
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    if(birthMap.has(birthMonth)){
        let person = birthMap.get(birthMonth);
        person = person + " , Person-" + i;
        birthMap.set(birthMonth,person); 
    }
    else{
        birthMap.set(birthMonth,"Person" + i);
    }
}
console.log(birthMap);