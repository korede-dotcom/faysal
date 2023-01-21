import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

function Switch({sdata,name,checked,data,handleChecked}) {

  return (
    <SwitchCont>
     <input type="checkbox" id="switch" name={name} onChange={handleChecked} />
     <label htmlFor="switch">fff</label>
    </SwitchCont>
  )
}


const SwitchCont = styled.div`
  display: inline-flex;
  align-items: center;

  input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 35px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
    display: inline-block;
    
}

label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 10px;
	height: 10px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: rgba(45, 202, 114, 1);
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 130px;
}


`

export default Switch