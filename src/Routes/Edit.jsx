import { useParams } from "react-router-dom";
import { data } from "../App";

function Edit (){

    const {id} = useParams()

    return(
        <>
            
            {
                data.map(a => parseInt (id) === a.id ? <h2 style={{color: 'white',backgroundColor:'crimson'}}>{a.n}</h2> : null)
            }
        </>
    )
}

export default Edit;