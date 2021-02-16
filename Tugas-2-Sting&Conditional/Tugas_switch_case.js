var hari = 28;
var bulan = 13;
var tahun = 2014;
switch (bulan) {
    case 1: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Januari ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }


        break;
    }
    case 2: {
        if (tahun % 4 == 0) {
            if (hari < 30 && hari > 0) {
                console.log(hari + ' Februari ' + tahun);
            } else {
                console.log('Format yang anda masukkan salah !')
            }

        } else if (tahun % 4 !== 0) {
            if (hari < 29 && hari > 0) {
                console.log(hari + ' Februari ' + tahun);
            } else {
                console.log('Format yang anda masukkan salah !')
            }
        } else {
            console.log('Format yang anda masukkan salah')
        }

        break;
    }
    case 3: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Maret ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 4: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' April ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 5: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Mei ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 6: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Juni ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 7: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Juli ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 8: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Agustus ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 9: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' September ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 10: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Oktober ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 11: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' November ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    case 12: {
        if (hari < 32 && hari > 0) {
            console.log(hari + ' Desember ' + tahun);
        } else {
            console.log('Format yang anda masukkan salah !')
        }
        break;
    }
    default: { console.log('Format yang anda masukkan salah!'); }
}

