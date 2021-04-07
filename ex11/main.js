let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];    
let  k = 30 ;

let d = 0;
for ( let i = 0; i < a.length; i++){
    for ( let j = 0; j < a.length; j++){
        for ( let d = 0; d < a.length; d++){
            if (a[i] + a[j] + a[d] === k ){
                console.log(a[i] , a[j] , a[d]);
                console.log('Yes');
                d ++;
            }
        }
    }
}