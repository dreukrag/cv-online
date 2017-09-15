import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import { ContentComponentHome, ContentComponentGallery, ContentComponentAbout, ContentComponentContact } from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <ContentComponentHome style={{marginTop: "50px"}}></ContentComponentHome>
        <ContentComponentGallery></ContentComponentGallery>
        <ContentComponentContact></ContentComponentContact>
      </div>
    );
  }
}

export default App;
