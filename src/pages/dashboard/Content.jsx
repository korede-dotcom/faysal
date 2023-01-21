import React from 'react'
import Header from '../../reuseable/Header'
import styled from "styled-components"
import Card from '../../reuseable/Card'
import Progress from '../../reuseable/charts/Progress'
import Pie from '../../reuseable/charts/Pie'
import Bar from '../../reuseable/charts/Bar'
import Flow from '../../reuseable/charts/Flow'

function Content({children}) {


  return (
    <DashboardContent>
        <Header/>
        <Contents>
         {children}
        </Contents>
    </DashboardContent>
  )
}

const DashboardContent = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    /* border: 1px solid red; */
    /* gap: 20px; */
    @media screen and (max-width:40em){
            width:100%;
            place-content: center;
            grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
        }

    
    

`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 20px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  
    /* background-color:#e6e6e6; */
    ::-webkit-scrollbar{
        display: none;
    }
    /* > .gridcard > div:nth-of-type(even){
      background-color:#2d3748;
      color: #ddd;
    } */
    .chart1{
        
        display:grid;
        grid-template-columns:3fr 1fr;
        gap: 20px;
        background-color: #7e8a96;
        padding: 10px;
        border-radius: 20px;
        /* flex-wrap: wrap;
        align-items: center; */
        /* gap: 10px; */
        @media screen and (max-width:40em){
            width:100%;
            display: block;
        }

        
    }
    .chart2{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap: 20px;
        @media screen and (max-width:40em){
            width:100%;
            display: block;
        }
    
        
    }

    .selectcontainer{
        /* border: 1px solid red; */
        display: grid;
        grid-gap:10px;
        width: 80%;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        @media screen and (max-width:40em){
            width:50%;
            place-content: center;
            grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
        }

        
        
    }
    .gridcard{
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        @media screen and (max-width:40em){
           
        }

        .line{
            border-top: 1px solid #000;
            padding: 5px;
            text-align: end;
            display:inline-flex;
            width: 100%;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;
            color: #1B59F8;
            font-size: 11px;
            cursor: pointer;

            img{
                height: 20px;
            }
        }
    }
    .gridsmallcard{
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    }
    
   
    
`

export default Content