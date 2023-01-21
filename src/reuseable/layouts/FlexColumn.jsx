import React from 'react'
import styled from 'styled-components';

function FlexColumn({children}) {
  return (
    <Flex>
        {children}
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 100%;
    border: 1px solid red;
    overflow-y: scroll;
    background-color:#e6e6e6;
    
    ::-webkit-scrollbar{
        display: none;
    }

`

export default FlexColumn