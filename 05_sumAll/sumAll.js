const sumAll = function(min, max) {   

    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }

    if (min < 0 || max < 0){
        return "ERROR";
    }

    // This is supposed to be a loops exercise so I used a loop
    // You could use the sum of an arithmetic sequence formula:
    //
    // This formula takes the number of terms (n) and multiplies it by
    // the average of the first and last terms.
    //
    // This has the advantage of not needing to sort max and min; they can be in any order
    //
    // n = abs(max-min) + 1
    // sum[min -> max] = (n) * (max + min) / 2

    if (min > max){
        [min, max] = [max, min];
    }

    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
