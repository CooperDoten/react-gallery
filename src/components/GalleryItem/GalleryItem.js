import React, { Component } from 'react';


class GalleryItem extends Component {
  render() {
    console.log(this.props)
    return (
        <div>
          <img height="200" width="250" src={this.props.path} />
        </div>
    );
  }
}

export default GalleryItem;
