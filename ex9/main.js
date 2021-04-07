let students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
];
let newArr  =  students.sort(function(a,b){
    let nA = a.firstName.toLowerCase();
    let nB = b.firstName.toLowerCase();
    if(nA < nB)
    return -1;
  else if(nA > nB)
    return 1;
 return 0;
})
console.log(newArr);