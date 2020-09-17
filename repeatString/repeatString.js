const number = Math.floor(Math.random() * 1000);
const repeatString = function(string, times) {
    if(Math.sign(times) == -1 && times != 0){
        return "ERROR";
    }
    else{
        let strCounter = '';
    for(let i = 0; i < times; i++){
        strCounter += string;
    }
    return strCounter;
    }
    
}
console.log(repeatString('hey', number));
module.exports = repeatString
