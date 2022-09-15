

const prompt = require('prompt-sync')
({sigint: true})

let pin = Number(prompt(`Enter pincode: `))
console.log(pin)

let pinCode = 1234

if (pin === pinCode){
    console.log("Success")
}else if(pin !== pinCode){
    console.log("Failure")
}