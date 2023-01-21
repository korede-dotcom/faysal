import React from 'react'
import styled from 'styled-components'


function WalletButton({text,bcg,color,width,clickEvent}) {
  return (
    <Button style={{background:bcg,color:color,width:`${width}`}} onClick={clickEvent}>{text}</Button>
  )
}

const Button = styled.button`
    width: 35%;
    padding:10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

`

export default WalletButton