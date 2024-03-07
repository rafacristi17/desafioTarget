
function invertString(str) {
    let inverted = '';
    for(let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

let str = 'Hello World'; 
console.log(`String original: ${str}`);
console.log(`String invertida: ${invertString(str)}`); 

