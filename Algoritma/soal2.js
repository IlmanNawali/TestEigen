var kalimat = "Saya sangat senang mengerjakan soal algoritma";
var kalimatHitung = 0;
var kalimatSplit = kalimat.split(" ");
for (var i = 0; i < kalimatSplit.length; i++) {
  if (kalimatSplit[i].length > kalimatHitung) {
    kalimat = kalimatSplit[i];
    kalimatHitung = kalimatSplit[i].length;
  }
}
console.log(kalimat, ":", kalimat.length, "character");
