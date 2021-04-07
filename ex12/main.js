let a = [1,3,6,9,11,20]; let k = 13;
let b =[ ];
for ( let i = 0; i < a.length; i++ ){
    if ( k <= a[i] && k >= a[i-1] ){
        b =  a.slice(0, i);
        b.push(k);
        b = b.concat(a.slice(i));
    }
}
console.log(b);