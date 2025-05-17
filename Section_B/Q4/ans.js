// Q:write a js function that removes duplicates from an array of integers

// function removeDuplicates(arr){
//     return [...new Set(arr) ]
// }
// const numbers = [1, 2, 3, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);

// console.log(uniqueNumbers)


function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const numbers = [1, 7, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
