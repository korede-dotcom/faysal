import React from 'react'
import styled from 'styled-components'
import Col from '../layouts/Col'
import Raider from './Radial'

function Radialcomp() {
  return (
    <Raidercontainer>
        <Raider/>
    </Raidercontainer>
  )
}

const Raidercontainer = styled.div`
    padding: 20px;
    background: #fff;
    border-radius: 10px;

    
`

export default Radialcomp