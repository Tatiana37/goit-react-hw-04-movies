import PropTypes from 'prop-types';
import { posterUrl } from '../../services/APIService';
import defaultPoster from '../../images/movie-poster.jpg';


export const MovieInfo = ({movie}) => {
    return (
        <>
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <img src={movie.poster_path ? `${posterUrl}${movie.poster_path}` : defaultPoster} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            <p>{movie.release_date}</p>
            <p>{movie.status}</p>
        
        </>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
};
