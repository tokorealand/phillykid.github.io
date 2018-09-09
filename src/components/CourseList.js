import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import * as contentful from 'contentful'
import Course from '../components/Course'
const SPACE_ID = 'af0gkf9x9zto'
const ACCESS_TOKEN = 'e1b9f3ebe1bcb511c51fa76eb176355652a37c2ca5677b6cc31a9e66985abf80'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class CourseList extends Component {
    state = {
        courses: []
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'course'        })
        .then((response) => {
            this.setState({courses: response.items})
            console.log(this.state.courses)
            console.log("akifhaidbiadbiadbidh")
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    
    render() {
        return (
            <div id="Courses">
                { this.state.courses ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CourseList;