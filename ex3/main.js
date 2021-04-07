let arr = [1,2,3,4,5,5,5,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
function foo(arr) {
    var a = [], b = [], prev;
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    return [a, b];
}
let newArr = foo(arr)[1].sort();
console.log("tan xuất xuất hiện nhiều" , newArr[newArr.length-1])
