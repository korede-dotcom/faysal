import React, { useEffect,useRef } from 'react'
import styled from "styled-components"
import Input from '../Input';
import Select from '../Select';
import cancel from '../../assets/cancel.svg'


function Modals({show,closeModal,children,headText,formval}) { 
  if (!show) return null

  const modalRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [closeModal]);

 useEffect(()=>{
   const test = document.querySelector("#modal");
   if (!test.hasAttribute('open')) {
    test.showModal();
  }
     
},[show])

  //  const handleForm = (e) => {
  //   e.preventDefault();
  //   e.target.parentElement.close()
  //  }

   const inputStyle = {
    backgroundColor:"red"
   }
  return (
    // <ModalCont>
    <ModalCont id='modal'>
            <form onSubmit={formval}>
        <div className='content'>
          <div id="cancel">
            <div className='text'>
            <h2>{headText}</h2>
              <span> &#160; </span>
            </div>
            <img src={cancel} onClick={closeModal}  />
          </div>
            {children}

        </div>
            </form>
    
    </ModalCont>
    // </ModalCont>
      
  )
}
const ModalCont = styled.dialog`
    background: #fff;
  position: absolute;
  transition: opacity 2000s ease-in-out;
  ::-webkit-scrollbar{
    display: none;
  }
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* padding: 20px; */
  border: none;
  border-radius: 10px;
  box-shadow: 20px;
  width: 50%;

  ::backdrop{
    opacity: .5;
    background: grey;
    background-color: rgba(0,0.6,0.5,0.9);
    opacity:1;

  }

  .content{
    display:flex;
    padding: 20px;
    /* width:50vw; */
    @media screen and (max-width: 40em) {
      width: 100%;
    }
    flex-direction:column;
    gap: 20px;


    #cancel{
      height: 30px;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      img{
        height: 25px;
      }


      .text{
        display: flex;
        flex-direction: column;
      }

      h2{
        text-transform:uppercase;
        z-index: 1;
      }
      span{
        /* background-color:rgb(45, 55, 72); */
    width: 110%;
    height: 9px;
    margin-top: -13px;
      }
      
    }
  }
  .mgrid{
    display: inline-grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
  }

`
export default Modals