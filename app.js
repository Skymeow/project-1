$(document).ready(function() {
  console.log('app.js linked');

  var $startButton = $('#start');
  var $scoreInput = $('input');
  var $redButton = $('#red');
  var $greenButton = $('#green');
  var $blueButton = $('#blue');
  var $yellowButton = $('#yellow');
  var $quitButton = $('#quit');
  var $circleButton = $('.circle-button');
  // If you want to truly be random in your selecton of buttons to add to the currentSequence array you should have an array like this with one of each button to choose from so there is always a 25% chance of choosing each button
  var buttonArray = [$yellowButton,$blueButton,$redButton,$greenButton];
  var currentSequence = [$yellowButton,$blueButton,$redButton,$greenButton];
  var counter = 0;

  // $startButton.on('click',function()
  //    f
  // })

  $quitButton.on('click',function(){
      alert('Game Over');
    })

  var proceed = function(){
      addColor = buttonArray[Math.floor(Math.random()*4)];
      currentSequence.push(addColor);
      flashSequence();
  }

var flashSequence = function(){
  var counter = 0;
  var changeButton = function(){
    if(counter === currentSequence.length){
      clearInterval(timer);
      //alert user for turn
      //turn on event listeners
    } else {
      currentSequence[counter].addClass('flashcolor')
      var changeBack = function(count){
        // console.log("ITERATION");
        currentSequence[count].removeClass('flashcolor');
      }
      setTimeout(changeBack.bind(null, counter), 900);
      counter++;
    }
  }
  var timer = setInterval(function(){
  changeButton() },1000);
}

flashSequence();

$circleButton.on('click',function() {
  if(currentSequence[counter].attr('id') === $(this).attr('id')) {
    var $currentCircle = $(this);
    $currentCircle.toggleClass('clickflash');
    setTimeout(function() {
      $currentCircle.toggleClass('clickflash');
    }, 500);
    counter++;
    // check to see if you get it all right, if so,proceed to next round and reset counter
    if(counter === currentSequence.length){
      counter=0;
      // console.log('you got this round right!');
      // increase seq
      proceed();
       $scoreInput.val(parseInt($scoreInput.val()) + 1);
    }
  } else {
     $scoreInput.val('0');
    alert('you lose');
  }
})

});
