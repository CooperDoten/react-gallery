import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'
class GalleryList extends Component {

  render() {
    //this is what we got! its an array of objects
    console.log(this.props);
    return (
     <div className="GalleryDiv">
        {this.props.galleryList.map(galleryItem =>
          <GalleryItem 
          //loop over props.galleryList array
          //add distinct key
            key={galleryItem.id}
            //tell galleryItem it has access to an object
            galleryItem={galleryItem}
            likeClick={this.props.likeClick}
          />
        )}
     </div>
    );
  }
}

export default GalleryList;
