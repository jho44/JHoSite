import React from "react"
import {styled} from "@material-ui/styles"

const Loading = () => {
    return (
        <Container>
            Loading...
        </Container>
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

export default Loading
