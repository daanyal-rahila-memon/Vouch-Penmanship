import React , {useState}from 'react';
// import axios from 'axios';
import Select from 'react-select';
import { Typography,Divider} from "@mui/material"

function SupervisorlabelsDropdown()
{ // here I will get supervsor's label from mongo

    //HERE IN ARRAY OF ideas i will get all ideas of that
    //corresponding person and show them on ideas page
//   const ideas=["BLOCKCHAIN","RESEARCH"];
    var SupervisorList = [
        {
            label:"Sir Rizwan",
            value: "Blockchain"
       

        },
        {
            label:"Sir Umar",
            value: "Cyber Security"

        },
        {
            label:"Sir Bilal",
            value: "Networking Protocol"

        },
        {
            label:"Sir Mughees",
            value: "Game2048"

        },
        {
            value: 7,
            label:"Mam Seher"
            

        },
        {
            label:"Mam saba",
            value: "Professional Ethics"

        }
     ];
    ///=>here I was trying to fetching supervisor's label
    // componentDidMount =() =>{
    //     this.getSupervisorlabels();
    // }
    // getSupervisorlabels = function () {
    //     axios.get('/api')
    //     .then((response)=> {
    //         const data = response.data;
    //         this.setState({SupervisorList: data});
    //         console.log("Data has been received!");
    //     })
    //     .catch(()=>{
    //         alert('Error retriving data!');
    //     })
    // }

    const [result,ideasvalue]=useState(SupervisorList.label);
    const ddlHandler = e =>
    {
       console.log(e)
        ideasvalue(e.value);
    }
    return(
        <div style={{marginLeft:"75ch",width:"50ch"}}>
         
         
          <Typography sx={{mb: "50px",mt: "140px", textAlign: "center"}} component="h2" variant="h2">Ideas</Typography>
          <Divider sx=
        {{mt: "50px", mb: "40px",ml:"1ch",mr:"1ch", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
           <  center> 
           <Select options={SupervisorList} onChange={ddlHandler} justifyContent="center"/>
         <br></br>
          <h3> {result} </h3>
           </center>
        

        </div>


    );
}
export default SupervisorlabelsDropdown