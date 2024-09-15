const student ={
 name:"Abhi",
 marks:57,
 age:20,
 university:"kolhan",
 address:"chaibasa"

}

// key value pair 
// {
//     key:value
// }
// JSON object
// Js object Notation 
console.log(typeof(student));
const stu = JSON.stringify(student);
const stu2 = JSON.parse(stu)
console.log("type of stu",typeof(stu),stu);
console.log("type of stu2",typeof(stu2),stu2);


const keys = Object.keys(student);
const values = Object.values(student);

console.log("keys66", keys)
console.log("values", values)

for(let i=0;i<keys.length;i++){
    console.log(keys[i],student[keys[i]]);
}
// student.'marks' wrong
// student.marks
// student["marks"]