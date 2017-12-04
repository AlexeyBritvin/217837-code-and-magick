'use strict';

var getRandomNumber = function (min, max) {
  var num = min + Math.random() * (max - min);
  return num;
};

var findMaxValue = function (array) {
  var maxValue = -1;

  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    if (maxValue < number) {
      maxValue = number;
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 155, 40);
  ctx.fillText('Список результатов:', 155, 60);

  var maxTime = findMaxValue(times);
  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  var barWidth = 40;
  var columnGap = 50;
  var initialX = 155;
  var initialY = 100;
  var histogramMargin = 20;
  var lineHeight = 18;

  for (var j = 0; j < times.length; j++) {
    var barHeight = step * times[j];
    var nextBarX = (columnGap + barWidth) * j;
    var heightDelta = histogramHeight - barHeight;

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomNumber(0.1, 1) + ')';
    }

    ctx.fillRect(initialX + nextBarX, initialY + heightDelta, barWidth, barHeight);

    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px PT Mono';
    ctx.fillText(names[j], initialX + nextBarX, initialY + histogramHeight + histogramMargin);
    ctx.fillText(Math.round(times[j]), initialX + nextBarX, initialY + heightDelta - histogramMargin + lineHeight / 2);
  }
};
