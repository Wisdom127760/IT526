function findPrime($input) {
	
	function isPrime($x) {
	 
	  var $temp = new Array($x);
  
	  for (var $i = 2; $i < $x; $i++) {
		
		if ($x % $i == 0) {
		
		  $temp[$i] = false;
		} else {
		  
		  $temp[$i] = true;
		}
	  }
  
	  for (var $y = 2; $y < $x; $y++) {
		
		if ($temp[$y] == false) {
		  
		  return false;
		}else
	  
	  return true;
	}
	var $count = 0;
	$count++;
  }
}