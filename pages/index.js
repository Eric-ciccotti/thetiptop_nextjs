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

      <header className={`${style['masthead']} d-flex justify-content-center align-items-center text-center`}>
        <div className="row container align-items-center">
          <div className="col-6 col-lg-3 d-none d-lg-block">
            <img src="/images/coffret-the-PhotoRoom.png" alt="" className={`${style['rotatingImage']} w-100`}/>
          </div>
          <div className={`${style['bloc-content']} col-12 col-lg-6`}>
            <h1 className="fw-light">Saisis ton code</h1>
            <form>
              <div className="form-group mx-auto my-3 w-100">
                <input type="text" className="form-control" id="codeInput" aria-describedby="codeHelp" placeholder="A293049430..." />
                <small id="codeHelp" className="form-text text-muted">Code à usage unique</small>
              </div>
              <div className="form-group mx-auto my-3 w-100">
                <button type="submit" className={`${style['aButton']} btn btn-dark`}>Découvrir votre cadeau</button>
              </div>
            </form>
          </div>
          <div className="col-6 col-lg-3 d-none d-lg-block">
            <img src="/images/coffret-degustation-mousselines-individuelles-n3-PhotoRoom.png" alt="" className={`${style['rotatingImage']} w-100`}/>
          </div>
          <div className={`${style['bloc-content']} col-12 row p-1 m-0 mt-3`}>
            <div className="col-12">A gagner</div>
            <div className="col d-flex justify-content-center">
              <div className={`${style['productToGain']}`}>Product 1</div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className={`${style['productToGain']}`}>Product 1</div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className={`${style['productToGain']}`}>Product 1</div>
            </div>
            <div className="col-12">
              <div>Et bien d'autres !!</div>
              <div>Voir tout</div>
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
