import React, { Component } from 'react';
import SubPage from './SubPage';

class MainPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="pageTitle">
          Main Page
        </div>
        <div className="pageContent">
          <li>
            <a href="https://www.google.com.vn/" target="_blank" rel="noopener noreferrer">Go to Google</a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Go to Twitter</a>
          </li>
          <li>
            <a href="#sub" onClick={() => this.props.showSubPage()} data-test="showSubpageLink">Show Subpage</a>
          </li>
          {
            this.props.isShowSubPage
            ?
              <SubPage />
            :
              null
          }
        </div>
      </div>
    );
  }
}

export default MainPage;
