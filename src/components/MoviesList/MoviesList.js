import { Link, useLocation } from "react-router-dom";
import { posterUrl } from "../../services/APIService";
import defaultPoster from '../../images/movie-poster.jpg';
import PropTypes from 'prop-types';

 const MoviesList = ({movies}) => {
    const location = useLocation();

    return (
        <>
            <ul>
                {movies.map(movie => (
                    <Link key={movie.id} to={{
                        pathname: `/movie/${movie.id}`,
                        state: {
                            from: location,
                        }
                    }}>
                        <li><h2>{movie.title || movie.name}</h2>
                            <img src={movie.poster_path ? `${posterUrl}${movie.poster_path}` : defaultPoster} alt={movie.title} width="200" />
                            <p>Release date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average }</p>
                        </li>
                    </Link>
                ))}
            </ul>
        
        </>
    )
}

MoviesList.propTypes = {
    movie: PropTypes.arrayOf(PropTypes.shape),
}


export default MoviesList;