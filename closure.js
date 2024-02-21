function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const firstCounter = counter();
const secondCounter = counter();



let firstValues = [];
for(let i=0; i<5; i++){
    firstValues.push(firstCounter());
}

console.log("firstValues array: ",firstValues);

let secondValues = [];
for(let i=0; i<3; i++){
   secondValues.push(secondCounter()); 
}

console.log("secondValues array: ",secondValues);
