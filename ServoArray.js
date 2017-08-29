

var ServoArray =
 
      if (this.x >= 0.5){
      servo.to(155)
    }

    if (this.x <= 0.5 && this.x >= -0.5){
      servo.to(105)
    }

    if (this.x <= -0.5){
      servo.to(55)
    }



module.exports = ServoArray;
