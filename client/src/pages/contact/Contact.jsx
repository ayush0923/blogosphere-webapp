import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div>
            <img className="aboutimage" src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=pexels-pixabay-261662.jpg&fm=jpg" alt="" />
            <div className="abouttile">
                <div className="abouth1">Publish your passions, your way</div>
                <div className="abouth2">Create a unique and beautiful blog. It’s easy and free</div>
                <div className="aboutcontact">
                    <i className="topIcon2 fab fa-facebook-square"></i>
                    <i className="topIcon2 fab fa-twitter-square"></i>
                    <i className="topIcon2 fab fa-pinterest-square"></i>
                    <i className="topIcon2 fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Contact
