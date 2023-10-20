import React from 'react';
import YoutubeItem from './YoutubeItem'
import { youtubeData } from '../../data';
const YoutubeList = (props) => {

    return (
        <div className='youtube-list'>
        {/* {props.children} */}
        {youtubeData.map((item, index)  =>  {
            return(
                <YoutubeItem
                key = {item.id}
                image = {item.image}
                title = {item.title}
                avatar = {item.avatar || item.image}
                author = {item.author}
                className = {index === 1 ? 'abc':''}>
                </YoutubeItem>
            );
        })},
        </div>
    );
};

export default YoutubeList;