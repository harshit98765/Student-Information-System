import { useState } from "react";
import axios from "axios";





const Insert=()=>
{  
    const [input,setInput]=useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=(e)=>
    {
        axios.post("http://localhost:4000/student",input)
        .then((res)=>{
            e.preventDefault();
            console.warn(input);
        });
        alert("Record Succefully Inserted");
    }












    return(
        <>
        <div class="mt-4 p-5 bg-primary text-white rounded">
  <h1>Insert Page</h1>
  <p>Insert Into Student Information</p>
</div> 
<div><br></br>

</div>
<div>
<div class="wrapper rounded bg-white">

        <div class="h3">Registration Form</div>

        <div class="form">
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Name</label>
                    <input type="text" name='name' id="name" value={input.name} onChange={handleInput} class="form-control" required />
                </div>
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Roll No</label>
                    <input type="text" name='rollno' id="rollno" value={input.rollno} onChange={handleInput} class="form-control" required />
                </div>
            </div>
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>City</label>
                    <input type="text" name='city' id="city" value={input.city} onChange={handleInput} class="form-control" required />
                </div>
            </div>
            
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Fees</label>
                    <input type="text" name='fees' id="fees" value={input.fees} onChange={handleInput} class="form-control" required />
                </div>
                </div>
                <div class="row">
                    <br></br>
                <div>
                    <lable>Submit</lable>
                    <input type="submit" value="Data Save !" onClick={handleSubmit}></input>
                </div>
                <br />
            </div>
    
        </>
    );
}
export default Insert;