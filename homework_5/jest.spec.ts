import {Calculator} from "./Calculator"

describe("Calculator, jest positive tests", () => {
    test("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "+")
        let res: any = calc.compute();
        expect(res).toBe(6) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(7, 3, "-")
        let res: any = calc.compute();
        expect(res).toBe(4) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(8, 1, "*")
        let res: any = calc.compute();
        expect(res).toBe(8) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(6, 3, "/")
        let res: any = calc.compute();
        expect(res).toBe(2) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "^")
        let res: any = calc.compute();
        expect(res).toBe(27) ;
    });
});

describe("Calculator, jest negative tests", () => {
    test("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "+")
        let res: any = calc.compute();
        expect(res).not.toBe(4) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(7, 3, "-")
        let res: any = calc.compute();
        expect(res).not.toBe(1) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(8, 1, "*")
        let res: any = calc.compute();
        expect(res).not.toBe(5) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(6, 3, "/")
        let res: any = calc.compute();
        expect(res).not.toBe(6) ;
    });

    test("Check sum of two parameters", () => {
        let calc = new Calculator(3, 3, "^")
        let res: any = calc.compute();
        expect(res).not.toBe(76) ;
    });
});
