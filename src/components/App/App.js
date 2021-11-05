import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import ErrorView from '../ErrorView/ErrorView';
import  MovieDetailsView  from '../../pages/MovieDetailsView/MovieDetailsView';



function App() {
 

      return (
        <Container>
          <ToastContainer />
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
            
          <Route >
            <ErrorView />
            </Route>

            <Route>
              <Redirect to="/error"/>.
            </Route>
          </Switch>
          
    </Container>
  )
  }

export default App;
