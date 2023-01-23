import React from 'react'
import Header from '../../reuseable/Header'
import styled from "styled-components"
import Card from '../../reuseable/Card'
import Progress from '../../reuseable/charts/Progress'
import Pie from '../../reuseable/charts/Pie'
import Bar from '../../reuseable/charts/Bar'
import Flow from '../../reuseable/charts/Flow'
import Layout from './Layout'
import Navbar from '../Navbar'

function Content({children}) {


  return (
    <Layout>
        <Navbar/>
    <DashboardContent>
        <Header/>
        <Contents>
         {children}
        </Contents>
    </DashboardContent>
    </Layout>
  )
}

const DashboardContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    /* border: 1px solid red; */
    /* gap: 20px; */
    

`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    /* padding: 20px; */
    height:70%;
    width: 100%;
    /* overflow-y: scroll; */
    overflow: hidden;
    @media screen and (max-width:40em ) {
        padding: 10px;
        margin-top: 20%;
        /* overflow: hidden; */
    }
    
    /* background-color:#e6e6e6; */
    ::-webkit-scrollbar{
        display: none;
    }

    .chart1{
        display:grid;
        grid-template-columns:3fr 1fr;
        gap: 20px;
        /* flex-wrap: wrap;
        align-items: center; */
        /* gap: 10px; */

        
    }
    .chart2{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap: 20px;
    
        
    }

    .selectcontainer{
        /* border: 1px solid red; */
        display: grid;
        grid-gap:10px;
        width: 80%;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        
    }
    .gridcard{
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

        .line{
            border-top: 1px solid #ddd;
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