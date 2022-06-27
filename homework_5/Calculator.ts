// ### NORMAL level
// #### Task 1 💻
// - Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, 
//     умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры и операция
// - Написать по 10 положительных и отрицательных тестов для каждого варианта:
// 	- Mocha
// 	- Mocha + chai
// 	- Jest
// *Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны*


export class Calculator {
    public firstNumber: number
    public secondNumber: number
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

