
import {useHistory} from 'react-router-dom';

function Information(){
const history = useHistory()

    return(
        <div className="information-container">
            <div className="retour-btn" onClick={() => history.goBack()}>Retour</div>
        </div>
    )
}
export default Information;