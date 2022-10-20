/* 
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>Contactez nous</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            </Head>

            <div className="container py-2 py-lg-3">
                <h1 className="text-center py-2 py-lg-3">Contactez nous</h1>
                <div className="row py-2 align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="px-2">
                            <h2>Par téléphone</h2>
                            <a href="tel:0165389423">01.65.38.94.23</a>
                            <h2 className="mt-3">Par mail</h2>
                            <a href="mailto:contact@thetiptop.com">contact@thetiptop.com</a>
                            <h2 className="mt-3">Sur nos réseaux</h2>
                            <div>Réseau 1</div>
                            <div>Réseau 2</div>
                            <div>Réseau 3</div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <h2 className="text-center">Notre siège</h2>
                        <iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=18%20rue%20L%C3%A9on%20Frot,%2075%20011%20Paris&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>

        </>
    );
}