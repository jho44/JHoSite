import React from "react"
import TopBar from "../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"

import NavBar from "./NavBar"
import { useAuth0 } from "../../react-auth0-spa"

const FunPage = (props) => {
    const {loading} = useAuth0()

    if (loading) {
        return <Container>Loading...</Container>
    }

    return (
        <div>
            <TopBar history={props.history}/>
            <NavBar/>
        </div>
    )

}

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    overflow: "scroll",
    backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
    fontFamily: "Abel",
    fontSize: "2rem"
  })

export default FunPage