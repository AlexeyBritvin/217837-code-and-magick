'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    var num = min - 0.5 + Math.random() * (max - min + 1);
    num = Math.round(num);
    return num;
  };

  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var surnames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizards = [];

  var generateWizard = function () {
    var wizard = {
      name: names[getRandomNumber(0, (names.length - 1))] + ' ' + surnames[getRandomNumber(0, (surnames.length - 1))],
      coatColor: coatColors[getRandomNumber(0, (coatColors.length - 1))],
      eyesColor: eyesColors[getRandomNumber(0, (eyesColors.length - 1))]
    };
    wizards.push(wizard);
  };

  for (var i = 0; i < 4; i++) {
    generateWizard();
  }

  var wizardsList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();

  var drawWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(drawWizard(wizards[j]));
  }

  wizardsList.appendChild(fragment);
  var simillarWizards = setup.querySelector('.setup-similar');
  simillarWizards.classList.remove('hidden');
})();
