import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import * as contentful from 'contentful'
import Project from '../components/Project'
const SPACE_ID = 'af0gkf9x9zto'
const ACCESS_TOKEN = 'e1b9f3ebe1bcb511c51fa76eb176355652a37c2ca5677b6cc31a9e66985abf80'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class ProjectList extends Component {
    state = {
        projects: []
    }
    constructor() {
        super()
        this.getProjects()
    }
    getProjects = () => {
        client.getEntries({
            content_type: 'project'        })
        .then((response) => {
            this.setState({projects: response.items})
            console.log(this.state.projects)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    
    render() {
        return (
            <div id="Projects">
                { this.state.projects ? (
                    <div>
                        
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.projects.map(currentProject => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Project project={currentProject} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No projects found" }
            </div>
        )
    }
}
export default ProjectList;