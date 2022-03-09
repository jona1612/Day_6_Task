alert("I’m invoked!"); 
//ERROR ""

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`World`) // this is multiple line code and its working

alert(3 +
1
+ 2); // this is multiple line code and its working


//Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"


//Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;
alert( `hello ${name}` );//hello Guvi geek


//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = "2" > "12";
//Don't touch below this
if (a > 12) {
 console.log("Code is Blasted")
}
else
{
 console.log("Diffused") 
}
//code is blasted


//How to get the success in console.
let a = ("Enter a number?");
//Don't modify any code below this
if (a=8) {
console.log( 'OMG it works for any number inc 0' );
}
else
{
console.log( "Success" );
}
//success


//How to get the correct score in console
let value = ('How many runs you scored in this ball');
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
    //you hit a six
}


//Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings': welcome
 (login == 'Director') ? 'Greetings' : welcome
 (login == '') ? 'No login' :
'';
console.log(message); 
//welcome the employee


//Fix the code to welcome the boss
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
let message = "welcome boss";
}
else
{
let message = "Go away";
}
console.log(message);
//welcome the boss


//Fix the code to welcome the boss 
let message;
let lock = 2;
//Dont change any code below this 
if (null || 2 || undefined )
{
 message = "Go away";
}
else
{
message = "welcome";
}
console.log(message);
//welcome the boss


//Fix the code to welcome the boss  
let message;
let lock = 2;
//Dont change any code below this
if (2 && " " || undefined )
{
 message = "Go away";
}
else
{
message = "welcome";
}
console.log(message);
//welcome


//Change the code to print
//You can change only 2 characters
let i = 3;
while (3) {
 console.log( --i );
}
//2
//1


//Change the code to print 1 to 10 in 4 lines
let num = 1
console.log(num)
num += 1
console.log(num)
num += 4
console.log(num)
num += 4
console.log(num)
//1
//2
//6
//10


//Change the code to print even number
for (let num = 2; num <= 20; num += 1) {
   if (i % 2 == 0) {
       console.log("Number is even:" + i)
   } 
 }
//2,4,6,8,10,12,14,16,18,20


//Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
 console.log(gifts[i]);
}
//wrapped teddy bear,drone,doll and added a bow


//Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 0) {
 countdown--;
 if(countdown == 0)
 {
  console.log("bomb triggered");
 }
}


//Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
msg += "hi";
}
if (lemeout) {
msg += "Hello";
}
console.log(msg);



//Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "'";
if (lemein) {
msg += "hi";
}
if (lemeout) {
msg += "Hello";
}
console.log(msg);