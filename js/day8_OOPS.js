// class Encap {
//     #balance =500;
//     constructor(name){
//         this.name =name;
            
//         }
//         getName(){
//             console.log(this.name)
            
//         }
//         getBalance(){
//             console.log(this.#balance)
//         }
//     }

// let p1 = new Encap("ruby")
// p1.getName()
// p1.getBalance()




//Inhertence

// class parent{
// constructor(bikeBrand){
//     this.carBrand = "BMW"
//     this.bikeBrand = bikeBrand
// }
// car(){
//     console.log(this.carBrand)
// }
// bike(){
//     console.log(this.bikeBrand)
// }
// }
// class child extends parent {
//     constructor(bikeBrand) {
//         super(bikeBrand)
        
//     }
// }

// let p3 = new child("Bajaj")
// p3.car()
// p3.bike()



//polimariphisam

class Animal{
    cat(){
        console.log("meow")
    }
    dog(){
        console.log("bark")
    }
}
class Sound extends Animal{
    cat(){
        console.log("cute")
    }
    dog(){
        console.log('Loyal')
    }
}
let p4 = new Animal()
p4.dog()
let p5 = new Sound()
p5.dog()









