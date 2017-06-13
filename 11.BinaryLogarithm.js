//vij za example v .pptx file - v doc-a NYAMA
function binaryLogarithm(input) {
    for (let x of input) {
        console.log(Math.log2(x));
    }
}

console.log(binaryLogarithm(["1024", "1048576", "256","1","2"]));