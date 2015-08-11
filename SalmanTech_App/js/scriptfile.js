 $(document).bind("pageinit", function() {
	
	var showWelcome = true;			//display the welcome dialog for first time installation
	var OutputComment = "";
	
	$('#GradeSheet').hide();
	
	$("#imgval").hide();
	$("#imgAct").hide();
				
	$('#next').click(function() {
		var target = this.id == "next" ? "#page1" : "About.html";
		$.mobile.changePage(target);
	});
	
	$('#Back').bind('tap', function() {
		history.back();
	});
	
	$('#Next').bind('tap', function() {
		history.forward();
	});
	
	
	/*window.localStorage.setItem("WelcomeScreen", "show");
	
	$('#decline').bind('tap', function() {
		window.localStorage.setItem("WelcomeScreen", "show");
		$.mobile.changePage("#Home");
	});
		
	$("#accept").bind('tap', function() {
		window.localStorage.setItem("WelcomeScreen", "hide");
		$("#Welcome").dialog("close");
		$.mobile.changePage("#Home");
	});
		
		
	if (window.localStorage.getItem("WelcomeScreen") == "show")
	{
		$.mobile.changePage('#Welcome', {
		role: "dialog"
		});		
	}*/
		
	//Main Window Clear Button
	$("#Reset").click(function() {
		
		$('#GradeOne').val("");
		$('#GradeTwo').val("");
		$('#GradeThree').val("");
		$('#GradeFour').val("");
		$('#GradeFive').val("");
		$('#GradeSix').val("");
		
		$('#InputBox1').val("");
		$('#InputBox2').val("");
		$('#InputBox3').val("");
		$('#InputBox4').val("");
		$('#InputBox5').val("");
		$('#InputBox6').val("");
		$('#AverageGP').val("");
		$('#Message').val("");
		
	});
	
	$("#OpenCompleteExCon").bind("tap", function() {
		var admin = "H819-Sm11";
		var password = "XM19-F13K";
		var checkpassword = $("#RegistrationCode").val();
		
		if (checkpassword == admin)
		{
			window.localStorage.setItem("user", prompt("Enter new login code below: "));			
		}
			
	
		if (checkpassword == password)
		{	
			$("#imgval").show();
			$("#imgval").attr("src", "res/green_ok.png").trigger("refresh");
			$("#imgAct").show();	
		}
		else if (checkpassword == window.localStorage.getItem("user"))
		{
			$("#imgval").show();
			$("#imgval").attr("src", "res/green_ok.png").trigger("refresh");
			$("#imgAct").show();
		}
		else if (checkpassword != password || checkpassword != window.localStorage.getItem("user"))
		{
			$("#imgval").show();
			$("#imgval").attr("src", "res/no.png").trigger("refresh");
			$("#imgAct").hide();
		}
	});	

}); // Main Document load event
//***********************************************************************************************************

$('#CompleteExCon').live('pageinit', function() {
	if (window.localStorage.getItem("user") != "")
	{
		$('#loginmsg').html('<font face="droid"><p>The Complete Grade Point Calculator provides ' +
			'an extra window complete enough to both calculate your exams and continuous ' +
			'grades, displays your various grade points and also show your Average Grade Point.' +
			'<br><br>You have registered to use this window. Thank you very much for registering.</p>' +
			'<br>Please enter your login code below:</font>');
							
		$('#status').html('Login Code: ');
		
		$('#submitORsignin').html('Lunch window');
	}
});

//***********************************************************************************************************
$('#About').live("pageinit", function() {

	$('#GradeSheet').hide();
		
	$('#GradingSystem').click(function() {
		$('#GradeSheet').toggle();
	});

}); // About window live event


//***********************************************************************************************************
$('#Home').live("pageinit", function() {

	//Saved Home Window information		
	$('#HomeSave').bind("tap", function(event, ui) {
		window.localStorage.setItem('HomeInput1', $('#InputBox1').val());
		window.localStorage.setItem('HomeInput2', $('#InputBox2').val());
		window.localStorage.setItem('HomeInput3', $('#InputBox3').val());
		window.localStorage.setItem('HomeInput4', $('#InputBox4').val());
		window.localStorage.setItem('HomeInput5', $('#InputBox5').val());
		window.localStorage.setItem('HomeInput6', $('#InputBox6').val());
		
		window.localStorage.setItem('HomeOutput1', $('#GradeOne').val());
		window.localStorage.setItem('HomeOutput2', $('#GradeTwo').val());
		window.localStorage.setItem('HomeOutput3', $('#GradeThree').val());
		window.localStorage.setItem('HomeOutput4', $('#GradeFour').val());
		window.localStorage.setItem('HomeOutput5', $('#GradeFive').val());
		window.localStorage.setItem('HomeOutput6' , $('#GradeSix').val());
		
		window.localStorage.setItem('HomeAGP', $('#AverageGP').val());
	});
	
	//Home Window Retrieve saved Information
	$("#HomeRetrieve").bind("tap", function(event, ui) {
		$('#InputBox1').val(window.localStorage.getItem('HomeInput1'));
		$('#InputBox2').val(window.localStorage.getItem('HomeInput2'));
		$('#InputBox3').val(window.localStorage.getItem('HomeInput3'));
		$('#InputBox4').val(window.localStorage.getItem('HomeInput4'));
		$('#InputBox5').val(window.localStorage.getItem('HomeInput5'));
		$('#InputBox6').val(window.localStorage.getItem('HomeInput6'));
		
		$('#GradeOne').val(window.localStorage.getItem('HomeOutput1'));
		$('#GradeTwo').val(window.localStorage.getItem('HomeOutput2'));
		$('#GradeThree').val(window.localStorage.getItem('HomeOutput3'));
		$('#GradeFour').val(window.localStorage.getItem('HomeOutput4'));
		$('#GradeFive').val(window.localStorage.getItem('HomeOutput5'));
		$('#GradeSix').val(window.localStorage.getItem('HomeOutput6'));
		
		$('#AverageGP').val(window.localStorage.getItem('HomeAGP'));
	});
		
	
	//**********************************Main Window Calculate Button ***********************************************
	$("#CalBtn").click(function() {
		
		// Check individual grades for any character i.e. either a - z or A - Z
		var smallCaps = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
							 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

		var largeCaps = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
							 "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
		
		var checkg1 = $('#InputBox1').val();
		var checkg2 = $('#InputBox2').val();
		var checkg3 = $('#InputBox3').val();
		var checkg4 = $('#InputBox4').val();
		var checkg5 = $('#InputBox5').val();
		var checkg6 = $('#InputBox6').val();
					
		for (var i = 0; i <= 25; i++)
		{
			if (isNaN(checkg1))
			{
				// Perform some action to catch the error
			}
			else
			{
				var G1 = parseFloat($('#InputBox1').val());
			}
		
			if	(isNaN(checkg2))
			{
				// Perform some action to catch the error
			}
			else
			{
				var G2 = parseFloat($('#InputBox2').val());
			}
	
			if	(isNaN(checkg3))
			{
				// Perform some action to catch the error
			}
			else
			{
				var G3 = parseFloat($('#InputBox3').val());
			}
		
			if	(isNaN(checkg4))
			{
				// Perform some action to catch the error
			}
			else
			{
				var G4 = parseFloat($('#InputBox4').val());
			}

			if	(isNaN(checkg5))
			{
				// Perform some action to catch the error
			}
			else
			{
				var G5 = parseFloat($('#InputBox5').val());
			}

			if	(isNaN(checkg6))
			{
				// Perform some action to catch the error
			}
			else
			{				
				var G6 = parseFloat($('#InputBox6').val());
			}
		}
		
		var G1Total;
		var G2Total;
		var G3Total;
		var G4Total;
		var G5Total;
		var G6Total;
		
		var GradeTotal;
		var TotalModule = 6;
		var AGP;
							
		//First Grade Point
		if (G1 >= 69.50 && G1 <= 100)
		{
			$('#GradeOne').val("[A+] Excellent 4.00 Points");
			G1Total = 4.00;
		}
		else if (G1 >= 64.5 && G1 <= 69.49)
		{
			$('#GradeOne').val("[A-] Very Good 3.75 Points");
			G1Total = 3.75;
		}
		else if (G1 >= 59.5 && G1 <= 64.49)
		{
			$('#GradeOne').val("[B+] Good 3.25 Points");
			G1Total = 3.25;
		}
		else if (G1 >= 54.5 && G1 <= 59.49)
		{
			$('#GradeOne').val("[B] Credit 3.00 Points");
			G1Total = 3.00;
		}
		else if (G1 >= 49.5 && G1 <= 54.49)
		{
			$('#GradeOne').val("[B-] Credit 2.75 Points");
			G1Total = 2.75;
		}
		else if (G1 >= 44.5 && G1 <= 49.49)
		{
			$('#GradeOne').val("[C+] Pass 2.50 Points");
			G1Total = 2.50;
		}
		else if (G1 >= 39.5 && G1 <= 44.49)
		{
			$('#GradeOne').val("[C-] Pass 2.25 Points");
			G1Total = 2.25;
		}
		else if (G1 >= 29.5 && G1 <= 39.49)
		{
			$('#GradeOne').val("[D] Fail 1.75 Points");
			G1Total = 1.75;
		}
		else if (G1 >= 0 && G1 <= 29.49)
		{
			$('#GradeOne').val("[F] Fail 0.00 Points");
			G1Total = 0.00;
		}
		else
		{
			$('#GradeOne').val("Invalid data at Grade One");
		}

		
		//Second Grade Point
		if (G2 >= 69.50 && G2 <= 100)
		{
			$('#GradeTwo').val("[A+] Excellent 4.00 Points");
			G2Total = 4.00;
		}
		else if (G2 >= 64.5 && G2 <= 69.49)
		{
			$('#GradeTwo').val("[A-] Very Good 3.75 Points");
			G2Total = 3.75;
		}
		else if (G2 >= 59.5 && G2 <= 64.49)
		{
			$('#GradeTwo').val("[B+] Good 3.25 Points");
			G2Total = 3.25;
		}
		else if (G2 >= 54.5 && G2 <= 59.49)
		{
			$('#GradeTwo').val("[B] Credit 3.00 Points");
			G2Total = 3.00;
		}
		else if (G2 >= 49.5 && G2 <= 54.49)
		{
			$('#GradeTwo').val("[B-] Credit 2.75 Points");
			G2Total = 2.75;
		}
		else if (G2 >= 44.5 && G2 <= 49.49)
		{
			$('#GradeTwo').val("[C+] Pass 2.50 Points");
			G2Total = 2.50;
		}
		else if (G2 >= 39.5 && G2 <= 44.49)
		{
			$('#GradeTwo').val("[C-] Pass 2.25 Points");
			G2Total = 2.25;
		}
		else if (G2 >= 29.5 && G2 <= 39.49)
		{
			$('#GradeTwo').val("[D] Fail 1.75 Points");
			G2Total = 1.75;
		}
		else if (G2 >= 0 && G2 <= 29.49)
		{
			$('#GradeTwo').val("[F] Fail 0.00 Points");
			G2Total = 0.00;
							}
		else
		{
			$('#GradeTwo').val("Invalid data at Grade Two");
		}

		
		//Third Grade Point
		if (G3 >= 69.50 && G3 <= 100)
		{
			$('#GradeThree').val("[A+] Excellent 4.00 Points");
			G3Total = 4.00;
		}
		else if (G3 >= 64.5 && G3 <= 69.49)
		{
			$('#GradeThree').val("[A-] Very Good 3.75 Points");
			G3Total = 3.75;
		}
		else if (G3 >= 59.5 && G3 <= 64.49)
		{
			$('#GradeThree').val("[B+] Good 3.25 Points");
			G3Total = 3.25;
		}
		else if (G3 >= 54.5 && G3 <= 59.49)
		{
			$('#GradeThree').val("[B] Credit 3.00 Points");
			G3Total = 3.00;
		}
		else if (G3 >= 49.5 && G3 <= 54.49)
		{
			$('#GradeThree').val("[B-] Credit 2.75 Points");
			G3Total = 2.75;
		}
		else if (G3 >= 44.5 && G3 <= 49.49)
		{
			$('#GradeThree').val("[C+] Pass 2.50 Points");
			G3Total = 2.50;
		}
		else if (G3 >= 39.5 && G3 <= 44.49)
		{
			$('#GradeThree').val("[C-] Pass 2.25 Points");
			G3Total = 2.25;
		}
		else if (G3 >= 29.5 && G3 <= 39.49)
		{
			$('#GradeThree').val("[D] Fail 1.75 Points");
			G3Total = 1.75;
		}
		else if (G3 >= 0 && G3 <= 29.49)
		{
			$('#GradeThree').val("[F] Fail 0.00 Points");
			G3Total = 0.00;
		}
		else
		{
			$('#GradeThree').val("Invalid data at Grade Three");
					
		}

		
		//Fourth Grade Point
		if (G4 >= 69.50 && G4 <= 100)
		{
			$('#GradeFour').val("[A+] Excellent 4.00 Points");
			G4Total = 4.00;
								
		}
		else if (G4 >= 64.5 && G4 <= 69.49)
		{
			$('#GradeFour').val("[A-] Very Good 3.75 Points");
			G4Total = 3.75;		
		}
		else if (G4 >= 59.5 && G4 <= 64.49)
		{
			$('#GradeFour').val("[B+] Good 3.25 Points");
			G4Total = 3.25;
		}	
		else if (G4 >= 54.5 && G4 <= 59.49)
		{
			$('#GradeFour').val("[B] Credit 3.00 Points");
			G4Total = 3.00;
		}	
		else if (G4 >= 49.5 && G4 <= 54.49)
		{
			$('#GradeFour').val("[B-] Credit 2.75 Points");
			G4Total = 2.75;
		}
		else if (G4 >= 44.5 && G4 <= 49.49)
		{
			$('#GradeFour').val("[C+] Pass 2.50 Points");
			G4Total = 2.50;
		}
		else if (G4 >= 39.5 && G4 <= 44.49)
		{
			$('#GradeFour').val("[C-] Pass 2.25 Points");
			G4Total = 2.25;
		}
		else if (G4 >= 29.5 && G4 <= 39.49)
		{
			$('#GradeFour').val("[D] Fail 1.75 Points");
			G4Total = 1.75;
		}
		else if (G4 >= 0 && G4 <= 29.49)
		{
			$('#GradeFour').val("[F] Fail 0.00 Points");
			G4Total = 0.00;
		}
		else
		{
			$('#GradeFour').val("Invalid data at Grade Four");
		}	

		
		//Fifth Grade Point
		if (G5 >= 69.50 && G5 <= 100)
		{
			$('#GradeFive').val("[A+] Excellent 4.00 Points");
			G5Total = 4.00;
		}
		else if (G5 >= 64.5 && G5 <= 69.49)
		{
			$('#GradeFive').val("[A-] Very Good 3.75 Points");
			G5Total = 3.75;
		}
		else if (G5 >= 59.5 && G5 <= 64.49)
		{
			$('#GradeFive').val("[B+] Good 3.25 Points");
			G5Total = 3.25;
		}
		else if (G5 >= 54.5 && G5 <= 59.49)
		{
			$('#GradeFive').val("[B] Credit 3.00 Points");
			G5Total = 3.00;
		}
		else if (G5 >= 49.5 && G5 <= 54.4)
		{
			$('#GradeFive').val("[B-] Credit 2.75 Points");
			G5Total = 2.75;
		}
		else if (G5 >= 44.5 && G5 <= 49.49)
		{
			$('#GradeFive').val("[C+] Pass 2.50 Points");
			G5Total = 2.50;
		}
		else if (G5 >= 39.5 && G5 <= 44.49)
		{
			$('#GradeFive').val("[C-] Pass 2.25 Points");
			G5Total = 2.25;
		}
		else if (G5 >= 29.5 && G5 <= 39.49)
		{
			$('#GradeFive').val("[D] Fail 1.75 Points");
			G5Total = 1.75;
		}
		else if (G5 >= 0 && G5 <= 29.49)
		{
			$('#GradeFive').val("[F] Fail 0.00 Points");
			G5Total = 0.00;
		}
		else
		{
			$('#GradeFive').val("Invalid data at Grade Five");
		}
				
		
		//Sixth Grade Point
		if (G6 >= 69.50 && G6 <= 100)
		{
			$('#GradeSix').val("[A+] Excellent 4.00 Points");
			G6Total = 4.00;
		}
		else if (G6 >= 64.5 && G6 <= 69.49)
		{
			$('#GradeSix').val("[A-] Very Good 3.75 Points");
			G6Total = 3.75;
		}
		else if (G6 >= 59.5 && G6 <= 64.49)
		{
			$('#GradeSix').val("[B+] Good 3.25 Points");
			G6Total = 3.25;
		}
		else if (G6 >= 54.5 && G6 <= 59.49)
		{
			$('#GradeSix').val("[B] Credit 3.00 Points");
			G6Total = 3.00;
		}
		else if (G6 >= 49.5 && G6 <= 54.49)
		{
			$('#GradeSix').val("[B-] Credit 2.75 Points");
			G6Total = 2.75;
		}
		else if (G6 >= 44.5 && G6 <= 49.49)
		{
			$('#GradeSix').val("[C+] Pass 2.50 Points");
			G6Total = 2.50;
		}
		else if (G6 >= 39.5 && G6 <= 44.49)
		{
			$('#GradeSix').val("[C-] Pass 2.25 Points");
			G6Total = 2.25;
		}
		else if (G6 >= 29.5 && G6 <= 39.49)
		{
			$('#GradeSix').val("[D] Fail 1.75 Points");
			G6Total = 1.75;
		}
		else if (G6 >= 0 && G6 <= 29.49)
		{
			$('#GradeSix').val("[F] Fail 0.00 Points");
			G6Total = 0.00;
		}
		else
		{
			$('#GradeSix').val("Invalid data at Grade Six");
		}
							
		
		if (G1 >= 0 && G1 <= 100) {
		   if (G2 >= 0 && G2 <= 100) { 
		      if (G3 >= 0 && G3 <= 100) {
		         if (G4 >= 0 && G4 <= 100) {
		            if (G5 >= 0 && G5 <= 100) {
 		               if (G6 >= 0 && G6 <= 100) {							
							
							GradeTotal = G1Total + G2Total + G3Total + G4Total + G5Total + G6Total;
							AGP = (GradeTotal / TotalModule); 
		
							//Average Grade Point Conversion
							var conAns = AGP.toString();
					
							if (conAns.length >= 5)
							{	
								var num = new Array("0", "1", "2", "3", "4");
								var num1 = new Array("5", "6", "7", "8", "9");
								
								var retrieve4 = conAns.substring(0, 4);
								var retrieve5 = conAns.substring(0, 5);
					
								var char1 = retrieve4.charAt(0);
								var char2 = retrieve4.charAt(1);		//Decimal Place
								var char3 = retrieve4.charAt(2);
		
								var char4 = retrieve4.charAt(3);
								var char5 = retrieve5.charAt(4);			
					
								for (var i = 0; i <= 4; i++)
								{
									if (char5 == num1[i])
									{
										var numChar4 = parseInt(char4);
										numChar4 += 1;
											
										if (numChar4 <= 9)
										{	
											$('#AverageGP').val("AGP is " + char1 + char2 + char3 + numChar4 + " Point");
										}	
										else if(numChar4 > 9 && char3 <= 8)
										{	
											var numChar3 = parseInt(char3);
											numChar3 += 1;
											$('#AverageGP').val("AGP is " + char1 + char2 + numChar3 + " Point");
										}
										else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
										{
											var numChar1 = parseInt(char1);
											numChar1 += 1;
											$('#AverageGP').val("AGP is " + numChar1 + char2 + "0" + " Point");
										}			
										else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
										{
											$('#AverageGP').val("Data Error");
										}			
									}
									else if (char5 == num[i])
									{
										$('#AverageGP').val("AGP is " + char1 + char2 + char3 + char4 + " Point");
									}
								}						
							}
							else if (conAns.length <= 4)
							{
								var retrieve4 = conAns.substring(0, 4);
					
								var char1 = retrieve4.charAt(0);
								var char2 = retrieve4.charAt(1); 		//Decimal place
								var char3 = retrieve4.charAt(2);
								var char4 = retrieve4.charAt(3);
							
								var newChar1 = parseInt(char1);
								var newChar3 = parseInt(char3);
								var newChar4 = parseInt(char4);
						

								if (isNaN(newChar4) && char2 == ".")
								{			
									$('#AverageGP').val("AGP is " + char1 + char2 + char3 + "0" + " Point");
								}	
								else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
								{
									$('#AverageGP').val("AGP is " + char1 + char2 + "0" + "0" + " Point");
								}
								else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
								{
									$('#AverageGP').val("AGP is " + char1 + char2 + char3 + char4 + " Point");
								}
								else if (char2 != "." && char1 >= 0)
								{
									$('#AverageGP').val("AGP is " + char1 + "." + "0" + "0" + " Point");
								}
								else if (isNaN(char1))
								{
									$('#AverageGP').val("Data Error");
								}
							}
						
							//Ending of Average Grade Point Conversion
 		               
 		               } // ending of if 6
 		               else { //grade 6 exception handling
 		                  $('#InputBox6').focus();
 		                  $('#InputBox6').select();
 		               }
 		            } // ending of if 5
 		            else { //grade 5 exception handling
 		            	$('#InputBox5').focus();
 		            	$('#InputBox5').select();
 		            }
 		         } // ending of if 4
 		         else { //grade 4 exception handling
 		         	$('#InputBox4').focus();
 		         	$('#InputBox4').select();
 		         }
 		      } // ending of if 3
 		      else { //grade 3 exception handling
 		      	$('#InputBox3').focus();
 		      	$('#InputBox3').select();
 		      }
 		   } // ending of if 2
 		   else { //grade 2 exception handling
 		      $('#InputBox2').focus();
 		      $('#InputBox2').select();
 		   }
 		} // ending of if 1
 		else { //grade 1 exception handling
 			$('#InputBox1').focus();
 			$('#InputBox1').select(); 			
 		}
		
	}); // end of the click event of the main form calculate button
});


//*****************************************************************************************************************
$('#Help').live("pageinit", function() {
	
	//Help Window Accordion Pages	
	$('#MainIntro').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Salmantech Grade Point ' + 
		'Calculator</font></h5>' + 
		'<p><font face="droid">This program is developed mainly to offset '+ 
		'the overburden of repeatedly punching your calculator, and arriving at erroneous ' +
		'answers. Probably because you used the wrong grade points, no offence but that really' +
		' hurts as you will have to do it' +
		' again and again.' + 
		'<hr class="ui-btn-hover-a">With this program ' +
		'you are assured reasonable accurracy. With its very friendly user interface you ' +
		"don't need any special skills to understand how to use it. I also " +
		'augment your excitement, and greatly reduce your strain through interactive ' +
		'friendly tips.' + 
		'<hr class="ui-btn-hover-a">With all due regards and diligence I have tried my best to' + 
		'ensure that my fellow <i>Ipamers</i> will not be overburdened with the complicacies ' +
		"of computing thier grades every time the grade sheets are hung. <br>I've also " +
		'invested enormous amount of interlectual capability in this program to ensure ' + 
		'that it can also be of help to lecturers and the Exams Office.<hr class="ui-btn-hover-a">Even though  ' +
		'it is in its developing phase I reasonbly assure you of <i>Accurate and up-to-date</i> ' +
		'calculation procedures, including points for all grades, even reference ' +
		'grade points ([d] 1.75).<hr class="ui-btn-hover-a">Feel free to explore its limits. I hope you may ' +
		'find it very helpful and handy.</font></p><hr class="ui-btn-hover-a"><font color="#e7f7ff" face="droid" size="2px">' + 
		'SalmanTech | Grade Point ' + 
		'Calculator<br>All Right Reserved &copy; 2015</font>');
	});
	
	$('#MainPro').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Procedure of Use</font></h5>  ' +
		'<p><font face="droid">(Main Average Grade Point Window) <br><br>This tutorial fully explains ' +
		'all the hidden functions of this program, and also tries to increase your ' +
		'speed in using it, and decrease your complicacies along the way.</p> <p>It is ' +
		'strongly advised to fully understand all the following points if you are ' +
		'to be very convenient in using this application.</p> <p>The Main window is divided ' +
		'into four sections. <br>Section 1: The Menu Buttons. <br>Section 2: The Grade Input Panel.<br> ' +
		'Section 3: The Result/Output Panel.<br>Section 4: The Buttons. ' +
		'<br><br>Each of the above sections may have ' +
		'sub-section(s), but the sections are illustrative enough to encapsulate ' +
		"all other extra interelated point.<br>So don't worry about details.</font></p>");
	});
	
	$('#MainSec1').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Section One The menu bar</font></h5> ' + 
		'<p><font face="droid">This section contains few menu buttons. This includes ' +
		'four buttons to navigate the various windows of The application.</p> ' +
		'<p>The Exam Continuous Window serves the purpose of a basic calculator with an' +
		'advanced panel to computer all your six ' +
		'(pair) of grades, i.e. <i>Exams</i> and <i>Continuous</i>. <br>The procedure is to simply enter your grades' +
		' in a horizontal ' +
		'order as displayed on the grade sheets. <br>Having entered your exams and continuous ' +
		'grades, the totals of each pair will be shown in the Total Grade Panel, when you click on ' +
		'the calculate button.<br><hr class="ui-btn-hover-a">This window may also be important if your ' +
		'total grades have already been calculated. You can use this window to quickly ' +
		'verify your grades just as you might use your calculator.</p><hr class="ui-btn-hover-a"> <p>The Cumulated grade ' +
		'window button handles the calculation of cumulated grades. This window is designed to reflect the ' +
		'current cumulation method: averaging' +
		' all your grades from year one to year four. <br>After you have calculated your totoal grades you can simply ' +
		'click on this menu item to launch another window which helps you calculate ' +
		'your cumulated average grade point. <hr class="ui-btn-hover-a">The cumulated grade point will be on ' +
		'a separate text field to ensure that a good display of both the total average ' +
		'grades points and the cumulated grade point is achieved.</p><hr class="ui-btn-hover-a"><br>The About Button ' + 
		'displays very important information' + 
		' about the product and also a full grading system table as currently used. This window will ' +
		'give you a first hand knowledge of what this program is designed to do.<hr class="ui-btn-hover-a"><p>The Help Button: ' + 
		'<br>The help button located'+ 
		' in the Title Bar of the About window, will lunch this help page.</font></p>');
	});
	
	$('#MainSec2').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Section Two The Grade Input Panel</font></h5>' + 
		'<p><font face="droid">This is the section where you are to enter ' +
		'your grades in the order you see fit.</p> <p>The results will be displayed based ' +
		'on the order you entered your grades, i.e. the first grade entered will be shown on the first row of the ' +
		'display panel. <br>So you are therefore encouraged to ' +
		'take note of the sequence you use to enter your grades.</p> ' +
		'<p><font color="red">NOTE:</font> Every field ' +
		'in this panel is validated and requires an entry for you grades to be calculated correctly and accepts only' +
		' numeric values [0.00 % - 100 %].</p> ' +
		'<p>If you only want to calculate one or two grades, then you can enter the grade and ignore' + 
		' the <i>Data Errors</i> that will be shown for the other blank fields. ' +
		'So even though the purpose of this window ' +
		'is to calculate all your various grade points, ' +
		' you can also calculate individual grade points with it.</font></p>');
	});
	
	$('#MainSec3').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Section Three The Result Panel</font></h5>' + 
		' <p><font face="droid">This panel displays all ' +
		'your grade points in the order in which you previously entered them.</> <p>Your average grade ' +
		'point is also shown in this panel, so be keen.<p> </p><i>Be mindful that the order ' +
		'you used to enter your total grades counts a lot, as it is also the order ' +
		'in which the grades will be displayed.</i><p>' +
		'Useful remarks are also shown in this panel, in order to give you a quick ' +
		'insight of the meanings of your grades.</font></p>');
	});
	
	$('#MainSec4').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Section Four The Buttons</font></h5> ' + 
		'<p><font face="droid">This section holds most of the ' +
		'controls you would need to perform the calculation.</p><hr class="ui-btn-hover-a"><p>The Calculate Button:<br>' +
		'This button calculates your grades and displays your points in the grade ' +
		'point panel, together with your average grade point. Only press this button ' +
		"after you've entered all the total grades in the provided text boxes.</p>  " +
		'<hr class="ui-btn-hover-a"><p>The Clear Button: <br>This button clears all text areas of the windows, making it ' +
		'available for fresh input after the results are displayed. In order to prevent ' +
		'loss of information you can either save your grades or take notes before ' +
		'clicking this button.</p><hr class="ui-btn-hover-a"><p>The Save Button: <br>Use this button to save ' + 
		'the currently entered grades and other information displaying on the window, ' +
		'and the displayed ' +
		'grade points.<br>It is advisable to first save the result before clearing ' +
		'the screen.</p> ' + '<hr class="ui-btn-hover-a"><p>The Retrieve Button: <br>This button ' +
		"is used to retrieve saved information. After you've calculated your grades, and save them to the system," +
		" this button will be very helpful to retrieve the most recently saved information. <hr class='ui-btn-hover-a'>" +
		"<font color='red'><em><i>Important</i></em></font><br>Ensure that you enter the correct grades before calculating your " +
		"Average grade point. This is especially important if your Average Grade Point is to be calculated.</font></p>");
	});

	/*$('#MainSec5').click(function() {
		$('#ControlRight').html('Section Five The Status Bar This is the last section in the main window. ' +
		'It displays very helpful messages and tips to guide you through your entries, ' +
		'identifying errors and suggested correction of errors. It also displays ' +
		'the current time and date, according to your system settings, to take note ' +
		'of the date and time these calculations were made.');
	});*/
	
	$('#ECOverview').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">The Exam Continuous Window</font></h5> ' + 
		'<p><font face="droid">This is a very flexible window that supplements ' +
		'the functions of a basic calculator. Even though it may appear very simply, it has very advanced ' +
		'algorithms written to greatly aid you in calculating all your grades at once, both exams and ' +
		"continuous and very quickly. The only time you'll waste is on entering the grades.</p>" + 
		'<p>You may consider this window as a mathematical tool in which you can easily ' +
		'pass in complicated figures to crunch into percentages, and riddles out the ' +
		'math for you in seconds.</p> <p>Just patiently fill in the correct figures and bring forth the answers.</p>' +
		'<p>It is as simply as it is, no advanced <i>IT</i> skills required.'  + 
		'<p>You can also enter just the grade you wish to calculate and leave all other fields blank.' +
		'<br> In this can only the grade you entered will be important.</p>' +   
		'<p><font color="red">Warning:</font> This application ' +
		'is not intended to be a reference point to base your arguments, if any mistakes ' +
		'should ensue in your published grades.</font></p>');
	});
	
	$('#ECPro').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Exam and Continuous Grades Calculator</font></h5> ' + 
		'<p><font face="droid">When you first saw this window you ' +
		'may have thought of it as being very complicated and all twisted. Actually, ' +
		'it is something you can master in just a few minutes, which you would spend ' +
		'reading this help tips.<br> Trust me you can be around it all day long without ' +
		'breaking a sweat. <br>All the magic is a quick review of this tutorial to fully ' +
		'comprehend how it works.</p> <p>The grade panel is use to enter ' +
		'the complete set of all your grades.</p>' +
		'<hr class="ui-btn-hover-a"><p><i>As you may have noticed, this program ' +
		'assumes you have no first hand working experience of how to compute your ' +
		'grades, please forgive my ignorance but that what is takes to build a completely ' +
		'functional and useful application such as this.</i></p> <hr class="ui-btn-hover-a">' +
		'<p>The Exams and Continuous coloums and rows have text boxes for all the six set (pair) of your exams and continuous ' +
		'grades. <br>The basic technique is to enter your grades just as it is displayed ' +
		"on the grade sheet. <br>After you've filled in all the text boxes with the correct " +
		'grades (numeric values), gently click on the <i>Calculate Button</i>. This will ' +
		'sum up your grades and apply the correct percentages, (70%) for exams and ' +
		'(30%) for continuous. <br><br><i>Is it not very simple?</i> <br><br>In case you get any error messages ' +
		'when calculating your grades, it is possibly because you entered ' +
		'a grade(s) that is either not within the range of 0% - 100%, or the values ' +
		'are not numeric.</p> <p>These type of errors can simply be corrected by making ' +
		'sure that your entries are within the range of 0% - 100%, and they <font color="red"><i>must ' +
		'be numeric.</i></font></p> <hr class="ui-btn-hover-a"> <p><font color="red">Caution:</font> The grades in this ' + 
		'window must not be a reference point to argue through any mistakes in your published grades.</p>' +
		'<p>The process of calculating your exams and continuous grades might also be ' +
		'relevant if your grades are already pre-calculated by your lecturers, in ' +
		"such an instance the <i>lecturer's calculated grades take precedence</i>. <P>You may " +
		'only want to verify or recalculate your grades. <br>In that case ' +
		'it can only be used to ease your burden in recalculating all your grades, and not to' +
		' use this application to argue out any mistakes made by the the responsible party.</p> ' +
		'<hr class="ui-btn-hover-a"><p>Basically, this window ' +
		'servers the purpose of providing the inputs for the main window. After all ' +
		'your grades have been calculated, you can simply supply the figures to the ' +
		'main window where all your grade points will be calculated and displayed.' + 
		'<br> Or you may use the Complete Grade Calcualtor.</font><p>');
	});
	
	$("#ECCompPro").click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Complete Grade Point Calculator</font></h5>' +
		'<p><font face="droid">This <i>Extra</i> window is richly designed to incorporate all the functions' +
		' of the Main Average Grade Point Calcualtor window, and the Exam Continuous Calculator Window.' +
		'<hr class="ui-btn-hover-a">With this window all you need to do is input just your exams and continuous ' +
		'grades, and click on the calculate button. The Total Grade Percentage for each entered grade will be ' +
		'displayed together with the complete Grade Point for each total grade percentage, and finally ' +
		'the Average Grade Point.<hr class="ui-btn-hover-a">However this window is only available in ' +
		'the registered version of this application. Registeration can be obtained through filing in a 15-character ' +
		' registration key e.g. xxxxx-xxxxx-xxxxx. <hr class="ui-btn-hover-a">Feel free to access all the' +
		' capability of this application and enjoy.</font>' +
		'<font color="#e7f7ff" face="droid" size="2px"><hr class="ui-btn-hover-a">SalmanTech | Grade Point ' + 
		'Calculator<br>All Right Reserved &copy; 2015</font>');
	});
	
	$('#CumuOverview').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">The Cumulated Window</font></h5> ' + 
		'<p><font face="droid">This window is particularly designed to support' + 
		' the new grade cumulation method.</p> <p>It adds extra functionality to the program, ' +
		'extending it beyond the limits of only calculating you total grade points.</p> ' +
		'<p>Using this window, users will be able to compute their cumulated grade points, ' +
		'which is otherwise known as your promotional grade point, for a particular year, or for' +
		' more than one year.</p> <p>Based on the IPAM - University of Sierra Leone ' +
		'rules this should be 3.00 point, for you to ' +
		'successfully proceed to the next year.<hr class="ui-btn-hover-a">And if without any reference in year one and two' + 
		' ,with 3.00 points you may proceed' +
		' to the <i>Honours</i> department.</font></p>');
	});
	
	$('#CumuPro').click(function() {
		$('#ControlRight').html('<h5><font color="#e7f7ff" face="droid" size="2px">Cumulated Grade Window</font></h5> '+ 
		'<p><font face="droid">As early said this window is ' +
		'designed to help you calculate your ' +
		'cumulated grade point, otherwise known as your promotional grade point.</p> ' +
		'<p>Procedure of Use: <br>Click on the "Cumulated" Button in the "Home" screen' +
		'navigation button to display this window.</p> <hr class="ui-btn-hover-a"> <p>If you wish to calculate for only one year. Click' +
		' on the <i>Cumulate One Year Button</i>, the input panel will adjust to accept only' +
		' The First and Second semester average grade points. ' +
		'<br>Enter the average grade points and click the calculate button.' +
		'<br>If you intend to calculate the average grade poins for more than one year, similarly click ' +
		'the intended number of years to readjust to input panels.' +
		'<br><br>This window is also given a button to enter your details. You may choose to enter you ' +
		'details and click on the Save Button after the calculation to keep a record of your Total AGP and' +
		' Cumulated AGP with your full details.' +
		"<br><br>After you've calculated your Average Grade Points " +
		'you can simply follow the above step to fill up this ' +
		'information into the required field.<hr class="ui-btn-hover-a"> <p>When quite ' +
		'certain of your entries, you can gently click on the calculate button. <br>This ' +
		'will automatically perform the calculate operation on your average grade ' +
		'points and display both your Total Average Grade Points, and your Cumulated Average Grade ' +
		'Point.</p><hr class="ui-btn-hover-a"><p>If by any chance you mistakenly entered wrong information, and intend ' +
		'to recalculate the cumulated grade point, simply click on the clear button ' +
		'to clear all entered information, and perform the recalculation suggestibly ' + 
		'with the necessary corrections.</font></p>');
	});	
}); // Help Window Live event


//******************************************************************************************************
$('#Cumulated').live("pageinit", function() {
	
	var oneYear = false;
	var twoYear = false;
	var threeYear = false;
	var fourYear = true;
	var showHideDetails = true;
	
	$("#EnterDepart").hide();
	$(".ctrlDept").hide();

	
	$("#CtrlDetails").hide();
	
	
	//Cumulated Window Save information
	$("#CumuSave").bind('tap', function(event, ui) {
		window.localStorage.setItem('CumuName', $('#Name').val());
		window.localStorage.setItem('CumuID', $('#IdNo').val());
		window.localStorage.setItem('CumuYear', $('#CurrentYr').val());
		window.localStorage.setItem('CumuDepart', $('#Depart').val());
		window.localStorage.setItem('CumuSpyDepart', $('#EnterDepart').val());
		
		window.localStorage.setItem('CumuGP1', $('#CumuInputBox1').val());
		window.localStorage.setItem('CumuGP2', $('#CumuInputBox2').val());
		window.localStorage.setItem('CumuGP3', $('#CumuInputBox3').val());
		window.localStorage.setItem('CumuGP4', $('#CumuInputBox4').val());
		
		window.localStorage.setItem('CumuTGP', $('#TotalAGP').val());
		window.localStorage.setItem('CumuAGP', $('#SemesterAGP').val());
	});
	
	
	//Cumulated Window Retrieve saved information
	$("#CumuRetrieve").bind('tap', function(event, ui) {
		$('#Name').val(window.localStorage.getItem('CumuName'));
		$('#IdNo').val(window.localStorage.getItem('CumuID'));
		$('#CurrentYr').val(window.localStorage.getItem('CumuYear'));
		
		$("#DepartmentTD").hide();
		
		$("#EnterDepart").show();
		$(".ctrlDept").show();
		
		//Check if Specify department is blank
		if (window.localStorage.getItem('CumuSpyDepart') != "")
		{
			$('#EnterDepart').val(window.localStorage.getItem('CumuSpyDepart'));
		}
		else
		{
			$('#EnterDepart').val(window.localStorage.getItem('CumuDepart'));
		}
		
		//Check if Cumulated Grade Point1 is blank in memory
		if (window.localStorage.getItem('CumuGP1') == "") 
		{
			$('#Firstrow').hide();
		}
		else
		{
			$('#Firstrow').show();
			$('#CumuInputBox1').val(window.localStorage.getItem('CumuGP1'));
		}
		
		//Check if Cumulated Grade Point2 is blank in memory
		if (window.localStorage.getItem('CumuGP2') == "") 
		{
			$('#Secondrow').hide();
		}
		else
		{
			$('#Secondrow').show();
			$('#CumuInputBox2').val(window.localStorage.getItem('CumuGP2'));
		}
		
		//Check if Cumulated Grade Point3is blank in memory
		if (window.localStorage.getItem('CumuGP3') == "")
		{
			$('#Thirdrow').hide();
		}
		else
		{
			$('#Thirdrow').show();
			$('#CumuInputBox3').val(window.localStorage.getItem('CumuGP3'));
		}
		
		//Check if Cumulated Grade Point4is blank in memory
		if (window.localStorage.getItem('CumuGP4') == "")
		{
			$('#Fourthrow').hide();
		}
		else
		{
			$('#Fourthrow').show();
			$('#CumuInputBox4').val(window.localStorage.getItem('CumuGP4'));
		}
		
		$('#TotalAGP').val(window.localStorage.getItem('CumuTGP'));
		$('#SemesterAGP').val(window.localStorage.getItem('CumuAGP'));
	});
	
	
	//Cumulated Window Department selection of specification	
	$("#EnterDetails").click(function() {

		
		if (showHideDetails == true)
		{
			$('#textctrl').text("Hide Details");
			$("#CtrlDetails").show();
			showHideDetails = false;
			
		}
		else if (showHideDetails == false)
		{
			$('#textctrl').text("Enter Details");
			$("#CtrlDetails").hide();
			showHideDetails = true;
			
		}
	});
	
	$('#Back').bind('tap', function() {
		
	});
	
	$('#Next').bind('tap', function() {
		history.forward();
	});
	
	$('#Depart').bind("change", function() {
			var department = $('#Depart').val();
			$("#EnterDepart").hide();
			
			if (department == "APA") 
			{
				StdDept = "Applied Accounting";
			}
			else if (department == "IS") 
			{
				StdDept  = "Information Systems";
			}
			else if (department == "BUA")
			{
				StdDept = "Business Administration";
			}
			else if (department == "PSM")
			{
				StdDept = "Public Sector Management";
			}
			else if (department == "FS")
			{
				StdDept = "Financial Services";
			}
			else if (department == "SpecifyDept")
			{	
				$("#DepartmentTD").hide();
				$(".ctrlDept").fadeIn(1000);
				$("#EnterDepart").fadeIn(1000);
			}				
	});
	
	$('#Cumulate1yr').click(function() {
		$('#Thirdrow').hide();
		$('#Fourthrow').hide();
		$('#YearOne').text("First Semester AGP");
		$('#YearTwo').text("Second Semester AGP");
		$('#NumberOfYears').text("One Year Cumulation");
		
		oneYear = true;
		twoYear = false;
		threeYear = false;
		fourYear = false;
		
		$('#TotalAGP').val("");
		$('#SemesterAGP').val("");
		$('#CumuInputBox1').val("");
		$('#CumuInputBox2').val("");
		$('#CumuInputBox3').val("");
		$('#CumuInputBox4').val("");
	});
	
	$('#Cumulate2yr').click(function() {
		$('#Thirdrow').hide();
		$('#Fourthrow').hide();
		$('#YearOne').text("Year One AGP");
		$('#YearTwo').text("Year Two AGP");
		$('#NumberOfYears').text("Two Years Cumulation");

		oneYear = false;
		twoYear = true;
		threeYear = false;
		fourYear = false;
		
		$('#TotalAGP').val("");
		$('#SemesterAGP').val("");
		$('#CumuInputBox1').val("");
		$('#CumuInputBox2').val("");
		$('#CumuInputBox3').val("");
		$('#CumuInputBox4').val("");
	});
	
	$('#Cumulate3yr').click(function() {
		$('#Fourthrow').hide();
		$('#Thirdrow').show();
		$('#YearOne').text("Year One AGP");
		$('#YearTwo').text("Year Two AGP");
		$('#YearThree').text("Year Three AGP");
		$('#NumberOfYears').text("Three Years Cumulation");

		oneYear = false;
		twoYear = false;
		threeYear = true;
		fourYear = false;
		
		$('#TotalAGP').val("");
		$('#SemesterAGP').val("");
		$('#CumuInputBox1').val("");
		$('#CumuInputBox2').val("");
		$('#CumuInputBox3').val("");
		$('#CumuInputBox4').val("");
	});
	
	$('#Cumulate4yr').click(function() {
		$('#Firstrow').show();
		$('#Secondrow').show();
		$('#Thirdrow').show();
		$('#Fourthrow').show();
		$('#YearOne').text("Year One AGP");
		$('#YearTwo').text("Year Two AGP");
		$('#YearThree').text("Year Three AGP");
		$("#YearFour").text("Year Four AGP");
		$('#NumberOfYears').text("Four Years Cumulation");

		oneYear = false;
		twoYear = false;
		threeYear = false;
		fourYear = true;
		
		$('#TotalAGP').val("");
		$('#SemesterAGP').val("");
		$('#CumuInputBox1').val("");
		$('#CumuInputBox2').val("");
		$('#CumuInputBox3').val("");
		$('#CumuInputBox4').val("");
	});
	
	$('#cumuCalBtn').bind("tap", function() {	
		
		//One year cumulation
		if (oneYear == true)
		{		
			// Check First and Second semester grades for char
			var checkFsY1 = $('#CumuInputBox1').val();
			var checkSsY1 = $('#CumuInputBox2').val();
			
			
			for (var i = 0; i <= 25; i++)
			{	//Validation Logic for one year total and cumulated grades
				if (isNaN(checkFsY1) ||isNaN(checkSsY1))
				{
					if (isNaN(checkFsY1) && isNaN(checkSsY1))
					{
						$('#CumuInputBox2').select();
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkFsY1))
					{
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkSsY1))
					{
						$('#CumuInputBox2').select();
					}
				}
				else
				{
					var checkAGP1 = parseFloat($('#CumuInputBox1').val());
					var checkAGP2 = parseFloat($('#CumuInputBox2').val());
				
					//Checking input1
					if ((checkAGP1 >= 0 && checkAGP1 <= 4) && (checkAGP2 >= 0 && checkAGP2 <= 4))
					{
						var firstSemester = parseFloat($('#CumuInputBox1').val());
						var secondSemester = parseFloat($('#CumuInputBox2').val());
					}
					else
					{						
						if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 < 0 || checkAGP2 > 4))
						{
							$('#CumuInputBox2').select();
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 >= 0 || checkAGP2 <= 4))
						{
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 < 0 || checkAGP2 > 4))
						{
							$('#CumuInputBox2').select();
						}
						
					}	
				}
			} // end of for loop
							
			var yr1CumulatedGP = firstSemester + secondSemester;
			var AGPyr1 = yr1CumulatedGP / 2;
			var tatalYr1 = yr1CumulatedGP;
			
		//Year One Total Average Grade Point Conversion
		var conAns = tatalYr1.toString();
		
		if (conAns.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns.substring(0, 4);
			var retrieve5 = conAns.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						$('#TotalAGP').val(char1 + char2 + char3 + numChar4 + " Points");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#TotalAGP').val(char1 + char2 + numChar3 + " Points");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TotalAGP').val(numChar1 + char2 + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#TotalAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#TotalAGP').val(char1 + char2 + char3 + char4 + " Points");
				}
			}						
		}
		else if (conAns.length <= 4)
		{
			var retrieve4 = conAns.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{			
				$('#TotalAGP').val(char1 + char2 + char3 + "0" + " Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char2 != "." && char1 >= 0)
			{
				$('#TotalAGP').val(char1 + "." + "0" + "0" + " Points");
			}
			else if (isNaN(char1))
			{
				$('#TotalAGP').val("Data Error");
			}
		}
		
		//Ending of Year One Total Average Grade Point Conversion
		
		//One Year Cumulated Average Grade Point Conversion
		var conAns1 = AGPyr1.toString();
		
		if (conAns1.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns1.substring(0, 4);
			var retrieve5 = conAns1.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						$('#SemesterAGP').val(char1 + char2 + char3 + numChar4 + " Points");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#SemesterAGP').val(char1 + char2 + numChar3 + " Points");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#SemesterAGP').val(numChar1 + char2 + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#SemesterAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
				}
			}						
		}
		else if (conAns1.length <= 4)
		{
			var retrieve4 = conAns1.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{			
				$('#SemesterAGP').val(char1 + char2 + char3 + "0" + " Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char2 != "." && char1 >= 0)
			{
				$('#SemesterAGP').val(char1 + "." + "0" + "0" + " Points");
			}
			else if (isNaN(char1))
			{
				$('#SemesterAGP').val("Data Error");
			}
		}
		
		//Ending of Year One Average Grade Point Conversion
			/*$('#TotalAGP').val(tatalYr1);					
			$('#SemesterAGP').val(AGPyr1);*/				
		}
		else if (twoYear == true)
		{
			// Check First and Second semester grades for char
			var checkFY1 = $('#CumuInputBox1').val();
			var checkSY1 = $('#CumuInputBox2').val();			
			
			for (var i = 0; i <= 25; i++)
			{	// Validation Logic for two years total and cumulated grades
				if (isNaN(checkFY1) || isNaN(checkSY1))
				{
					if (isNaN(checkFY1) && isNaN(checkSY1))
					{
						$('#CumuInputBox2').select();
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkFY1))
					{
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkSY1))
					{
						$('#CumuInputBox2').select();
					}
				}
				else
				{
					var checkAGP1 = parseFloat($('#CumuInputBox1').val());;
					var checkAGP2 = parseFloat($('#CumuInputBox2').val());;
			
					//Checking input1
					if ((checkAGP1 >= 0 && checkAGP1 <= 4) && (checkAGP2 >= 0 && checkAGP2 <= 4))
					{
						var firstYear = parseFloat($('#CumuInputBox1').val());
						var secondYear = parseFloat($('#CumuInputBox2').val());
					}
					else
					{
						if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 < 0 || checkAGP2 > 4))
						{
							$('#CumuInputBox2').select();
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 >= 0 || checkAGP2 <= 4))
						{
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 < 0 || checkAGP2 > 4))
						{
							$('#CumuInputBox2').select();
						}
					}	
				}
			} // end of for loop
			
			var yr2CumulatedGP = firstYear + secondYear;
			var AGPyr2 = yr2CumulatedGP / 2;
			var tatalYr2 = yr2CumulatedGP;
			
		//Year Two Total Average Grade Point Conversion
		var conAns = tatalYr2.toString();
		
		if (conAns.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns.substring(0, 4);
			var retrieve5 = conAns.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						$('#TotalAGP').val(char1 + char2 + char3 + numChar4 + " Points");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#TotalAGP').val(char1 + char2 + numChar3 + " Points");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TotalAGP').val(numChar1 + char2 + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#TotalAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#TotalAGP').val(char1 + char2 + char3 + char4 + " Points");
				}
			}						
		}
		else if (conAns.length <= 4)
		{
			var retrieve4 = conAns.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{			
				$('#TotalAGP').val(char1 + char2 + char3 + "0" + " Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char2 != "." && char1 >= 0)
			{
				$('#TotalAGP').val(char1 + "." + "0" + "0" + " Points");
			}
			else if (isNaN(char1))
			{
				$('#TotalAGP').val("Data Error");
			}
		}
		
		//Ending of Total Average Grade Point Conversion
		
		//Two Years Cumulated Average Grade Point Conversion
		var conAns1 = AGPyr2.toString();
		
		if (conAns1.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns1.substring(0, 4);
			var retrieve5 = conAns1.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						$('#SemesterAGP').val(char1 + char2 + char3 + numChar4 + " Points");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#SemesterAGP').val(char1 + char2 + numChar3 + " Points");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#SemesterAGP').val(numChar1 + char2 + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#SemesterAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
				}
			}						
		}
		else if (conAns1.length <= 4)
		{
			var retrieve4 = conAns1.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{			
				$('#SemesterAGP').val(char1 + char2 + char3 + "0" + " Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char2 != "." && char1 >= 0)
			{
				$('#SemesterAGP').val(char1 + "." + "0" + "0" + " Points");
			}
			else if (isNaN(char1))
			{
				$('#SemesterAGP').val("Data Error");
			}
		}
		
		//Ending of Year Two Average Grade Point Conversion
			/*$('#TotalAGP').val(tatalYr2);					
			$('#SemesterAGP').val(AGPyr2);*/
		}
		else if (threeYear == true)
		{
			// Check First and Second semester grades for char
			var checkFY1 = $('#CumuInputBox1').val();
			var checkSY1 = $('#CumuInputBox2').val();
			var checkTY1 = $('#CumuInputBox3').val();		
		
			for (var i = 0; i <= 25; i++)
			{	//Validation Logic for three years total and cumulated grades
				if (isNaN(checkFY1) || isNaN(checkSY1) || isNaN(checkTY1))
				{
					if (isNaN(checkFY1) && isNaN(checkSY1) & isNaN(checkTY1))
					{
						$('#CumuInputBox3').select();
						$('#CumuInputBox2').select();
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkFY1))
					{
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkSY1))
					{
						$('#CumuInputBox2').select();
					}
					else if (isNaN(checkTY1))
					{
						$('#CumuInputBox3').select();
					}
				}
				else
				{
					var checkAGP1 = parseFloat($('#CumuInputBox1').val());;
					var checkAGP2 = parseFloat($('#CumuInputBox2').val());;
					var checkAGP3 = parseFloat($('#CumuInputBox3').val());
					
					//Checking input1
					if ((checkAGP1 >= 0 && checkAGP1 <= 4) && (checkAGP2 >= 0 && checkAGP2 <= 4) && (checkAGP3 >= 0 && checkAGP3 <= 4))
					{
						var firstYear = parseFloat($('#CumuInputBox1').val());
						var secondYear = parseFloat($('#CumuInputBox2').val());
						var thirdYear = parseFloat($('#CumuInputBox3').val());
					}
					else
					{
						if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 < 0 || checkAGP2 > 4) &&
							(checkAGP3 < 0 || checkAGP3 > 4))
						{
							$('#CumuInputBox3').select();
							$('#CumuInputBox2').select();
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 >= 0 || checkAGP2 <= 4) && 
								 (checkAGP3 >= 0 || checkAGP3 <= 4))
						{
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 < 0 || checkAGP2 > 4) && 
								 (checkAGP3 >= 0 || checkAGP3 <= 4))
						{
							$('#CumuInputBox2').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 >= 0 || checkAGP2 <= 4) && 
								 (checkAGP3 < 0 || checkAGP3 > 4))
						{
							$('#CumuInputBox3').select();
						}
					}	
				}
			} // end of for loop
						
			var yr2CumulatedGP = firstYear + secondYear + thirdYear;
			var AGPyr3 = yr2CumulatedGP / 3;
			var tatalYr3 = yr2CumulatedGP;
			
		//Year Three Total Average Grade Point Conversion
		var conAns = tatalYr3.toString();
		
		if (conAns.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns.substring(0, 5);
			var retrieve6 = conAns.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);		//Decimal Place can either be this, or
			var char3 = retrieve5.charAt(2);		//Decimal Place

			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TotalAGP').val(char1 + char2 + char3 + char4 + numChar5 + " Points");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TotalAGP').val(char1 + char2 + numChar3 + numChar4 + "0" + " Points");
					}
					else if(numChar5 > 9 && char4 >= 9 && char3 <= 8 && char2 == ".")
					{
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#TotalAGP').val(char1 + char2 + numChar3 + "0" + "0" + " Points");
					}
					else if (numChar5 > 9 && char4 > 9 && char3 >= 9 && char2 == ".")
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TotalAGP').val(numChar1 + char2 + numChar3 + "0" + "0" + " Points");
					}
					else if (numChar5 > 9 && char4 > 9 && char3 == "." && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TotalAGP').val(char1 + numChar2 + char3 + "0" + "0" + " Points");
					}
					else if (numChar5 > 9 && char4 > 9 && char3 == "." && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TotalAGP').val(numChar1 + numChar2 + char3 + "0" + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#TotalAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#TotalAGP').val(char1 + char2 + char3 + char4 +  char5 + " Points");
				}
				
			}						
		}
		else if (conAns.length <= 5)
		{
			var retrieve5 = conAns.substring(0, 5);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1); 		
			var char3 = retrieve5.charAt(2);		//Decimal place can be either this or
			var char4 = retrieve5.charAt(3);		//Decimal place
			
			var char5 = retrieve5.charAt(4);
			
			var newChar1 = parseInt(char1);
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			
			var newChar5 =  parseInt(char5);
			

			if (isNaN(newChar4) && isNaN(newChar5) && char2 == ".")
			{			
				$('#TotalAGP').val(char1 + char2 + char3 + "0" + "0" +" Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + "0" + "0" + " Points");
			}
			else if (newChar2 >= 0 && newChar4 >= 0 && isNaN(newChar5) && char3 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + char4 + "0" + " Points");
			}
			else if (newChar1 >= 0 && newChar3 >= 0 && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char3 != "." && char1 >= 0 && char2 >= 0 && isNaN(newChar4) && isNaN(newChar5))
			{
				$('#TotalAGP').val(char1 + char2 + "." + "0" + "0" + " Points");
			}
			else if (char2 != "." && char3 != "." && char1 >= 0)
			{
				$('#TotalAGP').val(char1 + char2 + "." + "0" + "0" + " Points");
			}
			else if (char2 != "." && char3 == "." && char1 >= 0 && char4 >= 0 && char5 >= 0)
			{
				$('#TotalAGP').val(char1 + char2 + "." + char4 + char5 + " Points");
			}
			else if (isNaN(char1) && isNaN(char2))
			{
				$('#TotalAGP').val("Data Error");
			}
		}
		
		//Ending of Three Year Total Average Grade Point Conversion
		
		//Three Year Cumulated Grade Point
		var conAns1 = AGPyr3.toString();
		
		if (conAns1.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns1.substring(0, 4);
			var retrieve5 = conAns1.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						$('#SemesterAGP').val(char1 + char2 + char3 + numChar4 + " Points");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#SemesterAGP').val(char1 + char2 + numChar3 + "0" + " Points");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#SemesterAGP').val(numChar1 + char2 + "0" + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#SemesterAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
				}
			}						
		}
		else if (conAns1.length <= 4)
		{
			var retrieve4 = conAns1.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{			
				$('#SemesterAGP').val(char1 + char2 + char3 + "0" + " Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char2 != "." && char1 >= 0)
			{
				$('#SemesterAGP').val(char1 + "." + "0" + "0" + " Points");
			}
			else if (isNaN(char1))
			{
				$('#SemesterAGP').val("Data Error");
			}
		}
		
		//Ending of Year Three Average Grade Point Conversion			
			/*$('#TotalAGP').val(tatalYr3);					
			$('#SemesterAGP').val(AGPyr3);*/
		}
		else if (fourYear == true)
		{
			// Check First, Second, Third and Fourth Year grades for characters
			var checkFY1 = $('#CumuInputBox1').val();
			var checkSY1 = $('#CumuInputBox2').val();
			var checkTY1 = $('#CumuInputBox3').val();
			var checkFrY1 = $('#CumuInputBox4').val();
			
			
			for (var i = 0; i <= 25; i++)
			{	//Validation Logic for four years total and cumulated grade points
				if (isNaN(checkFY1) || isNaN(checkSY1) || isNaN(checkTY1) || isNaN(checkFrY1))
				{
					if (isNaN(checkFY1) && isNaN(checkSY1) & isNaN(checkTY1) & isNaN(checkFrY1))
					{
						$('#CumuInputBox4').select();
						$('#CumuInputBox3').select();
						$('#CumuInputBox2').select();
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkFY1))
					{
						$('#CumuInputBox1').select();
					}
					else if (isNaN(checkSY1))
					{
						$('#CumuInputBox2').select();
					}
					else if (isNaN(checkTY1))
					{
						$('#CumuInputBox3').select();
					}
					else if (isNaN(checkFrY1))
					{
						$('#CumuInputBox4').select();
					}
				}
				else
				{
					var checkAGP1 = parseFloat($('#CumuInputBox1').val());;
					var checkAGP2 = parseFloat($('#CumuInputBox2').val());;
					var checkAGP3 = parseFloat($('#CumuInputBox3').val());
					var checkAGP4 = parseFloat($('#CumuInputBox4').val());
			
					//Checking input1
					if ((checkAGP1 >= 0 && checkAGP1 <= 4) && (checkAGP2 >= 0 && checkAGP2 <= 4) && 
						(checkAGP3 >= 0 && checkAGP3 <= 4) && (checkAGP4 >= 0 && checkAGP4 <= 4))
					{
						var firstYear = parseFloat($('#CumuInputBox1').val());
						var secondYear = parseFloat($('#CumuInputBox2').val());
						var thirdYear = parseFloat($('#CumuInputBox3').val());
						var fourthYear  = parseFloat($('#CumuInputBox4').val());
					}
					else
					{
						if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 < 0 || checkAGP2 > 4) &&
							(checkAGP3 < 0 || checkAGP3 > 4) && (checkAGP4 < 0 || checkAGP4 > 4))
						{
							$('#CumuInputBox4').select();
							$('#CumuInputBox3').select();
							$('#CumuInputBox2').select();
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 < 0 || checkAGP1 > 4) && (checkAGP2 >= 0 || checkAGP2 <= 4) && 
								 (checkAGP3 >= 0 || checkAGP3 <= 4) && (checkAGP4 >= 0 || checkAGP4 <= 4))
						{
							$('#CumuInputBox1').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 < 0 || checkAGP2 > 4) && 
								 (checkAGP3 >= 0 || checkAGP3 <= 4) && (checkAGP4 >= 0 || checkAGP4 <= 4))
						{
							$('#CumuInputBox2').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 >= 0 || checkAGP2 <= 4) && 
								 (checkAGP3 < 0 || checkAGP3 > 4) && (checkAGP4 >= 0 || checkAGP4 <= 4))
						{
							$('#CumuInputBox3').select();
						}
						else if ((checkAGP1 >= 0 || checkAGP1 <= 4) && (checkAGP2 >= 0 || checkAGP2 <= 4) && 
								 (checkAGP3 >+ 0 || checkAGP3 <= 4) && (checkAGP4 < 0 || checkAGP4 > 4))
						{
							$('#CumuInputBox4').select();
						}
					}	
				}
			} // end of for loop
						
			var yr2CumulatedGP = firstYear + secondYear + thirdYear + fourthYear;
			var AGPyr4 = yr2CumulatedGP / 4;
			var tatalYr4 = yr2CumulatedGP;
			
		//Year Four Total Average Grade Point Conversion
		var conAns = tatalYr4.toString();
		
		if (conAns.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns.substring(0, 5);
			var retrieve6 = conAns.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);		//Decimal Place can either be this, or
			var char3 = retrieve5.charAt(2);		//Decimal Place

			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TotalAGP').val(char1 + char2 + char3 + char4 + numChar5 + " Point");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TotalAGP').val(char1 + char2 + numChar3 + numChar4 + "0" + " Point");
					}
					else if(numChar5 > 9 && char4 >= 9 && char3 <= 8 && char2 == ".")
					{
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#TotalAGP').val(char1 + char2 + numChar3 + "0" + "0" + " Point");
					}
					else if (numChar5 > 9 && char4 > 9 && char3 >= 9 && char2 == ".")
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TotalAGP').val(numChar1 + char2 + numChar3 + "0" + "0" + " Point");
					}
					else if (numChar5 > 9 && char4 > 9 && char3 == "." && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TotalAGP').val(char1 + numChar2 + char3 + "0" + "0" + " Point");
					}
					else if (numChar5 > 9 && char4 > 9 && char3 == "." && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TotalAGP').val(numChar1 + numChar2 + char3 + "0" + "0" + " Point");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#TotalAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#TotalAGP').val(char1 + char2 + char3 + char4 +  char5 + " Point");
				}
				
			}						
		}
		else if (conAns.length <= 5)
		{
			var retrieve5 = conAns.substring(0, 5);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1); 		
			var char3 = retrieve5.charAt(2);		//Decimal place can be either this or
			var char4 = retrieve5.charAt(3);		//Decimal place
			
			var char5 = retrieve5.charAt(4);
			
			var newChar1 = parseInt(char1);
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			
			var newChar5 =  parseInt(char5);
			

			if (isNaN(newChar4) && isNaN(newChar5) && char2 == ".")
			{			
				$('#TotalAGP').val(char1 + char2 + char3 + "0" + "0" +" Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + "0" + "0" + " Points");
			}
			else if (newChar2 >= 0 && newChar4 >= 0 && isNaN(newChar5) && char3 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + char4 + "0" + " Points");
			}
			else if (newChar1 >= 0 && newChar3 >= 0 && char2 == ".")
			{
				$('#TotalAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char3 != "." && char1 >= 0 && char2 >= 0 && isNaN(newChar4) && isNaN(newChar5))
			{
				$('#TotalAGP').val(char1 + char2 + "." + "0" + "0" + " Points");
			}
			else if (char2 != "." && char3 != "." && char1 >= 0)
			{
				$('#TotalAGP').val(char1 + char2 + "." + "0" + "0" + " Points");
			}
			else if (char2 != "." && char3 == "." && char1 >= 0 && char4 >= 0 && char5 >= 0)
			{
				$('#TotalAGP').val(char1 + char2 + "." + char4 + char5 + " Points");
			}
			else if (isNaN(char1) && isNaN(char2))
			{
				$('#TotalAGP').val("Data Error");
			}
		}
		
		//Ending of Total Average Grade Point Conversion
		
		//Four Year Cumulated Grade Point
		var conAns1 = AGPyr4.toString();
		
		if (conAns1.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns1.substring(0, 4);
			var retrieve5 = conAns1.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						$('#SemesterAGP').val(char1 + char2 + char3 + numChar4 + " Points");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						$('#SemesterAGP').val(char1 + char2 + numChar3 + "0" + " Points");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#SemesterAGP').val(numChar1 + char2 + "0" + "0" + " Points");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						$('#SemesterAGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{
					$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
				}
			}						
		}
		else if (conAns1.length <= 4)
		{
			var retrieve4 = conAns1.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{			
				$('#SemesterAGP').val(char1 + char2 + char3 + "0" + " Points");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + "0" + "0" + " Points");
			}
			else if (newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				$('#SemesterAGP').val(char1 + char2 + char3 + char4 + " Points");
			}
			else if (char2 != "." && char1 >= 0)
			{
				$('#SemesterAGP').val(char1 + "." + "0" + "0" + " Points");
			}
			else if (isNaN(char1))
			{
				$('#SemesterAGP').val("Data Error");
			}
		}
		
		//Ending of Year Four Average Grade Point Conversion
			
			/*$('#TotalAGP').val(tatalYr4);					
			$('#SemesterAGP').val(AGPyr4);*/
		}
	});
			
	$('#CumuClearBtn').bind('tap', function() {
		
		$("#DepartmentTD").show();
		
		$("#EnterDepart").hide();
		$(".ctrlDept").hide();
		
		$('#TotalAGP').val("");
		$('#SemesterAGP').val("");
		$('#CumuInputBox1').val("");
		$('#CumuInputBox2').val("");
		$('#CumuInputBox3').val("");
		$('#CumuInputBox4').val("");
		
		$('#Name').val("");
		$('#IdNo').val("");
		$('#CurrentYr').val("");
		$('#EnterDepart').val("");
		$('#').val("");
	});

}); // Cumulated Window live event


//**************************************************************************************************************************
$('#ExamCon').live("pageinit", function() {

	var commentGrade1;
	var commentGrade2;
	var commentGrade3;
	var commentGrade4;
	var commentGrade5;
	var commentGrade6;
	
	//Saved Exam Continuous Window Information	
	$('#ECSave').bind('tap', function(event, ui) {	
		window.localStorage.setItem('ExamInput1', $('#Ex1').val());
		window.localStorage.setItem('ExamInput2', $('#Ex2').val());
		window.localStorage.setItem('ExamInput3', $('#Ex3').val());
		window.localStorage.setItem('ExamInput4', $('#Ex4').val());
		window.localStorage.setItem('ExamInput5', $('#Ex5').val());
		window.localStorage.setItem('ExamInput6', $('#Ex6').val());
		
		window.localStorage.setItem('ConOutput1', $('#Con1').val());
		window.localStorage.setItem('ConOutput2', $('#Con2').val());
		window.localStorage.setItem('ConOutput3', $('#Con3').val());
		window.localStorage.setItem('ConOutput4', $('#Con4').val());
		window.localStorage.setItem('ConOutput5', $('#Con5').val());
		window.localStorage.setItem('ConOutput6', $('#Con6').val());
		
		
		window.localStorage.setItem('TGOutput1', $('#TG1').val());
		window.localStorage.setItem('TGOutput2', $('#TG2').val());
		window.localStorage.setItem('TGOutput3', $('#TG3').val());
		window.localStorage.setItem('TGOutput4', $('#TG4').val());
		window.localStorage.setItem('TGOutput5', $('#TG5').val());
		window.localStorage.setItem('TGOutput6', $('#TG6').val());
	});
	
	$('#ECRetrieve').bind("tap", function(event, ui) {
		$('#Ex1').val(window.localStorage.getItem('ExamInput1'));
		$('#Ex2').val(window.localStorage.getItem('ExamInput2'));
		$('#Ex3').val(window.localStorage.getItem('ExamInput3'));
		$('#Ex4').val(window.localStorage.getItem('ExamInput4'));
		$('#Ex5').val(window.localStorage.getItem('ExamInput5'));
		$('#Ex6').val(window.localStorage.getItem('ExamInput6'));
		
		$('#Con1').val(window.localStorage.getItem('ConOutput1'));
		$('#Con2').val(window.localStorage.getItem('ConOutput2'));
		$('#Con3').val(window.localStorage.getItem('ConOutput3'));
		$('#Con4').val(window.localStorage.getItem('ConOutput4'));
		$('#Con5').val(window.localStorage.getItem('ConOutput5'));
		$('#Con6').val(window.localStorage.getItem('ConOutput6'));
		
		$('#TG1').val(window.localStorage.getItem('TGOutput1'));
		$('#TG2').val(window.localStorage.getItem('TGOutput2'));
		$('#TG3').val(window.localStorage.getItem('TGOutput3'));
		$('#TG4').val(window.localStorage.getItem('TGOutput4'));
		$('#TG5').val(window.localStorage.getItem('TGOutput5'));
		$('#TG6').val(window.localStorage.getItem('TGOutput6'));
	});
	
	
	

	//Exam and Continuous Calculate Button
	$("#ECCalBtn").bind("tap", function() {
		
		OutputComment = "";
		
		//Clear Error markings from input boxes
		$('#Ex1').css({"color" : "#FFFFFF"});
		$('#Con1').css({"color" : "#FFFFFF"});
		
		$('#Ex2').css({"color" : "#FFFFFF"});
		$('#Con2').css({"color" : "#FFFFFF"});
		
		$('#Ex3').css({"color" : "#FFFFFF"});
		$('#Con3').css({"color" : "#FFFFFF"});
		
		$('#Ex4').css({"color" : "#FFFFFF"});
		$('#Con4').css({"color" : "#FFFFFF"});
		
		$('#Ex5').css({"color" : "#FFFFFF"});
		$('#Con5').css({"color" : "#FFFFFF"});
		
		$('#Ex6').css({"color" : "#FFFFFF"});
		$('#Con6').css({"color" : "#FFFFFF"});
		
		// Check individual grades for any character i.e. either a - z or A - Z
		var smallCaps = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
							 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

		var largeCaps = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
							 "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
					
							 
		// Checking range of exams values				// Checking range of continuous values
		var checkex1 = parseFloat($('#Ex1').val());		var checkcon1 = parseFloat($('#Con1').val());
		var checkex2 = parseFloat($('#Ex2').val());		var checkcon2 = parseFloat($('#Con2').val());
		var checkex3 = parseFloat($('#Ex3').val());		var checkcon3 = parseFloat($('#Con3').val());
		var checkex4 = parseFloat($('#Ex4').val());		var checkcon4 = parseFloat($('#Con4').val());
		var checkex5 = parseFloat($('#Ex5').val());		var checkcon5 = parseFloat($('#Con5').val());
		var checkex6 = parseFloat($('#Ex6').val());		var checkcon6 = parseFloat($('#Con6').val());

		// Check all Exams grades for char		// Check all continuous grades for char
		var checkNumex1 = $('#Ex1').val();		var checkNumcon1 = $('#Con1').val();
		var checkNumex2 = $('#Ex2').val();		var checkNumcon2 = $('#Con2').val();
		var checkNumex3 = $('#Ex3').val();		var checkNumcon3 = $('#Con3').val();
		var checkNumex4 = $('#Ex4').val();		var checkNumcon4 = $('#Con4').val();
		var checkNumex5 = $('#Ex5').val();		var checkNumcon5 = $('#Con5').val();
		var checkNumex6 = $('#Ex6').val();		var checkNumcon6 = $('#Con6').val();		


			for (var i = 0; i <= 25; i++)
		{
			if (isNaN(checkNumex1) || isNaN(checkNumcon1))
			{
				if (isNaN(checkNumex1) && isNaN(checkNumcon1))
				{
					$('#Con1').select();
					$('#Ex1').select();
					
				}
				else if (isNaN(checkNumex1))
				{
					$('#Ex1').select();
				}
				else if (isNaN(checkNumcon1))
				{
					$('#Con1').select();
				}
			}
			else
			{

				//Check Exam and Continuous input1 for range exception
				if((checkex1 >= 0 && checkex1 <= 100) && (checkcon1 >= 0 && checkcon1 <= 100))
				{
					var ex1 = .7 * parseFloat($('#Ex1').val());
					var con1 = .3 * parseFloat($('#Con1').val());
				}
				else
				{
					if(checkex1 < 0 || checkex1 > 100)
					{
						$('#Ex1').css({"color" : "red"});
					}
					else if(checkcon1 < 0 || checkcon1 > 100)
					{
						$('#Con1').css({"color" : "red"});
					}
			
					if((checkex1 < 0 || checkex1 > 100) && (checkcon1 < 0 || checkcon1 > 100))
					{
						$('#Ex1').css({"color" : "red"});
						$('#Con1').css({"color" : "red"});
					}
				}
			}
		
			if	(isNaN(checkNumex2) || isNaN(checkNumcon2))
			{
				if (isNaN(checkNumex2) && isNaN(checkNumcon2))
				{
					$('#Con2').select();
					$('#Ex2').select();
					
				}
				else if (isNaN(checkNumex2))
				{
					$('#Ex2').select();
				}
				else if (isNaN(checkNumcon2))
				{
					$('#Con2').select();
				}
			}
			else
			{

				//Check Exam and Continuous input2 for range exception
				if((checkex2 >= 0 && checkex2 <= 100) && (checkcon2 >= 0 && checkcon2 <= 100))
				{
					var ex2 = .7 * parseFloat($('#Ex2').val());
					var con2 = .3 * parseFloat($('#Con2').val());
				}
				else
				{
			
					if(checkex2 < 0 || checkex2 > 100)
					{
						$('#Ex2').css({"color" : "red"});
					}
					else if(checkcon2 < 0 || checkcon2 > 100)
					{
						$('#Con2').css({"color" : "red"});
					}
			
					if((checkex2 < 0 || checkex2 > 100) && (checkcon2 < 0 || checkcon2 > 100))
					{
						$('#Ex2').css({"color" : "red"});
						$('#Con2').css({"color" : "red"});
					}
				}
			}
	
			if	(isNaN(checkNumex3) || isNaN(checkNumcon3))
			{
				if (isNaN(checkNumex3) && isNaN(checkNumcon3))
				{
					$('#Con3').select();
					$('#Ex3').select();
					
				}
				else if (isNaN(checkNumex3))
				{
					$('#Ex3').select();
				}
				else if (isNaN(checkNumcon3))
				{
					$('#Con3').select();
				}
			}
			else
			{

				//Check Exam and Continuous input3 for range exception
				if((checkex3 >= 0 && checkex3 <= 100) && (checkcon3 >= 0 && checkcon3 <= 100))
				{
					var ex3 = .7 * parseFloat($('#Ex3').val());
					var con3 = .3 * parseFloat($('#Con3').val());
				}
				else
				{
					if(checkex3 < 0 || checkex3 > 100)
					{
						$('#Ex3').css({"color" : "red"});
					}
					else if(checkcon3 < 0 || checkcon3 > 100)
					{
						$('#Con3').css({"color" : "red"});
					}
			
					if((checkex3 < 0 || checkex3 > 100) && (checkcon3 < 0 || checkcon3 > 100))
					{
						$('#Ex3').css({"color" : "red"});
						$('#Con3').css({"color" : "red"});
					}
				}
			}
		
			if	(isNaN(checkNumex4) || isNaN(checkNumcon4))
			{
				if (isNaN(checkNumex4) && isNaN(checkNumcon4))
				{
					$('#Con4').select();
					$('#Ex4').select();
					
				}
				else if (isNaN(checkNumex4))
				{
					$('#Ex4').select();
				}
				else if (isNaN(checkNumcon4))
				{
					$('#Con4').select();
				}
			}
			else
			{

				//Check Exam and Continuous input4 for range exception
				if((checkex4 >= 0 && checkex4 <= 100) && (checkcon4 >= 0 && checkcon4 <= 100))
				{
					var ex4 = .7 * parseFloat($('#Ex4').val());
					var con4 = .3 * parseFloat($('#Con4').val());
				}
				else
				{
					if(checkex4 < 0 || checkex4 > 100)
					{
						$('#Ex4').css({"color" : "red"});
					}
					else if(checkcon2 < 0 || checkcon2 > 100)
					{
						$('#Con4').css({"color" : "red"});
					}
			
					if((checkex4 < 0 || checkex4 > 100) && (checkcon4 < 0 || checkcon4 > 100))
					{
						$('#Ex4').css({"color" : "red"});
						$('#Con4').css({"color" : "red"});
					}
				}
			}

			if	(isNaN(checkNumex5) || isNaN(checkNumcon5))
			{
				if (isNaN(checkNumex5) && isNaN(checkNumcon5))
				{
					$('#Con5').select();
					$('#Ex5').select();
					
				}
				else if (isNaN(checkNumex5))
				{
					$('#Ex5').select();
				}
				else if (isNaN(checkNumcon5))
				{
					$('#Con5').select();
				}
			}
			else
			{

				//Check Exam and Continuous input5 for range exception
				if((checkex5 >= 0 && checkex5 <= 100) && (checkcon5 >= 0 && checkcon5 <= 100))
				{
					var ex5 = .7 * parseFloat($('#Ex5').val());
					var con5 = .3 * parseFloat($('#Con5').val());
				}
				else
				{
					if(checkex5 < 0 || checkex5 > 100)
					{
						$('#Ex5').css({"color" : "red"});
					}
					else if(checkcon5 < 0 || checkcon5 > 100)
					{
						$('#Con5').css({"color" : "red"});
					}
					
					if((checkex5 < 0 || checkex5 > 100) && (checkcon5 < 0 || checkcon5 > 100))
					{
						$('#Ex5').css({"color" : "red"});
						$('#Con5').css({"color" : "red"});
					}
				}
			}

			if	(isNaN(checkNumex6) || isNaN(checkNumcon6))
			{
				if (isNaN(checkNumex6) && isNaN(checkNumcon6))
				{
					$('#Con6').select();
					$('#Ex6').select();
					
				}
				else if (isNaN(checkNumex6))
				{
					$('#Ex6').select();
				}
				else if (isNaN(checkNumcon6))
				{
					$('#Con6').select();
				}
			}
			else
			{				

				//Check Exam and Continuous input6 for range exception
				if((checkex6 >= 0 && checkex6 <= 100) && (checkcon6 >= 0 && checkcon6 <= 100))
				{
					var ex6 = .7 * parseFloat($('#Ex6').val());
					var con6 = .3 * parseFloat($('#Con6').val());
				}
				else
				{
					if(checkex6 < 0 || checkex6 > 100)
					{
						$('#Ex6').css({"color" : "red"});
					}
					else if(checkcon6 < 0 || checkcon6 > 100)
					{
						$('#Con6').css({"color" : "red"});
					}
					
					if((checkex6 < 0 || checkex6 > 100) && (checkcon6 < 0 || checkcon6 > 100))
					{
						$('#Ex6').css({"color" : "red"});
						$('#Con6').css({"color" : "red"});
					}
				}
			}
		} // End of for loop

				
		
		var finalAns1 = ex1 + con1 ;		
		var conAns1 = finalAns1.toString();
		
		var finalAns2 = ex2 + con2 ;		
		var conAns2 = finalAns2.toString();
		
		var finalAns3 = ex3 + con3 ;		
		var conAns3 = finalAns3.toString();
		
		var finalAns4 = ex4 + con4 ;		
		var conAns4 = finalAns4.toString();
		
		var finalAns5 = ex5 + con5 ;		
		var conAns5 = finalAns5.toString();
		
		var finalAns6 = ex6 + con6 ;		
		var conAns6 = finalAns6.toString();
		
		//Exam and Continuous 1	
		if (isNaN(conAns1))
		{
			$('#TG1').val("Data Err");
		}
		else if (conAns1.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns1.substring(0, 5);
			var retrieve6 = conAns1.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG1').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG1').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG1').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG1').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG1").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG1").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG1").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG1").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG1").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG1").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG1").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG1").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG1').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
				commentGrade1 = parseFloat($('#TG1').val());
			}	
			
			//Comment on the frist grade
				if (commentGrade1 >= 69.50 && commentGrade1<= 100)
				{
					OutputComment += "Total Grade 1: [A+] Excellent";
				}
				else if (commentGrade1 >= 64.5 && commentGrade1<= 69.4)
				{
					OutputComment  += "Total Grade 1: [A-] Very Good";	
				}
				else if (commentGrade1 >= 59.5 && commentGrade1<= 64.4)
				{
					OutputComment  += "Total Grade 1: [B+] Good";
				}
				else if (commentGrade1 >= 54.5 && commentGrade1<= 59.4)
				{
					OutputComment  += "Total Grade 1: [B] Credit";
				}
				else if (commentGrade1 >= 49.5 && commentGrade1<= 54.4)
				{
					OutputComment  += "Total Grade 1: [B-] Credit";
				}
				else if (commentGrade1 >= 44.5 && commentGrade1<= 49.4)
				{
					OutputComment  += "Total Grade 1: [C+] Pass";
				}
				else if (commentGrade1 >= 39.5 && commentGrade1<= 44.4)
				{
					OutputComment  += "Total Grade 1: [C-] Pass";
				}
				else if (commentGrade1 >= 29.5 && commentGrade1<= 39.4)
				{
					OutputComment  += "Total Grade 1: [D] Reference";
				}
				else if (commentGrade1 >= 0 && commentGrade1<= 29.4)
				{
					OutputComment  += "Total Grade 1: [F] Reference";
				}
				else
				{
					OutputComment  += "No comment available";
				}
				//End of comment					
		}
		else if (conAns1.length <= 5)
		{
			var retrieve5 = conAns1.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG1').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG1').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG1').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG1').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG1').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG1').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG1').val(char1 + char2 + "0" + "0" + " %");
			}
				
				commentGrade1 = parseFloat($('#TG1').val());
			
				//Comment on the first grade
				if (commentGrade1 >= 69.50 && commentGrade1<= 100)
				{
					OutputComment  += "Total Grade 1: [A+] Excellent";
				}
				else if (commentGrade1 >= 64.5 && commentGrade1<= 69.4)
				{
					OutputComment  += "Total Grade 1: [A-] Very Good";	
				}
				else if (commentGrade1 >= 59.5 && commentGrade1<= 64.4)
				{
					OutputComment  += "Total Grade 1: [B+] Good";
				}
				else if (commentGrade1 >= 54.5 && commentGrade1<= 59.4)
				{
					OutputComment  += "Total Grade 1: [B] Credit";
				}
				else if (commentGrade1 >= 49.5 && commentGrade1<= 54.4)
				{
					OutputComment  += "Total Grade 1: [B-] Credit";
				}
				else if (commentGrade1 >= 44.5 && commentGrade1<= 49.4)
				{
					OutputComment  += "Total Grade 1: [C+] Pass";
				}
				else if (commentGrade1 >= 39.5 && commentGrade1<= 44.4)
				{
					OutputComment  += "Total Grade 1: [C-] Pass";
				}
				else if (commentGrade1 >= 29.5 && commentGrade1<= 39.4)
				{
					OutputComment  += "Total Grade 1: [D] Reference";
				}
				else if (commentGrade1 >= 0 && commentGrade1<= 29.4)
				{
					OutputComment  += "Total Grade 1: [F] Reference";
				}
				else
				{
					OutputComment  += "No comment available";
				}
				//End of comment
		}
		
		//Exam and Continuous 2
		if (isNaN(conAns2))
		{
			$('#TG2').val("Data Err");
		}
		else if (conAns2.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns2.substring(0, 5);
			var retrieve6 = conAns2.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG2').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG2').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG2').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG2').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG2").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG2").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG2").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG2").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG2").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG2").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG2").val(numChar1 + "0" + char3 + "0" + "0");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG2").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG2').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
				commentGrade2 = parseFloat($('#TG2').val());
			}	
			
				//Comment on the second grade
				if (commentGrade2 >= 69.50 && commentGrade2 <= 100)
				{
					OutputComment += "\nTotal Grade 2: [A+] Excellent";
				}
				else if (commentGrade2 >= 64.5 && commentGrade2 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 2: [A-] Very Good";	
				}
				else if (commentGrade2 >= 59.5 && commentGrade2 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 2: [B+] Good";
				}
				else if (commentGrade2 >= 54.5 && commentGrade2 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 2: [B] Credit";
				}
				else if (commentGrade2 >= 49.5 && commentGrade2 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 2: [B-] Credit";
				}
				else if (commentGrade2 >= 44.5 && commentGrade2 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 2: [C+] Pass";
				}
				else if (commentGrade2 >= 39.5 && commentGrade2 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 2: [C-] Pass";
				}
				else if (commentGrade2 >= 29.5 && commentGrade2 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 2: [D] Reference";
				}
				else if (commentGrade2 >= 0 && commentGrade2<= 29.4)
				{
					OutputComment  += "\nTotal Grade 2: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment					
		}
		else if (conAns2.length <= 5)
		{
			var retrieve5 = conAns2.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG2').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG2').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG2').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG2').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG2').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG2').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG2').val(char1 + char2 + "0" + "0" + " %");
			}
				commentGrade2 = parseFloat($('#TG2').val());
				
				//Comment on the Second grade
				if (commentGrade2 >= 69.50 && commentGrade2 <= 100)
				{
					OutputComment += "\nTotal Grade 2: [A+] Excellent";
				}
				else if (commentGrade2 >= 64.5 && commentGrade2 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 2: [A-] Very Good";	
				}
				else if (commentGrade2 >= 59.5 && commentGrade2 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 2: [B+] Good";
				}
				else if (commentGrade2 >= 54.5 && commentGrade2 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 2: [B] Credit";
				}
				else if (commentGrade2 >= 49.5 && commentGrade2 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 2: [B-] Credit";
				}
				else if (commentGrade2 >= 44.5 && commentGrade2 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 2: [C+] Pass";
				}
				else if (commentGrade2 >= 39.5 && commentGrade2 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 2: [C-] Pass";
				}
				else if (commentGrade2 >= 29.5 && commentGrade2 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 2: [D] Reference";
				}
				else if (commentGrade2 >= 0 && commentGrade2<= 29.4)
				{
					OutputComment  += "\nTotal Grade 2: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment
		}
		
		//Exam and Continuous 3
		if (isNaN(conAns3))
		{
			$('#TG3').val("Data Err");
		}
		else if (conAns3.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns3.substring(0, 5);
			var retrieve6 = conAns3.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG3').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG3').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG3').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG3').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG3").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG3").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG3").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG3").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG3").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG3").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG3").val(numChar1 + "0" + char3 + "0" + "0");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG3").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG3').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
				commentGrade3 = parseFloat($('#TG3').val());
			}	
			
				//Comment on the Third grade
				if (commentGrade3 >= 69.50 && commentGrade3 <= 100)
				{
					OutputComment += "\nTotal Grade 3: [A+] Excellent";
				}
				else if (commentGrade3 >= 64.5 && commentGrade3 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 3: [A-] Very Good";	
				}
				else if (commentGrade3 >= 59.5 && commentGrade3 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 3: [B+] Good";
				}
				else if (commentGrade3 >= 54.5 && commentGrade3 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 3: [B] Credit";
				}
				else if (commentGrade3 >= 49.5 && commentGrade3 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 3: [B-] Credit";
				}
				else if (commentGrade3 >= 44.5 && commentGrade3 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 3: [C+] Pass";
				}
				else if (commentGrade3 >= 39.5 && commentGrade3 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 3: [C-] Pass";
				}
				else if (commentGrade3 >= 29.5 && commentGrade3 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 3: [D] Reference";
				}
				else if (commentGrade3 >= 0 && commentGrade3 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 3: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment					
		}
		else if (conAns3.length <= 5)
		{
			var retrieve5 = conAns3.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG3').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG3').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG3').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG3').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG3').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG3').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG3').val(char1 + char2 + "0" + "0" + " %");
			}
				commentGrade3 = parseFloat($('#TG3').val());
				
				
				//Comment on the Third grade
				if (commentGrade3 >= 69.50 && commentGrade3 <= 100)
				{
					OutputComment += "\nTotal Grade 3: [A+] Excellent";
				}
				else if (commentGrade3 >= 64.5 && commentGrade3 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 3: [A-] Very Good";	
				}
				else if (commentGrade3 >= 59.5 && commentGrade3 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 3: [B+] Good";
				}
				else if (commentGrade3 >= 54.5 && commentGrade3 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 3: [B] Credit";
				}
				else if (commentGrade3 >= 49.5 && commentGrade3 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 3: [B-] Credit";
				}
				else if (commentGrade3 >= 44.5 && commentGrade3 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 3: [C+] Pass";
				}
				else if (commentGrade3 >= 39.5 && commentGrade3 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 3: [C-] Pass";
				}
				else if (commentGrade3 >= 29.5 && commentGrade3 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 3: [D] Reference";
				}
				else if (commentGrade3 >= 0 && commentGrade3 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 3: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment
		}
		
		//Exam and Continuous 4
		if (isNaN(conAns4))
		{
			$('#TG4').val("Data Err");
		}
		else if (conAns4.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns4.substring(0, 5);
			var retrieve6 = conAns4.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG4').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG4').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG4').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG4').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG4").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG4").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG4").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG4").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG4").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG4").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG4").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG4").val(char1 + char2 + char3 + char4);
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG4').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
				commentGrade4 = parseFloat($('#TG4').val());
			}
			
			//Comment on the fourth grade
				if (commentGrade4 >= 69.50 && commentGrade4 <= 100)
				{
					OutputComment += "\nTotal Grade 4: [A+] Excellent";
				}
				else if (commentGrade4 >= 64.5 && commentGrade4 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 4: [A-] Very Good";	
				}
				else if (commentGrade4 >= 59.5 && commentGrade4 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 4: [B+] Good";
				}
				else if (commentGrade4 >= 54.5 && commentGrade4 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 4: [B] Credit";
				}
				else if (commentGrade4 >= 49.5 && commentGrade4 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 4: [B-] Credit";
				}
				else if (commentGrade4 >= 44.5 && commentGrade4 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 4: [C+] Pass";
				}
				else if (commentGrade4 >= 39.5 && commentGrade4 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 4: [C-] Pass";
				}
				else if (commentGrade4 >= 29.5 && commentGrade4 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 4: [D] Reference";
				}
				else if (commentGrade4 >= 0 && commentGrade4 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 4: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment						
		}
		else if (conAns4.length <= 5)
		{
			var retrieve5 = conAns4.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG4').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG4').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG4').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG4').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG4').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG4').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG4').val(char1 + char2 + "0" + "0" + " %");
			}
				commentGrade4 = parseFloat($('#TG4').val());
				
				
				//Comment on the fourth grade
				if (commentGrade4 >= 69.50 && commentGrade4 <= 100)
				{
					OutputComment += "\nTotal Grade 4: [A+] Excellent";
				}
				else if (commentGrade4 >= 64.5 && commentGrade4 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 4: [A-] Very Good";	
				}
				else if (commentGrade4 >= 59.5 && commentGrade4 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 4: [B+] Good";
				}
				else if (commentGrade4 >= 54.5 && commentGrade4 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 4: [B] Credit";
				}
				else if (commentGrade4 >= 49.5 && commentGrade4 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 4: [B-] Credit";
				}
				else if (commentGrade4 >= 44.5 && commentGrade4 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 4: [C+] Pass";
				}
				else if (commentGrade4 >= 39.5 && commentGrade4 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 4: [C-] Pass";
				}
				else if (commentGrade4 >= 29.5 && commentGrade4 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 4: [D] Reference";
				}
				else if (commentGrade4 >= 0 && commentGrade4 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 4: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment
		}

		//Exam and Continuous 5
		if (isNaN(conAns5))
		{
			$('#TG5').val("Data Err");
		}
		else if (conAns5.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns5.substring(0, 5);
			var retrieve6 = conAns5.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG5').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG5').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG5').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG5').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG5").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG5").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG5").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG5").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG5").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG5").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG5").val(numChar1 + "0" + char3 + "0" + "0");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG5").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG5').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
				commentGrade5 = parseFloat($('#TG5').val());
			}	
			
				//Comment on the fifth grade
				if (commentGrade5 >= 69.50 && commentGrade5 <= 100)
				{
					OutputComment += "\nTotal Grade 5: [A+] Excellent";
				}
				else if (commentGrade5 >= 64.5 && commentGrade5 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 5: [A-] Very Good";	
				}
				else if (commentGrade5 >= 59.5 && commentGrade5 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 5: [B+] Good";
				}
				else if (commentGrade5 >= 54.5 && commentGrade5 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 5: [B] Credit";
				}
				else if (commentGrade5 >= 49.5 && commentGrade5 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 5: [B-] Credit";
				}
				else if (commentGrade5 >= 44.5 && commentGrade5 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 5: [C+] Pass";
				}
				else if (commentGrade5 >= 39.5 && commentGrade5 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 5: [C-] Pass";
				}
				else if (commentGrade5 >= 29.5 && commentGrade5 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 5: [D] Reference";
				}
				else if (commentGrade5 >= 0 && commentGrade5 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 5: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment					
		}
		else if (conAns5.length <= 5)
		{
			var retrieve5 = conAns5.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG5').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG5').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG5').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG5').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG5').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG5').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG5').val(char1 + char2 + "0" + "0" + " %");
			}
				commentGrade5 = parseFloat($('#TG5').val());
				
				//Comment on the fifth grade
				if (commentGrade5 >= 69.50 && commentGrade5 <= 100)
				{
					OutputComment += "\nTotal Grade 5: [A+] Excellent";
				}
				else if (commentGrade5 >= 64.5 && commentGrade5 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 5: [A-] Very Good";	
				}
				else if (commentGrade5 >= 59.5 && commentGrade5 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 5: [B+] Good";
				}
				else if (commentGrade5 >= 54.5 && commentGrade5 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 5: [B] Credit";
				}
				else if (commentGrade5 >= 49.5 && commentGrade5 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 5: [B-] Credit";
				}
				else if (commentGrade5 >= 44.5 && commentGrade5 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 5: [C+] Pass";
				}
				else if (commentGrade5 >= 39.5 && commentGrade5 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 5: [C-] Pass";
				}
				else if (commentGrade5 >= 29.5 && commentGrade5 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 5: [D] Reference";
				}
				else if (commentGrade5 >= 0 && commentGrade5 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 5: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment
		}
		
		//Exam and Continuous 6
		if (isNaN(conAns6))
		{
			$('#TG6').val("Data Err");
		}
		else if (conAns6.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns6.substring(0, 5);
			var retrieve6 = conAns6.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG6').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG6').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG6').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG6').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG6").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG6").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG6").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG6").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG6").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG6").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG6").val(numChar1 + "0" + char3 + "0" + "0");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG6").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG6').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
				commentGrade6 = parseFloat($('#TG6').val());
			}	
			
			//Comment on the Sixth grade
				if (commentGrade6 >= 69.50 && commentGrade6 <= 100)
				{
					OutputComment += "\nTotal Grade 6: [A+] Excellent";
				}
				else if (commentGrade6 >= 64.5 && commentGrade6 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 6: [A-] Very Good";	
				}
				else if (commentGrade6 >= 59.5 && commentGrade6 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 6: [B+] Good";
				}
				else if (commentGrade6 >= 54.5 && commentGrade6 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 6: [B] Credit";
				}
				else if (commentGrade6 >= 49.5 && commentGrade6 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 6: [B-] Credit";
				}
				else if (commentGrade6 >= 44.5 && commentGrade6 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 6: [C+] Pass";
				}
				else if (commentGrade6 >= 39.5 && commentGrade6 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 6: [C-] Pass";
				}
				else if (commentGrade6 >= 29.5 && commentGrade6 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 6: [D] Reference";
				}
				else if (commentGrade6 >= 0 && commentGrade6 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 6: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment					
		}
		else if (conAns6.length <= 5)
		{	
			var retrieve5 = conAns6.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG6').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG6').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG6').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG6').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG6').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG6').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG6').val(char1 + char2 + "0" + "0" + " %");
			}
				commentGrade6 = parseFloat($('#TG6').val());
				
				//Comment on the Sixth grade
				if (commentGrade6 >= 69.50 && commentGrade6 <= 100)
				{
					OutputComment += "\nTotal Grade 6: [A+] Excellent";
				}
				else if (commentGrade6 >= 64.5 && commentGrade6 <= 69.4)
				{
					OutputComment  += "\nTotal Grade 6: [A-] Very Good";	
				}
				else if (commentGrade6 >= 59.5 && commentGrade6 <= 64.4)
				{
					OutputComment  += "\nTotal Grade 6: [B+] Good";
				}
				else if (commentGrade6 >= 54.5 && commentGrade6 <= 59.4)
				{
					OutputComment  += "\nTotal Grade 6: [B] Credit";
				}
				else if (commentGrade6 >= 49.5 && commentGrade6 <= 54.4)
				{
					OutputComment  += "\nTotal Grade 6: [B-] Credit";
				}
				else if (commentGrade6 >= 44.5 && commentGrade6 <= 49.4)
				{
					OutputComment  += "\nTotal Grade 6: [C+] Pass";
				}
				else if (commentGrade6 >= 39.5 && commentGrade6 <= 44.4)
				{
					OutputComment  += "\nTotal Grade 6: [C-] Pass";
				}
				else if (commentGrade6 >= 29.5 && commentGrade6 <= 39.4)
				{
					OutputComment  += "\nTotal Grade 6: [D] Reference";
				}
				else if (commentGrade6 >= 0 && commentGrade6 <= 29.4)
				{
					OutputComment  += "\nTotal Grade 6: [F] Reference";
				}
				else
				{
					OutputComment  += "\nNo comment available";
				}
				//End of comment			
		}
		
		$("#TextComment").text(OutputComment);
	});
	
	
	//Exam Continuous Clear Button
	$("#examClear").click(function() {
	
		$('#Ex1').val("");
		$('#Con1').val("");
		
		$('#Ex2').val("");
		$('#Con2').val("");
		
		$('#Ex3').val("");
		$('#Con3').val("");
		
		$('#Ex4').val("");
		$('#Con4').val("");
		
		$('#Ex5').val("");
		$('#Con5').val("");
		
		$('#Ex6').val("");
		$('#Con6').val("");
		
		$('#TG1').val("");
		$('#TG2').val("");
		$('#TG3').val("");
		$('#TG4').val("");
		$('#TG5').val("");
		$('#TG6').val("");
		
		OutputComment = "";
		$("#TextComment").text("");
		
		//Clear Error markings from input boxes
		$('#Ex1').css({"color" : "#FFFFFF"});
		$('#Con1').css({"color" : "#FFFFFF"});
		
		$('#Ex2').css({"color" : "#FFFFFF"});
		$('#Con2').css({"color" : "#FFFFFF"});
		
		$('#Ex3').css({"color" : "#FFFFFF"});
		$('#Con3').css({"color" : "#FFFFFF"});
		
		$('#Ex4').css({"color" : "#FFFFFF"});
		$('#Con4').css({"color" : "#FFFFFF"});
		
		$('#Ex5').css({"color" : "#FFFFFF"});
		$('#Con5').css({"color" : "#FFFFFF"});
		
		$('#Ex6').css({"color" : "#FFFFFF"});
		$('#Con6').css({"color" : "#FFFFFF"});
	});
}); // Exam Continuous Window live event

//*****************************************************************************************************************

//Complete Average Grade point calculator
$("#ExconMain").live("pageinit", function() {	

	var CommentAGP;
	var commentGrade1;
	var commentGrade2;
	var commentGrade3;
	var commentGrade4;
	var commentGrade5;
	var commentGrade6;
	
	//Saved Exam Continuous Window Information	
	$('#ComSave').bind('tap', function(event, ui) {	

		//Save the Complete Exam and Continuous Grades
		window.localStorage.setItem('ComExamInput1', $('#Ex1').val());
		window.localStorage.setItem('ComExamInput2', $('#Ex2').val());
		window.localStorage.setItem('ComExamInput3', $('#Ex3').val());
		window.localStorage.setItem('ComExamInput4', $('#Ex4').val());
		window.localStorage.setItem('ComExamInput5', $('#Ex5').val());
		window.localStorage.setItem('ComExamInput6', $('#Ex6').val());
		
		window.localStorage.setItem('ComConOutput1', $('#Con1').val());
		window.localStorage.setItem('ComConOutput2', $('#Con2').val());
		window.localStorage.setItem('ComConOutput3', $('#Con3').val());
		window.localStorage.setItem('ComConOutput4', $('#Con4').val());
		window.localStorage.setItem('ComConOutput5', $('#Con5').val());
		window.localStorage.setItem('ComConOutput6', $('#Con6').val());
		
		
		window.localStorage.setItem('ComTGOutput1', $('#TG1').val());
		window.localStorage.setItem('ComTGOutput2', $('#TG2').val());
		window.localStorage.setItem('ComTGOutput3', $('#TG3').val());
		window.localStorage.setItem('ComTGOutput4', $('#TG4').val());
		window.localStorage.setItem('ComTGOutput5', $('#TG5').val());
		window.localStorage.setItem('ComTGOutput6', $('#TG6').val());
		
		//Save the complete Average Grade Points
		window.localStorage.setItem('ComHomeOutput1', $('#GradeOne').val());
		window.localStorage.setItem('ComHomeOutput2', $('#GradeTwo').val());
		window.localStorage.setItem('ComHomeOutput3', $('#GradeThree').val());
		window.localStorage.setItem('ComHomeOutput4', $('#GradeFour').val());
		window.localStorage.setItem('ComHomeOutput5', $('#GradeFive').val());
		window.localStorage.setItem('ComHomeOutput6' , $('#GradeSix').val());
		
		window.localStorage.setItem('ComHomeAGP', $('#AverageGP').val());
	});
	
	$('#ComRetrieve').bind("tap", function(event, ui) {
	
		//Retrieve the Complete Exam and Continuous Grades
		$('#Ex1').val(window.localStorage.getItem('ComExamInput1'));
		$('#Ex2').val(window.localStorage.getItem('ComExamInput2'));
		$('#Ex3').val(window.localStorage.getItem('ComExamInput3'));
		$('#Ex4').val(window.localStorage.getItem('ComExamInput4'));
		$('#Ex5').val(window.localStorage.getItem('ComExamInput5'));
		$('#Ex6').val(window.localStorage.getItem('ComExamInput6'));
		
		$('#Con1').val(window.localStorage.getItem('ComConOutput1'));
		$('#Con2').val(window.localStorage.getItem('ComConOutput2'));
		$('#Con3').val(window.localStorage.getItem('ComConOutput3'));
		$('#Con4').val(window.localStorage.getItem('ComConOutput4'));
		$('#Con5').val(window.localStorage.getItem('ComConOutput5'));
		$('#Con6').val(window.localStorage.getItem('ComConOutput6'));
		
		$('#TG1').val(window.localStorage.getItem('ComTGOutput1'));
		$('#TG2').val(window.localStorage.getItem('ComTGOutput2'));
		$('#TG3').val(window.localStorage.getItem('ComTGOutput3'));
		$('#TG4').val(window.localStorage.getItem('ComTGOutput4'));
		$('#TG5').val(window.localStorage.getItem('ComTGOutput5'));
		$('#TG6').val(window.localStorage.getItem('ComTGOutput6'));
		
		//Retrive the Complete Average Grade Points
		$('#GradeOne').val(window.localStorage.getItem('ComHomeOutput1'));
		$('#GradeTwo').val(window.localStorage.getItem('ComHomeOutput2'));
		$('#GradeThree').val(window.localStorage.getItem('ComHomeOutput3'));
		$('#GradeFour').val(window.localStorage.getItem('ComHomeOutput4'));
		$('#GradeFive').val(window.localStorage.getItem('ComHomeOutput5'));
		$('#GradeSix').val(window.localStorage.getItem('ComHomeOutput6'));
		
		$('#AverageGP').val(window.localStorage.getItem('ComHomeAGP'));
	});
		
	$("#exconCalBtn").bind("tap", function() {
	
		$('#TG1').val("");
		$('#TG2').val("");
		$('#TG3').val("");
		$('#TG4').val("");
		$('#TG5').val("");
		$('#TG6').val("");
		//Clear Error markings from input boxes
		$('#Ex1').css({"color" : "#FFFFFF"});
		$('#Con1').css({"color" : "#FFFFFF"});
		
		$('#Ex2').css({"color" : "#FFFFFF"});
		$('#Con2').css({"color" : "#FFFFFF"});
		
		$('#Ex3').css({"color" : "#FFFFFF"});
		$('#Con3').css({"color" : "#FFFFFF"});
		
		$('#Ex4').css({"color" : "#FFFFFF"});
		$('#Con4').css({"color" : "#FFFFFF"});
		
		$('#Ex5').css({"color" : "#FFFFFF"});
		$('#Con5').css({"color" : "#FFFFFF"});
		
		$('#Ex6').css({"color" : "#FFFFFF"});
		$('#Con6').css({"color" : "#FFFFFF"});	
						
							 
		// Checking range of exams values				// Checking range of continuous values
		var checkex1 = parseFloat($('#Ex1').val());		var checkcon1 = parseFloat($('#Con1').val());
		var checkex2 = parseFloat($('#Ex2').val());		var checkcon2 = parseFloat($('#Con2').val());
		var checkex3 = parseFloat($('#Ex3').val());		var checkcon3 = parseFloat($('#Con3').val());
		var checkex4 = parseFloat($('#Ex4').val());		var checkcon4 = parseFloat($('#Con4').val());
		var checkex5 = parseFloat($('#Ex5').val());		var checkcon5 = parseFloat($('#Con5').val());
		var checkex6 = parseFloat($('#Ex6').val());		var checkcon6 = parseFloat($('#Con6').val());

		// Check all Exams grades for char		// Check all continuous grades for char
		var checkNumex1 = $('#Ex1').val();		var checkNumcon1 = $('#Con1').val();
		var checkNumex2 = $('#Ex2').val();		var checkNumcon2 = $('#Con2').val();
		var checkNumex3 = $('#Ex3').val();		var checkNumcon3 = $('#Con3').val();
		var checkNumex4 = $('#Ex4').val();		var checkNumcon4 = $('#Con4').val();
		var checkNumex5 = $('#Ex5').val();		var checkNumcon5 = $('#Con5').val();
		var checkNumex6 = $('#Ex6').val();		var checkNumcon6 = $('#Con6').val();		
		
				
		for (var i = 0; i <= 25; i++)
		{
			if (isNaN(checkNumex1) || isNaN(checkNumcon1))
			{
				if (isNaN(checkNumex1) && isNaN(checkNumcon1))
				{
					$('#Con1').select();
					$('#Ex1').select();
					
				}
				else if (isNaN(checkNumex1))
				{
					$('#Ex1').select();
				}
				else if (isNaN(checkNumcon1))
				{
					$('#Con1').select();
				}
			}
			else
			{

				//Check Exam and Continuous input1 for range exception
				if((checkex1 >= 0 && checkex1 <= 100) && (checkcon1 >= 0 && checkcon1 <= 100))
				{
					var ex1 = .7 * parseFloat($('#Ex1').val());
					var con1 = .3 * parseFloat($('#Con1').val());
				}
				else
				{
					if(checkex1 < 0 || checkex1 > 100)
					{
						$('#Ex1').css({"color" : "red"});
					}
					else if(checkcon1 < 0 || checkcon1 > 100)
					{
						$('#Con1').css({"color" : "red"});
					}
			
					if((checkex1 < 0 || checkex1 > 100) && (checkcon1 < 0 || checkcon1 > 100))
					{
						$('#Ex1').css({"color" : "red"});
						$('#Con1').css({"color" : "red"});
					}
				}
			}
		
			if	(isNaN(checkNumex2) || isNaN(checkNumcon2))
			{
				if (isNaN(checkNumex2) && isNaN(checkNumcon2))
				{
					$('#Con2').select();
					$('#Ex2').select();
					
				}
				else if (isNaN(checkNumex2))
				{
					$('#Ex2').select();
				}
				else if (isNaN(checkNumcon2))
				{
					$('#Con2').select();
				}
			}
			else
			{

				//Check Exam and Continuous input2 for range exception
				if((checkex2 >= 0 && checkex2 <= 100) && (checkcon2 >= 0 && checkcon2 <= 100))
				{
					var ex2 = .7 * parseFloat($('#Ex2').val());
					var con2 = .3 * parseFloat($('#Con2').val());
				}
				else
				{
			
					if(checkex2 < 0 || checkex2 > 100)
					{
						$('#Ex2').css({"color" : "red"});
					}
					else if(checkcon2 < 0 || checkcon2 > 100)
					{
						$('#Con2').css({"color" : "red"});
					}
			
					if((checkex2 < 0 || checkex2 > 100) && (checkcon2 < 0 || checkcon2 > 100))
					{
						$('#Ex2').css({"color" : "red"});
						$('#Con2').css({"color" : "red"});
					}
				}
			}
	
			if	(isNaN(checkNumex3) || isNaN(checkNumcon3))
			{
				if (isNaN(checkNumex3) && isNaN(checkNumcon3))
				{
					$('#Con3').select();
					$('#Ex3').select();
					
				}
				else if (isNaN(checkNumex3))
				{
					$('#Ex3').select();
				}
				else if (isNaN(checkNumcon3))
				{
					$('#Con3').select();
				}
			}
			else
			{

				//Check Exam and Continuous input3 for range exception
				if((checkex3 >= 0 && checkex3 <= 100) && (checkcon3 >= 0 && checkcon3 <= 100))
				{
					var ex3 = .7 * parseFloat($('#Ex3').val());
					var con3 = .3 * parseFloat($('#Con3').val());
				}
				else
				{
					if(checkex3 < 0 || checkex3 > 100)
					{
						$('#Ex3').css({"color" : "red"});
					}
					else if(checkcon3 < 0 || checkcon3 > 100)
					{
						$('#Con3').css({"color" : "red"});
					}
			
					if((checkex3 < 0 || checkex3 > 100) && (checkcon3 < 0 || checkcon3 > 100))
					{
						$('#Ex3').css({"color" : "red"});
						$('#Con3').css({"color" : "red"});
					}
				}
			}
		
			if	(isNaN(checkNumex4) || isNaN(checkNumcon4))
			{
				if (isNaN(checkNumex4) && isNaN(checkNumcon4))
				{
					$('#Con4').select();
					$('#Ex4').select();
					
				}
				else if (isNaN(checkNumex4))
				{
					$('#Ex4').select();
				}
				else if (isNaN(checkNumcon4))
				{
					$('#Con4').select();
				}
			}
			else
			{

				//Check Exam and Continuous input4 for range exception
				if((checkex4 >= 0 && checkex4 <= 100) && (checkcon4 >= 0 && checkcon4 <= 100))
				{
					var ex4 = .7 * parseFloat($('#Ex4').val());
					var con4 = .3 * parseFloat($('#Con4').val());
				}
				else
				{
					if(checkex4 < 0 || checkex4 > 100)
					{
						$('#Ex4').css({"color" : "red"});
					}
					else if(checkcon2 < 0 || checkcon2 > 100)
					{
						$('#Con4').css({"color" : "red"});
					}
			
					if((checkex4 < 0 || checkex4 > 100) && (checkcon4 < 0 || checkcon4 > 100))
					{
						$('#Ex4').css({"color" : "red"});
						$('#Con4').css({"color" : "red"});
					}
				}
			}

			if	(isNaN(checkNumex5) || isNaN(checkNumcon5))
			{
				if (isNaN(checkNumex5) && isNaN(checkNumcon5))
				{
					$('#Con5').select();
					$('#Ex5').select();
					
				}
				else if (isNaN(checkNumex5))
				{
					$('#Ex5').select();
				}
				else if (isNaN(checkNumcon5))
				{
					$('#Con5').select();
				}
			}
			else
			{

				//Check Exam and Continuous input5 for range exception
				if((checkex5 >= 0 && checkex5 <= 100) && (checkcon5 >= 0 && checkcon5 <= 100))
				{
					var ex5 = .7 * parseFloat($('#Ex5').val());
					var con5 = .3 * parseFloat($('#Con5').val());
				}
				else
				{
					if(checkex5 < 0 || checkex5 > 100)
					{
						$('#Ex5').css({"color" : "red"});
					}
					else if(checkcon5 < 0 || checkcon5 > 100)
					{
						$('#Con5').css({"color" : "red"});
					}
					
					if((checkex5 < 0 || checkex5 > 100) && (checkcon5 < 0 || checkcon5 > 100))
					{
						$('#Ex5').css({"color" : "red"});
						$('#Con5').css({"color" : "red"});
					}
				}
			}

			if	(isNaN(checkNumex6) || isNaN(checkNumcon6))
			{
				if (isNaN(checkNumex6) && isNaN(checkNumcon6))
				{
					$('#Con6').select();
					$('#Ex6').select();
					
				}
				else if (isNaN(checkNumex6))
				{
					$('#Ex6').select();
				}
				else if (isNaN(checkNumcon6))
				{
					$('#Con6').select();
				}
			}
			else
			{				

				//Check Exam and Continuous input6 for range exception
				if((checkex6 >= 0 && checkex6 <= 100) && (checkcon6 >= 0 && checkcon6 <= 100))
				{
					var ex6 = .7 * parseFloat($('#Ex6').val());
					var con6 = .3 * parseFloat($('#Con6').val());
				}
				else
				{
					if(checkex6 < 0 || checkex6 > 100)
					{
						$('#Ex6').css({"color" : "red"});
					}
					else if(checkcon6 < 0 || checkcon6 > 100)
					{
						$('#Con6').css({"color" : "red"});
					}
					
					if((checkex6 < 0 || checkex6 > 100) && (checkcon6 < 0 || checkcon6 > 100))
					{
						$('#Ex6').css({"color" : "red"});
						$('#Con6').css({"color" : "red"});
					}
				}
			}
		} // End of for loop

		
				
		var finalAns1 = ex1 + con1 ;		
		var conAns1 = finalAns1.toString();
		
		var finalAns2 = ex2 + con2 ;		
		var conAns2 = finalAns2.toString();
		
		var finalAns3 = ex3 + con3 ;		
		var conAns3 = finalAns3.toString();
		
		var finalAns4 = ex4 + con4 ;		
		var conAns4 = finalAns4.toString();
		
		var finalAns5 = ex5 + con5 ;		
		var conAns5 = finalAns5.toString();
		
		var finalAns6 = ex6 + con6 ;		
		var conAns6 = finalAns6.toString();
		
		//Exam and Continuous 1	
		if (isNaN(conAns1))
		{
			$('#TG1').val("Data Err");
		}
		else if (conAns1.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns1.substring(0, 5);
			var retrieve6 = conAns1.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG1').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG1').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG1').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG1').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG1").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG1").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG1").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG1").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG1").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG1").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG1").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG1").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG1').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns1.length <= 5)
		{
			var retrieve5 = conAns1.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG1').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG1').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG1').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG1').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG1').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG1').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG1').val(char1 + char2 + "0" + "0" + " %");
			}		
		}
		
		//Exam and Continuous 2
		if (isNaN(conAns2))
		{
			$('#TG2').val("Data Err");
		}
		else if (conAns2.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns2.substring(0, 5);
			var retrieve6 = conAns2.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG2').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG2').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG2').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG2').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG2").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG2").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG2").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG2").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG2").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG2").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG2").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG2").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG2').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns2.length <= 5)
		{
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG2').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG2').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG2').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG2').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG2').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG2').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG2').val(char1 + char2 + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 3
		if (isNaN(conAns3))
		{
			$('#TG3').val("Data Err");
		}
		else if (conAns3.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns3.substring(0, 5);
			var retrieve6 = conAns3.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG3').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG3').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG3').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG3').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG3").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG3").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG3").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG3").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG3").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG3").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG3").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG3").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG3').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns3.length <= 5)
		{
			var retrieve5 = conAns3.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG3').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG3').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG3').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG3').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG3').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG3').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG3').val(char1 + char2 + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 4
		if (isNaN(conAns4))
		{
			$('#TG4').val("Data Err");
		}
		else if (conAns4.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns4.substring(0, 5);
			var retrieve6 = conAns4.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG4').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG4').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG4').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG4').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG4").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG4").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG4").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG4").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG4").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG4").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG4").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG4").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG4').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns4.length <= 5)
		{
			var retrieve5 = conAns4.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG4').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG4').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG4').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG4').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG4').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG4').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG4').val(char1 + char2 + "0" + "0" + " %");
			}
		}

		//Exam and Continuous 5
		if (isNaN(conAns5))
		{
			$('#TG5').val("Data Err");
		}
		else if (conAns5.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns5.substring(0, 5);
			var retrieve6 = conAns5.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG5').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG5').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG5').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG5').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG5").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG5").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG5").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG5").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG5").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG5").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG5").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG5").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG5').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns5.length <= 5)
		{
			var retrieve5 = conAns5.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG5').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG5').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG5').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG5').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG5').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG5').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG5').val(char1 + char2 + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 6
		if (isNaN(conAns6))
		{
			$('#TG6').val("Data Err");
		}
		else if (conAns6.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns6.substring(0, 5);
			var retrieve6 = conAns6.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG6').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG6').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG6').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}		
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG6').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}	
					else if (char6 >= 5 && char5 >= 5 && char4 <= 8 && char2 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG6").val(char1 + char2 + char3 + numChar4 + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9 && char2 == "." && char3 <=8)
					{
						var numChar3 = char3;
						numChar3++;
						$("#TG6").val(char1 + char2 + numChar3+ "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 5 && char4 >= 9  && char3 >= 9 && char2 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG6").val(numChar1 + char2 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 <= 8 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar5 = char5;
						numChar5++;
						$("#TG6").val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 <= 8 && char1 <= 8  && char2 <= 9 && char3 == ".")
					{
						var numChar4 = char4;
						numChar4++;
						$("#TG6").val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 <= 8 && char3 == ".")
					{
						var numChar2 = char2;
						numChar2++;
						$("#TG6").val(char1 + numChar2+ char3 + "0" + "0" + " %");
					}
					else if (char6 >= 5 && char5 >= 9 && char4 >= 9 && char1 <= 8  && char2 >= 9 && char3 == ".")
					{
						var numChar1 = char1;
						numChar1++;
						$("#TG6").val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}
					else if (char6 <= 4 && char5 <= 4 && char4 <= 8  && char3 <= 8 && char2 == ".")
					{
						$("#TG6").val(char1 + char2 + char3 + char4 + " %");
					}		
				}
				else if (char6 == num[i])
				{
					$('#TG6').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns6.length <= 5)
		{	
			var retrieve5 = conAns6.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

				
			if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG6').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3))
			{			
				$('#TG6').val(char1 + char2 + "." + "0" + "0" + " %");
			}
			else if (isNaN(newChar5) && isNaN(newChar4) &&  isNaN(newChar3) && isNaN(newChar2))
			{			
				$('#TG6').val(char1 + "0" + "." + "0" + "0" + " %");
			}
			else if (newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG6').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (newChar4 >= 0 && char3 == "." && isNaN(newChar5))
			{
				$('#TG6').val(char1 + char2 + char3 + char4 + "0" + " %");
			}
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 >= 0 && char2 == ".") //debug
			{
				$('#TG6').val(char1 + char2 + char3 + "0" + " %");
			}
			else if (newChar3 >= 0 && char2 == ".")
			{
				$('#TG6').val(char1 + char2 + "0" + "0" + " %");
			}			
		}

		
		var G1 = parseFloat($("#TG1").val());
		var G2 = parseFloat($("#TG2").val());
		var G3 = parseFloat($("#TG3").val());
		var G4 = parseFloat($("#TG4").val());
		var G5 = parseFloat($("#TG5").val());
		var G6 = parseFloat($("#TG6").val());
		
		var G1Total;
		var G2Total;
		var G3Total;
		var G4Total;
		var G5Total;
		var G6Total;
		
		var GradeTotal;
		var TotalModule = 6;
		var AGP;
		
		
		$('#GradeOne').clearQueue();
		
		//First Grade Point
		if (G1 >= 69.50 && G1 <= 100)
		{
			$('#GradeOne').val("[A+] Excellent 4.00 Points");
			G1Total = 4.00;
		}
		else if (G1 >= 64.5 && G1 <= 69.49)
		{
			$('#GradeOne').val("[A-] Very Good 3.75 Points");
			G1Total = 3.75;
		}
		else if (G1 >= 59.5 && G1 <= 64.49)
		{
			$('#GradeOne').val("[B+] Good 3.25 Points");
			G1Total = 3.25;
		}
		else if (G1 >= 54.5 && G1 <= 59.49)
		{
			$('#GradeOne').val("[B] Credit 3.00 Points");
			G1Total = 3.00;
		}
		else if (G1 >= 49.5 && G1 <= 54.49)
		{
			$('#GradeOne').val("[B-] Credit 2.75 Points");
			G1Total = 2.75;
		}
		else if (G1 >= 44.5 && G1 <= 49.49)
		{
			$('#GradeOne').val("[C+] Pass 2.50 Points");
			G1Total = 2.50;
		}
		else if (G1 >= 39.5 && G1 <= 44.49)
		{
			$('#GradeOne').val("[C-] Pass 2.25 Points");
			G1Total = 2.25;
		}
		else if (G1 >= 29.5 && G1 <= 39.49)
		{
			$('#GradeOne').val("[D] Fail 1.75 Points");
			G1Total = 1.75;
		}
		else if (G1 >= 0 && G1 <= 29.49)
		{
			$('#GradeOne').val("[F] Fail 0.00 Points");
			G1Total = 0.00;
		}
		else
		{
			$('#GradeOne').val("Invalid data at Grade One");
			$('#InputBox1').focus();
			$('#InputBox1').select();
		}

		
		//Second Grade Point
		if (G2 >= 69.50 && G2 <= 100)
		{
			$('#GradeTwo').val("[A+] Excellent 4.00 Points");
			G2Total = 4.00;
		}
		else if (G2 >= 64.5 && G2 <= 69.49)
		{
			$('#GradeTwo').val("[A-] Very Good 3.75 Points");
			G2Total = 3.75;
		}
		else if (G2 >= 59.5 && G2 <= 64.49)
		{
			$('#GradeTwo').val("[B+] Good 3.25 Points");
			G2Total = 3.25;
		}
		else if (G2 >= 54.5 && G2 <= 59.49)
		{
			$('#GradeTwo').val("[B] Credit 3.00 Points");
			G2Total = 3.00;
		}
		else if (G2 >= 49.5 && G2 <= 54.49)
		{
			$('#GradeTwo').val("[B-] Credit 2.75 Points");
			G2Total = 2.75;
		}
		else if (G2 >= 44.5 && G2 <= 49.49)
		{
			$('#GradeTwo').val("[C+] Pass 2.50 Points");
			G2Total = 2.50;
		}
		else if (G2 >= 39.5 && G2 <= 44.49)
		{
			$('#GradeTwo').val("[C-] Pass 2.25 Points");
			G2Total = 2.25;
		}
		else if (G2 >= 29.5 && G2 <= 39.49)
		{
			$('#GradeTwo').val("[D] Fail 1.75 Points");
			G2Total = 1.75;
		}
		else if (G2 >= 0 && G2 <= 29.49)
		{
			$('#GradeTwo').val("[F] Fail 0.00 Points");
			G2Total = 0.00;
		}
		else
		{
			$('#GradeTwo').val("Invalid data at Grade Two");
		}

		
		//Third Grade Point
		if (G3 >= 69.50 && G3 <= 100)
		{
			$('#GradeThree').val("[A+] Excellent 4.00 Points");
			G3Total = 4.00;
		}
		else if (G3 >= 64.5 && G3 <= 69.49)
		{
			$('#GradeThree').val("[A-] Very Good 3.75 Points");
			G3Total = 3.75;
		}
		else if (G3 >= 59.5 && G3 <= 64.49)
		{
			$('#GradeThree').val("[B+] Good 3.25 Points");
			G3Total = 3.25;
		}
		else if (G3 >= 54.5 && G3 <= 59.49)
		{
			$('#GradeThree').val("[B] Credit 3.00 Points");
			G3Total = 3.00;
		}
		else if (G3 >= 49.5 && G3 <= 54.49)
		{
			$('#GradeThree').val("[B-] Credit 2.75 Points");
			G3Total = 2.75;
		}
		else if (G3 >= 44.5 && G3 <= 49.49)
		{
			$('#GradeThree').val("[C+] Pass 2.50 Points");
			G3Total = 2.50;
		}
		else if (G3 >= 39.5 && G3 <= 44.49)
		{
			$('#GradeThree').val("[C-] Pass 2.25 Points");
			G3Total = 2.25;
		}
		else if (G3 >= 29.5 && G3 <= 39.49)
		{
			$('#GradeThree').val("[D] Fail 1.75 Points");
			G3Total = 1.75;
		}
		else if (G3 >= 0 && G3 <= 29.49)
		{
			$('#GradeThree').val("[F] Fail 0.00 Points");
			G3Total = 0.00;
		}
		else
		{
			$('#GradeThree').val("Invalid data at Grade Three");
			
		}

		
		//Fourth Grade Point
		if (G4 >= 69.50 && G4 <= 100)
		{
			$('#GradeFour').val("[A+] Excellent 4.00 Points");
			G4Total = 4.00;
			
		}
		else if (G4 >= 64.5 && G4 <= 69.49)
		{
			$('#GradeFour').val("[A-] Very Good 3.75 Points");
			G4Total = 3.75;
		}
		else if (G4 >= 59.5 && G4 <= 64.49)
		{
			$('#GradeFour').val("[B+] Good 3.25 Points");
			G4Total = 3.25;
		}
		else if (G4 >= 54.5 && G4 <= 59.49)
		{
			$('#GradeFour').val("[B] Credit 3.00 Points");
			G4Total = 3.00;
		}
		else if (G4 >= 49.5 && G4 <= 54.49)
		{
			$('#GradeFour').val("[B-] Credit 2.75 Points");
			G4Total = 2.75;
		}
		else if (G4 >= 44.5 && G4 <= 49.49)
		{
			$('#GradeFour').val("[C+] Pass 2.50 Points");
			G4Total = 2.50;
		}
		else if (G4 >= 39.5 && G4 <= 44.49)
		{
			$('#GradeFour').val("[C-] Pass 2.25 Points");
			G4Total = 2.25;
		}
		else if (G4 >= 29.5 && G4 <= 39.49)
		{
			$('#GradeFour').val("[D] Fail 1.75 Points");
			G4Total = 1.75;
		}
		else if (G4 >= 0 && G4 <= 29.49)
		{
			$('#GradeFour').val("[F] Fail 0.00 Points");
			G4Total = 0.00;
		}
		else
		{
			$('#GradeFour').val("Invalid data at Grade Four");

		}

		
		//Fifth Grade Point
		if (G5 >= 69.50 && G5 <= 100)
		{
			$('#GradeFive').val("[A+] Excellent 4.00 Points");
			G5Total = 4.00;
		}
		else if (G5 >= 64.5 && G5 <= 69.49)
		{
			$('#GradeFive').val("[A-] Very Good 3.75 Points");
			G5Total = 3.75;
		}
		else if (G5 >= 59.5 && G5 <= 64.49)
		{
			$('#GradeFive').val("[B+] Good 3.25 Points");
			G5Total = 3.25;
		}
		else if (G5 >= 54.5 && G5 <= 59.49)
		{
			$('#GradeFive').val("[B] Credit 3.00 Points");
			G5Total = 3.00;
		}
		else if (G5 >= 49.5 && G5 <= 54.49)
		{
			$('#GradeFive').val("[B-] Credit 2.75 Points");
			G5Total = 2.75;
		}
		else if (G5 >= 44.5 && G5 <= 49.49)
		{
			$('#GradeFive').val("[C+] Pass 2.50 Points");
			G5Total = 2.50;
		}
		else if (G5 >= 39.5 && G5 <= 44.49)
		{
			$('#GradeFive').val("[C-] Pass 2.25 Points");
			G5Total = 2.25;
		}
		else if (G5 >= 29.5 && G5 <= 39.49)
		{
			$('#GradeFive').val("[D] Fail 1.75 Points");
			G5Total = 1.75;
		}
		else if (G5 >= 0 && G5 <= 29.49)
		{
			$('#GradeFive').val("[F] Fail 0.00 Points");
			G5Total = 0.00;
		}
		else
		{
			$('#GradeFive').val("Invalid data at Grade Five");
		}

		
		//Sixth Grade Point
		if (G6 >= 69.50 && G6 <= 100)
		{
			$('#GradeSix').val("[A+] Excellent 4.00 Points");
			G6Total = 4.00;
		}
		else if (G6 >= 64.5 && G6 <= 69.49)
		{
			$('#GradeSix').val("[A-] Very Good 3.75 Points");
			G6Total = 3.75;
		}
		else if (G6 >= 59.5 && G6 <= 64.49)
		{
			$('#GradeSix').val("[B+] Good 3.25 Points");
			G6Total = 3.25;
		}
		else if (G6 >= 54.5 && G6 <= 59.49)
		{
			$('#GradeSix').val("[B] Credit 3.00 Points");
			G6Total = 3.00;
		}
		else if (G6 >= 49.5 && G6 <= 54.49)
		{
			$('#GradeSix').val("[B-] Credit 2.75 Points");
			G6Total = 2.75;
		}
		else if (G6 >= 44.5 && G6 <= 49.49)
		{
			$('#GradeSix').val("[C+] Pass 2.50 Points");
			G6Total = 2.50;
		}
		else if (G6 >= 39.5 && G6 <= 44.49)
		{
			$('#GradeSix').val("[C-] Pass 2.25 Points");
			G6Total = 2.25;
		}
		else if (G6 >= 29.5 && G6 <= 39.49)
		{
			$('#GradeSix').val("[D] Fail 1.75 Points");
			G6Total = 1.75;
		}
		else if (G6 >= 0 && G6 <= 29.49)
		{
			$('#GradeSix').val("[F] Fail 0.00 Points");
			G6Total = 0.00;
		}
		else
		{
			$('#GradeSix').val("Invalid data at Grade Six");

		}

		

		
		GradeTotal = G1Total + G2Total + G3Total + G4Total + G5Total + G6Total;
		AGP = (GradeTotal / TotalModule); 
		
		//Average Grade Point Conversion
		
		var conAns = AGP.toString();
		
		if (conAns.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns.substring(0, 4);
			var retrieve5 = conAns.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						CommentAGP = ("AGP is " + char1 + char2 + char3 + numChar4 + " Point").toString();
						$('#AverageGP').val("AGP is " + char1 + char2 + char3 + numChar4 + " Point");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						
						CommentAGP = ("AGP is " + char1 + char2 + numChar3).toString();
						$('#AverageGP').val("AGP is " + char1 + char2 + numChar3 + " Point");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						
						CommentAGP = ("AGP is " + numChar1 + char2 + "0" + " Point").toString();
						$('#AverageGP').val("AGP is " + numChar1 + char2 + "0" + " Point");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						
						$('#AverageGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{	
					CommentAGP = ("AGP is " + char1 + char2 + char3 + char4 + " Point").toString();
					$('#AverageGP').val("AGP is " + char1 + char2 + char3 + char4 + " Point");
				}
			}						
		}
		else if (conAns.length <= 4)
		{
			var retrieve4 = conAns.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{		
				CommentAGP = ("AGP is " + char1 + char2 + char3 + "0" + " Point").toString();	
				$('#AverageGP').val("AGP is " + char1 + char2 + char3 + "0" + " Point");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				CommentAGP = ("AGP is " + char1 + char2 + "0" + "0" + " Point").toString();
				$('#AverageGP').val("AGP is " + char1 + char2 + "0" + "0" + " Point");
			}
			else if(newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				CommentAGP = ("AGP is " + char1 + char2 + char3 + char4 + " Point").toString();
				$('#AverageGP').val("AGP is " + char1 + char2 + char3 + char4 + " Point");
			}
			else if (char2 != "." && char1 >= 0)
			{
				CommentAGP = ("AGP is " + char1 + "." + "0" + "0" + " Point").toString();
				$('#AverageGP').val("AGP is " + char1 + "." + "0" + "0" + " Point");
			}
			else if (isNaN(char1))
			{	
				
				$('#AverageGP').val("Data Error");
			}
		}
		
		//Ending of Average Grade Point Conversion
	
	});
	
	$("#exconclear").click(function() {
		$('#GradeOne').val("");
		
		$('#GradeTwo').val("");
		$('#GradeThree').val("");
		$('#GradeFour').val("");
		$('#GradeFive').val("");
		$('#GradeSix').val("");
		
		$('#InputBox1').val("");
		$('#InputBox2').val("");
		$('#InputBox3').val("");
		$('#InputBox4').val("");
		$('#InputBox5').val("");
		$('#InputBox6').val("");
		$('#AverageGP').val("");
		$('#Message').val("");
		
		$('#TG1').val("");
		$('#TG2').val("");
		$('#TG3').val("");
		$('#TG4').val("");
		$('#TG5').val("");
		$('#TG6').val("");
		
		$('#Ex1').val("");
		$('#Con1').val("");
		
		$('#Ex2').val("");
		$('#Con2').val("");
		
		$('#Ex3').val("");
		$('#Con3').val("");
		
		$('#Ex4').val("");
		$('#Con4').val("");
		
		$('#Ex5').val("");
		$('#Con5').val("");
		
		$('#Ex6').val("");
		$('#Con6').val("");
		
	});	
});