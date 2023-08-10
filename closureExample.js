// Write javascrript code for multiply(5)(4)(3)

//You can create a closure to keep the value of a even after the inner function is returned.

function multiply(param1) {
    return function(param2){
        return function(param3){
            return param1+param2+param3;
        }
    }
    
}

console.log(multiply(5)(4)(3));