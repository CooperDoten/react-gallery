import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';


class App extends Component {
//add state
 state = {
   galleryList: [],
 } 
 //put GET into component did mount to 
 //make it accessible 
componentDidMount() {
  this.getPics();
}
//getPics to house axios GET
getPics = () => {
//GET route for gallery
  axios({
    method: 'GET',
    url: '/gallery'
  }).then(response => {
    console.log(`GET /gallery returned`, response);
    //set our state
    this.setState({
      galleryList: response.data
    })
  }).catch(err => {
    console.err(`GET got an err`, err);
  });
}

likeClick = (imageId) => {

  axios({
    method: 'PUT',
    url: `/gallery/like/${imageId}`
  }).then(response => {
    console.log(`GET /gallery returned`, response);
    this.getPics()
  }).catch(err => {
    console.err(`GET got an err`, err);
  });


}


  render() {
    //checking state of galleryList
    console.log(this.state.galleryList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList 
        //pass the galleryList state to 
        //GalleryList component via props
          galleryList= 
          {this.state.galleryList}
          likeClick = {this.likeClick}
        />
      </div>
    );
  }
}

export default App;
