import { useHistory, useLocation } from 'react-router';
import s from './GoBack.module.css';

export const GoBack = () => {
    const history = useHistory();
    const location = useLocation();

    const handleGoBack = () => {
        history.push(location?.state?.from ?? '/');
    };
    return (
        <>
            <button className={s.Button} type="button" onClick={handleGoBack}>
                Go back
            </button>
        </>
    );
};