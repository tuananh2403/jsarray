let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "hA",
        lastName: "Do THi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Anh",
        lastName: "Nguyen Nhat"
    }
]
function titleCase(str) {
    str = str.toLowerCase();
    for(let i = 0; i< str.length; i++){
        if (i==0 || str.charAt(i-1) == " "){
            str = str.slice( 0 , i ) + str.charAt(i).toUpperCase() + str.slice(i+1);
        }
      }
      return str;
    }
    let newArr = students.map(function(student){
        return student.firstName = titleCase(student.firstName),
                 student.lastName=titleCase(student.lastName);
    });
    console.log(students);
  
    for (let i = 0; i < students.length; i++){
        for (let j =0; j < students[i].firstName.length; j++){
            if (students[i].firstName.charAt(j) === 'a' && students[i].firstName.length > 2 
                || students[i]  .firstName.charAt(j) === 'A'){
                console.log(students[i]);
            }
        }
    }