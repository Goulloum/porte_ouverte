import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="home-container">
            <div className="img-container"></div>
            <div className="main-title">Bienvenue à l'ISCIO</div>
            <div className="link-container">
                <Link to ='/Plan'><div className="plan-btn">Plan</div></Link>
                <Link to='/Enregistrer'><div className="enregistrer-btn">S'enregistrer</div></Link>
            </div>
            
        </div>
    )
}

export default Home;