import saibaImg from '../images/saiba.png';
import jurosImg from '../images/juros.png';
import facilImg from '../images/facil.png';
import economizeImg from '../images/economize.png';
import suporteImg from '../images/suporte.png';
import styles from './modules/MiddleContent.module.css';
function MiddleContent(){
    return(
        <main>
            <section className={styles.box}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="align-self-center">
                                <h2>Know where your money goes</h2>
                                <p>
                                    With Finans, you can categorize all your releases. With simple graphics, you know where your money comes from and where your money goes.
                                </p>
                                <a href="#" className="btn btn-primary">See more</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={saibaImg} alt="More" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.box}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={jurosImg} alt="More" className="img-fluid" />
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="align-self-center">
                                <h2>Stop paying interest and save</h2>
                                <p>
                                    Is keeping payments up to date always a problem? Finans warns: receive pending payment alerts
                                </p>
                                <a href="#" className="btn btn-primary">See more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={facilImg} alt="Easy" className="img-fluid" />
                            <h4>Easy to use</h4>
                            <p>
                                Finans goes beyond the basics and allows you to make incredible and essential controls for your finances. Simple as it has to be!
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={economizeImg} alt="Economize" className="img-fluid" />
                            <h4>Save your time</h4>
                            <p>
                                Time is money! In seconds, you have everything under control and enjoy your time with what really matters to you!
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={suporteImg} alt="Support" className="img-fluid" />
                            <h4>Friendly support</h4>
                            <p>
                                Doubts? Our super cool support helps you! We are here to solve your problems and make your life a lot easier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MiddleContent;
