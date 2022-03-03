import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import validator from 'validator';



/************************************************************************
 *                      Droits réservés à nous même  :)                 *
 *                                                                      *
 *  - Mathieu                                                           * 
 *  - Antoine                                                           *
 *  - Rémy                                                              *
 *                                                                      *
 * **********************************************************************/


function Enregistrer() {

    const [statut, setStatut] = useState();


    const [error, setError] = useState({
        mail: false,
        tel: false,
        empty: []
    });

    useEffect(() => {
        setStatut();
    }, [])

    const validInput = (e) =>{
        e.preventDefault();
        var arr = [
            e.target.elements.Nom,
            e.target.elements.Prenom,
            e.target.elements.Mail,
            e.target.elements.Tel,
            e.target.elements.Adresse,
            e.target.elements.Ville,
            e.target.elements.CP,
        ];

        var tmp = {
            mail: error.mail,
            tel: error.tel,
            empty: []
        }

        arr.map((el) => {
            if(el.value.length <= 0){

                tmp = {...tmp, empty: [...tmp.empty, el.getAttribute('name')]}
            }
        })
        
        
        if(e.target.Mail.value === ""){
            tmp = {...tmp, mail: true};

        }

        if(e.target.Tel.value === ""){
            tmp = {...tmp, tel: true};
        }

        
        
        setError(tmp);

        if(error.tel === false && error.mail === false && error.empty.length=== 0){
            handleQuery(e);
        }else{
            
        }

        

    }

    const handleQuery = (e)=>{


        axios({
            method: 'post',
                url: 'http://localhost/porte_ouverte/query.php',
                data: {
                    type: "add_user",
                    CG: e.target.elements.CG.checked,
                    MCO: e.target.elements.MCO.checked,
                    NDRC: e.target.elements.NDRC.checked,
                    SIO: e.target.elements.SIO.checked,
                    bachelor_info: e.target.elements.Bachelor_Info.checked,
                    bachelor_market: e.target.elements.Bachelor_Market.checked,
                    nom: e.target.elements.Nom.value,
                    prenom: e.target.elements.Prenom.value,
                    mail: e.target.elements.Mail.value,
                    tel: e.target.elements.Tel.value,
                    adresse: e.target.elements.Adresse.value,
                    ville: e.target.elements.Ville.value,
                    cp: e.target.elements.CP.value,
                    newsletter: e.target.elements.Newsletter.checked
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  }
                
            }).then((data) => {
                data.data? setStatut(true): setStatut(false)
                window.scrollTo(0, 0)
                e.target.reset();
                setTimeout(() => {
                    setStatut();
                }, 10000)
            });
        
    }

    const handleEmail = (e) =>{

        if(validator.isEmail(e.target.value)){
            setError({...error, mail : false});
        }else{
            setError({...error, mail : true});
        }
    }

    const handleTel = (e) => {
        if(/^-?\d+$/.test(e.target.value) && e.target.value.length === 10){
            setError({...error, tel: false});
        }else{
            setError({...error, tel: true});
        }
    }





    const history = useHistory();
    return (
        <div className="enregistrer-container">
            <div className="retour-btn" onClick={() => history.goBack()}>Retour</div>

            <div className="Container_Enregistrement">

                <div className="Bandeau"></div>

                <form autocomplete="off" onSubmit={(e) => validInput(e)} className="Container_Formulaire">

                    <h4>Les formations qui m'interessent :</h4>

                    <div className="Debut_Formulaire">

                        <div className="Option_formation">

                            <div className="Part1">
                                <div className="Box_Checkbox">
                                    <input type="checkbox" id="CG" name="CG" />
                                    <label>CG</label>
                                </div>

                                <div className="Box_Checkbox">
                                    <input type="checkbox" id="MCO" name="MCO" />
                                    <label>MCO</label>
                                </div>

                                <div className="Box_Checkbox">
                                    <input type="checkbox" id="NDRC" name="NDRC" />
                                    <label>NDRC</label>
                                </div>

                                <div className="Box_Checkbox">
                                    <input type="checkbox" id="SIO" name="SIO" />
                                    <label>SIO</label>
                                </div>
                            </div>

                            <div className="Part2">
                                <div className="Box_Checkbox">
                                    <input type="checkbox" id="Bachelor_Info" name="Bachelor_Info" />
                                    <label>Bachelor Informatique</label>
                                </div>

                                <div className="Box_Checkbox">
                                    <input type="checkbox" id="Bachelor_Market" name="Bachelor_Market" />
                                    <label>Bachelor Marketing</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Milieu_Formulaire">

                        <div className="PartM1">

                            <div className="Box_Informations">
                                <label>Nom : </label>
                                <input type="text" id="Nom" name="Nom" />
                                <div style={{display: error.empty.includes('Nom')? "inherit": "none"}} className="error-email">Veuillez renseigner ce champ</div>
                            </div>

                            <div className="Box_Informations">
                                <label>Prénom : </label>
                                <input type="text" id="Prenom" name="Prenom" />
                                <div style={{display: error.empty.includes('Prenom')? "inherit": "none"}} className="error-email">Veuillez renseigner ce champ</div>
                            </div>

                            <div className="Box_Informations">
                                <label>Mail : </label>
                                <input onChange={(e) => handleEmail(e)} type="email" id="Mail" name="Mail" />
                                <div style={{display: error.mail? "inherit": "none"}} className="error-email">Email non-conforme</div>
                            </div>

                            <div className="Box_Informations">
                                <label>Téléphone : </label>
                                <input onChange={(e) => handleTel(e)} type="text" id="Tel" name="Tel" />
                                <div style={{display: error.tel? "inherit": "none"}} className="error-email">Téléphone non-conforme</div>
                            </div>

                            <div className="Box_Informations">
                                <label>Adresse : </label>
                                <input type="text" id="Adresse" name="Adresse" />
                                <div style={{display: error.empty.includes('Adresse')? "inherit": "none"}} className="error-email">Veuillez renseigner ce champ</div>
                            </div>

                            <div className="Box_Informations">
                                <label>Ville : </label>
                                <input type="text" id="Ville" name="Ville" />
                                <div style={{display: error.empty.includes('Ville')? "inherit": "none"}} className="error-email">Veuillez renseigner ce champ</div>
                            </div>

                            <div className="Box_Informations">
                                <label>Code Postal : </label>
                                <input type="text" id="CP" name="CP" />
                                <div style={{display: error.empty.includes('CP')? "inherit": "none"}} className="error-email">Veuillez renseigner ce champ</div>
                            </div>

                        </div>

                    </div>

                    <div className="Fin_Formulaire">

                        <div className="Box_Newsletter">
                            <input type="checkbox" id="Newsletter" name="Newsletter" />
                            <label>J'autorise l'ISCIO à utiliser mes informations afin de communiquer avec moi au sujet des inscriptions, <br /> des formations qu'ils proposent et de diverses thématiques autour de l'apprentissage.</label>

                        </div>
                        <input type='submit' className="send-form-btn" value='Envoyer' />
                    </div>

                </form>

            </div>
            <div style={{display: statut? "inherit": "none"}} className="response-add-user-true">Vos informations ont bien été enregistrée,<br /> merci de votre participation</div>
            <div style={{display: statut === false? "inherit": "none" }} className="response-add-user-false">Une erreur est survenue ...</div>
        </div>

        



    )
}
export default Enregistrer;