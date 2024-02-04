import { sum } from "../../utils/example/sum";

test("Sum function should return sum of two numbers",() => {
    let result = sum(3,4);
    
    //Assertion
    expect(result).toBe(7)
})