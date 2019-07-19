import React from 'react'
import './Contact.css'

export default () => {
    return (
        <div id="contact" className="cp">
            <h2>Contact</h2>
            <p>Did you find a bug in one of my pages? <i className="fas fa-bug"></i><br />Or just wanna buy me a coffee? <i
                className="fas fa-coffee"></i><br />Send me a message and let's get in touch!</p>
            <form action="null" method="post">
                <input className="form-box" type="text" name="name" placeholder="Your name" required />
                <input className="form-box" type="email" name="email" placeholder="Your e-mail" required />
                <textarea className="form-box" name="name" rows="8" cols="80" placeholder="Your message" required></textarea>
                <input type="submit" value="Send!" onClick={() => alert('Obviously this is not working yet, but thanks for trying to get in touch with me!\nInstead, why don\'t you reach me out on one of my social networks?')} />
            </form>
        </div>
    )
}