import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function Pie({data}) {

   const series = [44, 55, 41, 17,3,4,5]
   const options = {
              chart: {
                width: 280,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              labels: ["HopeBank       45%", "PayArena      20%", "PayAltitude     69%", "PayMall     20%"],
               colors: ['#0A221C', ' #0A221C','#E86B35', '#E86B35','#E86B35',],
             
            //   legend: {
            //     formatter: function(val, opts) {
            //       return val + " - " + opts.w.globals.series[opts.seriesIndex]
            //     }
            //   },
              
                legend: {
                    // formatter: function(val, opts) {
                    //           return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    //         },
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'right',
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '11px',
                    fontFamily: `Plus Jakarta Sans', sans-serif`,
                    fontWeight: 100,
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
                    width: 12, height: 12, strokeWidth: 0, strokeColor: '#fff', fillColors: undefined, radius: 12, customHTML: undefined, onClick: undefined, offsetX: 0, offsetY: 0
                    }
                    ,
                    itemMargin: {
                    horizontal: 5, vertical: 5
                    }
                    ,
                    onItemClick: {
                    toggleDataSeries: true
                    }
                    ,
                    onItemHover: {
                    highlightDataSeries: true
                    }
                    
                },
              title: {
                text: 'Traffic by Users'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200

                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

  return (
    <PieContainer>
     
      <Chart options={options} type="donut" series={series} height="230"  />
    </PieContainer>
  )
};

const PieContainer = styled.div`
   font-weight: 200;
        background-color: #F7F9FB;
        border-radius: 15px;
        padding: 10px; 

`