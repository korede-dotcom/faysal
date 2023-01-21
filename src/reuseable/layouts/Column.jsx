
import React from 'react'
import styled from 'styled-components';

function Column({children}) {
  return (
    <FlexColumn>
        {children}
    </FlexColumn>
  )
}

const FlexColumn = styled.div`
    /* display: flex;
    height: 100Vh;
    width: 100vw;
    overflow: hidden;
 */

 display: flex;
 flex-direction: column;
 gap: 20px;
 /* padding: 20px; */
 height: 100%;
 width: 100%;
 overflow-y: scroll;
 background-color:#e6e6e6;
 ::-webkit-scrollbar{
     display: none;
 }
 `

 export default Column