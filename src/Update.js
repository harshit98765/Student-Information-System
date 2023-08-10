import { useState,useEffect } from "react";
import axios from "axios";
import UpdateDisplay from "./UpdateDisplay";
import MydataCom from "./MyDataComponent";
import edit from "./edit.jpeg";
const Update=()=>
{
    const [data,setData]=useState([]);
    const loadData=()=>
    {
        axios.get("http://localhost:4000/student")
        .then((res)=>{
            setData(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[]);

    const myData=data.map((key)=><UpdateDisplay 
    rno={key.rollno}
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    id={key.id}
    />);

    
    return(
        <>
        <div class="mt-4 p-5 bg-primary text-white rounded">
  <h1>Update Page</h1>
  <p>Update into Student Information</p>
</div>

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
    {myData}
  </tbody>
</table>
</center>
        </>
    );
}
export default Update;