import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
function SimpleSelect({name,data,change,text}) {
    // const [optionsData,setoptionsData] = useState(data)
    const [search, setSearch] = useState('')
    const [value, setValue] = useState('')
    useEffect(()=>{
        const selectCont = document.body.querySelector("#autoform");
        selectCont.querySelector("datalist").classList.add("showOptions")
    },[])
    const handleChange = (e) => {
     
        const selectCont = document.body.querySelector("#autoform");
        selectCont.querySelector("datalist").classList.add("showOptions")
    }
    const keyup = (e) => {
        if(!e.target.value){
            e.target.value = value
        }
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    const optClick = (e) => {
        setValue(e.target.innerText)
        e.target.parentElement.classList.remove("showOptions")
    }
  return (
    <SimpleSelects>
        {text && <h5>{text}</h5>}         
            <div id="autoform" >
            <input onClick={handleChange} onChange={keyup} list='options' name='options' value={!value ? search : value} />
                {/* <div className='data'> */}
                    <datalist id="options">
                    {data?.filter(d => {
                        if(!search.length) return d
                        else if(Object.values(d).some(value => value.toString().toLowerCase().includes(search))){
                            return d
                        }}).map(d => (<option value={d.value} onClick={(e) => setValue(e.target.innerText)}><p>{d.name}</p></option>))
                    }
                    {/* {data?.map(d => <option value={d.value}><p>{d.name}</p></option>)} */}
                    </datalist>
                {/* </div> */}
                
            </div>
     
    </SimpleSelects>
  )
}

const SimpleSelects  = styled.div`
width: 100% !important;

.options{
    width: 100%;
}
.data{
    width: 50%;
}

.showOptions{
    display: flex;
    flex-direction: column;
    width: 100%;


}


datalist option {
  font-size: 0.8em;
  padding: 0.3em 1em;
  background-color: #ddd;
  cursor: pointer;
  padding: 10px;
  margin: 2px 0;
}

/* active option styling */
datalist option:hover, datalist option:focus {
  color: #fff;
  background-color: #1B59F8;
  
  outline: 0 none;
}
h5{
    padding-block: 10px;
}

 
        input{
            width: 100%;
            padding: 14px;
            outline: none;
            margin: 0;

        }
        
        /* padding: 14px; */
        outline: none;
    

`

export default SimpleSelect