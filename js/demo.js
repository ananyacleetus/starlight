/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#F7F972',
    lineColor: '#003E5F',
    directionX: 'down',
    directionY: 'down',
    curvedLines: false,
    maxSpeedY: 1.8,
    maxSpeedX: 1.8,
    density: 10000,
    proximity: 50
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});