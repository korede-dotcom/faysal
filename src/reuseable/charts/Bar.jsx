import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function Bar({data}) {

   const series = [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }]

    const  options = {
        chart: {
          height: 350,
          type: 'bar',
          stacked: true,
        //   events: {
        //     click: function(chart, w, e) {
        //       // console.log(chart, w, e)
        //     }
        //   },
          toolbar: {
            show: false
          }
        },
        colors:['#0A221C', ' #0A221C','#0A221C', '#0A221C','#E86B35', '#FFDF6C'],
        plotOptions: {
          bar: {
            columnWidth: '25%',
            distributed: true,
            borderRadiusTopLeft: 5,
            borderRadiusTopRight: 5,
            
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ],
          labels: {
            style: {
              colors: ['#0A221C', ' #C6C7F8','#333333', '#B1E3FF','#95A4FC', '#A1E3CB'],
              fontSize: '12px'
            }
          }
        }
    }

  return (
    <Flex>
    <p className="users">Traffic by Transactions</p>
      <Chart options={options} type="bar" series={series} height="250"  />
    </Flex>
  )
};


const Flex = styled.div`
 font-weight: 200;
        background-color: #F7F9FB;
        border-radius: 15px;
        padding: 10px; 
   
        // // background: rgba(0, 0, 0, 0.1);
        // border-radius: 0px 4px 4px 0px;
        // align-items: space-around;
        // // column-gap: 10px;
.users{
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #333333;
  margin-bottom: 10px;
  margin-left: 12px;
}





`