// Immediately Invoked Function Expression (IIFE) ==> to prevent global scope pollution problem
(
function one (){
    //named IIFE
    console.log(`DB Connected`);
    
}) ();

( (name) => {
    console.log(`DB Connected Two ${name}`);
    
})('bikash')