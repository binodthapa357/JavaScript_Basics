// reduce method
const myNums = [1, 2, 3];

myTotal = myNums.reduce((acc, currentval) => {
  //console.log(`acc: ${acc} and current value: ${currentval}`);

  return acc + currentval;
}, 0);

//console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python",
    price: 5999,
  },
  {
    itemName: "AI/ML",
    price: 7999,
  },
  {
    itemName: "datascience",
    price: 9999,
  },
];

const addPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(addPrice);
