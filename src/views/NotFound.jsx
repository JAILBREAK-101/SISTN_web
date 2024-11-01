import {Button} from "../shared/components/form/Button";
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <main>
            {/* <Navbar /> */}
            <main className="page-404 row align-items-center justify-content-center">
                <section className="col-md-6">
                    <h1 className="text-5x text-sistn-dark-blue">404</h1>
                    {/* <img src={PageImg} alt="404"/> */}
                    <p className="description">The page you are trying to access does not exist</p>
                    <Button btnClass={"bg-sistn-blue hover:bg-sistn-dark-blue"} loading={false} variant='primary' disabled={false} body={'Go to homepage'} size='large' onClick={() => navigate('/')}/>
                </section>
            </main>
            {/* <Footer /> */}
        </main>
    )
}

export default NotFound;