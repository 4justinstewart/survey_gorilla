$(document).ready(function() {

  $( "#my_surveys" ).on( "click", function( event ) {
    event.preventDefault();
    myhiddenSurvey = $( ".my_hidden_surveys" );
    myhiddenSurvey.toggle();
    myhiddenItem = $( "#my_list li" );
    myhiddenItem.show();
  });

  $( "#all_surveys" ).on( "click", function( event ) {
    event.preventDefault();
    myhiddenSurvey = $( ".hidden_surveys" );
    myhiddenSurvey.toggle();
    myhiddenItem = $( "#list li" );
    myhiddenItem.show();
  });

  // $( "#all_surveys" ).on( "click", function( event ) {
  //   event.preventDefault();
  //   hiddenSurvey = $( ".hidden_surveys" );
  //   hiddenSurvey.toggle();
  //   hiddenItem = $( "#list li" );
  //   hiddenItem.show();
  // });
});
