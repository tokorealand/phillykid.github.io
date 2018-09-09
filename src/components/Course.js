import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });
  

  function Course (props) {
    const { classes } = props;
    return (
        <div>
            { props.course ? (
                <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{props.course.fields.title}</Typography>
                </ExpansionPanelSummary>
<ExpansionPanelDetails>
                    <Typography component="p">
                        {props.course.fields.description}
                    </Typography>
</ExpansionPanelDetails>
</ExpansionPanel>) : null}
        </div>
    )
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default  withStyles(styles)(Course);