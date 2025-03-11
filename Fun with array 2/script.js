console.log('Roadmap to 1 cr 2035');

// let arr  = [ 1,2,3,4,5];
// console.log(arr.reverse());


// function sayname(){
//     console.log('Aditya');
    
// }

// sayname()

// let sayname = function(){
//     console.log('Aditya');
    
// }
// sayname()

// let sayname = () =>{
//     console.log('Aditya');
    
// }
// sayname()

// let sayname = () => " Aditya"
// console.log(sayname());


// ForEach

// let sweets = [ 'khova' , 'ladoo' , 'Gulabjamun' , 'barfi'] ;

// sweets.forEach(function(ele){
//     console.log(ele);
    
// })

// sweets.forEach(function(ele){
//     console.log(ele);
    
// })

// Map

// let sweets = [ 'khova' , 'ladoo' , 'Gulabjamun' , 'barfi'] ;


// let newsweet = sweets.map((ele) =>{
//     return ele.length>5
// })
// console.log(newsweet);


// let newsweet = sweets.map((ele) =>{
//     return ele ;
// })
// console.log(newsweet ,sweets);

// let arr = [1,2,3,4,5];

// let newarr = arr.map((ele) => ele*2)
// console.log(newarr);


// Filter

// let sweets = [ 'khovaaa' , 'ladooo' , 'Gulabjamun' , 'barfi'] ;

// let newsweet = sweets.filter( (ele) => {
//     return ele.length > 5
// })
// console.log(newsweet);


// let sweets = [ 'khovaaa' , 'ladooo' , 'Gulabjamun' , 'barfi'] ;

// let newsweet = sweets.filter( (ele) => {
//     return ele !== 'barfi'
// })
// console.log(newsweet);


// let arr = [1,2,3,4,5];

// let newarr = arr.filter( (ele) => {
//     return ele % 2 == 0
// })

// console.log(newarr);

// Reduce 

// let arr = [1,2,3,4,5];

// let newarr = arr.reduce( (acc , curr) =>{
//     return acc + curr 
// }, 0)
// console.log(newarr);


// let newarr = arr.reduce(( acc, curr) => {
//     return acc * curr
// },2)
// console.log(newarr);


// let arr = [1,2,3,4,5 ,2,3,4,5];
// let obj = {};

// for ( let i=0; i<=arr.length-1; i++){
//     if (obj [ arr [ i]] === undefined){
//         obj [ arr [ i]] = 1
//     }
//     else{
//         obj [ arr [ i]] += 1
//     }
// }
// console.log(obj);


// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const frequency = arr.reduce((acc, current) => {
//   acc[current] = (acc[current] || 0) + 1;
//   return acc;
// }, {});

// console.log(frequency);


// let arr = [ 1,1,2,2,3,3,4,4,5,5];

// let newarr = arr.reduce( (acc,curr) => {
//     acc [ curr] = ( acc [ curr]  || 0) +1;
//     return acc
// }, {})

// console.log(newarr);


// let arr = [ 1,1,2,2,3,3,4,4,5,5];
 
// let newdata = arr.reduce( (acc , curr) =>{
//     acc [curr] = ( acc [ curr] || 0) + 1
//     return acc 
// },{})

// console.log(newdata);


// let arr = [ 'a', 'b', 'c', 'd', 'e' ,'h', 'k' , 'g']

// let newarr = arr.sort()
// console.log(newarr);



// let arr = [1,3,4,5,2,8,6,9] ;
// let newarr = arr.sort()
// console.log(newarr);
