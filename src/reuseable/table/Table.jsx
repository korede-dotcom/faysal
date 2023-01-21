import React from 'react'
import styled from 'styled-components'
import sorting from "../../assets/sorting.svg"
import Button from '../Button'
import Search from '../Search'
import plus from "../../assets/plus.svg"
import prev from "../../assets/prev.svg"
import inc from "../../assets/inc.svg"
import Row from '../layouts/Row'
import Col from '../layouts/Col'
import {useState} from 'react'
import Modal from '../modal/Modal'
import Input from '../Input'
import Switch from '../Switch'
function Table({thead,data,search,btntext1,btntext2,btnOptions,dataTwo,children,isCheck,dataComponent,dataHead}) {

const [isActive, setisActive] = useState(true)
const [b2isActive, b2setisActive] = useState(false)
const [showModal, setShowModal] = useState(false)
const [dt,setdt] = useState(data)

const [check,setCheck] = useState([])

const handleChecked = ()=> {
   
    setCheck(!check)
}

const b1Click = (e) =>{
    setisActive(true)
    b2setisActive(false)
}
const b2Click = (e) =>{
    b2setisActive(true)
    setisActive(false)
}

const modalBtn = () => {
    setShowModal(true)
    
}


  return (
    <TableContainer>
         {children}
        <table>
            {dataHead}
            <tbody>
                {dataComponent}
                {/* {isCheck && 
                data?.forEach((d,index) => (
                <tr key={d.id}>
                    <td>{d["1"]}</td>
                    <td>{d["2"]}</td>
                    <td>{d["3"]}</td>
                    <td>{d["4"]}</td>
                    <td>{d["4"]}</td>
                    <td>{d["5"]}</td>
                    <Switch checked={check} name={d.name} handleChecked={(e)=> handleChecked(e,index)}/>
                </tr>
                ))} */}
               
            </tbody>
        </table>
            <div className='tfoot'>
                <p>Showing 1 - 100</p>
                <div className='pag'>
                    <div className='prev pagbtn'>
                        <img src={prev}/>
                        <h4>Prev</h4>
                    </div>
                    <div className='next pagbtn'>
                        <img src={inc}/>
                        <h4>Next</h4>
                    </div>
                </div>
                
            </div >
    </TableContainer>
  )
}

const TableContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    /* padding: 0.3em; */
    @media screen and (max-width:40em) {
               font-size: 10px !important;
            }
    .tableContainer{
        overflow-x: scroll;
        padding: 1em;
        border-bottom: 1px solid #ddd;
    }
    .tdetails{
        display: flex;
        /* justify-content: space-between; */
        gap: 35%;
        /* border-bottom: 1px solid #ddd; */
        align-items: center;

        @media screen and (max-width:40em) {
                gap: 0;
                flex-direction: column;
            }

        h3{
            width: 30%;
        }
        .atag{
            width: 70%;
            text-align: end;
        }

    }

   
    table{
        text-align: center;
        width: inherit;
        border-spacing: 0px;
        width: 100%;


        
        thead{
            
            td{
                background-color: rgba(250, 250, 250, 1);
                padding: 9.7px;
                @media screen and (max-width:40em) {
                    padding: 9.7px;
            }
                
                span{
                    cursor: pointer;
                    gap: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                }
                p{
                    font-size: 13px;
                    text-align: center;
                    @media screen and (max-width:40em) {
                     font-size: 9px !important;
                     }
                }
            }
        }
        tbody{
           min-height: 200px;
           
          
            tr:nth-of-type(even){
                background-color: rgba(250, 250, 250, 1);
            }
           >tr  > td{
                padding-block: 15px;
                font-size: 14px;
                cursor: pointer;
                @media screen and (max-width:40em) {
               font-size: 10px !important;
            }
               
            }

   
    input[type=checkbox]{
        /* height: 0;
        width: 0;
        visibility: hidden; */
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

    /* label:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 90px;
        transition: 0.3s;
    } */

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


            
        }
    }
    .tfoot {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .pag{
            display: flex;
            gap: 30px;
            align-items: center;
            padding-block-end: 10px;
        }
        .pagbtn{
            display: flex;
            align-items: center;
            gap: 20px;
            border: 1.tdetails3px solid rgb(45, 55, 72);
            padding: 5px 10px;
            border-radius: 10px;
            cursor: pointer;

           
        }
    }
`

export default Table

