import React, {useState, useEffect, lazy, Suspense} from "react";
import { Route, NavLink, useLocation, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { getMovieById } from "../../services/APIService";
import  PendingView  from '../../components/PendingView/PendingView';
import ErrorView from '../../components/ErrorView/ErrorView';
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";


const Cast = lazy(()=> import('../../components/Cast/Cast'/* webpackChunkName: "Cast" */));
const Reviews = lazy(()=> import ('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */))

 const MovieDetailsView = () => {

    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const history = useHistory();
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

    const goBack =()=>{
        history.push(location?.state?.from ?? '/');
    };




    return (
        <>
        <button type="button" onClick={goBack}>Go back</button>
            {movie ? (
                <>
                    <MovieInfo movie={movie} />
                    
                <ul>
                    <li>
                        <NavLink  to={{
                        pathname: `${url}/cast`,
                        state: { from: location?.state?.from ?? '/movie' },
                            }} onClick={visibleCast}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink  to={{
                        pathname: `${url}/reviews`,
                        state: { from: location?.state?.from ?? '/movie' },
                        }} onClick={visibleReviews}>Reviews</NavLink>
                    </li>
                </ul>
                    <hr />
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