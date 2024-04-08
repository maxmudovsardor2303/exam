// // 1-masala
// var singleNumber = function(nums) {
//     var count = {};
//     for (var i = 0; i < nums.length; i++) {
//         count[nums[i]] = (count[nums[i]] || 0) + 1;
//     }
    
//     for (var key in count) {
//         if (count[key] === 1) {
//             return key;
//         }
//     }
// };

// console.log(singleNumber([4, 1, 2, 1, 2, 9])); // Natija: 4





// 2-masala

// const search = function(nums, target) {
//     if(nums.includes(target)){
//         return true
//     }else{
//         return false
//     }
// };
// console.log(search([2,5,6,0,0,1,2]), 0 );


// 3-masala 


// const arr_number = (array)=>{
//     let number = []
//     for(let i = 0; i < array.length; i++){
//         if(!number.includes(array[i])){
//             number.push(array[i])
//         }
//     }
//     return number
// }
// console.log(arr_number([1,1,2,3,3]));


// 4-masala


// let obj = {name: "Abdulla", lang: "English"}

// shallow copy  shallow copy  obj ni uzgartirmay  kuchirib oladi. Adresi xam uzgarmedi
// let new_obj = obj
// new_obj.name = "Asilbek"
// console.log(obj);
// console.log(new_obj);

// deep_copy  2-xil usul bn copy olinadi:
//  1.spread operation,
//  2.JSON. spread nested objectlarda ishlamaydi. JSON xammasida ishlaydi

// spread 

// let new_obj = {...obj}
// obj.name = "Nurlibek"
// console.log(obj);
// console.log(new_obj);

// let obj = {name: "Abdulla", lang: {en: 'English'}}

// let new_obj = JSON.parse(JSON.stringify(obj))
// obj.lang.en = 'Russian'

// console.log(obj);
// console.log(new_obj);


// 5-masala 


// let arr = [4, 6, 22, 11];
// for (let i = 0; i < 20; i++) {
//     let randomNum = Math.floor(Math.random() * 20) + 1;
//     if (arr[arr.length - 1] + randomNum % 2 === 0) {
//         arr.push(5);
//     } else {
//         arr.push(6);
//     }
// }
// console.log(arr);




// // 6-masala
// function engKattaFarq(nums) {
//     let numitem = {};
//     let maxNum = null;
//     for (let num of nums) {
//         if (numitem[num]) {
//             numitem[num]++;
//         } else {
//             numitem[num] = 1;
//         }
//     }
//     let maxCount = 0;
//     for (let num in numitem) {
//         if (numitem[num] > maxCount) {
//             maxCount = numitem[num];
//             maxNum = parseInt(num); 
//         }
//     }
//     let largestNum = Math.max(...nums); 
//     let difference = largestNum - maxNum; 
//     return difference;
// }
// let nums = [2, 2, 1, 3, 2, 8];
// console.log(engKattaFarq(nums)); 



// 7-masala 

// let objfirst = { value: 10 };
// let objtwo = { value: 5 };
// let max = Math.max(objfirst.value, objtwo.value);
// let min = Math.min(objfirst.value, objtwo.value);
// let result = Math.pow(max, min);
// console.log(max);
// console.log(min);
// console.log(result);


// 8-masala

// let arr = [1,2,3,14]
// let total = 5
// let item = []
// for(let i = 0; i < arr.length; i++){
//     for(let a = 0; a < i; a++){
//         if(arr[i] + arr[a] == total){
//             item.push(arr[i])
//             item.push(arr[a])
//         }
//     }
// }
// console.log(item)


// 9-masala 

// function fn(arr, target) {
//     const result = [];
//     function backtrack(tempList, start, remain) {
//         if (remain === 0) {
//             result.push([...tempList]);
//             return;
//         } else if (remain < 0) {
//             return;
//         }
//         for (let i = start; i < arr.length; i++) {
//             tempList.push(arr[i]);
//             backtrack(tempList, i + 1, remain - arr[i]);
//             tempList.pop();
//         }
//     }
//     backtrack([], 0, target);
//     return result;
// }
// const arr = [1, 2, 3, 14];
// const target = 5;
// const subsets = fn (arr, target);
// console.log(subsets);



// 10-masala 


// function palindromeTekshirish(son) {
//     const reverseSon = son.split('').reverse().join('');
//     return son === reverseSon;
// }
// const son = prompt("Iltimos, bir son kiriting:");
// if (palindromeTekshirish(son)) {
//     console.log("Bu son palindrom");
// } else {
//     console.log("Bu son palindrom emas");
// }



// 11-masala 



// // 12-masala 


// const sumOfDigits = (nums) => {
//     const sum = nums.reduce((acc, num) => acc + num, 0);
//     return sum.toString().split('').map(Number);
//   };
//   const numbers = [1, 22, 3];
//   const result = sumOfDigits(numbers);
//   console.log(result); 
  


// 12-masala

// const sumDigits = (...nums) => {
//     const sum = nums.reduce((acc, num) => acc + num, 0);
//     return sum.toString().split('').map(Number);
// };
// console.log(sumDigits(1, 22, 3)); // Natija: [2, 6]


// 13-masala 

// var addTwoNumbers = function(l1, l2) {
//     const num1 = Number(l1.reverse().join(''));
//     const num2 = Number(l2.reverse().join(''));
//     const sum = num1 + num2;
//     const result = sum.toString().split('').reverse().map(Number);
//     return result;
// };
// const l1 = [2,4,3];
// const l2 = [5,6,4];
// console.log(addTwoNumbers(l1, l2)); // Natija: [7,0,8]
