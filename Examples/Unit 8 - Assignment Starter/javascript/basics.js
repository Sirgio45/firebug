var $ = function(id) {return document.getElementById(id); }//end $

window.onload = function () {

	//Provide answer for Question 1 here
	document.getElementById("title").innerHTML = " <h1> JavaScript Control Structures Test Document.</h1>";
	
	//////////////////////
	
	testQuestion2();
	testQuestion3();
	
}


function testQuestion2() 
{
		var firstNumber;
		var secondNumber;
		var thirdNumber;
		var number1;
		var number2;
		var number3;
		
		firstNumber = prompt("Enter First Number");
		
		secondNumber= prompt("Enter Second Number");
		
		thirdNumber= prompt("Enter Third Number");
		
		
	
		number1= parseInt(firstNumber);
		number2= parseInt(secondNumber);
		number3= parseInt(thirdNumber);
	
	//console.log("first"+" "+firstNumber+" "+"Second"+" "+secondNumber+" "+"Third"+" "+thirdNumber);
	

	
	
		var ul = document.createElement('ul');
		var li1 = document.createElement('li');
		var li2 = document.createElement('li');
		var li3 = document.createElement('li');
		
		li1.innerHTML = number1;
		li2.innerHTML = number2;
		li3.innerHTML = number3;
		
		
		
		
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		
		
		document.body.appendChild(ul);
	
	
	
	
	


}//end testQuestion2


function testQuestion3() {

}//end testQuestion3