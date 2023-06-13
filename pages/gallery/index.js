import React, { Fragment } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: '/images/Image1.webp',
        thumbnail: '/images/Image1.webp',
    },
    {
        original: '/images/Image2.webp',
        thumbnail: '/images/Image2.webp',
    },
    {
        original: '/images/Image3.webp',
        thumbnail: '/images/Image3.webp',
    },
    {
        original: '/images/Image1.webp',
        thumbnail: '/images/Image1.webp',
    },
    {
        original: '/images/Image2.webp',
        thumbnail: '/images/Image2.webp',
    },
    {
        original: '/images/Image3.webp',
        thumbnail: '/images/Image3.webp',
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
