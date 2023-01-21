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
import { useMutation,useQuery } from "@tanstack/react-query";
import {getLocation,createUser,AdminUserList} from '../../services/Dashboard'

function Agent() {
  const [first, setfirst] = useState("")
const [isActive, setisActive] = useState(true)
const [search, setSearch] = useState("")
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


function generateRandom() {
    var result           = "AGT";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const userId = generateRandom()
 

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

console.log(screenshot)
useEffect(()=> {

    if(screenshot){
        setremoval(true)
    }
    if(!showModal) {
        setremoval(false)
    }
},[screenshot])

const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10);


const [superAgent,setSuperAgent] = useState(

    {

    
        userName:"",
        password:"",
        name:"",
        email:"",
        gender:"",
        address:"",
        phoneNumber:"",
        user_id:userId,
        agentLocation:{
            id:{
                
            }
        }
        ,
        registered_date: formattedDate,
    }
)
console.log(superAgent)


const modalBtn = () => {
    setShowModal(true)
    
}
const modalclient = () => {
    setShowModal2(true)
    
}

const handleCreateAgentManager = (e) => {
    e.preventDefault();
    // e.target.parentElement.close()
    setShowModal(false)
    mutate(superAgent)
    
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
   
    //   console.log(name,value)
      setSuperAgent((prev) => {
          return {...prev, [name]:value}
       })
      
}


const _agentLocation = [{value:'1',label:'Obalende Area'}]
const handleSelection = option => {
    setSelectedOption(option);
    setfilterby(option?.value)
    setSuperAgent((prev) => {
           
            return {
                ...prev,
                agentLocation:{
                   id:option?.value
                }
            }
        } )

    

  };
  const handleSelection2 = option => {
    setSelectedOption(option);
    // setfilterby2(option?.value)

    setSuperAgent((prev) => {
        const {gender} = prev
        return {
            ...prev,
            gender:option?.value
        }
    } )

  };

  const handleSelection3 = option => {
    setSelectedOption(option);
    // setfilterby2(option?.value)

    setSuperAgent((prev) => {
        // const {role} = prev
       
        return {
            ...prev,
            role:[
                {
                    name:option?.value
                }
            ],
        }
    } )

  };

  const { data:getlocation,isLoading,refetch } = useQuery({
  
    queryKey:['getLocation'],
    queryFn: () => getLocation(),
    // refetchInterval:100,
    
    onSuccess:(d) => {
        console.log(d)
    }
    
  });
  refetch()

  
  const setlocation = getlocation?.content?.map(data => {
      return {
          value:data?.id,label:data?.name
        }
    })

    const { mutate, isLoading:is_loading,isError} = useMutation({
        mutationFn: createUser,
    });

    const { data:adminUserList,isLoading:loadingadminUserList  } = useQuery({
  
        queryKey:['AdminUserList'],
        queryFn: () => AdminUserList(),
   
        
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
                        <p>AGENT ID</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>PHONE NUMBER</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>LGA</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>LOCATION</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>STATUS</p>
                        <img src={sorting}/>
                    </span>
                </td>
             
                {/* ))} */}
            </thead>
    )
}

function TableData () {
    const sortAgents = adminUserList?.filter(d => d?.role[0]?.name === "AGENT")?.map(d => {
        return {
            agentid:d?.user_id,
            name:d?.name,
            phoneNumber:d?.phoneNumber,
            lga:d?.agentLocation?.lga,
            location:d?.agentLocation?.name,
            status:d?.status
    
        }
    })
    return (
      sortAgents?.filter(val => {
            if(!search?.length) return val
            else if(Object.values(val).some(value => value?.toString()?.toLowerCase()?.includes(search))){
                return val
            }
        })?.map((d,index) => (
            <tr key={d.id} onClick={modalclient}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.phoneNumber}</td>
                <td>{d.lga}</td>
                <td>{d.location}</td>
                <td>{d.status}</td>
            {/* <Switch  name={d.name} handleChecked={(e)=> handleChecked(e,index)}/> */}
            </tr>
        ))
    )
}

  return (
   <MainLayout>
          <Table 
    search={false} 
    dataComponent={<TableData/>}
    dataHead={<TableHead/>} 
>
        <div>
    <div className='tableContainer'>
<div className='tdetails'>
    <h3>Agents</h3>
    
    <Row jc="space-between" width="100%">
    <Search 
            width="50%" 
            bdr="20px"
            border=".1px solid #000" 
            change={(e)=>setSearch(e.target.value)}
            placeholder="Search Terminal"
            />
    
       <Button 
           icon={plus}
           text="Add Agent"
           width="40%"
           bcg="#0A221C"
           color="#fff"
           clickEvent={modalBtn}
           /> 



                {showModal &&
                        (<Modal show={isActive} closeModal={() => setShowModal(false)} headText="Add Agent"  formval={(e) => e.preventDefault()}>

                            {screenshot && (
                                <img src={screenshot} alt="Captured" style={{width: '150px', height: '150px',borderRadius:'50%'}}/>
                            )}
{/* 
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
                             bcg="rgb(45, 55, 72)"
                             display="inline-flex"
                             clickEvent={capture}/>
                      }
                        </>
                        
                        }

                        
                        {!showImg &&
                        <div className='forupload'>

                            <img src={cam}
                            onClick={() => setshowImg(true)}/>
                        </div>
                        }    */}

                            <G2C>
                          
                            {/* <Input type="file" name="imageFile" placeholder="email" text="" required={true} textStyle="500" forSignup={true} change={handleOnChangeFile1} label='imageFile' style={{display:'none'}} value={superAgent?.imageFile } > */}
                        {/* <div className='checkcheck'> */}
                            {/* <img src={cac}/> */}
                            {/* {(superAgent?.cac != '') && <img src={check} height="15px" className='checkicon'/> } */}
                            {/* <img src={check} height="15px" className='checkicon'/> */}

                        {/* </div> */}

                    {/* </Input> */}
                  
                       
                            <Input type="text" textStyle="bold" text="Agent Name" name="name" change={handleOnChange}/>
                            <Input type="text" textStyle="bold" text="Agent username" name="userName" change={handleOnChange}/>
                            <Input type="password" textStyle="bold" text="Password" name="password" change={handleOnChange}/>
                            <Input type="text" textStyle="bold" text="Email" name="email"  change={handleOnChange}/>
                            {/* <Input type="text" textStyle="bold" text="Phone Number" name="phonenumber" change={handleOnChange}/> */}
                            <Input type="text" textStyle="bold" text="Address" name="address" change={handleOnChange}/>
                            <div>
                                <p className='text'>Agent Location</p>
                                <br/>
                                <Selector isSearch={true} data={setlocation} selected={handleSelection} />
                            </div>
                            <div>
                                <p className='text'>Gender</p>
                                <br/>
                                <Selector isSearch={true} data={[{value:'male',label:'male'},{value:'female',label:'female'}]} selected={handleSelection2} />
                            </div>
                            <Input type="number" textStyle="bold" text="phone Number" name="phoneNumber" change={handleOnChange}/>
                            <div>
                                <p className='text'>User Type</p>
                                <br/>
                                <Selector isSearch={true} data={ [{value:'Agent',label:'Agent'},{value:'Admin',label:'Admin'}]} selected={handleSelection3} />
                            </div>
                           
                            {/* <SimpleSelect text="State" name="state" change={teest} /> */}
                            {/* <SimpleSelect text="Local Government Area *" name="localgovt"/> */}
                            {/* <Input type="text" textStyle="bold" text="Region" name="region" change={handleOnChange}/>
                            <Input type="text" textStyle="bold" text="Daily Amount" name="region" change={handleOnChange}/> */}
                        
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
                        (<Modal show={isActive} closeModal={() => setShowModal2(false)} headText="Customer Deposit"  formval={(e) => e.preventDefault()}> 
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
  


`
const Client = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 30px;
    overflow: hidden;
    overflow-y: scroll;

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
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
     
        img{
            cursor: pointer;
        }
        .forupload{
            display: inline-flex;
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
export default Agent