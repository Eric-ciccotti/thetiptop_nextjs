import Image from 'next/future/image'
import React from 'react'
import Section from '../components/Section'
import style from '../styles/Register.module.css'
import { AiOutlineGoogle } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'


const Register = () => {
    return (
        <header className={style['masthead']}>
            <div className="container h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-sm-12 col-md-6 text-center justify-content-center">
                        <div className={`${style['bloc-content']}`}>
                            <h1 className="fw-light">Créer un compte</h1>
                            <hr />
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="inputNom" placeholder="Nom..." />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="inputPrenom" placeholder="Prénom..." />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email..."
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Mot de passe..."
                                        />
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Valider
                                    </button>
                                </div>



                                <p className={`${style['forgot-password']} text-right`}>
                                    Déja inscrit ? <a href="/sign-in">se connecter</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </header>
    )
}

export default Register;
