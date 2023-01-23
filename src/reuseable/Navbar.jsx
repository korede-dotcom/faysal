import React from 'react'
import "./Navbar.css"
import {links,linkAdmin} from "../component/Links"
import { Link } from 'react-router-dom'
import avatar from '../assets/tms/avatar.svg'
import arrdown from '../assets/tms/arrdown.svg'
// import logout from "../assets/logout.png"
import Search from './Search'
// import logo from '../assets/Ellipse 1.png';
import useAuth from '../hooks/useAuth'
import {useLocalStorage} from '../hooks/GetRole'
import {useMutation,useQuery} from "@tanstack/react-query"
import {getCurrentUser} from "../services/Dashboard"



function Navbar({name,role,styles}) {
    const {getLocalStorage} = useLocalStorage('role')
    console.log(getLocalStorage)
    // const getLocalStorage = localStorage.getItem("role")
    // const { userRole } = useAuth();

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
        <div className="nav"> 
        <div className='navtitle'>
        <img src={avatar} className="avi" />   
        <p>{currentuser?.userName} | <span>{getLocalStorage === "AGENT" ? 'Agent' : (getLocalStorage === "ADMIN") ? 'Admin' : (getLocalStorage === 3) ? 'Customer' : '' }</span></p>
        
            

        <img src={arrdown}/>
        </div>
            <div className="links">
                {getLocalStorage === "AGENT" && (
                    links.map((link) =>  {
                        return(
                        <Link to={link.url} className="link" key={link.name}>
                        <div className={ window.location.pathname === link.url ? 'active linkitems ' :'linkitems'} >
                                    <img src={window.location.pathname === link.url ? link.active : link.img} alt="ccc" className={ window.location.pathname === link.url ? "linkicon changeicon" : "linkicon"}/>
                                    <p className="linktext">{link.name}</p>
                                </div>
                            </Link>
                        )
                    })  

                )
            }
                {getLocalStorage === "ADMIN" && (

                    linkAdmin.map((link) =>  {
                        return(
                        <Link to={link.url} className="link" key={link.name}>
                        <div className={ window.location.pathname === link.url ? 'active linkitems ' :'linkitems'} >
                                    <img src={window.location.pathname === link.url ? link.active : link.img} alt="ccc" className={ window.location.pathname === link.url ? "linkicon changeicon" : "linkicon"}/>
                                    <p className="linktext">{link.name}</p>
                                </div>
                            </Link>
                        )
                    })  
                )
            }
            </div>
            {/* <Search/> */}
            {/* <div className='logout'>
                <div className='logouttext'>
                 <h5>Logout</h5>
                 <p>Super Agent</p>
                </div>
                <img src={logout}/>
            </div> */}
    </div>
  )
}

export default Navbar