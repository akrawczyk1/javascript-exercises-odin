const reverseString = function(s) {
    let returnString = "";

    for (let i = s.length; i >= 0; i--){
        returnString += s.charAt(i);
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
