import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.text) {
      this.props.setAlert("Please enter something", "light");
      return;
    }

    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  clearUsers = e => {
    this.props.clearUsers();
    this.setState({ text: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.state.text}
            placeholder="Search users..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  showClear: PropTypes.bool.isRequired,
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
