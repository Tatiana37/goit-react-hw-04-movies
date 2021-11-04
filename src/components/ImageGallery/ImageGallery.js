import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

export default function ImageGallery({pictures, onModalOpen}){
    return (
        <ul className={s.ImageGallery} >
        {pictures.map(picture=> (
            <ImageGalleryItem picture={picture} onModalOpen={onModalOpen} key={picture.id}/>
        ))
        }
        </ul>
    )
}

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onModalOpen: PropTypes.func,
}
