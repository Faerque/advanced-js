const number = [3,5,6,3,2,4,8];

// Finding all numbers using Map js =>

 const output = [];

 for(let i =0; i < number.length; i++){
     const element = number[i];
     const result = element*element;
     output.push(result);
 }


 function square(element){
     return element * element;
 }

 const square = element => element * element;
 const square = x => x * x;

 const result = number.map( x => x * x ); 
// console.log(result);

 number.map(function(element, index, array){
         console.log(element, index, array);
 })

const result = number.map(function(element, index, array){
         return element * element;
 })

// console.log(result);

//console.log(output);

// Finding specific numbers using Filter js =>

const bigger = number.filter(x => x > 5);
//console.log(bigger);

const smaller = number.filter(x => x < 5);
//console.log(smaller);

const isThere = number.find(x => x > 5);
//console.log(isThere);