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