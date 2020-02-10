import React, { Component } from 'react'

class HavePlayed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3 style={{ color: "white", fontSize: "40px" }}>Completed</h3>
                {this.props.havePlayed.map(element => {
                    return <div style={{ background: "green", height: "40px", width: "400px", display: "flex", justifyContent: "space-around", fontWeight: "bolder", fontSize: "20px", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484"}}>{element.name}
                        <button className={"styleButton"} onClick={() => {
                            this.props.deleteStatus(element.id)
                            this.props.parseArray(this.props.allGames)
                        }} > {'<--'} </button>
                        <button className={"styleButton"} onClick={() => this.props.deleteGame(element.id)} >Delete</button>
                    </div>

                })}
            </div>
        )
    }
}

export default HavePlayed