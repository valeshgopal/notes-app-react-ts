import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import { Row, Col, Container } from 'react-bootstrap';

const getNotes = (): Note[] | [] => {
  const localStorageItems = localStorage.getItem('notes');
  return localStorageItems ? JSON.parse(localStorageItems) : [];
};

function App() {
  const [notes, setNotes] = useState<Note[] | []>(getNotes());

  return (
    <div className='App'>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        {notes.length > 0 && (
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
