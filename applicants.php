<?php 

    if(isset($_POST['submit'])){
            $facility=$_POST['facility'];
            $firstname=$_POST['firstname'];
            $lastname=$_POST['lastname'];
            $email=$_POST['email'];
            $phone=$_POST['phone'];
            $address=$_POST['address'];
            $dob=$_POST['dob'];
            $applied=$_POST['applied'];
            $available=$_POST['available'];
            $overtime=$_POST['overtime'];
            $startdate=$_POST['startdate'];
            $expected=$_POST['expected'];
            $eligable=$_POST['eligable'];
            $crime=$_POST['crime'];
            $explaination=$_POST['explaination'];
            $organizations=$_POST['organizations'];
            $skills=$_POST['skills'];
            $volunteer=$_POST['volunteer'];
            $highschool=$_POST['highschool'];
            $graduation=$_POST['graduation'];
            $college=$_POST['college'];
            $course=$_POST['course'];
            $graduated=$_POST['graduated'];
            $degree=$_POST['degree'];
            $previous1=$_POST['employer'];
            $previous2=$_POST['secondemployer'];
            $previous3=$_POST['thirdemployer'];
            $truthful=$_POST['truthful'];
            $signature=$_POST['signature'];
            $date=$_POST['date'];
            
            $subject="Applicant";
            $mailFrom=$_POST['email'];

            $mailto="director.newburgh@kindergatechildcare.com";
            $headers= "From: ".$mailFrom;
            $txt1 = "You have recieved a new applicant";
            $txt2 = "The Applicant name is: ".$firstname." ".$lastname;
            $txt3 = $firstname."'s email address is: ".$email;
            $txt4 = "Phone: ".$phone;
            $txt5 = "Address: ".$address;
            $txt6 = "Date of Birth: ".$dob;
            $txt7 = "Have They Applied Before: ".$applied;
            $txt8 = "Overtime: ".$overtime;
            $txt9 = "Can Start On: ".$startdate;
            $txt10 = "They Are Expecting: ".$expected;
            $txt11 = "Eligible For Employment in U.S. : ".$eligable;
            $txt12 = "Commited Crimes in the Past 10 Years: ".$crimes;
            $txt13 = "Their Explaination: ".$explaination;
            $txt14 = "They've worked with these organizations: ".$organizations;
            $txt15 = "These are their skills: ".$skills;
            $txt16 = "Any Volunteer Work: ".$volunteer;
            $txt17 = "High School: ".$highschool;
            $txt18 = "Graduation Date: ".$graduation;
            $txt19 = "College Name and Location: ".$college;
            $txt20 = "Course Major: ".$course;
            $txt21 = "Did They Graduate: ".$graduated;
            $txt22 = "Their Degree Was: ".$degree;
            $txt23 = "Previous Employer 1: "."\n".$previous1;
            $txt24 = "Previous Employer 2: "."\n".$previous2;
            $txt25 = "Previous Employer 3: "."\n".$previous3;
            $txt26 = "No Perjury: ".$truthful;
            $txt27 = "Signed: ".$signature;
            $txt28 = "Date Signed: ".$date;
            $txt29 = "Applying For ".$facility." Facility";

            $txt = $txt1.".\n\n".$txt29.".\n\n".$txt2.".\n".$txt3.".\n\n".$txt4.".\n\n".$txt5.".\n\n".$txt6.".\n\n".$txt7.".\n\n".$txt8.".\n\n".$txt9.".\n\n".$txt10.".\n\n".$txt11.".\n\n".$txt12.".\n\n".$txt13.".\n\n".$txt14.".\n\n".$txt15.".\n\n".$txt16.".\n\n".$txt17.".\n\n".$txt18.".\n\n".$txt19.".\n\n".$txt20.".\n\n".$txt21.".\n\n".$txt22.".\n\n".$txt23.".\n\n".$txt24.".\n\n".$txt25.".\n\n".$txt26.".\n\n".$txt27.".\n\n".$txt28;
        
            mail($mailto,$subject,$txt,$headers,);
            header("Location: index.html?mailsend");












    }




?>