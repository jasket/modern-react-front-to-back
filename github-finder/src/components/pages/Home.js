import React, { Fragment } from "react";
import Users from "../../components/users/Users";
import Search from "../../components/users/Search";

function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}

export default Home;
