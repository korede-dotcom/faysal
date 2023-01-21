import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";
// import "./ProgressBar.css";

function ProgressBars(props) {
  return (
    <Flex>
          
      <p className="users">Most Active Users</p>
      <div className="prog">
         <div className="progOne">
              <p>PayArena</p>
         </div>
         <div className="progTwo">
                <ProgressBar
                className="progress3"
                now={20}
                label=""
                
              />
              <p className="progTwotwo">2345 users</p>
         </div>
      </div>
      <div className="prog">
         <div className="progOne">
              <p>PayArena Exchange</p>
         </div>
         <div className="progTwo">
                <ProgressBar
                className="progress3"
                now={40}
                label=""
              />
              <p className="progTwotwo">2345 users</p>
         </div>
      </div>
      <div className="prog">
         <div className="progOne">
              <p>PayAltitude</p>
         </div>
         <div className="progTwo">
                <ProgressBar
                className="progress3"
                now={50}
                label=""
              />
              <p className="progTwotwo">9,845 users</p>
         </div>
      </div>
      <div className="prog">
         <div className="progOne">
              <p>HopeBank</p>
         </div>
         <div className="progTwo">
                <ProgressBar
                className="progress3"
                now={80}
                label=""
              />
              <p className="progTwotwo">23,645 users</p>
         </div>
      </div>

    </Flex>
    
  );
}

export default ProgressBars



const Flex = styled.div`
   
        // background: rgba(0, 0, 0, 0.1);
        border-radius: 0px 4px 4px 0px;
        align-items: space-around;
        // column-gap: 10px;
        background-color: #F7F9FB;
        padding: 20px;
        border-radius: 25px;

.users{
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  /* line-height: 20px; */
  color: #333333;
  margin-bottom: 20px;
}


.prog{
  display: flex;
  flex-direction: row;
  /* column-gap: 15px; */
  padding: 10px;
  margin-bottom: 5px;

    .progOne{
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #333333;
      width: 70px;
    }

    .progTwo{
      display: flex;
      flex-direction: column;
      height: 35px;
      /* max-width: 570px; */
         
              .progress3 .progress-bar{
           
                background: #1C1C1C;
                height: 10px;
              

              }

              .progress3.progress{
                background: #1C1C1C;
                height: 40px;
                width: 170px;

              }

              .progress3.progress {
             
                background: rgba(0, 0, 0, 0.1);
                border-radius: 0px 4px 4px 0px;
                height: 10px;
         
                
              }

              .progTwotwo{
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 18px;
                color: #333333;
              }


    }
}



`