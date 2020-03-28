// src/components/NavBar.js

import React from "react";
import {styled} from "@material-ui/styles"
import { useAuth0 } from "../../react-auth0-spa";
import "./NavBar.css"

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Container>
      {!isAuthenticated && (
          <button
            onClick={() => loginWithRedirect({})}
            class="hvr-sweep-to-right"
          >
            Login
          </button>
      )}

      {isAuthenticated && 
        <FunContainer>
          <div style= {{padding: "2rem"}}>
            <button 
              class="second-sweep-to-right"
              onClick={() => props.history.push({ pathname: "/fun/WHOO"})}
            >
              CLICK ME
            </button>
          </div>
          <div style= {{ padding: "2rem"}}>
            <button 
              onClick={() => logout()}
              class="hvr-sweep-to-right"
            >
              Log out
            </button>
          </div>
          </FunContainer>
        }
    </Container>
  );
};


const Container = styled("div") ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  overflow: "scroll",
  backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
  paddingBottom: "2%"
})

const FunContainer = styled("div") ({
  display: "flex",
  flexDirection: "column",
})

export default NavBar;