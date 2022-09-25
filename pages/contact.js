/* 
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import Layout from "../Components/Layout";

export default function About() {
    return (
        <>
            <Head>
                <title>About page</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            </Head>


            <p>
                contactez moi
            </p>

        </>
    );
}