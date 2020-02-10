import React from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

function Header(props) {
    return <header style={{ background: "black" }}><h1 style={{ color: "white" }}>Games to Play!</h1></header>
}

export default Header