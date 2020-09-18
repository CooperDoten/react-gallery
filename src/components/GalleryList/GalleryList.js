import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    console.log(this.props.path);
    return (
     <div>
         <div>
           <img height="200" width="250" src={this.props.path}></img>
         </div>
     </div>
    );
  }
}

export default GalleryList;
