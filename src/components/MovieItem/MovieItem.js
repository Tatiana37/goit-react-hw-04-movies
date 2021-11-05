import PropTypes from 'prop-types';
import { posterUrl } from "../../services/APIService";
import defaultPoster from '../../images/movie-poster.jpg';
import s from '../MovieItem/MovieItem.module.css';

export const MovieItem = ({ title, name, poster, release, rating }) => {
    return (
        <div>
            <img className={s.image} src={poster ? `${posterUrl}${poster}` : defaultPoster} alt={title}  />
            <p className={s.title}>{title || name}</p>
            <p className={s.release}>Release date: {release}</p>
            <p className={s.rating}>Rating: {rating}</p>
        </div>
    )
}

MovieItem.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    release: PropTypes.string,
    rating: PropTypes.number,
}