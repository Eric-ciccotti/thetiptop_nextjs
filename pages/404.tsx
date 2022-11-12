import Section from "../components/Section";

export default function Custom404() {
    return (<Section backgroundImagePath={'/images/ugh.png'}>
        <h1>Page introuvable</h1>
        <h4 className="fw-light">La page recherchée n&apos;existe pas.</h4>
    </Section>)
}