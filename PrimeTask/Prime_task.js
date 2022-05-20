
function checkPrime(num){
    let result;
    for(let i = 2; i <num; i++){
        if(num % i === 0){
            result = `${num} isn't prime number`;
            break;
        }else {
            result = `${num} is a prime number`;
        }
    } return result
}

