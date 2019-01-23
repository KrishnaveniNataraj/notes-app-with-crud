import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesApp from '../components/NotesApp';
import EditNote from '../components/EditNote';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.handleUpdateNote = this.handleUpdateNote.bind(this);
      
    }

    componentDidMount() {
        console.log('hi');
        fetch('http://localhost:8080/notes')
            .then(function (res) {
                return res.json()
            }).then(notes=>this.setState({notes}));
               
        
        // Get all the notes
       /* fetch('http://localhost:8080/notes')
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result.items
            });

          },
          
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )*/
    }
  
     handleAddNote(note) {
        this.setState((currState) => ({
            notes: currState.notes.concat([note])
        }));

        console.log('Posting request to GitHub API...',note);
       fetch('http://localhost:8080/notes', {
     
    method: 'POST',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(note)
  }).then(response => {
      if(response.ok)
        return response.json();
    
  }).then(data => {
          console.log('Created note:',data);
  })
    }


    handleRemoveNote(noteId) {
        const noteIndexToRemove = this.state.notes.findIndex(note => note.id === noteId);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToRemove), ...currState.notes.slice(noteIndexToRemove + 1)]
        }));
        // Delete the note
        fetch(`http://localhost:8080/notes/${noteId}`, {    
                    method: 'DELETE',
         }).then(response=>response.json());
    }

    handleUpdateNote(updatedNote) {
        const noteIndexToUpdate = this.state.notes.findIndex(note => note.id === updatedNote.id);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToUpdate), {...updatedNote}, ...currState.notes.slice(noteIndexToUpdate + 1)]
        }));

        fetch(`http://localhost:8080/notes/${updatedNote.id}`, {    
                    method: 'PUT',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(updatedNote),

         }).then(response=>response.json());
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route 
                        path="/home" 
                        render={(props) => (<NotesApp
                                                {...props}
                                                notes={this.state.notes}
                                                handleAddNote={this.handleAddNote}
                                                componendDidMount={this.componendDidMount}
                                                handleRemoveNote={this.handleRemoveNote}
                                            />)}
                        exact 
                    />
                    <Route 
                        path="/edit-note/:id" 
                        render={(props) => <EditNote
                                                {...props}
                                                notes={this.state.notes}
                                                handleUpdateNote={this.handleUpdateNote} 
                                            />} 
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;