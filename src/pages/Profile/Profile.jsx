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
import {getCurrentUser} from "../../services/Dashboard"
import {useMutation,useQuery} from "@tanstack/react-query"

function Profile() {
    const check = JSON.parse(localStorage.getItem("role"))
    const cUser = JSON.parse(localStorage.getItem("userId"))

    const isAdmin = check === "ADMIN"


    const { data:currentuser,isLoading:loadinguser} = useQuery({
  
        queryKey:['getCurrentUser'],
        queryFn: () => getCurrentUser(cUser),
        // onError: (err) => {
        //   setMessage(err?.response?.data?.detail || err.message);
        //   setOpen(true);
        // },
        // enabled: Boolean(agentId),
      });
    console.log("🚀 ~ file: Profile.jsx:49 ~ Profile ~ currentuser", currentuser)


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
            <h1>{currentuser?.name}</h1>
        </div>
        <G2C>
            <Input type="text"  text="Name" readonly={true} isDisplay={true} value={currentuser?.name}/>
            <Input type="text"  text="Email" value={currentuser?.email}/>
            <Input type="text"  text="Phone Number" value={currentuser?.phoneNumber}/>
            <Input type="text"  text="Username" value={currentuser?.userName} />
            <Input type="text"  text="Role" value={currentuser?.role[0]?.name}/>
          
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

        @media screen and (max-width:40em ) {
        flex-direction: column;
      }
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

        @media screen and (max-width:40em ) {
        /* width: 45%; */
        grid-template-columns: 1fr;
      }
`


export default Profile