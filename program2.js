// Display pyramid of number using JavaScript

var totalRows = 5;
var output = '';
for (var i = 1; i <= totalRows; i++) {
    
    for (var j = 1; j <= i; j++) {
        
        output += j +' '; 
        
    }
console.log(output);
output = '';  
}