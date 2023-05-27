import React, { Fragment } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: '/images/Image1.jpg',
        thumbnail: '/images/Image1.jpg',
    },
    {
        original: '/images/Image2.jpg',
        thumbnail: '/images/Image2.jpg',
    },
    {
        original: '/images/Image3.jpg',
        thumbnail: '/images/Image3.jpg',
    },
    {
        original: '/images/Image1.jpg',
        thumbnail: '/images/Image1.jpg',
    },
    {
        original: '/images/Image2.jpg',
        thumbnail: '/images/Image2.jpg',
    },
    {
        original: '/images/Image3.jpg',
        thumbnail: '/images/Image3.jpg',
    }
    // Add more images here
];

const Gallery = () => {
    return (
        <Fragment>
            <div className='py-5'>
                <ImageGallery
                    items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showNav={false}
                    useBrowserFullscreen={false}
                />
            </div>
        </Fragment>
    );
};

export default Gallery;
