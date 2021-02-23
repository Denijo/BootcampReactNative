console.log("--- Soal No 1 ---")
console.log("")

const golden = () => {
  console.log("this is golden!!")
}
 
golden()


console.log("")
console.log("--- Soal No 2 ---")
console.log("")


const newFunction = (firstName, lastName)=>{
    return {
      firstName, lastName,
      fullName (){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
//Driver Code 
newFunction("William", "Imoh").fullName() 


console.log("")
console.log("--- Soal No 3 ---")
console.log("")

let newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  
const {firstName, lastName, destination, occupation, spell} = newObject

  // Driver code
console.log(firstName, lastName, destination, occupation)


console.log("")
console.log("--- Soal No 4 ---")
console.log("")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]


let combined = [...west, ...east]

//Driver Code
console.log(combined)


console.log("")
console.log("--- Soal No 5 ---")
console.log("")

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, 
${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 
