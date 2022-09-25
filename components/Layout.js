import Footer from "./Footer";
import NavBar from "./NavBar";



const Layout = ({ children }) =>
    <div>
        <NavBar />
        <main>
            <section>{children}</section>
        </main>
        <Footer />
    </div>

export default Layout;
