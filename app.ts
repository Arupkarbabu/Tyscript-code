const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;
//function add(num1,num2: number)

const numresult: Array<number> = [];
const textResult: string[] = [];

type NumOrString = number | string;
type result = { val: number; timestamp: Date };

interface resultObj {
  val: number;
  timestamp: Date;
}

function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 == "number") return num1 + num2;
  else if (typeof num1 === "string" && typeof num2 === "string")
    return num1 + " " + num2;
  return +num1 + +num2;
}
function printfResult(resultObj: { val: number; timestamp: Date }) {
  console.log(resultObj.val);
}

if (buttonElement) {
  buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numresult.push(result as number);
    const stringResult = add(num1, num2);
    textResult.push(stringResult as string);
    // const stringResult = add(num1, num2);
    //console.log(result);
    //console.log(stringResult);
    printfResult({ val: result as number, timestamp: new Date() });
    console.log(numresult, textResult);
  });
}
console.log(add(1, 6));
const mypromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It worked !");
  }, 1000);
});

mypromise.then((result) => {
  console.log(result.split("w"));
});
