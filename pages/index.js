import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Section from '../components/Section'
import style from '../styles/Index.module.css'



export default function Home() {



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
                <form>
                  <div className="form-group mx-auto my-3 w-100">
                    <input type="text" className="form-control" id="codeInput" aria-describedby="codeHelp" placeholder="A293049430..." />
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
