/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:14 AM -- September 18th, 2019.
 *	Project: @jsdsl/bimap
 */

import { BiMap } from "../bi-map";

describe("Initialization", () => {
	
	test("Basic initialization.", () => {
		
		let bimap: BiMap<any, any> = new BiMap<any, any>();
		
		bimap;
		
	});
	
});

describe("Per-method Tests", () => {
	
	let bimap: BiMap<string, number>;
	
	beforeEach(() => {
		
		bimap = new BiMap<string, number>();
		
		bimap.set("one", 1);
		bimap.set("two", 2);
		bimap.set("three", 3);
		
	});
	
	describe("#get", () => {
		
		test("Regular key --> value retrieval returns expected value.", () => {
			
			expect(bimap.get("one")).toBe(1);
			expect(bimap.get("two")).toBe(2);
			expect(bimap.get("three")).toBe(3);
			
		});
		
		test("Attempt to get non-existent value returns undefined.", () => {
		
			expect(bimap.get("zero")).toBeUndefined();
			expect(bimap.get("four")).toBeUndefined();
		
		});
		
	});
	
	describe("#set", () => {
	
		test("Regular set does not error/fail.", () => {
			
			bimap.set("four", 4);
			
		});
		
		test("Set-get relationship is properly reflexive.", () => {
			
			bimap.set("five", 5);
			expect(bimap.getFromKey("five")).toBe(5);
			expect(bimap.getFromValue(5)).toBe("five");
			
		});
		
		test("Set operation successfully overwrites previously held keys.", () => {
			
			bimap.set("two", 10);
			expect(bimap.getFromKey("two")).toBe(10);
			expect(bimap.getFromValue(10)).toBe("two");
			expect(bimap.getFromValue(2)).toBeUndefined();
			
		});
	
	});
	
	describe("#getFromKey", () => {
		
		test("Regular key --> value retrieval returns expected value.", () => {
			
			expect(bimap.getFromKey("one")).toBe(1);
			expect(bimap.getFromKey("two")).toBe(2);
			expect(bimap.getFromKey("three")).toBe(3);
			
		});
		
		test("Attempt to get non-existent value returns undefined.", () => {
			
			expect(bimap.getFromKey("zero")).toBeUndefined();
			expect(bimap.getFromKey("four")).toBeUndefined();
			
		});
	
	});

	describe("#removeByKey", () => {
		
		test("Regular key --> returns deleted value.", () => {		
			bimap = new BiMap<string, number>();
			bimap.set("one", 1);

			expect(bimap.hasKey("one")).toBe(true);
			expect(bimap.hasKey("two")).toBe(false);
			expect(bimap.removeByKey("one")).toBe(1);
			expect(bimap.hasKey("one")).toBe(false);
			expect(bimap.getFromKey("one")).toBeUndefined();
		});
	
	});

	describe("#removeByValue", () => {
		
		test("Regular key --> returns deleted value.", () => {		
			bimap = new BiMap<string, number>();
			bimap.set("one", 1);

			expect(bimap.hasValue(1)).toBe(true);
			expect(bimap.hasValue(2)).toBe(false);
			expect(bimap.removeByValue(1)).toBe("one");
			expect(bimap.hasValue(1)).toBe(false);
			expect(bimap.getFromValue(1)).toBeUndefined();
		});
	
	});

	describe("#clear", () => {
		
		test("nukes all assoc", () => {		
			bimap = new BiMap<string, number>();
			bimap.set("one", 1);
			bimap.set("two", 2);

			expect(bimap.hasKey("one")).toBe(true);
			expect(bimap.hasKey("two")).toBe(true);
			expect(bimap.hasValue(1)).toBe(true);
			expect(bimap.hasValue(2)).toBe(true);

			bimap.clear()

			expect(bimap.hasKey("one")).toBe(false);
			expect(bimap.hasKey("two")).toBe(false);
			expect(bimap.hasValue(1)).toBe(false);
			expect(bimap.hasValue(2)).toBe(false);
		});
	
	});
	
});