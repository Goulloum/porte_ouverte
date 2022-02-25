
import { useHistory } from 'react-router-dom';

/************************************************************************
 *                      Droits réservés à nous même  :)                 *
 *                                                                      *
 *  - Mathieu                                                           * 
 *  - Antoine                                                           *
 *  - Rémy                                                              *
 *                                                                      *
 * **********************************************************************/


function Enregistrer() {

    const history = useHistory();
    return (
        <div className="enregistrer-container">
            <div className="retour-btn" onClick={() => history.goBack()}>Retour</div>

            <div className="Container_Enregistrement">

                <div className="Bandeau"></div>

                <div className="Container_Formulaire">

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
                            </div>

                            <div className="Box_Informations">
                                <label>Prénom : </label>
                                <input type="text" id="Prenom" name="Prenom" />
                            </div>

                            <div className="Box_Informations">
                                <label>Mail : </label>
                                <input type="email" id="Mail" name="Mail" />
                            </div>

                            <div className="Box_Informations">
                                <label>Téléphone : </label>
                                <input type="text" id="Tel" name="Tel" />
                            </div>

                            <div className="Box_Informations">
                                <label>Adresse : </label>
                                <input type="text" id="Adresse" name="Adresse" />
                            </div>

                            <div className="Box_Informations">
                                <label>Ville : </label>
                                <input type="text" id="Ville" name="Ville" />
                            </div>

                            <div className="Box_Informations">
                                <label>Code Postal : </label>
                                <input type="text" id="CP" name="CP" />
                            </div>

                        </div>

                    </div>

                    <div className="Fin_Formulaire">

                        <div className="Box_Newsletter">
                            <input type="checkbox" id="Newsletter" name="Newsletter" />
                            <label>J'autorise l'ISCIO à utiliser mes informations afin de communiquer avec moi au sujet des inscriptions, <br /> des formations qu'ils proposent et de diverses thématiques autour de l'apprentissage.</label>

                        </div>
                    </div>

                    <footer>
                        ZEUB
                    </footer>
                </div>

            </div>

        </div>



    )
}
export default Enregistrer;