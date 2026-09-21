//  var obj = {
//     name: "ruby" , age :30, course: false
//  }

//  for( let key in obj)
//     console.log(obj[key])


var str ="java with playwrite"
var count = {}
//Occurance

for(const char of str){
    // if(char !==" "){
        count[char] = (count[char] || 0) + 1;
    }

console.log(count)


//Basic

// var arr =[10,true,20,'ruby']
// var[a,b,c,d] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// var arr =[10,true,20,'ruby']
// var[a,b,,d] = arr
// // console.log(a)
// // console.log(b)
// console.log([a,b,,d])

// var arr =[10,20,30,40,50,60]
// var[a,b,c, ...d] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//spread

// var s = "Rubala"
// console.log(...s)


// var xyz = 123
// var abc = 456;
// [abc , xyz] = [xyz , abc]
// console.log(abc)
// console.log(xyz)


