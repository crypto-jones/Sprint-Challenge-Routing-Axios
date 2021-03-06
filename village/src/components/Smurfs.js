import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting smurfs: ${error}`);
      });
  }

  getSmurf() {
    console.log('get a smurf!');
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting smurfs: ${error}`);
      });
  }

  render() {
    const self = this;
    return (
      <div className="Smurfs">
        <SmurfForm parentFunc={this.getSmurf.bind(self)} />
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
