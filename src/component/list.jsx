import React from 'react';
import Items from './items'
const Lists = ({videoData,videolist}) =>{
    // console.log(props.videolist);
    if(!videolist){return null}
    return(
        videolist.map((items)=><Items  
        video={items}  
     key={items.id.videoId} 
      VideoItems  ={videoData}/>))

}; 

export default Lists;
 