import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 20,
          width: '50%',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
});

class SearchBar extends Component {
  /*  state = {
        query: "",
        data: [],
        filteredData: []
      };
    
      handleInputChange = event => {
        const query = event.target.value;
    
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });
    
          return {
            query,
            filteredData
          };
        });
      };
    
      getData = () => {
        fetch(`http://localhost:8080/notes`)
          .then(response => response.json())
          .then(data => {
            const { query } = this.state;
            const filteredData = data.filter(element => {
              return element.name.toLowerCase().includes(query.toLowerCase());
            });
    
            this.setState({
              data,
              filteredData
            });
          });
      };
    
      componentWillMount() {
        this.getData();
      }
      */
     render() {
        const { classes } = this.props;
        return (
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                   classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                   // value={this.state.query}
                    //onChange={this.handleInputChange}                  
                />
               
            </div>
        );
    }
}

export default withStyles(styles)(SearchBar); 