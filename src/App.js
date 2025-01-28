import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import React, { useState } from "react";
export default function App() {
  const [newNote, setNew] = useState({
    newTitle: "",
    newDetail: "",
  });
  const [notes, setNotes] = useState([]);
  function handleChange(e) {
    const { name, value } = e.target;
    name === "Title"
      ? setNew((prev) => {
          return { ...prev, newTitle: value };
        })
      : setNew((prev) => {
          return { ...prev, newDetail: value };
        });
  }
  function createNote(e) {
    setNotes((prev) => {
      return [
        { heading: newNote.newTitle, description: newNote.newDetail },
        ...prev,
      ];
    });
    e.preventDefault();
    setNew({ newTitle: "", newDetail: "" });
  }
  return (
    <div className="App">
      <Header />
      <form onSubmit={createNote}>
        <input
          name="Title"
          type="text"
          onChange={handleChange}
          placeholder="Enter Title"
          value={newNote.newTitle}
        />
        <input
          name="Details"
          type="text"
          onChange={handleChange}
          placeholder="Enter Details"
          value={newNote.newDetail}
        />
        <button className="submitButton" type="submit">
          Create Note
        </button>
      </form>
      <div className="content">
        {notes &&
          notes.map((note) => (
            <Note title={note.heading} details={note.description} />
          ))}
        {console.log(notes)}
      </div>
      <Footer />
    </div>
  );
}
