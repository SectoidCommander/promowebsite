<?php
	
	require __DIR__ . '/vendor/autoload.php';

	function setupDatabase($database) {
		$con = mysql_connect("dburl","dbuser","dbpassw");
		if (!$con) {
			die('Could not connect: ' . mysql_error());
		}
		mysql_select_db($database, $con); 
		mysql_set_charset('utf8');
		return $con;
	}



	function setupDatabasePDO($database) {
		try {

			$con = new PDO("mysql:host=dburl;dbname=$database;charset=utf8", "dbuser", "dbpassw");
			$con->query('SET NAMES utf8');
		}
		catch (PDOException $e) {
		    print "Error!: " . $e->getMessage() . "<br/>";
		    die();
			return false;
		}
		return $con;
	}

    function connectDB($databaseName){
        /*** mysql hostname ***/

        $hostname = 'dburl';

        /*** mysql username ***/

        $username = 'dbuser';

        /*** mysql password ***/

        $password = 'dbpassw';
	
        try {
            $dbh = new PDO("mysql:host=$hostname;dbname=$databaseName", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    	}catch(PDOException $e){
    		echo $e->getMessage();
    	}
    	return $dbh;
    }



    function closeDB($connection){
        $connection->close();
    }
    // END SQL Functions
    
    // Common Functions
        // Check if string is a valid GoPro GUID
        function verifyGUID($guid){
            $result = null;
            if(preg_match('/^[a-zA-Z0-9]{8}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{12}$/',$guid)){
                // Valid
                $result = true;
            } 
            else { 
                // Invalid
                $result = false;
            } 
            return $result;
        }
        

	function sec_session_start() {
        $session_name = 'sec_session_id'; // Set a custom session name
        $secure = false; // Set to true if using https.
        $httponly = true; // This stops javascript being able to access the session id. 
        ini_set('session.use_only_cookies', 1); // Forces sessions to only use cookies. 
        $cookieParams = session_get_cookie_params(); // Gets current cookies params.
        session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], $secure, $httponly); 
        session_name($session_name); // Sets the session name to the one set above.
        session_start(); // Start the php session
	}



	function kickInvalidAdminLogins() {
		if(!isset($_SESSION['auth']) or !isset($_SESSION['username']) ) { 
			header("Location: index.php");
			exit();
		}
	}



	/**
	* Prevents attempts to access page content if the user is not of the specified
	* user type or does not have a user type at all
	*
	* @param $userType the type of user allowed access
	*/
	function kickIfNotUserType($userType) {
		if(!isset($_SESSION['userType']) ) { 
			header("Location: index.php?unauthorized=true");
			exit();
		}
		else if ($_SESSION['userType'] != $userType) {
			header("Location: index.php?unauthorized=true");
			exit();
		}
	}


	/**
	* Prevents attempts to access page content other than the list of all application if a user has not
	* confirmed his submission of disqualification for reviewing applications
	*/
	function restrictIfNoDisqualificationConfirmation($currentTimeStamp, $seasonStart, $seasonEnd) {
		/* 
		   if the current confirmation of disqualification is timed within the current
		   season, the user gets access to the entire expert panel web, otherwise he is
		   restricted to the list of all applications
		*/
		if($currentTimeStamp == null || $currentTimeStamp == "" || $currentTimeStamp < $seasonStart || $currentTimeStamp > $seasonEnd) {
			header("Location: expert_panel_all_applications.php");
			exit();
		}
		else {

			// otherwise let the user pass	
		}
	}



	/**
	* Aquire the start date for the lates review season for a specific fund from a specified table
	* @param $databaseName name of the database for the fund in question
	*/
	function getCurrentSeasonStart($databaseName) {
		$conn = null;

		// connect to database
		try {
			$conn = setupDatabasePDO("nsn_expert");
		} 

		catch (PDOException $pe) {
			die("Could not connect to the databases :" . $pe->getMessage());
		}

		// assemble the query to aquire the date for the current season for the fund
		$query = "SELECT MAX(fp.application_processing_start_date) as season_start 
				FROM $databaseName.fund_period fp;";
		echo $query."<br/>";

		$statement = $conn->prepare($query);
		$statement->execute();
		$row = $statement->fetch();
		$currentSeasonStart = strtotime($row["season_start"]);

		return $currentSeasonStart;
	}



	/**
	* Aquire the end date for the lates review season for a specific fund from a specified table
	* @param $databaseName name of the database for the fund in question
	*/
	function getCurrentSeasonEnd($databaseName) {
		$conn = null;

		// connect to database
		try {
			$conn = setupDatabasePDO("nsn_expert");
		} 

		catch (PDOException $pe) {
			die("Could not connect to the databases :" . $pe->getMessage());
		}

		// assemble the query to aquire the date for the current season for the fund
		$query = "SELECT MAX(fp.application_processing_end_date) as season_end  
				FROM $databaseName.fund_period fp;";

		$statement = $conn->prepare($query);
		$statement->execute();
		$row = $statement->fetch();
		$currentSeasonEnd = strtotime($row["season_end"]);

		return $currentSeasonEnd;

	}

	function displayMenuCategory($text) {
		echo	"<a style='background-color:#D00000; 
		color:#fff; padding: 2px 6px; font-size: 14px;
		line-height: 22px; border:1px solid;'>
		<b>$text</b></a>";
	}



	function displayMenuItem($shortname, $text,
	$selectedstyle = "style='font-size: 13px;color:#333;font-weight:bold; padding: 3px 12px; border: 1px solid white;'", 
	$unselectedstyle = "style='font-size: 13px;padding: 3px 12px; border: 1px solid white;'" ) 
	{	// Settum default parameters
		$texti = "<a title=\"".htmlentities($text)."\" class='linkToOtherSite' href='$shortname.php' ";
		
		$url = explode("?", basename($_SERVER['REQUEST_URI']));
		$filename = str_replace(".php","",$url[0]);
		if ($filename == $shortname) { 
			// valið fær stílbreytingu
			$texti = $texti . $selectedstyle;
		}
		else $texti = $texti . $unselectedstyle;
		$texti = $texti . "> $text</a>";
		echo $texti;
	}

	

	function displayTableHeader($text) {
		echo"<a style='background-color:#999; color:#fff; padding: 2px 6px; font-size: 14px; line-height: 22px; solid;'><b>$text</b></a>";
	}



	function headerRed($text) {
		echo"<a style='color:#D00000; padding: 2px 6px; font-size: 14px; line-height: 22px; solid;'><b>".$text,"</b></a><br/>";
	}



	function headerBlack($text) {
		echo"<a style='color:#333; padding: 2px 6px; font-size: 14px; line-height: 22px; solid;'><b>".$text,"</b></a><br/>";
	}



	function styleText() {
		echo "<a style='color:#333; padding: 2px 16px; font_size: 14px; text-decoration:none;'>";
	}



	/**
	* Checks if an attribute with a specified name has been posted and if so,
	* the value is passed to a target variable. Otherwise a default value is passed instead
	*
	* @param $variableName the name of the posted attributed to be tested
	* @param $target the variable used to store the posted
	* @param $default if the post data does not exist this is the default value given to the target
	*/
	function testForPosting($variableName, &$target, $default) {
		if(isset($_POST[$variableName]) && $_POST[$variableName] != null && $_POST[$variableName] != "") {
	        $target = ($_POST[$variableName]);
	    }
	    else {
	    	$target = $default;
	    }
	}



	/**
	* Checks if textual input with a specified name has been posted and if so,
	* the value is passed to a specified variable
	*
	* @param $variableName the name of the posted attributed to be tested
	* @param $target the variable used to store the posted
	* @param $default if the post data does not exist this is the default value given to the target
	*/
	function testTextForPosting($variableName, &$target, $default) {
		if(isset($_POST[$variableName])){
	        $target = ($_POST[$variableName]);
    	}
    	else {
    		$target = $default;
    	}
	}



	/**
	* Dims the page and displays a "successful save" dialog to the user for a specified number of millise onds
	*
	* @param $messageTime the time of the message being displayed in ms
	*/
	function saveDataMessage($messageTime) {
		// dim and disable the page -->
        echo " <div id='dimScreen'></div>";

         // display a message to the user
        echo "<div id='popupMessage' class='popup'>
                <h2>Gögn vistuð</h2>
                <div id='popupContent' class='content'>
                    Vafrinn opnar yfirlit umsókna eftir nokkrar sekúndur.
                </div>
            </div>
            <script>
                window.setTimeout(function () {
                    $('#dimScreen').remove();
                    $('#popupMessage').remove();
                    $('#popUpContent').remove();
                }, $messageTime);
            </script>";
    }



    /**
	* Dims the page and displays a "successful submit" dialog to the user for a specified number of millise, then redirects to a target page
	*
	* @param $messageTime the time of the message being displayed in ms
	* @param $redirectUrl the location of the page the user is redirected to
	*/
	function submitDataMessage($messageTime, $redirectUrl) {
		
		// dim and disable the page -->
        echo " <div id='dimScreen'></div>"; 

        // display a message to the user
        echo "<div class='popup'>
                <h2>Umsögn send inn!</h2>
                <div class='content'>
                    Vafrinn opnar yfirlit umsókna eftir nokkrar sekúndur.
                </div>
            </div>
            <script>
                // redirect to application overview after a few seconds
                window.setTimeout(function () {
                    location.href = '$redirectUrl';
                }, $messageTime);
            </script>";
    }



	/**
	* Calculates the mean value for collected values or zero if its empty
	* @param $valueArray collection of values
	* @return a mean of values stored in parameter or zero if its empty
	*
	*/
	function groupMean($valueArray) {
	    $mean = 0.00;
	    $collectionSize = count($valueArray);
	    if($collectionSize > 0) {
		    $arraySum = 0.00;
		    for($i = 0; $i < $collectionSize; $i++) {
		        $arraySum = $arraySum + $valueArray[$i];
		    }
		    $mean = $arraySum / $collectionSize;
		}

	    return $mean;
	}



	/**
	* Pushes a value into hign or low category arrays when the value is not zero
	* @param $highArray the collection of high values
	* @param $lowArray the collection of low values
	* @param $comparisonValue the value that is being sorted
	* @param $seperatorValue the border value that comparisonValue is checked against
	*
	*/
	function splitCollectionIfNotZero(&$highArray, &$lowArray, $comparisonValue, $seperatorValue) {
	    
	    // only do this for a non zero, non-null value
	    if ($comparisonValue > 0) {
	        if ($comparisonValue > $seperatorValue) {
	            array_push($highArray, $comparisonValue);
	        } 
	        else {
	            array_push($lowArray, $comparisonValue);
	        } 
	    }
	}



	/**
	* Returns the larger of two arrays or second array in case of a tie
	*
	* @param $arrayA the first array in the comparison
	* @param $arrayB the second array being compared
	* @return the array with the more elements or a boolean false in case of a tie
	*
	*/
	function returnLarger($arrayA, $arrayB) {
	    $sizeA = count($arrayA);
	    $sizeB = count($arrayB);

	    if($sizeA > $sizeB){
	        return $arrayA;
	    }

	    // #NOTE: up for debate as is:
	    return $arrayB;
	}



	/**
	* Returns an appropriate glyph icon span given information regarding the state of an application 
	* for a 1st 2nd or 3rd reader
	*
	* @param $saveSubmitInfo bolean indicator of weather an application is submitted or null if the information is not available
	* @return an html span in the form of a string that represents a glyph of a floppy disk or an ok sign
	*
	*/
	function getSavedOrSubmittedReaderIcon($saveSubmitInfo) {
		$glyphSpan = "";

	    if($saveSubmitInfo == null) {
	    	// neither saved or submitted
	        $glyphSpan = "";
	    }
	    else if($saveSubmitInfo == 0) {
	    	// not submitted, but saved
	        $glyphSpan = '<span class="glyphicon glyphicon-floppy-disk"></span>';
	    }
	    else if($saveSubmitInfo == 1) {
	    	// submitted
	        $glyphSpan = '<span class="glyphicon glyphicon-ok-sign"></span>';
	    }

	    return $glyphSpan;
	}



	/**
	* Returns an appropriate glyph icon span given information regarding the state of an application 
	* for a 1st reader making an editor review
	*
	* @param $saveSubmitInfo bolean indicator of weather an application is submitted or null if the information is not available
	* @return an html span in the form of a string that represents a glyph of a floppy disk or an ok sign
	*
	*/
	function getSavedOrSubmittedEditorIcon($saveSubmitInfo) {
		$glyphSpan = "";


	    if($saveSubmitInfo == null) {

	    	// neither saved or submitted
	        $glyphSpan = "";
	    }
	    else if($saveSubmitInfo == 0) {

	    	// not submitted, but saved
	        $glyphSpan = '<span class="glyphicon glyphicon-sunglasses"></span>';
	    }
	    else if($saveSubmitInfo == 1) {

	    	// submitted
	        $glyphSpan = '<span class="glyphicon glyphicon-education"></span>';   
	    }

	    return $glyphSpan;
	}



	function stringToHex($string){
	    $hex='';
	    for ($i=0; $i < strlen($string); $i++){
	        $hex .= dechex(ord($string[$i]));
	    }
	    return $hex;
	}
?>
