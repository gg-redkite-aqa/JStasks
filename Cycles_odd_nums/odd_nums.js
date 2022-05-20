
function getOdds(number){
    let oddArray = [];
    for(let i = 1; i <= number; i++){
        if(i%2 !==0 ){
            oddArray.push(i)
        }
    }return oddArray
}

console.log(getOdds(20))
