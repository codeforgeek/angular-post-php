<?php  
   /*
   * This Script is responsible for Checking User name and Password from Database and returning JSON response.
   * Collect all Details from Angular HTTP Request.
   */ 
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$email = $request->email;
    @$pass = $request->pass;
    echo $email;
 
?>
