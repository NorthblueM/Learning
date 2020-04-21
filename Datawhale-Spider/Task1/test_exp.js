//JavaScript程序，演示JavaScript的基本内容。

var a = 1; //变量都用var关键字定义
var myFunction = function(arg1){ //注意这个赋值语句，在JavaScript中，变量和函数的本质是一样的
    arg1 += 1;
    return arg1;
}

var myAnotherFunction = function(f, a){ //函数也可作为另一个函数的参数被传入
    return f(a);
}
console.log(myAnotherFunction(myFunction, 2))

//条件语句
if (a > 0){
    a -= 1;
}else if (a == 0){
    a -= 2;
}else{
    a += 2;
}

//数组
arr = [1, 2, 3];
console.log(arr[1]);

//对象
myAnimal = {
    name: "Bob",
    species: "Tiger",
    gender: "Male",
    isAlive: true,
    isMammal: true,
}
console.log(myAnimal.gender); //访问对象的属性

//匿名函数
myFunctionOp = function(f, a){
    return f(a);
}

res = myFunctionOp( //直接再参数处写上一个函数
function(a){
    return a * 2;
},
4)
//可以联想lambda表达式来理解
console.log(res);//结果为8