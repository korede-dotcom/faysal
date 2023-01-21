import React from 'react'
import styled from 'styled-components'
import tranx1 from "../../assets/tms/tranx1.svg"
import tranx2 from "../../assets/tms/tranx2.svg"
import tranx3 from "../../assets/tms/tranx3.svg"
import Row from "../../reuseable/layouts/Row"
import card3 from '../../assets/card3.svg'
import trnx from '../../assets/trnx.svg'


function Trasactions({data}) {
  return (
    <SideTransaction>
        <div className='trnxheading'>
          <h4>Recent Trasactions</h4>
        </div>
        {data && data.map(d => {
            return  <Cont>
            <img src={trnx}/>
            <div>
              <p>Agent Bola Animashaun</p>
              <small>{d.time}</small>
            </div>
        </Cont>
        })}
       
    </SideTransaction>
  )
}

const SideTransaction = styled.div`
    height: 100vh;
    overflow: scroll;
    background-color: #fff;
    width: 20%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-left: .1px solid #000;
    /* box-shadow: 1px 0px 1px #d6d6d8; */
    @media screen and (max-width:40em){
      display: none;
    }
    img{
      height: 40px;
    }
  
    .trnxheading h4{
      border-bottom: 1px solid #000;
      color: #0A221C;
      padding-block: 7%;
      
    }
      
    
    
`

const Cont = styled.div`
    display: flex;
    gap: 20px;
    font-size: 13px;
    font-weight: 100;
    /* justify-content: center; */

    img{
      scale:.6;
    }
    small{
      color: #0A221C;
    }

   
`

export default Trasactions