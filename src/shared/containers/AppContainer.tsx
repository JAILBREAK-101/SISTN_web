import {Outlet} from "react-router-dom";
import {Navbar} from "../components/layout/Navbar";
import {useEffect, useState} from "react";
import {Interceptor} from "../utils/Interceptors";
import {useAppDispatch} from "../store/hooks";
import {getUserAsync} from "../store/features/userSlice";
import {Loader} from "../components/loaders/Loader";
import {LoadingError} from "../components/loaders/LoadingError";
import {Footer} from "../components/layout/Footer";

export default function AppContainer() {
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        Interceptor(dispatch);

        getUser();
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
            {loading && <><Loader display="GetVoted"/></>}
            {hasError && <><LoadingError display="There was a problem loading your account!" showLogout={true}/></>}

            {(!loading && !hasError) &&
                <>
                    <div className="main-container">
                        <Navbar/>

                        <div className="container mt-5">
                            <Outlet/>
                        </div>
                    </div>

                    <Footer />
                </>
            }
        </main>
    );
}

