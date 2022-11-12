import Head from "next/head";
import style from '../styles/User.module.css'

export default function Admin() {
    return (
        <> 
        <Head>
            <title>Administration</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        </Head>
        <div className="container py-2 py-lg-3">
            <h1 className="text-center py-2 py-lg-3">Administration</h1>
            <div className={`${style['bloc-content']} `}>
                <h2 className="text-center mb-3">Chercher un code</h2>
                <form>
                <div className="form-group mx-auto my-3 w-50">
                    <input type="text" className="form-control" id="codeInput" aria-describedby="codeHelp" placeholder="A293049430..." />
                    <small id="codeHelp" className="form-text text-muted">Code à usage unique</small>
                </div>
                <div className="form-group mx-auto my-3 w-50 text-center row justify-content-between">
                    <button type="submit" className={`${style['aButton']} btn btn-primary col-5`}>Chercher le cadeau</button>
                    <button type="submit" className={`${style['aButton']} btn btn-primary col-5 disabled`}>Cadeau récupéré</button>
                </div>
                </form>
            </div>
            <div className={`${style['bloc-content']} text-center`}>
                <h2 className="text-center mb-3">Concours final</h2>
                <button type="submit" className={`${style['aButton']} btn btn-primary`}>Sélectionner un gagnant</button>
            </div>
        </div>       

        </>
    );
}