// 布尔值
let isDone: boolean = true;

// 数字（支持二进制、八进制、十进制、十六进制）
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串（支持模板字符串）
let name1: string = `Gene`; // 这里不能使用 name，原因待查 https://github.com/Microsoft/TypeScript/issues/9850
let age: number = 37;
let sentence: string = `Hello, my name is ${ name1 }.

I'll be ${ age + 1 } years old next month.`;

// 数组（两种形式）
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组（已知元素数量和类型的数组，各元素的类型不必相同）
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// 当访问一个越界的元素，会使用联合类型替代：

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型

// 枚举
enum Color {Red, Green, Blue};
// 编译后的结构如下：{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
// 另外可以指定下标，默认0开始

// 任意类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let notSure1: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list: any[] = [1, true, "free"];

list[1] = 100;

// 空值
function warnUser(): void {
    alert("This is my warning message");
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// 在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined
let u: undefined = undefined;
let n: null = null;

// never 类型
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点
let x1: never;
let y1: number;

// 运行错误，数字类型不能转为 never 类型
// x1 = 123;

// 运行正确，never 类型可以赋值给 never类型
x1 = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
y1 = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}

// 类型断言（类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 
// TypeScript会假设你，程序员，已经进行了必须的检查。）

// 尖括号语法
let someValue1: any = "this is a string";

let strLength1: number = (<string>someValue1).length;

// 另一个为as语法：
let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;