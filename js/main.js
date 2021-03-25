$(document).ready(function() {
    var currentColour = "#F3B9B3";

    $("svg").each(function(){
      var picture = this;
  
      $.each(picture.childNodes, function(i, e){
        $(e).on("click", function(e) {
          $(this).attr("fill", currentColour);
        });
      });
    });
  });