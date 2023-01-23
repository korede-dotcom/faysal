import React from 'react'
import Layout from '../../reuseable/layouts/Layout'
import Navbar from '../../reuseable/Navbar'
import Content from './Content'
import Radial from '../../reuseable/charts/Radial'
import Trasactions from './Trasactions'
import Card from '../../reuseable/Card'
import Progress from '../../reuseable/charts/Progress'
import Pie from '../../reuseable/charts/Pie'
import Bar from '../../reuseable/charts/Bar'
import Flow from '../../reuseable/charts/Flow'
import Bell from '../../assets/bell.svg'
import Location from '../../assets/location.png'
import card1 from '../../assets/card6.svg'
import card2 from '../../assets/card2.svg'
import card4 from '../../assets/card4.svg'
import card5 from '../../assets/card8.svg'
import c1 from '../../assets/c1.svg'
import c2 from '../../assets/c2.svg'
import c3 from '../../assets/c3.svg'
import c4 from '../../assets/c4.svg'
import AdminCard from '../../assets/AdminCard.svg'
import AdminCard1 from '../../assets/Adcard1.svg'
import AdminCard2 from '../../assets/Adcard2.svg'
import cardtemp from '../../assets/cardtemp.svg'
// import logoicon from '../../assets/logoicon.svg'
import eyecard from '../../assets/eyecard.svg'
import logoicon from '../../assets/logoicon.svg'
// import AdminCard3 from '../../assets/Adcard3.svg'
import card3 from '../../assets/card3.svg'
import styled from "styled-components"
import Button from '../../reuseable/Button'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {AgentTotalCustomers,AgentTotalDeposit,Transactions,AdminTotals,AdminDaily} from "../../services/Dashboard"
import { useLocalStorage } from '../../hooks/GetRole'



function Dashboard() {

    const navigate = useNavigate()

    const {getLocalStorage} = useLocalStorage('role')
    const check = getLocalStorage

const isAdmin = check === "ADMIN"


    const { data:agenttotalcustomers,isLoading:loadinAgentTotalCustomers } = useQuery({
  
        queryKey:['AgentTotalCustomers'],
        queryFn: () => AgentTotalCustomers(),
        // onError: (err) => {
        //   setMessage(err?.response?.data?.detail || err.message);
        //   setOpen(true);
        // },
        // enabled: Boolean(agentId),
      });
    console.log("🚀 ~ file: Dashboard.jsx:115 ~ Dashboard ~ agenttotalcustomers", agenttotalcustomers)
    
    const { data:admintTotals,isLoading:totalsLoading } = useQuery({
        queryKey:['AdminTotals'],
        queryFn: () => AdminTotals(),
  
      });
    console.log("🚀 ~ file: Dashboard.jsx:67 ~ Dashboard ~ admintTotals", admintTotals)
    // const { data:tranx,isLoading:loadingtranx } = useQuery({
    //     queryKey:['Transactions'],
    //     queryFn: () => Transactions(),
  
    //   });

        
    const { data:tranx,isLoading:loadingtranx } = useQuery({

        
        queryKey:['Transactions'],
        queryFn: () => Transactions(),
      });
    console.log("🚀 ~ file: Dashboard.jsx:132 ~ Dashboard ~ tranx", tranx)

const sortTranx = tranx?.content?.map(d => {
    return {
        name:d?.agent,
        amount:d?.amount,
        tranxRef:d?.transaction_reference,
        type:d?.transaction_type,
        date:d?.transaction_date

    }
})


    const { data:agentTotalDeposit,isLoading:loadingagentTotalDeposit } = useQuery({
  
        queryKey:['AgentTotalDeposit'],
        queryFn: () => AgentTotalDeposit(),
        // onError: (err) => {
        //   setMessage(err?.response?.data?.detail || err.message);
        //   setOpen(true);
        // },
        // enabled: Boolean(agentId),
      });
    console.log("🚀 ~ file: Dashboard.jsx:105 ~ Dashboard ~ agentTotalDeposit", agentTotalDeposit)

    const { data:adminDaily,isLoading:loadingdaily } = useQuery({
  
        queryKey:['AdminDaily'],
        queryFn: () => AdminDaily(),
        // onError: (err) => {
        //   setMessage(err?.response?.data?.detail || err.message);
        //   setOpen(true);
        // },
        // enabled: Boolean(agentId),
      });
    console.log("🚀 ~ file: Dashboard.jsx:116 ~ Dashboard ~ adminDaily", adminDaily)

    // const { data:agentTotalDeposit,isLoading:loadingagentTotalDeposit } = useQuery({
  
    //     queryKey:['AgentTotalDeposit'],
    //     queryFn: () => AgentTotalDeposit(),
    //     // onError: (err) => {
    //     //   setMessage(err?.response?.data?.detail || err.message);
    //     //   setOpen(true);
    //     // },
    //     // enabled: Boolean(agentId),
    //   });

    


  return (
   <Layout>
      <Navbar/>
      <Content>
                <h4>Context</h4>
                <div className='gridcard'>
                {/* <Card name="Messages" amount="0" isText={true} icon={Bell} icontext="All Messages , thanks for working so well " count="0" /> */}
                {/* <Card icontext="Egebeda" location={true} icon={Location } locationtext="Lagos"/> */}
                <Adcard>
                    <img src={cardtemp}/>
                    <div className='carddetails'>
                        <div className='cardinner'>
                       <div className='f1'>
                            <div className='f1p'>
                                <p>Total Balance</p>
                                <small># *****</small>
                            </div>
                            <img src={eyecard}/>
                        </div>
                       <div className='f2'>
                        <p>*******1890</p>
                        </div>
                        <div className='f3'>
                            <p>Faysal</p>
                            <img src={logoicon}/>
                        </div>

                        </div>
                    </div>
                </Adcard>

                 </div>
        <h4>Summary</h4>
        {
            isAdmin ?
            <div className='gridcard'>
                        <Card name="Total Customers" amount={admintTotals?.totalCustomers || 0} amountText="Total Customers" cicon={c1} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" />
                        <Card name="Total Client Registered" amount={admintTotals?.totalPayOuts || 0} amountText="Total Payouts" cicon={c2} bg="#E86B35" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"/>
                        <Card name="Total Client Registered" amount={admintTotals?.totalRemittance|| 0}  amountText="Total Remittance" cicon={c4} bg="#70D4FF" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"/>
                        <Card name="Total Client Registered" amount={admintTotals?.totalSavings|| 0}  amountText="Total Savings" cicon={c2} bg="#fff" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" tc="#000"/>
                    
            </div> :
             <div className='gridcard'>
             <Card name="Total Client Registered" amount={agenttotalcustomers} amountText="Total Customer Count" cicon={c1} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" />
             <Card name="Total Client Registered" amount="-" amountText="Total Payout" cicon={c2} bg="#E86B35" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"/>
             {/* <Card name="Total Client Registered" amount="500" amountText="Total " cicon={c4} bg="#70D4FF" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"/> */}
             <Card name="Total Client Registered" amount={agentTotalDeposit}  amountText="Total Deposit" cicon={c2} bg="#fff" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" tc="#000"/>
         
            </div>
        }
                <h4>Today Totals</h4>
            <div className='gridcard'>
                <Button text="register Client" width="100%" bcg="#fff" icon={card5} ih="35px"  clickEvent={() => navigate('/customers')} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" />
                <Button text="Activity Sumary" width="100%" bcg="#fff" icon={card2} ih="35px" color="#000" clickEvent={() => navigate('/savings')} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"  />
                <Button text="Deposit Funds" width="100%" bcg="#fff" icon={card1} ih="30px" clickEvent={() => navigate('/remitance')} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" />
                <Button text="View All Savings" width="100%" bcg="#fff" icon={card4} ih="30px" color="#000"clickEvent={() => navigate('/savings')} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" />
                {/* <Card name="Total Client Registered" amount="500" amountText="Total PayIn" cicon={c4} bg="#70D4FF" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"/>
                <Card name="Total Client Registered" amount="500" amountText="Total Amount" cicon={c2} bg="#E86B35" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)"/>
                <Card name="Total Client Registered" amount="500" amountText="Total Deposit" cicon={c2} bg="#fff" bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" tc="#000"/>
                  <Card name="Total Client Registered" amount="500" amountText="Total Agents" cicon={c1} bxs="0px 4px 11px -1px rgba(0, 0, 0, 0.25)" /> */}
             </div>
            {/* <div className='chart1'>
                    <Flow/>
                <Progress/>
            </div> */}
            <div className='chart2'>
                {/* <Bar/>
                <Pie/> */}
            </div>
      </Content>
      <Trasactions data={isAdmin ? sortTranx : []} />
   </Layout>
  )
}

const QuickAction = styled.div`
    width: 100%;
    display: flex;
    



`

const Adcard = styled.div`
    /* padding: 20px; */
    position: relative;
    max-width: 400px;
    /* background: url(${cardtemp}); */

    @media screen and (max-width:40em) {
      display: none;
    }
           

    img{
        position: relative;
        border-radius: 10px;
        height: 200px;

        
    }
    .carddetails{
        display: inline-flex;
        position: absolute;
        gap: 20px;
        left: 0;
        right: 0;
        color: #fff;
        padding: 10px;
        /* width: 100%; */
        /* justify-content: space-between; */
        flex-direction: column;
        
        .cardinner{
            /* width: 100%; */
        padding:15px;
        height: 100%;
        display: inline-flex;
        flex-direction: column;
        gap: 30px;

        }
        .f1{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline-end: 5px;
            img{
                height: 20px;
            }

            .f1p{
                
                p{
                    font-size: 12px;
                }
            }
        }
        .f2{
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-size: 25px;
            }
        }
        .f3{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline-end: 5px;
            img{
                height: 40px;
            }
            p{
                color: #4BF0A5;
            }
        }

        @media screen and (max-width: 40em) {
        
            /* color: #000; */
    }

    }
    @media screen and (max-width: 40em) {
        /* img{
            width: 290px;
            padding-inline-end:20px;
        } */
    }
  
`

export default Dashboard