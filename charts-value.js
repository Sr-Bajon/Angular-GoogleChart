(()=> {
  'use strict';

  angular.module('pruebasChart')
    .value('gChartsLoaded', gChartsLoaded);

  function gChartsLoaded() {
    return new Promise((resolve)=> {
      google.charts.setOnLoadCallback(()=> {
        resolve(true);
      });
    });
  }
})();
