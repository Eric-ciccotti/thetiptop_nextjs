import Image from 'next/future/image'
import logo from '../public/images/logo.png';
import logoInstagram from '../public/images/logo instagram.png';
import logoLinkedin from '../public/images/logo linkedin.png';


const Footer = () => {
    return (
        <footer className="py-3 my-4 footer">
            <div className="container border-bottom">
                <div className="row d-flex justify-content-center">
                    <button type="button" className='btn btn-dark mb-5 mt-3 w-25'>Boutique</button>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-3 d-flex justify-content-center">
                        <Image
                            src={logo}
                            alt="thetiptop navigation logo"
                            width="110"
                            height="110"
                        />
                    </div>
                    <div className="col-sm-6 col-md-3">

                        <ul className="nav flex-column justify-content-md-around align-content-center">
                            <li className="nav-item px-2">
                                <p>18 rue Léon Frot, 75 011 Paris</p>

                            </li>
                            <li className="nav-item px-2">
                                <p>01.65.38.94.23</p>
                            </li>
                            <li className="nav-item px-2">
                                <p>contact@thetiptop.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 d-flex justify-content-center align-items-md-baseline align-items-sm-center">

                        <ul className="nav flex-md-column">
                            <li className="nav-item py-2 px-2">
                                <Image src={logoInstagram} alt="lien instagram" width="40"
                                    height="40" />
                            </li>
                            <li className="nav-item py-2 px-2">
                                <Image src={logoLinkedin} alt="lien linkedin" width="40"
                                    height="40" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <ul className="nav flex-column justify-content-md-around justify-content-sm-center mx-5">
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">
                                    CGU
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">
                                    CGV
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">
                                    Mentions légales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-muted">Thé Tip Top © 2022</p>
        </footer>
    );
}

export default Footer;