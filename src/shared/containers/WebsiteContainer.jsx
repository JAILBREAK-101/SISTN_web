import React from "react";
import {Outlet} from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function WebsiteContainer() {
    return (
        <main>
            <main className="app-container">
                <Navbar />
                <div className="main-container">
                    <Outlet/>
                </div>
            </main>
            <Footer />
        </main>
    );
}