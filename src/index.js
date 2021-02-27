module.exports = 

function toReadable (n) {
    let read = {
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
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  let hundreds = '';
  let tenners = '';
  let ones = '';
  let num = String(n);

  if (num.length === 3){
    hundreds = String(read[num.split('')[0]] + ' hundred')
    if (num.split('').slice(-1, -1) == 0) {
      ones = '';
    }
  }
  
  if (num.length >= 2) {
    if (num.split('').slice(-2).join('') < 20) {
      tenners = read[num.split('').slice(-2).join('')]
      if (num.split('').slice(-2, -1) == 0) {
        tenners = '';
        ones = read[num.split('').slice(-1)]
      }

    } else {
      tenners = read[num.split('').slice(-2).join('') - num.split('').slice(-1)];
      ones = read[num.split('').slice(-1)];
      if (num.split('').slice(-1) == 0) {
        ones = '';
      }
    }

  } else if (num.length = 1) {
    num == 0 ? ones = 'zero' : ones = read[num];
  }
    return (hundreds + ' ' + tenners +' '+ones)
}
