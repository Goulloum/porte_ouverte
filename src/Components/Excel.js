import axios from "axios";
import { useRef, useState } from "react";

function Excel() {
    const email = useRef();

    const [confirmation, setConfirmation] = useState(false);

    const handleSendEmail = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/query.php",
            data: {
                type: "excel",
                mail: email.current.value,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((datas) => {
            if (datas.data) {
                setConfirmation(true);
                console.log(datas.data);
                setTimeout(() => {
                    setConfirmation(false);
                }, 10000);
            }
        });
    };

    return (
        <div className="excel-container">
            <input ref={email} type="text" placeholder="Email de destination" className="input-email-excel" />
            <div onClick={handleSendEmail} className="excel-btn">
                TELECHARGER LA BASE DE DONNEE EN EXCEL
            </div>
            <div style={{ display: confirmation ? "" : "none" }} className="confirmation-msg-excel">
                Fichier envoyé à votre adresse email
            </div>
        </div>
    );
}

export default Excel;
