import React, {Component} from 'react';

class SearchBar extends Component{
  state ={
    term: ""
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmitChange(this.state.term)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" value={this.state.term} onChange={this.handleChange} className="form-control" placeholder="search for photos"/>
          </div>
        </form>
      </div>

      )
  }
}

export default SearchBar
