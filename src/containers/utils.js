

function safeEval(sequence) {

  let newSeq = numberSequenceToArray (sequence);
  let firstNumber = 0;
  let secondNumber = 0;
  let operator = '+';

  while (newSeq.length > 1) {
    if (isNaN(newSeq[0])) {
      console.log("start if-with: " + newSeq);
      console.log(newSeq[0]);
      operator = newSeq[0];
      secondNumber = newSeq[1];
      newSeq = newSeq.slice(2);

      firstNumber = calculate(parseInt(firstNumber), operator, parseInt(secondNumber));
      newSeq.unshift(firstNumber);
      console.log("end if-with: " + newSeq);

    } else {
      console.log("start else-with: " + newSeq);
      console.log(newSeq[0]);
      firstNumber = newSeq[0];
      operator = newSeq[1];
      secondNumber = newSeq[2];

      newSeq = newSeq.slice(3);

      firstNumber = calculate(parseInt(firstNumber), operator, parseInt(secondNumber));
      newSeq.unshift(firstNumber);
      console.log("end else-with: " + newSeq);
    }
  }

  console.log("seq final: " + newSeq);
  console.log("resultado: " + newSeq.slice(-1));
  return newSeq.slice(-1);

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
  return result

}

function numberSequenceToArray (string) {

  let array = [];
  let fullNumber = '';

  for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      array.push(fullNumber);
      array.push(string[i]);
      fullNumber = '';
    } else {
      fullNumber += string[i]
    }
  }
  array.push(fullNumber);

  return array;
}

export default safeEval;