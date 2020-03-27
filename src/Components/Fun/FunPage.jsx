import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import TopBar from "../MultiplePages/TopBar"
import Loading from "./Loading"

import BookShelf from "./BookShelf"

const FunPage = (props) => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>
  }

  return (
    <Fragment>
        <TopBar history={props.history}/>
        <BookShelf/>
    </Fragment>
  );
};

export default FunPage;
