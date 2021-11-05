import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCastByMovie } from '../../services/APIService';
import {castUrl} from '../../services/APIService';
import defaultPhoto from '../../images/image-not-found.jpg';
import s from '../Cast/Cast.module.css';
export default function Cast(){
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        getCastByMovie(movieId)
            .then(result => {
                setCasts(result);
                window.scrollTo({
                    top: document.documentElement.clientWidth,
                    behavior: 'smooth',
                });
            })
            .catch(err => {
                console.log(err.message);
        })
    }, [movieId])
    

    return (
        <>
            {casts && casts.length > 0 ? (
                <ul className={s.list}>
                    {casts.map(({ id, name, character, profile_path }) => (
                        <li className={s.listItem} key={id}>
                            <img src={profile_path ? `${castUrl}${profile_path}` : defaultPhoto} alt={name} />
                            <p>{name}</p>
                            <p>Character: {character }</p>
                        </li>
            ))}
                </ul>
            ) : (
                    <p>Sorry, this information was not found</p>
        )}
        </>
    )
}

Cast.propTypes = {
    movieId: PropTypes.string,
};

