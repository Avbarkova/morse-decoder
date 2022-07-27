const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    while (expr.length%10!==0) {
        expr = '0'+expr;
    }
    let arr = [];
    for (let i=0; i<expr.length; i++) {
        arr.push(expr.slice(i, i+10));
        i=i+9;
    }
    let word = '';
    for (let j=0; j<arr.length; j++) {
        if (arr[j] !== '**********') {
            let letter = '';
            for (let n=0; n<arr[j].length; n++) {
                if (arr[j].slice(n, n+2) == '10') {
                    letter=letter+'.';
                }
                if (arr[j].slice(n, n+2) == '11') {
                    letter=letter+'-';
                }
                n=n+1;
            } 
            for (key in MORSE_TABLE) {
                if (key==letter) {
                    word = word+MORSE_TABLE[key];
                }; 
            }
        } else {
            word = word+' ';
        }
    }
return word;
}

module.exports = {
    decode
}