import React from 'react'
import Layout from '../../reuseable/layouts/Layout'
import Navbar from '../../reuseable/Navbar'
import Header from '../../reuseable/Header'
import ContentsStyle from "./ContentsStyle"

function Main({children}) {
  return (
    <ContentsStyle>
    <Layout>
    <Navbar/>
       <Header/> 
        {children}
     
    </Layout>
    </ContentsStyle>  
  )
}

export default Main


