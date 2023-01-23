import React,{useState} from 'react'
import styled from 'styled-components';
import Layout from './layouts/Layout';
import Search from './Search';
import bell from "../assets/tms/bell.svg"
import timer from "../assets/tms/timer.svg"
import sidebar from "../assets/tms/sidebar.png"
import Navbar from './Navbar';
import logo from "../assets/logoo.svg"
import cancel from "../assets/cancel.svg"
// import avatar from "../assets/avatar.svg"
// import line from "../assets/line.svg"


function Header({text}) {
    // let location = "Dashboard"
    let name = "segun peters"
    let role = "super agent"
    const [show,setShow] = useState(false)

    const handleBurger = (e) => {
      const nav = document.querySelector(".nav")
      nav.classList.toggle('navactive')
      setShow(!show)
    }


  return (
    <Head>
        <p> Faysal / {window.location.pathname.toString().split('/')}</p>
        <img src={logo} className="headlogo"/>
        {window.location.pathname === '/dashboard' && 
        <Search placeholder="Search" inputWidth="90%" inputBcg="#E7E7E7" /> 
        } 
        <div className='user'>
            <img src={bell} className="usericons"/>
            <img src={timer} className="usericons" onClick={() => window.location.assign(window.location.pathname)}/>
            <img src={!show ? sidebar : cancel} className="usericons menu" onClick={handleBurger}/>
            {/* <img src={line} className="usericons"/> */}
            {/* <div className='userdetails'>
                <img src={avatar}/>
                <div className='usertext'>
                    <h5>{name}</h5>
                    <small>{role}</small>
                </div>
            </div> */}
        </div>
       
    </Head>
  )
}


const Head = styled.header`
    padding: 20px;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: 2px 1px 8px #cdcdcd; */
    /* box-shadow: 1px 0px 1px #d6d6d8; */
    border-bottom: 1px solid  #000 ;
    position: sticky;
    top: 20;
    background: #fff;
    /* height: 100%; */
    /* height: 30%; */
    /* z-index: 1; */

    @media screen and (max-width:40em){
        background: #fff;
        z-index: 1000;
        /* top:1% !important; */
        /* height: 30%;
        margin-top: 90px; */
        /* padding-top: 40%; */
        /* padding: 10px; */
        /* padding-bottom: 20px; */
        /* height: 20% !important;
        border: 1px solid red;
        display: inline-flex;
        align-items: flex-end; */
        top: 0;
    }

    .headlogo{
        height: 40px;
        display: none;
    }
    @media screen and (max-width:40em){
        height: 10%;
     p{
        display: none;
     }
     .headlogo{
        display: block;
     }

    }
    p {
        flex: 0.50;
        font-weight: 100;
        color: #d6d6d1;

        @media screen and (max-width:40em) {
               font-size: 10px !important;
               color: #000;
            }
    }
    h1{
        flex: 0.30;
    }
    > div:nth-of-type(1){
        flex: 0.20;
    }
    > .user{
        flex: 0.20;
        display: flex;
        align-items: center;
        gap: 20px;
        .usericons{
            height: 25px;
            display: none;
            @media screen and (max-width:40em) {
            display: initial;
            }

            .menu{
                @media screen and (max-width:40em) {
                  height: 15px !important;
                }

            }


        }
    }
    .userdetails{
        display: flex;
        gap: 10px;
        align-items: center;
        text-transform: capitalize;
        img{
            height: 35px;
        }
        .usertext{
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-weight: 200;

            small{
                font-size: 10px;
            }
            
        }
    }

`



export default Header