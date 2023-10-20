import React from 'react';

const youtubeitem = (props) => {
    return (
        <div className={`youtube-item ${props.className}`}>
        <div className='youtube-image'>
            <img src={props.image} alt=''>

            </img>
        </div>
        <div className='youtube-footer'>
            <img src={props.avatar} alt='' className='youtube-avatar'></img>
            <div className='youtube-info'>
            <h3 className='youtube-title'>{props.title || 'This is example'}</h3>
            <h4 className='youtube-author'>{props.author || 'This is example of author'}</h4>
            </div>
        </div>
        </div>
    );
};

export default youtubeitem;