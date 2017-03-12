
  // assign the button value to a related hidden field
  $(':button').click(function() {
        var MAX_RATING = 100;

        // what rating category is being pushed and what is the value passed?
        var valuePassed = $(this).attr( "value" );
        var buttonGroup = $(this).attr( "name" );
        $('input:hidden[name='+ buttonGroup +'_hidden]').val(valuePassed);

        // deselect all other rating categories
        for(var i = 0; i < (MAX_RATING + 1); i++) {
            $('td#' + buttonGroup + i).removeClass('selected_rating');
        }

        // mark the rating category we selected
        $('td#' + buttonGroup + valuePassed).addClass('selected_rating');

        // update score calculation overview
        var score = 0; // category score
        score = roundToDecimalPlace(calculateCategory(buttonGroup), 2);
        var scoreDiv = '#' + buttonGroup + '_score';

        $(scoreDiv).html("Einkunn - " + score); // display the score on the page
        $(scoreDiv).attr("data-score", score); // store the score
        
        // always finish by calculating current total score
        var totalScore = performScoreCalculation();
        $('#totalScoreHeader').html("Heildarskor - " + totalScore);
        $('input[name=totalScoreHidden]').val(totalScore);
    });

  //higligt selected values from previously submitted entry
  $("input:hidden[name$='_hidden']").each(function() { // only chose hidden inputs with postfix _hidden
        var value = $(this).attr( "value" );
        var selectionGroup = $(this).attr( "name" );

        // remove _hidden postfix to get the buttongroup name
        selectionGroup = selectionGroup.replace("_hidden", "");

        // mark the rating category we selected
        $('td#' + selectionGroup + value).addClass('selected_rating');
  });

  /**
  * Aquries evaluations from form, calculates total score and displays the results
  * in the score overview panel 
  */
  function calculateFormScore() {

    //higligt selected values from previously submitted entry
    $("input:hidden[name$='_hidden']").each(function() { // only chose hidden inputs with postfix _hidden
        
        // aquire form category
        var category = $(this).attr("name");
        category = category.replace("_hidden", "");

        // update score calculation overview
        var score = 0; // category score
        score = roundToDecimalPlace(calculateCategory(category), 2);
        var scoreDiv = '#' + category + '_score';

        $(scoreDiv).html("Einkunn - " + score); // display the score on the page
        $(scoreDiv).attr("data-score", score); // store the score
        
        // always finish by calculating current total score
        var totalScore = performScoreCalculation();
        $('#totalScoreHeader').html("Heildarskor - " + totalScore);
        $('input[name=totalScoreHidden]').val(totalScore);
    });
  }

    /**
    * submits and saves form data vithout validating it
    */
    function onlySubmit(){
        disableButtons() // make sure you can only press the save button once
        document.getElementById('evaluationForm').submit();
    }

    /**
    * validates form data and then submits it
    */
    function validateAndSubmit() {
        var isValid = false;
        isValid = validateForm();
        if (isValid == true) {
            disableButtons() // make sure you can only press the submit button once
            document.getElementById('evaluationForm').submit();
        }
    }

    /**
    * perform evaluation form validation 
    * @return true or false based on if the form has passed validation
    */
    function validateForm() {
        var YES_RADIO_VALUE = 0;
        var NO_RADIO_VALUE = 1;

        // check if all fences have been checked yes or no
        $("input[name^=fence_").each(function() {
          fenceIsChecked = $(this).is("checked"); // is the fence radio button checked?

          // fences are mandatory
          if (fenceIsChecked == false) {
            $("#form_field_error").html("<p style='color:red'>Verður að svara Já eða Nei í öllum girðingum!</p>");
            return false;
          }
        });

        // all evaluation questions have to be answered but only if all fences have been passed
        if(passesFences() == true) {

          var evaluationValue;
          $("input:hidden[name$='_hidden']").each(function() {
            evaluationValue = $(this).attr("value");
            if (evaluationValue == null || evaluationValue == "" || evaluationValue == " ") {
              $("#form_field_error").html("<p style='color:red'>Verður að svara öllum matsspurningum</p>");
              return false;
            }
          });

          var review = document.forms["EvaluationPaper"]["review"].value;

          // review is mandatory
          if (review == null || review == "" || review == " ") {
            $("#form_field_error").html("<p style='color:red'>Það þarf að skrifa texta í reit fyrir mat!</p>");
            return false;
          }

          // propose_acceptance is mandatory
          var propose_acceptance = document.forms["EvaluationPaper"]["propose_acceptance"].value;
          if (propose_acceptance == null || propose_acceptance == "" || propose_acceptance == " "){
            $("#form_field_error").html("<p style='color:red'>Verður að svara hvort að mælt sé með að umsókn verði styrkt!</p>");
            return false;
          }

          // proposal_discussion is mandatory
          var proposal_discussion = document.forms["EvaluationPaper"]["proposal_discussion"].value;
          if (proposal_discussion == null || proposal_discussion == "" || proposal_discussion == " "){
            $("#form_field_error").html("<p style='color:red'>Verður að svara hvort að matsmaður vilji að umsóknin verði rædd á matsfundi</p>");
            return false;
          }
        }

      $("#form_field_error").html(" ");
      return true;
  }

  // hide and unhide form according to fences
  function showOrHideMainFormDiv(mainFormDiv) {
      var fenceRadioButtonNames = $("input[name*='fence_'][value=1]");
      var passesFences = true;
        
      // iterate through all fence radio button groups and find out if any of them are 
      fenceRadioButtonNames.each(function() {
        passesFences = passesFences && aquireRadioValue($(this).attr("name"));
      });

      if(passesFences) {
        $(mainFormDiv).removeClass("hidden");
      }
      else {
        $(mainFormDiv).addClass("hidden");
      }
      return true;
  }



/**
* checks if an evaluation has passed all fence questions in the form 
* @return passesFences indicates if an evaluatin has passed all fences or not
*/
function passesFences() {
    var fenceRadioButtonNames = $("input[name*='fence_'][value=1]");
    var passesFences = true;
      
    // iterate through all fence radio button groups and find out if any of them are 
    fenceRadioButtonNames.each(function() {
      passesFences = passesFences && aquireRadioValue($(this).attr("name"));
    });
    return passesFences;
}

/**
* returns the value of a radio button group with a specific id
* @return the value of a radio button group specified
*/
function aquireRadioValue(radioId)  {
    var returnValue = 0;
    if (document.getElementById(radioId).checked) {
      returnValue = document.getElementById(radioId).value;
    }
    return returnValue;
}



/**
* Returns the score value for a score category with a specific string id
* @param category
* @return noveltyScore
*/
function calculateCategory(category) {
    var categoryHiddenScoreId = '#' + category + '_hidden';
    var score = $(categoryHiddenScoreId).val();

    // we round the result to the second decimal place 
    return score;
}



/**
* Returns the score value for implementation
*
* @return effectScore
*/
function calculateResult() {
    var PRACTICALITY_RATIO = 0.7; 
    var MARKET_RATIO = 0.3; 
    practicalityScore = $('#results_practicality_hidden').val();
    marketScore = $('#results_market_hidden').val();
    var effectScore = (practicalityScore * PRACTICALITY_RATIO) +
                            (marketScore * MARKET_RATIO);
    // we round the result to the second decimal place 
    return effectScore;
}



/**
* Disables all form inputs on the webpage
*
*/
function disableEverything() {
    $("input").each(function() {
        $(this).prop( "disabled", true );
    });
    $("textarea").each(function() {
        $(this).prop( "disabled", true );
    });
}



/**
* Returns the score value for implementation
*
* @return implementationScore
*/
function calculateImplementation() {
    var COST_ESTIMATION_RATIO = 0.7; 
    var COOPERATION_RATIO = 0.3;
    projectCostEstimationScore = $('#project_cost_estimation_hidden').val();
    cooperationBenefitsScore = $('#cooperation_benefits_hidden').val(); 
    
    var implementationScore = (projectCostEstimationScore * COST_ESTIMATION_RATIO) +
                            (cooperationBenefitsScore * COOPERATION_RATIO);
    
    // we round the result to the second decimal place 
    return implementationScore;
}



/**
* Rounds a value to the specified decimal place
*
* @param value
* @decimal
* @return roundedValue
*/
function roundToDecimalPlace(value, decimal) {
    var factor = Math.pow(10, decimal);
    roundedValue = ((Math.round(value * factor))/factor).toFixed(decimal);
    return roundedValue;
}



/**
* Calculate the total score of the evaluation form based on
* current score input
*/
function performScoreCalculation() {
    var totalScore = 0; // calculated total score
    var score; // score in a category
    var ratio; // ratio of a category within the total score
    $("[id$='_score']").each(function() {
        ratio = parseFloat($(this).attr("data-ratio"));
        score = parseFloat($(this).attr("data-score"));
        totalScore = totalScore + (ratio * score);
    });
    return totalScore;
}



/**
* Disable all buttons on a webpage
*/
function disableButtons() {
    onsubmit = this.elements['save'].disbled = true;
    onsend = this.elements['submit'].disabled = true;
}



/**
* Returns the total score in all categories
*
* @return totalScore
*/
function calculateTotalScore () {
    /* METHOD STUB */
}



/**
* Perform score calculations in all categories
*
*/
function finalCategoryScore() {
    /* METHOD STUB */
}