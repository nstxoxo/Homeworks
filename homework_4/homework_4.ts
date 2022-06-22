// ### NORMAL level
// #### Task 1 💻
// - Реализовать класс калькулятор, который имеет несколько методов (сложение, вычитание, умножение, деление, 
// и еще любой/любые на выбор) и принимает 3 параметра: 2 цифры и операция
// - Написать 10 положительных и отрицательных тестов (методов) по вызову данных функции, 
// которые в зависимости от переданных аргументов и ожидаемого результата выводит либо: 
// что "тест" прошел, либо что "тест" свалился
// collaborato - slavaPislyakov

class Calculator {
    firstNumber: number
    secondNumber: number
    operation: string

    constructor(firstNumber: number, secondNumber: number, operation: string) {
        this.firstNumber = firstNumber
        this.secondNumber = secondNumber
        this.operation = operation
    }

    sumNumbers() {
        return this.firstNumber + this.secondNumber
    }

    minusNumbers() {
        return this.firstNumber - this.secondNumber
    }

    multiplyNumbers() {
        return this.firstNumber * this.secondNumber
    }

    divideNumbers() {
        return this.firstNumber / this.secondNumber
    }

    exponentianingNumbers() {
        return Math.pow(this.firstNumber,this.secondNumber)
    }

    compute() {
        switch (this.operation) {
          case '+':
            return this.sumNumbers()
          case '-':
            return this.minusNumbers()
          case '*':
            return this.multiplyNumbers()
          case '/':
            return this.divideNumbers()
          case '^':
            return this.exponentianingNumbers()            
        }
      }
}

function testCalc(firstNumber: number, secondNumber: number, operation: string, expectedResult: number) {
    const calc = new Calculator(firstNumber,secondNumber,operation)
    if (calc.compute() === expectedResult) {
        console.log("Test passed");
    } else {
        console.log("Test failed");
    }
}

testCalc(4, 4, "-", 0)
testCalc(1, 4, "+", 5)
testCalc(3, 6, "*", 18)
testCalc(16, 4, "/", 4)
testCalc(2, 3, "^", 8)

testCalc(1, 4, "-", 7)
testCalc(3, 8, "+", 3)
testCalc(3, 3, "*", 7)
testCalc(13, 5, "/", 6)
testCalc(3, 4, "^", 8)