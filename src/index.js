module.exports = function toReadable (number) {
    const count = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety',
        100 : 'hundred'
        };
        if (number < 20) {
            return count[number]
          } else if (number >= 20 && number < 100) {
            if (number % 10 === 0) {
              return count[number]
            }
            return count[number - number % 10] + ' ' + count[number % 10]
          } if (number >= 100 && number < 1000) {
              if (number % 100 === 0) {
              return count[String(number).split('')[0]] + ' hundred'
          } else if (number % 10 === 0) {
              return count[String(number).split('')[0]] + ' hundred ' + count[String(number).split('').splice(1,2).join('')];
          } else if (+String(number).split('').splice(1,2).join('') < 20) {
            return count[String(number).split('')[0]] + ' hundred ' + count[+String(number).split('').splice(1,2).join('')];
          } else { 
              return count[String(number).split('')[0]] + ' hundred ' + count[+String(number).split('').splice(1,1).join('') * 10] + ' ' + count[String(number).split('').splice(2,1).join('')];
            }
          }
        }
