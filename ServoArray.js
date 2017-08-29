

var ServoArray = [ Servostring1() , Servostring2() ]


function  Servostring1(){
  LeftRight.shift();
}

function  Servostring2(){
  LeftRight.unshift('1');
}

module.exports = ServoArray;
