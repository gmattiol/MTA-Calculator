var weekRide;  
var monthEst; 


function Calc(){
	weekRide = document.getElementById("weekRide").value;
	monthEst = weekRide * 2.75 * 4;
 	alert (" you spend " + monthEst + " every month ");
	rightChoice();
}

	function rightChoice(){
		if (monthEst > 116) {
		alert("Buy a monthly metro card!");
		} else {
			alert("Keep on swiping");
		}
}