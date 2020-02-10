import React, { Component } from 'react'

class HavePlayed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ borderWidth: "10px", borderStyle: "ridge", height: "100vh", width: "615px", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "rgb(0, 255, 0, .50)" }}>
                <h3 style={{ color: "black", fontSize: "35px", background: "green", height: "60px", width: "400px", display: "flex", justifyContent: "space-around", fontWeight: "bolder", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484" }}>Completed</h3>
                {this.props.havePlayed.map(element => {
                    return <div style={{ background: "green", height: "40px", width: "500px", display: "flex", justifyContent: "space-evenly", fontWeight: "bolder", fontSize: "20px", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484", marginTop: "10px" }}>{element.name}
                        <button className={"styleButton"} onClick={() => {
                            this.props.deleteStatus(element.id)
                            this.props.parseArray(this.props.allGames)
                        }} > {'<<<'} </button>
                        <button className={"styleButton"} onClick={() => this.props.deleteGame(element.id)} >Delete</button>
                    </div>

                })}
            </div>
        )
    }
}

export default HavePlayed