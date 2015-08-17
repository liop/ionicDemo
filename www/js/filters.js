'use strict';

/* Filters */

angular.module('projectFilters', [])
.filter("FloatFormat",function(){
    var format = function (number, form) {
        if(form==null){form="0.00";};
        var forms = form.split('.'), number = '' + number, numbers = number.split('.')
            , leftnumber = numbers[0].split('')
            , exec = function (lastMatch) {
                if (lastMatch == '0' || lastMatch == '#') {
                    if (leftnumber.length) {
                        return leftnumber.pop();
                    } else if (lastMatch == '0') {
                        return lastMatch;
                    } else {
                        return '';
                    }
                } else {
                    return lastMatch;
                }
        }, string;

        string = forms[0].split('').reverse().join('').replace(/./g, exec).split('').reverse().join('');
        string = leftnumber.join('') + string;

        if (forms[1] && forms[1].length) {
            leftnumber = (numbers[1] && numbers[1].length) ? numbers[1].split('').reverse() : [];
            string += '.' + forms[1].replace(/./g, exec);
        }
        return string.replace(/\.$/g, '');
        
    };
    return format;
    
})
