import axios from "axios";
import { useEffect, useState } from "react";
import MydataCom from "./MyDataComponent";
const Display=()=>
{
    const [data,setData]=useState([]);

    const loadData=()=>
    {
        axios.get("http://localhost:4000/student")
        .then((res)=>{
            setData(res.data);
        });
    }
    console.log(data);
    useEffect(()=>{
        loadData();

    },[])

    const tbldata=data.map((key)=><MydataCom rno={key.rollno}
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    
    
    />);







    return(
        <>
        <div class="mt-4 p-5 bg-primary text-white rounded">
  <h1>Display Page</h1>
  <p>Student Information</p>
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
    {tbldata}
  </tbody>
</table>
</center>






        
        </>
    );
}
export default Display;