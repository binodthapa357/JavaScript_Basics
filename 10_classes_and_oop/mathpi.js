const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descripter);

// console.log(Math.PI);
// const mynewObject = Object.create(null)

const obj = {
    name: 'tea',
    price: 250,
    isAvailable: true,
    ordertea: function(){
        console.log('error');
        
    }


}
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

Object.defineProperty(obj, 'name', {
    //writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function') {
       console.log(`${key} : ${value}`); 
    }
    
    
}