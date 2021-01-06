import React from "react";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <h1> Keeper </h1>
      {notes.map(function(note) {
        return(
          <Note
            title={note.title}
            content={note.content}
          />
        );
      })}
      <p> Copyright © 2021 </p>
    </div>
  );
}

export default App;
