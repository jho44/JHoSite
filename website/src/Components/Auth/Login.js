import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import TopBar from "../MultiplePages/TopBar";
import { Card, Form, Input, Button, Error } from "./AuthForm";
import { useAuth } from "../../context/auth";
import { AuthConsumer } from "../../context/auth";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [amIloggedIn, setLoginStatus] = useState(false);
  // const { setAuthTokens } = useAuth();
  const { getLoginStatus, isError } = useAuth();

  const referer = props.location.state.referer || "/";

  useEffect(() => {
    return function cleanup() {
      console.log("cleanup");
    };
  });
  getLoginStatus().then((res) => setLoginStatus(res));

  if (amIloggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <div>
      <TopBar history={props.history} />
      <div
        style={{
          height: "70vh",
          paddingTop: "20%",
          width: "100%",
          backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "#5A69C4",
            paddingBottom: "2rem",
          }}
        >
          <h2>A Work in Progress with MongoDB</h2>
        </div>
        <Card>
          <Form>
            <Input
              type="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="username"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
            />
            <AuthConsumer>
              {(value) => (
                <Button
                  onClick={() => {
                    value.postLogin(userName, password);
                  }}
                >
                  Sign In
                </Button>
              )}
            </AuthConsumer>
          </Form>
          {isError && (
            <Error>The username or password provided were incorrect!</Error>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Login;
