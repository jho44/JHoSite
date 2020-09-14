import React from "react";
import TopBar from "../MultiplePages/TopBar";

import BookShelf from "./BookShelf";

const FunPage = (props) => {
  return (
    <div>
      <TopBar history={props.history} />
      <h1>Welcome to Fun!</h1>
      {/* <BookShelf/> */}
    </div>
  );
};

export default FunPage;
