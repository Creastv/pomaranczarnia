<?php

//sumbission data
$ipaddress = $_SERVER['REMOTE_ADDR'];
$date = date('d/m/Y');
//form data
$name = $_POST['fName']; 
$email = $_POST['fEmail']; 
$phone = $_POST['fPhone']; 
$oferta = $_POST['oferta[]'];
$zgodaDan = $_POST['zgodaDane'];
$zgodaTel = $_POST['zgodaTel'];


    /*ini_set("SMTP","mail.domain.com"); //mail.yoursite.com should be your local smtp
    ini_set("smtp_port","25"); //25 should be your smtp port
    ini_set("sendmail_from","example@email.com"); //info@yoursite.com should be your site email*/
    $headers .= 'Content-type: text/html; charset="utf-8' . "\r\n";
    $emailbody = "
                  <html>
                  <body>
                  <head>
                  </head>
                  <table align='center' style=' background:#f24800; width: 600px;'>
                    <thead>
                      <tr>
                        <td colspan='2' style='border-bottom:1px solid;'>
                         <span style='text-align:center; font-size:21px;'><b>Dane kontaktowe:</b></span>
                       </td>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Imię i nazwisko:</td>
                      <td style='border-bottom:1px solid ;'> {$name}</td>      
                    </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >E-mail:</td>
                      <td style='border-bottom:1px solid ;'>{$email}</td>     
                    </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Nr kontaktowy:</td>
                      <td style='border-bottom:1px solid ;'>{$phone}</td>     
                    </tr>
                    <tr>
                    <td style='border-bottom:1px solid ;' >Oferta:</td>
                    <td style='border-bottom:1px solid ;'>{$oferta}</td>     
                  </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Zgoda:</td>
                      <td style='border-bottom:1px solid ;'>{$zgodaDane}</td>     
                    </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Zgoda:</td>
                      <td style='border-bottom:1px solid ;'>{$zgodaTel}</td>     
                    </tr>
                  </tbody>
                  <tfoot>
                   
                  </tfoot>
                  </table>
                   </body>
                  </html>
                  ";

// Send
mail("biuro@odszkodowanie-powypadkowe.com.pl","Leed złorzony dnia:{$date}",$emailbody,$headers);
// Send

if (isset($_POST['signup']))
    {   
    ?>
<script type="text/javascript">
window.location = "thx.html";
</script>      
    <?php
    }

?>