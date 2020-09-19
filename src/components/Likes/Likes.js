import React, { Component } from 'react';
import './Likes.css'
class Likes extends Component {
likeClick = () => {
    
}
    render() {
        console.log(this.props.galleryItem.galleryItem.path);
        return(
            <div className="likesDiv">
                <div> 
                    <button onClick={() => this.props.likeClick(this.props.galleryItem.galleryItem.id)}>Love it!</button>
                Likes: 
                    <span>
                        {this.props.galleryItem.galleryItem.likes}
                    </span>
                </div>
            </div>
        )
    }

}

export default Likes