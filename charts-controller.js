(() => {
  'use strict';

  angular.module('pruebasChart')
    .controller('pruebasChartController', pruebasChartController);

  pruebasChartController.$inject = ['gChartsLoaded'];

  function pruebasChartController(gChartsLoaded) {
    var pcc = this; // jshint ignore:line

    ////

    init();

    function init() {
      gChartsLoaded().then(()=> {
        console.log('Google Charts Cargado!');

        pcc.pieChart = {
          data   : function () {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Mushrooms', randomize()],
              ['Onions', randomize()],
              ['Olives', randomize()],
              ['Zucchini', randomize()],
              ['Pepperoni', randomize()]
            ]);
            return data;
          },
          options: {
            'title'  : 'How Much Pizza I Ate Last Night',
            'width'  : 800,
            'height' : 700,
            is3D     : true,
            animation: {
              startup : true,
              duration: 20000,
              easing  : 'linear'
            }
          },
          chart  : new google.visualization.PieChart(document.getElementById('chart_div'))
        };

        drawChart();
      });
    }

    function drawChart() {
      // Instantiate and draw our chart, passing in some options.
      pcc.pieChart.chart.draw(pcc.pieChart.data(), pcc.pieChart.options);
    }

    function randomize(){
      return Math.floor(Math.random() * 10);
    }

    pcc.boton = function () {
      drawChart();
    };
  }
})();
