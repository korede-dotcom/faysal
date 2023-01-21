import React from 'react'
import styled from 'styled-components'

function SmallCard({name,amount,icon}) {
  return (

    <CardContainer>
        <div className='text'>
      <small>{name}</small>
      <h2>{amount}</h2>
      <img src={icon}/>
        </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    padding-block: 10px;
    background-color: #fff;
    padding: 0.9em;
    border-radius: 8px;
    /* .text{ */

    img{
        /* height: 50px; */
    }
    .text{
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px; 
        font-weight: 100;
        background-color: #fff;
    }

    /* } */
`

export default SmallCard