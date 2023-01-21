import React from 'react'
import styled from 'styled-components'
import profit from "../assets/tms/profit.svg"
import loss from "../assets/tms/loss.svg"
import c1 from "../assets/c1.svg"
import {Colors} from "../../config/config"

function Card({name,icon,amount,gain,isText,icontext,count,location,locationtext,bg,cicon,bxs,tc,amountText}) {
  return (
    <CardContainer>
      <div className='cc' style={{backgroundColor:`${bg}`,boxShadow:`${bxs}`}} >

       {isText ? 
        
        <div className='formessages'>
              <img src={icon} height="100%" />
              <div>
              <small>{icontext}</small>
              <h1>{count}</h1>
              </div>
            </div>
          : (location === true) ?
          <>
            <div className='formessages'>
                 <img src={icon} height="100%" />
                 <div>
                 <h1>{icontext}</h1>
                 <small>{locationtext}</small>
                 </div>
               </div>
         
         </>
         :
          <>
      <div className='text'>
        <img src={cicon} className="textimg"/>
        {/* <small>{name}</small> */}
      <div className='amount'>
        <h5 style={{color:`${tc}`}}>{amountText}</h5>
        <div className='per'>
          {/* <small>{percentage}</small> */}
          <p style={{color:`${tc}`}}>{amount}</p>
          {/* <img src={gain == 'profit' ? profit : loss}/> */}
        </div>
      </div>
      {/* <small>up from last</small> */}
      </div>
          
          </>
         
          }
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`


  .cc{

    /* padding-block: 10px; */
    background-color: #0A221C;
    /* padding: 1.9em; */
    display: flex;
    /* flex-direction: column; */
    gap: 13px;
    border-radius: 10px;
    width: 100%;
    height: 120px;
  .formessages{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    div{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  
    @media screen and (min-width: 40em){
      width: 100%;
      /* display: grid;
      place-items: center; */
    }

    .amount{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      .per{
        display: inline-flex;
        gap: 10px;
        align-items: center;
        img{
          height: 10px;
        }
      }
    }
    :nth-of-type(odd){
      background-color: #0A221C;
      color: #fff;
    }
    .text{
      display: flex;
      /* flex-direction: column; */
      gap: 13px;
      font-weight: 100;
      width: 100%;

      .textimg{
        height: 50%;
        border-top-left-radius: 10px;
      }

      small{
        font-weight: 400;
      }

    }
  }
`

export default Card