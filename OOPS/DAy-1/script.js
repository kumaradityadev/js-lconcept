console.log("Roadmap to 1 cr");

// obj = {
//     Name1 : 'Aditya'
// };
// obj.age = 25;
// obj.salary = 25000;

// obj.greeat = function(k){
//    return("Aditya" , k);
// }
// console.log(obj.greeat("Kumar"));


// function say(a,b){
//    return a +b
    
// }
// console.log(say(3,6));

// console.log(window);

// // var a = 20 ;
// // console.log(window);

// let  a = 20 ;
// console.log(window);

// var alert = 50 ; 
// console.log(window);


// (function say(){
//     console.log('Aditya');
    
// })()
// (function say1(){
//     console.log('Rahul');
    
// })()
// (function say2(){
//     console.log("Mishra");
//     var a = 20 ;
    
// })()
// console.log(window);



// This Keyword...

// console.log(window);
// console.log(this);
// function say (){
//     console.log(this);
    
// }
// say()

// let obj = {
//     name1 : 'Aditya',
//     age : 25,
//    printname : function (){
//     console.log(this.city);
    
//    }
// }
// obj.city = 'Gaya'
// obj.printname() 

// let obj = {
//     name2 : 'Adit',
//     age : 25
// }
// let obj1 = {
//     name2 : 'Adiiii',
//     age : 27
// }
// function printname(name1,city){
//     console.log(this,name1, city);
    
// }
// printname('Aditya', 'gaya')
// printname.call(obj, 'rahul',"gaya")
// printname.call(obj1, 'rahula',"gayaf")

// printname.apply(obj , ['rahul' , 'gaya']);
// printname.apply(obj1 , ['rahul1' , 'gaya1']);


let user = {
    myname : 'Aditya',
    age : 25 
}
let user1 = {
    myname : 'Adit',
    age : 26 
}

function sayname(city,gender){
    console.log(this,city,gender);
    
}
sayname.call(user,'patna', 'male');
sayname.call(user1, 'gaya' , 'female');
sayname.apply(user, ['ranchi','male']);
sayname.apply(user1, ['Mumbai', 'Female']);
let x = sayname.bind(user,"mumbai","male")
console.log(x());
