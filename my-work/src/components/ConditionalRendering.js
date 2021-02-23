import React from 'react'
function GreetingOne(props){
    return <p>please sign up</p>
}
function Greeting2(props){
    return <p>Welcome back diana</p>
}

function ConditionalRendering(props) {
    const IsLoggedIn = props.IsLoggedIn;
    if(IsLoggedIn){
        return <Greeting2/>
    }
    return <GreetingOne/>

}

export default ConditionalRendering
