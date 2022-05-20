function typeChecker(arg){
    console.log(typeof(arg))
}

typeChecker(50)
typeChecker(50n)
typeChecker("50")
typeChecker(true)
typeChecker(null)
typeChecker(undefined)
typeChecker(Symbol())
typeChecker(typeChecker)

