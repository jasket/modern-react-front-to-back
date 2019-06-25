import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      setAlert("Please enter something", "light");
      return;
    }

    searchUsers(text);
    setText("");
  };

  const onClearUsers = e => {
    clearUsers();
    setText("");
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          onChange={onChange}
          value={text}
          placeholder="Search users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={onClearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  showClear: PropTypes.bool.isRequired,
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
