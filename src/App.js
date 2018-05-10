import React, { Component } from 'react';
import MainPage from './components/pages/main/MainPage';
import ImagePage from './components/pages/images/ImagePage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 'main',
            isShowSubPage : false,
        };
    }
    
    showSubPage() {
        this.setState({ isShowSubPage : true });
    }
    
    showPage(page) {
        this.setState({ currentPage : page });
    }
    
    render() {
        const showingPage = this.state.currentPage === 'main'
        ?
            <MainPage isShowSubPage={this.state.isShowSubPage} showSubPage={() => this.showSubPage()} />
        :
            <ImagePage />;
        return (
            <div style={{ minHeight : window.innerHeight }}>
                <p className="textCenter">
                    <a href="#main" onClick={() => this.showPage('main')} data-test="mainPageLink">Main Page</a>
                    <a href="#image" onClick={() => this.showPage('image')} data-test="imagePageLink">Image Page</a>
                </p> 
                <div>
                    {showingPage}
                </div>
            </div>
        )
    }
}

export default App;