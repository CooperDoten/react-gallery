import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'
class GalleryList extends Component {
  state = {
    galleryList: []
  }
  

  render() {
    console.log(this.props);
    return (
     <div>
            {this.props.galleryList.map(galleryItem =>
        <GalleryItem 
          key={galleryItem.id}
          id={galleryItem.id}
          path={galleryItem.path}
          description={galleryItem.description}
          likes={galleryItem.likes}
        />
        )}
     </div>
    );
  }
}

export default GalleryList;
