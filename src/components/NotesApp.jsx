import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import NoteTaker from './NoteTaker';
import NotesContainer from './NotesContainer';
//import pink from '@material-ui/core/colors/pink';
import {black,deepPurple } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
//const pinkColor=pink[400];


const theme = createMuiTheme({
    palette: {
       primary:deepPurple,
       secondary:black
},
    typography: {
        useNextVariants: true,
    },
});

class NotesApp extends Component {
    render() {
        const { notes, handleAddNote, handleRemoveNote } = this.props; 
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        <NoteTaker handleAddNote={handleAddNote} />
                    </Grid>
                    <Grid item xs={12}>
                        <NotesContainer notes={notes} handleRemoveNote={handleRemoveNote} />
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default NotesApp;