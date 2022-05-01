// import './components/Header';
import logo from '../images/logo.png';
function Header(){
    return(    
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-warning">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="Finans" width="142" />
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-main">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="nav-main">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Benefits</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Prices</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn btn-outline-light ml-4">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
);

}

export default Header;
