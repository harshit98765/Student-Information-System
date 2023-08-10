import axios from "axios";
import Delete from "./Delete";
import { useNavigate } from "react-router-dom";

const MydataComDel=(props)=>
{
    const navigate = useNavigate();

    const DeleteData=(id)=>
    {
        const Id=id;
        axios.delete(`http://localhost:4000/student/${id}`)
        .then(response=>{
            console.log(`Deleted post with ID ${id}`);
            alert("Record Deleted Successfull");
            navigate('/display',{replace: true});
        })
        .catch(error=>{
            console.error(error);
        });
    }




    return(
        <>
         <tr>
            <td> {props.rno}</td>
            <td> {props.nm}</td>
            <td> {props.ct}</td>
            <td> {props.fs}</td>
            <td> 
                <a href="#" onClick={()=>{DeleteData(props.myid)}}>
                <img src={props.di} width="40" height="40"></img>
                </a>
                </td>
         </tr>
        
        </>
    )
}

export default MydataComDel;