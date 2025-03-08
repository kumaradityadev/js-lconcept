console.log('Roadmap to 1 cr');

// function sayname(){
//     console.log('Aditya');
    
// }
// sayname();


// let myname = function(){
//     console.log('Adit');
    
// }
// myname()

// let cname = (a,b) =>{
//     console.log('Rajeev',a,b);
    
// }
// cname(10,20)

// let abc = () => " Adiii"

// console.log(abc());


// Type of function 

// 1. function Deceleration
// function sayname(){
//     console.log('Aditya');
    
// }
// sayname()


// 2. function Expression

// let myname = function (){
//     console.log('Adii');
    
// }

// myname()


// // 3. Arrow Funcation
// let cname = () => {
//     console.log('Rajeev');
    
// }
// cname()

// // 4. Arrow funcation single value asain .
// let sname = () => "Mayank";
// console.log(sname());



// function say(){
//     console.log('Hii');
    
// }
// say();

// let say = () => "Hii"
// console.log(say());

// let say = () => {
//     console.log('Hii');
    
// }
// say()

// let say = (a) => a
// console.log(say('Aditya'));

// let say = (a) => a
// console.log(say('Aditya'));


// var a = 10;
// var a = 20;
// var a = 30;
// console.log(a);

// let a = 10 ;
// a = 20 ;
// console.log(a);

// let a = 30 ;

// const a = 20 ;
// // a = 30 ;
// console.log(a);
// // const a = 40;

// const arr = [1,2,3,4,5];
// arr.push(6)
// console.log(arr);

// function say(name,age){
//     // console.log(name,age);
//     let obj = {
//         name,
//         age
//     }
//     console.log(obj);
    
// }
// say('Aditya',27)

// function say(name,age){
//     // console.log(name,age);
//     let obj = {
//         name,
//         age
//     }
//     console.log(obj);
    
// }
// say('Aditya',25);


// function say(name, age = 10){
//     console.log(name, age);
    
// }
// console.log('Aditya',);

// function say (name,age = 20){
//     console.log(name,age);
    
// }
// say('Adi',25)

// Rest Operator

// function sum(a,...h){
//     console.log(a,h);
    
// }
// sum(2,3,4,5)

// function say(a,b,...e){
//     console.log(a,b,e);
    
// }
// say (1,2,3,4);



// let a = [1,2,3,4,5];
// let b = [4,5,6];
// let c = [...a,...b]
// console.log(c);


// let a = [1,2,3];
// let b = [...a, 4,5]
// console.log(b);


// let obj1 = {name:'pawan'}
// let obj2 = {age : 25}
// let obj3 = {...obj1,...obj2}
// console.log(obj3);

// let arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// let  [a,b,c,d,e] = arr ;
// console.log(a,b,c,d,e);


// let arr = [1,2,3,4,5,6];

// let [a,b,c,d,e,f] = arr;

// console.log();


// let arr = [
//     {name : 'Aditya' , age : 25},
//     {name : 'Adit' , age : 25},
//     {name : 'Adiii' , age : 26},
// ]
// let [a,b,c] = arr
// console.log(a.name,a.age);


let obj = {
    name : 'Aditya',
    age : 25,
    salary : 25000
}
let {name ,  salary , age } = obj ;

console.log(name, age, salary);
