import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function BarSample({data}) {

  const [live, setLive] = useState(false)

   const series = [
      
        {
          name: "Free Cash Flow",
          data: [5, 41, 36, 26, 5, 48]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 6, 26, 45, 48]
        }
      ]

      const options = {
         colors: ["#4D47C3","#BAEDBD"],
   
        // series: [{
        //       name: 'series1',
        //       data: [31, 40, 28, 51, 42, 109, 100]
        //     }, {
        //       name: 'series2',
        //       data: [11, 32, 45, 32, 34, 52, 41]
        //     }],
            chart: {
            height: 220,
            type: 'area',
            toolbar: {
              show: false

            }
          },
          legend: {
            show: false,
            fontSize: '11px',
            fontFamily: `Plus Jakarta Sans', sans-serif`,
            color: '#333333'
          },
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          fill: {
            type: 'solid',
            colors: ['transparent'],
          },
      };

  return (
    <Flex>
       <div className="using">
          <p className={`users ${live ? "active" : ''}`} onClick={() => setLive(!live)}>Transactions</p>
          <p className={`users ${live ? "active" : ''}`} onClick={() => setLive(!live)}>Spendings</p>
          <p className={`users ${live ? "active" : ''}`} onClick={() => setLive(!live)}>Service</p>
          <div className="summer"></div>
          <div className="suming">
            <div className="usus"></div>
            <p className="users">Current Week</p>
          </div>
          <div className="suming">
          <div className="usue"></div>
            <p className="users">Previous Week</p>
          </div>
       </div>
      <Chart options={options} type="area" series={series} height="230" />
    </Flex>
  )
};



const Flex = styled.div`
   
        // // background: rgba(0, 0, 0, 0.1);
        // border-radius: 0px 4px 4px 0px;
        // align-items: space-around;
        // // column-gap: 10px;
        font-weight: 200;
        background-color: #F7F9FB;
        border-radius: 15px;
        padding: 10px; 
   

        .using{
                display: flex;
                flex-direction: row; 
          .users{
            font-style: normal;
            font-weight: 200;
            font-size: 10px !important;
            line-height: 20px;
            color: #333333;
            margin-bottom: 10px;
            margin-top: 19px;
            margin-left: 12px;
            // fontFamily: 'Plus Jakarta Sans';
          
          }
          .active{
            color:  #4D47C3;
            background: rgba(77, 71, 195, 0.1);
            border-radius: 30px;
            padding: 6px 13px; 
          }

          .summer {
            border: 1px solid rgba(0, 0, 0, 0.2);
            // height: 20px;
            // width: 0px;
            width: 20px;
            height: 0px;
            margin-top: 30px;
            margin-left: 30px;
            transform: rotate(90deg);
          }
          .suming{
            display: flex;
            flex-direction: row;
            margin-left: 30px;

            .users{
              font-style: normal;
              font-weight: 200;
              font-size: 12px;
              line-height: 20px;
              color: #333333;
              margin-bottom: 10px;
              margin-top: 20px;
              margin-left: 12px;
              // fontFamily: 'Plus Jakarta Sans';
             
            }
            .usus{
                 width: 10px;
                 height: 10px;
                 background: #02CD0E;
                 border-radius: 50%;
                 margin-top: 25px;
            }
            .usue{
                  width: 10px;
                  height: 10px;
                  background: #4D47C3;
                  border-radius: 50%;
                  margin-top: 25px;
            }
  
          }
        }






`