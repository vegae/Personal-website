$(document).ready(function() {
    
  	// var highlight = document.querySelectorAll(".service-item")

  	var highlight = document.querySelectorAll(".service-item");

  	highlight[0].addEventListener("mouseover", onCard);
  	highlight[1].addEventListener("mouseover", onCard);
  	highlight[2].addEventListener("mouseover", onCard);

  	highlight[0].addEventListener("mouseout", offCard);
  	highlight[1].addEventListener("mouseout", offCard);
  	highlight[2].addEventListener("mouseout", offCard);

  	function onCard() {
  		this.style.backgroundColor = "#071A28";
  		var x =  this.querySelectorAll(".st0");
  		for (i=0; i < x.length; i++) {
            	x[i].style.fill = "white";
            	// header_text[i].setAttribute("color", "#071A28")
            }

  	}


  	function offCard() {
  		this.style.backgroundColor = "#eff2f4";
  		  		var x =  this.querySelectorAll(".st0");
  		for (i=0; i < x.length; i++) {
            	x[i].style.fill = "#071A28";
            	// header_text[i].setAttribute("color", "#071A28")
            }
  	}




});