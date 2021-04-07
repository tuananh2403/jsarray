let a = [1,2,3,2,3,4,6,7];
function kiem_tra_snt(n)
{
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
    }
    let b = [ ];
for (let i = 0; i <= a.length; i++){
    if (kiem_tra_snt(a[i])){
        b.push(a[i]);
    }
}
console.log(b);