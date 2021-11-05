import React, {useState, useEffect, lazy, Suspense} from "react";
import { Route, NavLink, useLocation,  useParams, useRouteMatch } from "react-router-dom";
import { getMovieById } from "../../services/APIService";
import  PendingView  from '../../components/PendingView/PendingView';
import ErrorView from '../../components/ErrorView/ErrorView';
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";
import { GoBack } from "../../components/GoBack/GoBack";
import s from '../MovieDetailsView/MovieDetailsView.module.css';


const Cast = lazy(()=> import('../../components/Cast/Cast'/* webpackChunkName: "Cast" */));
const Reviews = lazy(()=> import ('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */))

 const MovieDetailsView = () => {

    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    // const history = useHistory();
    const location = useLocation();

    const [movie, setMovie] = useState(null);
    const [isVisibleCast, setIsVisibleCast] = useState(false);
    const [isVisibleReviews, setIsVisibleReviews]= useState(false);


    useEffect(() => {
        getMovieById(movieId)
            .then(setMovie)
            .catch(err => {
                console.log(err.message)
            });
    }, [movieId]);

    const visibleCast = ()=>{
        if(isVisibleReviews === true){
            setIsVisibleReviews(false);
        }
        setIsVisibleCast(true);
    };

    const visibleReviews=()=>{
        if(isVisibleCast === true){
            setIsVisibleCast(false);
        }
        setIsVisibleReviews(true);
    };

    //  const handleGoBack =()=>{
    //     history.push(location?.state?.from ?? '/');
    // };




    return (
        <>
            {/* <button type="button" onClick={handleGoBack}>Go back</button> */}
            <GoBack />
            {movie ? (
                <>
                    <MovieInfo movie={movie} />

                    <div className={s.navBox}>
                    <ul className={s.navList}>
                    <li>
                                <NavLink className={s.navLink} activeClassName={s.navActive}
                                    to={{
                        pathname: `${url}/cast`,
                        state: { from: location?.state?.from ?? '/movie' },
                            }} onClick={visibleCast}>Cast</NavLink>
                    </li>
                    <li>
                                <NavLink className={s.navLink} activeClassName={s.navActive}
                                    to={{
                        pathname: `${url}/reviews`,
                        state: { from: location?.state?.from ?? '/movie' },
                        }} onClick={visibleReviews}>Reviews</NavLink>
                    </li>
                        </ul>
                    </div>
                    <Suspense fallback={<PendingView />}>
                        <Route path={`${path}/cast`}>
                            {movie && visibleCast && <Cast />}
                        </Route>

                        <Route path={`${path}/reviews`}>
                            {movie && visibleReviews && <Reviews />}
                        </Route>
                    </Suspense>
                </>
            ) : (
                    <ErrorView />
            )}
        </>
    )
}


export default MovieDetailsView;