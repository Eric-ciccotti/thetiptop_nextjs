import Image from 'next/future/image'
import React from 'react'
import Section from '../components/Section'
import style from '../styles/Login.module.css'
import { AiOutlineGoogle } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { signIn } from "next-auth/react"

import { getSession, useSession } from 'next-auth/react'


const Login = () => {

    return (
        <header className={style['masthead']}>
            <div className="container h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-sm-12 col-md-6 text-center justify-content-center">
                        <div className={`${style['bloc-content']} position-relative top-50 start-50 translate-middle`}>
                            <h1 className="fw-light">Se connecter</h1>
                            <hr />
                            <form>
                                <div className="mb-3">

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email..."
                                    />
                                </div>
                                <div className="mb-3">

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Mot de passe..."
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Se connecter
                                    </button>
                                </div>

                                <hr />

                                <div className="d-grid">
                                    <button onClick={() => signIn("google")} type="button" className={`btn btn-primary ${style.loginButton}`} style={{ backgroundColor: "#dd4b39" }}>
                                        <span className={style.logo}><AiOutlineGoogle /></span>Se connecter avec google
                                    </button>

                                </div>
                                <div className="d-grid">
                                    <button type="submit" className={`btn btn-primary ${style.loginButton}`} style={{ backgroundColor: "#3b5998" }}>
                                        <span className={style.logo}><RiFacebookCircleFill /></span>Se connecter avec Facebook
                                    </button>
                                </div>

                                <p className={`${style['forgot-password']} text-right`}>
                                    Pas encore inscrit ? <a href="/sign-in">créer un compte</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </header >
    )
}

export default Login;

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (session) {

        return {
            redirect: {
                destination: '/user'
            }
        }
    }

    return {
        props: { session }
    }
}
