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
import {createLocation,getLocation} from '../../services/Dashboard'




function Payouts() {
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
const [search,setSearch] = useState('')
const [removal,setremoval] = useState(false)


const isForadmin = JSON.parse(localStorage.getItem("role")) === "ADMIN"




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


const [createlocation,setcreatelocation] = useState({
    name:'',
    state:'',
    lga:'',
    
   


 
})
console.log("🚀 ~ file: Payouts.jsx:89 ~ Payouts ~ createlocation", createlocation)

const { data:getlocation,isLoading,refetch } = useQuery({
  
    queryKey:['getLocation'],
    queryFn: () => getLocation(),
    // onError: (err) => {
    //   setMessage(err?.response?.data?.detail || err.message);
    //   setOpen(true);
    // },
    // enabled: Boolean(page,pageSize),
    onSuccess:(d) => {
        console.log(d)
    }
    
  });
console.log("🚀 ~ file: Payouts.jsx:108 ~ Payouts ~ getlocation", getlocation)

  

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
    
}
const handleCreateAgent = (e) => {
    e.preventDefault();
    setShowModal(false)
    // e.target.parentElement.close()
    
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
      setcreatelocation((prev) => {
          return {...prev, [name]:value}
       })
      
}

const handleSelection = option => {
    setSelectedOption(option);
    setfilterby(option?.value)
    setcreatelocation((prev) => {
            let {state} = prev
            return {
                ...prev,
                state:option?.value
            }
        } )

    

  };
  const handleSelection2 = option => {
    setSelectedOption(option);
    // setfilterby2(option?.value)

    setcreatelocation((prev) => {
        const {lga} = prev
        return {
            ...prev,
            lga:option?.value
        }
    } )

  };

 

  const { mutate, isLoading:agentCreationloading,data:agentCreated,isError } = useMutation({
    mutationFn: createLocation,

    onError: (err) => {
     console.log(err)
  
    
    },
    onSuccess:(data) =>{

        setShowModal(false)
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
    }
  });

  const handleCreateLocation = (e) => {
    e.preventDefault()
    mutate(createlocation)
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
                        <p>NAME</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>STATE</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>LGA</p>
                        <img src={sorting}/>
                    </span>
                </td>
               
             
                {/* ))} */}
            </thead>
    )
}

function TableData () {
    return (
        getlocation?.content?.filter(val => {
            if(!search?.length) return val
            else if(Object.values(val).some(value => value?.toString()?.toLowerCase()?.includes(search))){
                return val
            }
        })?.map((d,index) => (
            <tr key={d.id} onClick={modalclient}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.state}</td>
                <td>{d.lga}</td>
                
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
    <h3>{isForadmin? 'Locations' : 'Payouts'}</h3>
    
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
           text="Add New Location"
           width="40%"
           bcg="#0A221C"
           color="#fff"
           clickEvent={modalBtn}
           /> 


            {showModal &&
                        (<Modal show={showModal} closeModal={() => setShowModal(false)} headText="Create Location"  formval={(e) => e.preventDefault()}> 
                              {/* <G2C> */}
                                <Input type="text" text="name" name="name" change={handleOnChange} />
                                <div>
                                <p className='state'>State</p>
                                <br/>
                                <Selector isSearch={true} data={state} selected={handleSelection} />
                            </div>
                            <div>
                                <p className='text'>Local Government Area</p>
                                <br/>
                                <Selector isSearch={true} data={localgovt} selected={handleSelection2}/>
                            </div>
                            <Button 
                            text={agentCreationloading ? "loading...":"SUBMIT"}
                            width="40%"
                            bcg="#0A221C"
                            color="#fff"
                            clickEvent={handleCreateLocation}
                            /> 
                          
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
    /* overflow: hidden; */
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
export default Payouts