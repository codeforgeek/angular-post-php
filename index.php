<?php  
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>AngularJs Post data with PHP - Codeforgeek</title>
        <script src="angular.js"></script>
        <script src="app.js" type="text/javascript"></script>
        <script src="home.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="container">
            <h1> This is demo of AngularJS ajax POST call to PHP file</h1>
             <h3> For tutorial visit this link.</h3>
            <div id="login" ng-app='angular_post' ng-controller='sign_up'>
               <input type="text" size="40" ng-model="email" placeholder="Type your email"><br>
               <input type="password" size="40" ng-model="password" placeholder="Type your password"><br>
                <button ng-click="check_credentials()">Login</button><br>
                <span id="message">{{message}}</span>
            </div>
            </div>
    </body>
</html>
