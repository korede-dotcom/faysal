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
import {state_lcd} from '../../component/state'
import Selector from '../../reuseable/Selector'
import check from '../../assets/check.png'
import uploder from '../../assets/uploader.svg'
import cac from '../../assets/uploadimg.svg'
import card from '../../assets/card1.svg'
import cam from '../../assets/cam.svg'
import Webcam from 'react-webcam';
import {getAdminCustomersList,createCustomer,AdminUserList,getAgentCustomersList,getCurrentUser} from '../../services/Dashboard'
import {useQuery,useMutation} from '@tanstack/react-query'

function Aquirers() {
  const [first, setfirst] = useState("")
const [isActive, setisActive] = useState(true)
const [b2isActive, b2setisActive] = useState(false)
const [showModal, setShowModal] = useState(false)
const [showModal2, setShowModal2] = useState(false)
const [createAgent,setCreateAgent] = useState(false)
const [createAgentM,setCreateAgentM] = useState(false)
const [filterby, setfilterby] = useState('');
const [selectedOption, setSelectedOption] = useState(null);
const webcamRef = React.useRef(null);
const [screenshot, setScreenshot] = useState(null);
const [showImg,setshowImg] = useState(false)
const [showclient,setShowClient] = useState(false)
const [showInput,setshowInput] = useState(false)
const [removal,setremoval] = useState(false)
const [name,setname] = useState("")
const [email,setemail] = useState("")
const [username,setusername] = useState("")
const [password,setpassword] = useState("")
const [date_of_birth,setdateofbirth] = useState("")
const [genders,setgender] = useState("")
const [phoneNumber,setphoneNumber] = useState("")
const [identification_type,setidentification_type] = useState("")
const [bvn,setbvn] = useState("")
const [address,setaddress] = useState("")
const [role,setrole] = useState("")
const [agent_id,setagent_id] = useState("")
const [search,setSearch] = useState("")


const capture = React.useCallback(
  () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     const imageExt = imageSrc.split(';')[0].match(/jpeg|png|gif/)[0];
// const imageData = imageSrc.split(',')[1];
// const imageBlob = new Blob([imageData], { type: `image/${imageExt}` });
// const imageFile = new File([imageBlob], 'image.jpg', { type: `image/${imageExt}` });
//     setScreenshot(imageSrc);
const imageSrc = webcamRef.current.getScreenshot();
      setScreenshot(imageSrc);
  },
  [webcamRef]
);

const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10);
const page = 1
const pageSize = 1

const check = JSON.parse(localStorage.getItem("role"))
const cUser = JSON.parse(localStorage.getItem("userId"))

const isAdmin = check === "AGENT"


const { data:currentuser,isLoading:loadinguser} = useQuery({

    queryKey:['getCurrentUser'],
    queryFn: () => getCurrentUser(cUser),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(agentId),
  });
console.log("🚀 ~ file: Customers.jsx:92 ~ Aquirers ~ currentuser", currentuser)




useEffect(()=> {

    if(screenshot){
        setremoval(true)
    }
    if(!showModal) {
        setremoval(false)
    }
},[screenshot])

const { mutate, isLoading:is_loading,isError} = useMutation({
    mutationFn: createCustomer,
    onSuccess: (data) => {
     
    // localStorage.setItem(JSON.stringify(data.tokem))
    // Navigate("/dashboard");
    },
    onError: (data) =>{
        console.log(data)
    //    seterr(data.response.data.message)
       setTimeout(()=>{
        seterr("")
    },2000)
    // return 
    }
});


const [superAgent,setSuperAgent] = useState({
        // "name": "kareem Fadekun",
        // "userName":"thriftCustomer3",
        //  "password":"1234567",
        // "date_of_birth":"2022-10-10",
        //  "gender": "Male",
        //  "phoneNumber":"07098763245",
        //  "identification_type":"Driver's License",
        //  "bvn":"45676fghdnbhjrk",
        //  "address": "West Street Lagos",
        //  "email":"custom3@babs.com",
        //  "customerRole": [
        //      {
      
        //          "name":"CUSTOMER"
        //      }
        //  ],
        //  "agent": {
        //        "id":1
        //  },
        //   "registered_date":"2022-09-09"
})


const gender = [{value:'Male',label:'Male'},{value:'Female',label:'Female'}]

const modalBtn = () => {
    setShowModal(true)
    
}
const modalclient = () => {
    setShowModal2(true)
    
}

const handleCreateAgentManager = (e) => {
    e.preventDefault();
    // e.target.parentElement.close()
    // setShowModal(false)
    
        mutate({
            name: name,
            userName:username,
             password:password,
            date_of_birth:date_of_birth,
             gender: genders,
             phoneNumber:phoneNumber,
             identification_type:identification_type,
             bvn:bvn,
             address: address,
             email:email,
             customerRole: [
                 {
          
                     name:"CUSTOMER"
                 }
             ],
            agent: {
                   id:currentuser.id
             },
              registered_date:formattedDate
        })
        
    
}


const handleCreateAgent = (e) => {
    e.preventDefault();
    setShowModal(false)
    e.target.parentElement.close()
    
}

const allStates = Object.keys(state_lcd[0])
const state = allStates.map(data => {
    return{
        value:data,label:data
    }
}) 

const lcd = state_lcd.map(element => element[filterby]);
// const lcd = state_lcd.filter(element => element.filterby);

const localgovt = lcd[0]?.map(data => {
    return {
        value:data,label:data
    }
})



const handleOnChangeFile1 = (e) => {
    console.log(e.target.files)
    setSuperAgent((prev) => {
        let {cac} = prev
       return {
           ...prev,
           cac:e.target.files
       }
    })
}

const handleOnChange = (e) => {
    const { value, name } = e.target
   
      console.log(name,value)
    //   setCreateAgentManager((prev) => {
    //       return {...prev, [name]:value}
    //    })
      
}

const handleSelection = option => {
    setSelectedOption(option);
    setfilterby(option?.value)
    setgender(option?.value)
        // setCreateAgentManager((prev) => {
        //     let {state} = prev
        //     return {
        //         ...prev,
        //         state:option?.value
        //     }
        // } )

    

  };
  const handleSelection2 = option => {
    setSelectedOption(option);
    // setfilterby2(option?.value)

    // setCreateAgentManager((prev) => {
    //     const {localgovt} = prev
    //     return {
    //         ...prev,
    //         localgovt:option?.value
    //     }
    // } )

  };

  const handleSelection3 = option => {
    setSelectedOption(option);
    // setfilterby2(option?.value)
    setidentification_type(option.label)

  };

  const { data:customerlist,isLoading,refetch } = useQuery({
  
    queryKey:['getAdminCustomersList'],
    queryFn: () => getAdminCustomersList(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(page,pageSize),
    onSuccess:(d) => {
    }
  });
  const { data:AgentCustomersList } = useQuery({
  
    queryKey:['getAgentCustomersList'],
    queryFn: () => getAgentCustomersList(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(page,pageSize),
    onSuccess:(d) => {
        console.log(d)
    }
  });
  console.log("🚀 ~ file: Customers.jsx:262 ~ Aquirers ~ getAgentCustomersList", getAgentCustomersList)

  const setAdmin = AgentCustomersList?.content?.map(data => {
    return {
        value:data?.id,label:data?.name
      }
  })



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
                        <p>CUSTOMER NAME</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>ADDRESS</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>EMAIL</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>PHONENUMBER</p>
                        <img src={sorting}/>
                    </span>
                </td>
               
             
                {/* ))} */}
            </thead>
    )
}

const sorts = customerlist?.content?.map(d => {
    return {
        name:d.name,
        phoneNumber:d.phoneNumber,
        email:d.email,
        userName:d.userName,
        status:d.status,
        gender:d.gender,
        address:d.address,
        identification_type:d.identification_type,
        date_of_birth:d.date_of_birth,
        agentName:d.agent.name,
        agentPhoneNumber:d.agent.phoneNumber
    }
})

function TableData () {
    return (
        sorts?.filter(val => {
            if(!search?.length) return val
            else if(Object.values(val).some(value => value?.toString()?.toLowerCase()?.includes(search))){
                return val
            }
        })?.map((d,index) => (
            <tr key={d?.id} onClick={modalclient}>
                <td>{index + 1}</td>
                <td>{d?.name}</td>
                <td>{d?.address}</td>
                <td>{d?.email}</td>
                <td>{d?.phoneNumber}</td>
                {/* <td>{d?.gender}</td> */}
                {/* <td>{d?.date_of_birth}</td> */}
                {/* <td>{d?.agent?.username}</td>
                <td>{d?.agent?.phoneNumber}</td> */}
            </tr>
        ))
        
    )
}
  return (
   <MainLayout>
          <Table 
    search={false} 
    dataComponent={<TableData />}
    dataHead={<TableHead/>} 
>
        <div>
    <div className='tableContainer'>
<div className='tdetails'>
    <h3>Customers</h3>
    
    <Row jc="space-between" width="100%">
    <Search 
            width="50%" 
            bdr="20px"
            border=".1px solid #000" 
            change={(e)=>console.log(e.target.value)}
            placeholder="Search"
            />
    
       <Button 
           icon={plus}
           text="Add New Customer"
           width="40%"
           bcg="#0A221C"
           color="#fff"
           clickEvent={modalBtn}
           /> 



                {showModal &&
                        (<Modal show={isActive} closeModal={() => setShowModal(false)} headText="Add Customer"  formval={(e) => e.preventDefault()}>

                            {screenshot && (
                                <img src={screenshot} alt="Captured" style={{width: '150px', height: '150px',borderRadius:'50%'}}/>
                            )}

                {showImg &&
                        <>
                        {!removal &&
                        <Webcam 
                            audio={false}
                            ref={webcamRef}
                            height={350}
                            width={350}
                            
                            
                        />
                     }
                      {!removal &&
                            <Button 
                             text="capture"
                             width="50%"
                             color="#fff"
                             bcg="#0A221C"
                             display="inline-flex"
                             clickEvent={capture}/>
                      }
                        </>
                        
                        }

                        
                        {!showImg &&
                        <div className='forupload'>

                            <img src={cam}
                            onClick={() => setshowImg(true)} className="upimg" />
                        </div>
                        }   

                            <G2C>
              
                  
                    <Input type="text" textStyle="bold" text="Customer Full Name" name="name" change={(e) => setname(e.target.value)}/>
                            <Input type="text" textStyle="bold" text="userame" name="userame" change={(e) => setusername(e.target.value)}/>
                            <Input type="password" textStyle="bold" text="password" name="password" change={(e) => setpassword(e.target.value)}/>
                            <Input type="text" textStyle="bold" text="Email" name="email"  change={(e) => setemail(e.target.value)}/>
                            <Input type="text" textStyle="bold" text="Phone Number" name="phoneNumber" change={(e) => setphoneNumber(e.target.value)}/>
                            {/* <Input type="text" textStyle="bold" text="Phone Number" name="phonenumber" change={handleOnChange}/> */}
                            {/* <Input type="text" textStyle="bold" text="ID" name="identification_type" change={(e) => setidentification_type(e.target.value)}/> */}
                            <div>
                                <p className='text'>ID</p>
                                <br/>
                                <Selector isSearch={true} data={[{value:"1",label:"Drivers License"},{value:"2",label:"voters card"}]} selected={handleSelection3} />
                            </div>
                            <Input type="text" textStyle="bold" text="Address" name="address" change={(e) => setaddress(e.target.value)}/>
                            <Input type="date" textStyle="bold" text="Dare of Birth" name="date_of_birth" change={(e) => setdateofbirth(e.target.value)}/>
                            <Input type="number" textStyle="bold" text="BVN" name="bvn" change={(e) => setbvn(e.target.value)}/>
                            <div>
                                <p className='text'>Gender</p>
                                <br/>
                                <Selector isSearch={true} data={gender} selected={handleSelection} />
                            </div>
                            {/* <div>
                                <p className='text'>Agent</p>
                                <br/>
                                <Selector isSearch={true} data={setAdmin} selected={handleSelection2} />
                            </div> */}
                          
                        
                            </G2C>
                            <Button 
                            text="SUBMIT"
                            width="50%"
                            color="#fff"
                            bcg="#0A221C"
                            display="inline-flex"
                            clickEvent={handleCreateAgentManager}
                            />
                        </Modal>) 
                        }

                {showModal2 &&
                        (<Modal show={showModal2} closeModal={() => setShowModal2(false)} headText="Customer Deposit"  formval={(e) => e.preventDefault()}> 
                              {/* <G2C> */}
                              <Client>
                                <div className='clientside1'>
                                <img src={card} height="100px"/> 
                                <div className='details'>
                                <p><small>Name</small>:  Korede</p>
                                <p><small>PhonNumber</small> : 0808888888</p>
                                <p><small>Email</small> : korede@live.com</p>
                                <p><small>Address</small> : 11 lagos island</p>
                                

                                </div>

                                </div>
                                <div className='clientside2'>

                                <div className='amount'>
                                    <p>Total Savings</p>
                                    <h1>#4000</h1>
                                </div>
                               {showInput && <Input type="text" textStyle="bold" name="region" change={handleOnChange} placeholder="Enter Amount"/> }

                                <Button 
                                text={showInput ? "SUBMIT" : "DEPOSIT"}
                                width="50%"
                                color="#fff"
                                bcg="#0A221C"
                                display="inline-flex"
                                clickEvent={() => setshowInput(true)}
                            />
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
  
  @media screen and (max-width:40em ) {
        padding: 10px;
        margin-top: 20px;
    }
    

`
const Client = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 30px;
    /* overflow: hidden; */
    height: 80%;
    overflow-y: scroll;

    @media screen and (max-width:40em ) {
        margin-top: 20px;
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
        .details{
            display: flex;
            flex-direction: column;
            gap: 20px;

            p{
                border-bottom: 1px solid #000;
                padding-block: 10px;
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
    }

    .amount{
        display: flex;
        flex-direction: column;
        gap: 10px;

        p{
                border-bottom: 1px solid #000;
                padding-block: 5px;
            }
    }
   
`
const G2C = styled.div`
width: 100%;
     display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

        @media screen and (max-width:40em ) {
        /* width: 45%; */
        grid-template-columns: 1fr;
        height: 300px;
        overflow-x: hidden;
            ::-webkit-scrollbar{
                display: none;
            }
      }

     
        img{
            cursor: pointer;
        }
        .forupload{
            /* display: inline-flex; */
            height: 10px;
            
            @media screen and (max-width:40em ) {
                img{
                    width: 50% !important;

                }
        
        }
            
 
        }
        .checkcheck{
            position: relative;
            .checkicon{
                position:absolute ;
                right: -1px;
                top: -9px;
            }
        }
`
export default Aquirers