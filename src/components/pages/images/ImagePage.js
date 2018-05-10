/* istanbul ignore file */
import React, { Component } from 'react';

class ImagePage extends Component {
  render() {
    return (
      <div className="page">
        <div className="pageTitle">
          Image Page
        </div>
        <div className="pageContent">
          <p>Hello, this is content of Image Page. Here is a kitten for you.</p>
          <p>
            <img src="https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/tabby-kitten-small.jpg?imwidth=450" alt="Kitten" />
          </p>
        </div>
      </div>
    );
  }
}

export default ImagePage;