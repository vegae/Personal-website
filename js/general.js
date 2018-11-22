$(document).ready(function() {
	var header = $(".selector");
  	var header_text = document.getElementsByTagName('a');
  	var line = document.querySelectorAll("li.line");

    var logo = $(".image");

    //contact_icons

    var icon = document.querySelectorAll(".contact li");

    icon[0].addEventListener("mouseover", onIcon);
    icon[1].addEventListener("mouseover", onIcon);

    icon[0].addEventListener("mouseout", offIcon);
    icon[1].addEventListener("mouseout", offIcon);


	$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            logo.addClass("scrolled_height")
            // for (i=0; i < 4; i++) {
            // 	header_text[i].style.color = "#071A28";
            // 	// header_text[i].setAttribute("color", "#071A28")
            // }
            // line[0].style.borderRight = "1px solid #071A28";
            // line[1].style.borderRight = "1px solid #071A28";

        } else {
            header.removeClass("scrolled");
            logo.removeClass("scrolled_height");
            // for (i=0; i < 4; i++) {
            // 	header_text[i].style.color = "white";
            // }
            // line[0].style.borderRight = "2px solid white";
            // line[1].style.borderRight = "2px solid white";
        }
    });


    function onIcon() {
        x = this.querySelector(".contact_icons");
        x.style.fill = "#FCFF8D";

    }


    function offIcon() {
        x = this.querySelector(".contact_icons");
        x.style.fill = "white";
    }

});