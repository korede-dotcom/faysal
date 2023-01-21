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




function Aquirers() {
  const [first, setfirst] = useState("")
const [isActive, setisActive] = useState(true)
const [b2isActive, b2setisActive] = useState(false)
const [showModal, setShowModal] = useState(false)
const [createAgent,setCreateAgent] = useState(false)
const [createAgentM,setCreateAgentM] = useState(false)

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
    setShowModal(false)
    
}
const handleCreateAgent = (e) => {
    e.preventDefault();
    setShowModal(false)
    e.target.parentElement.close()
    
}

function TableHead () {
    return (
        <thead>
                {/* {keys.map(d => ( */}
                <td> 
                    <span>
                        <p>ACQUIRER NAME</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>ACQUIRER ID</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>MERCHANT ID</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>EMAIL ADDRESS</p>
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
                        <p>CBN CODE</p>
                        <img src={sorting}/>
                    </span>
                </td>
                <td>
                    <span>
                        <p>ENABLE ALL TRANSACTION TYPES</p>
                        <img src={sorting}/>
                    </span>
                </td>
                {/* ))} */}
            </thead>
    )
}

function TableData () {
    return (
        data?.map((d,index) => (
            <tr key={d.id}>
                <td>{d["1"]}</td>
                <td>{d["2"]}</td>
                <td>{d["3"]}</td>
                <td>{d["4"]}</td>
                <td>{d["4"]}</td>
                <td>{d["5"]}</td>    
            <Switch  name={d.name} handleChecked={(e)=> handleChecked(e,index)}/>
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
    <h3>Processors</h3>
    
    <Row jc="space-between" width="100%">
    <Search 
            width="50%" 
            bdr="20px"
            border=".1px solid #000" 
            change={(e)=>console.log(e.target.value)}
            placeholder="Search Processor"
            />
    
       <Button 
           icon={plus}
           text="Add New Processor"
           width="40%"
           bcg="#0A221C"
           color="#1B59F8"
           clickEvent={modalBtn}
           /> 

        {showModal &&
        (<Modal closeModal={() => setShowModal(false)} headText="Add New Processor" formval={handleCreateAgentManager}>
             <G2C>
            <Input type="text" textStyle="bold" text="Agent Full Name"/>
            <Input type="text" textStyle="bold" text="Phone Number (*Must be Attach to Bvn)"/>
            <Input type="text" textStyle="bold" text="BusinessName"/>
            <Input type="text" textStyle="bold" text="Business Address"/>
            <SimpleSelect text="Local Government Area *"/>
            <SimpleSelect text="State"/>
            <Input type="text" text="Government Issued ID (BVN, NIN) *"/>
            </G2C>
            <Button 
            text="SUBMIT"
            width="100%"
            color="#fff"
            bcg="#0A221C"
            display="inline-flex"
            />
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
export default Aquirers