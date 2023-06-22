//Object Descturcturing
//Desctructuring means to extract something / some information.

let allStudents={
    fname:"Prabhat",
    lname:"Singh",
    mobno:"9111111111",
    dob:"345",
    add:"NA",
}

//I want to extract some information from the student object.

let { fname } = allStudents;
let { lname } = allStudents;
let { add } = allStudents;
let { mobno } = allStudents;

console.log(fname);
console.log(lname);
console.log(add);
console.log(mobno);