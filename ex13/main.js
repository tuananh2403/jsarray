let a = [9,8,7,6,4,5,3,2,1];
let tg ;
for (let i = 0; i <= a.length; i++){
    for (let j = i+1; j <= a.length; j++){
        if (a[i] > a[j]){
            tg = a[i];
            a[i] = a[j];
            a[j] = tg;
        }
    }
}
console.log(a); 