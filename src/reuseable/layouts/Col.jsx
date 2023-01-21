import React from 'react'
import styled from 'styled-components';

function Col({children}) {
  return (
    <Flex>
        {children}
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    /* overflow: hidden; */
`

export default Col