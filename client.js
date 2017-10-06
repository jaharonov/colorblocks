console.log('script sourced.');
$(document).ready(readyNow);

function readyNow(){
  console.log('ready!');
  redCount();
  greenCount();
  blueCount();
  yellowCount();
  redSquares();
  greenSquares();
  blueSquares();
  yellowSquares();
  redGone();
  greenGone();
  blueGone();
  yellowGone();






}

function redCount() {
  val = 1;
  $('.button1').on('click', function() {
    $('.redCounter').html(function(i, val) {
    return val*1+1;
    });
});

}
function greenCount() {
  $('.button2').on('click', function() {
    $('.greenCounter').html(function(i, val) {
    return val*1+1
    });
});

}

function blueCount() {
  $('.button3').on('click', function() {
    $('.blueCounter').html(function(i, val) {
    return val*1+1;
    });
});

}

function yellowCount() {
  $('.button4').on('click', function() {
    $('.yellowCounter').html(function(i, val) {
    return val*1+1;
    });
});

}

function redSquares() {
  $('.button1').on('click', function() {
  $('#boxarea').append('<div class="box red"></div>');


});
}

function greenSquares() {
  $('.button2').on('click', function() {
  $('#boxarea').append('<div class="box green"></div>');

});
}

function blueSquares() {
  $('.button3').on('click', function() {
  $('#boxarea').append('<div class="box blue"></div>');

});
}

function yellowSquares() {
  $('.button4').on('click', function() {
  $('#boxarea').append('<div class="box yellow"></div>');


});
}



function greenGone() {
$('#boxarea').on('click', '.box', greenGone);
$('.box').remove();
}
function blueGone() {
$('#boxarea').on('click', '.box', blueGone);
$('.box').remove();
}

function yellowGone() {
$('#boxarea').on('click', '.box', yellowGone);
$('.box').remove();
}

function redGone() {
$('#boxarea').on('click', '.box', redGone);
$('.box').remove();
}
