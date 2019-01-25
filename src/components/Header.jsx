import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import NoteIcon from '@material-ui/icons/NoteAdd';


const styles = theme => ({
  root: {
    width: '100%',
    alignItems: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    margin: theme.spacing.unit * 5,
    color: 'white',
    height: theme.spacing.unit * 6,
    padding: 0,
    marging: 0
  }
});


class Header extends Component {

  constructor(props) {
    super(props);
    this.onToggleChange = this.onToggleChange.bind(this);
  }

  onToggleChange() {
    const changeView = this.props.viewType === 'gridView' ? 'listView' : 'gridView';
    this.props.toggleView(changeView);
  }

  render() {
    const { classes, viewType } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NoteIcon />
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Handy-Notes
            </Typography>
            <SearchBar filterNotes={this.props.filterNotes} />
          </Toolbar> 
        </AppBar>
        <Button variant="contained" color="secondary" className={classes.button} onClick={this.onToggleChange}>
              {viewType === 'gridView' ? 'List' : 'Grid'}
        </Button>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);    
