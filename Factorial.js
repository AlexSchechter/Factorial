function calculations() {
	
	var myInput = +document.getElementById('numberInput').value;
	var myFactorial = myInput;

	
	if (myFactorial < 0 || Math.floor(myFactorial) !== myFactorial) {
		alert("The number has to be non-negative and an integer, please input again")
		myReset();
		return;
	}
	
	if (myFactorial > 0) {
		
		for (n = myFactorial; n > 1; n--){
			myFactorial = myFactorial * (n-1);
		}
	}
	else (myFactorial = 1);
	
	document.getElementById('result').innerHTML = "The factorial of " + myInput + " is " + myFactorial;
}


function myReset() {
	document.getElementById('numberInput').value = "";
	document.getElementById('result').innerHTML = "";
}