import React from 'react'
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
import {createSavings,getAdminSavings,agentSavingsList,getAdminCustomersList,getAgentCustomersList} from "../../services/Dashboard"

function Savings() {
    const [selectedOption, setSelectedOption] = useState(null);
  const [first, setfirst] = useState("")
const [isActive, setisActive] = useState(true)
const [b2isActive, b2setisActive] = useState(false)
const [showModal, setShowModal] = useState(false)
const [showModal2, setShowModal2] = useState(false)
const [createAgent,setCreateAgent] = useState(false)
const [createAgentM,setCreateAgentM] = useState(false)
const [showImg,setshowImg] = useState(false)
const [showclient,setShowClient] = useState(false)
const [showInput,setshowInput] = useState(false)
const [removal,setremoval] = useState(false)
const [savingsId, setsavingsId] = useState(false)
const [balance, setbalance] = useState(false)
const [tenure, settenure] = useState(false)
const [customer, setcustomer] = useState(false)
const [custom, setcustom] = useState(false)
const [cdate, setdate] = useState(false)
const [enddate, setEnddate] = useState(false)
const [search, setSearch] = useState('')

console.log(cdate)

const check = JSON.parse(localStorage.getItem("role"))

const isAdmin = check === "ADMIN"

// {
//     "savingsId":"SVN3438954",
//     "balance": 2300000,
    
//     "tenure":"30",
    
//     "customer": {
    
//         "id": 2
//     }
    
//     }

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
    //   setCreateAgentManager((prev) => {
    //       return {...prev, [name]:value}
    //    })
      
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

  const { data:agentsavinglist,isLoading:loadingagentsavings } = useQuery({
  
    queryKey:['agentSavingsList'],
    queryFn: () => agentSavingsList(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });

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
                        <p>ID</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td> 
                    <span>
                        <p>CODE</p>
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
                <td>
                    <span>
                        <p>START DATE</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>END DATE</p>
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
        // phoneNumber:d.cu
    }
})

function TableData () {
    return (
       sorted?.filter(val => {
        if(!search?.length) return val
        else if(Object.values(val).some(value => value?.toString()?.toLowerCase()?.includes(search))){
            return val
        }
    })?.map((d,index) => (
            <tr key={d.id} onClick={() => setShowModal2(true)}>
                <td>{index + 1}</td>
                <td>{d?.id}</td>
                <td>{d?.savingsId}</td>
                <td>{d?.balance}</td>
                <td>{d?.tenure}</td>
                <td>{d?.startDate}</td>
                <td>{d?.endDate}</td>
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
        // setinfo('category created')

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

  const handleSavings = (e) => {
    e.preventDefault()
    mutate(
        {
            savingsId:savingsId,
            balance: balance,
            
            tenure:cdate,
            endDate:enddate,
            
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
    dataComponent={<TableData data={isAdmin ? savinglist : agentsavinglist || []}/>}
    dataHead={<TableHead/>}
>
        <div>
    <div className='tableContainer'>
<div className='tdetails'>
    <h3>Savings</h3>
    
    <Row jc="space-between" width="100%">
    <Search 
            width="50%" 
            bdr="20px"
            border=".1px solid #000" 
            change={(e)=>setSearch(e.target.value)}
            placeholder="Search Aquirers"
            />

      
       <Button 
           icon={plus}
           text="Create savings"
           width="40%"
           bcg="#0A221C"
           color="#fff"
           clickEvent={modalBtn}
           /> 
      
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
            <Input type="text" textStyle="bold" text="savings ID" name="savingsId" change={(e) => setsavingsId(e.target.value)} />
            {/* <div>
                                <p className='text'>savings ID</p>
                                <br/>
                                <Selector isSearch={true} data={ agentSavingsList} selected={handleSelection3}/>
            </div> */}
            <Input type="number" textStyle="bold" text="Balance" name="balance"  change={(e) => setbalance(e.target.value)} />
            {/* <Input type="text" textStyle="bold" text="savings type"/> */}
            <Input type="date" textStyle="bold" text="Start date"  change={(e) => setdate(e.target.value)} />
            <Input type="date" textStyle="bold" text="Due date"  change={(e) => setEnddate(e.target.value)} />
            <div>
                                <p className='text'>Customer</p>
                                <br/>
                                <Selector isSearch={true} data={isAdmin ? sortCustomer :sortCustomerAgent} selected={handleSelection2}/>
            </div>
            {/* isAdmin? sortCustomer : sortCustomerAgent || */}
           
            </G2C>
            <Button 
            text="SUBMIT"
            width="50%"
            bcg="#0A221C"
            color="#fff"
            display="inline-flex"
            clickEvent={handleSavings}
            />
           
        </Modal>) 
        }


                    {showModal2 &&
                        (<Modal show={isActive} closeModal={() => setShowModal2(false)} headText="Customer Deposit"  formval={(e) => e.preventDefault()}> 
                              {/* <G2C> */}
                              <Client>
                                <div className='clientside1'>
                                <div className='details'>
                                <h4 style={{borderBottom:'1 solid #000'}}>Savings Details</h4>
                                <p>Name:  Saving 101</p>
                                <p>Due Date : 10-12-2022</p>
                                
                                

                                </div>

                                </div>
                                <div className='clientside2'>
                          
                                <img src={card} height="100px"/> 
                                <div className='details'>
                                <p><small>Name</small>:  Korede</p>
                                <p><small>PhonNumber</small> : 0808888888</p>
                                <p><small>Email</small> : korede@live.com</p>
                                <p><small>Address</small> : 11 lagos island</p>
                                <p><small>Total Savings</small> : #4000 </p>
                                        
                                        {showInput && <Input type="text" textStyle="bold" name="region" change={handleOnChange} placeholder="Enter Amount"/> }
                                <p onClick={() => setshowInput(!showInput)} className="btn">{showInput ? "SUBMIT" : "DEPOSIT"}</p>
                                
                        

                                </div>

                                </div>
                                

                              </Client>
                          
                              {/* </G2C> */}
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
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
`

const Client = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 30px;

    .clientside1{
       
        /* padding-inline-end: 30px; */
        display: inline-flex;
        justify-content: start;
        align-items: center;
        width: 50%;
        flex-direction: column;
        gap: 10px;
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
   
`
export default Savings