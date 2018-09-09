import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import * as contentful from 'contentful'
import Leadership from '../components/Leadership'
const SPACE_ID = 'af0gkf9x9zto'
const ACCESS_TOKEN = 'e1b9f3ebe1bcb511c51fa76eb176355652a37c2ca5677b6cc31a9e66985abf80'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class LeadershipList extends Component {
    state = {
        leaderships: []
    }
    constructor() {
        super()
        this.getLeaderships()
    }
    getLeaderships = () => {
        client.getEntries({
            content_type: 'leadership'        })
        .then((response) => {
            this.setState({leaderships: response.items})
            console.log(this.state.leaderships)
            console.log("akifhaidbiadbiadbidh")
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    
    render() {
        return (
            <div id="Leaderships">
                { this.state.leaderships ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.leaderships.map(currentLeadership => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Leadership leadership={currentLeadership} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No leaderships found" }
            </div>
        )
    }
}
export default LeadershipList;