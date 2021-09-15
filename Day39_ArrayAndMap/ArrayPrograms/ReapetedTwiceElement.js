function isPalindrome(number){

	let reverse = 0;
    let reminder;
    let i = 0;
	while(number != 0){
        reminder = number % 10;
        reverse = (reverse * 10) + +reminder;
        number = Math. floor(number / 10);
        i += +1;
    }
    return reverse;
}
let twiceArr = new Array();

for(let i=10; i<100; i++){
    let rev = isPalindrome(i);
    if(i == rev){
        twiceArr.push(i);
    }
}
console.log(twiceArr);