$(document).ready(function() {
  var num = '1'
  var num2 = '1'
  var close = ')'
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    var code = (event.keyCode ? event.keyCode : event.which);
    if(num == '30' && num > num2){
      $('#win_one h1').css('opacity', '1');
      var winner = $('h1#winner_one span').html();
      var loser = $('h1#winner_two span').html();
      $('form#result_form input#winner').val(winner);
      $('form#result_form input#loser').val(loser);
    }
    else if(num2 == '30' && num2 > num){
      $('#win_two h1').css('opacity', '1');
      var winner = $('h1#winner_two span').html();
      var loser = $('h1#winner_one span').html();
      $('form#result_form input#winner').val(winner);
      $('form#result_form input#loser').val(loser);
    };
    if(code == 39 && num2 < 30) {   
      $('table.racer_table #player1_strip td:nth-child(' + num + close).removeClass('active');
      num++
      $('table.racer_table #player1_strip td:nth-child(' + num + close).addClass('active');   
    }
    else if(code == 90 && num < 30){
      $('table.racer_table #player2_strip td:nth-child(' + num2 + close).removeClass('active');
      num2++
      $('table.racer_table #player2_strip td:nth-child(' + num2 + close).addClass('active');
    };
  
  });
});
