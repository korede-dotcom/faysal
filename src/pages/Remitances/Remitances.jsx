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
import card from "../../assets/card2.svg"
import Switch from '../../reuseable/Switch'
import Selector from '../../reuseable/Selector'
import {useMutation,useQuery} from "@tanstack/react-query"
import {AgentRemitance,getAgentRemitance,getAdminRemitance,getCurrentUser} from "../../services/Dashboard"



function Deposits() {
  const [first, setfirst] = useState("")
const [isActive, setisActive] = useState(true)
const [b2isActive, b2setisActive] = useState(false)
const [showModal, setShowModal] = useState(false)
const [createAgent,setCreateAgent] = useState(false)
const [createAgentM,setCreateAgentM] = useState(false)
const [showInput,setshowInput] = useState(false)
const [amount,setamount] = useState(null)
const [paymentReferenceNumber,setpaymentReferenceNumber] = useState(null)
const [agentId,setagentId] = useState(null)

const check = JSON.parse(localStorage.getItem("role"))
const cUser = JSON.parse(localStorage.getItem("userId"))
const isAdmin = check === "ADMIN"

const b1Click = (e) =>{
    setisActive(true)
    b2setisActive(false)
    setCreateAgent(false)
    setCreateAgentM(true)
}
const b2Click = (e) =>{
    b2setisActive(true)
    setisActive(false)
    setCreateAgentM(false)
    setCreateAgent(true)

}

const modalBtn = () => {
    setShowModal(true)
    
}

const handleCreateAgentManager = (e) => {
    e.preventDefault();
    e.target.parentElement.close()
    // setShowModal(false)
    
}
const handleCreateAgent = (e) => {
    e.preventDefault();
    // setShowModal(false)
    e.target.parentElement.close()
    
}


const handleOnChange = (e) => {
    const { value, name } = e.target
   
      console.log(name,value)
    //   setCreateAgentManager((prev) => {
    //       return {...prev, [name]:value}
    //    })
      
}



const dataObject = {};
data.forEach(item => {
  dataObject[item.name] = item;
});

const keys = Object.keys(dataObject);
console.log(keys)



const { mutate, isLoading:loadingCreateRemitance,data:remitanceCreated,isError } = useMutation({
    mutationFn: AgentRemitance,

    onError: (err) => {
     console.log(err)
  
    
    },
    onSuccess:(data) =>{
        // setinfo('category created')
        window.location.reload()
        // if(!data.response.data.status){
        //     setTimeout(() => {
        //         setinfo('unable to create category')
        //     }, 1000);
        //     setinfo('')
        // }
        // setTimeout(() => {
        //     setShowModal(false)
        //     setinfo('')
        // }, 2000);
        refetch()
    }
  });
// const keys = data.reduce((keys, item) => keys.concat(Object.keys(item)), []);
// console.log(keys)

const { data:agentremitancelist,isLoading:loadingagentremitancelist} = useQuery({
  
    queryKey:['getAgentRemitance'],
    queryFn: () => getAgentRemitance(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });
const { data:user,isLoading:loadingUser} = useQuery({
  
    queryKey:['getCurrentUser'],
    queryFn: () => getCurrentUser(cUser),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });

  console.log("🚀 ~ file: Remitances.jsx:146 ~ Deposits ~ data", user)

  const remitanceList = agentremitancelist?.content?.map(d => {
    return {
        id:d?.id,
        remittance_date:d?.remittance_date,
        amount:d?.amount,
        paymentReferenceNumber:d?.paymentReferenceNumber,
        agentName:d?.agent?.userName,
        phoneNumber:d?.agent?.phoneNumber,

    }
  })
  const { data:adminRemitance,isLoading:loadingadminRemitance } = useQuery({
  
    queryKey:['getAdminRemitance'],
    queryFn: () => getAdminRemitance(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });
  console.log("🚀 ~ file: Remitances.jsx:170 ~ Deposits ~ adminRemitance", adminRemitance)

  const agentremitanceList = agentremitancelist?.content?.map(d => {
      return {
          id:d?.id,
          remittance_date:d?.remittance_date,
          amount:d?.amount,
          paymentReferenceNumber:d?.paymentReferenceNumber,
          agentName:d?.agent?.userName,
          phoneNumber:d?.agent?.phoneNumber,
          
        }
    })
    console.log("🚀 ~ file: Remitances.jsx:173 ~ agentremitanceList ~ agentremitanceList", agentremitanceList)

  const adminremitanceList = adminRemitance?.content?.map(d => {
      return {
          id:d?.id,
          remittance_date:d?.remittance_date,
          amount:d?.amount,
          paymentReferenceNumber:d?.paymentReferenceNumber,
          agentName:d?.agent?.userName,
          phoneNumber:d?.agent?.phoneNumber,
          
        }
    })
    console.log("🚀 ~ file: Remitances.jsx:186 ~ adminremitanceList ~ adminremitanceList", adminremitanceList)

  const { mutate:createRemitance, isLoading:remitanceCreationloading,data:remitancedata } = useMutation({
    mutationFn: AgentRemitance,

    onError: (err) => {
     console.log(err)
  
    
    },
    onSuccess:(data) =>{
        window.location.reload()
        // setinfo('category created')
        setShowModal(false)
        // if(!data.response.data.status){
        //     setTimeout(() => {
        //         setinfo('unable to create category')
        //     }, 1000);
        //     setinfo('')
        // }
        // setTimeout(() => {
        //     setShowModal(false)
        //     setinfo('')
        // }, 2000);
    }
  });


const handleRemitance = (e) => {
    e.preventDefault()
    createRemitance({
        amount: amount,
        paymentReferenceNumber: paymentReferenceNumber,
            agent: {
                 "id":user?.id
            }
        })

}

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
                        <p>DEDPOSIT REFRENCE ID</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>AMOUNT</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>TIME </p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>AGENTNAME</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>PHONE</p>
                        <img src={sorting}/>
                    </span>
                </td>
               
                {/* ))} */}
            </thead>
    )
}

function TableData ({data}) {
    
    return (
        data?.map((d,index) => (
            <tr key={d.id}>
                <td>{index + 1}</td>
                <td>{d?.paymentReferenceNumber}</td>
                <td>{d?.amount}</td>
                <td>{d?.remittance_date}</td>
                <td>{d?.agentName}</td>
                <td>{d?.phoneNumber}</td>
             
            </tr>
        ))
    )
}


  return (
   <MainLayout>
          <Table 
    search={false} 
    // data={data}  
    // isCheck={true} 
    dataComponent={<TableData data={isAdmin ? adminremitanceList : agentremitanceList}/>}  
    dataHead={<TableHead/>}
>
<div>
    <div className='tableContainer'>
<div className='tdetails'>
    <h3>Remitances</h3>
    
    <Row jc="space-between" width="100%">
        <Search 
            width="50%" 
            bdr="20px"
            border=".1px solid #000" 
            change={(e)=>console.log(e.target.value)}
            placeholder="Search Remitance"
            />
        {!isAdmin &&
       <Button 
           icon={plus}
           text="REMIT"
           width="40%"
           bcg="#0A221C"
           color="#fff"
           clickEvent={modalBtn}
           /> 
         }

        {showModal &&
        (<Modal show={showModal} closeModal={() => setShowModal(false)} headText="Deposit Collected Funds" formval={handleCreateAgentManager}>
          
           <Client>
                                <div className='clientside1'>
                                    <div className='details'>
                                        <p>Total Amount Collected Today</p>
                                        <h2># 10,200,022</h2>
                                    </div>
                                </div>
                                <div className='clientside2'>
                                <div className='amount'>
                                    <p>Deposit Today</p>
                                
                                </div>
                                
                               {showInput && <Input type="number" textStyle="bold" text="amount" name="amount" change={(e) => setamount(e.target.value)} placeholder="Enter Amount"/> }
                               {showInput && <Input type="text" textStyle="bold" name="paymentReferenceNumber" text="Refrence No" change={(e) => setpaymentReferenceNumber(e.target.value)} placeholder="Refrence Number" /> }
                               {showInput && <p onClick={handleRemitance} className="btn">{showInput ? "SUBMIT" : "DEPOSIT"}</p>
 }
                                {!showInput &&  <p onClick={() => setshowInput(!showInput)} className="btn">{ "DEPOSIT"}</p>}
                                {/* <p onClick={() => setshowInput(!showInput)} className="btn">{showInput ? "SUBMIT" : "DEPOSIT"}</p> */}

                              
                                </div>
                    </Client>
                                
        </Modal>) 
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
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
`


const Client = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 30px;
    @media screen and (max-width:40em){
            width:100%;
            place-content: center;
            /* grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
             */
            flex-direction: column;
            padding: 0;
            > input{
                width: 100%;
            }
        }

        


    .clientside1{
        border-right: 1px solid #000;
        /* padding-inline-end: 30px; */
        display: inline-flex;
        justify-content: start;
        align-items: center;
        width: 50%;
        flex-direction: column;
        gap: 10px;
        display: none;
        .details{
            display: flex;
            flex-direction: column;
            gap: 20px;
            display: none;
        }
        @media screen and (max-width:40em){
            border-right: none;
            width: 100%;
            .details h2{
                font-size: 13px;
            }
           
        }
    }
    .clientside2{
        display: inline-flex;
        justify-content: end;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 50%;
        /* border-left: 1px solid #000; */

        @media screen and (max-width:40em){
            display: flex;
            flex-direction: column;
            width: 100%;
            /* padding-block: 20px; */
            
        }
        .btn{
           background-color: #2d3748;
           display: inline-flex;
           justify-content: center;
           color: #fff;
           border-radius: 5px;
           padding: 10px;
        }
        
    }

    .amount{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
   
`
export default Deposits