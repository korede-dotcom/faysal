import React from 'react'
import styled from 'styled-components';

function Layout({children}) {
  return (
    <Flex>
        {children}
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;
    height: 100Vh;
    width: 100vw;
    /* overflow: hidden; */
`

export default Layout