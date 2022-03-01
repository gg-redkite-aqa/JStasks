let originalName= "Joe";
function checkName(name){
    if(name === originalName){
        alert(`hi ${name}`);
    }else if(name !== null) {
        alert("Sorry, we don't have that name")
    }
}
checkName(prompt("Please, write the name"))
