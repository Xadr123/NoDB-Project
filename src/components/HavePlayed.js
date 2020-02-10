import React, { Component } from 'react'

class HavePlayed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3 style={{color: "white", fontSize: "40px"}}>Have Played</h3>
                {this.props.havePlayed.map(element => {
                    return <div style={{background: "green", height: "40px", width: "400px", display: "flex", justifyContent: "space-around", fontWeight: "bolder", fontSize: "20px", alignItems: "center"}}>{element.name}
                    <button onClick={() => this.props.deleteGame(element.id)} >Delete</button>
                    </div>
                    
                })}
            </div>
        )
    }
}

export default HavePlayed