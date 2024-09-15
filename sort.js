let arr = [67,2,3];


arr.sort((a,b)=>{
 if(a > b){
  return -11;
 }
 else if( a < b){
    return 10;
 }
 else{
    return 0;
 }
});

let arr2 =["as","ae","aE","he","AE","He"];
arr2.sort();
console.log(arr2);
console.log(arr);

let student = [
{name:"a", marks:67},
{name:"b", marks:78},
{name:"c", marks:38},


]

// student.sort((a,b) => {
//     if(a.marks > b.marks ){
//         return -1;
//     }
//     else if(a.marks < b.marks){
// return 1;
//     }
//     else{
//         return 0;
//     }
// });
student.sort((a,b) => {
 return b.marks - a.marks;
});
console.log(student);

