(() => {
  'use strict';

  angular.module('pruebasChart')
    .run(chartsRun);

  chartsRun.$inject = [];

  function chartsRun() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages': ['corechart']});
  }
})();
