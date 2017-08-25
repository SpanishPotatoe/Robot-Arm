

// NOT JOHNNY-FIVE, ADDED FOR PROGRAMMING PURPOSE



    if (this.x >= 0.5){
      servo.to(155);
      }

    if (this.x <= 0.5 && this.x >= -0.5){
      servo.to(115);
      }

    if (this.x <= -0.5){
      servo.to(75);
      }

    


module.exports = ServoArray;
