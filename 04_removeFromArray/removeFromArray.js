const removeFromArray = function(arr, ...removeValues) {

    for (let i = 0; i < removeValues.length; i++){
        arr = arr.filter(val => val !== removeValues[i])
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
