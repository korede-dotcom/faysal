import React, { useState,useEffect } from 'react'
import landing from '../../assets/landing3.svg'
import landing2 from '../../assets/landing4.svg'
import landing5 from '../../assets/landing5.svg'
import styled from 'styled-components'
import Input from '../../reuseable/Input'
import eye from '../../assets/eye.svg'
import eyeclose from '../../assets/eyeclose.svg'
import faysal from '../../assets/faysal.svg'
import logoo from '../../assets/logoo.svg'
import Button from '../../reuseable/Button'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../reuseable/Logo'
// import { useSelector, useDispatch } from 'react-redux';
// import { loginUser } from '../../redux/actions/auth/login';
// import { loginSelector } from '../../redux/reducers/auth/login';
import { userLogin } from "../../services/Auth";
import { useMutation } from "@tanstack/react-query"; 
// import {useSessionStorage} from '../../hooks/useSessionStorage'
import jwt_decode from "jwt-decode";


function Login() {
    const [type,setType] = useState(false)
    const [err,seterr] = useState('')
    // const dispatch = useDispatch();
    const Navigate = useNavigate();
      const [select, setselect] = useState({
          password:"",
          username:"",
         })

          const handleOnChange = (e) => {
             const { value, name } = e.target
            
             setselect((prev) => {
                 return {...prev, [name]:value}
              })
              
          }
         
      
        //  const { loading, success, error, errors,data } = useSelector(loginSelector);

        //  const {setSessionStorage} = useSessionStorage("__appUser")

        const { mutate, isLoading,isError} = useMutation({
            mutationFn: userLogin,
            onSuccess: (data) => {
                const decoded = jwt_decode(data.token);
                
                
            
            localStorage.setItem("token",JSON.stringify(data?.token))
            localStorage.setItem("role",JSON.stringify(decoded?.UserRoles))
            localStorage.setItem("userId",JSON.stringify(select?.username))
            if(decoded.UserRoles === 'ADMIN'){
                Navigate("/admin/dashboard");
            }else if(decoded.UserRoles === 'AGENT'){
                
                Navigate("/dashboard");
            }
            },
            onError: (data) =>{
                console.log(data)
            //    seterr(data.response.data.message)
               setTimeout(()=>{
                seterr("")
            },2000)
            // return 
            }
        });
        
        
      
        
          const submitform = (e) => {
              e.preventDefault();
          
            if(!select.password.length || !select.username.length){
                
                seterr("please input details")
                setTimeout(()=>{
                    seterr("")
                },2000)
                return
             }
             mutate(select) 
          }
 
      
  return (
    <LoginCont>
      {/* {isLoading} */}
            
        <div className='formcontainer'>
            <div className="logoo">
                <Logo/>
            </div>
            <div className='form'>
                <h1>Login</h1>
                <p style={{color:'red'}}>{err}</p>
                 <Input placeholder="email" text="Username or Email" required={true} textStyle="500" change={handleOnChange} name="username"/>
                 <div className='eye' >
                    <img src={type ? eye : eyeclose } onClick={() => setType(!type)} />
                 <Input placeholder="password" text="Password" type={type ? 'text' : 'password'} textStyle="500" change={handleOnChange} name="password"/>
                 </div>
                 {/* {!data?.status && <p style={{color:'red'}}>{err}</p>} */}
                 
                 <div className='others'>
                    <div className='rem'>
                        <input type="checkbox" id="rememberme"/>
                        <label htmlFor='rememberme'>remember me</label >
                    </div>
                    <Link>
                    <p>forgot password</p>
                    </Link>
                 </div>
                 {/* <small>Don't have an account? <Link to="/signup">Register</Link></small> */}
                 <Button type="" bcg="#0A221C" color="#fff" width="100%" text={`${isLoading ? "loading ...":"Login"}`} clickEvent={submitform} />
            </div>
        </div>
        <div className='side1'>
                <img src={faysal}/>
            </div>
    </LoginCont>
  )
}
const LoginCont = styled.div`
    height: 100vh;
    width: 100vw;
   /* width: 100vw; */
   overflow: hidden;
   display: flex;
   
    .side1{
        width: 50%;
        height: 100%;
        background: #0A221C;
        /* background: #a1a6a2; */
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;

        
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;

           /* height: 70%;
           
           object-fit: cover;
           border-radius: 20px;
           display: inline-flex;
           position: absolute;
           right: -8%; */
           
        }
        @media screen and (max-width:40em) {
                display: none;
                position: unset;
        }
    }

   .formcontainer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 50%;
    /* background: #E86B35; */

    .logoo{
        display: inline-flex;
        justify-content: flex-start;
        width: 100%;
        height: 50px;
        object-fit: contain;
        padding-inline-start: 40px;

    }
    @media screen and (max-width:40em) {
                width: 100%;
        }
   
    
    /* border: 1px solid red; */
    .form{
        /* background: #E86B35; */
        /* border: 1px solid green; */
        border-radius: 10px;
        padding: 3.2em;
        /* min-width: 400px; */
        display: flex;
        flex-direction: column;
        /* justify-content: space-evenly; */
        gap: 30px;
        min-height: 70%;
        /* border: 1.5px solid #000; */
        width: 50%;
        > input{
            
        }

        @media screen and (max-width:40em) {
                width: 100%;
        }
        /* box-shadow: 1px 1px 0px 1px #fff; */
        .eye{
            position: relative;
            
            img{
                position: absolute;
                right: 10px;
                bottom: 10px;
                height: 20px;
                cursor: pointer;
            }
        }
        .others{
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media screen and (max-width:40em) {
               font-size: 8px;
            }
            .rem{
                display: flex;
                align-items: center;
                gap: 3px;

                label{
                    font-size: 13px;
                }
            }
        }
        small{
            text-align: center;
        }
       }

   }

`


export default Login