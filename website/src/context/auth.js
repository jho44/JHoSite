import React, { createContext, useContext, Component } from "react";
import axios from "axios";
export const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      authTokens: JSON.parse(localStorage.getItem("tokens")),
      isError: false,
      sourceBoi: axios.CancelToken.source(),
    };
    this.getLoginStatus = this.getLoginStatus.bind(this);
    this.setAuthTokens = this.setAuthTokens.bind(this);
    this.postLogin = this.postLogin.bind(this);
    this.setIsError = this.setIsError.bind(this);
  }

  componentDidMount() {
    // const CancelToken = axios.CancelToken;
    // this.source = CancelToken.source();
    // console.log(this.source);
  }

  componentWillUnmount() {
    console.log("unmounted");
    this.state.sourceBoi.cancel();
  }

  async getLoginStatus() {
    console.log("came in getlogin");
    if (this.state.authTokens == null || this.state.authTokens === "") {
      return false;
    }
    try {
      console.log("came in try");
      const { data } = await axios({
        method: "get",
        url: "https://offtheclockjho.com/api/auth/verify/",
        // url: "http://localhost:5000/auth/verify",
        headers: {
          "token": this.state.authTokens,
        },
        cancelToken: this.state.sourceBoi.token,
      });
      console.log("data: ", data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  setAuthTokens(data) {
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState(() => {
      return { authTokens: data };
    });
  }

  setIsError(boolVal) {
    this.setState(() => {
      return { isError: boolVal };
    });
  }

  async postLogin(userName, password) {
    try {
      const axiosRes = await axios({
        method: "get",
        url: "https://offtheclockjho.com/api/auth/login/",
        // url: "http://localhost:5000/auth/login",
        headers: {
          "Content-Type": "application/json",
          "name": userName,
          "password": password,
        },
        cancelToken: this.state.sourceBoi.token,
      });

      const data = axiosRes.data;
      if (axiosRes.status === 200) {
        this.setAuthTokens(data);
        this.setIsError(false);
      } else {
        this.setIsError(true);
      }
    } catch (e) {
      if (!axios.isCancel()) {
        this.setIsError(this);
      } else {
        console.log("axios canceled");
      }
    }
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          getLoginStatus: this.getLoginStatus,
          setAuthTokens: this.setAuthTokens,
          setIsError: this.setIsError,
          postLogin: this.postLogin,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, useAuth };
