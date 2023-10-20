import React, { useEffect } from 'react';
//https://picsum.photos/v2/list
import axios from "axios";
const GetPhotos = () => {
    return axios.get('https://picsum.photos/v2/list')
    .then((response) => {
        
        console.log(response);
    })

    .catch((error) =>  {
      console.log(error);
    })
}
const Photos = () => {
    //user Effect(callback,[dependencies])
    console.log('outsite')
    useEffect(() => {

        document.title = 'Welcome to useeffect';
        console.log('insite')
    },[]);
    return (
        <div>
            Photos
        </div>
    );
};

export default Photos;