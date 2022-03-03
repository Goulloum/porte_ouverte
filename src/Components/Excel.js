import axios from "axios";
import { CSVLink } from "react-csv";
import { useEffect, useState} from 'react';

function Excel(){
    const [data, setData] = useState([{}]);

    useEffect(() =>{
        axios({
            method: 'post',
                url: 'http://localhost/porte_ouverte/query.php',
                data: {
                    type: "excel",
                    
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  }
                
            }).then((datas) => {
                setData(datas.data)
                console.log(datas.data)
            });
    }, [])

    return(
        <div className="excel-container">

            <CSVLink data={data} className="excel-btn">TELECHARGER LA BASE DE DONNEE EN EXCEL (SIMPLE ET EFFICACE GARANTIE SANS VIRUS)</CSVLink>
        </div>
    )
}

export default Excel;