var LeftRight = ['1'];
 joystick.on("change", function() {
     console.log("Joystick");
     console.log("  x : ", this.x);
     console.log("  y : ", this.y);
     console.log("--------------------------------------");
   function  Servostring1(){
       LeftRight.shift();
   }
   if (this.y >= 0.75){
     lcd.clear().print("Servo Mode : ");
     lcd.cursor(1, 0);
     lcd.print("Left Right");
     Servostring1();
   }
   if ( LeftRight[0] == null ){
         if (this.x >= 0.5){
           servo.to(70);
         }
         if (this.x < 0.5 && this.x > -0.5){
           servo.to(105);
         }
         if (this.x <= -0.5){
           servo.to(155);
         }
   }
   function  Servostring2(){
     LeftRight.unshift('1');
   }
   if (this.y <= -0.75){
     lcd.clear().print("Servo Mode : ");
     lcd.cursor(1, 0);
     lcd.print("Turn Degree");
     Servostring2();
   }
   if ( LeftRight[0] == '1' ){
           if (this.x >= 0.5){
             servo.step(-2);
           }
           if (this.x <= -0.5){
             servo.step(+2);
           }
   }
 console.log(LeftRight);
 });
