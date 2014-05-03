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
    if ($('#question_location').has('div').length > 0) {
      var data = $('#the_q_form').serialize();




      $.post('/question', data);



      $('.question_input').remove();

      $('#question_location').append(q_form);


    }
    else {
      // instantiate survey into data table
      $.post("/make_survey", function(response){
        console.log(response)
        $('#the_q_form').append("<input type='hidden' name='survey_id' value=" + response + ">")
      })
       $('#question_location').append(q_form);


    }





    // $('#question_location').append(q_form)


    // $(".delete_question").on("click", function(){
    // console.log("this")
    // $(this).parent().remove();
    // });

    // $('.add_poss').on('click', function(){
    //   $(this).siblings('form').append(addPossibleResponse)
    // })

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

var q_form = "<div class='question_input'> <img class='delete_question' src='/img/small_x.png' /><form id='the_q_form' method='post' action='#'><input type='text' name='question' placeholder='What's your question?''><br><input type='text' name='possibility' placeholder='Enter a possible response'><br><input type='text' name='possibility-2' placeholder='Enter a possible response'></form><img class='add_poss' src='/img/plus.png'/></div>"
var addPossibleResponse = "<br><input type='text' name='possibility' placeholder='Another possible response'>"
