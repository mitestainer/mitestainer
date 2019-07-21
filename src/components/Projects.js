import React, {Component} from 'react'
import './Projects.css'
import Label from './Label'
import Card from './Card'
import featuresList from '../db/featuresList'
import projectList from '../db/projectList'

export default class extends Component {
    state = {
        activeFeatures: []
    }
    handleSort = (feature) => {
        // debugger
        // console.log('Before: ' + this.state.activeFeatures)
        // if (this.state.activeFeatures.length === 0) {
        //     this.setState({
        //         activeFeatures: feature
        //     })
        // }
        if (this.state.activeFeatures.includes(feature)) {
            this.setState({
                activeFeatures: [...this.state.activeFeatures].filter(item => item !== feature)
            })
        } else {
            this.setState({
                activeFeatures: [...this.state.activeFeatures, feature]
            })
        }
        // console.log('After : ' + this.state.activeFeatures)
    }
    displayProjects = () => {
        const projects = Object.values(projectList)
        if (this.state.activeFeatures.length === 0) {
            return projects.map((item, i) => <Card key={i} content={item} />)
        } else {
            // return projects.map((item, i) => <Card key={i} content={item} />).filter(item => this.state.activeFeatures.includes(item.props.content.features))
            // 
            // return projects.filter(item => arr1.some(r=> arr2.includes(r))).map((item, i) => <Card key={i} content={item} />)
            // const ft = projects.map(item => item.features)[0]
            // return this.state.activeFeatures.some(el => ft.includes(el)) && projects.map((item, i) => <Card key={i} content={item} />)
            // return projects.filter(item => item.features.length > 1)
            let filtered = []
            for (let i = 0; i < projects.length; i++) {
                let ft = projects[i].features
                if (this.state.activeFeatures.some(el => ft.includes(el))) {
                    // return <Card key={i} content={projects[i]} />
                    filtered.push(projects[i])
                }
            }
            return filtered.map((item, i) => <Card key={i} content={item} />)
        }
    }
    render() {
        const features = Object.entries(featuresList)
        const {activeFeatures} = this.state
        return (
            <div id="projects" className="cp">
                <h2>Portfolio</h2>
                <p id="disclaimer">The scope of the following projects is purely educational/recreational. The content is
                either fictional or reproduced from other websites. All the images used on the projects below were
                found on the internet and all the rights are reserved to their owners.</p>
                <div>
                    <h3>Filter by feature</h3>
                    <div id="filter">
                        {features.map((item, i) => <Label key={i} feature={item} active={activeFeatures} handleSort={this.handleSort} />)}
                    </div>
                </div>
                <div class="project-box">
                    <div class="project-wrapper">
                        {this.displayProjects()}
                    </div>
                </div>
            </div>
        )
    }
}