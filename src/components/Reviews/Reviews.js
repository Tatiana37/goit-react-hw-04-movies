import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/APIService';
import s from '../Reviews/Reviews.module.css';


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
                        <div className={s.reviewBox}>
                            <h2 className={s.title }>{author}</h2>
                            <p className={s.content}>{content}</p>
                    </div>
                </li>
            ))}
            </ul>
            ) : (
                    <p>Sorry, any review was not found</p>
            )}
        </>
    )
};
