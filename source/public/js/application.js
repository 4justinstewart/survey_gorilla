$(document).ready(function() {



  $('a').on("click", function(event){

    event.preventDefault();
    $('#errors').empty();

    if ($('#question_location').has('div').length > 0) {


      var data = $('#the_q_form').serialize();

      var errorsList = []
      var user_question = $('input[name=question]').val();

      if (!user_question.length > 0) {

        errorsList.push("<li>You need a Question!</li>")
      }

      if (errorsList.length > 0) {
      for (err in errorsList) {
        console.log(errorsList[err])
        $('#errors').append(errorsList[err])
      }}

      else {

      $.post('/question', data);

      $('.question_input').remove();

      $('#question_location').append(q_form);

      }


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

    $('.add_poss').on('click', function(){
      var length = $('.possible-answer-slots').length + 1
      


      $(this).siblings('form').append(addPossibleResponse_first_part + length + addPossibleResponse_second_part )
    })

  });






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


var addPossibleResponse_first_part = "<br><input class='possible-answer-slots' type='text' name='possibility-"
var addPossibleResponse_second_part = "' placeholder='Another possible response'>"


var image_remove = "<img class='delete_question' src='/img/small_x.png' />"
var image_add_possible_answer = "Add a possible answer<img class='add_poss' src='/img/plus.png'/>"
var form_for_question = "<form id='the_q_form' method='post' action='#'><input type='text' name='question' placeholder='What's your question?''><br><input class='possible-answer-slots' type='text' name='possibility-1' placeholder='Enter a possible response'><br><input class='possible-answer-slots' type='text' name='possibility-2' placeholder='Enter a possible response'></form>"


var q_form = "<div class='question_input'><ul id='errors'></ul>" + image_remove + form_for_question + image_add_possible_answer + "</div>"


