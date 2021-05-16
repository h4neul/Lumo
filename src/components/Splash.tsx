import React from 'react';
import { Nav } from "react-bootstrap";

export default class HomePage extends React.Component {
  render() {

    return (
      <div>
        <header className="App-header">
          <img src="/Artwork.gif" className="App-logo" alt="logo" />
          
            (Add in the name of the website and change the image)
        
          <Nav.Link href="/home" title="Home" className="App-link">
            Press this link to go to the homepage
        </Nav.Link>
        </header>
      </div>
    );
  }
}