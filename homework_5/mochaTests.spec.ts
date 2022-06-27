import  assert  from "assert";
import {Calculator} from "./Calculator"

describe("Calculator, mocha positive tests", () => {
    it("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "+")
        let res: any = calc.compute();
        assert.equal(res, 6);
    });

    it("Check subtraction of two parameters", () => {
        let calc = new Calculator(8, 5, "-")
        let res: any = calc.compute();
        assert.equal(res, 3);
    });

    it("Check multiplication of two parameters", () => {
        let calc = new Calculator(11, 2, "*")
        let res: any = calc.compute();
        assert.equal(res, 22);
    });

    it("Check division of two parameters", () => {
        let calc = new Calculator(13, 2, "/")
        let res: any = calc.compute();
        assert.equal(res, 6.5);
    });  

    it("Check exponentiation of two parameters", () => {
        let calc = new Calculator(6, 2, "^")
        let res: any = calc.compute();
        assert.equal(res, 36);
    }); 

  });


  describe("Calculator, mocha negative tests", () => {
    it("Check sum of two parameters", () => {
        let calc = new Calculator(3, 5, "+")
        let res: any = calc.compute();
        assert.notEqual(res, 6);
    });

    it("Check subtraction of two parameters", () => {
        let calc = new Calculator(8, 7, "-")
        let res: any = calc.compute();
        assert.notEqual(res, 3);
    });

    it("Check multiplication of two parameters", () => {
        let calc = new Calculator(6, 2, "*")
        let res: any = calc.compute();
        assert.notEqual(res, 22);
    });

    it("Check division of two parameters", () => {
        let calc = new Calculator(14, 2, "/")
        let res: any = calc.compute();
        assert.notEqual(res, 6.5);
    });  

    it("Check exponentiation of two parameters", () => {
        let calc = new Calculator(6, 3, "^")
        let res: any = calc.compute();
        assert.notEqual(res, 36);
    }); 

  });


