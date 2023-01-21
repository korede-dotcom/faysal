import React from 'react'
import styled from 'styled-components'


function Button({text,bcg,color,icon,clickEvent,width,align,display,ih,iw,bxs}) {
  return (
    <Buttons style={{background:bcg,color:color,width:width,display:`${display}`,boxShadow:`${bxs}`}} onClick={clickEvent}>
       {icon && <img src={icon} width={iw} height={ih}/>}
        <p style={{textAlign:`${align}`}}>{text}</p>
    </Buttons>
  )
}

const Buttons = styled.button`
    width: 30%;
    padding:10px;
    border-radius: 5px;
    border: none;
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;

    @media screen and (max-width:40em) {
              font-size: 10px;
              width: 100%;
              gap: 3px;
              scale: 0.9;
              display: inline-flex;
            }
    

`

export default Button