// function findChor(persons){
// // write funtion to find chor and at which position
// const len=persons.length;
// console.log("len", len);
// //0 < 5
// // 1 < 5
// // 2 < 5
// /// 3 < 5
// //4<5
// // 5<5 = false
// console.log("start loop")
// for(let i= 0; i<len; i++){
//     if(persons[i]=="chor"){
//         console.log(i,"chor");
//     }
// }
// console.log("end loop")
// }

const persons = ['chor','police','civil','chor','police'];
  //               0      1         2      3      4
  
//   findChor(persons)


  /// write function to take  add 2 numbers 
// function addnumber(a,b){ //where a,b is parameter
// console.log(a,b)
// var c;
// c=a+b 
// console.log(c);
// }
// addnumber(9,10) //function call where 9,10 is argument

// //write function to take 5 subject marks and give percentage 
// function calculatePercentage(subject1, subject2, subject3, subject4, subject5) {
//   // Calculate the total marks
//   let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

//   // Calculate the percentage
//   let percentage = (totalMarks / 500) * 100;

//   // Return the result
//   return percentage;
// }

// Example usage:
// let percentage = calculatePercentage(90, 85, 95, 80, 92);
// console.log(`Your percentage is: ${percentage}%`);
// Call the function
// calculatePercentage();
   
   // write functiom to find maximum of  2 numers

  //  function maxnumber(num1,num2){
  //   let max ;
  //   if(num1>num2){
  //     max=num1
  //    }
  //    else{
  //     max=num2
  //    }
  //    return max;
  //  }

   
// let max =maxnumber(10,2); 
   
//    console.log("max number is",max);

   // write function find maximum of 3 numbers
   function maxnumber3(num1,num2,num3){
  let maxnum;

  if(num1>num2) {
maxnum =num1;
   }

   else{
    maxnum =num2;
   }
   let greaternum;
if(num3>maxnum){
  greaternum =num3;
}
else{
  greatnum =maxnum;
}
   }
  //  return greaternum;
  // }
    
  //  let max3 =maxnumber3(10,20,40);

  //  console.log("maximum number is" ,max3);

   // write function to find maximun of numbers in a array
   
 // This is function defination   
// function maxN(arr){
// let maxele= arr[0];
// for(let i=1 ; i<arr.length ; i++){

//   const element =arr[i];
//   if(element> maxele){
//     maxele= element
//   }
// }
// return maxele;


// }

// const arr= [ 10, 20, 1001, 50, 1045, 90]
// let maxnumber= 
// maxN(arr); // function call , arr is function argument

// console.log("maximum number in array", maxnumber);

   // write function to find a element at which postion in array


  // write function to print only even numbers

  // write function to find odd numbers

  // write fuction to reverse a string

  // write function add 2 strings
// write function square a number

  function square(number){
return number*number;

  }
  
  // var val= square(4);
  // console.log(val);

  // write function cube a number

  function cube(num){
    return num*num*num;
  }
   var val= cube(9);
  console.log(val);

  // Goal: find grade of student 

  


