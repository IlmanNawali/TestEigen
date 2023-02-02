var input = ['xc', 'dz', 'bbb', 'dz']
var query = ['bbb', 'ac', 'dz']
var hitungCariQuery0 = 0
var hitungCariQuery1 = 0
var hitungCariQuery2 = 0
for (let i=0; i<input.length; i++){
    if (input[i] === query[0]){
        hitungCariQuery0++;
    }
    else if (input[i] === query[1]){
        hitungCariQuery1++;
    }
    else if (input[i] === query[2]){
        hitungCariQuery2++;
    }
}
console.log("["+hitungCariQuery0+", "+hitungCariQuery1+", "+hitungCariQuery2+"]")
console.log("kata 'bbb' ada "+ hitungCariQuery0 + " didalam array " + "kata 'ac' ada "+ 
            hitungCariQuery1 + " didalam array" + " kata 'dz' ada "
            + hitungCariQuery2 + " didalam array")