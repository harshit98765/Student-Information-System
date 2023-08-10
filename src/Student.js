
const Student=(props)=>{
    return(
        <>
        <table className="table table-bordered">
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                <tr>
                    <td>{props.rollno}</td>
                    <td>{props.name}</td>
                    <td>{props.city}</td>
                    <td>{props.fees}</td>
                </tr>

        </table>
        </>
    );
}
export default Student;