
function calculateSeq(sequence, input) {

  let oldSeq = sequence;
  let lastInput = input;

  let lastElem = sequence.slice(-1);
  let seqLeng = sequence.length;
  let newSeq = '';
  const validChars = ["C", "%", "÷", "/", "⇽", "Backspace", "7", "8", "9", "×", "x", "*", "4", "5", "6", "-",  "1", "2", "3", "+", "+/-", "0", ".", "=", "Enter"]
  const OperatorList = ["%", "÷", "*", "×", "-", "+", "x", "/"];
  const specialChar = ["C", "Backspace", "Enter", "⇽", "="];

  let lastElemIsOperator = OperatorList.includes(lastElem);
  let inputIsOperator = OperatorList.includes(lastInput);

  if (isValidInput(lastInput)) {
    if (lastInput === "=" || lastInput === "Enter") {
      newSeq = safeEval(oldSeq);
    } else if (lastInput === "C") {
      newSeq = '';
    } else if (lastInput === "⇽" || lastInput === "Backspace") {
      newSeq = oldSeq.slice(0, -1);
    } else if (lastInput === "+/-") {
      let oposite = (-1)*(parseInt(oldSeq));
      newSeq = oposite.toString();
    } else if ((inputIsOperator) && (lastElemIsOperator)) {
      newSeq = oldSeq.slice(0, -1) + lastInput;
    } else {
      newSeq = oldSeq + lastInput;  
    }
  } else {
    newSeq = oldSeq;  
  }

  function isValidInput(input) {
   let valid =  (specialChar.includes(input)) ? true : (seqLeng < 10)&&(validChars.includes(input));

    return valid;
  }

  return newSeq;
}




function safeEval(sequence) {

  if (hasPercentage(sequence)) {
    sequence = normalizePercentage(sequence);
  };

  let newSeq = numberSequenceToArray(sequence);
  let firstNumber = 0;
  let secondNumber = 0;
  let operator = '+';

  while (newSeq.length > 1) {
    if (!isNaN(newSeq[0]) || newSeq[0].includes(".")) {
      firstNumber = newSeq[0];
      operator = newSeq[1];
      secondNumber = newSeq[2];

      newSeq = newSeq.slice(3);

      firstNumber = calculate(firstNumber, operator, secondNumber);
      newSeq.unshift(String(firstNumber));

    } else {
      operator = newSeq[0];
      secondNumber = newSeq[1];
      newSeq = newSeq.slice(2);

      firstNumber = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
      newSeq.unshift(String(firstNumber));
    }
  }

  return String(newSeq[0]);

};

function calculate(firstNumber, operator, secondNumber) {


  let result = 0;

  firstNumber = isFloat(firstNumber) ? parseFloat(firstNumber) : parseInt(firstNumber);
  secondNumber = isFloat(secondNumber) ? parseFloat(secondNumber) : parseInt(secondNumber);

  switch(operator) {
    case '+':
      result = firstNumber + secondNumber
      break
    case '-':
      result = firstNumber - secondNumber
      break
    case '×':
      result = firstNumber * secondNumber
      break
    case 'x':
      result = firstNumber * secondNumber
      break
    case '*':
      result = firstNumber * secondNumber
      break
    case '÷': 
      result = firstNumber / secondNumber
      break
    case '/': 
      result = firstNumber / secondNumber
      break
    default:
        console.log("error!")
  }

  let isResultFloat = (isFloat(firstNumber.toString()) || isFloat(secondNumber.toString()));


  let finalResult = isResultFloat ? result.toPrecision(3) : result;
  return finalResult;
}

function numberSequenceToArray (string) {

  let array = [];
  let fullNumber = string[0];

  if (isNaN(string[0])) {
    array.push("0");
    array.push(fullNumber);
    fullNumber = '';
  }

  for (let i = 1; i < string.length; i++) {
    if (!isNaN(string[i]) || string[i]===".") {
      fullNumber += string[i]
    } else {
      array.push(fullNumber);
      array.push(string[i]);
      fullNumber = '';
    }
  }
  array.push(fullNumber);
  return array;
}

function hasPercentage(string) {
  return string.includes("%");
}

function isFloat(string) {
  return string.includes(".")
}

function normalizePercentage(string) {

  let newSeq = string;

  while (newSeq.indexOf("%") !== -1) {
    let newPartial = "";
    let partialSeq = newSeq.slice(0, newSeq.indexOf("%")+1);
    let endOfSeq = newSeq.slice(newSeq.indexOf("%")+1);

    let percBlock = getPerc(partialSeq);
    let seqSplit = partialSeq.split(percBlock);
    newPartial = seqSplit[0]+convertPerc(percBlock);

    newSeq= newPartial + endOfSeq;
  }

  return newSeq;
}

function convertPerc(string) {

  let pureNum = string.slice(1, -1);
  let newStr = "";
  let newPerc = "";

  if (string[0]==="+") {
    newStr = "100+"+pureNum+"/100"
  } else {
    newStr = "100-"+pureNum+"/100"   
  }

  newPerc = safeEval(newStr);
  return "×"+newPerc;
}

function getPerc(partial) {
  let percBlock="";
  
  let i = partial.length -2
  do {
    percBlock = partial[i] + percBlock;
    i -= 1;
  } while (!isNaN(partial[i]));

  percBlock = partial[i]+percBlock + "%";
  
  return percBlock;
}


export default calculateSeq;