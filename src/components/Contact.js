import React from 'react'
import './Contact.css'
import jobsList from '../db/jobsList'

export default () => {
    return (
        <div id="contact" className="cp">
            <h2>Contact</h2>
            <p>I can work for you! Contact me through any of these websites:</p>
            <div id="jobs">
                {jobsList.map((item, i) => {
                    return (
                        <div key={i} className='job'>
                            <a href={item.url} target='_blank' rel='noopener noreferrer' title={`Contact me on ${item.site}`}>
                                <img src={item.pic} alt={item.site} />
                            </a>
                        </div>
                    )
                })}
            </div>
            <p>...or just send me a message and let's get in touch!</p>
            <form action="null" method="post">
                <input className="form-box" type="text" name="name" placeholder="Your name" required />
                <input className="form-box" type="email" name="email" placeholder="Your e-mail" required />
                <textarea className="form-box" name="name" rows="8" cols="80" placeholder="Your message" required></textarea>
                <input type="submit" value="Send!" onClick={() => alert('Obviously this is not working yet, but thanks for trying to get in touch with me!\nInstead, why don\'t you reach me out on one of my social networks?')} />
            </form>
        </div>
    )
}