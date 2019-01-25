import Note from './Note';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 8,
  },
  control: {
    padding: theme.spacing.unit * 8,
  },
  editIcon: {
    justifyContent: 'flex-end',
  },
  deleteIcon: {
    justifyContent: 'flex-end',
  }
});

class GridView extends Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(noteId) {
    this.props.handleDeleteNote(noteId);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.control} spacing={8} >
        {this.props.myNotes.map(note => {
          return (
            <Grid key={note.id} item xs={12} sm={4} xl={3}>
              <Paper>
                <Note myNotes={note} handleRemoveNote={this.deleteNote} />
                <div align="right">
                  <Link to={`edit-note/${note.id}`}>
                    <Tooltip title="Edit Note">
                      <IconButton >
                        <EditIcon color="primary" className={classes.editIcon} />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Tooltip title="Delete Note">
                    <IconButton aria-label="Delete" key={note.id} >
                      <DeleteIcon color="error" onClick={() => this.deleteNote(note.id)} className={classes.deleteIcon} />
                    </IconButton>
                  </Tooltip>
                </div>
              </Paper>
            </Grid>
          );
        })
        }
      </Grid>
    )
  }
}

export default withStyles(styles)(GridView);