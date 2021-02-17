i = 1;
j = 1;
var panjang = 8;
var lebar = 8;
var papan = "";
for (j = 1; j <= lebar; j++) {
    if (j % 2 == 1) {
        for (i = 1; i <= panjang; i++) {
            if (i % 2 == 1) {
                papan += " "
            } else {
                papan += "#"
            }
        }
    } else {
        for (i = 1; i <= panjang; i++) {
            if (i % 2 == 1) {
                papan += "#"
            } else {
                papan += " "
            }
        }

    }
    console.log(papan);
    papan = "";
}