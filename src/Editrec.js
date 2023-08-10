import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editrec=()=>
{
    let {id} =useParams();
    const [data,setData]=useState([]);
    const loadData=()=>
    {
        let url=`http://localhost:4000/student/${id}`;
        axios.get(url)
        .then((res)=>{
            setData(res.data);
        });
        console.log(data);
    }
    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;

        setData(values=>({...values, [name]:value}));

    }
    const editSave=()=>
    {
        axios.put(`http://localhost:4000/student/${id}`,data)
        .then((res)=>{
            console.warn(data);
        });
    }

    return(
        <>
         <div class="mt-4 p-5 bg-primary text-white rounded">
  <h1>Update Data</h1>
  <p>Student Information</p>
</div><br/>
<div>
           RollNo : <input type="text" value={data.rollno} name="rollno" onChange={handleInput}/>
           Name : <input type="text" value={data.name} name="name" onChange={handleInput}/>
           City : <input type="text" value={data.city} name="city" onChange={handleInput}/>
           Fees : <input type="text" value={data.fees} name="fees" onChange={handleInput}/>
           <input type="button" value="Data Update" onClick={editSave} onChange={handleInput}/>
           </div>
        </>
    )

}
export default Editrec;