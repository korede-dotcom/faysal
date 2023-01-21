import React from 'react'
import styled from 'styled-components'
import card6 from "../assets/card6.svg"
import WalletButton from './WalletButton'
import {useState} from 'react'
import Modal from './modal/Modal'
import SimpleSelect from './SimpleSelect'
import Input from './Input'
import Button from './Button'

function FundAgentCard() {

  const [showModal,setModal] = useState(false)
  const data = [{name:"Individual","value":"1"},{name:"(All)","value":"2"}]
   const FundagentWallet = (e) => {
        setModal(true)
   } 
   const  modalVal = (e) => {
    e.preventDefault();
    
    console.log(e)
}
   

  return (
    <CardContainer>
        <div className='content'>
            <div className='contenttext'>
                <p>Total Onboarded Agent</p>
                <h1>4444</h1>
                <small>last month</small>
            </div>
            <div className='content2'>
                <img src={card6} />
                <WalletButton bcg="rgba(27, 89, 248, 1)" color="#fff" text="Fund Agent's Wallet" width="100%" clickEvent={FundagentWallet}/>
            </div>
            {showModal &&  
              <Modal show={showModal} closeModal={() => setModal(false)} headText="Fund Agent Wallet" formval={modalVal}>
                <div className='modalgrid'>
                    <SimpleSelect name="selected" data={data && data} text="Payment Method" change={(e) => console.log(e.target)} />
                    <div className='grid'>
                    <Input type="text" placeholder="text" text="Amount" name="amount"/>
                    <Input type="text" placeholder="text" text="Narration" name="Narration"/>
                    </div>
                    <Input type="file" text="Bulk Upload"/>
                    <Button type="submit" text="Submit" bcg="#1B59F8" color="#fff" width="100%" align="center" />
                </div>
              </Modal>
               }
        </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    padding-block: 10px;
    background-color: rgba(232, 238, 254, 1);
    padding: 0.9em;
    display: flex;
    /* flex-direction: column; */
    gap: 13px;
    border-radius: 15px;
    color: rgba(27, 89, 248, 1);
    .content{
      display: flex;
      width: 100%;
      justify-content: space-between;

      /* flex-direction: column; */
      gap: 13px;
      font-weight: 100;

      .contenttext{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .content2{
        
        img{
           float: right;
           height: 70%;
           margin-bottom: 10px;
           
        }
      }

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

export default FundAgentCard