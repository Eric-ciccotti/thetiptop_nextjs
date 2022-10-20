import Head from "next/head";

export default function Shop() {
    return (
        <>          
            <Head>
                <title>Produits à gagner</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            </Head>

            <div className="container text-center pt-5">
                <h1>Les produits à gagner !</h1>
                <div className="row mt-4">
                    <div className="col-12">
                        <h2>Le gros lot !</h2>
                        <div>Img gros lot</div>
                    </div>
                    <div className="col">
                        Produit1
                    </div>
                    <div className="col">
                        Produit1
                    </div>
                    <div className="col">
                        Produit1
                    </div>
                    <div className="col">
                        Produit1
                    </div>
                </div>
            </div>
        </>
    )
}