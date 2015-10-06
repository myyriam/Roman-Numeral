$(document).ready(function(){


function getRomanNumeral(normal,numberOfElements,number,position,number2){

	if(normal===true){
		if (number2<3999 && number2>0){
			if (numberOfElements==1){
					return position.key1[number-1];
			}	else if (numberOfElements==2){
					return (position.key2[number[0]-1])+(position.key1[number[1]-1]);
				}	else if (numberOfElements==3){
						return (position.key3[number[0]-1])+(position.key2[number[1]-1])+(position.key1[number[2]-1]);
				 	}	else if (numberOfElements==4){
				 			return (position.key4[number[0]-1])+(position.key3[number[1]-1])+(position.key2[number[2]-1])+(position.key1[number[3]-1]);
				 		}
		}else{
			return "This program just calculates from 1 to 3999";
		}
	}else{
		if (number2<3999 && number2>0){
			if (numberOfElements==1){
					return separated.key1[number-1];
			}	else if (numberOfElements==2){
					return (separated.key2[number[0]-1])+(separated.key1[number[1]-1]);
				}	else if (numberOfElements==3){
						return (separated.key3[number[0]-1])+(separated.key2[number[1]-1])+(separated.key1[number[2]-1]);
				 	}	else if (numberOfElements==4){
				 			return (separated.key4[number[0]-1])+(separated.key3[number[1]-1])+(separated.key2[number[2]-1])+(separated.key1[number[3]-1]);
				 		}
		}else{
			return "This program just calculates from 1 to 3999";
		}
	}
}




var position = {key1:["I","II","III","IV","V","VI","VII","VIII","IX"], key2:["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], key3:["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], key4:["M","MM","MMM"]};
var separated = {key1:["I","II","III","IV","V","VI","VII","VIII","IX"], key2:["X--","XX--","XXX--","XL--","L--","LX--","LXX--","LXXX--","XC--"], key3:["C--","CC--","CCC--","CD--","D--","DC--","DCC--","DCCC--","CM--"], key4:["M--","MM--","MMM--"]};
	



	$("button#submit").on("click",function(){
		event.preventDefault();
		var normal= ($("#normalWay").is(":checked"));
		var number2= parseInt($("input#inputNumber").val());
		var str = ($("input#inputNumber").val());
		var number = str.split("").map(Number);
		var numberOfElements= (number.length);
		var result = getRomanNumeral(normal,numberOfElements,number,position,number2);
		$("#tabla").append("<tr><td>" + number2 + "</td><td>" + result + "</td></tr>");

		

	})



})