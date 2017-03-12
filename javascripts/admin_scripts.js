// score category ratios
var GROWTH_NOVELTY_RATIO = 0.30;
var GROWTH_NOVELTY_MADM_RATIO = 0.5;
var GROWTH_NOVELTY_TAPM_RATIO = 0.5;

var GROWTH_IMPACT_RATIO = 0.40;
var GROWTH_IMPACT_MM_RATIO = 0.25;
var GROWTH_IMPACT_TEAPM_RATIO = 0.25;
var GROWTH_IMPACT_EUVM_RATIO = 0.25;
var GROWTH_IMPACT_SVM_RATIO = 0.05;
var GROWTH_IMPACT_CANM_RATIO = 0.20;

var GROWTH_IMPLEMENTATION_RATIO = 0.30;
var GROWTH_IMPLEMENTATION_WTBSM = 0.40;
var GROWTH_IMPLEMENTATION_CBM_RATIO = 0.30;
var GROWTH_IMPLEMENTATION_PPTSM_RATIO = 0.30;

var RATIOS_GROWTH = new Map()
    RATIOS_GROWTH.set("novelty_market_and_demand",  GROWTH_NOVELTY_MADM_RATIO);
    RATIOS_GROWTH.set("novelty_technology_and_process",  GROWTH_NOVELTY_TAPM_RATIO);
    RATIOS_GROWTH.set("impact_market",  GROWTH_IMPACT_MM_RATIO);
    RATIOS_GROWTH.set("impact_turnover_estimation_and_prerequisite",  GROWTH_IMPACT_TEAPM_RATIO);
    RATIOS_GROWTH.set("impact_end_user_value",  GROWTH_IMPACT_EUVM_RATIO);
    RATIOS_GROWTH.set("impact_spinoff_value",  GROWTH_IMPACT_SVM_RATIO);
    RATIOS_GROWTH.set("impact_capacity_and_network",  GROWTH_IMPACT_CANM_RATIO);
    RATIOS_GROWTH.set("implementation_work_time_budget_schedule",  GROWTH_IMPLEMENTATION_WTBSM);
    RATIOS_GROWTH.set("implementation_cooperation_benefits",  GROWTH_IMPLEMENTATION_CBM_RATIO);
    RATIOS_GROWTH.set("implementation_practical_product_or_technical_solution",  GROWTH_IMPLEMENTATION_PPTSM_RATIO);

var CATEGORIES_RATIO_GROWTH = new Map(); 
    CATEGORIES_RATIO_GROWTH.set("novelty",  GROWTH_NOVELTY_RATIO);
    CATEGORIES_RATIO_GROWTH.set("impact",  GROWTH_IMPACT_RATIO);
    CATEGORIES_RATIO_GROWTH.set("implementation",  GROWTH_IMPLEMENTATION_RATIO);

var CATEGORIES_GROWTH = new Map()
    CATEGORIES_GROWTH.set("novelty", ["novelty_market_and_demand", "novelty_technology_and_process"]);
    CATEGORIES_GROWTH.set("impact", ["impact_market", "impact_turnover_estimation_and_prerequisite", "impact_end_user_value","impact_spinoff_value", "impact_capacity_and_network"]);
    CATEGORIES_GROWTH.set("implementation", ["implementation_work_time_budget_schedule", "implementation_cooperation_benefits", "implementation_practical_product_or_technical_solution"]);

// score category ratios
var SPROUT_NOVELTY_RATIO = 0.5;
var SPROUT_NOVELTY_MADM_RATIO = 0.5;
var SPROUT_NOVELTY_TAPM_RATIO = 0.5;

var SPROUT_IMPACT_RATIO = 0.25;
var SPROUT_IMPACT_MM_RATIO = 0.25;
var SPROUT_IMPACT_TEAPM_RATIO = 0.25;
var SPROUT_IMPACT_EUVM_RATIO = 0.25;
var SPROUT_IMPACT_SVM_RATIO = 0.05;
var SPROUT_IMPACT_CANM_RATIO = 0.20;

var SPROUT_IMPLEMENTATION_RATIO = 0.25;
var SPROUT_IMPLEMENTATION_WTBSM = 0.40;
var SPROUT_IMPLEMENTATION_CBM_RATIO = 0.30;
var SPROUT_IMPLEMENTATION_PPTSM_RATIO = 0.30;

var RATIOS_SPROUT = new Map()
    RATIOS_SPROUT.set("novelty_market_and_demand",  SPROUT_NOVELTY_MADM_RATIO);
    RATIOS_SPROUT.set("novelty_technology_and_process",  SPROUT_NOVELTY_TAPM_RATIO);
    RATIOS_SPROUT.set("impact_market",  SPROUT_IMPACT_MM_RATIO);
    RATIOS_SPROUT.set("impact_turnover_estimation_and_prerequisite",  SPROUT_IMPACT_TEAPM_RATIO);
    RATIOS_SPROUT.set("impact_end_user_value",  SPROUT_IMPACT_EUVM_RATIO);
    RATIOS_SPROUT.set("impact_spinoff_value",  SPROUT_IMPACT_SVM_RATIO);
    RATIOS_SPROUT.set("impact_capacity_and_network",  SPROUT_IMPACT_CANM_RATIO);
    RATIOS_SPROUT.set("implementation_work_time_budget_schedule",  SPROUT_IMPLEMENTATION_WTBSM);
    RATIOS_SPROUT.set("implementation_cooperation_benefits",  SPROUT_IMPLEMENTATION_CBM_RATIO);
    RATIOS_SPROUT.set("implementation_practical_product_or_technical_solution",  SPROUT_IMPLEMENTATION_PPTSM_RATIO);

var CATEGORIES_RATIO_SPROUT = new Map(); 
    CATEGORIES_RATIO_SPROUT.set("novelty",  SPROUT_NOVELTY_RATIO);
    CATEGORIES_RATIO_SPROUT.set("impact",  SPROUT_IMPACT_RATIO);
    CATEGORIES_RATIO_SPROUT.set("implementation",  SPROUT_IMPLEMENTATION_RATIO);

var CATEGORIES_SPROUT = new Map()
    CATEGORIES_SPROUT.set("novelty", ["novelty_market_and_demand", "novelty_technology_and_process"]);
    CATEGORIES_SPROUT.set("impact", ["impact_market", "impact_turnover_estimation_and_prerequisite", "impact_end_user_value","impact_spinoff_value", "impact_capacity_and_network"]);
    CATEGORIES_SPROUT.set("implementation", ["implementation_work_time_budget_schedule", "implementation_cooperation_benefits", "implementation_practical_product_or_technical_solution"]);


// score category ratios
var MARKET_NOVELTY_RATIO = 0.3;
var MARKET_NOVELTY_MADM_RATIO = 1.0;

var MARKET_IMPACT_RATIO = 0.50;
var MARKET_IMPACT_MM_RATIO = 0.25;
var MARKET_IMPACT_TEAPM_RATIO = 0.25;
var MARKET_IMPACT_EUVM_RATIO = 0.25;
var MARKET_IMPACT_CANM_RATIO = 0.25;

var MARKET_IMPLEMENTATION_RATIO = 0.20;
var MARKET_IMPLEMENTATION_WTBSM = 1.00;

var RATIOS_MARKET = new Map()
    RATIOS_MARKET.set("novelty_market_and_demand",  MARKET_NOVELTY_MADM_RATIO);
    RATIOS_MARKET.set("impact_market",  MARKET_IMPACT_MM_RATIO);
    RATIOS_MARKET.set("impact_turnover_estimation_and_prerequisite",  MARKET_IMPACT_TEAPM_RATIO);
    RATIOS_MARKET.set("impact_end_user_value",  MARKET_IMPACT_EUVM_RATIO);
    RATIOS_MARKET.set("impact_capacity_and_network",  MARKET_IMPACT_CANM_RATIO);
    RATIOS_MARKET.set("implementation_work_time_budget_schedule",  MARKET_IMPLEMENTATION_WTBSM);

var CATEGORIES_RATIO_MARKET = new Map(); 
    CATEGORIES_RATIO_MARKET.set("novelty",  MARKET_NOVELTY_RATIO);
    CATEGORIES_RATIO_MARKET.set("impact",  MARKET_IMPACT_RATIO);
    CATEGORIES_RATIO_MARKET.set("implementation",  MARKET_IMPLEMENTATION_RATIO);

var CATEGORIES_MARKET = new Map()
    CATEGORIES_MARKET.set("novelty", ["novelty_market_and_demand"]);
    CATEGORIES_MARKET.set("impact", ["impact_market", "impact_turnover_estimation_and_prerequisite", "impact_end_user_value", "impact_capacity_and_network"]);
    CATEGORIES_MARKET.set("implementation", ["implementation_work_time_budget_schedule"]);



/**
* assign a handler to all number input that
* rounds value to the nearest multiplier of a step value
* and fires calculations when a score value is changed in a number type 
* input field
* @ param minScore the minimum allowed value
* @ param highScore the maximum allowed value
* @ param step 
*/
function scoreChangeHandler(minScore, highScore, step) {
    $('input[type=number]').change(function () {
        var value = $(this).val();
        
        // round the value to the closest step multiplication integer
        value = (Math.round((Math.round(value)) / step)) * step;
        
        // make sure the input stays within allowed range
        $(this).val(keepInRange(minScore, highScore, value));

        // calculate all scores for this application
        calculateScores();
    });
}



/**
* assign a handler to all number input that
* rounds value to the nearest multiplier of a step value
* and fires calculations when a score value is changed in a number type 
* input field
* @ param minScore the minimum allowed value
* @ param maxScore the maximum allowed value
* @ param step 
*/
function scoreChangeHandlerGrowth(minScore, maxScore, step) {
    $('input[type=number]').change(function () {
        var value = $(this).val();
        
        // round the value to the closest step multiplication integer
        value = (Math.round((Math.round(value)) / step)) * step;
        
        // make sure the input stays within allowed range
        value = keepInRange(minScore, maxScore, value);
        $(this).val(value);

        calculateScoresMaps(RATIOS_GROWTH, CATEGORIES_RATIO_GROWTH, CATEGORIES_GROWTH,"input[name$=_1][type=number]", 2, "total_score_1");
        calculateScoresMaps(RATIOS_GROWTH, CATEGORIES_RATIO_GROWTH, CATEGORIES_GROWTH,"input[name$=_2][type=number]", 2, "total_score_2");
        calculateScoresMaps(RATIOS_GROWTH, CATEGORIES_RATIO_GROWTH, CATEGORIES_GROWTH,"input[name$=_3][type=number]", 2, "total_score_3");
        calculateRatingMean(RATIOS_GROWTH);
    });
}



/**
* assign a handler to all number input that
* rounds value to the nearest multiplier of a step value
* and fires calculations when a score value is changed in a number type 
* input field
* @ param minScore the minimum allowed value
* @ param maxScore the maximum allowed value
* @ param step 
*/
function scoreChangeHandlerMarket(minScore, maxScore, step) {
    $('input[type=number]').change(function () {
        var value = $(this).val();
        
        // round the value to the closest step multiplication integer
        value = (Math.round((Math.round(value)) / step)) * step;
        
        // make sure the input stays within allowed range
        value = keepInRange(minScore, maxScore, value);
        $(this).val(value);

        calculateScoresMaps(RATIOS_MARKET, CATEGORIES_RATIO_MARKET, CATEGORIES_MARKET,"input[name$=_1][type=number]", 2, "total_score_1");
        calculateScoresMaps(RATIOS_MARKET, CATEGORIES_RATIO_MARKET, CATEGORIES_MARKET,"input[name$=_2][type=number]", 2, "total_score_2");
        calculateScoresMaps(RATIOS_MARKET, CATEGORIES_RATIO_MARKET, CATEGORIES_MARKET,"input[name$=_3][type=number]", 2, "total_score_3");
        calculateRatingMean(RATIOS_MARKET);
    });
}



/**
* assign a handler to all number input that
* rounds value to the nearest multiplier of a step value
* and fires calculations when a score value is changed in a number type 
* input field
* @ param minScore the minimum allowed value
* @ param maxScore the maximum allowed value
* @ param step 
*/
function scoreChangeHandlerSprout(minScore, maxScore, step) {
    $('input[type=number]').change(function () {
        var value = $(this).val();
        
        // round the value to the closest step multiplication integer
        value = (Math.round((Math.round(value)) / step)) * step;
        
        // make sure the input stays within allowed range
        value = keepInRange(minScore, maxScore, value);
        $(this).val(value);

        calculateScoresMaps(RATIOS_SPROUT, CATEGORIES_RATIO_SPROUT, CATEGORIES_SPROUT,"input[name$=_1][type=number]", 2, "total_score_1");
        calculateScoresMaps(RATIOS_SPROUT, CATEGORIES_RATIO_SPROUT, CATEGORIES_SPROUT,"input[name$=_2][type=number]", 2, "total_score_2");
        calculateScoresMaps(RATIOS_SPROUT, CATEGORIES_RATIO_SPROUT, CATEGORIES_SPROUT,"input[name$=_3][type=number]", 2, "total_score_3");
        calculateRatingMean(RATIOS_SPROUT);
    });
}



/**
* Finds rating data within a webpage through a jquery search string and calculates the total score according to the
* fund rules.  
* @ param ratingRatioMap specifies the ratio for each rating in a category
* @ param categoryRatioMap specifies the ratio for each category in the total score
* @ param ratingTypesMap specifies which category each rating belongs to
* @ param searchPattern jquery search string for collecting rating data from the website
* @ param trimRightLength number of trailing characters to trim off field names from the fields collected via jquery
* @ param resultElementId the id of the element in which the result is displayed
*/
function calculateScoresMaps(ratingRatioMap, categoryRatioMap, ratingTypesMap, searchPattern, trimRightLength, resultElementId) {

    var postfixLength = trimRightLength;
    var firstReaderRatings = new Map();

    // collect ratings for first reader
    $(searchPattern).each(function() {
        var fieldName = $(this).attr("name");
        fieldName = fieldName.substring(0, (fieldName.length - postfixLength));
        var fieldValue = $(this).val();
        firstReaderRatings.set(fieldName, fieldValue);
    });

    // calculate the ratio of each rating in a chapter according to fund rules
    var ratioScore; 
    ratingRatioMap.forEach(function (value, key) {
        ratioScore = firstReaderRatings.get(key) * value;
        firstReaderRatings.set(key, ratioScore);
    });

    // make a copy of the ratio per category map
    var chapterMap = new Map();
    categoryRatioMap.forEach(function (value, key) {
        chapterMap.set(key, value);
    });

    // calulate the score for each rating category by summing up scores from each chapter
    ratingTypesMap.forEach(function (value, key) {
        var numberOfRatings = value.length;
        var categoryRating = 0.0;
        for (i = 0; i < numberOfRatings; i++) {
            var ratingName = value[i]; // each element of the map is an array of rating name strings
            categoryRating = categoryRating + firstReaderRatings.get(ratingName);
        }
        categoryRating = categoryRating * categoryRatioMap.get(key);
        chapterMap.set(key, categoryRating);
    });

    var totalScore = 0;
    chapterMap.forEach( function(value) {
        totalScore = totalScore + value;
    });

    $("#" + resultElementId).html(totalScore);
}


/**
* calculates the mean value for each rating for submitted ratings
* and also the mean value for the total score the application should be assigned
*/
function calculateRatingMean(ratingRatioMap) {
    var firstReaderId = $("[name=firstReader").val();
    var secondReaderId = $("[name=secondReader").val();
    var thirdReaderId = $("[name=thirdReader").val();

    var firstReaderExists = firstReaderId > 0;
    var secondReaderExists = secondReaderId > 0;
    var thirdReaderExists = thirdReaderId > 0;


    var firstReaderRatings = new Map();
    var secondReaderRatings = new Map();
    var thirdReaderRatings = new Map();
    var sumOfRatings = new Map();

    // initialize the sum of ratings map
    ratingRatioMap.forEach( function(value, key) {
        sumOfRatings.set(key, 0);
    });

    // add a total score entry for the ratings map
    sumOfRatings.set("total_score", 0);

    var totalScoreSum = 0.0;
    var readerCount = 0;
    var currentTotalScore = 0.0;
    if (firstReaderExists) {
        readerCount++;

        // collect ratings for first reader
        $("input[name$=_1][type=number]").each(function() {
            var fieldName = $(this).attr("name");
            fieldName = fieldName.substring(0, (fieldName.length - 2));
            var fieldValue = $(this).val();
            firstReaderRatings.set(fieldName, fieldValue);
        });
        
        // add the total score for this evaluation
        currentTotalScore = $("#total_score_1").html();
        totalScoreSum = totalScoreSum + parseFloat(currentTotalScore);

        firstReaderRatings.forEach(function(value, key) {
            sumOfRatings.set(key, sumOfRatings.get(key) + parseInt(value));
        });
    }

    // collect ratings for second reader
    if (secondReaderExists) {
        readerCount++;

        $("input[name$=_2][type=number]").each(function() {
            var fieldName = $(this).attr("name");
            fieldName = fieldName.substring(0, (fieldName.length - 2));
            var fieldValue = $(this).val();
            secondReaderRatings.set(fieldName, fieldValue);
        });

        // add the total score for this evaluation
        currentTotalScore = $("#total_score_2").html();
        totalScoreSum = totalScoreSum + parseFloat(currentTotalScore);

        secondReaderRatings.forEach(function(value, key) {
            sumOfRatings.set(key, sumOfRatings.get(key) + parseInt(value));
        });
    }

    // collect ratings for third reader
    if (thirdReaderExists) {
        readerCount++;

        $("input[name$=_3][type=number]").each(function() {
            var fieldName = $(this).attr("name");
            fieldName = fieldName.substring(0, (fieldName.length - 2));
            var fieldValue = $(this).val();
            thirdReaderRatings.set(fieldName, fieldValue);
        });

        // add the total score for this evaluation
        currentTotalScore = $("#total_score_3").html();
        totalScoreSum = totalScoreSum + parseFloat(currentTotalScore);

        thirdReaderRatings.forEach(function(value, key) {
            sumOfRatings.set(key, sumOfRatings.get(key) + parseInt(value));
        });
    }
    if (readerCount > 0) {
        // calculate the mean score in each rating
        var totalRatingSum = 0;
        var averageValue = 0;
        var totalFieldId = ""; // id of the html field to display the result in
        sumOfRatings.forEach(function(value, key) {
            totalRatingSum = sumOfRatings.get(key);
            averageValue = totalRatingSum / readerCount;
            averageValue = roundToDecimalPlace(averageValue, 2);
            totalFieldId = key + "_total";
            $("#" + totalFieldId).html(averageValue);
        });

        // calculate the mean total score
        var meanTotalScore = 0.0;
        meanTotalScore = totalScoreSum / readerCount;
        meanTotalScore = roundToDecimalPlace(meanTotalScore, 2);
        $("#evaluation_final_score").html(meanTotalScore);
    }
}



function calculateScores() {

    // fetch current entry if it exists
    var noveltyHigh = [];
    var noveltyLow = [];
    var resultsPracticalityHigh = [];
    var resultsPracticalityLow = [];
    var resultsMarketHigh = [];
    var resultsMarketLow = [];
    var projectCostEstimationHigh = [];
    var projectCostEstimationLow = [];
    var cooperationBenefitsHigh = [];
    var cooperationBenefitsLow = [];

    var noveltyValue = 0;
    var resultsScore = 0;
    var resultsPracticalityValue = 0;
    var resultsMarketValue = 0;
    var productionScore = 0;
    var projectCostEstimationValue = 0;
    var cooperationBenefitsValue = 0;
    var totalScoreValue = 0;

    // seperate review score into low score and high score category
    for (i = 1; i <= 3; i++) {
        noveltyValue = $('input[name=novelty' + i +']').val();
        resultsPracticalityValue = $('input[name=resultsPracticality' + i +']').val();
        resultsMarketValue = $('input[name=resultsMarket' + i +']').val();
        projectCostEstimationValue = $('input[name=projectCostEstimation' + i +']').val();
        cooperationBenefitsValue = $('input[name=cooperationBenefits' + i +']').val();

        splitCollectionIfNotZero(noveltyHigh, noveltyLow, noveltyValue, 3);
        splitCollectionIfNotZero(resultsPracticalityHigh, resultsPracticalityLow, resultsPracticalityValue, 3);
        splitCollectionIfNotZero(resultsMarketHigh, resultsMarketLow, resultsMarketValue, 3);
        splitCollectionIfNotZero(projectCostEstimationHigh, projectCostEstimationLow, projectCostEstimationValue, 3);
        splitCollectionIfNotZero(cooperationBenefitsHigh, cooperationBenefitsLow, cooperationBenefitsValue, 3);
    
        // calculate the score for individual review
        resultsScore = (resultsPracticalityValue * 0.7) + (resultsMarketValue * 0.3);
        productionScore = (projectCostEstimationValue * 0.7) + (cooperationBenefitsValue * 0.3);
        totalScoreValue = (noveltyValue * 0.4) +  (resultsScore * 0.3) + (productionScore * 0.3);
        $('#evaluationTotal' + i).html(roundToDecimalPlace(totalScoreValue,2));
        $('input[name=evaluationTotalHidden' + i + ']').val(roundToDecimalPlace(totalScoreValue,2));
    }

    // return the larger collection of high or low review scores for each score category
    var noveltyScores = [];
    var resultsPracticalityScores = [];
    var resultsMarketScores = [];
    var projectCostEstimationScores = [];
    var cooperationBenefitsScores = [];

    noveltyScores = returnLarger(noveltyHigh, noveltyLow);
    resultsPracticalityScores = returnLarger(resultsPracticalityHigh, resultsPracticalityLow);
    resultsMarketScores = returnLarger(resultsMarketHigh, resultsMarketLow);
    projectCostEstimationScores = returnLarger(projectCostEstimationHigh, projectCostEstimationLow);
    cooperationBenefitsScores = returnLarger(cooperationBenefitsHigh, cooperationBenefitsLow);

    // calculate mean value for each score category
    var noveltyMean = 0;
    var resultsPracticalityMean = 0;
    var resultsMarketMean = 0;
    var projectCostMean = 0;
    var cooperationBenefitsMean = 0;

    noveltyMean = groupMean(noveltyScores);
    resultsPracticalityMean = groupMean(resultsPracticalityScores);
    resultsMarketMean = groupMean(resultsMarketScores);
    projectCostMean = groupMean(projectCostEstimationScores);
    cooperationBenefitsMean = groupMean(cooperationBenefitsScores);

    var noveltyScore = noveltyMean;
    noveltyScore = roundToDecimalPlace(noveltyScore, 2);

    var resultScore = (resultsPracticalityMean * 0.7) + (resultsMarketMean * 0.3);
    resultScore = roundToDecimalPlace(resultScore, 2);

    var productionScore = (projectCostMean * 0.7) + (cooperationBenefitsMean * 0.3);
    productionScore = roundToDecimalPlace(productionScore, 2);

    var totalScore = noveltyScore * 0.4 + resultScore * 0.3 + productionScore * 0.3;
    totalScore = roundToDecimalPlace(totalScore, 2);

    // write results to ui
    $('#noveltyTotal').html(roundToDecimalPlace(noveltyMean,2));
    $('#resultsPracticalityTotal').html(roundToDecimalPlace(resultsPracticalityMean,2));
    $('#resultsMarketTotal').html(roundToDecimalPlace(resultsMarketMean,2));
    $('#projectCostEstimationTotal').html(roundToDecimalPlace(projectCostMean,2));
    $('#cooperationBenefitsTotal').html(roundToDecimalPlace(cooperationBenefitsMean,2));
    $('#evaluationFinalScore').html(totalScore);
}



/**
* Calculates the mean value for collected values or zero if its empty
* @param valueArray collection of values
* @return a mean of values stored in parameter or zero if its empty
*
*/
function groupMean(valueArray) {
    var mean = 0.00;
    var collectionSize = valueArray.length;
    var arraySum = 0.00;
    for(i = 0; i < collectionSize; i++) {
        arraySum = arraySum + Number(valueArray[i]);
    }
    mean = arraySum / collectionSize;

    return mean;
}



/**
* Check if a value is within specified range returns 
* the lowest value in the range or the upper value in the range
* if the value is below or above the range or returns
* the value itself if its within range
*
* @param lower lowest value in range
* @param upper upper value in range
* @param value the value that is supposed to be within range
*/
function keepInRange(lower, upper, value) {
    if(value < lower){
        return lower;
    }
    else if (value > upper){
        return upper;
    }
    else {
        return value;
    }
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
* Pushes a value into high- or low-value array based on a seperator value
* @param highArray the collection of high values
* @param lowArray the collection of low values
* @param comparisonValue the value that is being sorted
* @param seperatorValue the border value that comparisonValue is checked against
*
*/
function splitCollectionIfNotZero(highArray, lowArray, comparisonValue, seperatorValue) {
    if (comparisonValue != 0 && comparisonValue != null) {
        if (comparisonValue > seperatorValue) {
            highArray.push(comparisonValue);
        } 
        else if (comparisonValue <= seperatorValue){
            lowArray.push(comparisonValue);
        } 
        else {
            // do nothing
        }
    }
}



/**
* Returns the larger of two arrays or second array in case of a tie
*
* @param arrayA the first array in the comparison
* @param arrayB the second array being compared
* @return the array with the more elements or a boolean false in case of a tie
*
*/
function returnLarger(arrayA, arrayB) {
    sizeA = arrayA.length;
    sizeB = arrayB.length;

    if(sizeA > sizeB) {
        return arrayA;
    }
    
    // #NOTE: up for debate
    return arrayB;
}



// implementing a call to server to fetch and display expert panel membbers
function showPanelMembers() {
    xmlhttpPanel = createXMLHttpRequestHandler();
    xmlhttpPanel.onreadystatechange = function() {
      if (xmlhttpPanel.readyState == 4 && xmlhttpPanel.status == 200) {
          document.getElementById("panel_members").innerHTML = "";
          $( "#panel_members" ).append(xmlhttpPanel.responseText);
      }
    };

    xmlhttpPanel.open("GET","find_panel_members.php", true);
    xmlhttpPanel.send();
}



// implementing a call to server to fetch and display application information for tdf
function showApplicationInfo() {
    xmlhttpApplication = createXMLHttpRequestHandler();
    xmlhttpApplication.onreadystatechange = function() {
      if (xmlhttpApplication.readyState == 4 && xmlhttpApplication.status == 200) {
          document.getElementById("application_info").innerHTML = "";
          $( "#application_info" ).append(xmlhttpApplication.responseText);
      }
    };

    var serializedCheckboxInfo = serializeCheckboxes('funding_type');
    xmlhttpApplication.open("GET","find_application_info.php?funding_type=" + serializedCheckboxInfo, true);
    xmlhttpApplication.send();
}



// implementing a call to server to fetch and display application information for irf
function showApplicationInfoIRF() {
    xmlhttpApplication = createXMLHttpRequestHandler();
    xmlhttpApplication.onreadystatechange = function() {
      if (xmlhttpApplication.readyState == 4 && xmlhttpApplication.status == 200) {
          document.getElementById("application_info").innerHTML = "";
          $( "#application_info" ).append(xmlhttpApplication.responseText);
      }
    };
    var serializedCheckboxInfo = serializeCheckboxes('funding_type');
    xmlhttpApplication.open("GET","find_application_info_irf.php?funding_type=" + serializedCheckboxInfo, true);
    xmlhttpApplication.send();
}


// creates a XMLHttp request handler based on the user browser
function createXMLHttpRequestHandler() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } 
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}



/**
* Finds specific checkbox data and serializes it into a json object 
* that can be passed via url
* @param elementName - the name of the checkbox group
* @return serialized json string data
*/
function serializeCheckboxes (elementName) {

    // find checkboxes that indicate what applications to display based on funding type,
    // then passing their information on to the server in a serialized format
    var checkboxes = []; // the collection of funding type checkboxes
     
     // for each element that has a a name that includes "funding_type"...
     $( 'input[name*=' + elementName + ']').each (function() {
        if($(this).prop("checked") == true) {

          // if the checkbox is checked, its value (funding type id) is added to the collection
          checkboxes.push($(this).val());  
        } 
        else {

            // otherwise pass a string info indicating that this checbox is unchecked
            checkboxes.push("notChecked");
        } 
    });

    // serializing the checkbox information
    var serializedCheckboxInfo = JSON.stringify(checkboxes);
    return serializedCheckboxInfo;
}

    

function memberSelected(str) {
  showFundingTypes(str);
  showApplications(str);
}



function allSelected() {
  showAllFundingTypes();
  showApplications();
}



// implementing a call to server to fetch and display applications
function showApplications(str) {
    if (str == "" || str =="-1") {
        document.getElementById("applications").innerHTML = "";
        return;
    } 
    else { 
        xmlhttp = createXMLHttpRequestHandler();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("applications").innerHTML = "";
                $( "#applications" ).append(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET","findApplications.php?panel_member=" + str, true);
        xmlhttp.send();
      }
  }



// implementing a call to server to fetch and display applications
function showApplications() {
        xmlhttp = createXMLHttpRequestHandler();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("applications").innerHTML = "";
                $( "#applications" ).append(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET","findApplications.php", true);
        xmlhttp.send();
  }



// implementing a call to server to fetch and display funding types
function showFundingTypes(str) {
    if (str == "" || str =="-1") {
        document.getElementById("funding_type_selection").innerHTML = "";
        return;
    } 
    else { 
        xmlhttpFundingType = createXMLHttpRequestHandler();
        xmlhttpFundingType.onreadystatechange = function() {
            if (xmlhttpFundingType.readyState == 4 && xmlhttpFundingType.status == 200) {
                document.getElementById("funding_type_selection").innerHTML = "";
                $( "#funding_type_selection" ).append(xmlhttpFundingType.responseText);
            }
        };
        xmlhttpFundingType.open("GET","findFundingType.php?panel_member="+str,true);
        xmlhttpFundingType.send();
    }
}



// implementing a call to server to fetch and display all fundingTypes
function showAllFundingTypes() {
    xmlhttpFundingType = createXMLHttpRequestHandler();
    xmlhttpFundingType.onreadystatechange = function() {
        if (xmlhttpFundingType.readyState == 4 && xmlhttpFundingType.status == 200) {
            document.getElementById("funding_type_selection").innerHTML = "";
            $( "#funding_type_selection" ).append(xmlhttpFundingType.responseText);
        }
    };
    xmlhttpFundingType.open("GET","findFundingType.php?get_all=1",true);
    xmlhttpFundingType.send();    
}



// creates a XMLHttp request handler based on the user browser
function createXMLHttpRequestHandler() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } 
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}



/**
* Sets all fence criteria in the same table to yes
* @param element the element that initiates the event
*/
function setFencesInTableToYes(element) {
    var element = $(element);
    var tableParent = element.closest("table");
    tableParent.find("input[name^='fence_'][value='1']").prop('checked', false);
    tableParent.find("input[name^='fence_'][value='0']").prop('checked', true);
}



/**
* Sets all fence criteria in the same table to no
* @param element the element that initiates the event
*/
function setFencesInTableToNo(element) {
    var element = $(element);
    var tableParent = element.closest("table");
    tableParent.find("input[name^='fence_'][value='0']").prop('checked', false);
    tableParent.find("input[name^='fence_'][value='1']").prop('checked', true);
}