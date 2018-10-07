$(document).ready(function() {
    var header = $(".selector");
  	var header_text = document.getElementsByTagName('a');
  	var line = document.querySelectorAll("li.line");

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
  		this.style.backgroundColor = "#E8ECEF";
  		  		var x =  this.querySelectorAll(".st0");
  		for (i=0; i < x.length; i++) {
            	x[i].style.fill = "#071A28";
            	// header_text[i].setAttribute("color", "#071A28")
            }
  	}

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            for (i=0; i < 4; i++) {
            	header_text[i].style.color = "#071A28";
            	// header_text[i].setAttribute("color", "#071A28")
            }
            line[0].style.borderRight = "1px solid #071A28";
            line[1].style.borderRight = "1px solid #071A28";

        } else {
            header.removeClass("scrolled");
            for (i=0; i < 4; i++) {
            	header_text[i].style.color = "white";
            }
            line[0].style.borderRight = "2px solid white";
            line[1].style.borderRight = "2px solid white";
        }
    });



});