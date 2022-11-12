import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Section from '../components/Section'
import style from '../styles/Index.module.css'

import { useState } from 'react';
import { useSession, getSession } from "next-auth/react"



export default function Home() {
  const [inputs, setInputs] = useState({});
  const { data: session, status } = useSession()

  const resetFields = () => setInputs('');

  const handleSubmit = (event) => {
    return status === "authenticated"
      ? submitCode(event)
      : alert('veuillez creer un compte pour voir votre cadeau');
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }



  const submitCode = async (event) => {
    event.preventDefault();
    const codeInput = { inputs }


    try {
      const response = await fetch('/api/code/testCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(codeInput)
      })
      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        resetFields()
        console.log('form submitted successfully !!!', response)
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }





  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <header className={style['masthead']}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 text-center">
              <div className={`${style['bloc-content']} position-relative top-50 start-50 translate-middle`}>
                <h1 className="fw-light">Saisir votre code</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mx-auto my-3 w-100">
                    <input type="text" className="form-control" id="codeInput" name="codeInput" onChange={handleChange} aria-describedby="codeHelp" placeholder="A293049430..." />
                    <small id="codeHelp" className="form-text text-muted">Code à usage unique</small>
                  </div>
                  <div className="form-group mx-auto my-3 w-100">
                    <button type="submit" className="btn btn-dark">Découvrir votre cadeau</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section backgroundImagePath={'/images/three-cups-of-tea-steeping.png'}>
        <h1>Présentation du jeu concours</h1>
        <h4 className="fw-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus inventore mollitia incidunt nobis ratione dolores quaerat
          ab accusantium necessitatibus nihil quam beatae totam distinctio
          doloribus excepturi deleniti, fugit odio!
        </h4>
      </Section>
      <Section backgroundImagePath={'/images/top-view-of-a-tea-towel-and-container-holding-grain.png'}>
        <h1>Présentation de Thé Tip Top</h1>
        <h4 className="fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          deleniti iste cumque suscipit ab recusandae cupiditate delectus
          nesciunt quo dolorem totam vitae explicabo repudiandae repellendus
          perferendis, sed temporibus. Mollitia, vel.
        </h4>
      </Section>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session }
  }
}
