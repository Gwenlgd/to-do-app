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
      <h2>TOTAL: {notes.length} NOTES</h2>
      {sortedNotes.map((note) => (
        <div key={note.id} className="note-container">
          {editingNoteId === note.id ? (
            <form onSubmit={handleSubmit} className="form-update-notes">
              <label>
                Update your title :
                <input
                  type="text"
                  name="title"
                  value={updatedNote.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Update your description :
                <input
                  name="description"
                  value={updatedNote.description}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <div className="task-un">
                <span>{note.title}</span>
                <p>{note.description}</p>
                <p>
                  <strong>Created:</strong> {note.createdAt}
                </p>
                <button onClick={() => handleUpdate(note.id)}>Update</button>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Notes;
