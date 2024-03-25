import { useState } from "react";
import data from "../../data/notes.json";
import { Link } from "react-router-dom";
import "./Notes.css";

function Notes({ notes, setNotes }) {
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [updatedNote, setUpdatedNote] = useState({
    title: "",
    description: "",
    createdAt: "",
  });

  function handleDelete(id) {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  }

  function handleUpdate(noteId) {
    setEditingNoteId(noteId);
    const noteToEdit = notes.find((note) => note.id === noteId);
    setUpdatedNote({
      title: noteToEdit.title,
      description: noteToEdit.description,
      createdAt: noteToEdit.createdAt,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedNote({ ...updatedNote, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedNotes = notes.map((note) =>
      note.id === editingNoteId ? updatedNote : note
    );
    setNotes(updatedNotes);
    setEditingNoteId(null);
  }

  const sortedNotes = [...notes].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="list-container">
      <Link to="/all-notes">Show All Notes : {notes.length} notes</Link>
      {sortedNotes.map((note) => (
        <div key={note.id} className="note-container">
          {editingNoteId === note.id ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={updatedNote.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                value={updatedNote.description}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="date"
                name="createdAt"
                value={updatedNote.createdAt}
                onChange={handleChange}
                required
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <h2>Title: {note.title}</h2>
              <p>Description: {note.description}</p>
              <p>Created on: {note.createdAt}</p>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
              <button onClick={() => handleUpdate(note.id)}>Update</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Notes;
