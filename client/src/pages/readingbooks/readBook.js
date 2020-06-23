import React from "react";


const Readbook = props => {
    console.log(props.location.url)

  return (
    <div className='readigbooks'>
        <iframe src={props.location.url} className='iframeBook' style={{width:'100%', heigh:'500px'}} > </iframe>
      <h3 className='title'  style={{margin:'2%'}} >{props.location.title}</h3>
    </div>
  );
};

export default Readbook;
