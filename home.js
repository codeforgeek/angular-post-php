app.controller('sign_up', function ($scope, $http) {

    $scope.check_credentials = function () {
        /*
        * Validate the Email and Password using Regular Expression.
        * Once Validated call the PHP file using HTTP Post Method.
        */
        /*
        * Validate Email and Password.
        * Email shound not be blank, should contain @ and . and not more than 30 characters.
        * Password Cannot be blank, not be more than 12 characters, should not contain 1=1.
        * Set the Messages to Blank each time the function is called.
        */
        $scope.message = "";
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var error = 0;
        if ($scope.email == "" || $scope.email == null) {
            error = 1;
        }
        if (!emailReg.test($scope.email)) {
            error = 2;
        }
        /*---- Email is validated ------ */
        if ($scope.password == "" || $scope.password == null) {
            error = 3;
        }
        if (error == 0) {
            var request = $http({
                method: "post",
                url: window.location.host + "/login.php",
                data: {
                    email: $scope.email,
                    pass: $scope.password
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                $scope.message = "From PHP file : "+data;
            });
        }
        else {
            $scope.message = "You have Filled Wrong Details! Error: " + error;
        }
    }

});
