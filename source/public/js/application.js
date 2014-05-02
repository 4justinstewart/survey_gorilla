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

  $('a').on("click", function(event){
    event.preventDefault();
    console.log(q_form)
    $('#question_location').append(q_form)


    $(".delete_question").on("click", function(){
    console.log("this")
    $(this).parent().remove();
    });

    $('.add_poss').on('click', function(){
      $(this).siblings('form').append("<br><label for='poss'>possible answer:</label><input type='text' name='possibility'>")
    })

  });

  $( "#all_surveys" ).on( "click", function( event ) {

    event.preventDefault();
    hiddenSurvey = $( ".hidden_surveys" );
    hiddenSurvey.toggle();
    hiddenItem = $( "#list li");
    hiddenItem.show();
  });

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

var q_form = "<div class='question_input'> <img class='delete_question' src='/img/small_x.png' /><form method='post' action='#'> <label for='title'>What's your question?</label><input type='text' name='question'><br><label for='poss'>possible answer:</label><input type='text' name='possibility'><br><label for='poss'>possible answer:</label><input type='text' name='possibility'></form><img class='add_poss' src='/img/plus.png'/></div>"
var add_pos = "<br><label for='poss'>possible answer:</label><input type='text' name='possibility'>"
