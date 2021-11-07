import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import  MoviesList  from "../../components/MoviesList/MoviesList";
import  PageHeading  from "../../components/PageHeading/PageHeading";
import PendingView from "../../components/PendingView/PendingView";
import { getTrending } from "../../services/APIService";
// import Button from '../../components/Button/Button';


const MovieDetailsView = lazy(()=> import('../MovieDetailsView/MovieDetailsView'))
const HomePage = () => {
    // const { url } = useRouteMatch();
    const [movies, setMovies] = useState([]);
    // const [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        getTrending().then(movies => {
            setMovies(movies);
            window.scrollTo({
                top: document.documentElement.clientWidth,
                behavior: 'smooth',
            });
        })
    }, []);

//     useEffect(() => {
//     setLoading(true);
//     const fetchSearch = () => {
//       getTrending(page)
//         .then(movies => {
//           setMovies(prev => [...prev, ...movies]
//           );
//           if (page !== 1) {
//             window.scrollTo({
//               top: document.documentElement.scrollHeight,
//               behavior: 'smooth',
//             });
//           }
//         })
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false));
//     }
//     fetchSearch();
//   }, [page]);

//     const handleLoadMoreClick = () => {
//     setLoading(true);
//     setPage(prev => prev + 1);
//     setLoading(false);

// }


    return (
        <>
            <Suspense fallback={<PendingView />}>
                <PageHeading text='Trending today' />
                <Switch>
                    <Route path="/movies/:movieId">
                        <MovieDetailsView />
                        {/* {movies.length > 0 && <Button onClick={handleLoadMoreClick} />} */}
                    </Route>
                    <Route exact path="/" render={() => <MoviesList movies={ movies}/> }/>
                </Switch>
            </Suspense>
            </>
    )
}


export default HomePage;