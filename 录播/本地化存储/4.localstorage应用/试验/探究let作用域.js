// 探究let作用域
/**
 * let只作用在一个花括号内
 * var可变量提升
 */
{
    let a = 1;
    // {console.log(a);}    // 1
}
{
    var A = 1;
    // {console.log(A);}    // 1
}
function test() {
    let b = 2;
    var B = 2;
}
for(let c = 1; c < 3; c ++) {
    let d = 1;
}
for(var C = 1; C < 3; C ++) {
    var D = 1;
}
test();
// console.log(a);  // is not defined
// console.log(A);  // 1
// console.log(b);  // is not defined
// console.log(B);  // is not defined
// console.log(c);  // is not defined
// console.log(C);  // 3
// console.log(d);  // is not defined
// console.log(D);  // 1

