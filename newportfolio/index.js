//  console.log("hello");
//  window.alert("I really love pizzaa!")
//  //this is a comment
//  /*tjos os jos a*/
//  let age="33";//numbers
//  age=age+1;
//  let firstName = "bro";//strings
//  let student = false;//boolean
//  console.log("i see you are",age,"years old");
//  console.log("hello", firstName)
//  console.log(student)
// document.getElementById("p1").innerHTML = "hello " + firstName
// document.getElementById("p2").innerHTML = "you are age " + age
// console.log(3+ +3)
// let username = window.prompt("bech")
// //console.log(username)
// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("mytext").value;
//     console.log(username)
//     document.getElementById("mylabel").innerHTML = "hello " + username;

// }
// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);
// radius = Math.round(radius);

// //radius=5
// circumference = 2* PI* radius;
// console.log( circumference);
// console.log(radius);

//hypotenuse program

// let a;
// let b;
// let c;

// a = window.prompt("give a");
// a = Number(a);

// b = window.prompt("give b");
// b = Number(b);

// c= Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
// console.log(c);

// document.getElementById("submitbutton").onclick = function() { 

//     a = document.getElementById("atextbox").value
//     a = Number(a);

//     b = document.getElementById("btextbox").value
//     b = Number(b);

//     c= Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
//     c= Math.round(c);
//     document.getElementById("clabel").innerHTML = "Side c: " + c;

// }
// let count = 0;
// document.getElementById("decreasebtn").onclick = function(){
//     count -=1;
//     document.getElementById("countlabel").innerHTML = count;
// }

// document.getElementById("resetbtn").onclick = function(){
//     count =0;
//     document.getElementById("countlabel").innerHTML = count;
// }

// document.getElementById("increasebtn").onclick = function(){
//     count +=1;
//     document.getElementById("countlabel").innerHTML = count;
// }

// let x = Math.floor(Math.random()*6)+1;
// console.log(x)


// let x;
// let y;
// let z;

// document.getElementById("rollbtn").onclick = function(){

//     x = Math.floor(Math.random()*6)+1;
//     z = Math.floor(Math.random()*6)+1
//     y = Math.floor(Math.random()*6)+1

//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;

    
// }
// let username = "hardik"
// let phonenum = "123-456-789-0"
// console.log(username.length)
// // let letter = username.charAt(4);
// console.log(username.charAt(4))
// console.log (username.indexOf("o"))
// console.log(username.indexOf("d"))
// username = username.toUpperCase()
// phonenum = phonenum.replaceAll("-", " ")
// console.log(phonenum)
// console.log(username)

// let fullname = "hardik rai"
// let firstname;
// let lastname;


// firstname = fullname.slice(0, fullname.indexOf(" "));
// lastname = fullname.slice(fullname.indexOf(" ")+1)
// console.log(lastname);
// console.log(firstname)

// let username = "hardik"
// let letter = username.charAt(1).toLocaleUpperCase().trim();
// // letter = letter.toUpperCase();
// console.log(letter);


// let age = 925;

// if(age>=18){


//      if (age>100){
//         console.log("you should be a ghost bech ")
//     }

//     else{
//         console.log("you are an adult")
//     }
// }
// else if(age<0){
//     console.log("you a ghost bech")
// }
// else if(age>=65){
//     console.log("you bout to be a ghost bech")
// }

// else{
//     console.log("fuck off bech")
// }

// function oneplussum(p,q){
//     return(Math.round(1+(p+q)));
// }
// console.log(oneplussum(5,8)
// )


// const sum= (x,y)=> {
//     return x+y
// }
// const hello = ()=>{
//     console.log("bech")
// }
// console.log(sum(5,5))
// hello();

// const item={
//     "ayush": true,
//     "drishty": false,
//     "kamna": 15,
//     "pratyaksh":12 

// }

// console.log(item["ayush"])


// let a ="hardik";
// console.log(a)
// {
//     let a=9;
// console.log(a)
// }
// console.log(typeof a)

// let x = "+3";
// let y = 3;

// console.log(y+x)
// console.log(3+ +"3")









// const item =
// {
//  clss: true,
//  sect: 6,
//  rollno:21 
// }

// console.log(item["rollno"])
// item["friend"] = "hardik"
// item["clss"] = "10"

// console.log(item)


// const dict = {
//     appreciate: "recognize the full worth of",
//     ataraxia: "a state of freedom from disturbance and anxiety",
//     yakka: "hardwork",
//     abyss: "a place of hopelessness"
// }


// console.log(dict.yakka)

// let x=5;
// let y= 6;
// console.log(!false)

// let A = prompt("tell me your age")
// A= Number(A)
// if (isNaN(A)) { 
//     alert("not a number")
//    }
// else if (A>18){

    
//     if(A<=0){
//         alert("not a valid input, you aren't negative or 0 years old")
//     }
//     else if(A>100){
//         alert("old as fuck, but i guess valid")
//     }
//     else{
//     alert("valid")
// }

// }

// else{
   
    
//     alert("you are underage")
// }

// console.log(typeof A)
// function getday(){

//     "sunday" = 1
//    " monday" = 2
//     "tuesday" = 3
//     wednesday = 4
//     thursday = 5 
//     friday = 6 
//     saturday = 7
    
// }

// let day= "monday";

// switch(day) { 

//     case "monday":
//         console.log("4am");
//         // break;
//     case "tuesday":
//         console.log("5am");
//         // break;

//     case  "wednesday":
//         console.log("6am");
//         // break;
// }


// console.log("you can", A<18 ?"not drive":"drive")

// let a;
// let b;

// a= prompt("give me value of a")
// b= prompt("give me value of b")
// if((a%2==0) && (a%3==0) && (b%2==0) && (b%3==0)){
//     alert(!false)
// }
// else{
//     alert(false)
// }


// let day = "monday";

// switch (day){
//     case "monday":
//         alert("it is monday")
//         break;
//     case "tuesday":
//         alert("it is tuesday")
//         break;
//     case "wednesday":
//         alert("it is wednesday")
//         break;
//     case "thursday":
//         alert("it is thursday")
//         break;
//     case "friday":
//         alert("it is friday")
//         break;
//     case "saturday":
//         alert("it is saturday")
//         break;
//     case "sunday":
//         alert("it is sunday")
//         break;
// }


// let a;
// a= prompt("gimme your age ")
// console.log("you", a>18?"can drive":"cannot drive")



// {let n = prompt("enter value of n")
// n = Number.parseInt(n)
// 5
// let i=0;
// while (i<n){
//     console.log(i)
//     i++;
// }
// }


// let hardik= {

//     name: "hardik rai",
//     branch:  "it1",
//     sem: 3
// }

// // for(let i=0;i<Object.keys(hardik).length;i++){
// //         console.log("the info is " + Object.keys(hardik)[i] + " is " + hardik[Object.keys(hardik)[i]] )
// // }


// for(let i in hardik){
//     // console.log(i)
//     console.log ("the info for " + i + " is " +hardik[i])
//     // console.log("the info is " + Object.keys(hardik)[i] + " is " + hardik[Object.keys(hardik)[i]] )
// }


// let cn= 23
// let i 
// while(i!=cn){ 
//      i = prompt("give me the correct value")
//      if(i!=cn){
//         alert("try again")}
         
// }

// alert("you have entered the correct number")

// for(i;i<=a;i++){
//     prompt("give the correct value")
//     }
const mean =(a,b,c,d)=>{

        return((a+b+c+d)/4)

}

a= prompt("give me value of a ")
a = Number.parseInt(a)
b= prompt("give me value of b ")
b = Number.parseInt(b)
c= prompt("give me value of c ")
c = Number.parseInt(c)
d= prompt("give me value of d ")
d = Number.parseInt(d)

console.log(mean(a,b,c,d))