import React, { Component } from 'react'

class NotPlayed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            isEditing: false,
            editingID: null
        }

        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleEdit(id) {
        console.log(id)
        this.setState({
            // isEditing: !this.state.isEditing
            editingID: id
        })
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {

        return (
            <div style={{ borderWidth: "10px", borderStyle: "ridge", height: "100vh", width: "615px", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "rgb(255, 0, 0, .50)" }}>
                <h3 style={{ color: "black", fontSize: "35px", background: "red", height: "60px", width: "400px", display: "flex", justifyContent: "space-around", fontWeight: "bolder", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484" }}>Not Played</h3>

                <div>
                    <input type="text" placeholder="Add New Game" onChange={this.handleChange} />
                    <button style={{marginLeft: "20px"}} className={"styleButton"} onClick={() => this.props.addGame(this.state.userInput)} >Add</button>
                </div>

                {this.props.notPlayed.map(element => {
                    return <div style={{ background: "red", height: "40px", width: "500px", display: "flex", justifyContent: "space-evenly", fontWeight: "bolder", fontSize: "20px", alignItems: "center", borderRadius: "40px", borderWidth: "5px", borderStyle: "ridge", borderColor: "#848484", marginTop: "10px" }}>
                        {this.state.editingID === element.id ? <div>
                            <input onChange={this.handleChange} />
                            <button className={"styleButton"} onClick={() => {
                                this.props.editGame(element.id, this.state.userInput)
                                this.toggleEdit(null)
                            }} >Save</button>
                        </div> : <p onDoubleClick={() => { this.toggleEdit(element.id) }} >{element.name}</p>}
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

export default NotPlayed