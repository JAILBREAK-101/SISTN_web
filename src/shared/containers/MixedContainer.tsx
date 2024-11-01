import {Outlet} from "react-router-dom";
import {Navbar} from "../components/layout/Navbar";
import {useEffect, useState} from "react";
import {Interceptor} from "../utils/Interceptors";
import {useAppDispatch} from "../store/hooks";
import {getUserAsync} from "../store/features/userSlice";
import {App} from "../utils/app";
import {Footer} from "../components/layout/Footer";

export default function MixedContainer() {
    const dispatch = useAppDispatch()

    const [, setLoading] = useState(true);
    const [, setHasError] = useState(false);

    useEffect(() => {
        Interceptor(dispatch);

        if (App.isLoggedIn()) {
            getUser();
        }
    }, []);

    const getUser = () => {
        setLoading(true)
        setHasError(false)

        dispatch(getUserAsync())
            .unwrap()
            .catch(() => setHasError(true))
            .finally(() => setLoading(false));
    };

    return (
        <main className="app-container">
            <div className="main-container">
                <Navbar/>

                <div className="container mt-5">
                    <Outlet/>
                </div>
            </div>

            <Footer/>
        </main>
    );
}

