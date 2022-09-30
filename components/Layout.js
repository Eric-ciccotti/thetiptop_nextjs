import Footer from "./Footer";
import NavBar from "./NavBar";



const Layout = ({ children }) =>
    <div>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </div>

export default Layout;
