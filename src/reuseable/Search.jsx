import React from 'react'
import search from '../assets/tms/Search.svg'
import styled from 'styled-components'

function Search({placeholder,type,change,width,border,bdr,inputWidth,inputBcg}) {
  return (
    <Searchbar style={{width:`${width}`,border:`${border}`,borderRadius:`${bdr}`}}>
        <img src={search}/>
        <input type={type} placeholder={placeholder} onChange={change} style={{width:`${inputWidth}`,background:`${inputBcg}`}}/>
    </Searchbar>
  )
}


const Searchbar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    /* justify-content: space-between; */
   
    
    > input{
        /* padding: 0.1rem; */
        border: .1px solid #999999;
        border-radius: 20px;
        width: 100%;
        padding: 8px;
        outline: none;
        padding-left: 35px;
        font-size: 16px;
        @media screen and (max-width:40em) {
                     padding-inline-start: 25px;
            }
    }
    > input::placeholder{
        text-align: center;
        padding-left: 20px;
        @media screen and (max-width:40em) {
            padding-left: 0px;
            }
      
    }
    > img{
        position: absolute;
        padding: 8px;
    }

`



export default Search