//Chooses random number between 19-120

$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
  
    $('#randomNumber').text(Random);

    // Chooses random number for each crystal between 1-12
   
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
   
    //Displays score

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
   
  $('#numWins').text(wins);
  $('#numLosses').text(losses);
  
  //Resets when user wins or loses

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  
    //Determine whether user wins or loses on last click

    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            won();
          }
          else if ( userTotal > Random){
            lost();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            won();
          }
          else if ( userTotal > Random){
            lost();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      $('#finalTotal').text(userTotal);
  
            if (userTotal == Random){
            won();
          }
          else if ( userTotal > Random){
            lost();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            won();
          }
          else if ( userTotal > Random){
            lost();
          }
    });  
    
    //Alerts whether user won or lost

    function won(){
      alert("You won!");
        wins++; 
        $('#numWins').text(wins);
        reset();
      }
     
      function lost(){
      alert ("You lost!");
        losses++;
        $('#numLosses').text(losses);
        reset()
      }
  }); 