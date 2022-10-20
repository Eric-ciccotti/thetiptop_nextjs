import Image from 'next/future/image'
import logo from '../public/images/logo.png';
import logoInstagram from '../public/images/logo instagram.png';
import logoLinkedin from '../public/images/logo linkedin.png';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-3 my-2 my-lg-5 footer">
            <div className="container border-bottom">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-md-3 d-flex justify-content-center">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="thetiptop navigation logo"
                                width="110"
                                height="110"
                            />
                        </Link>
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
                                <Link href="/CGU">
                                    <a className='nav-link px-2 text-muted'>CGU</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/mentions-legales">
                                    <a className='nav-link px-2 text-muted'>Mentions légales</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-muted">Thé Tip Top © 2022 - projet étudiant fictif pour lequel aucun réel
                achat ou aucune réservation ne pourrait être effectué.</p>
        </footer>
    );
}

export default Footer;