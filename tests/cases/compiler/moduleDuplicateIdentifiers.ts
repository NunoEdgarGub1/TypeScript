// @module: commonjs
export var Foo = 2;
export var Foo = 42; // Should error

export interface Bar {
	_brand1: any;
}

export interface Bar {
	_brand2: any;
}

export namespace FooBar {
	export var member1 = 2;
}

export namespace FooBar {
	export var member2 = 42;
}

export class Kettle {
	member1 = 2;
}

export class Kettle {
	member2 = 42;
}

export var Pot = 2;
Pot = 42; // Shouldn't error