import React from 'react'
import styled from 'styled-components'
import Column from './layouts/Column'
import upload from '../assets/upload.svg'


function Input({text,textStyle,name,type,change,placeholder,style,required,value,readonly,isDisplay,forSignup,children,label}) {
  const [initialValue,setinitialValue] = React.useState(value || '')
  return (
    <InputCont>
        {text && <h5 style={{fontWeight:textStyle}}>{text}</h5> }
        {(type === 'file' )? 
          <div>
          <label htmlFor={label}className='uploadLabel'>
            {forSignup ? children : <img src={upload}/>}
          </label>
          <input type={type} name={name} onChange={change} placeholder={placeholder} style={{style}} id={label} required={required} />
          </div>
        : (isDisplay === true) ? <input readOnly={readonly} className={`${type === 'checkbox' ? 'check' : ''}`} type={type} name={name} onChange={change} placeholder={placeholder} style={{style}} value={value} /> :
        <input className={`${type === 'checkbox' ? 'check' : ''}`} type={type} name={name} onChange={change} placeholder={placeholder} style={{style}} value={value}/>
        }
       
        
    </InputCont>
  )
}

const InputCont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    

    h5{
      text-transform: capitalize;
    padding-block:6px;
    font-weight: 200;
    }
    .uploadLabel{
      /* background-color: #FAFAFA; */
      /* padding: 10px; */
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      cursor: pointer;

    }
    #upload{
      display: none;
    }

    input[type="file"]{
      display: none !important;
    }
    > input{
      font-size: 16px !important;

      @media screen and (max-width:80em) {
        /* width: 90%; */
      }
      @media screen and (max-width:40em ) {
        /* width: 45%; */
      }
      /* @media screen and (max-width: 30em), screen and (min-width: 60em) {
        width: 100%;
      }
       */
        padding: 14px;
        border: .6px solid rgba(135, 135, 135, 1);
        border-radius: 5px;
        outline: none;

        ::placeholder{
          font-size: 10.7px;
        }
    }

    .check{
      /* display: none; */
    }

`

export default Input