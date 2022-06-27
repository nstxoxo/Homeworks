
import *as chai from "chai"
chai.should();
var expect = chai.expect;
import { Calculator } from "./Calculator"

describe("Calculator, mocha + chai positive tests", () => {
    it("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "+");
        let res: any = calc.compute();
        res.should.equal(6);
    });

    it("Check subtraction of two parameters", () => {
        let calc = new Calculator(10, 5, "-");
        let res: any = calc.compute();
        (res).should.equal(5);
    });

    it("Check multiplication of two parameters", () => {
        let calc = new Calculator(7, 2, "*");
        let res: any = calc.compute();
        (res).should.equal(14);
    });

    it("Check division of two parameters", () => {
        let calc = new Calculator(8, 2, "/");
        let res: any = calc.compute();
        (res).should.equal(4);
    });

    it("Check exponentiation of two parameters", () => {
        let calc = new Calculator(8, 2, "^");
        let res: any = calc.compute();
        (res).should.equal(64);
    });

});

describe("Calculator, mocha + chai negative tests", () => {
    it("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "+");
        let res: any = calc.compute();
        expect(res).not.equal(7); 
    });

    it("Check subtraction of two parameters", () => {
        let calc = new Calculator(10, 5, "-");
        let res: any = calc.compute();
        expect(res).not.equal(7); 
    });

    it("Check multiplication of two parameters", () => {
        let calc = new Calculator(7, 2, "*");
        let res: any = calc.compute();
        expect(res).not.equal(7); 
    });

    it("Check division of two parameters", () => {
        let calc = new Calculator(8, 2, "/");
        let res: any = calc.compute();
        expect(res).not.equal(6); 
    });

    it("Check exponentiation of two parameters", () => {
        let calc = new Calculator(8, 2, "^");
        let res: any = calc.compute();
        expect(res).not.equal(12); 
    });

});
