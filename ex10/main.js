let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
let b = a.sort(function(a,b){
    return b-a;
})
for ( let i =0; i< b.length; i++){
    if (b[i] != b[0]){
        console.log(b[i]);
        break;
    }
}