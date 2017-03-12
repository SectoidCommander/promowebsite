  $("button").on("click", function() {
    // toggle the appearance of the expansion buttons when clicked
    $(this).toggleClass("btn-info");
    $(this).toggleClass("btn-secondary");
    var label = $(this).html();
    if(label == "+") {
      $(this).html("-");
    } else {
      $(this).html("+");
    }
  });