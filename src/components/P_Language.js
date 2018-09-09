import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';



const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });
  

  function PLanguage (props) {
    const { classes } = props;
    return (
        <div>
            { props.p_language ? (
                 <Chip
                 avatar={<Avatar src={props.p_language.fields.languageLogo.fields.file.url} />}
                 label={props.p_language.fields.title}
                 className={classes.chip}
                 variant="outlined"
               />) : null}
        </div>
    )
}

PLanguage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default  withStyles(styles)(PLanguage);