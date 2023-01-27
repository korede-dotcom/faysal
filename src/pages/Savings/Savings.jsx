import React, { useEffect } from 'react'
import Layout from '../../reuseable/layouts/Layout'
import Navbar from '../../reuseable/Navbar'
import Table from '../../reuseable/table/Table'
import MainLayout from '../../reuseable/layouts/MainLayout'
import {data} from '../../component/Data'
import styled from 'styled-components'
import TableHead from '../../reuseable/table/TableHead'
import {useState} from 'react'  
import Button from '../../reuseable/Button'
import Search from '../../reuseable/Search'
import Row from '../../reuseable/layouts/Row'
import Col from '../../reuseable/layouts/Col'
import Modal from '../../reuseable/modal/Modal'
import Input from '../../reuseable/Input'
import SimpleSelect from '../../reuseable/SimpleSelect'
import plus from "../../assets/plus.svg"
import sorting from "../../assets/sorting.svg"
import Switch from '../../reuseable/Switch'
import card from '../../assets/card1.svg'
import Selector from '../../reuseable/Selector'
import { useMutation,useQuery } from '@tanstack/react-query'
import {createSavings,getAdminSavings,agentSavingsList,getAdminCustomersList,getAgentCustomersList,depositFunds, withdrawFunds} from "../../services/Dashboard"
import { useNavigate } from 'react-router-dom'

function Savings() {
    const [selectedOption, setSelectedOption] = useState(null);
const [isActive, setisActive] = useState(true)
const [b2isActive, b2setisActive] = useState(false)
const [showModal, setShowModal] = useState(false)
const [showModal2, setShowModal2] = useState(false)
const [showModal3, setShowModal3] = useState(false)
const [showInput,setshowInput] = useState(false)
const [savingsId, setsavingsId] = useState(false)
const [balance, setbalance] = useState(false)
const [tenure, settenure] = useState(false)
const [customer, setcustomer] = useState(false)
const [cdate, setdate] = useState(false)
const [search, setSearch] = useState('')
const [currentSavingns, setCurrentSavings] = useState('')
const [amount,setAmount] = useState('')
const [id,setId] = useState('')
const [Aamount,setAamount] = useState('')
const [err,seterr] = useState('')
const [forPostId,setforPostId] = useState(false)
const [forBalanceId,setforBalanceId] = useState(false)
const [isTwo, setIstwo] = useState(false)
const [Load, setLoad] = useState(false)


const check = JSON.parse(localStorage.getItem("role"))
console.log("🚀 ~ file: Savings.jsx:50 ~ Savings ~ check", check)

const isAdmin = check === "ADMIN"


const Navigate = useNavigate();

const options = [
  { value: 'korede', label: 'korede' },
  { value: 'niyi', label: 'Niyi' },
  { value: 'option3', label: 'Option 3' },
  // add more options here
];

const modalBtn = () => {
    setShowModal(true)
    
}
const modalclient = () => {
    setShowModal2(true)
    
}

const handleOnChange = (e) => {
    const { value, name } = e.target
   
      console.log(name,value)
 
      
}

const handleCreateAgentManager = (e) => {
    e.preventDefault();
    e.target.parentElement.close()
    setShowModal(false)
    
}
const handleCreateAgent = (e) => {
    e.preventDefault();
    setShowModal(false)
    e.target.parentElement.close()
    
}
const handleSelection2 = option => {
    setSelectedOption(option);

    // setfilterby2(option?.value)

    setcustomer(option?.value)


  };
const handleSelection3 = option => {
    setSelectedOption(option);
    // setfilterby2(option?.value)

    setsavingsId(option?.value)


  };

  const { data:savinglist,isLoading:loadingsavings,refetch } = useQuery({
  
    queryKey:['getAdminSavings'],
    queryFn: () => getAdminSavings(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });
  console.log("🚀 ~ file: Savings.jsx:133 ~ Savings ~ savinglist", savinglist)

  const { data:agentsavinglist,isLoading:loadingagentsavings } = useQuery({
  
    queryKey:['agentSavingsList'],
    queryFn: () => agentSavingsList(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });
  console.log("🚀 ~ file: Savings.jsx:143 ~ Savings ~ agentsavinglist", agentsavinglist)

  const { data:admincustomerlist,isLoading:loadingadmincustomerlist } = useQuery({
  
    queryKey:['getAdminCustomersList'],
    queryFn: () => getAdminCustomersList(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });
  const { data:agentcustomerlist,isLoading:loadingagentcustomerlist } = useQuery({
  
    queryKey:['getAgentCustomersList'],
    queryFn: () => getAgentCustomersList(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });



function TableHead () {
    return (
        <thead>
                {/* {keys.map(d => ( */}
                <td> 
                    <span>
                        <p>NO</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td> 
                    <span>
                        <p>ACCOUNTNAME</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>BALANCE</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>TENURE</p>
                        <img src={sorting}/>
                    </span>
                </td>
              
     
            
               
                {/* ))} */}
            </thead>
    )
}

const sorted = savinglist?.content?.map(d => {
    
    return{
        id:d.id,
        savingsId:d.savingsId,
        balance:d.balance,
        tenure:d.tenure,
        startDate:d.startDate,
        endDate:d.endDate,
        customerName:d?.customer.name
        
        // phoneNumber:d.cu
    }
})
console.log("🚀 ~ file: Savings.jsx:199 ~ sorted ~ savinglist", savinglist)
const sortedAgent = agentsavinglist?.content?.map(d => {
    
    return{
        id:d.id,
        savingsId:d.savingsId,
        balance:d.balance,
        tenure:d.tenure,
        startDate:d.startDate,
        endDate:d.endDate,
        status:d.status,
        customerName:d?.customer.name
        // phoneNumber:d.cu
    }
})

const handleAgentSavings = (id) => {
    const newSavings = sortedAgent.filter(d => d.id === id)
    console.log("🚀 ~ file: Savings.jsx:252 ~ handleAgentSavings ~ newSavings", newSavings)
    setCurrentSavings(newSavings)
    setId(id)
  
    setShowModal2(true)
   
}

function TableData ({data}) {
    return (
       data?.filter(val => {
        if(!search?.length) return val
        else if(Object.values(val).some(value => value?.toString()?.toLowerCase()?.includes(search))){
            return val
        }
    })?.map((d,index) => (
            <tr key={d.id} onClick={isAdmin ? null :() => handleAgentSavings(d.id)}>
                <td>{index + 1}</td>
                <td>{d?.customerName}</td>
                <td>{d?.balance}</td>
                <td>{d?.tenure}</td>
            
                {/* <td>{d?.customerName}</td>     */}
            </tr>
        ))
    )
}



const { mutate, isLoading:savingCreationloading,data:savingCreated,isError } = useMutation({
    mutationFn: createSavings,

    onError: (err) => {
     console.log(err)
    },
    onSuccess:(data) =>{
        setShowModal(false)
        window.location.reload()
        refetch()
    }
  });



  const { mutate:deposit, isLoading:depositloading, data:deposited } = useMutation({
      queryKey:["deposit"],
      mutationFn:  depositFunds,
    //   queryFn: () => depositFunds(forPostId,forBalanceId),
  
      onError: (err) => {
       console.log(err)
       
      },
      onSuccess:() =>{
          // setinfo('category created')
          window.location.reload()
      }
  });
  
  const depositFunc = (e) => {
    e.preventDefault()
    deposit({id:forPostId,amount:amount})
    
    
}


const { mutate:withdraw,isSuccess,onSettled } = useMutation({
    queryKey:["withdraw"],
    mutationFn:  withdrawFunds,
    // queryFn: () => depositFunds(id,amount),

    onError: (err) => {
     console.log(err)
  
    
    },
    onSuccess:() =>{
        // setinfo('category created')
        window.location.reload()
      
    },
    onSettled:() => {
        window.location.reload()
    }
  });

const withdrawFund = (e) => {
    e.preventDefault()
      withdraw({id:forPostId,amount:amount})
}



  const handleSavings = (e) => {
    e.preventDefault()
    mutate(
        {
            // savingsId:savingsId,
            // balance: balance,
            
            tenure:tenure,
            
            
            customer: {
            
                id:customer
            }
            
            }
    )
    

  }




  const sortCustomer = admincustomerlist?.content?.map(d => {
      
      return{
          value:d?.id,label:d?.name
        }
    }) 
    console.log("🚀 ~ file: Savings.jsx:292 ~ sortCustomer ~ sortCustomer", sortCustomer)

  const sortCustomerAgent = agentcustomerlist?.content?.map(d => {
    return{
        value:d?.id,label:d?.name
    }
  }) 

  const agentSavingsLists = agentsavinglist?.content?.map(d => {
    return{
        value:d?.savingsId,label:d?.savingsId
    }
  })






  return (
   <MainLayout>
    
          <Table 
    search={false} 
    // data={data}  
    // isCheck={true}   
    dataComponent={<TableData data={isAdmin ? sorted : sortedAgent}/>}
    dataHead={<TableHead/>}
>
<div >
    <div className='tableContainer'>
<div className='tdetails'>
    <h3>Savings</h3>
    
    <Row jc="space-between" width="100%">
    <Search 
            width="50%" 
            bdr="20px"
            border=".1px solid #000" 
            change={(e)=>setSearch(e.target.value)}
            placeholder="Search savings"
            />

      {isAdmin ? "" :
       <Button 
           icon={plus}
           text="Create savings"
           width="40%"
           bcg="#0A221C"
           color="#fff"
           clickEvent={modalBtn}
           /> 
    }
      
       {/* <Button 
           icon={plus}
           text="Filter by Dates"
           width="40%"
           bcg="#E8EEFE"
           color="#1B59F8"
           clickEvent={modalclient}
           />  */}

        {showModal &&
        (<Modal show={showModal} closeModal={() => setShowModal(false)} headText="Savings Details" formval={handleCreateAgentManager}>
             <G2C>
            {/* <Input type="text" textStyle="bold" text="savings ID" name="savingsId" change={(e) => setsavingsId(e.target.value)} /> */}
            {/* <div>
                                <p className='text'>savings ID</p>
                                <br/>
                                <Selector isSearch={true} data={ agentSavingsList} selected={handleSelection3}/>
            </div> */}
            {/* <Input type="number" textStyle="bold" text="Balance" name="balance"  change={(e) => setbalance(e.target.value)} /> */}
            <Input type="tenure" textStyle="bold" text="Tenure" name="tenure"  change={(e) => settenure(e.target.value)} />
            {/* <Input type="text" textStyle="bold" text="savings type"/> */}
            {/* <Input type="date" textStyle="bold" text="Start date"  change={(e) => setdate(e.target.value)} />
            <Input type="date" textStyle="bold" text="Due date"  change={(e) => setEnddate(e.target.value)} /> */}
            <div>
                                <p className='text'>Customer</p>
                                <br/>
                                <Selector isSearch={true} data={isAdmin ? sortCustomer :sortCustomerAgent} selected={handleSelection2}/>
            </div>
            {/* isAdmin? sortCustomer : sortCustomerAgent || */}
           
            </G2C>
            <Button 
            text={savingCreationloading ? "Loading..." : "SUBMIT" }
            width="50%"
            bcg="#0A221C"
            color="#fff"
            display="inline-flex"
            clickEvent={handleSavings}
            />
           
        </Modal>) 
        }


                    {showModal2 &&
                        (<Modal show={isActive} closeModal={() => setShowModal2(false)} headText="Savings Information"  formval={(e) => e.preventDefault()}> 
                              {/* <G2C> */}
                              <Client>
                                <div className='clientside1'>
                                <div className='details'>
                                {err && <p style={{color:"red"}}>{err}</p> }
                                <h4 style={{borderBottom:'1 solid #000'}}>Savings Details</h4>
                                <p>SAVINGS ID: {currentSavingns[0]?.savingsId} </p>
                                <p>CUSTOMER NAME: {currentSavingns[0]?.customerName} </p>
                                <p>BALANCE: {currentSavingns[0]?.balance} </p>
                                <p>TENURE : {currentSavingns[0]?.tenure}</p>
                                <p>DUE DATE : {currentSavingns[0]?.endDate}</p>
                                <p>STATUS : {currentSavingns[0]?.status}</p>
                                
                                 <Input type="text" textStyle="bold" name="region" change={(e) => setAmount(e.target.value)} placeholder="Enter Amount"/> 
                                <p style={{cursor:"pointer"}} onClick={() =>{
                                    seterr("please input Amount")
                                    setTimeout(() => {
                                        seterr(" ")
                                    },800)
                                    if(amount.length > 1){
                                        setShowModal2(false)
                                        setShowModal3(true)
                                        setforPostId(currentSavingns[0]?.id)
                                     

                                    }
                                    }} className="btn">{showInput ? "SUBMIT" : "DEPOSIT"}</p>
                                    
                                    <Button 
                                        text={ "WITHDRAW" }
                                        width="100%"
                                        bcg="green"
                                        color="#fff"
                                        display="inline-flex"
                                        clickEvent={ () => {
                                            if(currentSavingns[0]?.status === "completed"){
                                                seterr("please input Amount")
                                                setTimeout(() => {
                                                    seterr(" ")
                                                },800)
                                                if(amount.length > 1){
                                                    setIstwo(true)
                                                    setShowModal2(false)
                                                    setShowModal3(true)
                                                    setforPostId(currentSavingns[0]?.id)
                                                }

                                            } 
                                        }   
                                        }
                                        // clickEvent={currentSavingns[0]?.status === "completed" ? withdrawFund : ""}
                                        disabled={currentSavingns[0]?.status === "completed" }
                                        opactiy={currentSavingns[0]?.status === "completed" ? "1":"0.4"}
                                        />

                                    {/* { currentSavingns[0]?.status === "completed" &&
                                <p style={{cursor:"pointer"}} onClick={() =>{
                                    seterr("please input Amount")
                                    setTimeout(() => {
                                        seterr(" ")
                                    },800)
                                    if(amount.length > 1){
                                        setShowModal2(false)
                                        setShowModal3(true)
                                        setIstwo(true)
                                        setforPostId(currentSavingns[0]?.id)

                                    }
                                    }} className="btn">{withdrawFund ? "SUBMIT" : "DEPOSIT"}</p>
                                } */}

                                </div>

                                </div>
                                <div className='clientside2'>
                          
                                {/* <img src={card} height="100px"/>  */}
                                <div className='details'>
   
                                </div>

                                </div>
                                

                              </Client>
                          
                              {/* </G2C> */}
                         </Modal>)
                }
                       {showModal3 &&
                        (<Modal show={isActive} closeModal={() => setShowModal3(false)} headText="Savings Information"  formval={(e) => e.preventDefault()}> 
                        {<p>Do you want to Proceed with the {isTwo ? "Withdraw ?" :"Deposit ?"}</p>}
                        <div className='btnflex'>
                                  <Button 
                                    text="Yes"
                                    width="50%"
                                    bcg="#0A221C"
                                    color="#fff"
                                    display="inline-flex"
                                    clickEvent={isTwo ? withdrawFund : depositFunc}
                                    />
                                

                                  <Button 
                                    text="No"
                                    width="50%"
                                    bcg="red"
                                    color="#fff"
                                    display="inline-flex"
                                    clickEvent={()=> window.location.reload()}
                                    />
                             
                        </div>
                            </Modal>
                        )
                }


    </Row>
</div>


    </div>
        </div>
        </Table>
   </MainLayout>
  )
}
  
const TableContext = styled.div`
  
    

`
const G2C = styled.div`
width: 100%;
     display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));

        @media screen and (max-width:40em ) {
        /* width: 45%; */
        grid-template-columns: 1fr;
        height: 300px;
        overflow-x: hidden;
            ::-webkit-scrollbar{
                display: none;
            }
      }
      
`

const Client = styled.div`
    /* display: flex; */
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 30px;

  

    .clientside1{
       
        /* padding-inline-end: 30px; */
        /* display: inline-flex; */
        justify-content: start;
        align-items: center;
        /* width: 50%; */
        flex-direction: column;
        gap: 10px;
        
        .btn{
            background-color: #2d3748;
           display: inline-flex;
           justify-content: center;
           color: #fff;
           border-radius: 5px;
           padding-block: 10PX;
        }
        .details{
            display: flex;
            flex-direction: column;
            gap: 20px;

            

        }
        
    }
    .clientside2{
        border-left: 1px solid #000;
        display: inline-flex;
        justify-content: end;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 50%;
        /* border-left: 1px solid #000; */
        .details{
            display: flex;
            flex-direction: column;
            gap: 10px;
            .btn{
           background-color: #2d3748;
           display: inline-flex;
           justify-content: center;
           color: #fff;
           border-radius: 5px;
        }

            p{
                /* border-bottom: 1px solid #000; */
                padding-block: 10px;
            }
        }
    }

    .amount{
        display: flex;
        flex-direction: column;
        gap: 10px;

        p{
                border-bottom: 1px solid #000;
                padding-block: 10px;
            }
    }
    .btnflex{
        display: flex;
        gap: 10px;
    }
   
`
export default Savings