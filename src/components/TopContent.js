import Woman from '../images/capa-mulher.png'
import styles from './modules/TopContent.module.css';

function TopContent(){
    return(
        <section  className="bg-warning top__content text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="align-self-center">
                            <h1 className="display-4">Your finances uncomplicated</h1>
                            <p>
                                Used by more than 1 million people, Finans is an online tool that will make your financial life easier
                            </p>
                            <form className="mt-4 mb-4">
                                <div className="input-group input-group-lg">
                                    <input type="text" placeholder="Your e-mail" className="form-control" />
                                    <div className="input-group-append">
                                        <button type="button" className={`btn btn-primary ${styles.btnRegister}`}>Register</button>
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify
                            -content-center align-items-center">
                                <p className="my-0 me-3">
                                    Available for
                                </p>
                                <span className="ml-2">
                                    <a href="#" className="btn btn-outline-light me-1">
                                        <i className="fab fa-android "></i>
                                    </a>
                                    <a href="#" className={`btn btn-outline-light ${styles.btnApple}`}>
                                        <i className="fab fa-apple"></i>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img src={Woman} alt="Woman Marketing" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopContent;