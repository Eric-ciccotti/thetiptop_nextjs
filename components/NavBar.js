import logo from '../public/images/logo.png';
import Image from 'next/future/image';
import Link from 'next/link';
import style from '../styles/NavBar.module.css';
import { useSession, signOut } from 'next-auth/react';


const NavBar = () => {
    const logout = () => {

        signOut()


    }


    const { data: session, status } = useSession()
    return (
        <nav className={`${style['customNavBar']} navbar navbar-expand-lg navbar-light bg-light sticky-top`}>
            <div className="container justify-content-between w-100">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand d-block d-lg-none">ThéTipTop</a>
                <Image
                    className='d-block d-lg-none navbar-logo-small-device'
                    src={logo}
                    layout="fill"
                    alt="thetiptop navigation logo"
                    width={40}
                    height={40}
                />

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                    <div className="row navbar-nav w-100 align-items-center justify-content-center text-lg-center">
                        <div className="col-12 col-lg-5">
                            <div className="row">
                                <div className="nav-item col-12 col-lg-6">
                                    <Link href="/"><a className="nav-link" >Accueil</a></Link>
                                </div>
                                <div className="nav-item col-12 col-lg-6">
                                    <Link href="/shop"><a className="nav-link" >Les produits à gagner</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex justify-content-center">
                            <Link href="/">
                            <Image
                                className='d-none d-lg-block'
                                src={logo}
                                layout="fill"
                                alt="thetiptop navigation logo"
                                width={40}
                                height={40}
                            />
                            </Link>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="row">
                                <div className="nav-item col-12 col-lg-3">
                                    <Link href="/contact"><a className="nav-link">Contact</a></Link>
                                </div>
                                <div className="nav-item col-12 col-lg-4">
                                    <Link href="/user"><a className="nav-link">Mon Compte</a></Link>
                                </div>
                                {session &&
                                    <div className="nav-item col-12 col-lg-5">
                                        <button onClick={logout} className="btn btn-primary">Se déconnecter</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>


                    <ul className="navbar-nav justify-content-between w-100 d-none">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link" >Accueil</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/shop"><a className="nav-link" >Les produits à gagner</a></Link>
                        </li>
                        <li className="nav-item">

                            <Image
                                className='d-none d-lg-block'
                                src={logo}
                                layout="fill"
                                alt="thetiptop navigation logo"
                                width={40}
                                height={40}
                            />
                        </li>

                        <li className="nav-item">
                            <Link href="/contact"><a className="nav-link">Contact</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user"><a className="nav-link">Mon Compte</a></Link>
                        </li>
                        {session &&
                            <li className="nav-item">
                                <button onClick={logout} className="btn btn-primary">Se déconnecter</button>
                            </li>
                        }
                    </ul>


                </div>
            </div>
        </nav>
    )

    // return (
    //     <nav className="navbar sticky-top navbar-expand-lg navbar-light">
    //         <div className="container my-3">
    //             <button
    //                 className="navbar-toggler"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#navbarSupportedContent"
    //                 aria-controls="navbarSupportedContent"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation"
    //             >
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>

    //             <a className="navbar-brand d-xs-block d-sm-block d-md-block d-xl-none d-lg-none brand-link h4">
    //                 ThéTipTop
    //             </a>

    //             <a className="navbar-brand d-xs-block d-sm-block d-md-block d-xl-none d-lg-none navbar-logo-small-device">
    //                 <Image
    //                     src={logo}
    //                     width="40"
    //                     height="40"
    //                     className="align-top"
    //                     alt="React Bootstrap logo"
    //                 />
    //             </a>
    //         </div>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <div className="navbar-nav">
    //                 <Link href="/">
    //                     <a className="nav-link" href="#">
    //                         Home
    //                     </a>
    //                 </Link>
    //                 <Link href="/">
    //                     <a className="nav-link" href="#">
    //                         Contact
    //                     </a>
    //                 </Link>
    //                 <Link href="/">
    //                     <a className="nav-link" href="#">
    //                         Mon compte
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //     </nav>);
};

export default NavBar;
