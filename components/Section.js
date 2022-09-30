
import style from "../styles/Section.module.css"

const Section = ({ children, backgroundImagePath, customClass = null }) => {
    const isImagePath = backgroundImagePath ? { backgroundImage: `url(${backgroundImagePath})` } : { backgroundColor: 'white' }
    return (
        <section
            className={`${style.section} ${customClass}`}
            style={isImagePath}
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center" >
                        <div className={`${style['bloc-content']} position-relative top-50 start-50 translate-middle`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Section;