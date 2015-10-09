$(document).ready(function(){


function getRomanNumeral(normal,numberOfElements,number,position,number2,separatedOp){

		if (normal===false && separatedOp===false)	{
			alert ("Please check and option!");
			return "No option selected for the number to be displayed";
		}else if (normal===true && separatedOp===true){
			alert ("Please check just one option");
			return"";
		}

		if(normal===true){
			if (number2<3999 && number2>0){
				if (numberOfElements==1){
						return position.key1[number];
				}else if (numberOfElements==2){	
						return (position.key2[number[0]])+(position.key1[number[1]]);
				}else if (numberOfElements==3){
						return (position.key3[number[0]])+(position.key2[number[1]])+(position.key1[number[2]]);
				}else if (numberOfElements==4){
					 	return (position.key4[number[0]-1])+(position.key3[number[1]])+(position.key2[number[2]])+(position.key1[number[3]]);				 		
					}
			}else{
				return "This program just calculates from 1 to 3999";
			}
		}if(separatedOp===true){
			if (number2<3999 && number2>0){
				if (numberOfElements==1){
						return separated.key1[number];
				}	else if (numberOfElements==2){
							return (separated.key2[number[0]])+(separated.key1[number[1]]);
					}else if (numberOfElements==3){
							return (separated.key3[number[0]])+(separated.key2[number[1]])+(separated.key1[number[2]]);
					}else if (numberOfElements==4){
					 			return (separated.key4[number[0]-1])+(separated.key3[number[1]])+(separated.key2[number[2]])+(separated.key1[number[3]]);  
					}
			}else{
				return "This program just calculates from 1 to 3999";
			}
		}
}



var position = {key1:["","I","II","III","IV","V","VI","VII","VIII","IX"], key2:["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], key3:["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], key4:["M","MM","MMM"]};
var separated = {key1:["","-I","-I-I","-I-I-I","-I-V","-V","-V-I","-V-I-I","-V-I-I-I","-I-X"], key2:["","X","--XX","--XXX","--XL","--L","--L-X","--L-X-X","--L-X-X-X","--X-C"], key3:["","--C","--C-C","--C-C-C","--C-D","--D","--DC","--DCC","--DCCC","--CM"], key4:["--M","--M-M","--M-M-M"]};
	



	$("button#submit").on("click",function(){
		event.preventDefault();
		var normal= ($("#normalWay").is(":checked"));
		var separatedOp= ($("#separated").is(":checked"));
		var number2= parseInt($("input#inputNumber").val());
		var str = ($("input#inputNumber").val());
		var number = str.split("").map(Number);
		var numberOfElements= (number.length);
		var result = getRomanNumeral(normal,numberOfElements,number,position,number2,separatedOp);
		$("#tabla").append("<tr><td>" + number2 + "</td><td>" + result + "</td></tr>");

		

	})



})