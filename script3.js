//Write a code to print the numbers in the array
let nums = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    console.log(arr.join(''));
}
nums();

//1234567891011

    
//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " " 
 
for (var i = 11; i > 0; i--) {
 new_string += numsArr1[i]
}
console.log(new_string.trim());
//Output: 11 10 9 8 7 6 5 4 3 2 1


//Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (var i = 0; i <=10; i++) {
 if(numsArr2[i] %2 == 0 )
 {
     numsArr2[i] = 'even'
 
 }
}
console.log(numsArr2);
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

    
//Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (var i = 0; i <=10; i++) {
 if(numsArr3[i] %2 == 0 )
 {
 console.log(numsArr3) // 'display the even number'
 }
else 
numsArr3[i] = 'even'
}
console.log(numsArr3);


//Write a code to add all the numbers in the array
const numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
for (let i = 0; i <=10; i++) {
    sum += numsArr4[i];
}
console.log(sum);
//66


//Write a code to add the even numbers only
let numsArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];

const evens = (numsArr5) => {
  let sum = 0;
  for (let i = 0; i < numsArr5.length; i++) {
    if (numsArr5[i] % 2 === 0) {
    sum = sum + numsArr5[i];
    }
  }
  return sum;
}
console.log(evens(numsArr5))


//Write a code to add the even numbers and subract the odd numbers
var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sums=100;
for (var i = 0; i <=10; i++) {
 if(numsArr6[i]%2==0)//error !=and,
 {
 sums += numsArr6[i]
 }
 else
 {
 sums -= numsArr6[i]
 }
}
console.log(sums);
//output:94


//Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr11 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all11=0;
for (var i = 0; i < numsArr11.length; i++) {
 var inner_array11 = numsArr11[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr11[i][j] %2 == 0 )
      {
         numsArr11[i][j] = even
       }
}
console.log(numsArr11);
//output:[ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]


//Write a code to print elements in the inner arrays in reverse
var numsArr12 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr12.length-1; i >= 0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=numsArr12[i][j]+""
}
console.log(str_all);
//Output: 11 10 9 8 7 6 5 4 3 2 1



//Write a code to add elements in the inner arrays based on odd or even values
var numsArr13 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr13.length; i++) {
 var inner_array = numsArr13[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr13[i][j]%2!=0)
 {
 sum_odd += numsArr13[i][j]
 }
 else
 {
 sum_even += numsArr13[i][j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);
//Output:
//36
//30