

function safeEval(sequence) {

  if (hasPercentage(sequence)) {
    console.log(" if - HasPerc: " + hasPercentage(sequence));
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

      firstNumber = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
      newSeq.unshift(String(firstNumber));

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

  return result.toPrecision(3)

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

function normalizePercentage(string) {

  let newSeq = string;
  console.log("before while - newSeq: " + newSeq);

  while (newSeq.indexOf("%") !== -1) {
    let newPartial = "";
    let partialSeq = newSeq.slice(0, newSeq.indexOf("%")+1);
    let endOfSeq = newSeq.slice(newSeq.indexOf("%")+1);

    let percBlock = getPerc(partialSeq);
    console.log("after - percBlock: " + percBlock);
    console.log("after - partialSeq: " + partialSeq);
    let seqSplit = partialSeq.split(percBlock);
    console.log("after - seqSplit: " + seqSplit);
    newPartial = seqSplit[0]+convertPerc(percBlock);

    newSeq= newPartial + endOfSeq;
    console.log("in while - newSeq: " + newSeq);
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
  console.log("in conv - newPerc: " + newPerc);
  return "×"+newPerc;
}

function getPerc(partial) {
  let percBlock="";
  console.log("start - newPartial: " + partial);
  
  let i = partial.length -2
  do {
    percBlock = partial[i] + percBlock;
    i -= 1;
  } while (!isNaN(partial[i]));

  percBlock = partial[i]+percBlock + "%";
  
  console.log("end - newPartial: " + percBlock);
  return percBlock;
}



export default safeEval;