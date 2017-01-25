$(document).ready(function(){ //Koden körs först när sidan är färdig laddad
	$("#rightDiv").toggle();
	$('.buttonLeft').click(function(){
		$('.slide').toggle(1000);	
	});
	$('.buttonRight').click(function(){
		$(".div1").toggle(1000);
	});
	$(document).keydown(function(event){
 		if(event.which == 39){
			$(".div1").animate({ left: "+=10px"}, "fast");
 		}
 		else if(event.which == 40){
 			$(".div1").animate({ top: "+=10px"}, "fast");
 		}
 		else if(event.which == 37){
 			$(".div1").animate({ left: "-=15px"}, "fast");
 		}
 		else if(event.which == 38){
 			$(".div1").animate({ top: "-=15px"}, "fast");
 		}
  	});
  	$(document).keydown(function(event){
 		if(event.which == 68){
			$(".slide").animate({ left: "+=10px"}, "fast");
 		}
 		else if(event.which == 83){
 			$(".slide").animate({ top: "+=10px"}, "fast");
 		}
 		else if(event.which == 65){
 			$(".slide").animate({ left: "-=10px"}, "fast");
 		}
 		else if(event.which == 87){
 			$(".slide").animate({ top: "-=10px"}, "fast");
 		}
  	});
  	$("#bannerButton").click(function(){
  		$('#rightDiv').fadeIn(500);
  	});
  	$(document).mouseup(function(){
  		$("#rightDiv").fadeOut();
  	});
  	
});
