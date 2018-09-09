import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import * as contentful from 'contentful'
import { withStyles } from '@material-ui/core/styles';
import PLanguage from '../components/P_Language'
const SPACE_ID = 'af0gkf9x9zto'
const ACCESS_TOKEN = 'e1b9f3ebe1bcb511c51fa76eb176355652a37c2ca5677b6cc31a9e66985abf80'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})


const styles = theme => ({
    grid: {
      textAlign: 'center',
      margin: 'auto',
      aligncontent:'center',
      justifyitems: 'center',
    },
  });
class PLanguageList extends Component {
    state = {
        p_languages: []
    }
    constructor() {
        super()
        this.getP_languages()
    }
    getP_languages = () => {
        client.getEntries({
            content_type: 'pLanguage'        })
        .then((response) => {
            this.setState({p_languages: response.items})
            console.log(this.state.p_languages)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    
    render() {
        return (
            <div id="P_languages">
                { this.state.p_languages ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.p_languages.map(currentP_language => (
                                <Grid item xs={6} sm={3} lg={2} xl={1}>
                                    <PLanguage p_language={currentP_language} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No planguages found" }
            </div>
        )
    }
}
export default withStyles(styles)(PLanguageList);