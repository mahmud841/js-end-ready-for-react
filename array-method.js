const myProducts = [
  {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
  {name: 'phone', price: 7200, brand: 'iphone', color: 'golden'},
  {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
  {name: 'sunglass', price: 300, brand: 'ribbon', color: 'black'},
  {name: 'camera', price: 9000, brand: 'dslr', color: 'purple'},
];

const brands = myProducts.map(product => product.brand);
// console.log(brands);
const prices = myProducts.map(product => product.price);
// console.log(prices);
// myProducts.forEach(myProduct =>console.log(myProduct));
// myProducts.forEach(myProduct =>console.log(myProduct.color));

myProducts.forEach(myProduct => {

})


//3 filter 
const cheapProducts = myProducts.filter(myProduct => myProduct.price <=5000);
// console.log(cheapProducts);

const specificName = myProducts.filter(b => b.name.includes('n'));
// console.log(specificName);

//4. find 
const special = myProducts.find(b => b.name.includes('n'));
console.log(special);