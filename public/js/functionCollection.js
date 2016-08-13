function addNumber (a,b){
    var c= a+b ;
	return c;
}

function doFirst(){ 
	document.write("I am first"+"<br/>");
}	

function doSecond(){ 
	document.write("I am Second"+"<br/>");
}

function myFunction() {
    var person = prompt("Please enter your first number", "0");
	var number = prompt("Please enter your second number", "0");
	var result = +person + +number
		if (person != null && number !=null) {
        document.getElementById("demo").innerHTML =
        "the result is " + result;
    }
}

function spit (){
	var boy="Sunny"
	document.write(boy+"<br/>");
} 

function tooeasy(){
    return "gametime";
}

   
 function start(){
	doFirst();
	doSecond();
}


function tryingMath(){
	var apples=4+78;
	var banana= 4-3;
	var mango= 4*8;
	var orange= 72/9;
	var chop= 7;
	chop=7+1;
	var potato=59;
	potato++;
	var kiwi=60;
	kiwi--;
document.write (apples + "<br/>" + banana + "<br/>"+ mango + "<br/>" + orange+ "<br/>"+ chop+ "<br/>"+potato+ "<br/>"+kiwi) ;
}


var x;

// to change color with javascript

function changecolors() {
    x = 1;
    setInterval(change, 1000);
}

function change() {
    if (x === 1) {
        color = "red";
        x = 2;
    }

	else {
        color = "green";
        x = 1;
    }

    document.body.style.background = color;
}



function assign(){
   var sunny = 16;
   
   sunny +=54;
   sunny-=50;
   sunny*=30;
   sunny/=20;
   
   document.write(sunny);
}

function and() {  
 if (43==2){
       document.write("yup");
	   } else {
	   
	   document.write("nope");
	   
	   
	   
	   }


}





function Math(){
  var a= 20;
  
  var b= 30;   
  if (a==b){
    document.write("it worked!!!!");
  
}
  if (a!=b){
      document.write ("working!!!");
	  
}
  if (a>b){
  
      document.write("great!!!");
  
}
  if (a<b){
     document.write("less");
     }
  if (a<=b){
      document.write=("whoa");
	  }
	 
	
}	   




 function lunch(){
	var message = "have a coke";
	var taka =10;
	var coke =0;
	var fanta =0;
	var pran = 0;
	
	if (taka ==10){
		
		if(coke >0){
			 message ="drink a coke"
		 document.getElementById("demo1").innerHTML = message;
			
		}else if( coke <1 && fanta >0){
			message ="we dont have coke have a fanta"
		 document.getElementById("demo1").innerHTML = message;
		}else if (coke<1 && fanta<1 && pran>0){
			 message ="we dont have coke or fanta have a pran instead"
		 document.getElementById("demo1").innerHTML = message;
		}else{
			 message ="dukan khali"
		 document.getElementById("demo1").innerHTML = message;
		}
		
		
		
		/*  message ="drink a coke"
		 document.getElementById("demo1").innerHTML = message; */
	} 
	else if(taka < 10 && taka >0){
		
		 message ="eat a singara"
		 document.getElementById("demo1").innerHTML = message;
	}
	else if (taka >10){
		 message ="take a biriani"
		 document.getElementById("demo1").innerHTML = message;
	}
	else{
		 message ="taka nai barit jao"
		 document.getElementById("demo1").innerHTML = message;
	}
}

function name(){
   var firstname='sunny';
   var lastname ='sadik';
   
   if (firstname == 'sunny' && lastname== 'sadik'){
 
      // document.write("hello sunny");
	  alert("hello sunny");
	  
	  
	  }else{
		  // document.write("you are not sunny");
		  alert("hello sunny");
	  }
	  
   
   
   }
 

 
 function comx(){
	 
	 var first = "sadik";
	 var last  = "mahmud";
	 if (  (first=="sadik") && (last=="mahmud") ){
		 
		 document.write ("sms48");
	 }
 }
 
 
function or (){
	
	var first="tom"
	var second="mahmud"
	
	if ((first="sadik")|| (second="mahmud")){
		
		document.write("bacon")
	}
	
	
	
	
	
}
 
	
	
	
