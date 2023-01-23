import React from 'react'
import styled from 'styled-components';

function Row({children,jc,width,padding}) {
  return (
    <Flex style={{justifyContent:`${jc}`,width:`${width}`,padding:`${padding}`}}>
        {children}
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    /* width: 100%; */
    /* overflow: hidden; */

    @media screen and (max-width:40em ) {
        padding: 10px;
        /* overflow: hidden; */
    }
`

export default Row