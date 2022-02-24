
import Bandeau_Enregistrement from '../img/Bandeau.png';

import {useHistory} from 'react-router-dom';

/************************************************************************
 *                      Droits réservés à nous même  :)                 *
 *                                                                      *
 *  - Mathieu                                                           * 
 *  - Antoine                                                           *
 *  - Rémy                                                              *
 *                                                                      *
 * **********************************************************************/


function Enregistrer(){

    const history = useHistory();
    return(
        <div className="enregistrer-container">
            <div className="retour-btn" onClick={() => history.goBack()}>Retour</div>

            <div className="Container_Enregistrement">

                <div className="Bandeau"></div>

                <div className="Container_Formulaire">

                    <h4>Les formations qui m'interesse :</h4>

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

                        <div className="Box_Informations">
                            <label>Nom : </label>
                            <input type="text" id="Nom" name="Nom" />
                        </div>

                        <div className="Box_Informations">
                            <label>Prénom : </label>
                            <input type="text" id="Prenom" name="Prenom" />
                        </div>

                        <div className="Box_Informations">
                            <label>Mail : </label>
                            <input type="text" id="Mail" name="Mail" />
                        </div>

                        <div className="Box_Informations">
                            <label>Téléphone : </label>
                            <input type="text" id="Tel" name="Tel" />
                        </div>

                        <div className="Box_Informations">
                            <label>Adresse / Ville / CP : </label>
                            <input type="text" id="Adresse" name="Adresse" />
                        </div>

                    </div>
                </div>

            </div>

        </div>

        

    )
}
export default Enregistrer;