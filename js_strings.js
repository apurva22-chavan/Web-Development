console.log("This is strings tutorial")
let a="Apurva";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]);

console.log(a.length)

let real_name="ABC"
let friend="XYZ"
console.log("His name is " + real_name+" and his friends name is "+ friend)

//Template Literals
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b="ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

console.log(b.slice(1,5))
console.log(b.slice(1))

console.log(b.replace("Sh","77")) //Only the first occurence get replaced
console.log(b.concat(a," Aishwariya"," Rahul"," Priya"))

let re_name="    Apurva    "
console.log(re_name)
let newName=re_name.trim()
console.log(newName)

let r_name="Apurva"
console.log(r_name[0])
console.log(r_name[1])


z="Apurva";
console.log(z.charAt(0));
console.log(z.charAt(110));
console.log(z.indexOf("pu"));
console.log(z.indexOf("zz"));
console.log(z.starts));
console.log(z.startsWith("Ap"));
console.log(z.startsWith("va"));
console.log(z.endsWith("va"));
