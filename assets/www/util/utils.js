/******************************************
 * Utility functions used by application
 *
 */

function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);

    if (sessionTimer.on_flag) {
        resetSessionTimer();
    }

    if ((evt.keyCode == 13) &&
        ((node.type=="text")||(node.type=="password")||(node.type=="date")||
        (node.type=="tel")||(node.type=="number")||(node.type=="email"))) {
        $("input[type='"+node.type+"']").blur();
        return false;
    }
}

/* configureInputfields provides a fallback in case the HTML field maxlength is not supported. */
function configureInputFields() {
    $('#username').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#password').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#firstname').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#lastname').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#phoneno').keypress(function(e) {
        if ($(this).val().length > 14) { e.preventDefault(); }
    });

    $('#email').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#webusername').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#mobilepin').keypress(function(e) {
        if ($(this).val().length > 16) { e.preventDefault(); }
    });

    $('#confirmpin').keypress(function(e) {
        if ($(this).val().length > 16) { e.preventDefault(); }
    });

    $('#webpwd').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#passcode').keypress(function(e) {
        if ($(this).val().length > 16) { e.preventDefault(); }
    });

    $('#protocol').keypress(function(e) {
        if ($(this).val().length > 10) { e.preventDefault(); }
    });

    $('#ip').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#port').keypress(function(e) {
        if ($(this).val().length > 5) { e.preventDefault(); }
    });

    $('#sendnumber').keypress(function(e) {
        if ($(this).val().length > 14) { e.preventDefault(); }
    });

    $('#sendamount').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });

    $('#request_number').keypress(function(e) {
        if ($(this).val().length > 14) { e.preventDefault(); }
    });

    $('#requestamount').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });

    $('#billalias').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#billrefno').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#billamount').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });

    $('#topup_number').keypress(function(e) {
        if ($(this).val().length > 14) { e.preventDefault(); }
    });

    $('#nickname').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#acctno').keypress(function(e) {
        if ($(this).val().length > 23) { e.preventDefault(); }
    });

    $('#bankcode').keypress(function(e) {
        if ($(this).val().length > 15) { e.preventDefault(); }
    });

    $('#branchcode').keypress(function(e) {
        if ($(this).val().length > 15) { e.preventDefault(); }
    });

    $('#acctholder').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#cardnickname').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#cardno').keypress(function(e) {
        if ($(this).val().length > 16) { e.preventDefault(); }
    });

    $('#cardcvv').keypress(function(e) {
        if ($(this).val().length > 6) { e.preventDefault(); }
    });

    $('#cardholder').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#loadamount').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });

    $('#loadtext').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#unloadamount').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });

    $('#unloadtext').keypress(function(e) {
        if ($(this).val().length > 80) { e.preventDefault(); }
    });

    $('#threshold').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });

    $('#old_pin').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#new_pin').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#confirmnew_pin').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#blockpin').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#new_pin_login').keypress(function(e) {
        if ($(this).val().length > 32) { e.preventDefault(); }
    });

    $('#prepaidamount').keypress(function(e) {
        if ($(this).val().length > 8) { e.preventDefault(); }
    });
}

function validation(value, type, size) {
    var RegEx;

    if (gui_version) return true;   /* skip the validation for demo mode */

    if (value === null) return false;

    switch(type) {
    case "amount":
        if (value == 0) return false;
        RegEx = /^\d*[0-9](\.\d{1,2})?$/;
        break;
    case "phoneno":
        RegEx = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        break;
    case "email":
        RegEx =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
    case "number":
        RegEx = /^\d*[0-9]$/;
        break;
    case "date":
        RegEx = /^\d{4}-([1-9]|0[1-9]|1[0,1,2])(-([1-9]|0[1-9]|[0,1,2][0-9]|3[0,1]))?$/;
        var today = new Date(); /* take today's date and make sure the time is ignored */
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0,0);
        var splitDate = value.split("-");  //Split the value and get day,month and year from it
        var year = splitDate[0];
        var month = splitDate[1];
        var day = splitDate.length == 3 ? splitDate[2] : 0;

        if (day > checkDaysInMonth(month,year)) return false;

        var testdate = new Date(year, (month -1) , day, 0, 0, 0).getTime();
        if (testdate < today.getTime() ) return false;
        break;
    case "string":
        RegEx = /^\S+$/;
        break;
    case "creditcard":
        // based on http://en.wikipedia.org/wiki/Luhn
        // accept only spaces, digits and dashes
        if (/[^0-9 -]+/.test(value))
            return false;

        if(value.length < 16)
            return false;

        var nCheck = 0,
        nDigit = 0,
        bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n);
            var nDigit = parseInt(cDigit, 10);
            if (bEven) { if ((nDigit *= 2) > 9) nDigit -= 9; }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
        break;

    case "billname":
        if (value.length < 3) return false;
    case "length":
        if ((value != "" ) && (value.length < size))
            return false;
        else
            return true;
    /* .. fall through ..*/
    case "specialchars" :
        RegEx = /^([^\s][a-zA-Z0-9_\s\-]*)$/; break;

    case "empty" :
        RegEx = /[^\s]/; break;

    case "onlynumber":
        RegEx = /^(\s*|\d*[0-9])$/;
        break;

    case "text":
    default:
        RegEx = /^((\S+)(\s*))+$/; break;
    }
    if( !RegEx.test(value) )
        return false;
    else
        return true;
}

function msisdnformat(phoneno) {
    return phoneno.charAt(0) == '+' ? phoneno : '+' + phoneno;
}

function roundNumber(num) {
    var dec = 3;
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
}

function cleanString (str) {
    // strips spaces, dashes, brackets etc. from input string
    return str.replace(/[\(\)\.\-\s,]/g, "");
}

function checkDaysInMonth(month,year) {
    var daysInMonth = new Date(year, month, 0);
    return daysInMonth.getDate();
}

function getCurrentDate() {
    var currentDate = new Date();
    var thisMonth = currentDate.getMonth()+1;
    var thisDay = currentDate.getDate();
    var thisYear = currentDate.getFullYear();

    return thisYear+'-'+pad2(thisMonth)+'-'+pad2(thisDay);
}

function pad2(number) {
     return (number < 10 ? '0' : '') + number;
}

/**
 * @description For sorting of array based on object's property
 * @param a first element
 * @param b next element
 * @returns sort order in form of number
 */
function dynamicSort(property) {
    return function (a,b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}
/**
* Function used to clear the input on request.
*/
function clearTextInput() {
    $(":text, :password").val('');
}

/**
* Function used to find and get the array of child object by key value identification.
*/
function getArrayOfObjects(objstring, objindex, objval) {
    var arrobject = [];
    for (var i in objstring) {
        if (!objstring.hasOwnProperty(i)) continue;
        if (typeof objstring[i] == 'object') {
            arrobject = arrobject.concat(getArrayOfObjects(objstring[i], objindex, objval));
        } else if (i == objindex && objstring[objindex] == objval) {
            arrobject.push(objstring);
        }
    }
    return arrobject;
}

/**
* Get date format from number string
*/
function getDateFormatOfSring(datestring) {
    var d = new Date(datestring);
    var dt = d.getMonth()+1 + "-" + d.getDate() + "-" + d.getFullYear();
    return dt;
}