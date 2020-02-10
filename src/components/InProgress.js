import React, { Component } from 'react'

class InProgress extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ borderWidth: "10px", borderStyle: "ridge", height: "100vh", width: "615px", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "rgb(255, 255, 0, .50)"}}>
                <h3 style={{ color: "black", fontSize: "35px", background: "yellow", height: "60px", width: "400px", display: "flex", justifyContent: "space-around", fontWeight: "bolder", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484" }}>In Progress</h3>
                {this.props.inProgress.map(element => {
                    return <div style={{ background: "yellow", height: "40px", width: "450px", display: "flex", justifyContent: "space-evenly", fontWeight: "bolder", fontSize: "20px", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484", marginTop: "10px" }}>{element.name}
                        <button className={"styleButton"} onClick={() => {
                            this.props.deleteStatus(element.id)
                            this.props.parseArray(this.props.allGames)
                        }} > {'<<<'} </button>
                        <button className={"styleButton"} onClick={() => {
                            this.props.addStatus(element.id)
                            this.props.parseArray(this.props.allGames)
                        }} > >>> </button>
                        <button className={"styleButton"} onClick={() => this.props.deleteGame(element.id)} >Delete</button>
                    </div>

                })}
            </div>
        )
    }
}

export default InProgress