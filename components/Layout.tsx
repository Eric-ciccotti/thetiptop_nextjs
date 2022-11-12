import { PropsWithChildren } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children } : PropsWithChildren) =>
    <div>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </div>

export default Layout;
