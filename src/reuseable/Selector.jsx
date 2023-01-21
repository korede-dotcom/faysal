import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
//   // add more options here
// ];

function Selector({data,selected,value,size,isSearch}) {
  return (
    <Selects>

      <Select
        options={data}
        isSearchable={isSearch ? isSearch : false}
        placeholder="Select an option"
        onChange={selected}
        defaultValue={value}
        
  
      
        styles={{
          control: styles => ({ ...styles, backgroundColor: 'white',padding:'0.8px',border:'.6px solid rgba(135, 135, 135, 1)',borderRadius:'5px',outline:'none',fontSize:'13px',scale:`${size}`}),
        }}
      />
    </Selects>
  );
}

const Selects = styled.div`

@media screen and (max-width:80em) {
        width: 90%;
      }
      @media screen and (max-width:40em) {
        width: 70%;
      }
      @media screen and (max-width:30em) {
        width: 50%;
      }
`

export default Selector 