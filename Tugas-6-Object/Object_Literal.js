console.log("--- Soal No 1 ---")
console.log('')
var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)


function arrayToObject(arr) {
    var n = arr.length;
    for(var i=0; i<n ; i++){
        var obj = {}
        var birth = arr[i][3];
        var varAge;
        var now = new Date()
        var thisYear = now.getFullYear() // 2020 (tahun sekarang)
        if(birth > thisYear){
            varAge ="invalid birth year"
        }else if(birth>0){
            varAge = thisYear-birth
        }else{
            varAge ="invalid birth year"
        }
        obj.firstName = arr[i][0],
        obj.lastName = arr[i][1],
        obj.gender = arr[i][2],
        obj.age = varAge

        var print = (i+1) + '. '+ obj.firstName + ' ' + obj.lastName+ ' : ' 
        console.log(print)
        console.log(obj)
    }
    
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 

 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 


console.log("")
console.log("--- Soal No 2 ---")
console.log("")

function shoppingTime(memberId, money) {
  if(!memberId){
    return "Mohon maaf, toko x  hanya berlaku untuk member saja"
  }else if(money<50000){
    return "Mohon maaf, uang anda tidak cukup"
  }else{
      var obj = {}
      var moneyChange = money;
      var purchaselist = [];
      var sepatuStacattu = "sepatu stacattu";
      var bajuZoro = "baju zoro";
      var brand_HN = "Baju Brand H&N"
      var sweaterUnikloh = "Sweater Unikloh";
      var casingHP ="casing handphone";
      var check =0

      for(var i=0; moneyChange >= 50000 && check ==0; i++){
          if(moneyChange>=1500000){
              purchaselist.push(sepatuStacattu)
              moneyChange -=1500000
          }else if(moneyChange>=500000){
              purchaselist.push(bajuZoro)
              moneyChange -=500000
          }else if(moneyChange>=250000){
              purchaselist.push(brand_HN)
              moneyChange -=250000
          }else if(moneyChange>=175000){
              purchaselist.push(sweaterUnikloh)
              moneyChange -=175000
          }else if(moneyChange>=50000){
            if (purchaselist.length != 0) {
                for (var j = 0; j <= purchaselist.length - 1; j++) {
                  if (purchaselist[j] == casingHP) {
                    check += 1
                  }
                }
                if (check == 0) {
                    purchaselist.push(casingHP)
                    moneyChange -= 50000
                  }
                } else {
                    purchaselist.push(casingHP)
                  moneyChange -= 50000
                }    
            }
      }
      obj.memberId = memberId
      obj.money = money
      obj.listPurchased = purchaselist
      obj.changeMoney = moneyChange
      return obj
  }
}
 
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));


console.log(shoppingTime('', 2475000)); 
console.log(shoppingTime('234JdhweRxa53', 15000)); 
console.log(shoppingTime()); 

console.log("")
console.log("--- Soal No 3 ---")
console.log("")

function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrOutput = []
    if(arrPenumpang.length<=0){
        return []
    }

    for(var i = 0 ; i<arrPenumpang.length; i++){
        var obj = {}
        var asal = arrPenumpang[i][1]
        var tujuan = arrPenumpang[i][2]
        
        var indexAsal;
        var indexTujuan;
    for(var j = 0 ; j<rute.length; j++){
        if(rute[j]== asal){
            indexAsal=j
        }else if(rute[j]==tujuan){
            indexTujuan=j
        }
    }
    var bayar = (indexTujuan-indexAsal) * 2000
    
    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = asal
    obj.tujuan = tujuan
    obj.bayar = bayar

    arrOutput.push(obj)
    }
    return arrOutput
  }


   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

   
  console.log(naikAngkot([])); 