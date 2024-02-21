class Calculator{
    add(a,b){
        return a + b;
    }
    subtract(a,b){
        return a - b;
    }
    multiply (a,b){
        return a * b;
    }
    divide(a,b){
        if(b === 0){
            return "Cannot divide by 0";
        } else {
            return a/b;
        }
    }
}


class ScientificCalculator extends Calculator{
    square(a){
        return a * a;
    }
    cube(a){
        return a * a * a;
    }
    power(a,b){
        return Math.pow(a,b);
    }
}

const s1 = new ScientificCalculator();

const add = Calculator.prototype.add.call(s1,10,5);
console.log(add);
const subtract = Calculator.prototype.subtract.apply(s1,[10,5]);
console.log(subtract);
const multiplyByTwo = s1.square.bind(s1, 2);
console.log(multiplyByTwo());
const powerOfThree = s1.cube.bind(s1,3);
console.log(powerOfThree());
