function numberAsWords(args) {
    var input = args[0] | 0,
        digits = [
            digitAt(input, 2),
            digitAt(input, 1),
            digitAt(input, 0)
        ],
        result = '';

    if (digits[0]) {
        result += digitToWord(digits[0]) + ' hundred';

        if (digits[1] || digits[2]) {
            result += ' and ';
        }
    }

    if (digits[1] === 1) {
        result += teens(digits[2]);
    } else {

        if (digits[1]) {
            result += tens(digits[1]) + ' ';
        }

        if (digits[2] || (!digits[2] && !(digits[0] || digits[1]))) {
            result += digitToWord(digits[2]);
        }
    }

    return result.charAt(0).toUpperCase() + result.slice(1);

    function digitAt(number, index) {
        return ((number / Math.pow(10, index)) | 0) % 10;
    }

    function digitToWord (digit) {
        switch(digit) {
            case 0: return 'zero'; break;
            case 1: return 'one'; break;
            case 2: return 'two'; break;
            case 3: return 'three'; break;
            case 4: return 'four'; break;
            case 5: return 'five'; break;
            case 6: return 'six'; break;
            case 7: return 'seven'; break;
            case 8: return 'eight'; break;
            case 9: return 'nine';
        }
    }

    function teens(lastDigit) {
        switch(lastDigit) {
            case 0: return 'ten'; break;
            case 1: return 'eleven'; break;
            case 2: return 'twelve'; break;
            case 3: return 'thirteen'; break;
            case 5: return 'fifteen'; break;
            case 8: return 'eighteen'; break;
            default: return digitToWord(lastDigit) + 'teen';
        }
    }

    function tens(digit) {
        switch(digits[1]) {
            case 2: return 'twenty'; break;
            case 3: return 'thirty'; break;
            case 4: return 'forty'; break;
            case 5: return 'fifty'; break;
            case 8: return 'eighty'; break;
            default: return digitToWord(digit) + 'ty';
        }
    }
}
