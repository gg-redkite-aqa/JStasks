function getPrimes(number){
    let primeArray = [];
    outher:
    for(let i=2; i <=number;i++){
        for(let j = 2; j < i; j++){
           if(i%j===0){
               continue outher
           }
        }primeArray.push(i);
    }return primeArray

}

console.log(getPrimes(47))