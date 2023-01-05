import React, { Component } from 'react';
import Input from '@mui/material';

 class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apikey: '',
        images: []
    }
  render() {
    return (
      <div>     
        <Input
            name=" searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}
            placeholder="Search for images"
        />
      </div>
    );
  }
}

export default Search;