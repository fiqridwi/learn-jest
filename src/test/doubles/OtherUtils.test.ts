import { OtherStringUtils, calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
	describe.only("OtherStringUtils test with spies", () => {
		let sut: OtherStringUtils;
		beforeEach(() => {
			sut = new OtherStringUtils();
		});
		test("Use a spy to track calls", () => {
			const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
			sut.toUpperCase("asa");
			expect(toUpperCaseSpy).toBeCalledWith("asa");
		});
		test("Use a spy to track calls to other module", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			sut.logString("abc");
			expect(consoleLogSpy).toBeCalledWith("abc");
		});
	});

	describe("Tracking callbacks with jest", () => {
		let callBackMock = jest.fn();

		afterEach(() => {
			callBackMock.mockClear();
			// OR
			// jest.clearAllMocks();
		});

		it("Jestmock - calls callback with invalid arg", () => {
			const actual = toUpperCaseWithCb("", callBackMock);
			expect(actual).toBeUndefined();
			expect(callBackMock).toBeCalledWith("Invalid argument");
			expect(callBackMock).toBeCalledTimes(1);
		});
		it("Jestmock - calls callback with valid arg", () => {
			const actual = toUpperCaseWithCb("test", callBackMock);
			expect(actual).toBe("TEST");
			expect(callBackMock).toBeCalledWith("call function with test");
			expect(callBackMock).toBeCalledTimes(1);
		});
	});

	describe("Tracking callbacks", () => {
		let cbArgs = [];
		let timesCalled = 0;
		function callBackMock(arg: string) {
			cbArgs.push(arg);
			timesCalled++;
		}
		afterEach(() => {
			cbArgs = [];
			timesCalled = 0;
		});
		it("ToUpperCase - calls callback with invalid arg", () => {
			const actual = toUpperCaseWithCb("", callBackMock);
			expect(actual).toBeUndefined();
			expect(cbArgs).toContain("Invalid argument");
			expect(timesCalled).toBe(1);
		});
		it("ToUpperCase - calls callback with valid arg", () => {
			const actual = toUpperCaseWithCb("test", callBackMock);
			expect(actual).toBe("TEST");
			expect(cbArgs).toContain("call function with test");
			expect(timesCalled).toBe(1);
		});
	});

	it("Calculates complexity", () => {
		const someInfo = {
			length: 5,
			extraInfo: {
				field1: "someInfo",
				field2: "someOtherInfo",
			},
		};

		const actual = calculateComplexity(someInfo as any);
		expect(actual).toBe(10);
	});
});
