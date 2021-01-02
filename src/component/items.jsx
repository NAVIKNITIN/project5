import React from 'react';
import Videoplayer from './videoplayer';

const Items =({video,VideoItems})=>{
    // console.log(videoplayer);

    if(!video){return  <h3>Loading........</h3>}
    
    return(
        <React.Fragment>
            <div className="card" style={{width:'400px'}}
            
             onClick={() => VideoItems(video)}>

                  <img className="card-img-top" 
                  src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.thumbnails.title}   style={{width:'100%'}}/>
                  <div className="card-body">
                    <h4 className="card-title">
                      {video.snippet.title}
                      </h4>
                    <p className="card-text">{video.snippet.desciption}</p>
                  </div>
            </div>   
        </React.Fragment>
    )
};
export default Items;
