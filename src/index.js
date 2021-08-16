module.exports = function toReadable(number) {
  const numberString = number.toString();
  
  const numOne = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    };

  const numTwo = {
    0: 'ten',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
  };

  const numThree = {
    0: '',
    1: '',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
    };

  if (numberString === '0') {
    return 'zero';
  } else if (numberString.length === 1) {
    return `${numOne[Number(numberString[0])]}`;
  } else if (numberString.length === 2) {
    return (Number(numberString[0]) === 1 ? `${numTwo[Number(numberString[1])]}` : `${numThree[Number(numberString[0])]} ${numOne[Number(numberString[1])]}`).split('  ').join(' ').trim();
  } else if (numberString.length === 3) {
    return (Number(numberString[1]) === 1 ? `${numOne[Number(numberString[0])]} hundred ${numTwo[Number(numberString[2])]}` : `${numOne[Number(numberString[0])]} hundred ${numThree[Number(numberString[1])]} ${numOne[Number(numberString[2])]}`).split('  ').join(' ').trim();
  }
}
