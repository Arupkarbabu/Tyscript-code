var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
//function add(num1,num2: number)
var numresult = [];
var textResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 == "number")
        return num1 + num2;
    else if (typeof num1 === "string" && typeof num2 === "string")
        return num1 + " " + num2;
    return +num1 + +num2;
}
function printfResult(resultObj) {
    console.log(resultObj.val);
}
if (buttonElement) {
    buttonElement.addEventListener("click", function () {
        var num1 = num1Element.value;
        var num2 = num2Element.value;
        var result = add(+num1, +num2);
        numresult.push(result);
        var stringResult = add(num1, num2);
        textResult.push(stringResult);
        // const stringResult = add(num1, num2);
        //console.log(result);
        //console.log(stringResult);
        printfResult({ val: result, timestamp: new Date() });
        console.log(numresult, textResult);
    });
}
console.log(add(1, 6));
var mypromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("It worked !");
    }, 1000);
});
mypromise.then(function (result) {
    console.log(result.split("w"));
});
