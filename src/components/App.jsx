import React, {Component} from 'react';

import SearchBar from './SearchBar';
import axios from 'axios';

const KEY = '95d6d4fc153470f7f5d9361417bb8f07e5da30dd2a57f413b112f394618505f1'

class App extends Component{
  state = {
    photos: []
  }

  handleSubmitChange = term => {
    axios
    .get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${term}&client_id=${KEY}`)
    .then(response => this.setState({photos: response.data.results}))
  };

  render(){
    return(
      <div>
        <h1>Hello Photo</h1>
        <SearchBar onSubmitChange = {this.handleSubmitChange} />
      </div>
      )
  }
};

export default App
