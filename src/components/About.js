import React from 'react'
import './About.css'

export default () => {
    const age = () => {
        const mine = new Date(1992, 0, 31)
        return Math.round((Date.now() - mine.getTime()) / ((1000*60) * 60 * 24 * 365))
    }
    return (
        <div id="about-me" className="cp">
            <h2>About me</h2>
            <p>Thanks for stopping by. This is the place where you can find my projects and get to know me better. I'm {age()},
            Brazilian (can't play soccer well though), digital marketing enthusiast and tech geek. Wrote my first line of
            code when I was nine (it was my name inside a h1 tag lol) and spent some years playing around with the pages
            I used to save from the internet - I kind of liked making them look the way I wanted.</p>
            <img src="https://media.giphy.com/media/Cz6TlrRVVyv9S/giphy.gif" alt="Yelling at a nerd" />
            <p>Eventually, I stopped coding for some reason until I got back at the beginning of 2018. I rediscovered how
            fascinating coding can be. Now I can not just write plain HTML but also style my pages using CSS and make
            them interactive with JS. I'm also giving my first steps into frameworks. Hopefully, I'll get even better at
            this as the time goes by!</p>
        </div>
    )
}