import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import media from "styled-media-query";
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../luislogo.png' // relative path to image 
import'./NavBar.css'


const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#000000'
        },
        secondary: {
            main: '#000000'
        }
      },
});

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;

  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
  width: 50px;
  height: 50px;
`}

${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  width: 100px;
  height: 100px;
`}


`;


const NavBar = () => {
    return(

        <div id="nav">
        <MuiThemeProvider theme={theme}>

        <AppBar position="sticky">
            <Toolbar>
            <Logo src={logo} alt="Logo"/>
            </Toolbar>
        </AppBar>
        </MuiThemeProvider>

        </div>
    )
}
export default NavBar;