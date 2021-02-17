var i = 1;
var j = 1;
var alas = 7;
var tinggi = 7;
var pagar = "";

for (i = 1; i <= tinggi; i++) {
    for (j = 1; j <= i; j++) {
        pagar += "#";
    }
    console.log(pagar)
    pagar = "";
}