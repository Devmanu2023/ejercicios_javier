let array = [];

for(let i=1; i<=10; i++){
array.push(i);
}


let array2 = array.slice();
array2.push(20);

console.log("array 1");
console.log(array);
console.table(array);

console.log("array 2");
console.log(array2); 
console.table(array2);
    


