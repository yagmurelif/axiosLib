import React, {Component} from "react";
import axios from "axios";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.names[0]}:{this.props.usernames[0]} <br />
        {this.props.names[1]}:{this.props.usernames[1]} <br />
        {this.props.names[2]}:{this.props.usernames[2]} <br />
        {this.props.names[3]}:{this.props.usernames[3]} <br />
        {this.props.names[4]}:{this.props.usernames[4]} <br />
        {this.props.names[5]}:{this.props.usernames[5]} <br />
        {this.props.names[6]}:{this.props.usernames[6]} <br />
        {this.props.names[7]}:{this.props.usernames[7]} <br />
        {this.props.names[8]}:{this.props.usernames[8]} <br />
        {this.props.names[9]}:{this.props.usernames[9]} <br />
      </div>
    );
  }
}


export class Loader extends React.Component {
  render() {
    return(
      <div>
        Loading...
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.namelist = [];
    this.usernamelist = [];

    this.state = {
      names:[],
      usernames:[],
      isLoaded:false,
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            for (let i = 0; i < 10;i++) {

              this.namelist.push(response.data[i].name);
              this.usernamelist.push(response.data[i].username);

            }
            
            console.log(response.data);

            this.setState({
              isLoaded:true,
            });
            
            this.setState({
              names:this.namelist.slice(10),
              usernames:this.usernamelist.slice(10),
            });
        })
        .catch(error => {
            console.log(error);
        });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoaded ? <List names={this.state.names} usernames={this.state.usernames}/> : <Loader />}
      </div>
    );
  }
}

export default App;

