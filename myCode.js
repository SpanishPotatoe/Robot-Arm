var servoMode = null
var joystickPosition = "center";
joystick.on("change", function() {
  //Determine position of joystick
  if ((Math.round(this.y * 100) / 100) >  0.9  )         { joystickPosition = "down"  }
  if ((Math.round(this.x * 100) / 100) >= 0.5  )         { joystickPosition = "lt"    }
  if (Math.round(this.y) == 0 && Math.round(this.x) == 0){ joystickPosition = "center"}
  if ((Math.round(this.x * 100) / 100) <= -0.5 )         { joystickPosition = "rt"    }
  if (Math.round(this.y) == -1)                          { joystickPosition = "up"    }
  console.log("Joystick", servoMode);
  console.log("  x : ", this.x);
  console.log("  y : ", this.y);
  console.log("--------------------------------------");
  //Handle joystick up
  if (joystickPosition == "up"){
    //enter servo mode : full swing back
    lcd.clear().print("Servo Mode : ");
    lcd.cursor(1, 0);
    servoMode = 'FSB'
    lcd.print("Full Swing Back");
  }
  //Handle joystick down
  if (joystickPosition == "down"){
    //enter servo mode : Incremental hold
    lcd.clear().print("Servo Mode : ");
    lcd.cursor(1, 0);
    servoMode = 'IH'
    lcd.print("Incremental hold");
  }
  //Handle joystick center
  if (joystickPosition == "center"){
    //determine Servo  mode
    if (servoMode == 'FSB'){  servo.to(105);  }
  }
  //Handle joystick rt
  if (joystickPosition == "rt"){
    //determine Servo  mode
    if (servoMode == 'FSB'){  servo.to(155);  }
    if (servoMode == 'IH') {  servo.step(+2); }
  }
  //Handle joystick lt
  if (joystickPosition == "lt"){
    //determine Servo  mode
    if (servoMode == 'FSB'){   servo.to(70);  }
    if (servoMode == 'IH'){   servo.step(-2)  }
  }
