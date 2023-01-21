import React, { useEffect } from 'react'
import Layout from '../../reuseable/layouts/Layout'
import Navbar from '../../reuseable/Navbar'
import Table from '../../reuseable/table/Table'
import MainLayout from '../../reuseable/layouts/MainLayout'
import {data} from '../../component/Data'
import styled from 'styled-components'
import TableHead from '../../reuseable/table/TableHead'
import {useState} from 'react'  
import Button from '../../reuseable/Button'
import Search from '../../reuseable/Search'
import Row from '../../reuseable/layouts/Row'
import Col from '../../reuseable/layouts/Col'
import Modal from '../../reuseable/modal/Modal'
import Input from '../../reuseable/Input'
import SimpleSelect from '../../reuseable/SimpleSelect'
import plus from "../../assets/plus.svg"
import sorting from "../../assets/sorting.svg"
import Switch from '../../reuseable/Switch'
import {state_lcd} from '../../component/state'
import Selector from '../../reuseable/Selector'
import check from '../../assets/check.png'
import uploder from '../../assets/uploader.svg'
import cac from '../../assets/uploadimg.svg'
import card from '../../assets/card1.svg'
import profilebg from '../../assets/profilebg.svg'
import avi from '../../assets/avi.svg'
import cam from '../../assets/cam.svg'
import Webcam from 'react-webcam';

function Profile() {



  return (
   <MainLayout>
       <ProfileCont>
        <div className='cont'>

        <Header>
            <p>My Profile</p>
            <Button text="change passowrd" />
        </Header>
        <div className='profilecard'>
            <img src={avi}/>
            <h1>Olumide Bamidele</h1>
        </div>
        <G2C>
            <Input type="text"  text="First name"/>
            <Input type="text"  text="Last name"/>
            <Input type="text"  text="Phone Number"/>
            <Input type="text"  text="Address"/>
            <Input type="text"  text="First name"/>
            <Input type="text"  text="Address"/>
            <Input type="text"  text="First name"/>
        </G2C>
        </div>


       </ProfileCont>
   </MainLayout>
  )
}


const ProfileCont = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    
    .cont{
        gap: 40px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        padding: 20px;
        border: 1px solid #000;
    }

    .profilecard{
        background-image: url(${profilebg});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        padding: 20px;
        align-items: center;
        gap: 30px;
    }


    


`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-block: 10px;
    align-items: center;





`
const G2C = styled.div`
width: 100%;
     display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
`


export default Profile