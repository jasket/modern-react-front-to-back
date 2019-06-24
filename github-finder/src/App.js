import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { loading, users } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            setAlert={this.setAlert}
            showClear={users.length > 0}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
