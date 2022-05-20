
let myArray = [10,20,30,40];
function getIndex(array,number){
    return array.findIndex(item => item === number)
}
console.log(getIndex(myArray,30))
