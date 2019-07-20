const menuList = {
    home: {
        link: '#welcome-section', 
        title: 'Home'
    },
    aboutMe: {
        link: '#about-me', 
        title: 'About Me'
    },
    projects: {
        link: '#projects', 
        title: 'Portfolio'
    },
    contact: {
        link: '#contact', 
        title: 'Contact'
    }
}

const socialList = {
    twitter: {
        link: "https://twitter.com/mitestainer1/",
        icon: {
            value: "fab fa-twitter-square",
            stacked: false
        },
        title: "Follow me on Twitter"
    }, 
    linkedin: {
        link: "https://linkedin.com/in/mitestainer/",
        icon: {
            value: "fab fa-linkedin-in",
            stacked: true
        },
        title: "Find me on LinkedIn"
    }, 
    github: {
        link: "https://github.com/mitestainer/",
        icon: {
            value: "fab fa-github-square",
            stacked: false
        },
        title: "Check my Github repo"
    }, 
    fcc: {
        link: "https://forum.freecodecamp.org/u/mitestainer/summary/",
        icon: {
            value: "fab fa-free-code-camp",
            stacked: true
        },
        title: "Check my fCC profile page"
    }, 
    reddit: {
        link: "",
        icon: {
            value: "fab fa-reddit-square",
            stacked: false
        },
        title: "Reach me out on Reddit"
    }
}

export {menuList, socialList}