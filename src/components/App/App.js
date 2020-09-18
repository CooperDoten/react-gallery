import React, { Component } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';


class App extends Component {

 state = {
   galleryList: [],
   galleryItem: {}
 } 
componentDidMount() {
  this.getPics();
}
getPics = () => {
  axios({
    method: 'GET',
    url: '/gallery'
  }).then(response => {
    console.log(`GET /gallery returned`, response);
    this.setState({
      galleryList: response.data
    })
  }).catch(err => {
    console.err(`GET got an err`, err);
  });
}


  render() {
    console.log(this.state.galleryList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {this.state.galleryList.map(galleryItem =>
        <GalleryList 
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

export default App;
