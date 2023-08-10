import { useState, useEffect } from "react";
import axios from "axios";
import MydataCom from "./MyDataComponent";
const Search=()=>
{
    const [rno,setRno]=useState("");
    const [data,setData]=useState([]);
    const handleInput=(e)=>{
        setRno(e.target.value);
    }
    const handleForm=()=>
    {
        let url=`http://localhost:4000/student/?rollno=${rno}`;
        axios.get(url).then((res)=>
        {
            setData(res.data);
        });
    }
    const tbldata=data.map((key)=><MydataCom rno={key.rollno}
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    
    
    />);
    return(
        <>
        <h1>Search Record</h1>
        Enter RollNo : <input type="text" name="rno" value={rno} onChange={handleInput}></input>
        <input type="button" value="Search" onClick={handleForm}></input>
           <br/><br/>
           <center>
            <br></br>
        <table class="table" bgcolor="#212529" style={{width:700,color:"white"}}>
  <thead>
    <tr>
      <th scope="col">RollNo</th>
      <th scope="col">Student Name</th>
      <th scope="col">City</th>
      <th scope="col">Fees</th>
    </tr>
  </thead>
  <tbody>
    {tbldata}
  </tbody>
</table>
</center>
        </>
    );
}
export default Search;