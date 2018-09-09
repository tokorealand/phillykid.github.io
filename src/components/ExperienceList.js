import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import * as contentful from 'contentful'
import Experience from '../components/Experience'
const SPACE_ID = 'af0gkf9x9zto'
const ACCESS_TOKEN = 'e1b9f3ebe1bcb511c51fa76eb176355652a37c2ca5677b6cc31a9e66985abf80'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class ExperienceList extends Component {
    state = {
        experiences: []
    }
    constructor() {
        super()
        this.getExperiences()
    }
    getExperiences = () => {
        client.getEntries({
            content_type: 'experience'        })
        .then((response) => {
            this.setState({experiences: response.items})
            console.log(this.state.experiences)
            console.log("akifhaidbiadbiadbidh")
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    
    render() {
        return (
            <div id="Experiences">
                { this.state.experiences ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.experiences.map(currentExperience => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Experience experience={currentExperience} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No experiences found" }
            </div>
        )
    }
}
export default ExperienceList;