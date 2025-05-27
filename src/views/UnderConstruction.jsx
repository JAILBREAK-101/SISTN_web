import { Button } from "../shared/components/form/Button";
import { useNavigate } from "react-router-dom";

const UnderConstruction = ({title}) => {

    const navigate = useNavigate();

    return (
        <main className="text-center align-items-center justify-content-center">
             <h1 className="mt-10 text-4xl font-bold text-green-600 mb-4">{title}</h1>
            <section className="col-md-6">
                <p className="mt-10 text-2xl">Page is Under Construction, kindly navigate back home.</p>
                <Button btnClass={"mt-10 bg-sistn-blue hover:bg-sistn-dark-blue"} loading={false} variant="primary" disabled={false} body={'Go to home'} size="large" onClick={() => navigate('/')}/>
            </section>
        </main>
    )
}

export default UnderConstruction;