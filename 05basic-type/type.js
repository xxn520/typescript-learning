// 布尔值
var isDone = true;
// 数字（支持二进制、八进制、十进制、十六进制）
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串（支持模板字符串）
var name1 = "Gene"; // 这里不能使用 name，原因待查 https://github.com/Microsoft/TypeScript/issues/9850
var age = 37;
var sentence = "Hello, my name is " + name1 + ".\n\nI'll be " + (age + 1) + " years old next month.";
// 数组（两种形式）
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 元组（已知元素数量和类型的数组，各元素的类型不必相同）
// Declare a tuple type
var x;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// 编译后的结构如下：{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
// 另外可以指定下标，默认0开始
// 任意类型
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var notSure1 = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var list = [1, true, "free"];
list[1] = 100;
// 空值
function warnUser() {
    alert("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// 在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined
var u = undefined;
var n = null;
