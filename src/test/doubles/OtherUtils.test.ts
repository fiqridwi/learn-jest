import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
	it("ToUpperCase - calls callback with invalid arg", () => {
		const actual = toUpperCaseWithCb("", () => {});
		expect(actual).toBeUndefined();
	});

	it("ToUpperCase - calls callback with valid arg", () => {
		const actual = toUpperCaseWithCb("test", () => {});
		expect(actual).toBe("TEST");
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
