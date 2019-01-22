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

    componendDidMount() {
        // Get all the notes
    }

    handleAddNote(note) {
        this.setState((currState) => ({
            notes: currState.notes.concat([note])
        }));

        // Post a new note
    }

    handleRemoveNote(noteId) {
        const noteIndexToRemove = this.state.notes.findIndex(note => note.id === noteId);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToRemove), ...currState.notes.slice(noteIndexToRemove + 1)]
        }));

        // Delete the note
    }

    handleUpdateNote(updatedNote) {
        const noteIndexToUpdate = this.state.notes.findIndex(note => note.id === updatedNote.id);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToUpdate), {...updatedNote}, ...currState.notes.slice(noteIndexToUpdate + 1)]
        }));

        // Update the note
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