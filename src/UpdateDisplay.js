import { Link } from "react-router-dom"
import edit from "./edit.jpeg"

const UpdateDisplay=(props)=>
{
   
    return(
        <>
        <tr>
            <td>{props.rno}</td>
            <td>{props.nm}</td>
            <td>{props.ct}</td>
            <td>{props.fs}</td>
            <td>
                <Link to={`/Editrec/${props.id}`}>
                <img src={edit} width="40" height="40"></img></Link>
            </td>
        </tr>
        
        </>
    )
}
export default UpdateDisplay;