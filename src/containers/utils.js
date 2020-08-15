

function safeEval(sequence) {

  let newSeq = numberSequenceToArray (sequence);
  let firstNumber = 0;
  let secondNumber = 0;
  let operator = '+';

  while (newSeq.length > 1) {
    if (!isNaN(newSeq[0]) || newSeq[0].includes(".")) {
      console.log("start if-with: " + newSeq);
      console.log(newSeq[0]);
      firstNumber = newSeq[0];
      operator = newSeq[1];
      secondNumber = newSeq[2];

      newSeq = newSeq.slice(3);

      firstNumber = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
      newSeq.unshift(String(firstNumber));
      console.log("end if-with: " + newSeq);

    } else {
      console.log("start else-with: " + newSeq);
      console.log(newSeq[0]);
      operator = newSeq[0];
      secondNumber = newSeq[1];
      newSeq = newSeq.slice(2);

      firstNumber = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
      newSeq.unshift(String(firstNumber));
      console.log("end else-with: " + newSeq);
    }
  }

  console.log("seq final: " + newSeq);
  console.log("resultado: " + newSeq.slice(-1));
  return String(newSeq[0]);

};

function calculate(firstNumber, operator, secondNumber) {
  let result = 0;

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
  return result.toPrecision(4)

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
  console.log("array: " + array)
  return array;
}

export default safeEval;