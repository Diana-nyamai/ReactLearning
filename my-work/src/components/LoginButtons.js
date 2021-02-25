import React from 'react'

function LoginButton(props){
    return <div>
    <button onClick={props.onClick}>Log IN </button>
    </div>
}

function LogoutButton(props){
    return <div>
    <button onClick={props.onClick}>Log Out</button>
    </div>
}


function LoginButtons() {
    return (
        <div>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )
}

export default LoginButtons
