const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Gaana De'},
    {id: 47, name: 'Deep Jol'},
    {id: 41, name: 'Purnima'} 
];

const name = student.map( s => s.name);
const id = student.map(s => s.id);
//console.log(name,id);

const bigger = student.filter(s => s.id > 40);
// console.log(bigger);

const biggerOne = student.find(s => s.id > 40);
// console.log(biggerOne);