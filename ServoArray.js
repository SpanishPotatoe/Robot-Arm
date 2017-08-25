

// NOT JOHNNY-FIVE, ADDED FOR PROGRAMMING PURPOSE


ServoArray [ LeftRight() ]




  function LeftRight(){

    if (this.x >= 0.5){
      servo.to(155);
      }

    if (this.x <= 0.5 && this.x >= -0.5){
      servo.to(115);
      }

    if (this.x <= -0.5){
      servo.to(75);
      }

    }


module.export = ServoArray;
