const numbers = [11,13,15,17,19,21,23,25,27];
const myObject = {
    name: 'Mahmud Khan',
    age : 23,
    occupation:'student',
    country: 'Bangladesh',
    quality:['HTML','CSS','Bootstrap', 'Javascript','Tailwind']
}  

//1.template String 
const aboutMyself = `My name is ${myObject.name} age is ${myObject.age} I learnt ${myObject.quality[2]}`;
console.log(aboutMyself);

//2. arrow function
const getMoney = () => 555;
const addNumber = num => num +44;
const isEven = x => x % 2 == 0; // check even using arrow 
const addThree = (a,b,c) => a+b+c; 

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//3. spread operator 
// const newNumbers = numbers;
const newNumbers = [...numbers];
const currentNum = [...numbers,56];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);  
//create a new array from an older array and add an elemeent 

console.log(currentNum);