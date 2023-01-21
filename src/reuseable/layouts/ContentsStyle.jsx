import React from 'react'
import styled from "styled-components"

function ContentsStyle({children}) {
  return (
    <ContentStyle>{children}</ContentStyle>
  )
}

const ContentStyle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
height: 100%;
width: 100%;
overflow-y: scroll;
background-color:#e6e6e6;
::-webkit-scrollbar{
    display: none;
}


`




export default ContentsStyle