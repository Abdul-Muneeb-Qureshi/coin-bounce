import Styles  from './Error.module.css'
import { Link } from 'react-router-dom';

function Error() {
    return (

        <div className={Styles.errorWraper}>
            <div className={Styles.errorHeader}>Error 404 - Page not found </div>
            <div className={Styles.errorBody}>
                Go back to
                <Link to="/" className={Styles.homeLink}>Home</Link>

            </div>
        </div>

    );
}

export default Error;