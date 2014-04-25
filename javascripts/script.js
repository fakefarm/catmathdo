$(function() {

  var cards = [
    ["images/plus_1.svg", 'Add 1 chip', 1],
    ["images/plus_2.svg", 'Add 2 chip2', 2],
    ["images/plus_3.svg", 'Add 3 chips', 3],
    ["images/plus_4.svg", 'add 4 chips', 4],
    ["images/plus_5.svg", 'add 5 chips', 5],
    ["images/minus_1.svg", 'minus 1 chip', -1],
    ["images/minus_2.svg", 'minus 2 chips', -2],
    ["images/minus_3.svg", 'minus 3 chips', -3],
    ["images/minus_4.svg", 'minus 4 chips', -4],
    ["images/minus_5.svg", 'minus 5 chips', -5],
  ];

  $("[data-chip=drag]").draggable();

  $('#board').droppable({
      drop: function( event, ui ) {
        $('#cat-message').html('Nice, now draw a card.');
      }
    });

  $('#card-back').click(function(){
      random = _.random(0,9);
      var srcImg =  cards[random][0];
      rotate = _.random(-30,30);
      move = _.random(-20,20);
      $('.card').attr('src', srcImg);
      $('.card').css('-webkit-transform', 'translate('+ move +'px) rotate(' + rotate + 'deg)');
      $('.card').css('-moz-transform', 'translate('+ move +'px) rotate(' + rotate + 'deg)');
      $('.card').css('-o-transform', 'translate('+ move +'px) rotate(' + rotate + 'deg)');
      $('.card').css('-ms-transform', 'translate('+ move +'px) rotate(' + rotate + 'deg)');
      $('.card').css('transform', 'translate('+ move +'px) rotate(' + rotate + 'deg)');
      $('.card').show();
      $('#cat-message').text(cards[random][1]);

  });
  // $('#cat-talk').addClass('animated bounceInDown');
  // $('#cat-message').addClass('animated bounceInDown');
  // $('#card-back').addClass('animated bounceInRight');


  $('ul.menu a').click(function () {
      $('ul.menu a').removeClass('active');
      $(this).addClass('active');
      // $(hash).removeClass('animated pulse');
      // var hash = this.hash;
      // $(hash).addClass('animated pulse');
   });

});

