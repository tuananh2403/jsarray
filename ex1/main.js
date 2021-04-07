let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
let total = a.reduce(function( a , b){
    return a + b;
},0);
console.log(total);