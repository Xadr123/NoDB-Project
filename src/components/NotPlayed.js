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
            <div>
                <h3 style={{ color: "white", fontSize: "40px" }}>Not Played</h3>

                <div>
                    <input type="text" placeholder="Add New Game" onChange={this.handleChange} />
                    <button onClick={() => this.props.addGame(this.state.userInput)} >Add</button>
                </div>

                {this.props.notPlayed.map(element => {
                    return <div style={{ background: "red", height: "40px", width: "400px", display: "flex", justifyContent: "space-around", fontWeight: "bolder", fontSize: "20px", alignItems: "center" }}>
                        {this.state.editingID === element.id ? <div>
                            <input onChange={this.handleChange} />
                            <button onClick={() => {
                                this.props.editGame(element.id, this.state.userInput)
                                this.toggleEdit(null)
                            }} >Save</button>
                        </div> : <p onDoubleClick={() => { this.toggleEdit(element.id) }} >{element.name}</p>}
                        <button onClick={() => {
                            this.props.addStatus(element.id)
                            this.props.parseArray(this.props.allGames)
                        }} > --> </button>
                        <button onClick={() => this.props.deleteGame(element.id)} >Delete</button>
                    </div>
                })})
            </div>
        )
    }
}

export default NotPlayed