$(document).ready(function() {
  console.log('app.js linked');
  var $maincircle = $('.Maincircle');
  var $easyButton = $('#Easy');
  var $hardButton = $('#Hard');
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
  var hardMode = false;
  $quitButton.on('click',function(){
      alert('Game Over');
      location.reload(true);
  })

  function beepRed() {
    var sound = $('#beep1')[0];
    sound.play();
  }

  function beepBlue() {
    var sound = $('#beep2')[0];
    sound.play()
  }

  function beepGreen() {
    var sound = $('#beep3')[0];
    sound.play();
  }

  function beepYellow() {
    var sound = $('#beep4')[0];
    sound.play();
  }

  $redButton.on('click', function(){
     beepRed();
  })
  $blueButton.on('click', function(){
     beepBlue();
  })
  $greenButton.on('click', function(){
     beepGreen();
  })
  $yellowButton.on('click', function(){
     beepYellow();
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
      currentSequence[counter].addClass('flashcolor');
        if(currentSequence[counter] === $redButton){
        beepRed();
        } else if (currentSequence[counter] === $blueButton){
        beepBlue();
        } else if (currentSequence[counter] === $greenButton){
        beepGreen();
        } else if (currentSequence[counter] === $yellowButton){
        beepYellow();
        };
      console.log('beepfunction',counter);
      var changeBack = function(count){
        // console.log("ITERATION");
        currentSequence[count].removeClass('flashcolor');
      }
      setTimeout(changeBack.bind(null, counter), 900);
      counter++;
       console.log('flashfunction',counter);
    }
  }
  var timer = setInterval(function(){
    changeButton() },1000);
}

  $easyButton.on('click', function(){
    // location.reload(true);
    // $(this).addClass('easytrigger');
    // $hardButton.removeClass('hardtrigger');
    flashSequence();
     $maincircle.removeClass('spinning');

  })

  $hardButton.on('click', function(){
    // location.reload(true);
    // $(this).addClass('hardtrigger');
    // $easyButton.removeClass('easytrigger');
    hardMode();
    flashSequence();
  })

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
      // setTimeout(function(){
      // $maincircle.css('background-image','url("http://twinpossible.com/wp-content/uploads/2011/11/thumbs-up-smiley-300x182.gif")');
      // },500);
    }
  } else {
     $scoreInput.val('0');
     alert('you lose');
     $maincircle.removeClass('spinning');
  }
})

var hardMode = function(){
  $maincircle.addClass('spinning');
}













});
