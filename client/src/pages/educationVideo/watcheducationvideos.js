import React from "react";
import Reactplayer from 'react-player'


const WatchMovie = props => {
  return (
    <div className='watchEducationVideo'>
      <Reactplayer className='video'  url={props.location.url} controls={true}  />
      <h3 className='title'  style={{margin:'2%'}} >{props.location.title}</h3>
    </div>
  );
};

export default WatchMovie;

