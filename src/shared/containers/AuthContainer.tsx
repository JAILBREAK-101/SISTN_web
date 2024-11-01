import {Outlet} from "react-router-dom";
import {Footer} from "../components/layout/Footer";

export default function AuthContainer() {
    return (
        <div className="app-container">
            <main className="main-container auth-container">
                <section className="auth-container-body">
                    <Outlet/>
                </section>
            </main>

            <Footer />
        </div>
    );
}
