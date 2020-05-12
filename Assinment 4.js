function Mtd1_findPrime(num) {
	var count = 0;
	var primenumz = [];
	var limit = Math.sqrt(num);
	for(var a = 2; a < value; a++) {
		primenumz[a] = true;
		
    }
	for(var b = 2; b < limit; b++) {
        if(primenumz[b] === true) {
			count++;
            for(var c = b * b; c < num; c += b) {
                primenumz[c] = false;
            }
        }
	}
	
	for(var i = 2; i < num; i++) {
        if(primenumz[i] === true) {
			console.log(i + " " + primenumz[i]);
			
        }
    }
	console.log("Total: " + count);
}
//Using the fermat testing
function getRandomNum(min,max) { 
	min = Math.ceil(min);
	max = Math.ceil(max);
	return Math.floor(Math.random()*(max-min))+min;
}
//get the greatest common divisor
function getGCD(a,b) { 
	var tmp;
	while (b !== 0) {
		tmp = b;
		b = a%b;
		a = tmp;
	}
	return a;
}