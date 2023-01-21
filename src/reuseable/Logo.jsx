import React from 'react'
import styled from 'styled-components'
import logoo from '../assets/logoo.svg'

function Logo() {
  return (
    <Logoo>
        <img src={logoo}/>
        <p>Faysal</p>
    </Logoo>
  )
}

const Logoo = styled.div`
    display: flex;
    align-items: center;
    max-width: 100px;
    gap: 10px;
    max-width: 200px;

    p{
        font-weight: 500;
        font-size: 30px;
        color: #0A221C;
    }
    img{
        max-height: 100px;
        max-width: 70px;
    }


`

export default Logo