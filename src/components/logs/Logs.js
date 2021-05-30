import { useEffect,useState } from "react";
import axios from 'axios'
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader"


const Log = () => {

    const [logs,setLogs] = useState([])
    const [loading,setLoading] = useState(false)

   
    useEffect(()=>{
        getLogs()
    },[])

    const getLogs = async () => {
        setLoading(true)
        // const res = await fetch('http://localhost:5000/logs');
        // const data = await res.json();

        const res = await axios.get('/logs')
           
        setLogs(res.data)
        setLoading(false)
       

    }

    if(loading){
        return <Preloader/>
    }


    return ( 
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>

            {!loading && logs.length === 0 ? (<p>Logs Not Available</p>) : (
                logs.map(log => <LogItem log={log} /> )
            )}


        </ul>
     );
}
 
export default Log;