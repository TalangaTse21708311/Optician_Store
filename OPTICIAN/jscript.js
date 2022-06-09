 function buy() {
	
	let p=document.getElementById("total").innerHTML;
	if(Number(p)<200){
		let total=0.15*Number(p)+Number(p);
		confirm("Total price and 15%TAX is"+total+"$");
		
	}
	
	
	if(Number(p)>200){
		
		let total=Number(p)-0.15*Number(p);
		confirm("Total price and 15%DISCOUNT is"+total+"$");
	}
	
 }
 
 
function add(){
	
	
	 
	  
	  
    if (document.getElementById("item1").checked ==true){
		
		if(document.getElementById("property1").checked == true){
				
		     let y=document.getElementById("property1").value;
		     let x=document.getElementById("units1").selectedOptions[0].value;
			 let p=Number(x)*Number(y);
	         document.getElementById("pr1").innerHTML = p;
			}
    	
		  
		if(document.getElementById("property2").checked == true){
			  
			  let y=document.getElementById("property2").value;
			  let x=document.getElementById("units1").selectedOptions[0].value;
			  let p=Number(x)*Number(y);
	          document.getElementById("pr1").innerHTML = p;
		  }
	  
	  
	    if(document.getElementById("property3").checked == true){
		  
		    let y=document.getElementById("property3").value;
		    let x=document.getElementById("units1").selectedOptions[0].value;
		  	let p=Number(x)*Number(y);
	        document.getElementById("pr1").innerHTML = p;
	       }
		   
		   
		if((document.getElementById("property3").checked == false)&&(document.getElementById("property2").checked == false)&&(document.getElementById("property1").checked == false)){
			
			 alert("you forgot DIOR size");
		}
		  
	
		  

    
	}
	
	
	
	
	  
    if (document.getElementById("item2").checked ==true){
		
		if(document.getElementById("property4").checked == true)
			
			{
				
		let y=document.getElementById("property4").value;
		let x=document.getElementById("units2").selectedOptions[0].value;
					let p=Number(x)*Number(y);
	document.getElementById("pr2").innerHTML = p;
			}
    	  validate = true
		  
		  if(document.getElementById("property5").checked == true)
		  {
			  
			  let y=document.getElementById("property5").value;
			  let x=document.getElementById("units2").selectedOptions[0].value;
			  	let p=Number(x)*Number(y);
	document.getElementById("pr2").innerHTML = p;
		  }
	  
	  
	  if(document.getElementById("property6").checked == true)
	  {
		  
		  let y=document.getElementById("property6").value;
		  let x=document.getElementById("units2").selectedOptions[0].value;
		  	let p=Number(x)*Number(y);
	document.getElementById("pr2").innerHTML = p;
	  }
		  
		  if((document.getElementById("property6").checked == false)&&(document.getElementById("property5").checked == false)&&(document.getElementById("property4").checked == false)){
			
			 alert("you forgot ARMANI size");
		}
		  

    }
	  
	  
	  
	  
    if (document.getElementById("item3").checked ==true){
		
		if(document.getElementById("property7").checked == true)
			
			{
				
		let y=document.getElementById("property7").value;
		let x=document.getElementById("units3").selectedOptions[0].value;
					let p=Number(x)*Number(y);
	document.getElementById("pr3").innerHTML = p;
			}
    	  validate = true
		  
		  if(document.getElementById("property8").checked == true)
		  {
			  
			  let y=document.getElementById("property8").value;
			  let x=document.getElementById("units3").selectedOptions[0].value;
			  	let p=Number(x)*Number(y);
	document.getElementById("pr3").innerHTML = p;
		  }
	  
	  
	  if(document.getElementById("property9").checked == true)
	  {
		  
		  let y=document.getElementById("property9").value;
		  let x=document.getElementById("units3").selectedOptions[0].value;
		  	let p=Number(x)*Number(y);
	document.getElementById("pr3").innerHTML = p;
	  }
		  
		 if((document.getElementById("property7").checked == false)&&(document.getElementById("property8").checked == false)&&(document.getElementById("property9").checked == false)){
			
			 alert("you forgot CHLOE size");
		}
		  
		  

    }
	  
    if (document.getElementById("item4").checked ==true){
		
		if(document.getElementById("property10").checked == true)
			
			{
				
		let y=document.getElementById("property10").value;
		let x=document.getElementById("units4").selectedOptions[0].value;
					let p=Number(x)*Number(y);
	document.getElementById("pr4").innerHTML = p;
			}
    	  validate = true
		  
		  if(document.getElementById("property11").checked == true)
		  {
			  
			  let y=document.getElementById("property11").value;
			  let x=document.getElementById("units4").selectedOptions[0].value;
			  	let p=Number(x)*Number(y);
	document.getElementById("pr4").innerHTML = p;
		  }
	  
	  
	  if(document.getElementById("property12").checked == true)
	  {
		  
		  let y=document.getElementById("property12").value;
		  let x=document.getElementById("units4").selectedOptions[0].value;
		  	let p=Number(x)*Number(y);
	document.getElementById("pr4").innerHTML = p;
	  }
		  
		 if((document.getElementById("property10").checked == false)&&(document.getElementById("property11").checked == false)&&(document.getElementById("property12").checked == false)){
			
			 alert("you forgot POLO size");
		}
		  

    }
	
	
	let x1=document.getElementById("pr1").innerHTML;
    let x2=document.getElementById("pr2").innerHTML ;
    let x3=document.getElementById("pr3").innerHTML ;
    let x4=document.getElementById("pr4").innerHTML ;
let xt=Number(x1)+Number(x2)+Number(x3)+Number(x4);	
	document.getElementById("total").innerHTML =xt;
	
	/*
	let x=document.getElementById("units").selectedOptions[0].value;
	let y=document.getElementById("property").value;
	let p=Number(x)*Number(y);
	document.getElementById("total").innerHTML = p;
*/
  
} 
 
 
 