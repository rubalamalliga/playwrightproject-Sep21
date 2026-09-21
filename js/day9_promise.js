// let prom1 = new Promise((resolve,reject)=>{
//     let payment = true

//     if(payment){
//         resolve("your order sucessfully placed")
// }else{
//     reject("order failed")
// }
// })
// prom1
// .then(res=>console.log(res))
// .catch( (err)=>console.log(err))
// .finally(()=>console.log("this is finally"))




// let prom2 = new Promise((resolve,reject)=>{
//     let payment = false

//     if(payment){
//         resolve("your payment sucessfully placed")
// }else{
//     reject("payment failed")
// }
// })
// prom2
// .then(res=>console.log(res))
// .catch( (err)=>console.log(err))
// .finally(()=>console.log("this is finally"))


// function greet(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("Hi Everyone"),
//             reject(new error("due to: Network issue"))
            
//         })
//     })
// }

// greet().then((res)=>console.log(res))
// .catch((er)=>console.log(er))

// Promise.all([
//     Promise.resolve("start"),
//     Promise.reject('middle'),
//     Promise.resolve('end')
// ])
// .then((res) => console.log(res)).catch((er) =>console.log(er))

// Promise.allSettled([
//     Promise.resolve("start"),
//     Promise.reject('middle'),
//     Promise.resolve('end')
// ])
// .then((res) => console.log(res)).catch((er) =>console.log(er))


Promise.race([
    new Promise(res => setTimeout(() => res('first'),2000)),
        new Promise((res, rej) => setTimeout(() => res('second'),3000)),
            new Promise(rej => setTimeout(() => rej('third'),200))
])
.then((res) => console.log(res)).catch((er) =>console.log(er))