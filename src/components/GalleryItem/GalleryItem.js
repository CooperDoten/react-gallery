import React, { Component } from 'react';
import Likes from '../Likes/Likes'
import './GalleryItem.css'

class GalleryItem extends Component {
state={
  isClicked: false
}
  clickImage = () => {
    console.log('clicked this image', this.props.galleryItem.id);
    this.setState({
      isClicked: !this.state.isClicked
    })  
  }

  
  render() {
    //this is what we got ITS AN OBJECT
    console.log(this.props)   

if(this.state.isClicked === false) {
  return (
    <div className="imageDiv">
    {/* 
    take that object 
    set source equal to path provided
    */}
      <img
      src={this.props.galleryItem.path}
       onClick={this.clickImage}/>
      <Likes 
      galleryItem={this.props}
      likeClick={this.props.likeClick}
    
      />
    </div>
);
}
else{
  return(
  <div className="descriptionDiv"
  onClick={this.clickImage}>
    {this.props.galleryItem.description}
  </div>
  )
}




  }
}

export default GalleryItem;
