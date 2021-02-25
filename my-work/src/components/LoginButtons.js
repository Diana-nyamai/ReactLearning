import React from 'react'

function LoginButton(){
    return <div>
    <button>Log IN </button>
    </div>
}

function LogoutButton(){
    return <div>
    <button>Log Out</button>
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
