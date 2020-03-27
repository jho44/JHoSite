import React, {Component} from "react"
import TopBar from "../MultiplePages/TopBar"
import axios from "axios"
import URL from "../../../public/url"

export default class TestPage extends Component {
    
    constructor() {
        super()

        this.state = {
            stuff: [],
            response: false
        }
        this.dataFiller = this.dataFiller.bind(this)
    }

    componentWillMount() {
        axios.get(URL + ":4000/items")
        .then((reply) => {
            console.log(reply)
            this.setState({ response: reply})
            this.dataFiller(reply)
        })
        .catch(err => { console.log(err)})
    }

    dataFiller(results) {
        let arr = []
        results.data.forEach((el) => {
            let elem = {}
            elem.name = el.name
            elem.genre = el.genre
            arr.push(elem)
        })
        this.setState({ stuff: arr, response: false })
    }

    poodiddy(response) {
        this.dataFiller(JSON.parse(response))
    }

    render() {
        const {stuff, response} = this.state;
        
        if (response) {
            this.poodiddy(response);
        }
        return (
            <div>
                <div style={{height: "100vh"}}>uwu</div>
                {
                    stuff.forEach((el) => {
                        return (
                            <div>
                                <p>came in here</p>
                                <p>{el.name}    {el.genre}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}