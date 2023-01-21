import React from 'react'
import styled from 'styled-components';
import Layout from './layouts/Layout';
import Search from './Search';
import bell from "../assets/tms/bell.svg"
import timer from "../assets/tms/timer.svg"
import sidebar from "../assets/tms/sidebar.svg"
import Navbar from './Navbar';
// import avatar from "../assets/avatar.svg"
// import line from "../assets/line.svg"


function Header({text}) {
    // let location = "Dashboard"
    let name = "segun peters"
    let role = "super agent"

    const handleBurger = (e) => {
      const nav = document.querySelector(".nav")
      nav.classList.toggle('navactive')
    }


  return (
    <Head>
        <p> Faysal / {window.location.pathname.toString().split('/')}</p>
        {window.location.pathname === '/dashboard' && 
        <Search placeholder="Search" inputWidth="90%" inputBcg="#E7E7E7" /> 
        } 
        <div className='user'>
            <img src={bell} className="usericons"/>
            <img src={timer} className="usericons" onClick={() => window.location.assign(window.location.pathname)}/>
            <img src={sidebar} className="usericons" onClick={handleBurger}/>
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
    top: 0;
    background: #fff;
    /* z-index: 1; */
    @media screen and (max-width:40em){
     width: 100vw;
    }
    p {
        flex: 0.50;
        font-weight: 100;
        color: #d6d6d1;
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