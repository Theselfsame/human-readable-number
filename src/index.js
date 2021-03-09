module.exports = function toReadable (number) {
  if (number == 0) {
      return "zero";
  }
  let str = String(number);
  let digit = {
      '0': "",
      '1': "one",
      '2': "two",
      '3': "three",
      '4': "four",
      '5': "five",
      '6': "six",
      '7': "seven",
      '8': "eight",
      '9': "nine",
     '10': "ten",
     '11':	"eleven"	,
     '12':	"twelve"	,
     '13':	"thirteen"	,
     '14':	"fourteen"	,
     '15':	"fifteen"	,
     '16':	"sixteen"	,
     '17':	"seventeen"	,
     '18':	"eighteen"	,
     '19':	"nineteen"	,
  };
  let ten = {
    '0': "",
    '2':"twenty"	,
    '3':"thirty"	,
    '4':"forty"	,
    '5':"fifty"	,
    '6':"sixty"	,
    '7':"seventy" ,
    '8':"eighty"	,
    '9':"ninety"	,
  };
  let hundred = {
    '1':	"one hundred"	,
    '2':	"two hundred"	,
    '3':	"three hundred"	,
    '4':	"four hundred"	,
    '5':	"five hundred"	,
    '6':	"six hundred"	,
    '7':	"seven hundred"	,
    '8':	"eight hundred"	,
    '9':	"nine hundred"	,
  };
  if (number > 0 && number < 20) {
      return digit[str];
  } else if (number > 19 && number < 100) {
      return (ten[str[0]] + " " + digit[str[1]]).trim();
  } else if (str.length == 3 && str[1] < 2) {
      let sumIndex = +(str[1] + str[2]);
      sumIndex = String(sumIndex);
      return (hundred[str[0]] + " " + digit[sumIndex]).trim();
  } else {
      return (hundred[str[0]] + " " + ten[str[1]] + " " + digit[str[2]]).trim();
  }
}
