import { useState } from "react";
import "./Notes.css";

function FormNewNotes({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [showToast, setShowToast] = useState(false);

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
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
        <span>New Note</span>
        <div className="form-input">
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitle}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            id="description"
            value={description}
            onChange={handleDescription}
          />
          {/* </div>
        <div> */}
          <input
            name="createdAt"
            type="date"
            value={createdAt}
            onChange={handleCreatedAt}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {showToast && <div className="toast">Note added successfully!</div>}
    </div>
  );
}

export default FormNewNotes;
