import { useState } from "react";
import "./Notes.css";

function FormNewNotes({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleTitle = (e) => setTitle(e.currentTarget.value);
  const handleDescription = (e) => setDescription(e.currentTarget.value);
  const handleCreatedAt = (e) => setCreatedAt(e.currentTarget.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt,
    };
    addNote(newNote);
    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setCreatedAt("");
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add A New Note</span>
        <div>
          <label>
            Title
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitle}
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={handleDescription}
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Created At
            <input
              name="createdAt"
              type="date"
              value={createdAt}
              onChange={handleCreatedAt}
            />
          </label>

          <button type="submit">Add New Note</button>
        </div>
      </form>
    </div>
  );
}

export default FormNewNotes;
