// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate software developer from San Francisco.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Frontend Developer',
      },
      shows: false,
      timeSinceMount: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>React Class-Based Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile" style={{ marginTop: '20px' }}>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <h3>{person.profession}</h3>
            <p>{person.bio}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
