
import style from "../styles/Section.module.css"

const Section = ({ children, backgroundImagePath }) => {
    return (
        <section

            className={style.section}
            style={{ backgroundImage: `url(${backgroundImagePath})` }}
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <div className={`${style['bloc-content']} position-relative top-50 start-50 translate-middle`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;