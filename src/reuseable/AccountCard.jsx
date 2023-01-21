import React from 'react'
import styled from 'styled-components'
import Row from './layouts/Row'
import Col from "./layouts/Col"
import eye from "../assets/eye.svg"
import WalletButton from './WalletButton'
import Button from './Button'
import plus from "../assets/plus.svg"
import { useState,useEffect } from 'react'
import Modal from './modal/Modal'
import Input from './Input'
import SimpleSelect from './SimpleSelect'

function AccountCard({bcg,name,icon,amount,iconHeight,btnText,btnBcg,btnColor}) {

    const [showBalance,setShowBalance] = useState(false)
    const [showModal,setModal] = useState(false)
    const [fundAgentModal,setFundAgentModal] = useState(false)
    


    const addCard = () => {
        alert("1")
    }
    const fundWallet = (e) => {

        setModal(true)
    }
    const fundAgentWallet = (e) => {
        // alert("2")
        
        setModal(true)
        // const modal = document.body.querySelector("#modal")
        // modal.showModal()

      
    }
    const  modalVal = (e) => {
        e.preventDefault();
        
        console.log(e)
    }

    const closeModal = (e) =>{
        e.target.parentElement.parentElement.close()
           console.log()
       }
    
    const selectValue = (e) => {
        console.log(e.target)
    }

       const data = [{name:"one","value":"1"},{name:"two","value":"2"}]

  return (
    <CardContainer style={{background:bcg}}>
        <Col>
       
         
          
           <Row>
            <p className='light'>Main Account</p>
            <p className='light'>Available Balance</p>
           </Row>
           <Row>
                <div>
                    <h3>My Card Details</h3>
                    <p>1233********887</p>
                </div>
            <Row>
                { showBalance ? <h1>{amount}</h1> : <h1>XXXXXX</h1> }
                
                <img src={eye} style={{height:`${iconHeight}`}} onClick={()=> setShowBalance(!showBalance) } className="eye"/>
            </Row>
           </Row>
           <Row>
               <Button text={btnText} icon={plus} bcg={btnBcg} color={btnColor} clickEvent={addCard}/>
              <WalletButton text="Fund Wallet" bcg="#0A221C" color="#fff" clickEvent={fundWallet}/>

              {showModal &&  
              <Modal show={showModal} closeModal={() => setModal(false)} headText="Fund Wallet" formval={modalVal}>
                <div className='modalgrid'>
                    <SimpleSelect name="selected" data={data && data} text="Payment Method" change={selectValue} />
                    <div className='grid'>
                    <Input type="text" placeholder="text" text="Amount" name="amount"/>
                    <Input type="text" placeholder="text" text="Narration" name="Narration"/>
                    </div>
                    <Button type="submit" text="Submit" bcg="#0A221C" color="#fff" width="100%" align="center" />
                </div>
              </Modal>
               }
              
             
           </Row>
        
        </Col>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    padding-block: 10px;
    background-color: #fff;
    padding: 0.9em;
    display: flex;
    /* flex-direction: column; */
    gap: 13px;
    border-radius: 15px;
    position: relative;
    .eye{
        cursor: pointer;
    }
    .light{
        font-weight: 200;
        font-size: 15px;
        color: rgba(144, 144, 144, 1);
    }
    .content{
      display: flex;
      /* flex-direction: column; */
      gap: 13px;
      font-weight: 100;

    }
    .modalgrid{
       /* padding: 10px; */
       display: flex;
       flex-direction: column;
       gap: 20px;
        .grid{
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
            gap: 10px;
        }
    }
   
`

export default AccountCard