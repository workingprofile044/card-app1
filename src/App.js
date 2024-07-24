import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
      <div className="App">
        <Card
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            imgSrc="path/to/image.png"
        >
          <a href="https://example.com" className="btn btn-primary">Go somewhere</a>
        </Card>
        <Card
            title="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content."
        >
          <a href="https://example.com" className="btn btn-primary">Go somewhere</a>
        </Card>
      </div>
  );
}

export default App;
