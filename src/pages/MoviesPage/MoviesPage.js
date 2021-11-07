import React, { useState, useEffect, lazy, Suspense } from "react";
import {
    // Switch,
    Route,
    useRouteMatch,
    // useHistory,
    // useLocation,
} from 'react-router-dom';
import { getSearchMovies } from '../../services/APIService';
import  PageHeading  from "../../components/PageHeading/PageHeading";
import Searchbar from "../../components/SearchBar/SearchBar";
// import queryString from 'query-string';
import PendingView from "../../components/PendingView/PendingView";


const MovieDetailsView = lazy(() => import('../MovieDetailsView/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */));
const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList' /* webpackChunkName: "MoviesList" */));


const MoviesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    // const history = useHistory();
    // const location = useLocation();
    const { path } = useRouteMatch();

        // useEffect(() => {
        // const movie = queryString.parse(location.search).query;
        // if (!movie) {
        //     setMovies([]);
        // }
        // if (movie) {
        //     getSearchMovies(movie).then(movies =>  setMovies(prev =>[...prev, ...movies]));
        //     setSearchQuery('');
        // }
        // }, [location.search])
    
    useEffect(() => {
        if (searchQuery === '') {
            return
        }

        getSearchMovies(searchQuery).then(movies => {
            setMovies(prev=> [...prev, ...movies]);
        }).catch(err => console.log(err))
    },[searchQuery])
    
    
    const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
        // setMovies([]);
        // history.push({ ...location, search: `?searchValue=${searchQuery}` });
    // setLoading(true);
    }


    // const handleSearchSubmit = e => {
    //     e.preventDefault();
    //     if (searchQuery.trim() === '') {
    //         toast.error('Please, enter the search query!', {
    //             position: toast.POSITION.TOP_LEFT,
    //             theme: "colored",
    //         })
    //         return;
    //     }
    //     history.push({ ...location, search: `?searchValue=${searchQuery}` });
    //     setSearchQuery('');
    // }

    // const handleSearchChange = e => {
    //     setSearchQuery(e.target.value.toLowerCase())

    // }
    
    
    return (
        <>
            <Suspense fallback={<PendingView />}>
                
                <PageHeading text='Search your movie' />
                <Route path={`${path}/:movieId`}>
                    <MovieDetailsView />
                </Route>
                <Route exact path="/movies">
                    <Searchbar onSubmit={handleFormSubmit}/>
                    <MoviesList movies={movies}/>
                </Route>
            </Suspense>
            </>
    )
}

export default MoviesPage;