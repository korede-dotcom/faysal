import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function RadialChart({data}) {
    
    const series = [44, 55, 67, 83]
    const options = {
        

legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'right',
    horizontalAlign: 'center',
    floating: false,
    fontSize: '10px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      colors: undefined, useSeriesColors: false
    }
    ,
    markers: {
      width: 12, height: 5, strokeWidth: 0, strokeColor: '#fff', fillColors: undefined, radius: 12, customHTML: undefined, onClick: undefined, offsetX: 0, offsetY: 0
    }
    ,
    itemMargin: {
      horizontal: 5, vertical: 10
    }
    ,
    onItemClick: {
      toggleDataSeries: true
    }
    ,
    onItemHover: {
      highlightDataSeries: true
    }
    ,
  },
      chart: {
        height: 250,
        type: 'radialBar',
        legend: {
            showForSingleSeries: true
          }
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            position: 'top',
            name: {
              fontSize: '12px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    }
  
  
  

  return (
    <div>
     
      <Chart options={options} type="radialBar" series={series} height="250" />
    </div>
  );
}
