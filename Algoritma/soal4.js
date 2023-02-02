Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
var diagonal1 = 0;
for (let i = 0; i < Matrix.length; i++){
    for (let j = 0; j < Matrix[i].length; j++){
        if (i === j){
            diagonal1 = diagonal1 + Matrix[i][j]
            console.log("Diagoanl pertama", Matrix[i][j])
            
        }
    }
}
console.log("Hasil Penjumlahan Diagonal Pertama", diagonal1)
// console.log(diagonal1)
var diagonal2 = 0;
var n = Matrix.length
for (let i = 0; i < Matrix.length; i++){
    for (let j = 0; j < Matrix[i].length; j++){
        if (j == (n-i-1)){
            // console.log(Matrix[i][j])
            console.log("Diagoanl kedua", Matrix[i][j])
            diagonal2 = diagonal2 + Matrix[i][j]
            
        }
    }
}
console.log("Hasil Penjumlahan Diagonal Kedua", diagonal2)

console.log("Maka Hasilnya adalah", diagonal1,"-",diagonal2,"=",diagonal1-diagonal2);