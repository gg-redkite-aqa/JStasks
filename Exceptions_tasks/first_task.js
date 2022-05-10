try{
    console.log(a);
    let a = 3;
}catch(err){
    console.log(err.name + ": let must be defined before usage")
}

function division(dividend,divisor){
    try{
        if(divisor === 0){
            throw new Error("Division Error: Can't divide to 0")
        }console.log(dividend/divisor)
    }catch(err){
        console.log(err.message)
    }
}

division(7,0)
