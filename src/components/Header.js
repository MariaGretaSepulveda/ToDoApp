import React from 'react'


const Header = (props) => {
    return (
        <div>

            <h1> Greta's Super Cool To Do App  </h1>
            <h4>{props.subtitle}</h4>
        </div>
    )
}




export default Header