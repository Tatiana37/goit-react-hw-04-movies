import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastByMovie } from '../../services/APIService';
import {castUrl} from '../../services/APIService';
import defaultPhoto from '../../images/image-not-found.jpg';

export default function Cast(){
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        getCastByMovie(movieId)
            .then(result => {
                setCasts(result);
            })
            .catch(err => {
                console.log(err.message);
        })
    }, [movieId])
    

    return (
        <>
            {casts && casts.length > 0 ? (
                <ul>
                    {casts.map(({ id, name, character, profile_path }) => (
                        <li key={id}>
                            <img src={profile_path ? `${castUrl}${profile_path}` : defaultPhoto} alt={name} width="92" />
                            <p>{name}</p>
                            <p>Character: {character }</p>
                        </li>
            ))}
                </ul>
            ) : (
                    <p>Sorry, information was not found</p>
        )}
        </>
    )
}

