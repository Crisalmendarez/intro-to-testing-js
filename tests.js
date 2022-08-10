// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be defined a function', function () {
        expect(typeof sayHello()).toBe('string')
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe('string')
    });
    it('should return "Hello, Jane"', function () {
        expect(typeof sayHello("Jane")).toBe('string')
    });
    it('should return "Hello, Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex")
    });
    it('should return "Hello, Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World"', function(){
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe('isFive', function () {
    it('should be equal to five', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true when passed 5', function () {
        expect(typeof isFive("5")).toBe('boolean')
    });
});
describe('isEven', function () {
    it('should be true if even', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should be true when given -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should be false when given 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should be false when given "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should be true when given "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should be false when given Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should be false when given true', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should be false when given false', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should be false when given nothing', function () {
        expect(isEven()).toBe(false)
    });
});

describe('isVowel', function () {
    it('should be defined by a function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should be true if "a" is input', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should be true if "A" is input', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should be false if "y" is input', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should be false if 4 is input', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should be true if 4 is input', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should be false if input true', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should be false if input false', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should be false if input banana', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should be false if input nothing', function () {
        expect(isVowel()).toBe(false)
    });
});

describe('add', function () {
    it('should add two numbers as long as input is number', function () {
        expect(typeof add).toBe('function')
    });
    it('should return 5 for input 2 and 3', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 for input -3 and -9', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 for input "5" and 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 for input "-4" and "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN for input "banana" and "split"', function () {
        expect(add("banana", "split")).toBeNaN;
    });
    it('should return NaN for input 2 and "apples', function () {
        expect(add(2, "apples")).toBeNaN;
    });
    it('should return NaN for nothing', function () {
        expect(add()).toBeNaN;
    });
});
