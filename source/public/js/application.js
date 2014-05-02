$(document).ready(function() {
  $( "#my_surveys" ).on( "click", function( event ) {
    event.preventDefault();
    myhiddenSurvey = $( ".my_hidden_surveys" );
    myhiddenSurvey.toggle();
    myhiddenItem = $( "#my_list li");
    myhiddenItem.show();
    // for (var i=0;i<4;i++)
    // {
    //   myhiddenItem = $( "#my_list_item" + i);
    //   myhiddenItem.show();
    // }

    // $( "#all_surveys" ).on( "click", function( event ) {
    //   hiddenSurvey = $( ".hidden_surveys" );
    //   hiddenSurvey.toggle();
    // for (var i=0;i<4;i++)
    // {
    //   hiddenItem = $( "#list_item" + i);
    //   hiddenItem.show();
    // }
  });

  $( "#all_surveys" ).on( "click", function( event ) {
    event.preventDefault();
    hiddenSurvey = $( ".hidden_surveys" );
    hiddenSurvey.toggle();
    hiddenItem = $( "#list li");
    hiddenItem.show();
  });
});
