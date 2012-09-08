/* Calculator.js */

function CalcCtrl($scope){

	// Value is the expression stored in memory
	$scope.value = '0';

	// Display is the Calculator's display value
	$scope.display = '';

	// Flag to clear the stored expression
	$scope.clearValueIfNumkey = false;

	// Flag to clear the display
	$scope.clearDisplayIfNumkey = false;

	// Returns a string representing the value of the stored expression
	var evaluate = function(){
		return eval($scope.value).toString();
	}

	// Called on keypress
	$scope.press = function(key){

		// Numeric key is pressed
		if ("0123456789.".indexOf(key) >= 0){

			// Handle flags
			if ($scope.clearDisplayIfNumkey == true){
				$scope.display = '';
			}
			if ($scope.clearValueIfNumkey  == true){
				$scope.value = '0';
			}

			// Update display and expression
			$scope.display += key;
			$scope.value +=key;

		}

		// Clear Numeric Key flags
		$scope.clearDisplayIfNumkey = false;
		$scope.clearValueIfNumkey = false;

		// Operator key is pressed
		if ("*/+-".indexOf(key) >= 0){
			$scope.value = evaluate() + key;
			$scope.clearDisplayIfNumkey = true;
		}

		// Enter (=) key is pressed
		if (key == '='){

			// Evaluate expression and update display
			$scope.value = evaluate();
			$scope.display = $scope.value;

			// Set flags to handle the next keys correctly
			$scope.clearDisplayIfNumkey = true;
			$scope.clearValueIfNumkey = true;
		}
	}
}