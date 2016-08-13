
 function lunch(){
	var message = "have a coke";
    var money = prompt("how much money do you have", "0");
	var coke =1;
	var fanta =0;
	var pran = 0;
	
	if (money == 10){
		
		if(coke >0){
		 document.getElementById("coke").style.visibility="visible";
		 message ="drink a coke"
		 document.getElementById("demo1").innerHTML = message;
			
		}else if( coke <1 && fanta >0){
			 document.getElementById("fanta").style.visibility="visible";
			message ="we dont have coke have a fanta"
		 document.getElementById("demo1").innerHTML = message;
		}else if (coke<1 && fanta<1 && pran>0){
			 document.getElementById("pran").style.visibility="visible";
			 message ="we dont have coke or fanta have a pran instead"
		 document.getElementById("demo1").innerHTML = message;
		}else{
			 document.getElementById("storeclosed").style.visibility="visible";
			 message ="dukan khali"
		 document.getElementById("demo1").innerHTML = message;
		}
		
	} 
	else if(money < 10 && money >0){
		 document.getElementById("singara").style.visibility="visible";
		
		 message ="eat a singara"
		 document.getElementById("demo1").innerHTML = message;
	}
	else if (money >10){
		 document.getElementById("biriani").style.visibility="visible";
		 message ="take a biriani"
		 document.getElementById("demo1").innerHTML = message;
	}
	else{
		 document.getElementById("emptypocket").style.visibility="visible";
		 message ="taka nai barit jao"
		 document.getElementById("demo1").innerHTML = message;
	}
}





