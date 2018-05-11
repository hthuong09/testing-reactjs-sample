import React, { Component } from 'react';
// import logo from './logo.svg';
// import './MainPage.css';

class SubPage extends Component {
  neverEverCalledFunction() {
      if(1 === 2) {
          console.log('Oh yay. Senpai notices me!.');
      }
  }
  
  render() {
    return (
        <div className="subPage">
            <p>HELLO IT'S MEE</p>
            <img src="https://i.imgur.com/brSjbwj.png" alt="It's me" />
        </div>
    );
  }
}

export default SubPage;
