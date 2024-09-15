// ==  vs ===

// console.log(1 == "1")
// console.log(1 === "1")

const stu = {
    name:"abhi"
};

// const stu2 = '{"name":"abhi"}';
// const stu3 = JSON.stringify(stu);
// console.log(stu == stu2);
// console.log(stu.toString()); // Output: [object Object]
// console.log(JSON.stringify(stu)); // Output: {"name":"abhi"}

// // 

// const a = 1;
// console.log(typeof(a.toString()));

// const b = true; //'1'
// const c = b.toString();// 'true'
// console.log((b == c), b, c);
// console.log(b =='1');

// as  boolean
//  is first converted to 0 1 then string when compare with == so '1' not equal to 'true'


// console.log(typeof(b.toString()));


// string 
// const c = true;
// const a = String(c);
// console.log(a)
// console.log(c == '1');
// // same as it 

const a = "345";
console.log(typeof Number(a));

const b = "345.78fdgfd";

console.log(parseInt(b));
console.log(parseFloat(b));
const c = "ffff345.78fdgfd";
console.log(parseFloat(c));
const d = 10.00;
const e = 10.456;
console.log(e.toFixed(4))
console.log(e.toPrecision(10))

console.log(d)
console.log(d.toFixed(2))

// console.log("Ab".charCodeAt(1))
// console.log("Ab".charAt(0));
// console.log("ABBJJ".toLowerCase().toUpperCase());

// console.log("sample".substring(1,4))
// console.log("sfdgdfgfdtample".indexOf("tamp"));
// console.log("sfdgdfgfdtampletamp".lastIndexOf("tamp"));
// console.log("sfdgdfgfdtample".replace("tamp","kutii"));


// console.log("kohli,rohit,kl,Dhoni".split(","));
// console.log("kohli@rohit@kl@Dhoni".split("@"));
// console.log("sf","    dfg fd g    fdg fdg                  ".trim())