import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import PendingView from '../PageHeading/PageHeading';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage')  /* webpackChunkName: "HomePage" */);
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage')  /* webpackChunkName: "MoviesPage" */);
const MovieDetailsView = lazy(() => import('../../pages/MovieDetailsView/MovieDetailsView')  /* webpackChunkName: "MovieDetailsView" */);
const ErrorView = lazy(() => import('../ErrorView/ErrorView')  /* webpackChunkName: "ErrorView" */);

function App() {


  return (
    
        <Container>
      <ToastContainer />
      <Suspense fallback={<PendingView />}>
          <AppBar />

          <Switch>
            <Route path="/" exact>
            <HomePage/>
            </Route>
            
            <Route path="/movies" exact>
            <MoviesPage />
            </Route>

            <Route path="/movie/:movieId">
              <MovieDetailsView />
          </Route>
          
          <Route path="*">
            <ErrorView />
            </Route>

            <Route>
              <Redirect to="/"/>.
            </Route>
          </Switch>
          </Suspense>
      </Container>
  
  )
  }

export default App;
