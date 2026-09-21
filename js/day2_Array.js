// let arr = [1,2,3,4,5]
// arr.push(100,200,300)
// console.log(arr)
// //pop
// arr.pop()
// console.log(arr)

// //shift
// arr.shift()
// console.log(arr)
// arr.unshift("ruby",35,false)
// console.log(arr)

//concat
// let arr1 = [1,2,3]
// let arr2= [10,20,30]
// let arr3= [100,200,300]
// console.log(arr1.concat(arr2,arr3))

//slice

// let arr = [88,89,90,"ruby",false]
// let st = arr.slice(1,4)
// console.log(st)

//Reverse
// let arr = ["ruby",89,"Aravinth",88,false]
// arr.reverse()
// console.log(arr)
//MAP
// let arr = [20,21,22,23,24,"ruby",true]
// let map = arr.map(function(v,i,a){
//     return a+2
// })
// console.log(map)
// let arr = [20,21,22,23,24,"ruby",true]
// let map = arr.map(function(v,i,a){
//     return i+4
// })
// console.log(map)

// let arr = [20,21,22,23,24,"ruby", true]
// let map = arr.map(function(v,i,a){
//     return v+4
// })
// console.log(map)

// let arr =[1,2,3,4,5,6,7,8]
// let filter = arr.filter(function(a){
//     return a% 2== 0
// })
// console.log(filter)

// let arr =[1,2,3,4,5,6,7,8]
// let filter = arr.filter(function(a){
//     return a% 2!= 0
// })
// console.log(filter)
//Even number
// let arr =[3,6,9,11,12,13,16,18]
// let filter = arr.filter(function(a){
//     return a% 2!= 0
// })
// console.log(filter)

//Add number
// let arr =[3,6,9,11,12,13,16,18]
// let filter = arr.filter(function(a){
//     return a% 2== 0
// })
// console.log(filter)

// let arr =[3,6,9,11,12,13,16,18]
// let filter = arr.filter(function(ruby){
//     return ruby% 2== 0
// })
// console.log(filter)

// let arr = [300,500,900,1000,0]
// let red = arr.reduce(function(num1 , num2){
//     return num1 + num2
// },0)
// console.log(red)
//0+300=300
//300+500 =800
//800+900 = 1700
//1700+1000 = 2700
//2700+0 = 2700

//var arr = [1,2,3,4,5,6,7,8]
// arr.splice(2,5)
// console.log(arr)
//arr.splice(3,0,"ruby","Aravinth",2022,true)
//console.log(arr)
// arr.splice(3,6,"ruby","Aravinth")
// console.log(arr)

//ForEach
// let arr = [25,"july","sunday",2026]
// arr.forEach(function (a){
//     console.log(a)
// })
// var arr = [1,2,3,4,5]
// var val = arr.values()
// for (const element of val) {
//     console.log(element)
    
// }
//toString

// var arr = ["ruby",89,"Aravinth",88]
// //console.log(arr.toString())
// console.log(arr.join('marriage'));

//Sort - ascending
// var arr = [3,6,11,2,66,3,6,22,88,4]
// var ase = arr.sort(function (a,b) {
//     return (a - b)
 
// })
// console.log(ase);

// var arr = [3,6,11,2,66,3,6,22,88,4]
// var ase = arr.sort(function (a,b) {
//     return (b - a)
 
// })
// console.log(ase);
// var arr = ['aravind', 'BALA', 'charan', 'Arun', 'banu', 'Chandru'];
// //arr.sort((a, b) => a.localeCompare(b));

// // console.log(arr);
// arr.sort((a, b) => {
//     const aUpper = /^[A-Z]/.test(a);
//     const bUpper = /^[A-Z]/.test(b);

//     if (aUpper && !bUpper) return -1;
//     if (!aUpper && bUpper) return 1;

//     return a.localeCompare(b);
// });

// console.log(arr);



// let nan = "rubala" *89;
// console.log(nan);


// let arr = [1, 2, 3, 4];
// 	arr.pop()
//     console.log(arr);


// let arr = [1, 2, 3];
// let result = arr.join("-");
// console.log(result);


// let numbers = [10, 20, 30, 40];

// console.log(numbers.includes(30)); 
// console.log(numbers.includes(50)); 


// let numbers = [1, 2, 2, 3, 4, 4];

// let uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers); 

// var numbers = [1, 2, 2, 3, 4, 4];
// var uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);



// var arr = [10, 20, "Chennai", "AndhraPradesh"];
// var result = arr.join(",");
// console.log(result);

// let arr = [10, 20, 30, 40, 50, 60];
// arr.splice(2,2);
// console.log(arr);

// let arr = [1, 2, 3, 7, 8, 9];

// arr.splice(3, 0, 4, 5, 6);

// console.log(arr);


// let str = "JavaScript with playwright, JavaScript with cypress";
// let result = str.replaceAll("Java", "Type");
// console.log(result);

// console.log(5 + "5");
//    console.log(5 * "2");


// let a = 10;
//   let b = 20;
//   console.log(a > b && a < b);
//   console.log(a > b || a < b);

// let age = 20;
// let result = age>=18? "adult" : "minor";
// console.log(result);

// console.log(0 == false);
//    console.log(0 === false);
	

// let num = 10;
// if(num %2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


// let num = 11;
// if(num %2 === 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }


// let day = 2;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;

//         case 2:
//             console.log("Tuesday");
//             break;

//             case 3:
//                 console.log("Wednesday");
//                 break;
//                 case 4:
//                     console.log("Thurday")
//                     break;
//                 case 5:
//                     console.log("Friday")
//                     break;
//                     case 6:
//                     console.log("Saturday")
//                     break;
//                     case 7:
//                     console.log("Sunday")
//                     break;
//                     default:
//                         console.log("invaild day")
         
                
                    


// }


// let mark = 40;
// console.log(mark >=40? "Pass" : "fail");

// for(let i=1; i <= 10; i++){
// console.log(i)
// }


// for(let i = 1 ; i<=20; i++){
// if(i %2===0){
// console.log(i)
// }
// }

// let str = "hello";
// let reversed ="";
// for(let i = str.length-1; i >= 0; i--){
// reversed+= str[i];
// }
// console.log(reversed);

// for(i =1 ; i<=10; i++){
// console.log("5 x " + i + "=" + (5*i));
// }

// let i = 1;
// let sum = 0;

// while(i <= 5){

// sum = sum + i;
// i++;
// }
// console.log(sum);


let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 75) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}









