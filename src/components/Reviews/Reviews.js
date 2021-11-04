import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/APIService';


export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
    
    useEffect(() => {
        getMovieReviews(movieId)
            .then(setReviews);
    }, [movieId]);

    return (
    <>
        { reviews && reviews.length > 0 ? (
            <ul>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
                </li>
            ))}
            </ul>
            ) : (
                    <p>Sorry, any review was not found</p>
            )}
        </>
    )
};
