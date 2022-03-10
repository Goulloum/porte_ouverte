import axios from "axios";

function Excel(){

    const handleSendEmail = () =>{
        axios({
            method: 'post',
                url: 'http://localhost/porte_ouverte/query.php',
                data: {
                    type: "excel",
                    mail: 'math.guillemin@hotmail.fr'
                    
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  }
                
            }).then((datas) => {
                console.log(datas.data);
            });
    }


    return(
        <div className="excel-container">

            <div onClick={handleSendEmail} className="excel-btn">TELECHARGER LA BASE DE DONNEE EN EXCEL</div>
        </div>
    )
}

export default Excel;