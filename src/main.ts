interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
    percent(value: number, percent: number): number;
}


class Calculator implements ICalculator {

    add(a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    multiply(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("you cannot divide throgh zero");
        }
        return a / b;
    }
    percent(value: number, percent: number): number {
        return (value * percent) / 100;
    }

    calculate(operation: "add" | "subtract" | "multiply" | "divide" | "percent", ...args: number[]): number {
       switch(operation) {
        case "add":
            return this.add(args[0], args[1]);
        case "subtract": 
            return this.subtract(args[0], args[1]);
        case "multiply":
            return this.multiply(args[0], args[1]);
        case "divide":
            return this.divide(args[0], args[1]);
        case "percent":
            return this.percent(args[0], args[1]);
        default:
            throw new Error("unknown operation")
       } 
    }

}

const myCalculator = new Calculator();

console.log(myCalculator.add(20, 10));
console.log(myCalculator.subtract(20, 10));
console.log(myCalculator.multiply(20, 10));
console.log(myCalculator.divide(20, 10));
console.log(myCalculator.percent(20, 10));

console.log(myCalculator.calculate("add", 20, 10));



