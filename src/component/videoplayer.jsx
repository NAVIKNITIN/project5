import React from 'react';
const Videoplayer = ({player})=>{
    if(!player) {return <h4>Loading.......</h4>}
    let url=`https://www.youtube.com/embed/${player.id.videoId}`;
    return(
        <React.Fragment>
            <iframe width="727" height="409" src= {url} 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture ; fullscreen" 
                ></iframe>
             
        </React.Fragment>
    )
};
export default Videoplayer;