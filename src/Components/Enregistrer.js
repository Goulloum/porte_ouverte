
import {useHistory} from 'react-router-dom';

function Enregistrer(){

    const history = useHistory();
    return(
        <div className="enregistrer-container">
            <div className="retour-btn" onClick={() => history.goBack()}>Retour</div>
        </div>
    )
}
export default Enregistrer;