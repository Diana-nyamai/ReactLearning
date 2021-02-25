import React from 'react'
function GreetingOne(){
    return <p>please sign up</p>
}
function Greeting2(){
    return <p>Welcome back diana</p>
}

function ConditionalRendering(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <Greeting2/>
    }
    else{
        return <GreetingOne/>
    }
    

}

export default ConditionalRendering
