import React from 'react'

export default class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div id="img">
                    <img src='https://res.cloudinary.com/staseface/image/upload/v1607538863/MicroFund3_bnsmpv.png'/>
                    </div>
                <nav>                 
                    <a href="#">Sign up |</a>
                    <a href="#"> &nbsp; Log in</a>
                    
                </nav>
                
            </div>
        )
    }
}