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


// let user = {
//     myname : 'Aditya',
//     age : 25 
// }
// let user1 = {
//     myname : 'Adit',
//     age : 26 
// }

// function sayname(city,gender){
//     console.log(this,city,gender);
    
// }
// sayname.call(user,'patna', 'male');
// sayname.call(user1, 'gaya' , 'female');
// sayname.apply(user, ['ranchi','male']);
// sayname.apply(user1, ['Mumbai', 'Female']);
// let x = sayname.bind(user,"mumbai","male")
// console.log(x());


// (function sayname(){
//     console.log('Aditya');
    
// })()

// let user = {
//     Uname : 'Aditya',
//     age : 25
// }
// let user1 = {
//     Uname : 'Adit',
//     age : 26
// }
// let user3 = {
//     Uname : 'Adiii',
//     age : 26
// }
// function Printuser(city){
//     console.log(this.Uname , this.age ,city);
    
// }

// Printuser.call(user, "Gaya");
// Printuser.apply(user1, ["Patna"]);

// let akd = Printuser.bind(user3)
// console.log(akd("Ranchi") );


// function Studentdetails(name,age,city){

//     let obj = {};

//     obj.name = name;
//     obj.age = age;
//     obj.city = city;

//     return obj ;
// }

// let s1 = Studentdetails( 'Aditya', 25 , ' Gaya');
// console.log(s1);

// let s2 = Studentdetails( 'Adit', 26 , ' Gaya');
// console.log(s2);

// let s3 = Studentdetails( 'Adiii', 25 , ' Gaya');
// console.log(s3);

// let s4 = Studentdetails( 'Adil', 25 , ' Gaya');
// console.log(s4);

// let s5 = Studentdetails( 'Adi', 25 , ' Gaya');
// console.log(s5);



// function animals(noOflegs, Vegetrain){

//     let obj = {};

//     obj.noOflegs = noOflegs;
//     obj.Vegetrain = Vegetrain;

//     let eat = function (){
//         console.log('eating...');
        
//     }

//     let great = function(){
//         console.log(` i have ${noOflegs} legs`);
        
//     }
//     return obj ;
// }

// let aditya = obj 


// let user1 ={
//     names : 'Aditya',
//     age : 25
// }
// let user2 ={
//     names : 'Adit',
//     age : 27
// }

// function Printuser(){

//     let obj = {};

//     obj.names = names ;
//     obj.age = age ;

//     return obj ;
// }
// Printuser.call('user1') 


// let user = {
//         myname : 'Aditya',
//         age : 25 
//     }
//     let user1 = {
//         myname : 'Adit',
//         age : 26 
//     }
    
//     function sayname(city,gender){
//         console.log(this);
        
//     };

//     sayname.call(user)

// let user = {
//     name1 : 'Aditya',
//     age : 25
// }
// let user1 = {
//     name1 : 'Aditya',
//     age : 25
// }

// function PrintDetails(city){
//     console.log(this, city );
    
// }
// PrintDetails.call(user, 'Gaya')


// function Studentdetails(name,age,standard){

//     let obj = {};

//     obj.name = name;
//     obj.age = age;
//     obj.standard = standard ;

//     return obj ;
// };

// let s1 = Studentdetails('Aditya', 25, 10);
// console.log(s1);
// let s2 = Studentdetails('Aditya', 25, 10);
// console.log(s2);
// let s3 = Studentdetails('Aditya', 25, 10);
// console.log(s3);
// let s4 = Studentdetails('Aditya', 25, 10);
// console.log(s4);
// let s5 = Studentdetails('Aditya', 25, 10);
// console.log(s5);
// let s6 = Studentdetails('Aditya', 25, 10);
// console.log(s6);


// OOPS - 2


// function Book(name,author,pages){

//     let obj = {};

//     obj.name = name ;
//     obj.author = author ;
//     obj.pages = pages;

//   obj.Printauthor = function (){
//     console.log(`Author name is ${author}`);
    
//   }

//   return obj ;
// }

// let b1 = Book('Richdad', 'RKC', 500);
// console.log(b1.Printauthor());

// function Book(name,page,price){

   

//     this.name = name;
//     this.page = page;
//     this.price = price;

//     this.Printprice = function(){
//         console.log(`price is ${price}`);
        
//     }
  
// }

// let b1 =new Book('abc', 266 , '500rs')
// console.log(b1.Printprice());



// let akd ={
//     names : 'Aditya',
//     age : 25
// }
// let akd1 ={
//     names : 'Aditya',
//     age : 27
// }

// function Prinakd(){
//     console.log(this);
    
// }
// Prinakd.call(akd)


// function Detail(names,age,salary){

//     let obj = {};

//     obj.names = names;
//     obj.age = age ;
//     obj.salary = salary ;

//     obj.Printsalary = function(){
//         console.log(`her person salary is ${salary}`);
        
//     }
//     return obj 
// };

// let d1 = Detail('Aditya', 25, 25000);
// console.log(d1.Printsalary());


// function Detail(names,age,salary){

    

//     this.names = names;
//     this.age = age ;
//     this.salary = salary ;

//     this.Printsalary = function(){
//         console.log(`her person salary is ${salary}`);
        
//     }
    
// };

// let d1 = new Detail('Adit', 25, 25000);
// console.log(d1);

// class Book{

//     constructor(names,age,salary){
            
//     this.names = names;
//     this.age = age ;
//     this.salary = salary ;

//     this.Printsalary = function(){
//         console.log(`her person salary is ${salary}`);
        
//     }
    
// };
//     }
// let b1 = new Book('You can win', 15, 25000);
// console.log(b1); 

// Practice Call bind apply 


// let user = {
//     name1 : 'Aditya',
//     age : 25
// }
// let user1 = {
//     name1 : 'Adit',
//     age : 25
// }
// function Printuser(salary){
//     console.log(this,salary);
    
// }
// Printuser.call(user,"harsh");
// Printuser.apply(user,["harsh"])
// let x = Printuser.bind(user,"harsh")
// console.log(x());

// Factory funcation

// function Details(name,age,standard){

//     let obj = {};

//     obj.name = name;
//     obj.age = age;
//     obj.standard = standard;

//     obj.Printname = function(){
//         console.log(`my name is ${name}`);
        
//     }
//     return obj ;
// };

// let D1 = Details('Aditya', 25 , 'BCA' );
// console.log(D1);


// Constration  funcation

// function StuDetails(name,age,standard){

//     this.name = name;
//     this.age = age;
//     this.standard= standard;

//     this.Printage = function(){
//         console.log(`my age is ${age}`);
        
//     }
// };

// let s1 = new StuDetails('Aditya',25, '5th')
// console.log(s1.Printage());

// lass funcation its a es6 funcation 
// class Book{
//     constructor(author,name,pages){

//         this.author = author;
//         this.name = name;
//         this.pages = pages;

//         this.PrintPage = function(){
//             console.log(`this book page ${pages}`);
            
//         };
//     };
// };

// let b1 =new Book('Rich dad', 'shiv', 200)
// console.log(b1.PrintPage());


// class User{
//     constructor (name,age,salary){

//         this.name = name ;
//         this.age = age;
//         this.salary = salary;

//         this.printsalary= function(){
//             console.log(`my salary is ${salary}`);
            
//         };
//     };
// }; 

// let u1 = new User('Aditya',25, '5 Lpa');
// console.log(u1.printsalary());


// class Animal{
//     constructor(noOfLege,Vegetrain){

//         this.noOfLege = noOfLege;
//         this.Vegetrain = Vegetrain;
    
//         eat(){
//             console.log(`eating....`);
            
//         }
//        great(){
//             console.log(`i have ${noOfLege} legs`);
            
//         };
//     };
// };

// let a = new Animal(5, 'veg');
// console.log(a);
// // console.log(a.eat());


// class Animal{
//     constructor (name,legs){

//      this.name = name;
//      this.legs = legs;

//     }

//     eat(){
//         console.log(`eating...`);
        
//     }
//     great(){
//         console.log(`i have ${this.legs} legs`);
        
//     }
// };

// let h1 = new Animal('cook', 4)
// console.log(h1.great());


// function user (name,age,city){

//     let obj = {};

//     obj.name = name;
//     obj.age = age;
//     obj.city = city;

//     obj.Printcity = function(){
//         console.log(`my city is ${city}`);
        
//     };

//     return obj ;

// };

// let u1 = user('Aditya', 25, 'gaya')
// console.log(u1);


// function person(name,age,city,gender){

//     let obj1 = user(name,age,city)

//     // obj1.name = name;
//     // obj1.age = age;
//     // obj1.city = city;
//     obj1.gender = gender;

//     obj1.Printcity = function(){
//         console.log(`my city is ${city}`);

        
//     }

//     return obj1
// }

// let p1 = person('Adi',25,'patna','male')
// console.log(p1);


// Copy of factory funcation

// function user(name,age,job){
//     let obj = {};

//     obj.name = name;
//     obj.age = age ;
//     obj.job = job ;

//     obj.Printjob = function (){
//         console.log(`my job is ${job}`);
        
//     };
//     return obj
// };

// function person ( name,age,job, gender){
//     let obj = user(name,age,job);
//     obj.gender = gender ;
    
//     obj.Printgender = function(){
//         console.log(`he is a ${gender}`);
        
//     };

//     return obj
// };



// let u1 = user('Aditya', 25, 'Developer')
// console.log(u1.Printjob());

// let p1= person('adii',25,'Fdeveloper','male')
// console.log(p1);

// Copy of construcation funcation..


// function User(name,age,city){

//     this.name = name;
//     this.age = age;
//     this.city = city;

//     this.Printcity = function(){
//         console.log(`my city is ${city}`);
        
//     };
// };

// function Person(name,age,city,gender){

//     User.call(this,name,age,city)
//     this.gender = gender;

//     this.Printgender = function(){
//         console.log(`this is ${gender}`);
        
//     };
// };

// let u1 = new User('Aditya',25,'gaya')
// console.log(u1);

// let p1 = new Person('Adil',25,'Delhi','male')
// console.log(p1);


// function add(){
//     console.log(this);
    
// }
// add()

// Practice call apply bind 

// let user1 ={
//     name: 'Aditya',
//     age: 25
// }
// let user2 ={
//     name: 'Aditya',
//     age: 25
// }

// function print(name,age){
//     console.log(this,name,age);
    
// }
// print.call(user1,'Aditya',25)
// print.apply(user1,['Aditya',25])
// let x = print.bind(user2,)
// console.log(x('Aditya',25),);


// factory funcation ...

// function Detail(name,age,standaed){

//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.standaed = standaed;

//     obj.Printname = function(){
//         console.log(`my name is ${name}`);
        
//     }
//     return obj 
// }

// function details2(name,age,city,standaed){

//     let obj = Detail(name,age,standaed)

//     obj.city = city ;

//     obj.printcity = function (){
//         console.log(`my city is ${city}`);
        
//     };
//     return obj
// };

// let d1 = Detail('Aditya',35, '10th')
// console.log(d1);


// let x = details2('Aditya',25,'gaya','10th');
// console.log(x);


// let d2 = Detail('Aditya',35, '10th')
// console.log(d2);
// let d3 = Detail('Aditya',35, '10th')
// console.log(d3);
// let d4 = Detail('Aditya',35, '10th')
// console.log(d4);


// Construction Funcation...


// function Book(name,author,pages){

//     this.name= name;
//     this.author= author;
//     this.pages = pages

//     this.Countpages = function (){
//         console.log(`pages is ${pages}`);
        
//     };
// };

// function Books(name,author,pages,catogray){

//   Book.call(this,name,author,pages)
//    this.catogray = catogray;

//    this.PrintCatogray = function(){
//     console.log(`he is a ${catogray}`);
    
//    };


// };
// let B1 = new Book('you can win ', 'Shiv khera', 300)
// console.log(B1);

// let b2 = new Books('Rich dad poor dad', 'RKC', 300, 'Self help')
// console.log(b2);







