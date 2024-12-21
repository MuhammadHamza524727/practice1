
// Closure JavaScript ka ek advanced aur important concept hai. Iska kaam hai ek function ko apne parent scope ke variables 
// ko yaad rakhne dena, chahe parent function execute ho chuka ho.

// function createCounter() {
//     let count = 0; // This is a private variable
//     return function () {
//       count++; // The inner function modifies the outer function's variable
//       return count;
//     };
//   }

//   const counter = createCounter();

//   console.log(counter()); // Output: 1
//   console.log(counter()); // Output: 2
//   console.log(counter()); // Output: 3


// function outerFunction() {
//     let a = "me auter function ka variable hon"

//     function innerFunction() {
//         console.log(a);



//     }
//     return innerFunction()
// }
// const closerFunction = outerFunction()

// closerFunction()






// Destructuring JavaScript ka ek powerful feature hai jo ES6 me introduce kiya gaya tha. Iska kaam hai arrays ya objects ke andar ke values ko easily alag-alag variables me nikalna.
// Yeh complex data structures ke saath kaam karne ko bohot easy aur readable banata hai.

//   function getUserInfo() {
//     return { namee: "John Doe", age: 30, city: "New York" };
//   }

//   // Destructure the returned object
//   const { namee, age, city } = getUserInfo();

//   console.log(`Name: ${namee}`); // Output: Name: John Doe
//   console.log(`Age: ${age}`);   // Output: Age: 30
//   console.log(`City: ${city}`); // Output: City: New York


// function hello (){
//     return {namee:"hamza", id:"22",city:"karachi"};
// }
// const { namee,id,city } = hello();
// console.log(`Name: ${namee}`);


// function hamza() {
//     return { namee: "hamza", id: "23", city: "karachi" }
// }
// const {namee,id,city} = hamza()

// console.log(`name: ${namee}` ,  `id: ${id}`, `city: ${city}`);

// const person = {
//     nam: "hamza",
//     id: 2,
//     age: "four"
// }
// const a = person.nam
// const b = person.id

// console.log(a);
// console.log(b);

// const { nam, id, age } = person;

// console.log(nam);

// const arr = ["hamza", 24, "class"];

// const a = [first, second , third] = arr

// console.log(a);






// Default Parameters kya hain?
// JavaScript ES6 ka feature Default Parameters functions ke liye default values define karne ki facility deta hai. Agar function call karte waqt koi argument pass nahi kiya jata, to Default Parameters ki value automatically use hoti hai.

// Asaan Zubaan Mein Samajhayein
// Pehle agar function ke arguments ki value na mile, to hume undefined milta tha ya manually default value set karni padti thi.
// ES6 ke Default Parameters ki madad se, hum arguments ke liye default value already define kar sakte hain.


// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet("Ali"); // Output: Hello, Ali!
//   greet();      // Output: Hello, Guest!



  // practice


//   function greet(name ="hamza"){
//     console.log(`hello ${name}`);
    


//   }

// greet();
// greet("ali")


// function greet( "hamza"){
//     console.log(`hello ${"hamza"}`);
    
// }
// greet()
// greet("ali")


//   function calculate(hieght= 10, width = 4){
//     return (hieght*width);

     

//   }

//   console.log(calculate(2,5));
//   console.log(calculate(3,6));
//   console.log(calculate());


// function addNumbers(...numbers) {
//     console.log(numbers); // Saare arguments array me collect honge
//   }
  
//   addNumbers(1, 2, 3, 4);
//   // Output: [1, 2, 3, 4]
  
// practice
//   function myFunc(...numbers){
//     console.log(numbers);
    

//   }
//   myFunc(1,2,3,4);

// function add(...number){
//     console.log(number);
    

// }
// add(1,2,3,4);

pochna hai

  function sum(...nums) {
    let total = 0;
    for (let num of nums) {
      total += num; // Array ke har number ko add kar rahe hain
    }
    return total;
  }
  
  console.log(sum(5, 10, 15));  // Output: 30
  console.log(sum(1, 2, 3, 4)); // Output: 10
  console.log(sum());           // Output: 0
  


function add (...sum){

}
  



