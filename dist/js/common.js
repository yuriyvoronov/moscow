$(function(){
  console.log("i'm working");  
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:130,
        
        loop:true,
        autoplay:true,
        responsive : {
        // breakpoint from 0 up
                0 : {
                    items:1
                  
                },
                    // breakpoint from 480 up
                480 : {
                        items:2,
                       
                },
                // breakpoint from 768 up
                768 : {
                    items:3,
                   
                }
        }
    });
});
$(window).on("load resize", function(){
    $(".modal").css({"height" : $(window).height()});
});
                
$(document).ready(function(e){
    $("#send-form, #third-send-form").click(function(e){
        e.preventDefault();
        $(".modal").addClass("visible");                     
    });
    $(".modal-form__close").click(function(){
        $(".modal").removeClass("visible");   
    });
});

$(document).ready(function(){
    $("#form, #modal-form").submit(function(e){
        
        e.preventDefault();
        
        var url = "send.php"; // the script where you handle the form input.
	
			$.ajax({
			type: "POST",
			url: url,
			data: $(this).serialize(), // serializes the form's elements.
			success: function(data)
			{
                alert("send");
				$(".btn").prop('disabled', true);
                $(".btn").val("Сообщение отправлено");
			}
			});
    });
});