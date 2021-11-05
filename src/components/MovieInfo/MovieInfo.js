import PropTypes from 'prop-types';
import { posterUrl } from '../../services/APIService';
import defaultPoster from '../../images/movie-poster.jpg';
import s from '../MovieInfo/MovieInfo.module.css';


export const MovieInfo = ({movie}) => {
    return (
        <>
            <h2 className={s.title}>{movie.title}</h2>
        <div className={s.movieBox}>
            <div>
                <img src={movie.poster_path ? `${posterUrl}${movie.poster_path}` : defaultPoster} alt={movie.title}  width="450"/>
            <p>{movie.tagline}</p>
            </div>
            <div className={s.descBox}>
            <p className={s.paragraph}>{movie.overview}</p>
            <p className={s.paragraph}>Genre: {movie.genres.map(genre => genre.name).join(' ')}</p>
                <p className={s.paragraph}>Release date: {movie.release_date}</p>
                </div>
            </div>
        </>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
};
