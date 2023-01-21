import React from 'react'

function TableHead() {
  return (
    <div>
        <div className='tableContainer'>
<div className='tdetails'>
        <h3>{tabletext}</h3>
        {search ? 
        <Row jc="space-between" width="100%">
            <Search 
                width="100%" 
                // bdr="20px"
                border=".1px solid rgba(0, 164, 228, 1)" 
                change={(e)=>console.log(e.target.value)}
                placeholder="Search Terminals ID, Agent and Agent Managers"
                />
           
            <Button 
                icon={plus}
                text={isActive ? `${btntext1}` : `${btntext2}`}
                width="60%"
                bcg="#E8EEFE"
                color="#1B59F8"
                clickEvent={modalBtn}
                />

            {/* <Modal show={showModal} closeModal={() => setModal(false)}/> */}
        </Row>
        :
        <div className="atag">View all</div>
    }

</div>
{
    btnOptions 
    &&
<Row padding="15px" jc="initial">

<Button 
// icon={plus}
text={btntext1}
width="20%"
bcg={isActive ? "#1B59F8" : "#fff"}
color={isActive && "#fff"}
clickEvent={b1Click}
/>
  
<Button 
// icon={plus}
text={btntext2}
width="20%"
bcg={b2isActive ? "#1B59F8" : "#fff"}
color={b2isActive && "#fff"}
clickEvent={b2Click}
/>
</Row>
}
</div>
    </div>
  )
}

export default TableHead