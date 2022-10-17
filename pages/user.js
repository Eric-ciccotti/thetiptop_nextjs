import Image from 'next/future/image'
import React, { useState, useEffect } from 'react'
import Section from '../components/Section'
import style from '../styles/User.module.css'
import { AiOutlineGoogle } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { FiArrowRightCircle } from 'react-icons/fi'
import { FaCartArrowDown } from 'react-icons/fa'
import { getSession, SessionProvider, useSession } from 'next-auth/react'





const User = () => {
    const { data: Session } = useSession()

    const [codes, setCodes] = useState([164243432, 464243432, 864243432])
    const sessionNom = Session.user.name.split(' ')[1]
    const sessionPrenom = Session.user.name.split(' ')[0]

    return (

        <header className={style['masthead']}>
            <div className="container h-100">
                <div className="row justify-content-center h-100">
                    <div className="col text-center justify-content-center ">
                        <div className={`${style['bloc-content']} position-relative top-50 start-50 translate-middle`}>
                            <h1 className="fw-light">Mon compte</h1>
                            <hr />
                            <form className="d-flex flex-column justify-content-center align-items-center">
                                <div className="col-md-12 p-2">
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="inputNom">Nom</label>
                                            <input type="text" className="form-control" id="inputNom" placeholder="Nom..." defaultValue={sessionNom} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPrenom">Prénom</label>
                                            <input type="text" className="form-control" id="inputPrenom" placeholder="Prénom..." defaultValue={sessionPrenom} />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12 mb-3">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="email..."
                                                defaultValue={Session.user.email}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Mot de passe</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Mot de passe..."

                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="row col-md-12 mb-5">
                                    <button type="submit" className="btn btn-primary">
                                        Valider les modifications
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <label for="floatingTextarea2">Vos codes utilisés</label>
                                    <div className="row">
                                        <FaCartArrowDown />
                                    </div>
                                    <ul className={`${style.userUl} ${style.codeCol} mb-3 mt-3 `}>
                                        {codes.map((code, index) => <li key={index}><FiArrowRightCircle /> {code}</li>)}
                                    </ul>
                                </div>


                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </header>
    )
}

export default User;


export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }

    return {
        props: { session }
    }
}
