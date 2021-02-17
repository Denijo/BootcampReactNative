var a = 1;
var b = 1;
var panjang = 8;
var lebar = 4;
var pagar = " ";

while (b <= lebar) {
    while (a <= panjang) {
        pagar += '#'
        a++;
    }
    console.log(pagar)
    pagar = ' ';
    a = 1;
    b++;
}