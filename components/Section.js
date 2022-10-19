
import style from "../styles/Section.module.css"

const Section = ({ children, backgroundImagePath, customClass = "d-flex justify-content-center text-center align-items-center" }) => {
    const isImagePath = backgroundImagePath ? { backgroundImage: `url(${backgroundImagePath})` } : { backgroundColor: 'white' }
    return (
        <section
            className={`${style.section} ${customClass}`}
            style={isImagePath}
        >
            <div className="container">
                <div className={`${style['bloc-content']}`}>
                    {children}
                </div>
            </div>
        </section >
    );
};

export default Section;