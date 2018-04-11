import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// console.log('webpack recompiling')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// getting the input value
  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => {
      console.log('input test', this.state.value)
    })
  }
 // submitting the input value;
  handleSubmit() {
    var user = {username: this.state.value}
    // success;
    // sending user data; 
    axios.post('/username/login', user)
    .then((response) => {
      var users = response.data;
      // check if username exists in the user array;
      users.forEach((username) => {
        if ( username.name === user.username) {
            console.log(username, this.state.value)
  //////// NEED REDIRECT TO STUDENT VIEW!/////////
          console.log('user is valid')
        } else {
          alert('user is not valid')
        }
      })
    })
    .catch((err) => {
      console.log('PROBLEMS: ' , err);
    })
  }



  render () {
    return (
      <div>
          <h3> Username: </h3>
          <label>
            Name:
           <input type="text" name="username" value={this.state.value} onChange={this.handleChange}/>
          </label>

           <button onClick={this.handleSubmit}>Submit</button>
           <button >Register</button> 
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));