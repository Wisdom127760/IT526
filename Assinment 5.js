//using the Sieve of Eratosthenes algorithm

//let the prime number start from 2 
var sieve_of_eratosthenes = function(num) {

    var  upperLimit = Math.sqrt(num) /* convert the user input to upper limit. */, array = [], output = []; 

    for (var x = 0; x < n; x++) {
        array.push(true);
    }
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
}