console.log("--- Soal No 1 ---")
console.log("")

console.log("Release 0")
console.log("")
class Animal {
    constructor(name){
        this._name = name
        this._legs = '4'
        this._cold_blooded = false
    }
    get name(){
        return this._name
    }
    get legs(){
        return this._legs
    }
    get cold_blooded(){
        return this._cold_blooded
    }
    set legs(jumlah){
        return this._legs = jumlah;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("--------")
console.log("")
console.log("Release 1")
console.log("")

class Ape extends Animal{
    constructor(name, jumlah){
        super(name)
        this._legs = jumlah
    }
    yell(){
        return console.log("Auooo")
    }
}
class Frog extends Animal{
    constructor(name, jumlah){
        super(name)
    }
    jump(){
        return console.log("hop hop")
    }

}
 
var sungokong = new Ape("kera sakti", 2)
sungokong.yell() // "Auooo"
console.log(sungokong.legs)
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

console.log("")
console.log("--- Soal No 2 ---")
console.log("")


// function Clock({ template }) {
  
//     var timer;
  
//     function render() {
//       var date = new Date();
  
//       var hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       var mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       var secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       var output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  


class Clock {
    constructor({template}){
        this.template = template

    }
    render(){
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        
        var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

        console.log(output);
    }
    stop(){
        clearInterval(timer);
    }
    start(){
        this.render();
        this.timer = setInterval( () =>this.render(), 1000);
    }
 }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();  



