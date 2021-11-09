import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import s from '../MoviesList/MoviesList.module.css';
import { MovieItem } from "../MovieItem/MovieItem";


const MoviesList = ({movies}) => {
    const location = useLocation();
    // console.log(location)
    // const search = new URLSearchParams(location.search).get('query') ?? '';
    // console.log(search)
    return (
        <div>
            <ul className={s.list}>
                {movies.map(({ id, title, name, poster_path, release_date, vote_average}) => (
                    <li key={ id} className={s.listItem}>
                    <Link key={id} to={{
                        pathname: `/movie/${id}`,
                        state: {
                            from: location,
                        }
                    }}>
                            <MovieItem title={title} name={name} poster={poster_path} rating={vote_average} release={release_date}/>
                    </Link>
                        </li>
                ))}
            </ul>
        
        </div>
    )
}

MoviesList.propTypes = {
    movie: PropTypes.arrayOf(PropTypes.shape),
}


export default MoviesList;