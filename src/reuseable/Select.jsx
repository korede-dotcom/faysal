import React from 'react'
import styled from 'styled-components'
import arrdown from '../assets/arrdown.svg'
import { useState } from 'react'

function Select({text,current,options,type,selectValue,clicked}) {

    const option = ["all","them","they","who dey"]
    const [show,setShow] = useState(false)
    function clicked () {
        setShow(!show)
    }

  return (
    <SelectForm>
        <div className='select' onClick={clicked}>
            <p>{text}: <span>{current}</span></p>
            <img src={arrdown}/>
        </div>
        {
            show && type === "timeline" && (
        <div className='options'>
        {
            option.map(opt => {
                return (
                        <p name={opt} onClick={selectValue}>{opt}</p>
                        )
                    })
                }
        </div>
            )
        }
        {
            show && type === "time" && (
        <div className='options'>
        {
            option.map(opt => {
                return (
                        <p name={opt} onClick={selectValue}>{opt}</p>
                        )
                    })
                }
        </div>
            )
        }
        {
            show && type === "line" && (
        <div className='options'>
        {
            option.map(opt => {
                return (
                        <p name={opt} onClick={selectValue}>{opt}</p>
                        )
                    })
                }
        </div>
            )
        }
    </SelectForm>
  )
}


const SelectForm = styled.div`

    .select{
        display: flex;
        background-color: #fff;
        padding: 0.5em 50px;
        gap: 20px;
        border-radius: 20px;
        align-items: center;
        border:1px solid #dcdcdc;
        font-weight: 200;
        font-size: 13px;
        width: 300px;
        cursor: pointer;
        justify-content: space-between;
        position: relative;
        span{
            font-weight: 400;
        }
    }

    .options{
        background: #fff ;
        padding: 0.7em 20px;
        border-radius: 20px;
        margin-top: 3px;
        z-index: 100;
        cursor: pointer;
        position: absolute;
        width: inherit;
        box-shadow: 1px 2px 3px #ddd;
        width: 300px;
        
        ::backdrop{
            background-color: #F2F7FF;
            opacity: .2;
        }
        
      
        p{
            padding:10px;
            border-radius: 10px;
            font-size: 12px;

        }
        p:hover{
            background-color: #F2F7FF;
            font-weight: bold;
        }
        
        p:active{
            background-color: #F2F7FF;
        }
    }

`

export default Select