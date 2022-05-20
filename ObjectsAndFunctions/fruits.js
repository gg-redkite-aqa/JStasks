let apples;
let pears;

function totalFruits(fruit1, fruit2) {
    return ("Total amount of fruits is " + (fruit1 + fruit2))
}

while (true) {
    apples = prompt("Please, write the count of apples: ")
    pears = prompt("Please, write the count of pears: ");
    if ((parseInt(apples) || apples === "0") && (parseInt(pears) || pears === "0")) {
        apples = Number(apples)
        pears = Number(pears);
        alert(totalFruits(apples, pears));
        break;
    } else if (apples === null || pears === null) {
        break;
    } else {
        alert("Please, provide numeric value!");
    }
}
