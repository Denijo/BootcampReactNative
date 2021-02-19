console.log("###### Soal No 1 #######")
console.log("")


function range(startNum, finishNum) { 
    var rangeArr = [];

    if (startNum > finishNum) { 
        var rangeLength = startNum - finishNum + 1;
         for (var i = 0; i < rangeLength; i++) { 
             rangeArr.push(startNum - i) 
            } 
        } else if (startNum < finishNum) { 
            var rangeLength = finishNum - startNum + 1; 
            for (var i = 0; i < rangeLength; i++) { 
                rangeArr.push(startNum + i) 
            } 
        } else if (!startNum || !finishNum) { 
            return -1 
        } return rangeArr 
}

    console.log(range(1, 10)) 
    console.log(range(1))
    console.log(range(11,18)) 
    console.log(range(54, 50)) 
    console.log(range())

console.log("")
console.log("###### Soal No 2 #######")
console.log("")

function rangeWithStep(startNum1, finishNum1, step1) {

    var rangeArr1=[];
    
    if (startNum1 > finishNum1){
        var current = startNum1;
        for(i = 0 ; current >= finishNum1 ; i++){
            rangeArr1.push(current)
            current-=step1

        }

    }else if(startNum1 <finishNum1){
        var current = startNum1;
        for(i = 0 ; current <= finishNum1; i++){
            rangeArr1.push(current)
            current+=step1
        }

    }else if(!startNum1||!finishNum1||step1){
        return -1;
    }
    return rangeArr1;
}

console.log(rangeWithStep(1, 10, 2)) 
console.log(rangeWithStep(11, 23, 3)) 
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4)) 


console.log("")
console.log("###### Soal No 3 #######")
console.log("")

function sum(startNum, finishNum, step){
    var rangeArr =[]
    var distance;
    
    if(!step){
        distance =1
    }else{
        distance=step
    }

    if(startNum > finishNum){
        var current1=startNum;
        for( var i = 0 ; current1 >= finishNum; i++){
            rangeArr.push(current1)
            current1 -=distance
        }
    }else if (startNum < finishNum){
        var current1=startNum;
        for( var i = 0 ; current1 <= finishNum; i++){
            rangeArr.push(current1)
            current1 +=distance
        }
    }else if (!startNum && !finishNum && !step){
        return 0
    }else if(startNum){
        return startNum
    }
    var total = 0;
    for (var i = 0; i<rangeArr.length; i++){
        total=total+rangeArr[i]
    } 
    return total
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("")
console.log("###### Soal No 4 #######")
console.log("")
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(data){
    var datalength = data.length
    for(var i=0 ; i<datalength; i++){
        var id ="Nomor Id : " +data[i][0]
        var nama = "Nama Lengkap : "+data[i][1]
        var ttl = "TTL : "+data[i][2]+ ", "+data[i][3]
        var hobi = "Hobi : "+data[i][4]

        console.log(id)
        console.log(nama)
        console.log(ttl)
        console.log(hobi)
    }
}

dataHandling(input)


console.log("")
console.log("###### Soal No 5 #######")
console.log("")
function balikKata(kata){
    var input_kata=" ";
    for(var i= kata.length-1; i >=0; i-- ){
        input_kata += kata[i]

    }
    return input_kata

}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("")
console.log("###### Soal No 6 #######")
console.log("")
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 
dataHandling1(input)
function dataHandling1(data){
    var newData = data
    var newName = data [1]+"Elsharawy"
    var NewProvince = "Provinsi" +data[2]
    var gender = "Pria"
    var institusi = "SMA International Metro"

    newData.splice(1, 1, newName)
    newData.splice(2, 1, NewProvince)
    newData.splice(4, 1, gender, institusi)

    var arrDate = data[3]
    var newDate = arrDate.split('/')
    var monthNum =newDate[1]
    var monthname = " "

    switch(monthNum){
        case "01":
            monthname="Januari"
            break;

        case "02":
            monthname="Februari"
            break;

        case "03":
            monthname="Maret"
            break;

        case "04":
            monthname="April"
            break;

        case "05":
            monthname="Mei"
            break;

        case "06":
            monthname="Juni"
            break;

        case "07":
            monthname="Juli"
            break;

        case "08":
            monthname="Agustus"
            break;

        case "09":
            monthname="September"
            break;

        case "10":
            monthname="Oktober"
            break;

        case "11":
            monthname="November"
            break;

        case "12":
            monthname="Desember"
            break;

        default:
            break;
            
    }
    var dateJoin = newDate.join("-")
    var dateArr = newDate.sort(function(value1,value2){
        value2-value1
    })
    var editName =newName.slice(0,14)
    console.log(newData)

    console.log(monthname)
    console.log(dateArr)
    console.log(dateJoin)
    console.log(editName)


        
       
}