$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  // var hiddenItem = $( "#list_item1" );
  $( "#all_surveys" ).on( "click", function( event ) {
      hiddenSurvey = $( ".hidden_surveys" );
      hiddenSurvey.toggle();
    for (var i=0;i<4;i++)
    {
      hiddenItem = $( "#list_item" + i);
      hiddenItem.show();
    }
    // hiddenItem.show();
});
});
